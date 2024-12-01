import React from 'react';

const Sample = () => {
  const imags = [
    "/sample1.jpg",
    "/sample2.jpg",
    "/sample3.jpg",
    "/sample4.jpg",
    "/sample5.jpg",
  ];
  return (
    <div className="mx-5 mt-5">
      <div>
        <h1 className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent font-bold text-[40px]">
          Sample predictions of the model
        </h1>
      </div>
      <div>
        <ul className="grid grid-cols-2 gap-4 mt-4">
          {imags.map((img, index) => (
            <li key={index} className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={img}
                alt={`Prediction ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sample;
