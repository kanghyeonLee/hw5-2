import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Update from "./Update";
import List from "./List";
import Detail from "./Detail";
import HomeOutlet from "../HomeOutlet";

function ShowList() {

  const [makeList, setMakeList] = useState(false);
  const [data, setData] = useState([]);
  const [studentData, setStudentData] = useState({ name:"", age:"",sex: "", major:""});
  const [editData, setEditData] = useState({name:"", age:"",sex: "", major:""});
  const [currentId, setCurrentId] = useState(null);
  const navigate = useNavigate();

  const getCourses = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://67288771270bd0b97555f84b.mockapi.io/api/v1/students");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.send();
   
    xhr.onload = () => {
      if (xhr.status === 200) {
        const res = JSON.parse(xhr.response);
        setData(res);
        setMakeList(true);
      } else {
        console.log(xhr.status, xhr.statusText);
      }
    };

};

  const deleteData = (id) => {
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", "https://67288771270bd0b97555f84b.mockapi.io/api/v1/students/" + id);
    xhr.setRequestHeader("content-type", "application/json; charset=UTF-8");
    xhr.send(JSON.stringify());

    xhr.onload = () => {
      if (xhr.status === 200) {
        const res = JSON.parse(xhr.response);
        console.log(res);
        getCourses();
      } else {
        console.log(xhr.status, xhr.statusText);
      } 
    };
  }

  const postData = () => {
    if(!studentData.name || !studentData.age || !studentData.sex|| !studentData.major){
      alert("Blank input!!");
    }else{
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://67288771270bd0b97555f84b.mockapi.io/api/v1/students");
      xhr.setRequestHeader("content-type", "application/json; charset=UTF-8");
      xhr.send(JSON.stringify(studentData));

        xhr.onload = () => {
        if (xhr.status == 201) {
            setStudentData({ name:"", age:"",sex: "", major:""});
            getCourses();
        } else {
            console.log(xhr.status, xhr.statusText);
        }
        };
      }
};

const updateData = () => {
 
    const xhr = new XMLHttpRequest();
  xhr.open("PUT", "https://67288771270bd0b97555f84b.mockapi.io/api/v1/students/" + currentId);
  xhr.setRequestHeader("content-type", "application/json; charset=UTF-8");
  xhr.send(JSON.stringify(editData));

  xhr.onload = () => {
      if (xhr.status == 200) {
          setEditData({name:"", age:"",sex: "", major:""});
          getCourses();
      } else {
          console.log(xhr.status, xhr.statusText);
      }
      };

}

    return (
        <>
          
         
          <Routes>
            <Route path="/" element={<HomeOutlet getCourses={getCourses} navigate={navigate}></HomeOutlet>}>
            <Route path="/" element={<List makeList={makeList} setMakeList={setMakeList} data={data} setData={setData} studentData={studentData} setStudentData={setStudentData} editData={editData} setEditData={setEditData} currentId={currentId} setCurrentId={setCurrentId} postData={postData}/>}/>
            <Route path="/list" element={<List makeList={makeList} setMakeList={setMakeList} data={data} setData={setData} studentData={studentData} setStudentData={setStudentData} editData={editData} setEditData={setEditData} currentId={currentId} setCurrentId={setCurrentId} postData={postData} getCourses={getCourses} navigate={navigate} deleteData={deleteData}/>}/>
            </Route>
            <Route path="/detail" element={<Detail makeList={makeList} setMakeList={setMakeList} data={data} setData={setData} studentData={studentData} setStudentData={setStudentData} editData={editData} setEditData={setEditData} currentId={currentId} setCurrentId={setCurrentId} postData={postData} navigate={navigate} /> }/>
            <Route path="/update" element={<Update makeList={makeList} setMakeList={setMakeList} data={data} setData={setData} studentData={studentData} setStudentData={setStudentData} editData={editData} setEditData={setEditData} currentId={currentId} setCurrentId={setCurrentId} postData={postData} deleteData={deleteData} updateData={updateData} navigate={navigate}/>}/>
          </Routes>
       
      </>
        
    );
  }
  
  export default ShowList;
  