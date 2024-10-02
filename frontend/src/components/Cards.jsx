import React from 'react'
import PropTypes from "prop-types";


const Cards=({ item })=> {
    // console.log(item)
  return (
      <>
        <div className='mt-4 mb-6'>
          <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
            <figure>
                <img
                src={item.image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {item.name}
                          <div className="badge badge-secondary">{item.category }</div>
                </h2>
                      <p>{ item.title}</p>
                <div className="card-actions justify-between">
                          <div className="badge badge-outline">${item.price }</div>
                <div className="cursor-pointer px-2 py-1 rounded-full badge badge-outline hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
                </div>
            </div>
            </div>    
         </div>
      </>
  )
}

//prop types
Cards.propTypes = {
    item: PropTypes.shape({
    price: PropTypes.string.isRequired,    
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
     title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cards