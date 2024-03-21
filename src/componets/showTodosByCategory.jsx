import { useState } from "react";
import { lists } from "../api/Data";
import { useSelector } from "react-redux";

const ShowTodosByCategory = () => {
  const todos = useSelector((state) => state.todosReducer.todos);
  const [showCategory, setShowCategory] = useState("");

  const itemContains = todos.filter(
    (todo) => todo.category.toLowerCase() == showCategory.toLowerCase()
  );
  

  return (
    <div className="flex border">
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
        <div className="w-full border border-gray-200 px-6  mx-0 shadow-2xl  shadow-blue-600 ">
          {itemContains && (
            <div className="w-full">
              {todos.map((todo) => {
                if (todo.category.toLowerCase() == showCategory.toLowerCase()) {
                  return (
                    <div
                      key={todo.todo}
                      className="border border-l-[6px] mt-3 border-TodolightGreen p-2  text-white font-bold "
                    >
                      {todo.todo}
                      
                    </div>
                  );
                }
              })}
            </div>
          )}

          {itemContains.length < 1 && (
            <div className="w-full border border-gray-200 p-6 my-10 mx-3 shadow-lg  shadow-blue-800 ">
              <div
                className="  font-bold text-TodoYellow text-center
        "
              >
                {showCategory} todo list is Empty!
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full flex items-center justify-center">
          <p className="text-TodolightGreen font-bold">
            Click on the tab to choose your todos category
          </p>
        </div>
      )}
    </div>
  );
};

export default ShowTodosByCategory;
