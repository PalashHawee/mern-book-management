import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Course = () => {

  //connecting to backend for getting books collection
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get('http://localhost:5000/book');
        console.log(response.data);  // printing the fetched data in console for testing purpose
        setBook(response.data);
        
      } catch (err) {
        console.error('Error fetching books:', err);
       }
    }
    getBook();
  },[])



  return (
      <>
          <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
              <div className='mt-28 justify-center text-center '>
                  <h1 className='text-2xl  md:text-4xl'>
                    We are delighted to have you <span className='text-pink-500'>here !</span>
                  </h1>
                <p className='mt-12'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Neque necessitatibus voluptate, voluptatem adipisci error similique ad illo,
                    esse atque molestiae incidunt exercitationem possimus vitae, mollitia dicta.
                    Ratione inventore eum velit.
                </p>
          <Link to={'/'}>
            <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300'>
            Back
          </button>
          </Link>
        </div>
        <div className=' mt-12 grid grid-cols-1 md:grid-cols-3'>
          {
            book.map((item) => (
              <Cards key={item.id} item={item}/>
            ))
          }
        </div>
        </div>
      </>
  )
}

export default Course