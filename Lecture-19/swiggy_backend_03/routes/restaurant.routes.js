import { createRestaurant, deleteRestaurant, fetchRestaurant, updateRestaurant } from "../controllers/restaurant.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";



export default function restaurantRoute(app){
    // create
    app.post('/api/restaurant', createRestaurant);
    // read
    app.get('/api/restaurants', verifyToken , fetchRestaurant);
    // update
    app.patch('/api/restaurant/:id', updateRestaurant)
    // delete
    app.delete('/api/restaurant/:id', deleteRestaurant)
}

