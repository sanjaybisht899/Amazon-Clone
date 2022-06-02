import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import swal from 'sweetalert';
function Register() {
  const navigate = useNavigate();
  let initaccounts;
  if (localStorage.getItem("accounts") === null) {
    initaccounts = [];
  }
  else {
    initaccounts = JSON.parse(localStorage.getItem("accounts"));
  }
  
  function login() {
    navigate('/login')
  }
  const values = {
    username: "",
    name: "",
    email: "",
    password: "",
    box: false
  }
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validationSchema = yup.object().shape({
    username: yup.string().required("Username Required").max(15),
    name: yup.string().required("Name Required"),
    email: yup.string().required("Email Required").matches(re, "Wrong Format"),
    password: yup.string().required("Password Required").min(3),
  })
  const register = (values) =>
  {
    console.log(accounts.length)
    if(accounts.lenght==0)
    {
      const item = {
        id:1,
        username:values.username,
        name:values.name,
        email:values.email,
        password:values.password,
      }
      setAccounts([...accounts, item]);
    }
    else
    {
      let i
      let j=-1;
      for(i=0;i<accounts.length;i++)
      {
        if(values.username==accounts[i].username)
        {
          j=i;
          break;
        }
      }
      if(j==-1)
      {
        const item = {
          id:accounts.length+1,
          username:values.username,
          name:values.name,
          email:values.email,
          password:values.password,
        }
        setAccounts([...accounts, item]);
        swal({
          title: "Registration Successfull",
          icon: "success",
          buttons: { 
            Goto: "Continue",
          },
        })
        .then((value) => {
          switch (value) {
            default:
              navigate('/login')
              break;
          }
        });
      }
      else
      {
        alert("Username Not Available")
      }
    }
  }
  const handleSubmit = (values) => {
    register(values)
  }
  const [accounts, setAccounts] = useState(initaccounts);
  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }, [accounts])
  return (
    <>
      <div className="container container d-flex justify-content-center" >
        <Formik initialValues={values} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form>
            <div className="row">
              <h1 className="text-center">Register Yourself</h1>
            </div>
            <div className="row my-4">
              <Field type="text" name="username" placeholder="Username" className="form-control" />
              <ErrorMessage name="username" />
            </div>
            <div className="row my-4">
              <Field type="text" name="name" placeholder="Name" className="form-control" />
              <ErrorMessage name="name" />
            </div>
            <div className="row my-4">
              <Field type="text" name="email" placeholder="Email" className="form-control" />
              <ErrorMessage name="email" />
            </div>
            <div className="row my-4">
              <Field type="password" name="password" placeholder="Password" className="form-control" />
              <ErrorMessage name="password" />
            </div>
            <div className="row my-4">
              <div className="form-inline">
                <label className="form-inline">
                  <Field type="checkbox" name="box" required></Field>
                    Please Accept the term and conditions
                </label>
              </div>
              <ErrorMessage name="box" />
            </div>
            <div className="row my-4">
              <button className="btn btn-primary" type="submit">Register</button>
            </div>
            <div className="row">
              <a className="text-center" onClick={()=>{login()}}>Login</a>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  )
}

export default Register