import "./App.css";
import Body from "./Body";
// import Search from "./Search";
import { Link } from "react-router-dom";
import {useContext,useState, useEffect } from "react";
import useLine from "./utils/useLine";
import UserContext from "./utils/UserContext";
function MainBody() {
    const [imageGridCard, setImageGridCard] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const[inputtext,setInputtext]=useState('');
    const[index,setIndex]=useState(null)
    console.log(index,'index')
    const checkLine=useLine()
    useEffect(() => {
      fetchData();
    }, []);
    const fetchData = async () => {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      setImageGridCard(data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setSearchData(data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };
    function updateInputText(event){
      setInputtext(event.target.value)
  
    }
    function searchByText(){
      const filteredData = imageGridCard.filter(
        (item) => item?.info?.name.toLowerCase().includes(inputtext)
      );
      setSearchData(filteredData);
    }
    if(checkLine==false){
      return (
        <h1>No internet</h1>
      )
    }
    const {loggedIn,setUserName}=useContext(UserContext)
    return (imageGridCard.length===0)? <p>Loading .....</p>: (
      <div className="m-0 p-0">
        <div className="flex space-x-4 my-10">
        <div className="search-input p-10">
        <input type="text" className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500" 
        onChange={updateInputText} value={inputtext} />
        <button onClick={searchByText} className="ml-5 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >Enter</button>
        </div>
          <button className="bg-green-300 rounded-lg h-[45px] mt-10 py-2 px-4 font-semibold"
            onClick={() => {
              const filteredData = imageGridCard.filter(
                (item) => item?.info?.avgRatingString >= 4.1
              );
              setSearchData(filteredData);
            }}
          >
            Search for rating
          </button>
        </div>
        <div>
        <span>User Name : </span>
        <input type="text" value={loggedIn} onChange={($event)=>setUserName($event.target.value)} className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="flex flex-row gap-3 flex-wrap">
          {searchData.map((data) => (
            <Link  key={data?.info?.id} to={"/resturant/"+data?.info?.id}>
            <Body key={data?.info?.id} cardData={data} setIndex={()=>{setIndex(data?.info?.id)}} />
            </Link>
          ))}
        </div>
        
        </div>
    );
  }
export const addLevelOnCard=()=>{
   return ()=>{
       return (
        <div>
        <label>Open</label>
         <Body/>
        </div>
       )
   }
}
export default MainBody;
