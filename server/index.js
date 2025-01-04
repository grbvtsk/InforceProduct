const express = require("express")
const productsRouter = require("./route")

const app = express()
const cors = require("cors")
const PORT = 5000

app.use(cors())
app.use(express.json());
app.use("/api/products", productsRouter);

app.listen(PORT,()=>{
    console.log("app started")
})
