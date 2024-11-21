
import { Outlet } from 'react-router-dom';
import React from 'react'

export default function HomeOutlet(props) {
    return (
        <>
             <div className="btnDiv">
          <button id="btnData" type="button" className="btn btn-primary" onClick={()=>{props.getCourses(); props.navigate('/list');}}>
            Bring students data
          </button>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add student data
          </button>
          </div>
            <div id="contents">

                <Outlet />

            </div>
        </>
    )
}
