import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
function Login() {
  let initaccounts;
  if (localStorage.getItem("accounts") === null) {
    initaccounts = [];
  }
  else {
    initaccounts = JSON.parse(localStorage.getItem("accounts"));
  }
  let initlogin;
  if (localStorage.getItem("login") == null) {
    initlogin = [];
  }
  else {
    initlogin = JSON.parse(localStorage.getItem("login"));
  }
  const [accounts] = useState(initaccounts);
  const [login, setLogin] = useState(initlogin);
  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(login));
  }, [login])
  const navigate = useNavigate();
  const { loginWithRedirect, logout, user } = useAuth0();
  function register() {
    navigate('/register')
  }
  
  const values = {
    username: "",
    password: "",
  }
  const handleSubmit = (values) => {
    if(accounts.length==0)
    {
      alert("Register First To Login")
    }
    else
    {
      let i
      let j=-1
      
      for(i=0;i<accounts.length;i++)
      {
        if((accounts[i].username==values.username)&&(accounts[i].password==values.password))
        {
          j=i
          const logindata = {
            id:accounts[i].id,
            login:'Y',
          }
          setLogin([logindata]);
          console.log(login)
          window.location.replace("/profile");
          break;
        }
      }
      if(j==-1)
      {
        alert("login Failed")
      }
    }
  }
  return (
    <>
      <div className="container d-flex justify-content-center">
        <Formik initialValues={values} onSubmit={handleSubmit}>
          <Form>
            <div className="row my-4">
              <h3 className="text-center">Login</h3>
            </div>
            <div className="row my-4">
              <Field type="text" name="username" placeholder="Username" className="form-control" />
              <ErrorMessage name="username" />
            </div>
            <div className="row my-4">
              <Field type="password" name="password" placeholder="Password" className="form-control" />
              <ErrorMessage name="password" />
            </div>
            <div className="row my-4">
              <button className="btn btn-primary" type="submit">Submit</button>
            </div>
            <div className="row my-4">
              <a className="text-center" onClick={()=>{register()}}>Register</a>
            </div>
          </Form>
        </Formik>
      </div>
      {/* <button className='btn btn-success'  onClick={()=>loginWithRedirect()}>Login</button>
    <button className='btn btn-danger'  onClick={()=>logout()}>Logut</button>
    {JSON.stringify(user,null,2)}
    <button className='btn btn-primary'  onClick={()=>{register()}}>Register</button> */}
    </>
  )
}

export default Login