import React from 'react'
import icons from '../../Assets/icons'
import { useNavigate } from 'react-router-dom'
function Categories() {
  let navigate = useNavigate();
  function browse() {
    navigate('/Electronics')
  }
  let cardstyle = {
    width: '7rem',
    height: '10rem',
    margin:'2rem',
    border:'none'
  }
  return (
    <div className='card '>
      <div className="card-group justify-content-center ">
        {
        icons.map(item => (
          <a onClick={() => browse()} key={item.id}>
          <div className="card mt-2 mb-2" style={cardstyle}>
            <img src={item.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-title text-center">{item.name}</p>
            </div>
          </div>
        </a>
        ))} 
      </div>
    </div>
  )
}
export default Categories