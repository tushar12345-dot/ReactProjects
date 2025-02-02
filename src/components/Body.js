import RestaurantCard from "./RestaurantCard";
import { useState ,useEffect} from "react";
import resList from "../utils/mockData";
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    useEffect(() => {console.log("UseEffect") },[]);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    filteredList = listOfRestaurants.filter(
                        (res) => res.data.starRating > 4
                    );
                    setListOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-container">
                {listOfRestaurants.map(restaurant => (<RestaurantCard key={restaurant.data.id} resData={restaurant} />))}
            </div>
        </div>
    );
};

export default Body;