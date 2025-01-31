import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import "./TodoApp.css"
export default function TodoApp(){
    let [Todos , setTodos] = useState([{task:"Sample-task" , id : uuidv4() ,isDone : false} ]);
    let [NewTodo , setNewTodo] = useState("");
    function addNewTask(){
        setTodos((prevTodos)=>{
           return [...prevTodos , {task:NewTodo , id: uuidv4() ,isDone : false}]
    });
        setNewTodo("");
    }
    function deleteTodo(id){
        // console.log(Todos.filter((todo)=> todo.id != id));
        setTodos((prevTodos)=>prevTodos.filter((todo)=> todo.id != id));
    }
    function update(event){
        setNewTodo(event.target.value);
        }
    function taskdone(id){
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                if(todo.id === id){
                    return{
                        ...todo ,
                            isDone : true,
                    };
                }
                else{
                    return todo;
                }
            })
        );
    }
    function clearAll(){
        setTodos([]);
    }
    return(
        <div>
            <h1><i>Your ToDo List</i></h1>
            <input className="inp" type="text" value={NewTodo} placeholder="Write your task to add in List" onChange={update}/>
            <button className="addButton" onClick={addNewTask}>ADD</button>
            <hr />
            <ul>
                {Todos.map((todo)=>{
                return (
                <li key={todo.id}>
                    <div className="item">
                    {todo.isDone?(
                        <span className='donetask'><s>{todo.task}</s></span>
                    ):(
                        <span>{todo.task}</span>
                    )  
                    }
                        <button onClick={()=>deleteTodo(todo.id)} ><i className="fa-solid fa-trash"></i></button>
                        <button onClick={()=>taskdone(todo.id)}>
                        {todo.isDone?(
                            <i className="fa-solid fa-circle-check"></i>
                        ):(
                            <i className="fa-regular fa-circle-check"></i>
                        )  
                        }
                        </button>
                    </div>
                </li>);
                })}
                
            </ul>
            <hr />
            <button onClick={clearAll}>Clear All</button>
        </div>
    );
}