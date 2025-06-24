
"use client"


import {ChangeEvent, FormEvent, useState} from 'react'
  type Todo = {
    text:string;
    completed:boolean;
  }
export default function Home() {
  const [todos,setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>('')



  function addTodos(e: FormEvent){
    e.preventDefault()
    if(input.trim() === '') return;
    setTodos([...todos,{text:input, completed: false}])
    setInput('')
  }

  function toggleComplete(index:number){
    const updateTodos = [...todos]
    updateTodos[index].completed = !updateTodos[index].completed
    setTodos(updateTodos)
  }
  function deleteTodo(index:number){
    setTodos(todos.filter((_,i)=>i != index))
  }

  return (
    <> 
    
    <div className="h-[100vh] flex justify-center items-center flex-col">
      <div className="bg-[#FFEC99] min-h-[70%] rounded-2xl flex justify-centers items-center flex-col h-auto w-[600px]">
      <h1 className="text-3xl  text-black mt-10">TODO LIST</h1>
<form onSubmit={addTodos}>
    <div className="mt-20" >
      <input type="text" value={input} onChange={(e:ChangeEvent<HTMLInputElement>)=>
        setInput(e.target.value)
      } placeholder="ADD TASKS" className=" h-10 w-[350px] bg-white text-black rounded-sm pl-5" />
      <button type="submit" className=" h-10  ml-2  p-1 bg-amber-500">ADD</button>
      </div>
</form>

    
    <div>
      <ul className='mt-10'>
        {todos.map((todo,index)=>
          <li key={index}>
       <div className='mt-5'>
              <input type="checkbox" checked={todo.completed} onChange={()=>toggleComplete(index)} />
            
             <span className={`text-xl ml-2 text-black ${todo.completed ? "line-through text-gray-500" : "" }`} >{todo.text}</span>
              <button  onClick={() => deleteTodo(index)}
                  className="ml-2 bg-red-700 text-white px-2 py-1 rounded-sm">Delete</button>
                  </div>

          </li>
        )}
       
      
      </ul>
      
    </div>
   
    </div>
    </div>
    
    </>

  );
}
