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
    )
}
const resList = [

    {

        data:
        {
            id: 1,
            resName: "Foodie",
            cuisines: ["Veg Thali", "Snacks", "Juice"],
            starRating: "4.4",
            costForTwo: 4000,
            deliveredIn: "35",
            imageSource: require('./images/delicious-food-table (1).jpg'),
        }
    },
    {

        data: {
            id: 2,
            resName: "Food Villa",
            cuisines: ["Pizza", "Snacks", "Juice"],
            starRating: "4.5",
            costForTwo: 2000,
            deliveredIn: "40",
            imageSource: require('./images/delicious-food-table.jpg'),

        }
    },
    {

        data: {
            id: 3,
            resName: "BestSnakes",
            cuisines: ["Burger", "Fries", "Shakes"],
            starRating: "4.4",
            costForTwo: 5000,
            deliveredIn: "35",
            imageSource: require('./images/side-view-pizza-with-slices-bell-pepper-pizza-slices-flour-board-cookware.jpg'),


        }
    },
    {
        data: {
            id: 4,
            resName: "MyFood",
            cuisines: ["Cold Coffee", "Snacks", "Juice"],
            starRating: "4.5",
            costForTwo: 2000,
            deliveredIn: "40",
            imageSource: require('./images/chocolate-milkshake-with-whipped-cream-chocolate-chips.jpg'),

        }
    },
    {
        data: {
            id: 5,
            resName: "HealthyJuice",
            cuisines: ["Shakes", "Snacks", "Juice"],
            starRating: "4.5",
            costForTwo: 4000,
            deliveredIn: "30",
            imageSource: require('./images/delicious-indian-food-tray.jpg'),

        }

    },
    {
        data: {
            id: 6,
            resName: "FoodCart",
            cuisines: ["Momos", "Snacks", "Juice"],
            starRating: "4.4",
            costForTwo: 4000,
            deliveredIn: "55",
            imageSource: require('./images/delicious-food-table.jpg'),
        }
    },
    {
        data: {
            id: 7,
            resName: "TopFood",
            cuisines: ["Noodles", "Juice"],
            starRating: "4.4",
            costForTwo: 4000,
            deliveredIn: "45",
            imageSource: require('./images/side-view-pizza-with-slices-bell-pepper-pizza-slices-flour-board-cookware.jpg'),
        }
    },
    {
        data: {
            id: 8,
            resName: "HealthyJuice",
            cuisines: ["Shakes", "Snacks", "Juice"],
            starRating: "4.5",
            costForTwo: 4000,
            deliveredIn: "30",
            imageSource: require('./images/chocolate-milkshake-with-whipped-cream-chocolate-chips.jpg'),

        }

    },
    {
        data: {
            id: 9,
            resName: "TopFood",
            cuisines: ["Noodles", "Juice"],
            starRating: "4.4",
            costForTwo: 4000,
            deliveredIn: "45",
            imageSource: require('./images/delicious-indian-food-tray.jpg'),
        }
    },
    {
        data: {
            id: 10,
            resName: "MyFood",
            cuisines: ["Cold Coffee", "Snacks", "Juice"],
            starRating: "4.5",
            costForTwo: 2000,
            deliveredIn: "40",
            imageSource: require('./images/delicious-food-table (1).jpg'),

        }
    },
    {
        data: {
            id: 11,
            resName: "TopFood",
            cuisines: ["Noodles", "Juice"],
            starRating: "4.4",
            costForTwo: 4000,
            deliveredIn: "45",
            imageSource: require('./images/chocolate-milkshake-with-whipped-cream-chocolate-chips.jpg'),
        }
    },
    {
        data: {
            id: 12,
            resName: "MyFood",
            cuisines: ["Cold Coffee", "Snacks", "Juice"],
            starRating: "4.5",
            costForTwo: 2000,
            deliveredIn: "40",
            imageSource: require('./images/delicious-food-table.jpg'),

        }
    },
    {
        data: {
            id: 13,
            resName: "TopFood",
            cuisines: ["Noodles", "Juice"],
            starRating: "4.4",
            costForTwo: 4000,
            deliveredIn: "45",
            imageSource: require('./images/delicious-food-table (1).jpg'),
        }
    },
    {

        data: {
            id: 14,
            resName: "Food Villa",
            cuisines: ["Pizza", "Snacks", "Juice"],
            starRating: "4.5",
            costForTwo: 2000,
            deliveredIn: "40",
            imageSource: require('./images/delicious-food-table.jpg'),

        }
    },
];