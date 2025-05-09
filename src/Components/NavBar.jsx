import React, { useContext, useState } from 'react'
import { FiHome } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import TravelPlanner from './TravelPlanner';
import {CustomThemeContext} from '../Context/CustomThemeProvider'

const NavBar = () => {
    const [showTravelPlanner,setShowTravelPlanner] = useState(false)
    const [activeTab, setActiveTab] = useState('home');
    const {theme,toggleTheme} = useContext(CustomThemeContext)

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        if (tab === 'add') {
            setShowTravelPlanner(true);
        }
    };

    const closeTravelPlanner = () => {
        setActiveTab('home')
        setShowTravelPlanner(false)
    };


  return (
    <nav className='w-full h-auto sm:hidden  fixed bottom-0 left-0 z-40'>
        <div className={`w-full h-[72px] p-3 px-4 ${(theme==='dark'?`dark:bg-[#1D1F24]`:`bg-[#FDFBF7]`)} flex justify-between`}>

            <div onClick={() => handleTabClick('home')}
                 className={`w-12 h-12 ${ activeTab === 'home' 
                        ? `${(theme==='dark')?`dark:bg-[#D1F46233] dark:text-[#D1F462]`:`bg-[#3643FB4D] text-[#313DDF]`}` 
                        : `text-[#676D75] `} rounded-full text-2xl flex justify-center items-center 
                 `}>
                <FiHome />
            </div>
            <div onClick={() => handleTabClick('search')} 
                 className={`w-12 h-12 ${ activeTab === 'search' 
                    ? `${(theme==='dark')?`dark:bg-[#D1F46233] dark:text-[#D1F462]`:`bg-[#3643FB4D] text-[#313DDF]`}` 
                    : `text-[#676D75] `} rounded-full text-2xl flex justify-center items-center 
                `}>
                <FiSearch />
            </div>
            <div onClick={() => handleTabClick('add')}
                 className={`w-12 h-12 rounded-full text-4xl ${(theme==='dark')?`dark:text-[#D1F462]`:`text-[#313DDF]`} ${ activeTab === 'add' 
                    &&`${(theme==='dark')?`dark:bg-[#D1F46233]`:`bg-[#3643FB4D]`}`} flex justify-center items-center `}>
                <MdAdd />
            </div>
            <div onClick={() => handleTabClick('favorites')}
                 className={`w-12 h-12 ${ activeTab === 'favorites' 
                    ? `${(theme==='dark')?`dark:bg-[#D1F46233] dark:text-[#D1F462]`:`bg-[#3643FB4D] text-[#313DDF]`}` 
                    : `text-[#676D75] `} rounded-full text-2xl flex justify-center items-center 
                `}>
                <IoIosHeartEmpty />
            </div>
            <div onClick={() => handleTabClick('profile')} 
                 className={`w-12 h-12 ${ activeTab === 'profile' 
                    ? `${(theme==='dark')?`dark:bg-[#D1F46233] dark:text-[#D1F462]`:`bg-[#3643FB4D] text-[#313DDF]`}` 
                    : `text-[#676D75] `} rounded-full text-2xl flex justify-center items-center 
                `}>
                <GoPerson />
            </div>

        </div>
        {
        (showTravelPlanner) && <TravelPlanner onClose={closeTravelPlanner} />
        }
    </nav>
  )
}

export default NavBar