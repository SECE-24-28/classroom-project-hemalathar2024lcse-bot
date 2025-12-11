// src/Section.jsx
function Section({ friends }) {
  return (
    <div>
      <h2>Friends List</h2>
      <ul>
        {friends.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  )
}

export default Section;