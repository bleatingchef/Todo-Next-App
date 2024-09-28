import React from 'react';

const Todo = ({ id, title, description, mongoId, complete, deleteTodo, completeTodo }) => {
  return (
    <tr className="bg-white border-b text-gray-500 ">
      <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap ">
        {id + 1}
      </th>
      <td className={`px-6 py-4 ${complete?"line-through":""}`}>
        {title}
      </td>
      <td className={`px-6 py-4 ${complete?"line-through":""}`}>
        {description}
      </td>
      <td className="px-6 py-4">
        {complete ? 'Completed' : 'Pending'}
      </td>
      <td className="px-6 py-4 flex gap-1">
        <button onClick={()=>{deleteTodo(mongoId)}} className="px-4 py-2 bg-red-500 text-white">Delete</button>
        {complete?"":<button onClick={()=>{completeTodo(mongoId)}} className="px-4 py-2 bg-green-500 text-white gap-2">Done</button>} 
      </td>
    </tr>
  ); 
};

export default Todo;
