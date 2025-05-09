import React from "react";

const ActivityCard = ({touristPlace}) => {
  return (
    <div className="w-full md:min-w-54 md:max-w-96 flex md:flex-col bg-[#FDFBF7] rounded-lg overflow-hidden border-[1px] border-gray-300">
      <div className="max-w-32 min-w-32 min-h-32 max-h-full md:h-44 md:w-full md:min-w-full ">
        <img
          src={`${touristPlace.placeImg}`}
          className="w-full h-full object-cover rotate-y-180"
        />
      </div>
      <div className="w-full p-2 md:py-3 ml-1 flex flex-col justify-between">
        <h3 className="text-sm font-semibold break-words">
          {touristPlace.place}
        </h3>
        <div className="w-full mt-2 space-y-0.5">
          <h3 className="text-[12px] break-words">
            <span className="font-semibold">Timing: </span>
            <span className="">{touristPlace.time}</span>
          </h3>
          <h3 className="text-[12px] break-words">
            <span className="font-semibold">Duration: </span>
            <span className="">{touristPlace.duration}</span>
          </h3>
          <h3 className="text-[12px] break-words">
            <span className="font-semibold">Pick up: </span>
            <span className="">{touristPlace.pickupLocation}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
