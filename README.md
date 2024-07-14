<details>
  <summary>Contenido 📝</summary>
  <ol>
    <li><a href="#objetivo">Objetivo</a></li>
    <li><a href="#sobre-el-proyecto">Sobre el proyecto</a></li>
    <li><a href="#deploy-🚀">Deploy</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#diagrama-bd">Diagrama</a></li>
    <li><a href="#instalación-en-local">Instalación</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#futuras-funcionalidades">Futuras funcionalidades</a></li>
    <li><a href="#contribuciones">Contribuciones</a></li>
    <li><a href="#licencia">Licencia</a></li>
    <li><a href="#webgrafia">Webgrafia</a></li>
    <li><a href="#desarrollo">Desarrollo</a></li>
    <li><a href="#agradecimientos">Agradecimientos</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>

## Tattoo Studio 
En este proyecto se requería el desarrollo de una API con una base de datos de clientes, servicios y artistas, el objetivo de esta API es permitir la creación, consulta y modificación de citas entre clientes y servicios, con la posibilidad de asignar a un artista para llevar a cabo el servicio.

## Sobre el proyecto
Se solicita crear una aplicación web que permita organizar todo lo relacionado a las citas de los clientes para el acceso a los múltiples servicios que ofrece el Studio, en este contexto, los usuarios pueden darse de alta en la aplicación, tener control de sus datos, así mismo puede solicitar citas con fechas posteriores al momento presente, en estas pueden elegir el tipo de servicio que requieren así también como elegir el artista de su predilección. Por parte del administrador principal (súper admin) tiene acceso a la información general de los usuarios, cuidando de los datos sensibles como es la contraseña, la cual está encriptada de principio a fin, asimismo los administradores tienen la capacidad de darse de alta en la plataforma con un rol que les permite crear, editar y eliminar servicios que posteriormente los clientes podrán reservar.


## Stack
Tecnologías utilizadas:
<div align="left">
<a href="https://www.mysql.com/">
    <img src= "https://img.shields.io/badge/mysql-3E6E93?style=for-the-badge&logo=mysql&logoColor=white"/>
</a>
<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
<a href="https://www.github.com/">
    <img src= "https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=white"/>
</a>
<a href="https://git-scm.com/">
    <img src= "https://img.shields.io/badge/git-F54D27?style=for-the-badge&logo=git&logoColor=white"/>
</a>
<a href="https://jwt.io/">
    <img src= "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"/>
</a>
 </div>

 ## Deploy 🚀 TODO
<div align="left">
    <a href="https://www.google.com"><strong>Url a producción </strong></a>🚀
</div>

## Diagrama BD
!['imagen-db'](./images/db-tattoo-studio.jpg)

## Instalación en local
1. Clonar el repositorio
2. ` $ npm install `
3. Conectamos nuestro repositorio con la base de datos 
4. ``` $ npm run migrate ``` 
5. ``` $ npm run db:seed ``` 
6. ``` $ npm run dev ```

## Endpoints
<details>
<summary>Endpoints</summary>

- AUTH
    - REGISTER USERS

            POST http://localhost:3380/api/auth/register
        body:
        ``` js
                {
                "name": "pedro",
                "email": "pedro@pedro.com",
                "password": "12345678"
                }
        ```
    - REGISTER ADMIN / ARTISTS

             POST http://localhost:3380/api/auth/admin
         body:
         ``` js
                {
                    "name": "tatuador"
                    "email": "tatuador@tatuador.com",
                    "password": "12345678"
                }
        ```
    - LOGIN

            POST http://localhost:3380/api/auth/login  
        body:
        ``` js
            {
                "email": "pedro@pedro.com",
                "password": "12345678"
            }
        ```
- ROLES
    - GET ALL ROLES (SUPER ADMIN)

            GET http://localhost:3380/api/roles
        Bearer Token:
        ```js
            eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6MywiZW1haWwiOiJhYnJhaGFtLmVzY29iYXJAZXhhbXBsZS5jb20iLCJpYXQiOjE3MjA3MjUxMzQsImV4cCI6MTcyMDcyODczNH0.jxfLmca7YJHKxXsj3kC05hpKYEM3OCL9ADIUFWfegeE
        ```
    - CREATE ROLES (SUPER ADMIN)

            POST http://localhost:3380/api/roles
        Bearer Token:
        ```js
            eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6MywiZW1haWwiOiJhYnJhaGFtLmVzY29iYXJAZXhhbXBsZS5jb20iLCJpYXQiOjE3MjA3MjUxMzQsImV4cCI6MTcyMDcyODczNH0.jxfLmca7YJHKxXsj3kC05hpKYEM3OCL9ADIUFWfegeE
        ```
        body:
        ```js
            {
                "name": "tatuador"
            }
        ```
    - DELETE ROLES (SUPER ADMIN)

            DELETE http://localhost:3380/api/roles/:id_role
        Bearer Token:
        ```js
            eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6MywiZW1haWwiOiJhYnJhaGFtLmVzY29iYXJAZXhhbXBsZS5jb20iLCJpYXQiOjE3MjA3MjUxMzQsImV4cCI6MTcyMDcyODczNH0.jxfLmca7YJHKxXsj3kC05hpKYEM3OCL9ADIUFWfegeE
         ```
- USERS
    - GET ALL USERS (SUPER ADMIN)

            GET http://localhost:3380/api/users
        Bearer Token:
        ```js
            eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6MywiZW1haWwiOiJhYnJhaGFtLmVzY29iYXJAZXhhbXBsZS5jb20iLCJpYXQiOjE3MjA3MjUxMzQsImV4cCI6MTcyMDcyODczNH0.jxfLmca7YJHKxXsj3kC05hpKYEM3OCL9ADIUFWfegeE
         ```
    - GET USER PROFILE

            GET http://localhost:3380/api/users/profile
        Bearer Token:
        ```js
            eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6MywiZW1haWwiOiJhYnJhaGFtLmVzY29iYXJAZXhhbXBsZS5jb20iLCJpYXQiOjE3MjA3MjUxMzQsImV4cCI6MTcyMDcyODczNH0.jxfLmca7YJHKxXsj3kC05hpKYEM3OCL9ADIUFWfegeE
         ```
    - UPDATE USER PROFILE

            PUT http://localhost:3380/api/users/profile
        Bearer Token:
        ```js
            eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6MywiZW1haWwiOiJhYnJhaGFtLmVzY29iYXJAZXhhbXBsZS5jb20iLCJpYXQiOjE3MjA3MjUxMzQsImV4cCI6MTcyMDcyODczNH0.jxfLmca7YJHKxXsj3kC05hpKYEM3OCL9ADIUFWfegeE
         ```
        body:
        ```js
        {
            "name": "tatuador",
            "email": "tatuador@tatuador.com",
            "password": "12345678"
        }
        ```

    - UPDATE USER ROLE (SUPER ADMIN)

            PUT http://localhost:3380/api/users/1/role
        Bearer Token:
        ```js
            eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6MywiZW1haWwiOiJhYnJhaGFtLmVzY29iYXJAZXhhbXBsZS5jb20iLCJpYXQiOjE3MjA3MjUxMzQsImV4cCI6MTcyMDcyODczNH0.jxfLmca7YJHKxXsj3kC05hpKYEM3OCL9ADIUFWfegeE
        ```
        body:
        ```js
            {
                "roles_id": 3
            }
        ```
    - DELETE USER (SUPER ADMIN)

            PUT http://localhost:3380/api/users/:user_id
        Bearer Token:
        ```js
            eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6MywiZW1haWwiOiJhYnJhaGFtLmVzY29iYXJAZXhhbXBsZS5jb20iLCJpYXQiOjE3MjA3MjUxMzQsImV4cCI6MTcyMDcyODczNH0.jxfLmca7YJHKxXsj3kC05hpKYEM3OCL9ADIUFWfegeE
        ```
    - GET USER BY EMAIL (SUPER ADMIN)

            PUT http://localhost:3380/api/users/filters?email=example@example.com
        Bearer Token:
        ```js
            eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6MywiZW1haWwiOiJhYnJhaGFtLmVzY29iYXJAZXhhbXBsZS5jb20iLCJpYXQiOjE3MjA3MjUxMzQsImV4cCI6MTcyMDcyODczNH0.jxfLmca7YJHKxXsj3kC05hpKYEM3OCL9ADIUFWfegeE
        ```
        Params:
        ```js
            email=example@example.com
        ```
    - GET ALL ARTISTS

            GET http://localhost:3380/api/users/artists

- SERVICES
    - GET ALL SERVICES

            GET http://localhost:3380/api/services

    - CREATE NEW SERVICES (ADMIN - SUPER ADMIN)

            POST http://localhost:3380/api/services
        Bearer Token:
        ```js
            eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6MywiZW1haWwiOiJhYnJhaGFtLmVzY29iYXJAZXhhbXBsZS5jb20iLCJpYXQiOjE3MjA3MjUxMzQsImV4cCI6MTcyMDcyODczNH0.jxfLmca7YJHKxXsj3kC05hpKYEM3OCL9ADIUFWfegeE
        ```
        body:
        ```js
            {
                "name": "service name",
                "description": "service descriptión."
            }
        ```
    - UPDATE SERVICES (ADMIN - SUPER ADMIN)

            PUT http://localhost:3380/api/services/:service_id
        Bearer Token:
        ```js
            eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6MywiZW1haWwiOiJhYnJhaGFtLmVzY29iYXJAZXhhbXBsZS5jb20iLCJpYXQiOjE3MjA3MjUxMzQsImV4cCI6MTcyMDcyODczNH0.jxfLmca7YJHKxXsj3kC05hpKYEM3OCL9ADIUFWfegeE
        ```
        body:
        ```js
            {
                "name": "service name",
                "description": "service descriptión."
            }
        ```
    - DELETE SERVICES (ADMIN - SUPER ADMIN)

            DELETE http://localhost:3380/api/services/services_id

- APPOINTMENTS
    - GET APPOINTMENTS BY ID (SUPER ADMIN)

            GET http://localhost:3380/api/appointments/appointments_id
        Bearer Token:
        ```js
            ExampleTokenJsonWebToken
        ```
    - GET APPOINTMENTS BY USER ID

            GET http://localhost:3380/api/appointments
        Bearer Token:
        ```js
            ExampleTokenJsonWebToken
        ```
    - CREATE APPOINMENTS

            POST http://localhost:3380/api/appointments
        Bearer Token:
        ```js
            ExampleTokenJsonWebToken
        ```
        body: 
        ```js
            {
                "services_id": "1",
                "due_date": "2024-07-09",
                "artists_id": 3
            }
        ```
    - UPDATE APPOINTMENTS

            POST http://localhost:3380/api/appointments
        Bearer Token:
        ```js
            ExampleTokenJsonWebToken
        ```
        body:
        ```js
            {
                "services_id": "1",
                "due_date": "2024-07-09",
                "artists_id": 3
            }
        ```
</details>