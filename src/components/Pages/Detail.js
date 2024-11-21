import { useLocation } from "react-router-dom";


function Detail(props) {
  const location=useLocation();
  const studentName = location.state.studentName;
   const studentAge = location.state.studentAge;
   const studentSex = location.state.studentSex;
   const studentMajor = location.state.studentMajor;
    return (
        <>
         <div>
          <div
            className="modal show"
            tabIndex="-1"
            role="dialog"
            style={{display: "block"}}
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5">
                    {studentName} information
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={()=>props.navigate('/list')}
                  ></button>
                </div>
                <div className="modal-body input-button">
                  <p>age: {studentAge}, sex: {studentSex}, major: {studentMajor}</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={()=>props.navigate('/list')}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
 
       
      </div>
       
        </>
    );
  }
  
  export default Detail;
  