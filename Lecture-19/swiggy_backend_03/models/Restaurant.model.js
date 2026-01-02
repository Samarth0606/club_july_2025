import mongoose from "mongoose";

// schema
const restaurantSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    rating: String,
    cuisines: String,
    deliveryTime: String
})

// model
const RestaurantModel = mongoose.model('Restaurant' , restaurantSchema)

// export
export default RestaurantModel;