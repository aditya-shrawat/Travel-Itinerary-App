import React, { useContext, useEffect, useState } from "react";
import { RiMapPinLine } from "react-icons/ri";
import { ImMan } from "react-icons/im";
import { ImManWoman } from "react-icons/im";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { GiThreeFriends } from "react-icons/gi";
import { FiCalendar } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import {CustomThemeContext} from '../Context/CustomThemeProvider'

const TravelPlanner = ({onClose}) => {
  const [isShown, setIsShown] = useState(false);
  const {theme} = useContext(CustomThemeContext)
  
  useEffect(() => {
    // small delay to update state changes
    const timer = setTimeout(() => {
      setIsShown(true);
    }, 10);
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsShown(false);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  return (
    <div className=" fixed inset-0 z-50 flex sm:items-center justify-center  ">
      <div className={`w-full h-screen px-4 py-12 ${(theme==='dark'?`dark:bg-[#181517]`:`bg-[#FDFBF7]`)} transform transition-all duration-300 ease-out
            ${(isShown)?`translate-y-0` :`translate-y-full`}` }>
        <div className="h-full flex flex-col justify-between relative">
          {/* Button to close TravelPlanner */}
          <div onClick={handleClose} className=" text-xl w-auto h-auto absolute -top-9 right-0">
            <MdOutlineClose />
          </div>

          <div>
            {/* heading */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold">
                Plan Your Journey, Your Way!
              </h1>
              <p className={`text-sm ${(theme!=='dark')&&`text-[#666666]`}`}>
                Let's create your personalised travel experience
              </p>
            </div>

            <div className="space-y-6">
              {/* Enter location */}
              <div>
                <label className="block text-lg font-semibold">
                  Where would you like to go?
                </label>
                <div className={`mt-2 p-2 ${(theme==='dark')?`bg-[#333333] border-none`:`border-[1px] border-[#BFBFBF] text-[#666666]`} rounded-lg flex items-center`}>
                  <div className=" flex items-center">
                    <RiMapPinLine className={`text-lg ${(theme!=='dark')&&`text-[#666666]`}`} />
                  </div>
                  <input
                    id="destination"
                    placeholder="Enter Destination"
                    className="w-full ml-2 text-base outline-none border-none "
                  />
                </div>
              </div>

              {/* Select duration */}
              <div>
                <label
                  htmlFor="duration"
                  className="block text-lg font-semibold "
                >
                  How long will you stay?
                </label>
                <div className={`mt-2 p-2 ${(theme==='dark')?`bg-[#333333] border-none`:`border-[1px] border-[#BFBFBF] text-[#666666]`} rounded-lg flex items-center`}>
                  <FiCalendar className="mr-2 text-lg" />
                  <select className="w-full text-base outline-none border-none">
                    <option >Select Duration</option>
                  </select>
                </div>
              </div>

              {/* traveling with */}
              <div>
                <label className="block text-lg font-semibold ">
                  Who are you traveling with?
                </label>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  <button className={`text-lg ${(theme==='dark')?`bg-[#333333] border-none`:`border-[1px] border-[#BFBFBF]`} rounded-lg flex items-center justify-center py-2`}>
                    <span className="mr-2 text-xl"><ImMan /></span>
                    Solo
                  </button>
                  <button className={`text-lg ${(theme==='dark')?`bg-[#333333] border-none`:`border-[1px] border-[#BFBFBF]`} rounded-lg flex items-center justify-center py-2`}>
                    <span className="mr-2 text-xl"><ImManWoman /></span>
                    Couple
                  </button>
                  <button className={`text-lg ${(theme==='dark')?`bg-[#333333] border-none`:`border-[1px] border-[#BFBFBF]`} rounded-lg flex items-center justify-center py-2`}>
                    <span className="mr-2 text-xl"><MdOutlineFamilyRestroom /></span>
                    Family
                  </button>
                  <button className={`text-lg ${(theme==='dark')?`bg-[#333333] border-none`:`border-[1px] border-[#BFBFBF]`} rounded-lg flex items-center justify-center py-2`}>
                    <span className="mr-2 text-xl"><GiThreeFriends /></span>
                    Friends
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Countinue button */}
          <div className="w-full py-3 bg-[#3643FB] font-semibold text-white rounded-lg flex justify-center items-center">
            Continue
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPlanner;
