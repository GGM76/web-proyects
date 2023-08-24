import React from 'react'

const ListIssue = ({ name, title, id, labels }) => {
  return (
    <div>
      <tr>
        <td>{name}</td>
        <td>{title}</td>
        <td>{id}</td>
      </tr>
    </div>
  )
}

export default ListIssue
