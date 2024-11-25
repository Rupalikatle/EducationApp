import React from 'react'
import './Programs.css'
import programImage1 from '../../assets/programImage1.jpg'
import programImage2 from '../../assets/programImage2.jpg'
import programImage3 from '../../assets/programImage3.jpg'
import programIcon_1 from '../../assets/programIcon_1.png'
import programIcon_2 from '../../assets/programIcon_2.png'
import programIcon_3 from '../../assets/programIcon_3.png'

const Programs = () => {
  return (
    <div className='Programs' >
        <div className="Program">
            <img src={programImage1} alt="" />
            <div className="caption">
               <img src={programIcon_1} alt=""/>
               <p>Graduation Degree</p>
            </div>
        </div>

        <div className="Program">
            <img src={programImage2} alt="" />
            <div className="caption">
               <img src={programIcon_2} alt=""/>
               <p>Master Degree</p>
            </div>
        </div>

        <div className="Program">
            <img src={programImage3} alt="" />
            <div className="caption">
               <img src={programIcon_3} alt=""/>
               <p>Post Graduation</p>
            </div>
        </div>
    </div>
  )
}

export default Programs