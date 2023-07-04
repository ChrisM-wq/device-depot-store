import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handle(req, res) {

    await mongooseConnect();

    const { categories, ...filters } = req.query;

    const productsQuery = { 
        category: categories.split(','),
    };

    if (Object.keys(filters) > 0) {
        productsQuery.properties = filters;
    }

    console.log(productsQuery);
    
    res.json(await Product.find(productsQuery));

};