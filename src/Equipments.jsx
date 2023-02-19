import React from "react";
import imga from "./Classes/imga.jpg";
import imgb from "./Classes/imgb.jpg";
import imgc from "./Classes/imgc.jpg";
import imgd from "./Classes/imga.jpg";
import imge from "./Classes/imge.jpg";
function Equipments() {
  return (
    <div className="text-4xl font-extrabold text-center duration-500 hover:translate-y-2">
      <p className="duration-500 cursor-pointer hover:text-orange-500">
        {" "}
        Equipments that are available:
      </p>
      <div className="grid grid-cols-1 gap-2 mx-6 mt-8 mb-4">
        <span className="object-cover duration-500 aspect-square hover:translate-x-2 hover:translate-y-2">
          <img src={imga} className="w-full h-full rounded-md shadow-md" />
        </span>
        <span className="object-cover duration-500 aspect-square hover:translate-x-2 hover:translate-y-2">
          <img src={imgb} className="w-full h-full rounded-md shadow-md" />
        </span>{" "}
        <span className="object-cover duration-500 aspect-square hover:translate-x-2 hover:translate-y-2">
          <img src={imgc} className="w-full h-full rounded-md shadow-md" />
        </span>
        <span className="object-cover duration-500 aspect-square hover:translate-x-2 hover:translate-y-2">
          <img src={imgd} className="w-full h-full rounded-md shadow-md" />
        </span>
        <span className="object-cover duration-500 aspect-square hover:translate-x-2 hover:translate-y-2">
          <img src={imge} className="w-full h-full rounded-md shadow-md" />
        </span>
      </div>
    </div>
  );
}

export default Equipments;
