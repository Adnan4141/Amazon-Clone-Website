import { useDispatch, useSelector } from "react-redux";
import Footer from "../componets/Footer";
import InputForm from "./InputForm";
import Value from "./Value";
import { resetTodos } from "../redux/TodosSlics";
import ShowTodosByCategory from "./../componets/showTodosByCategory";

const TodoMain = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todosReducer.todos);
 

  return (
    <div className="w-full   px-5 bg-[#53C6F9]">
     { todos.length>0 && 
      <div className="w-full bg-TodoBlue p-10 ">
        <ShowTodosByCategory />
      </div>
     }


      <div className="w-full p-10 bg-TodoBlue">
        <InputForm />
        {
          <div className="w-full flex flex-col items-center justify-start px-3">
            {todos && todos.map((todo) => <Value key={todo.id} {...todo} />)}
          </div>
        }

        {todos.length > 0 ? (
          <div className="text-center">
            <button
              onClick={() => dispatch(resetTodos())}
              className="border border-gray-500 px-5 py-1 text-orange-400 font-semibold tracking-wider"
            >
              Remove Todos
            </button>
          </div>
        ) : (
          <div className="w-full border border-gray-200 p-3 my-10 mx-3 shadow-lg  shadow-blue-800 ">
            <div
              className="  font-bold text-TodoYellow text-center
     "
            >
              Your todo list is Empty!
            </div>
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
};

export default TodoMain;
