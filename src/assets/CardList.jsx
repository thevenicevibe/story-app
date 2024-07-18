import React, { useEffect , useState} from 'react'
import Card from './Card';
import CardGrid from './CardGrid';
import './style.css'

const CardList = () => {
  const [data, setData] = useState([])
  useEffect(() => {

    const fetchData = () => {
      return new Promise((resolve, reject) => {
        // Simulate a fetch request
        fetch('https://child.onrender.com/api/sciencefiction')
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



 
  


    
 
// </div>
  )
}

export default CardList