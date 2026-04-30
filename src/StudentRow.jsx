function StudentRow({ student, updateScore }) {
  const status = student.score >= 40 ? "Pass" : "Fail";

  return (
    <tr>
      <td>{student.name}</td>

      <td>
        <input
          type="number"
          value={student.score}
          onChange={(e) =>
            updateScore(student.id, Number(e.target.value))
          }
        />
      </td>

      <td style={{ color: status === "Pass" ? "green" : "red" }}>
        {status}
      </td>
    </tr>
  );
}

export default StudentRow;