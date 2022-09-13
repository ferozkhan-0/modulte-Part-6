import { useDispatch, useSelector } from "react-redux";
import { tagSeleced,tagRemoved} from "../../features/filter/filterSlice";

export default function Tag({title}) {

    const {tags:selectedTags} = useSelector(state=>state.filter)
    const dispatch= useDispatch()

    const isSelected=selectedTags.includes(title)?true:false

    const style=isSelected?'bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer':
    'bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer'

    const handleSelect=()=>{
        if(isSelected){
            dispatch(tagRemoved(title))
        }else{
            dispatch(tagSeleced(title))
        }
    }
    return (
        <div className={style} onClick={handleSelect}>
            {title}
        </div>
    );
}