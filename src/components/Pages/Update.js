import { useRef } from "react";


function Update(props) {
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
        props.updateData();
      }
    }
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
                  <h1 className="modal-title fs-5" id="ModalLabel">
                    Modify Student
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={()=>props.navigate('/list')}
                  ></button>
                </div>
                <div className="modal-body input-button">
                  <input type="text" ref={nameRef} value={props.editData.name} size="10" placeholder="name"  onChange={(d) => props.setEditData({ ...props.editData, name: d.target.value })}/>
                  <input type="number" ref={ageRef} value={props.editData.age} size="3" placeholder="age"  onChange={(d) => props.setEditData({ ...props.editData, age: parseInt(d.target.value) })}/>
                  <input type="text" ref={sexRef} value={props.editData.sex} size="7" placeholder="sex"  onChange={(d) => props.setEditData({ ...props.editData, sex: d.target.value })}/>
                  <input type="text" ref={majorRef} value={props.editData.major} size="20" placeholder="major"  onChange={(d) => props.setEditData({ ...props.editData, major: d.target.value })}/>
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
                  <button
                    id="btnUpdate"
                    type="button"
                    className="btn btn-primary" onClick={handleSave}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
 
       
      </div>
    </>
        
    );
  }
  
  export default Update;
  