import { useDispatch, useSelector } from "react-redux";
import Footer from "../componets/Footer";
import InputForm from "./InputForm";
import Value from "./Value";
import { resetTodos } from "../redux/TodosSlics";
import ShowTodosByCategory from "./../componets/showTodosByCategory";
import { easeOut, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';


const TodoMain = () => {

  
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todosReducer.todos);
  
  useEffect(() => {
     
    localStorage.setItem('todos', JSON.stringify(todos));
    
   }, [todos])
   
  const [open, setOpen] =useState(false); 
  const handleOpen = () => setOpen(false);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    p: 4,
    height:140
  };
  
  const handleModel = ()=>{
    dispatch(resetTodos())
    setOpen(false)
  }


  return (
    <div className="max-w-6xl mx-auto space-y-14   px-5 ">
    
      {todos.length > 0 && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 1, opacity: 1 }}
          transition={{ delay: 0.0, duration: 1, ease: easeOut }}
          className="w-full bg-TodoBlue p-10 rounded-2xl"
        >
          <ShowTodosByCategory />
        </motion.div>
      )}

      <div className="w-full p-10 rounded-2xl bg-TodoBlue">
        <InputForm />
        {
          <div className="w-full flex flex-col items-center justify-start px-3">
            {todos && todos.map((todo) => <Value key={todo.id} {...todo} />)}
          </div>
        }

        {todos.length > 0 ? (
          <div className="text-center mt-5">
            <button
              onClick={()=>setOpen(true)}
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
       
     




        <Modal
        open={open}
        onClose={handleClose}
      >
        <Box  sx={style} 
        className=" bg-TodoBlue text-red-700 font-semibold text-xl tracking-wides rounded-md
         border border-red-600  shadow-[_5px_10px_60px] shadow-[#070885] ">
          <div className="text-center">
          Are You sure to <span className="underline">remove</span> all the todos?
          </div>
          <div className="w-full justify-center items-center flex gap-6 mt-3">
            <button onClick={handleModel} className="text-orange-500 border border-gray-500 px-6 py-2 hover:text-red-700 hover:border-red-700 transition delay-100 duration-100">Yes</button>
            <button onClick={()=>setOpen(false)} className="text-orange-500 border border-gray-500 px-6 py-2 hover:text-red-700 hover:border-red-700 transition delay-100 duration-100">No</button>
          </div>
        </Box>
      </Modal>
    


      
        <Footer />
      </div>
    </div>
  );
};

export default TodoMain;
