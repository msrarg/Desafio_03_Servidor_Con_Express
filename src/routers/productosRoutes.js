const express = require('express');
const rutas = express.Router();

const productosController = require('../controllers/productosController.js');

exports.allProducts = rutas.get('/productos', productosController.consultaProductos);
exports.randomProduct = rutas.get('/productoRandom', productosController.consultaProductoRandom);