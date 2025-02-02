import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    const [searchText, setSearchText] = useState("");
    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button className="search-btn" onClick={() => {
                        //filter the restaurant cards and update the UI
                        const filteredRestaurants = listOfRestaurants.filter(
                            (res) => res.data.resName.includes(searchText)
                        );
                        setListOfRestaurants(filteredRestaurants);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
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