#Este archivo se utiliza para construir una imagen de docker 

#From establece la imagen base para el dockerimage
FROM node:15

# Establecer el directorio con WROKDIR dentro del contenedor
#todo se almacenara en workdir
WORKDIR /app

#Copy copia  los ficheros y carpetas a partir del host a nuestro directorio de trabajo (
COPY package.json .

#RUN ejecuta automaticamente  un comando en el contenedor, en este caso instala las dependencias de npm
RUN npm install

#Copia todos loa archvios y dorectorios desde el directorio que estan en la construccion local 
COPY . ./

#Crea el comando predeterminado para correr la app 
CMD [ "npm","run", "dev" ]