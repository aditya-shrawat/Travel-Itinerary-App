import React from 'react'

const Header = () => {
  return (
    <header className='w-full h-auto '>
        <div className='w-full p-4 bg-[#F8F6F4] flex justify-between items-center'>
            <div className='inline-block '>
                <h1 className=' text-2xl font-bold'>Hello Chhavi!</h1>
                <h3 className='text-base font-medium'>Ready for the trip?</h3>
            </div>
            <div className='w-auto h-auto'>
                <div className='h-11 w-11 rounded-full bg-green-300 cursor-pointer flex justify-center items-center text-3xl text-white '>
                    C
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header