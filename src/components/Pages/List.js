
import { Link } from "react-router-dom";
import { useRef } from "react";

function List(props){
  let nameRef = useRef();
    let ageRef = useRef();
    let sexRef = useRef();
    let majorRef = useRef();

    const validateInput = () => {
      if(!nameRef.current.value||!ageRef.current.value || !sexRef.current.value || !majorRef.current.value){
        alert("Blank input!!");
        return false;
      }
      return true;
    }

    const handleSave = () => {
      if(validateInput()){
        props.postData();
      }
    }
  
    return (
        <>
        <div>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Add Student
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body input-button">
                  <input type="text" ref={nameRef} value={props.studentData.name} size="10" placeholder="name" onChange={(d) => props.setStudentData({...props.studentData, name: d.target.value})} />
                  <input type="number" ref={ageRef} value={props.studentData.age} size="3" placeholder="age" onChange={(d) => props.setStudentData({...props.studentData, age: parseInt(d.target.value)})}/>
                  <input type="text" ref={sexRef} value={props.studentData.sex} size="7" placeholder="sex" onChange={(d) => props.setStudentData({...props.studentData, sex: d.target.value})}/>
                  <input type="text" ref={majorRef} value={props.studentData.major} size="20" placeholder="major" onChange={(d) => props.setStudentData({...props.studentData, major: d.target.value})}/>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button id="btnAdd" type="button" className="btn btn-primary" onClick={handleSave}>
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        
        <div id="contents" style={{ height: "100%", backgroundColor: "lightgoldenrodyellow" }}>
        {props.makeList && (
          <ul>
          {props.data.map((student) => (
            <li key={student.id}>
              <Link to='/detail' style={{ textDecoration: "none"}} state={{studentName: student.name,  studentAge: student.age, studentSex:student.sex, studentMajor:student.major}} >{student.name}</Link>
              
              <button
                className="btn btn-primary innerbtn"
               
                data-bs-target="#modifyModal"
                onClick={() => {
                  props.setCurrentId(student.id);
                  props.setEditData(student);
                  props.navigate('/update');
                }}
              >
                Modify
              </button>
              <button
                className="btn btn-primary innerbtn"
                onClick={() => props.deleteData(student.id)}
              >
                DELETE
              </button>
            </li>
          ))}
        </ul>
        )}
        </div>
      
      </>
        
    );
}

export default List;