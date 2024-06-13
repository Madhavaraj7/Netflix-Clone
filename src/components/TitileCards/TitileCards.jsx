import React from 'react'
import './TitileCards.css'
import carts_data from '../../assets/cards/Cards_data'

function TitileCards({title,category}) {
  return (
    <div className='titile-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list">
        {carts_data.map((card,index)=>{
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>


        })}
      </div>
    </div>
  )
}

export default TitileCards