import React from 'react'
import InProgress from '../InProgress/InProgress'
import './Content.css'

const Content = () => {
  return (
    <div className='content'>
      <form action="#" >
        <div className='content-heading__box'>
          <h1 className="content-heading">Welcome to TutorChamps</h1>
          <p className="content-para">TutorChamps is committed to provide best homework solution to it's
            students <span className='highlight'>24/7</span> and always puts students on top priority. Our mission
            is to make the students perform better in their academics and achieve their goals with certainty</p>
        </div>
        <div className='content-columns'>
          <div className="row content-row">
            <div className="col-lg-4 content-col">
              <span className='content-col__title'>Instruction</span>
              <div className="col-box">
                <input required type='text' autoFocus placeholder='Please enter your instruction here'
                  className='instruction content-input'></input>
              </div>
            </div>
            <div className="col-lg-4 content-col">
              <span className='content-col__title'>Question files</span>
              <div className="col-box">
                <input required type="file" className='content-input' />
              </div>
            </div>
            <div className="col-lg-4 content-col">
              <span className='content-col__title'>Reference Materials</span>
              <div className="col-box">
                <input required type="file" className='content-input' />
              </div>
            </div>
          </div>
          {/* ////////////////////////// */}
          <div className="row content-row">
            <div className="col-lg-4 content-col">
              <span className='content-col__title'>Subject Name</span>
              <div className="col-box">
                <input required type='text' placeholder='Please enter subject name'
                  className='instruction content-input'></input>
              </div>
            </div>
            <div className="col-lg-4 content-col">
              <span className='content-col__title'>Choose Assignment Deadline</span>
              <div className="col-box">
                {/* <label htmlFor="btn">DeadLine</label> */}
                <input required type='date' className='instruction content-input'></input>
              </div>
            </div>
            <div className="col-lg-4 btn-col">
              {/* <label htmlFor="btn">DeadLine</label> */}
              <button type='submit' className='submitBtn'>Create a new order now</button>
            </div>
          </div>
          {/* ////////////////////////// */}
        </div>
      </form>
      <InProgress />
    </div>
  )
}

export default Content