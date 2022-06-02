import React, { useState, useEffect } from 'react'
import NumberFormat from 'react-number-format';
import img from '../../Assets/Extras/empty.jpg'
function ViewCart() {
  let cardstyle = {
    width: '12rem',
    height: '12rem',
    margin: '1rem'
  }
  let Summary = {
  }
  let imgstyle = {
    width: '100rem',
  }

  let initTodo;
  if (localStorage.getItem("cart") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("cart"));
  }
  const [cart, setCart] = useState(initTodo);

  const onDelete = (item) => {
    setCart(cart.filter((e) => {
      return e !== item;
    }));

    localStorage.setItem("cart", JSON.stringify(cart));
  }
  let total=0
  if(cart.length!=0)
  {
    let a
    for(a=0;a<cart.length;a++)
    {
      total=total+(cart[a].price)*(cart[a].quatity)
    }
  }
  

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])
  return (
    <div className='container'>
      {
        cart.length==0 ? <>
        <div className='row'>
        <img src={img} className="" style={imgstyle} alt="..." />
        </div>
        </> : <>
              
        <div className='row'>
          <div className='col-sm-8'>
            {
              cart.map(items => (
                <div className="card mb-2 mt-2" key={items.id}>
                  <div className="row g-0">
                    <div className="col-md-4 mx-auto" style={cardstyle}>
                      <img src={items.image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6 my-auto">
                      <div className="card-body">
                        <h5 className="card-title">{items.name}</h5>
                        <p className="card-title">Quantity : {items.quatity}</p>
                        <p className="card-title">
                          <NumberFormat value={items.price * items.quatity} displayType={'text'} thousandSeparator={true} prefix={'₹'} />
                        </p>
                        <button className="btn btn-sm btn-danger" onClick={() => { onDelete(items) }}>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          {
            <div className='col-sm-4'>
          <div className="card border-dark mb-3" style={Summary}>
              <div className="card-header">Order Summary</div>
              <div className="card-body text-dark">
                <h5 className="card-title">Subtotal : <NumberFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'₹'} /></h5>
                <p className="card-text">Shipping : <NumberFormat value="50" displayType={'text'} thousandSeparator={true} prefix={'₹'} /></p>
                <p className="card-text text-success">Discount : 7% </p>
                <p className="card-text text-danger">Tax : 1%</p>
              </div>
              <div className="card-footer bg-transparent border-success">
                Total : <NumberFormat value={(total * 0.93 * 1.01 ) +50} displayType={'text'} thousandSeparator={true} prefix={'₹'} /> 
              </div>
            </div>
            <button className='btn btn-lg btn-success w-100'>Checkout </button>
          </div>
          }
     </div>
        </>
      }
    </div>
  )
}

export default ViewCart