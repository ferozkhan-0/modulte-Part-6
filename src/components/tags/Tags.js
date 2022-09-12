import { useDispatch, useSelector } from "react-redux";
import Tag from "./Tag";
import { fetchTags } from "../../features/tags/tagsSlice";
import { useEffect } from "react";
import Loading from "../ui/Loading";

export default function Tags() {

    const {tags, isLoading, isError, error} = useSelector(state=>state.tags);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchTags())
    },[dispatch])

    let content;

    if (isLoading) content = <Loading />;
    if (!isLoading && isError)
        content = <div className="col-span-12">{error}</div>;

    if (!isError && !isLoading && tags?.length === 0) {
        content = <div className="col-span-12">No tags found!</div>;
    }

    if (!isError && !isLoading && tags?.length > 0) {
        content = tags.map((tag) => (
            <Tag key={tag.id} title={tag.title}/>
        ));
    }
    
    return (
        <section>
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
                {content}
            </div>
        </section>
    );
}
