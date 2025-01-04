const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


exports.getAllProducts = async (req,res)=>{
    try {
        const products = await prisma.product.findMany()
        res.status(200).json(products);
    }catch (error){
        console.error(error);
        res.status(500).json({ error: "Failed to get all products" });
    }
}

exports.createProduct = async (req, res) => {
    try {
        const { name, count, weight, width, height } = req.body;

        if (!name || !count || !weight || !width || !height) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newProduct = await prisma.product.create({
            data: {
                name,
                count: parseInt(count, 10),
                weight,
                width: parseInt(width, 10),
                height: parseInt(height, 10)
            }
        });

        res.status(201).json(newProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create product" });
    }
};

exports.deleteProduct = async (req,res)=>{
    try{
        const productId = parseInt(req.params.id, 10)

        const existingProduct = await prisma.product.findUnique({
            where:{id:productId}
        })

        if (!existingProduct) {
            return res.status(404).json({ error: "Product not found" });
        }

        const deletedProduct = await prisma.product.delete({
            where:{
                id: productId
            }
        })
        res.status(204).json(deletedProduct)
    }catch (err){
        console.error(err);
        res.status(500).json({ error: "Failed to delete product" });
    }
}

