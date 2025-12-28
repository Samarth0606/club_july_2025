import RestaurantModel from "../models/Restaurant.model.js";


export async function createRestaurant(req,res){
    try{
        const {name,imageUrl,rating,cuisines,deliveryTime} = req.body;
        const newRestaurant = await RestaurantModel.create({name,imageUrl,rating,cuisines,deliveryTime})
        return res.status(201).json({"newRestaurant":newRestaurant})
    }
    catch(err){
        return res.status(500).json({"errorMessage":err})
    }
}