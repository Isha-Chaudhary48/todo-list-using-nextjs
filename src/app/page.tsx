
"use client"
import {useState} from 'react'
  type Todo = {
    text:string;
    completed:boolean;
  }
export default function Home() {
  const [todos,setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('')



  function addTodos(){
    if(input.trim() === '') return;
    setTodos([...todos,{text:input, completed: false}])
    setInput('')
  }

  return (
    <> 
    
    <div className="h-[100vh] flex justify-center items-center flex-col">
      <div className="bg-[#FFEC99] min-h-[70%] rounded-2xl flex justify-centers items-center flex-col h-auto w-[600px]">
      <h1 className="text-3xl  text-black mt-10">TODO LIST</h1>
<form action="">
    <div className="mt-20" >
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="ADD TASKS" className=" h-10 w-[350px] bg-white text-black rounded-sm pl-5" />
      <button onClick={addTodos} className=" h-10  ml-2  p-1 bg-amber-500">ADD</button>
      </div>
</form>

    
    <div>
      <ul className="h-auto mt-30 flex justify-center items-center ">
        
        <input type="checkbox" />
        <li className=" ml-2   text-center text-2xl  text-black  ">
          hello

        </li>
        <button className="ml-2 bg-red-700 p-1 rounded-sm">delete</button>
      </ul>
      
    </div>
    </div>
    </div>
    
    </>

  );
}
