import React from 'react'
import sale from '../../Assets/Sale'
import { Carousel } from 'react-bootstrap'
function Sale() {
  let ssale = {
    width: '20rem',
    height: '20rem',
    border:'none'
  }
  return (
    <>
    <div className='card' style={ssale}>
    <Carousel>
        {
          sale.map(item => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={item.image}
              alt="First slide"
            />
          </Carousel.Item>
          ))}
      </Carousel>
      </div>
    </>
  )
}
export default Sale