Danger


Aplicación Full Stack para la gestión y personalización de cascos temáticos para motociclistas.


Descripción General

Danger es una aplicación web desarrollada utilizando React, Flask y MySQL.

La aplicación permite:

Consultar el catálogo de cascos.
Personalizar productos.
Administrar el inventario mediante un panel de administración.
Obtener información meteorológica de distintos destinos dentro de México utilizando Open-Meteo.
Enviar solicitudes personalizadas mediante WhatsApp.

Arquitectura

Frontend (React)
        ↓
     Context API
        ↓
       Axios
        ↓
Backend (Flask)
        ↓
       MySQL
API externa:

Open-Meteo
       ↓
      React

Tecnologías Utilizadas

Frontend
React
React Router
Context API
Axios
Styled Components

Backend

Python
Flask
Flask-CORS
Flasgger
Base de Datos
MySQL
mysql-connector-python
APIs Externas
Open-Meteo
WhatsApp URL API


Funcionalidades Principales

Catálogo
Visualización de productos.
Información detallada.
Imágenes asociadas.
Productos cargados desde MySQL.


Personalización

Permite personalizar:

Nombre o apodo.
Talla.
Color.
Las solicitudes se envían mediante WhatsApp.

Clima para motociclistas
La barra de navegación incluye:

Selector de capitales mexicanas.

Consulta meteorológica en tiempo real.

Temperatura actual del destino seleccionado.

Pensado como una herramienta rápida para planear rutas y viajes.


CRUD de Productos

CREATE
Creación de productos desde el panel de administración.

READ
Consulta de todos los productos almacenados.

Consulta individual por ID.

UPDATE
Actualización de:

Nombre
Descripción

DELETE
Eliminación de productos con confirmación previa.

Endpoints

Obtener todos los productos
GET /products

Obtener producto por ID
GET /products/{id}

Crear producto
POST /products

Body:

{
  "nombre": "Casco Veneno",
  "descripcion": "Descripción del producto",
  "imagen": "/assets/images/veneno.jpg"
}

Actualizar producto
PUT /products/{id}

Body:

{
  "nombre": "Nuevo Nombre",
  "descripcion": "Nueva descripción"
}

Eliminar producto
DELETE /products/{id}


Documentación Swagger

La API se encuentra documentada mediante Swagger.

Acceso:

http://localhost:5000/apidocs

Incluye:

GET
POST
PUT
DELETE
con documentación de parámetros y respuestas.

Checklist UX/UI

Navegación

Navbar persistente
Navegación mediante React Router
Página 404 personalizada
Navegación intuitiva

Formularios

Validación de campos obligatorios
Mensajes de error
Mensajes de éxito
Edición dinámica


Experiencia del Usuario

Indicadores de carga
Actualización automática de datos
Confirmación antes de eliminar
Feedback visual de acciones
Consumo de API externa


Diseño Visual

Jerarquía visual en panel administrativo
Tarjetas de productos
Diseño responsive
Consistencia de colores y estilo


Accesibilidad

Labels asociados a inputs
Navegación mediante teclado
Textos alternativos para imágenes


Checklist de Seguridad

Backend

Consultas parametrizadas
Prevención básica de SQL Injection
Manejo de errores con try / except / finally
Respuestas API estructuradas


API

Configuración CORS
Validación de datos de entrada
Respuestas JSON consistentes


Base de Datos

PRIMARY KEY
AUTO_INCREMENT
Restricciones NOT NULL


Arquitectura

Separación Frontend / Backend
Separación Backend / Base de Datos


Mejoras Futuras

Sistema de autenticación
Gestión de roles
Hash de contraseñas
Recuperación de contraseña
Instalación
Backend

Instalar dependencias:

pip install flask
pip install flask-cors
pip install flasgger
pip install mysql-connector-python

Ejecutar servidor:

python app.py
Frontend
Instalar dependencias:

npm install
Ejecutar aplicación:

npm run dev


Autor
José Valentín Rodríguez Fernández

Proyecto académico Full Stack desarrollado utilizando React, Flask y MySQL.