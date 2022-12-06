# Prueba tecnica
Este proyecto es parte de una prueba tecnica.
Para hacer uso de este proyecto se necesita instalar nodejs para la
instalación de dependencias del proyecto, puedes decargarlo desde la
página oficial [NodeJS](https://nodejs.org/en/).

### Correr el proyecto
Para poder inicializar las dependencias, iremos a donde se encuentra 
la carpeta del proyecto utilizando una terminal, para abrirla usaremos
el comando: 

- Windows: CTRL + R > escribimos cmd en el recuadro te texto.
- Linux: CTRL + ALT + T
- Mac: Haz clic en el ícono de Launchpad  en el Dock, escribe Terminal en el campo de búsqueda y haz clic en Terminal.

Una vez estes en la carpeta, escribe el comando:
```npm install```

Si no da ningun error, puedes correr el comando:
```npm run dev```

## Archivo .example.env
El archivo **.example.env** es un ejemplo de las variables de entorno que necesitamos en el proyecto, estas deben ser llenadas:

- **PORT=**: puerto en el que el servidor va a estar. (recomendado 8080 si es para pruebas)
- **MYSQL_DB=**: nombre de la base de datos
- **MYSQL_USER=**: nombre de usuaior de la base de datos
- **MYSQL_PASSWORD=**: contraseña de la base de datos
- **HOST=**: dominio donde correrá la aplicación

## Tablas
Para crear las tablas de forma dinamica al correr la aplicación por primera vez, pueder ir a:
models>server.js>bajar a hacía la funcion connectDB>sequelize.sync({ force: false }) cambiar el "force" a true sequelize.sync({ force: true })

Una vez corra el servidor, en la consola aparecerá que se han creado las tablas, puede volver a dejar "sequelize.sync({ force: false })", force: false para que no las vuelva a eliminar si existen y crear otra vez, así no se perderan los datos.

## API endpoints
[Documentación](https://documenter.getpostman.com/view/22653738/2s8YzP14oR)
