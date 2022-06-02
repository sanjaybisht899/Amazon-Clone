import React from 'react'
import electronics from '../../Assets/electronics'
import { useNavigate } from 'react-router-dom'
import NumberFormat from 'react-number-format';
function Electronics() {
  let cardstyle = {
    width: '12rem',
    height: '16rem',
    margin: '3rem',
  }
  let navigate = useNavigate();
  function product(uid,id) {
    navigate('/product', { state: { uid: uid,id:id}})
  }
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <p className='display-4 text-center'>
            Checkout the best Electronics Deals
          </p>
        </div>
        <div className='row'>
          <div className='card'>
            {
              electronics.map(item => (
                <div className="card-group justify-content-center mt-3" key={item.uid}>
                  {
                    (item.data).map(items => (
                      <a onClick={() => product(item.uid,items.id)} key={items.id}>
                        <div className="card mt-2 mb-2" style={cardstyle}>
                          <img src={items.image} className="card-img-top" alt="image" />
                          <p className="card-title text-center">{items.name}</p>
                          <p className="card-title text-center text-success">
                          <NumberFormat value={items.price} displayType={'text'} thousandSeparator={true} prefix={'₹'} />
                          </p>
                        </div>
                      </a>
                    ))
                  }
                  <p className="lead">{item.type}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
export default Electronics