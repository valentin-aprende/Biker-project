# Danger

Aplicación Full Stack desarrollada con React, Flask y MySQL para la administración y personalización de cascos temáticos.

---

# Descripción General

Danger es una aplicación web que permite visualizar, administrar y personalizar productos mediante una arquitectura Full Stack compuesta por:

- Frontend: React
- Gestión de estado: Context API
- Cliente HTTP: Axios
- Backend: Flask
- Base de datos: MySQL
- API externa: Open-Meteo

La aplicación permite realizar operaciones CRUD completas sobre los productos almacenados en la base de datos y consultar información climática en tiempo real mediante una API externa.

---

# Arquitectura

```text
React
↓
Context API
↓
Axios
↓
Flask
↓
MySQL
```

Para información meteorológica:

```text
React
↓
Open-Meteo API
```

---

# Tecnologías Utilizadas

## Frontend

- React
- React Router
- Context API
- Axios
- Styled Components

