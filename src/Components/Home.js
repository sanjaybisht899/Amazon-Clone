import React from 'react'
import Categories from './Categories/Categories'
import Deals from './Categories/Deals'
import Sale from './Categories/Sale'
import Caursol from './Categories/Caursol'

function Home() {
  return (
    <>
    <div className="container-fluid">
        <div className="row mb-3">
          <Caursol></Caursol>
        </div>
        <div className="row">
          <Categories></Categories>
        </div>
        <div className="row">
          <div className='col-sm-9'>
            <div className='row'>
              <h5>Deals of the Day</h5>
            </div>
            <Deals></Deals>
          </div>
          
          <div className='col-sm-3'>
          <div className='row'>
              <h5 className='text-center mr-5'>Upcomming Sales</h5>
            </div>
            <Sale></Sale>
          </div>
        </div>
        
    </div>
    </>
  )
}

export default Home