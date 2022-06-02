import React from 'react'
import image from '../../Assets/image'
import { Carousel } from 'react-bootstrap'
function Caursol() {
  return (
    <>
      <Carousel>
        {
          image.map(item => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={item.image}
              alt="First slide"
            />
          </Carousel.Item>
          ))}
        
      </Carousel>
    </>
  )
}
export default Caursol