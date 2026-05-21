# MiniBlog 📝
MiniBlog es una aplicación backend (API REST) diseñada para la gestión de un blog personal. Permite obtener (todos o por id especifico), crear, o eliminar autores y obtener (todos, por id especifico o por id del autor), publicar o eliminar posteos, implementando buenas prácticas de desarrollo, pruebas automatizadas y documentación estandarizada con OpenApi / Swagger.

---

## 🚀 Características
- Autentificación y CRUD completo de autores y posteos.
- Arquitectura limpia y bien organizada.
- Documentación interactiva con OpenAPI / Swagger.
- Base de datos relacional con soporte para scripts de inicialización.

---

## 🛠️ Requisitos Previos
Antes de comenzar, asegúrate de tener instalado en tu máquina local:
- **Entorno de ejecución:** [Node.js v18+]
- **Base de Datos:** [PostgreSQL] 
- **Gestor de paquetes:** npm

---

## 💻 Instalación y Configuración Local
Dentro de ( ) significa que se debe realizar en la consola "Bash".
Sigue estos pasos para levantar el proyecto en tu entorno local:
### 1. Clonar el repositorio
(git clone [https://github.com/pilar-star/MiniBlog.git](https://github.com/pilar-star/MiniBlog.git)
cd MiniBlog)
### 2. Instalar dependencias
Node.js: (npm install)
### 3. Configurar Variables de Entorno
Crea un archivo llamado .env en la raíz del proyecto basandote en el .env.example subido a este proyecto.
### 4. Ejecutar Setup de SQL
Asegúrate de tener tu servidor SQL corriendo y ejecuta el script de inicialización:
(psql -U tu_usuario -d blog_db -f src/db/setup.sql)
### 5. Iniciar la Aplicación
(npm run dev), la API estará disponible en http://localhost:3000.

---

## 🧪 Cómo Ejecutar Tests
El proyecto cuenta con pruebas automatizadas para garantizar la estabilidad del código
- (npm run test) ejecuta todas las pruebas
- (npm run test:watch) ejecuta pruebas en modo observador
- (npm run test:cov) genera reporte de cobertura.
Para más información ir a la carpeta "tests"

---

## 📖 Documentación de la API (OpenAPI / Swagger)
La API está documentada en el archivo "openapi.yaml". Puedes interactuar con los endpoints y probar peticiones directamente desde la interfaz gráfica de Swagger UI. 
- Servidor local de desarrollo: http://localhost:3000
- Servidor Público de Producción: https://miniblog-production-165f.up.railway.app/

---

## 🚄 Guía de Deployment en Railway
### Desplegar este MiniBlog en Railway:
1. Iniciar sesión en Railway.com
2. Selecionar "New Project"
3. Seleccionar "Deploy from Github repository" y elegir repositorio "pilar-star/MiniBlog".

### Agregar Base de Datos SQL:
1. En el dasboard hacer clic en "New (+)"
2. Seleccionar "Database" y elegir "Add PostgreSQL"
3. Railways creara la base de datos automáticamente y proveera credenciales internas.

---

# Desarrollado por Pilar Lugones.
