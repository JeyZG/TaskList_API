const app = require('./app');

// Establecemos el archivo de configuracion de variables de entorno
if(process.env.NODE_ENV==="PRODUCTION") require('dotenv').config({path:'./config/config.env'})
// const dotenv = require('dotenv');
// dotenv.config({path: 'config/config.env'})

// Leemos el puerto desde las variables de entorno o lo definimos en 4000 si no lo encuentra
const port = process.env.PORT || 4000;
const mode = process.env.NODE_ENV;

const server = app.listen(port, () => {
    console.log(`\t--> Server started on port [${port}] in [${mode}] mode`);
});