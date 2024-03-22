import { useState } from "react";
import { lists } from "../api/Data";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTodos } from "../redux/TodosSlics";
import {  easeOut, motion } from "framer-motion"


const ShowTodosByCategory = () => {
  const todos = useSelector((state) => state.todosReducer.todos);
  const [showCategory, setShowCategory] = useState("");
  const dispatch = useDispatch();

  const itemContains = todos.filter(
    (todo) => todo.category.toLowerCase() == showCategory.toLowerCase()
  );

  return (
    <div className="flex flex-col round md:flex-row border">
      <div className="flex flex-col text-white border-r border-gray-400">
        {lists.map((list) => (
          <button
            onClick={() => setShowCategory(list.title)}
            key={list.title}
            className=" px-9 py-4 border text-gray-400 hover:text-white font-semibold"
          >
            {list.title}
          </button>
        ))}
      </div>



      {showCategory.length > 0 ? (
        <div className="w-full border border-gray-200 px-6 h-42 max-h-44  mx-0 shadow-2xl  shadow-blue-600 overflow-y-scroll scrollbar-hide">
          {itemContains && (
            <div className="w-full ">
              {todos.map((todo) => {
                if (todo.category.toLowerCase() == showCategory.toLowerCase()) {
                  return (
                    <div
                      key={todo.todo}
                      className="border flex justify-between border-l-[6px] my-2 border-TodolightGreen p-2  text-white font-bold "
                    >
                      {todo.todo}
                      <div>
                        
                        <button  onClick={()=> dispatch(deleteTodos(todo.id))}
                        className="text-white font-bold hover:text-orange-600 delay-75 transition">
                         <DeleteIcon/>
                        </button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          )}
     

          {itemContains.length < 1 && (
            <div className="w-full border border-gray-200 p-6 my-10 mx-3 shadow-lg  shadow-blue-800 ">
              <motion.div
                initial={{y:-50,opacity:0}}
                animate={{y:1,opacity:1}}
                transition={{delay:0.0,duration:1,ease:easeOut}}
                className="  font-bold text-TodoYellow text-center
        "
              >
                {showCategory} todo list is Empty!
              </motion.div>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full flex items-center min-h-32 justify-center">
          <p className="text-TodolightGreen font-bold">
            Click on the tab to choose your todos category
          </p>
        </div>
      )}
    </div>
  );
};

export default ShowTodosByCategory;
