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

export async function fetchRestaurant(req,res){
    try{
        const data = await RestaurantModel.find({});
        if(!data){
            return res.status(404).json({"message": "Restaurants not found"})
        }
        return res.status(200).json(data)
    }
    catch(err){
        return res.status(500).json({"errorMessage":err})
    }
}

export async function updateRestaurant(req,res){
    try{
        // console.log(req.params.id , "req.params");
        const iddd = req.params.id;
        let updatedRestaurant = await RestaurantModel.findByIdAndUpdate(iddd,req.body,{new:true})
        return res.status(200).json(updatedRestaurant);
    }
    catch(err){
        return res.status(500).json({"errorMessage":err})
    }
}

export async function deleteRestaurant(req,res){
    try{
        const iddd = req.params.id;
        let deletedRestaurant = await RestaurantModel.findByIdAndDelete(iddd);
        return res.status(200).json({"deletedRest":deletedRestaurant});
    }
    catch(err){
        return res.status(500).json({"errorMessage":err})
    }
}

