import { useState } from "react";
import { lists } from "../api/Data";
import uuid4 from "uuid4";
import { useDispatch } from "react-redux";
import { addTodos } from "../redux/TodosSlics";


const InputForm = () => {
 const dispatch = useDispatch();
const [todo,setTodo]  = useState("")
const [category,setCategory] = useState("")




const handleSubmit = (e)=>{
  e.preventDefault();
  const dataObj =   {
  id:uuid4(),
  category,
  todo
 }
 if(category && todo ){
   if(category!=="category"){
     dispatch(addTodos(dataObj))
   }
  else
      alert("Please Select Valid Category")
 }
 else 
 alert("Fillup form please")


}
 

const handleTodo = (e)=>{
  setTodo(e.target.value)
}

const handleCategory = (e)=>{
  setCategory(e.target.value)
}





  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="w-full flex flex-col md:flex-row gap-2 md:gap-8  bg-TodoBlue">
          <input
           onChange={handleTodo}
            className="md:w-3/4 text-center md:text-start bg-TodoBlue border text-white border-gray-100 focus:border focus:border-orange-500 rounded-md py-2 px-5 placeholder:text-gray-100"
            placeholder="Enter your Todo"
            type="text"
          />

          <select onChange={handleCategory} className="bg-TodoBlue text-white px-10 py-2 md:py-0 border rounded-md font-bold border-gray-100">
            <option
              className="text-center md:text-start  text-gray-600 font-bold tracking-wider"
              defaultChecked 
              value="category"
              > Categories
                </option>

                {
                    lists.map((list)=>(
                        <option key={list.value}
              className="text-white font-bold tracking-wider"
                > {list.title}
                </option>
                    ))
                }
            
          </select>
        </div>

        <div className="w-full my-3">
          <button className="text-white font-semibold w-full border hover:text-orange-500 transition duration-500 hover:font-bold tracking-wider border-gray-100 rounded-md py-2 px-5 placeholder:text-gray-100">
            ADD TODO
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
