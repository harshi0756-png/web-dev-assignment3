import { useState } from "react";
import Header from "./Header";
import StudentTable from "./StudentTable";
import AddStudentForm from "./AddStudentForm";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aman", score: 45 },
    { id: 2, name: "Riya", score: 30 },
    { id: 3, name: "Anshul", score: 67},
    { id: 4, name: "Raj", score: 55},
  ]);

  const updateScore = (id, newScore) => {
    setStudents(students.map(s =>
      s.id === id ? { ...s, score: newScore } : s
    ));
  };

  const addStudent = (name, score) => {
    setStudents([
      ...students,
      { id: Date.now(), name, score }
    ]);
  };

  return (
    <>
      <Header />
      <AddStudentForm addStudent={addStudent} />
      <StudentTable students={students} updateScore={updateScore} />
    </>
  );
}

export default App;