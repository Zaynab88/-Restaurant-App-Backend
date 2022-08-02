import express from 'express'
import { Order } from '../entities/Order';
import { OrderLines } from '../entities/OrderLines';

const router = express.Router();

router.get("/:id", async (req, res) => {
    try {
        const id = +req.params.id;
        const order = await Order.findOne({
            where: { id }, // get the orders with the following relations confirmed --->
            relations: {
                orderLines: true,
            }
        });
        if (!order)
            return res.status(404).json({ message: "Order Not Found" });
        return res.json(order);




    } catch (error) {
        return res.status(500).json({ message: error });


    };

})




router.post('/', async (req, res) => {
    try {
    const { firstName, lastName, mobileNum, city, address, orderInfo } = req.body;
    if(!firstName || !lastName || !mobileNum ||!city ||!address || !orderInfo) return res.status(404).send("missing data");
    const order = Order.create({
        firstName: firstName,
        lastName: lastName,
        mobileNum: mobileNum,
        city: city,
        address: address
    });
    

if(!order) return res.status(404).send("order not found")
    await order.save()


    for (let i = 0; i < orderInfo.length; i++) {

        const orderlines = OrderLines.create({

            quantity: orderInfo[i].quantity,
            product: orderInfo[i].product,
            order:order
        })
    
        await orderlines.save()
    };

    return res.json(order)
} catch (error) {
    return res.status(500).send(error);



};

});


export { router as ordersRouter }
