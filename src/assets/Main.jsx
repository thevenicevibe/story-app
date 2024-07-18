import React from 'react'
import CardList from './CardList'
import { Link } from 'react-router-dom'


const Main = () => {
  return (
    <>
    <div className='new-container'>
    <CardList/>

    <button className='btn btn-primary border-cyan-900'>&laquo; Previous</button>
    <Link to='/story' className='btn btn-primary border-cyan-900'>Next &raquo;</Link>
    </div>
    
    </>
  )
}

export default Main