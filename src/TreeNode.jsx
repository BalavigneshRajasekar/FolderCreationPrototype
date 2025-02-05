/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function TreeNode({node ,modelOpen}) {
  return (
    <div style={{border:"1px solid white",padding:"10px"}}>
       <div>
        <h2>{node.title}</h2>
        <h3>{node.message}</h3>
        <button onClick={()=>{modelOpen(node.id)}}>Add New Node</button>
       </div>
       <div style={{marginLeft:"20px"}}>
       {node.children.map(child => (
         <TreeNode key={child.id} node={child}  modelOpen={modelOpen}/>
       ))}
       </div>
    </div>
  )
}

export default TreeNode
