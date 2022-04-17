import React from 'react'

const menuCard = ({menuData}) => {
  return (
    <>
    <section className="main-card--cointainer"> 
    { menuData.map((curelem) => {
          const {id ,name ,category , image , description,price}=curelem;
          return (
    <>
    <div className="card-container" key={curelem.id} >
        <div className="card">
            <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className='card-author subtle'>{name}</span>
                    <h2 className=' card-title'>{name}</h2>
                    <span className="card-desciption subtle">
                    {description}
                    </span>
                      <div className='card-read'>Read</div>
            </div>
           
             <img src= {curelem.image} alt='images' className='card-media' /> 
            <span className='card-tag subtle'><p>{ price}</p>Order Now</span>
        </div>
    </div> 
    </>
            );
})};
   </section>   
    </>
  )
}

export default menuCard
