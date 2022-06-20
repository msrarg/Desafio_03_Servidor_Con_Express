/*
	SERVIDOR CON EXPRESS

	Formato: link a un repositorio en Github y url de proyecto subido a glitch.
	Observación: no incluir la carpeta node_modules.

	>> Consigna:
	Realizar un proyecto de servidor basado en node.js que utilice el módulo express 
    e implemente los siguientes endpoints en el puerto 8080:
	
	Ruta get '/productos' que devuelva un array con todos los productos disponibles en el servidor
	Ruta get '/productoRandom' que devuelva un producto elegido al azar entre todos los productos disponibles
	Incluir un archivo de texto 'productos.txt' y utilizar la clase Contenedor del desafío anterior 
    para acceder a los datos persistidos del servidor.

	Antes de iniciar el servidor, colocar en el archivo 'productos.txt' tres productos como en el ejemplo 
    del desafío anterior.
*/

// Creo un servidor HTTP con Express
const express = require ('express');
const app = express();
const port = '8080';
const rutas = require('./src/routers/productosRoutes.js');

app.use(express.json()); // para que el servidor entienda el formato JSON
app.use(express.urlencoded({ extended: true })); // precisa que el objeto req.body contendrá valores de cualquier tipo en lugar de solo cadenas.

app.use('/', rutas.allProducts);
app.use('/', rutas.randomProduct);

const serverExpress = app.listen(port, () => {
    console.log(`Server running on port ${serverExpress.address().port}`);
});

serverExpress.on('error', (error) => {`Error en el servidor: ${error}`});
