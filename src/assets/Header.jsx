import React from 'react'
import Main from './Main'



const Header = () => {
  return (
    <>
    <div className='container '>
        <div>
        <div className="sub-container flex flex-row justify-around my-5">
            <div className="logo"><h1 className='text-3xl font-bold font-sans'>Brainy Lingo</h1></div>
            <div className="navbar flex flex-row">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <a href="#" className="flex items-center">Home</a></li>
                <li class="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <a href="#" className="flex items-center">Leaderboard</a></li>
                <li class="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <a href="#" className="flex items-center">Daily Quiz</a></li>
                <li class="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <a href="#" className="flex items-center">Genre</a></li>
              </ul>
            </div>
            <div className="signbtn">
                    <button className='btn btn-primary'>Sign Out</button>
            </div>
            </div>

            <div className='flex flex-row justify-center'>
            <h1 className='text-3xl font-bold font-sans'>Science Fiction Stories</h1>
            </div>
           <div className='flex flex-row justify-center my-5'>
            <button className='btn btn-primary px-10 mx-5 rounded-full'> New</button>
            <button className='btn btn-primary px-10 mx-5 rounded-full'>Inprogress</button>
            <button className='btn btn-primary px-10 mx-5 rounded-full'>Completed</button>
            <button className='btn btn-primary px-10 mx-5 rounded-full'>Clear All</button>
           </div>
        </div>
        
    </div>
    <Main/>
    </>
    
  )
}

export default Header