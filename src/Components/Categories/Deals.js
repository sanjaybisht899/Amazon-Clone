import React from 'react'
import deals from '../../Assets/deals'
function Deals() {
  function browse() {
  
  }
  let cardstyle = {
    width: '11rem',
    height: '18rem',
    margin:'1rem',
    border:'none'
  }
  return (
    <>
    <div className='card '>
      <div className="card-group justify-content-center ">
        {
          deals.map(item =>(
            <a onClick={() => browse()} key={item.id}>
          <div className="card mt-2 mb-2" style={cardstyle}>
            <img src={item.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-title text-center text-success">{item.description}</p>
              <p className="card-title text-center text-secoundary">{item.name}</p>
            </div>
          </div>
        </a>
          ))
        }
      </div>
    </div>

    </>
  )
}

export default Deals
