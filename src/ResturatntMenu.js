import { useParams } from "react-router-dom";
import useGetListMenu from "./utils/useGetListMenu";
const ResturantMenu=()=>{
    const {resId}=useParams();
    const list=useGetListMenu(resId)
    return (
        <>
        <h1>{list?.name}</h1>

        </>
    )
}
export default ResturantMenu;