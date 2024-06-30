const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const PORT = process.env.PORT || 5000
const DB = process.env.DB_URL

const { Schema } = mongoose

const productSchema = new Schema({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
})

const Product = mongoose.model("Product", productSchema)

app.post("/products", async (req, res) => {
    try {
        const { image, title, price, category } = req.body
        const product = new Product({
            image,
            title,
            price,
            category,
        })
        await product.save()
        res.status(201).send(product)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.delete("/products/:id", async (req, res) => {
    try {
        const productId = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).send({ error: "Product not found" });
        }
        res.status(200).send({ message: "Product deleted successfully", deletedProduct });
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get("/products", async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).send(products)
    } catch (error) {
        res.status(500).send(error)
    }
})

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB!')
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    })
    .catch(error => {
        console.error('Connection error', error)
        process.exit(1)
    })
