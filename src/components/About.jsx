import React from 'react'

const About = () => {
  return (
    <div>
      <div className='flex flex-col mt-5 mx-5 items-center'>
        <h1 className='font-bold bg-gradient-to-r  from-green-400 to-blue-700 bg-clip-text text-transparent text-[40px]'>Dataset description</h1>
        <div class="max-w-4xl mx-auto p-6">
          <header class="text-center mb-6">
            <h1 class="text-3xl font-bold text-blue-600">GRAZPEDWRI-DX Dataset</h1>
          </header>

          <section class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-semibold mb-4 text-gray-700">Key Highlights</h2>
            <ul class="list-disc list-inside space-y-2">
              <li><span class="font-bold">Total Studies:</span> 10,643 studies featuring <span class="font-bold">20,327 images</span> (posteroanterior and lateral views).</li>
              <li><span class="font-bold">Annotations:</span>
                <ul class="list-disc list-inside ml-6">
                  <li>74,459 image tags.</li>
                  <li>67,771 labeled objects (e.g., fractures, periosteal reactions).</li>
                </ul>
              </li>
              <li><span class="font-bold">Image Format:</span> De-identified and converted to <span class="font-bold">16-bit grayscale PNG</span> from DICOM.</li>
              <li><span class="font-bold">Basic Info:</span> Includes patient age and sex.</li>
              <li><span class="font-bold">Annotation Details:</span> Marked by pediatric radiologists using lines, bounding boxes, or polygons for precise identification of pathologies.</li>
            </ul>
          </section>

          <section class="mt-6 bg-white rounded-lg shadow-md p-6">
            <p class="text-gray-700">This publicly available dataset aims to advance computer vision research and reduce the time required for specialized medical training in radiograph interpretation.</p>
          </section>
        </div>
      </div>
      <div className='flex flex-col mt-5 mx-5 items-center'>
        <h1 className='font-bold bg-gradient-to-r  from-blue-400 to-purple-700 bg-clip-text text-transparent text-[40px]'>Model details</h1>
        <div class="max-w-6xl mx-auto p-6">
          <header class="text-center mb-8">
            <h1 class="text-3xl font-bold text-blue-600">Training Parameters</h1>
            <p class="text-gray-600">Key parameters for configuring your model training.</p>
          </header>

          <div class="overflow-x-auto bg-white rounded-lg shadow-md p-6">
            <table class="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr class="bg-gray-200 text-left">
                  <th class="border border-gray-300 px-4 py-2 font-bold text-gray-700">Key</th>
                  <th class="border border-gray-300 px-4 py-2 font-bold text-gray-700">Value</th>
                  <th class="border border-gray-300 px-4 py-2 font-bold text-gray-700">Description</th>
                </tr>
              </thead>
              <tbody class="text-gray-600">
                <tr>
                  <td class="border border-gray-300 px-4 py-2">model</td>
                  <td class="border border-gray-300 px-4 py-2">None</td>
                  <td class="border border-gray-300 px-4 py-2">Path to model file, i.e. yolov8n.pt, yolov8n.yaml</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-2">data</td>
                  <td class="border border-gray-300 px-4 py-2">None</td>
                  <td class="border border-gray-300 px-4 py-2">Path to data file, i.e. coco128.yaml</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">epochs</td>
                  <td class="border border-gray-300 px-4 py-2">100</td>
                  <td class="border border-gray-300 px-4 py-2">Number of epochs to train for</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-2">patience</td>
                  <td class="border border-gray-300 px-4 py-2">50</td>
                  <td class="border border-gray-300 px-4 py-2">Epochs to wait for no observable improvement for early stopping of training</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">batch</td>
                  <td class="border border-gray-300 px-4 py-2">16</td>
                  <td class="border border-gray-300 px-4 py-2">Number of images per batch (-1 for AutoBatch)</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-2">imgsz</td>
                  <td class="border border-gray-300 px-4 py-2">640</td>
                  <td class="border border-gray-300 px-4 py-2">Size of input images as integer, i.e. 640, 1024</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">save</td>
                  <td class="border border-gray-300 px-4 py-2">True</td>
                  <td class="border border-gray-300 px-4 py-2">Save train checkpoints and predict results</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">workers</td>
                  <td class="border border-gray-300 px-4 py-2">8</td>
                  <td class="border border-gray-300 px-4 py-2">Number of worker threads for data loading (per RANK if DDP)</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-2">pretrained</td>
                  <td class="border border-gray-300 px-4 py-2">True</td>
                  <td class="border border-gray-300 px-4 py-2">(bool or str) Whether to use a pretrained model (bool) or a model to load weights from (str)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">optimizer</td>
                  <td class="border border-gray-300 px-4 py-2">'auto'</td>
                  <td class="border border-gray-300 px-4 py-2">Optimizer to use, choices=SGD, Adam, Adamax, AdamW, NAdam, RAdam, RMSProp, auto</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-2">resume</td>
                  <td class="border border-gray-300 px-4 py-2">False</td>
                  <td class="border border-gray-300 px-4 py-2">Resume training from last checkpoint</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-2">val</td>
                  <td class="border border-gray-300 px-4 py-2">True</td>
                  <td class="border border-gray-300 px-4 py-2">Validate/test during training</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
      <div class="max-w-6xl mx-auto p-6">
        <header class="text-center mb-8">
          <h1 class="text-3xl font-bold text-blue-600">Validation Parameters</h1>
          <p class="text-gray-600">Key arguments for validation during training.</p>
        </header>

        <div class="overflow-x-auto bg-white rounded-lg shadow-md p-6">
          <table class="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr class="bg-gray-200 text-left">
                <th class="border border-gray-300 px-4 py-2 font-bold text-gray-700">Key</th>
                <th class="border border-gray-300 px-4 py-2 font-bold text-gray-700">Value</th>
                <th class="border border-gray-300 px-4 py-2 font-bold text-gray-700">Description</th>
              </tr>
            </thead>
            <tbody class="text-gray-600">
              <tr>
                <td class="border border-gray-300 px-4 py-2">data</td>
                <td class="border border-gray-300 px-4 py-2">None</td>
                <td class="border border-gray-300 px-4 py-2">Path to data file, i.e. coco128.yaml</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 px-4 py-2">imgsz</td>
                <td class="border border-gray-300 px-4 py-2">640</td>
                <td class="border border-gray-300 px-4 py-2">Size of input images as integer, i.e. 640, 1024</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">batch</td>
                <td class="border border-gray-300 px-4 py-2">16</td>
                <td class="border border-gray-300 px-4 py-2">Number of images per batch (-1 for AutoBatch)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 px-4 py-2">save_json</td>
                <td class="border border-gray-300 px-4 py-2">False</td>
                <td class="border border-gray-300 px-4 py-2">Save results to JSON file</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">save_hybrid</td>
                <td class="border border-gray-300 px-4 py-2">False</td>
                <td class="border border-gray-300 px-4 py-2">Save hybrid version of labels (labels + additional predictions)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 px-4 py-2">conf</td>
                <td class="border border-gray-300 px-4 py-2">0.001</td>
                <td class="border border-gray-300 px-4 py-2">Object confidence threshold for detection</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2">iou</td>
                <td class="border border-gray-300 px-4 py-2">0.6</td>
                <td class="border border-gray-300 px-4 py-2">Intersection over union (IoU) threshold for NMS</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
