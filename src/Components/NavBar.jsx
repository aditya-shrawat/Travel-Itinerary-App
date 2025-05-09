import React, { useState } from 'react'
import { FiHome } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import TravelPlanner from './TravelPlanner';

const NavBar = () => {
    const [showTravelPlanner,setShowTravelPlanner] = useState(false)
    const [activeTab, setActiveTab] = useState('home');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        if (tab === 'add') {
            setShowTravelPlanner(true);
        }
    };


  return (
    <nav className='w-full h-auto sm:hidden  fixed bottom-0 left-0 z-40'>
        <div className='w-full h-[72px] p-3 px-4 bg-[#FDFBF7] flex justify-between'>

            <div onClick={() => handleTabClick('home')}
                 className={`w-12 h-12 ${ activeTab === 'home' 
                        ? 'bg-[#3643FB4D] text-[#313DDF]' 
                        : 'text-[#676D75] hover:text-[#313DDF]'} rounded-full text-2xl flex justify-center items-center 
                 `}>
                <FiHome />
            </div>
            <div onClick={() => handleTabClick('search')} 
                 className={`w-12 h-12 ${ activeTab === 'search' 
                    ? 'bg-[#3643FB4D] text-[#313DDF]' 
                    : 'text-[#676D75] hover:text-[#313DDF]'} rounded-full text-2xl flex justify-center items-center 
                 `}>
                <FiSearch />
            </div>
            <div onClick={() => handleTabClick('add')}
                 className={`w-12 h-12 rounded-full text-4xl text-[#313DDF] ${ activeTab === 'add' 
                    &&'bg-[#3643FB4D]'} flex justify-center items-center `}>
                <MdAdd />
            </div>
            <div onClick={() => handleTabClick('favorites')}
                 className={`w-12 h-12 ${ activeTab === 'favorites' 
                    ? 'bg-[#3643FB4D] text-[#313DDF]' 
                    : 'text-[#676D75] hover:text-[#313DDF]'} rounded-full text-2xl flex justify-center items-center 
                 `}>
                <IoIosHeartEmpty />
            </div>
            <div onClick={() => handleTabClick('profile')} 
                 className={`w-12 h-12 ${ activeTab === 'profile' 
                    ? 'bg-[#3643FB4D] text-[#313DDF]' 
                    : 'text-[#676D75] hover:text-[#313DDF]'} rounded-full text-2xl flex justify-center items-center 
                 `}>
                <GoPerson />
            </div>

        </div>
        {
        (showTravelPlanner) && <TravelPlanner  />
        }
    </nav>
  )
}

export default NavBar