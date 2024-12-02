import os
from ultralytics import YOLO
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import requests
from PIL import Image
import io
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from io import BytesIO

import cloudinary
import cloudinary.uploader


cloud_name = os.getenv("CLOUD_NAME")
api_key = os.getenv("API_KEY")
api_secret = os.getenv("API_SECRET")

cloudinary.config(
    cloud_name=cloud_name, 
    api_key=api_key, 
    api_secret=api_secret
)

# Load YOLO model
model_path = "best.pt"  # Path to your model
model = YOLO(model_path)

# Create a folder to save the processed images
OUTPUT_FOLDER = 'processed_images'
if not os.path.exists(OUTPUT_FOLDER):
    os.makedirs(OUTPUT_FOLDER)

app = Flask(__name__)
CORS(app)

@app.route("/process", methods=['POST'])
def process():
    try:
        # Parse JSON data from the request
        data = request.json
        image_url = data.get('image_url')

        # Validate image URL
        if not image_url:
            return jsonify({"error": "Image URL is required"}), 400

        # Fetch the image from the URL
        response = requests.get(image_url)
        if response.status_code != 200:
            return jsonify({"error": "Failed to fetch image from URL"}), 400

        # Perform inference using the YOLO model
        results = model.predict(image_url)

        # Save the annotated image with bounding boxes
        output_filename = "output.jpg"
        output_path = os.path.join(OUTPUT_FOLDER, output_filename)

        # Plot the results and save the image
        annotated_image = results[0].plot()  # Get the annotated image
        plt.figure(figsize=(10, 10))
        plt.imshow(annotated_image)
        plt.axis("off")  # Hide axes for better visualization
        plt.title("YOLO Predictions")

        # Save without opening a GUI window
        plt.savefig(output_path, format="jpg", bbox_inches='tight', pad_inches=0)
        plt.close()
        if os.path.exists(output_path):
            print(f"File {output_path} exists, proceeding with upload.")
        # Upload the processed image to Cloudinary
        upload_result = cloudinary.uploader.upload("processed_images/output.jpg", folder="bones/server")

        # Get the URL of the uploaded image
        cloudinary_url = upload_result['secure_url']

        if os.path.exists(output_path):
            os.remove(output_path)

        # Return the Cloudinary URL as a response
        return jsonify({"image_url": cloudinary_url})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
