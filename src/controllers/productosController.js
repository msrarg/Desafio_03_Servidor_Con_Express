const contenedor = require('../models/contenedor.js')

exports.consultaProductos = async (req,res)=>{
	let allProducts = await contenedor.getAll();
	res.json(allProducts);
}

exports.consultaProductoRandom = async (req,res)=>{
	let randomId = Math.round((Math.random()*3));
	let ramdomProduct = await contenedor.getById(randomId);
	res.json(ramdomProduct)
}