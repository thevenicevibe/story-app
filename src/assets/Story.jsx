import React , {useState, useEffect}from 'react'
import "./style.css"

import Card from './Card';
import CardGrid from './CardGrid';




const Story = () => {

    const [data, setData] = useState([])
    useEffect(() => {
  
      const fetchData = () => {
        return new Promise((resolve, reject) => {
          // Simulate a fetch request
          fetch('https://child.onrender.com/api/sciencefiction/{id}')
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error))
        })
      }
  
      // Use the Promise to fetch data
      fetchData()
        .then((result) => {
          setData(result.slice(0,4))
          console.log(result)
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
  
    },[])
  

  return (
    <div className='story'>
    <div className="section1 ">
    <div className="sub-container flex flex-row justify-around">
            <div className="logo my-7"><h1 className='text-3xl font-bold font-sans'>Brainy Lingo</h1></div>
            <div className="navbar flex flex-row">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <a href="#" className="flex items-center">Home</a></li>
                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <a href="#" className="flex items-center">Leaderboard</a></li>
                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <a href="#" className="flex items-center">Daily Quiz</a></li>
                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <a href="#" className="flex items-center">Genre</a></li>
              </ul>
            </div>
            <div className="signbtn my-7">
                    <button className='btn btn-primary'>Sign Out</button>
            </div>
            
            </div>
            <div className='text1 flex justify-center'>
                <h5 className='font-bold text-2xl text-blue-600'></h5>
            </div>
    </div>
    <div className="section2">
        <div className="text2 flex flex-row justify-around items-center my-5">
        <button className='btn btn-primary btn-outline-light rounded-full'>World Explorer</button>
        <button className='btn btn-primary btn-outline-light rounded-full'>Story Adventure</button>
        <button className='btn btn-primary btn-outline-light rounded-full'>Brain Quest</button></div>
        

        <div className="text2 flex flex-row justify-around items-center my-5" ><h1>Drag Pictures to the matching words, light up correct pairs, shake for a retry</h1></div>
    </div>
    <div className="section3">
        <div className='Card1'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="" alt="Sunset in the mountains"/>
          <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
  </div>

</div>
Horizont
        </div>
        <div className='Card2'>
        <CardGrid >
    { data.map((user, i) => (
        <Card key={i}>   
            <div className="card-body">
              <div className="imgurl h-40">
              <img src={user.Image} className="card-img-top " alt="..."/>
              </div>
              
            
            <p className="card-text mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{user.Title}</p>
          <div className="btn-new d-grid"></div>
             <button type="button" className="btn btn-primary btn-sm rounded-full w-60">{user.Status}</button>
        </div>
            
          
       
        </Card>
      ))
    }
  </CardGrid>
        </div>
    </div>
    </div>

  )
}

export default Story