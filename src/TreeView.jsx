/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import TreeNode from './TreeNode'
import ModalForm from './ModalForm'

function TreeView() {
    const [tree,setTree] =useState({
        id:1,
        title:"parent",
        message:"I am the parent for all",
        childrenCount: 2,
        children:[]

    })
 
    const [isOpen,setIsOpen]=useState(null)
    const [parentId ,setParentId]=useState(null)

    // form Submit
  
        const onSubmit = ( newNode) => {
              //Help us to find the Child nodes   
            const findChildNode =(node)=>{
                   if(node.id==parentId){
                       if(node.children.length>=node.childrenCount){
                        return false
                       }


                        //new child node added
                        node.children.push({
                            id: Date.now(),
                            ...newNode,
                            children: []
                        })
                          return true

                   }
                   //check child nodes recursively
                   for(let i=0;i<node.children.length;i++){
                    console.log(i);
                    
                       if(findChildNode(node.children[i])) return true    
                   }


                   return false;

            }
            setTree((prev)=>{
                  console.log(prev);
                  
                 let prevTree = JSON.parse(JSON.stringify(prev))
                 let success =findChildNode(prevTree)
                 if(!success){
                 alert("Child exceed the Limit to create Folder")
                 }
                 return prevTree
            })

          };
          
 
    
    // /Form open 
  const modelOpen =(id)=>{
        setIsOpen(true)
        setParentId(id)
        console.log(id);
        
        
    } //Form close
    const closeModal =()=>{
        setIsOpen(false)  
    }

     
   const addNodeToParent=()=>{

   }


 
  return (
    <div>
    <div>Tree Folder Structure</div>
    <TreeNode node ={tree} modelOpen={modelOpen} ></TreeNode>
    <ModalForm isOpen={isOpen}  onSubmit={onSubmit} onClose={closeModal}></ModalForm>
    </div>
  )
}

export default TreeView
