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
- **MYSQL_PASSWORD=**: contrasña de la base de datos
- **HOST=**: dominio donde correrá la aplicación