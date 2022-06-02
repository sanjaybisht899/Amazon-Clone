import React, { useState } from 'react'
function Profile() {
  const cardstyle ={
    width: '30rem',
    height: '20rem'
  }
  let initaccounts;
  if (localStorage.getItem("accounts") == null) {
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
  const [login] = useState(initlogin);
  const logout = () => {

    localStorage.removeItem("login");
    window.location.replace("/");
  }

  const [accounts] = useState(initaccounts);

  return (
    <div className='card container' style={cardstyle}>
      <div className="row">
        <p className="text-center display-4">My Profile</p>
        <hr/>
      </div>
      <dl className="row">
        <dt className="col-sm-3">Username</dt>
        <dd className="col-sm-9">{accounts[login[0].id - 1].username}</dd>
      </dl>
      <dl className="row">
        <dt className="col-sm-3">Name</dt>
        <dd className="col-sm-9">{accounts[login[0].id - 1].name}</dd>
      </dl>
      <dl className="row">
        <dt className="col-sm-3">Email</dt>
        <dd className="col-sm-9">{accounts[login[0].id - 1].email}</dd>
      </dl>
      <button className='btn btn-danger ' onClick={() => logout()}>Signout</button>
    </div>
  )
}

export default Profile