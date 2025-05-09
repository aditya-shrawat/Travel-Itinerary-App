import React, { useContext, useEffect, useRef } from 'react'
import { FiSearch } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { FiHome } from "react-icons/fi";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import {CustomThemeContext} from '../Context/CustomThemeProvider'

const QuickLinks = ({setShowQuickLinks}) => {
    const {theme,toggleTheme} = useContext(CustomThemeContext)
    const divRef = useRef(null)

    useEffect(()=>{
        const handleOutsideClick = (e)=>{
            if( divRef.current && !divRef.current.contains(e.target) ){
                setShowQuickLinks(false);
            }
        }

        document.addEventListener('mousedown',handleOutsideClick) ;

        return ()=>{
            document.removeEventListener('mousedown',handleOutsideClick)
        }
    },[setShowQuickLinks]);

  return (
    <div ref={divRef} className={`w-64 h-auto p-3 ${(theme==='dark'?`dark:bg-[#1D1F24]`:`bg-[#FDFBF7]`)} rounded-2xl border-2 ${(theme==='dark'?`dark:border-[#D1F462]`:`border-[#BFBFBF]`)} absolute top-18 right-4 z-50`}>
        <div className='w-full h-auto '>
            {/* Navigation buttons for different pages */}
            <div className='w-full h-auto hidden sm:block space-y-1 mb-1'>
                <div className='flex items-center text-lg hover:text-[#313DDF] px-2 py-1 cursor-pointer'>
                    <GoPerson className="mr-3 text-xl" />Profile
                </div>
                <div className='flex items-center text-lg hover:text-[#313DDF] px-2 py-1 cursor-pointer'>
                    <FiSearch className="mr-3 text-xl" />Search
                </div>
                <div className='flex items-center text-lg hover:text-[#313DDF] px-2 py-1 cursor-pointer'>
                    <FiHome className="mr-3 text-xl" />home
                </div>
                <div className='flex items-center text-lg hover:text-[#313DDF] px-2 py-1 cursor-pointer'>
                    <MdAdd className="mr-3 text-2xl" />Plan Journey
                </div>
                <div className='flex items-center text-lg hover:text-[#313DDF] px-2 py-1 cursor-pointer'>
                    <IoIosHeartEmpty className="mr-3 text-xl" />Favorites
                </div>
            </div>
            {/* Theme button */}
            <div className='w-full h-auto'>
                <div onClick={()=>{setShowQuickLinks(false);toggleTheme()}} className='flex items-center text-lg hover:text-[#313DDF] px-2 py-1 cursor-pointer'>
                    <WiMoonAltThirdQuarter className="mr-3 text-xl" />Theme
                </div>
            </div>
        </div>
    </div>
  )
}

export default QuickLinks