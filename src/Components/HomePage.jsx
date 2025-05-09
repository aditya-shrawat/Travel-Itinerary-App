import React, { useContext } from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { LuClock } from "react-icons/lu";
import { GoArrowRight } from "react-icons/go";
import { MdElderlyWoman } from "react-icons/md";
import ActivityCard from './ActivityCard';
import NavBar from './NavBar';
import HotelInfoCard from './HotelInfoCard';
import Header from './Header';
import {CustomThemeContext} from '../Context/CustomThemeProvider'


const hotelBookings = [
    {
      hotelName: "Shinagawa Prince Hotel",
      hotelImg:'/hotelImages/hotel1.png',
      rating:"4.0",
      checkIn: "26.01.2025, 11:15 pm",
      checkOut: "28.01.2025, 11:15 am",
      nights: "2 Nights",
      status: "Confirmed"
    },
    {
      hotelName: "Mercure Tokyo Hotel",
      hotelImg:'/hotelImages/hotel2.png',
      rating:"4.1",
      checkIn: "28.01.2025, 6:00 pm",
      checkOut: "30.01.2025, 11:15 am",
      nights: "2 Nights",
      status: "Pending"
    },
    {
        hotelName: "The Tokyo Station Hotel",
        hotelImg:'/hotelImages/hotel3.webp',
        rating:"4.4",
        checkIn: "30.01.2025, 2:00 pm",
        checkOut: "31.01.2025, 9:15 am",
        nights: "1 Night",
        status: "Pending"
    },
    {
        hotelName: "InterContinental",
        hotelImg:'/hotelImages/hotel4.webp',
        rating:"4.1",
        checkIn: "31.01.2025, 5:00 pm",
        checkOut: "1.02.2025, 11:15 am",
        nights: "1 Night",
        status: "Pending"
    },
];
  

const touristPlaces = [
    {
      place: "Senso-ji Temple & Nakamise Shopping Street Senso-ji",
      placeImg:'/activity1.png',
      time: "8:15 am Morning",
      duration: "3 hours",
      pickupLocation: "From hotel",
    },
    {
        place: "Tokyo Sky Tree",
        placeImg:'/activity2.png',
        time: "1:00 pm Afteroon",
        duration: "3 hours",
        pickupLocation: "From Nakamise Street",
    },
    {
        place: "Kimono Wearing",
        placeImg:'/activity3.png',
        time: "Anytime before 8:00pm ",
        duration: "1-2 hours",
        pickupLocation: "From Hotel",
    },
    // {
    //     place: "Senso-ji Temple & Nakamise Shopping Street Senso-ji",
    //     placeImg:'/activity1.png',
    //     time: "8:15 am Morning",
    //     duration: "3 hours",
    //     pickupLocation: "From hotel",
    //   },
    //   {
    //       place: "Tokyo Sky Tree",
    //       placeImg:'/activity2.png',
    //       time: "1:00 pm Afteroon",
    //       duration: "3 hours",
    //       pickupLocation: "From Nakamise Street",
    //   },
    //   {
    //       place: "Kimono Wearing",
    //       placeImg:'/activity3.png',
    //       time: "Anytime before 8:00pm ",
    //       duration: "1-2 hours",
    //       pickupLocation: "From Hotel",
    //   },
];


const HomePage = () => {
    const {theme,toggleTheme} = useContext(CustomThemeContext)
  return (
    <div className='w-full h-full'>
        <Header />
        <main className='w-full h-full relative'>
            <div className='w-full h-full p-4 '>
                <div className='w-full h-auto'>
                    <h3 className='text-lg md:text-xl font-semibold'>Your Upcoming Trip</h3>
                    <div className='h-80 md:w-full md:h-[500px] mt-4 relative rounded-2xl overflow-hidden'>
                        <div className='w-full h-full'>
                            <img src={'/tokyoBg.png'} className='w-full h-full object-cover rotate-y-180'/>
                        </div>
                        <div className='w-full h-auto absolute top-0 left-0 p-4 text-[40px] md:text-5xl text-white flex justify-between items-center'>
                            <div className='w-auto  '>
                                <h1 className='font-extrabold'>TOKYO</h1>
                                <h3 className='text-[12px] md:text-[14px] font-medium'>27.01.2025 - 02.02.2025</h3>
                            </div>
                            <div className='w-auto h-auto cursor-pointer'>
                                <GoArrowUpRight  />
                            </div>
                        </div>
                        <div className='w-full h-auto absolute bottom-0 left-0 p-4 flex justify-evenly bg-white/1 backdrop-blur-xs'>
                            <div className='w-auto h-auto flex items-center'>
                                <div className=' text-2xl text-[#D1F462] p-1 rounded-full bg-[#292929] flex justify-center items-center'>
                                    <LuClock />
                                </div>
                                <div className='w-auto h-auto ml-2 text-white text-[12px] md:text-[14px] leading-4'>
                                    <h3 className='font-semibold '>8 Days</h3>
                                    <h3 className=''>Duration</h3>
                                </div>
                            </div>
                            <div className='w-auto h-auto flex items-center'>
                                <div className=' text-2xl text-[#D1F462] p-1 rounded-full bg-[#292929] flex justify-center items-center'>
                                    <LuClock />
                                </div>
                                <div className='w-auto h-auto ml-2 text-white text-[12px] md:text-[14px] leading-4'>
                                    <h3 className='font-semibold '>8 Days</h3>
                                    <h3 className=''>Duration</h3>
                                </div>
                            </div>
                            <div className='w-auto h-auto flex items-center'>
                                <div className=' text-2xl text-[#D1F462] p-1 rounded-full bg-[#292929] flex justify-center items-center'>
                                    <LuClock />
                                </div>
                                <div className='w-auto h-auto ml-2 text-white text-[12px] md:text-[14px] leading-4'>
                                    <h3 className='font-semibold '>8 Days</h3>
                                    <h3 className=''>Duration</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Flight detail section */}
                <div className='w-full h-auto overflow-x-auto my-8'>
                    <div className='w-full md:w-96 h-36 py-2 px-3 bg-[#3642FB] rounded-2xl relative overflow-hidden'>
                        <div className='w-full h-full p-3 relative bg-[#313DDF] rounded-xl text-white'>
                            <div className='w-auto h-auto absolute top-3 left-3 z-20'>
                                <h3 className='font-semibold'>Flight Details</h3>
                                <h3 className='text-[12px]'>26.01.2025, 10:50 am</h3>
                            </div>
                            <div className='w-auto h-auto flex items-center absolute bottom-3 left-3 z-20'>
                                <div className='w-auto h-auto'>
                                    <h3 className=' font-semibold'>DEL</h3>
                                    <h3 className='text-[12px]'>Delhi, India</h3>
                                </div>
                                <div className='w-auto h-auto text-3xl mx-2'>
                                    <GoArrowRight  />
                                </div>
                                <div className='w-auto h-auto'>
                                    <h3 className=' font-semibold'>NRT</h3>
                                    <h3 className='text-[12px]'>Narita, Tokyo</h3>
                                </div>
                            </div>
                        </div>
                        <div className='w-[350px] h-[350px] absolute -right-35 -bottom-[120%] -rotate-8'>
                            <img src={'/planeImg.png'} className='w-full h-full object-cover rotate-y-180' />
                        </div>
                    </div>
                </div>

                {/* Accomodation section */}
                <div className='w-full '>
                    <div className='w-full flex items-center justify-between'>
                        <h1 className='text-lg md:text-xl font-semibold'>Accomodation</h1>
                        <div className={`text-[12px] ${(theme==='dark')?`dark:text-[#D1F462]`:`text-[#3643FB]`} font-bold hover:underline cursor-pointer `}>
                            See all
                        </div>
                    </div>
                    {/* hotels information */}
                    <div className='w-auto h-auto py-3 flex gap-4 overflow-x-auto'>
                        {
                        hotelBookings.map((hotel,index)=>(
                            <HotelInfoCard key={index} hotel={hotel} />
                        ))
                        }
                    </div>
                </div>

                {/* Activities section */}
                <div className='w-full  pb-10 my-6'>
                    <div className='w-full flex items-center justify-between'>
                        <h1 className='text-lg md:text-xl font-semibold'>Activities</h1>
                        <div className={`text-[12px] ${(theme==='dark')?`dark:text-[#D1F462]`:`text-[#3643FB]`} font-bold hover:underline cursor-pointer `}>
                            See all
                        </div>
                    </div>
                    {/* mini calendar according to activities */}
                    <div className={`w-full sm:w-fit h-28 p-2 py-3 mt-3 mb-4 ${(theme==='dark')?`dark:border-none dark:bg-[#333333]`:`bg-[#FDFBF7] border-[1px] border-[#BFBFBF]`} rounded-xl flex flex-col justify-between `}>
                        <div className='w-full flex'>
                            <div className={`px-2 py-1 w-fit h-fit rounded-lg ${(theme==='dark')?`dark:bg-[#D1F462] dark:text-[#181517]`:`bg-[#313DDF] text-white`} text-[12px] font-semibold flex justify-center items-center `}>
                                <h3>Day Plan</h3>
                            </div>
                            <div className={`w-fit px-2 py-1 h-fit ml-2 rounded-lg ${(theme==='dark')?`dark:border-[#D1F462] dark:bg-[#292929] dark:text-[#D1F462] `:`border-[#313DDF] text-[#313DDF]`} border-[1px] text-[12px] bg-white font-semibold flex justify-center items-center `}>
                                <h3>14 Activites</h3>
                            </div>
                        </div>
                        <div className='w-full flex gap-2 overflow-hidden'>

                            <div className={`h-12 flex items-center rounded-lg border-[1px] ${(theme==='dark')?`dark:border-[#D1F462]`:`border-[#313DDF]`} overflow-hidden flex-shrink-0 `}>
                                <div className={`h-full ${(theme==='dark')?`dark:bg-[#D1F462] dark:text-[#181517]`:`text-white bg-[#313DDF]`} flex items-center`}>
                                    <h3 className='px-1 -rotate-90 text-[12px] '>JAN</h3>
                                </div>
                                <div className={`h-12 w-12 flex flex-col justify-center items-center ${(theme==='dark')&&`dark:bg-[#292929]`}`}>
                                    <h3 className='text-[12px]'>MON</h3>
                                    <h3 className='font-semibold text-[#14px]'>
                                        27
                                    </h3>
                                </div>
                            </div>

                            <div className={`h-12 w-12 text-[#808080] ${(theme==='dark')?`dark:bg-[#292929]`:`bg-[#E5E5E5]`} rounded-lg flex flex-col justify-center items-center flex-shrink-0 `}>
                                <h3 className='text-[12px]'>TUE</h3>
                                <h3 className='font-semibold text-[#14px]'>
                                    28
                                </h3>
                            </div>
                            <div className={`h-12 w-12 text-[#808080] ${(theme==='dark')?`dark:bg-[#292929]`:`bg-[#E5E5E5]`} rounded-lg flex flex-col justify-center items-center flex-shrink-0 `}>
                                <h3 className='text-[12px]'>WED</h3>
                                <h3 className='font-semibold text-[#14px]'>
                                    29
                                </h3>
                            </div>
                            <div className={`h-12 w-12 text-[#808080] ${(theme==='dark')?`dark:bg-[#292929]`:`bg-[#E5E5E5]`} rounded-lg flex flex-col justify-center items-center flex-shrink-0 `}>
                                <h3 className='text-[12px]'>THU</h3>
                                <h3 className='font-semibold text-[#14px]'>
                                    30
                                </h3>
                            </div>
                            <div className={`h-12 w-12 text-[#808080] ${(theme==='dark')?`dark:bg-[#292929]`:`bg-[#E5E5E5]`} rounded-lg flex flex-col justify-center items-center flex-shrink-0 `}>
                                <h3 className='text-[12px]'>FRI</h3>
                                <h3 className='font-semibold text-[#14px]'>
                                    31
                                </h3>
                            </div>

                            <div className='h-12 flex items-center rounded-lg overflow-hidden flex-shrink-0 '>
                                <div className={`h-full ${(theme==='dark')?`dark:text-[#181517] `:`text-white`} bg-[#808080] flex items-center`}>
                                    <h3 className='px-1 -rotate-90 text-[12px]'>FEB</h3>
                                </div>
                                <div className={`h-12 w-12 text-[#808080] ${(theme==='dark')?`dark:bg-[#292929]`:`bg-[#E5E5E5]`} flex flex-col justify-center items-center`}>
                                    <h3 className='text-[12px]'>SAT</h3>
                                    <h3 className='font-semibold text-[#14px]'>
                                        27
                                    </h3>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* selected date and activity count */}
                    <div className='w-full my-6 flex gap-3'>
                        <div className={`w-fit px-2 py-0.5 flex text-[12px] font-semibold ${(theme==='dark')?`dark:bg-[#D1F462] dark:text-[#181517] `:`text-white bg-[#3643FB]`} rounded-2xl `}>
                            <h3>Day 1</h3>
                            <h3 className='ml-2'>27.01.2025</h3>
                        </div>
                        <div className={`w-fit px-2 py-0.5 flex text-[12px] font-semibold ${(theme==='dark')?`dark:text-[#D1F462]`:`text-[#3643FB]`} `}>
                            <MdElderlyWoman className='text-base' /><h3 className='ml-2'>27.01.2025</h3>
                        </div>
                    </div>
                    {/* Activity cards */}
                    <div className={`w-full p-2 rounded-lg ${(theme==='dark')?`dark:border-[#D1F462]`:`border-transparent`} border-[1px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`}>
                        {
                        touristPlaces.map((touristPlace,index)=>(
                            <ActivityCard key={index} touristPlace={touristPlace} />
                        ))
                        }
                    </div>
                </div>
            </div>
            {/* added naigation bar component */}
            <NavBar  />
        </main>
    </div>
  )
}

export default HomePage