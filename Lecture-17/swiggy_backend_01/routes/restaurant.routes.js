import { createRestaurant } from "../controllers/restaurant.controller.js";



export default function restaurantRoute(app){
    // create
    app.post('/api/restaurant', createRestaurant);
    // read
}

