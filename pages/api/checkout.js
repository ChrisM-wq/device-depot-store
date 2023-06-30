import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handler( req, res ) {

    if ( req.method !== 'POST' ) {
        res.json('Should be a POST request!');
        return;
    };

    const { 
        name, email, city, postalCode, 
        streetAddress, country, cartProducts
    } = req.body;

    await mongooseConnect();

    const productIds = cartProducts;
    const uniqueIds = [...new Set(productIds)];
    const productInfos = await Product.find({ _id: uniqueIds });

    let line_items = [];
    for (const productId of uniqueIds) {
        const productInfo = productInfos.find(p => p._id.toString() === productId);
        const quantity = productIds.filter(id =>  id === productId)?.length || 0;
        if (quantity > 0) {
            line_items.push({
                quantity,
                price_data: {
                    currency: 'ZAR',
                    product_data: {name: productInfo.name},
                    unit_amount: quantity * productInfo.price,
                }
            });
        }
        
    }
    console.log(line_items)
    res.json({ line_items });

};