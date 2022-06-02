import React, { useState, useEffect } from 'react'
import electronics  from '../../Assets/electronics'
import { useNavigate, useLocation} from 'react-router-dom'
import NumberFormat from 'react-number-format';
import swal from 'sweetalert';
function Product() {
  let initTodo;
  if (localStorage.getItem("cart") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("cart"));
  }
  const {state} = useLocation();
  let {uid,id} = state;
  uid=uid-1
  id=id-1
  let navigate=useNavigate();
  function proceed(){
    navigate('/details')
  }
  const addcart = () => {
    let i=0
    console.log(cart.length)
    if(cart.length==0)
    {
      const item = {
        id:electronics[uid].data[id].spid,
        name:electronics[uid].data[id].name,
        price:electronics[uid].data[id].price,
        image:electronics[uid].data[id].image,
        quatity:1
      }
      setCart([...cart, item]);
    }
    else
    {
      let i
      let y=-1
      for(i=0;i<cart.length;i++)
      {
        if(cart[i].id===electronics[uid].data[id].spid)
        {
          y=i
          break;
        }
      }
      if(y==-1)
      {
        const item = {
          id:electronics[uid].data[id].spid,
          name:electronics[uid].data[id].name,
          price:electronics[uid].data[id].price,
          image:electronics[uid].data[id].image,
          quatity:1
        }
        setCart([...cart, item]);
      }
      else
      {
        cart[y].quatity=cart[y].quatity+1;
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }
    
  }
  function addtocart(){
    addcart()
    swal({
      title: "Item added to cart",
      icon: "success",
      buttons: {
        continue: "Continue Shopping",
        Goto: "Goto Cart",
      },
    })
    .then((value) => {
      switch (value) {
        case "Goto":
          navigate('/viewcart')
          break;
        default:
          break;
      }
    });
  }
  const [cart, setCart] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])
  return (
    <>
      <div className='container'>
        <div className='row mt-2'>
          <div className='col-sm-5'>
            <div className='card ' >
              <img src={electronics[uid].data[id].image} alt="pic" />
            </div>
            <button  className="btn btn-lg btn-primary mx-5 my-3"onClick={()=>addtocart()}>Add to Cart</button>
            <button  className="btn btn-lg btn-primary mx-5 my-3"onClick={()=>proceed()}>Proceed to Buy</button>
          </div>
          <div className='col-sm-7'>
            <div className='row'>
              <p className='mt-5 display-4'>
                  {electronics[uid].data[id].name}
              </p>
              <p className='mt-2 display-6'>
              {electronics[uid].type}
              </p>
              <h5 className='mt-3 lead'>
              {electronics[uid].data[id].desc}
              </h5>
              <h3 className='mt-2 text-success'>
              Special Discount 86% off
              </h3>
              <h1 className='mt-1'>
              <NumberFormat value={electronics[uid].data[id].price} displayType={'text'} thousandSeparator={true} prefix={'₹'} />
              </h1>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product