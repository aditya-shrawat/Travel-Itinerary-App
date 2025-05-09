import React, { useContext } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { PiClockCountdownBold } from "react-icons/pi";
import {CustomThemeContext} from '../Context/CustomThemeProvider'

const HotelInfoCard = ({hotel}) => {
    const {theme} = useContext(CustomThemeContext)

  return (
    <div className={`w-[198px] h-60 flex-shrink-0 ${(theme==='dark')?`dark:border-none dark:bg-[#333333]`:`bg-[#FDFBF7] border-[1px] border-[#BFBFBF]`} rounded-2xl overflow-hidden cursor-pointer group `}>
        <div className="w-full h-32 relative overflow-hidden">
            <img
            src={`${hotel.hotelImg}`}
            className="w-full h-full group-hover:scale-110 transition-transform duration-300 object-cover"
            />
            <div className="h-4 w-[74px] flex items-center text-[8px] text-white bg-[#3643FB] rounded-md px-1 absolute bottom-1 left-1 ">
                <div className="mr-1 text-[12px]">
                    <IoMdStar />
                </div>
                <h3>{`${hotel.rating} Very Good`}</h3>
            </div>
        </div>
        <div className="w-full px-2 py-3">
            <div className="w-full">
                <h3 className="text-[14px] font-semibold">{hotel.hotelName}l</h3>
                <h3 className="text-[12px]">
                    <span className="font-semibold">Check in:</span>{" "}
                    <span>{hotel.checkIn}</span>
                </h3>
                <h3 className="text-[12px]">
                    <span className="font-semibold">Check out:</span>{" "}
                    <span>{hotel.checkOut}</span>
                </h3>
            </div>
            <div className="w-full mt-1 text-base font-semibold flex justify-between">
                <h3>{hotel.nights}</h3>
                <div className="w-auto">
                    {
                    (hotel.status==='Confirmed')?
                    <div className="text-[#90EB61] flex items-center">
                        <FaRegCircleCheck className="mr-1" />
                        Confirmed
                    </div>
                    :
                    <div className="text-[#FF6525] flex items-center">
                        <PiClockCountdownBold className="mr-1" />
                        Pending
                    </div>
                    }
                </div>
            </div>
        </div>
    </div>
  );
};

export default HotelInfoCard;
