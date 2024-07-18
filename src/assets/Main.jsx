import React from 'react'
import CardList from './CardList'
import { Link } from 'react-router-dom'


const Main = () => {
  return (
    <>
    <div className='new-container'>
    <CardList/>
<div className="btn2 flex flex-row justify-around">
<button className='btn btn-primary border-cyan-900 rounded-full'>&laquo; Previous</button>
<Link to='/story' className='btn btn-primary border-cyan-900 rounded-full'>Next &raquo;</Link>
</div>
    
    </div>
    
    </>
  )
}

export default Main