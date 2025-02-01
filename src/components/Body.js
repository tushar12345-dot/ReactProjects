const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="restaurant-container">
                {resList.map(restaurant => (<RestaurantCard key={restaurant.data.id} resData={restaurant} />))}
            </div>
        </div>
    )
}