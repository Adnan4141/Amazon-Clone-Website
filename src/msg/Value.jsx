/* eslint-disable react/prop-types */
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteTodos } from '../redux/TodosSlics';

const Value = ({id,todo}) => {
    const dispatch = useDispatch();

  return (
  <div className="my-2 flex justify-between w-full border border-l-[6px] border-TodolightGreen p-2   ">
      <p className="text-white font-bold ">
   {todo}
   </p>

   <button onClick={()=> dispatch(deleteTodos(id))} 
   className="text-white font-bold hover:text-orange-600 delay-75 transition">
   <DeleteIcon/>
   </button>
  </div>
  )
}

export default Value