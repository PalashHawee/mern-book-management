import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';

const Freebook = () => {
    //connection to backend
    const [book, setBook] = useState([])
   useEffect(() => {
    const getBook = async () => {
      try {
       const response = await axios.get('http://localhost:5000/book');
            console.log('Fetched data:', response.data); // Logging the fetched data
                
            const data = response.data.
            filter((data) => data.category.toLowerCase() === 'free');
            console.log('Filtered free books:', data); // Logging filtered data
            setBook(data);
        } catch (err) {
            console.error('Error fetching books:', err);
        }
    }
    getBook();
  },[])

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div>
                    <h1 className='font-semibold text-xl pb-2'>Free Courses</h1>
                    <p className='pb-2'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Harum, necessitatibus neque. Quaerat earum sed facilis delectus
                        molestiae tenetur quo quibusdam consequatur optio reiciendis distinctio
                        culpa nihil minus nobis,
                        dignissimos quisquam!
                    </p>
                </div>

                <div>
                    <Slider {...settings}>
                        {book.map((item) => (
                            <Cards item={item} key={item.id} /> // Added return
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Freebook;
