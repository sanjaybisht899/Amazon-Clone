import React from 'react'
import others from '../../Assets/others'
function About() {
  let about={
    width: '20rem',
    margin: '1rem',
  }
  let tech={
    width: '10rem',
    margin: '1rem',
  }
  return (
    <>
      <div className='container'>
        <div className='row mt-2'>
          <div className='col-sm-9'>
            <h1 className='display-1 text-center'>About Me</h1>
            <h5 className='lead'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>
            <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className='col-sm-3'>
            <div className='align-self-center'>
              <img src={others[4].image} alt="" style={about}/>
            </div>
          </div>
        </div>
        <div className='row'>
          <h3 className='display-5 text-center mb-4'>Technologies Used & Website References</h3>
          <div className='col-sm'>
          <img src={others[1].image} alt="" style={tech}/>
          </div>
          <div className='col-sm'>
          <img src={others[2].image} alt="" style={tech}/>
          </div>
          <div className='col-sm'>
          <img src={others[3].image} alt="" style={tech}/>
          </div>
          <div className='col-sm'>
          <img src={others[0].image} alt="" style={tech}/>
          </div>
          <div className='col-sm'>
          <img src={others[6].image} alt="" style={tech}/>
          </div>
          <div className='col-sm'>
          <img src={others[5].image} alt="" style={tech}/>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default About