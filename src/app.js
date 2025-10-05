const express=require('express')
const cookieParser=require('cookie-parser');
const productRoutes=require('./Routes/product.route');

const app=express();

app.use(express.json());
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.status(200).json({
        "message": "Product Service is Running"
    });
});
app.use("/api/products",productRoutes)


module.exports=app;