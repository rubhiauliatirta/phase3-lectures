import React, { useState, useEffect } from 'react';
import useFetch from "./hooks/useFetch"
import useInput from "./hooks/useInput"

function App() {

  const { 
    data: students, 
    loading: loadingStudents, 
    error: errorStudents, 
    post: postStudent 
  } = useFetch("http://localhost:4000/students")

  const { 
    data: subjects,
    loading: loadingSubjects, 
    error: errorSubjects, 
    post: postSubject 
  } = useFetch("http://localhost:4000/subjects")

  // WARNING: codingan dibawah ini bukan best practice untuk handling multiple input pada form
  // Lihat Best Practice di dokumentasi dibawah ini
  // https://reactjs.org/docs/forms.html#handling-multiple-inputs
  const [inputStudent, onInputStudentChange, resetStudent] = useInput("")
  const [inputTitle, onInputTitleChange, resetTitle] = useInput("")
  const [inputProfessor, onInputProfessorChange, resetProfessor] = useInput("")

  function onStudentSubmit(event){
    event.preventDefault()
    postStudent({
      name: inputStudent
    })
    resetStudent()
  }
  function onSubjectSubmit(event){
    event.preventDefault()
    postSubject({
      title: inputTitle,
      professor: inputProfessor
    })
    resetTitle()
    resetProfessor()
  }

  return (
    <div style={{ width: "100%", display: "flex", padding: "2rem" }}>
      <div style={{ flex: 1 }}>
        <h1>Students</h1>
        <form onSubmit={onStudentSubmit}>
          <input value={inputStudent} onChange={onInputStudentChange} placeholder="student"/>
        </form>
        <ul>
        {
          students.map(student => <li key={student.id}>{student.name}</li>)
          
        }
        </ul>
        {
          loadingStudents && <p>Loading...</p>
        }
        {
          errorStudents && <p>{errorStudents.message}</p>   
        }
      </div>
      <div style={{ flex: 1 }}>
        <h1>Subjects</h1>
        <form onSubmit={onSubjectSubmit}>
          <input value={inputTitle} onChange={onInputTitleChange} placeholder="title"/>
          <input value={inputProfessor} onChange={onInputProfessorChange} placeholder="professor"/>
          <input type="submit" value="add" />
        </form>
        <ul>
        {
          subjects.map(subject => <li key={subject.id}>{subject.title}: {subject.professor}</li>)
        }
        </ul>
        {
          loadingSubjects && <p>Loading...</p>
        }
        {
          errorSubjects && <p>{errorSubjects.message}</p>   
        }
      </div>
    </div>
  );
}

export default App;

