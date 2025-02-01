const RestaurantCard = (props) => {
    const { resData } = props;
    const { resName, cuisines, starRating, costForTwo, imageSource, deliveredIn } = resData?.data;
    return (
        <div className="restaurant-card">
            <img className="food-image" src={imageSource} alt="foodImage" />
            <h3>{resName}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{starRating} stars</h4>
            <h4>₹{costForTwo / 10} FOR TWO</h4>
            <h4>Delivered in {deliveredIn} minutes</h4>
        </div>
    );
};

export default RestaurantCard;