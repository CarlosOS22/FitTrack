# FitTrack Backend API - PHP + MySQL

Backend REST API para la aplicación FitTrack construido con PHP y MySQL/MariaDB.

## 📋 Requisitos

- PHP 7.4 o superior
- MySQL 5.7+ o MariaDB 10.3+
- Apache o Nginx con mod_rewrite habilitado
- Extensión PDO de PHP habilitada

## 🚀 Instalación

### 1. Configurar la Base de Datos

```bash
# Acceder a MySQL
mysql -u root -p

# Crear la base de datos y las tablas
mysql -u root -p < database/schema.sql
```

O puedes copiar y ejecutar el contenido de `database/schema.sql` en phpMyAdmin.

### 2. Configurar la Conexión a la Base de Datos

Edita el archivo `config/database.php` y modifica las credenciales:

```php
private $host = "localhost";        // Tu host de MySQL
private $database_name = "fittrack_db";  // Nombre de la base de datos
private $username = "root";         // Tu usuario de MySQL
private $password = "";             // Tu contraseña de MySQL
```

### 3. Configurar el Servidor Web

#### Opción A: XAMPP (Recomendado para desarrollo local)

1. Copia la carpeta `backend` a `C:\xampp\htdocs\fittrack-backend\`
2. Inicia Apache y MySQL desde el panel de control de XAMPP
3. La API estará disponible en: `http://localhost/fittrack-backend/api/`

#### Opción B: Apache (Linux/Mac)

1. Copia la carpeta `backend` a `/var/www/html/fittrack-backend/`
2. Asegúrate que Apache tenga permisos:
```bash
sudo chown -R www-data:www-data /var/www/html/fittrack-backend
sudo chmod -R 755 /var/www/html/fittrack-backend
```

#### Opción C: PHP Built-in Server (Solo desarrollo)

```bash
cd backend
php -S localhost:8000
```

La API estará en: `http://localhost:8000/api/`

### 4. Configurar CORS en Producción

⚠️ **IMPORTANTE**: Por defecto, CORS permite conexiones desde cualquier origen (`*`).

Para producción, edita `config/cors.php` y cambia:

```php
// Cambiar esto:
header("Access-Control-Allow-Origin: *");

// Por tu dominio del frontend:
header("Access-Control-Allow-Origin: https://carlosos22.github.io");
```

## 📡 Endpoints de la API

### Base URL
```
http://localhost/fittrack-backend/api/
```

### 🔐 Autenticación

#### Registrar Usuario
```http
POST /auth.php?action=register
Content-Type: application/json

{
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "password": "mipassword123",
  "age": 25,
  "gender": "male"
}
```

**Respuesta:**
```json
{
  "success": true,
  "message": "Registro exitoso",
  "user": {
    "id": 1,
    "name": "Juan Pérez",
    "email": "juan@example.com",
    "age": 25,
    "gender": "male",
    "created_at": "2025-10-30 12:00:00"
  }
}
```

#### Iniciar Sesión
```http
POST /auth.php?action=login
Content-Type: application/json

{
  "email": "juan@example.com",
  "password": "mipassword123"
}
```

**Respuesta:**
```json
{
  "success": true,
  "message": "Inicio de sesión exitoso",
  "user": {
    "id": 1,
    "name": "Juan Pérez",
    "email": "juan@example.com",
    "age": 25,
    "gender": "male"
  }
}
```

### 👤 Datos de Usuario

#### Obtener Datos del Usuario
```http
GET /user-data.php?user_id=1
```

#### Guardar/Actualizar Datos
```http
POST /user-data.php
Content-Type: application/json

{
  "user_id": 1,
  "weight": 75.5,
  "height": 175,
  "age": 25,
  "gender": "male",
  "activity_level": "moderate",
  "goal_weight": 70
}
```

### 📅 Plan Semanal

#### Obtener Plan Semanal
```http
GET /weekly-plan.php?user_id=1
```

#### Añadir Receta al Plan
```http
POST /weekly-plan.php?action=add-recipe
Content-Type: application/json

{
  "user_id": 1,
  "day": "Lunes",
  "recipe": {
    "id": 1,
    "name": "Tortilla de Claras",
    "calories": 180,
    "macros": { "protein": 20, "carbs": 12, "fat": 5 }
  }
}
```

#### Añadir Ejercicio al Plan
```http
POST /weekly-plan.php?action=add-exercise
Content-Type: application/json

{
  "user_id": 1,
  "day": "Lunes",
  "exercise": {
    "id": 1,
    "name": "Press de Banca",
    "sets": 4,
    "reps": "8-12"
  }
}
```

#### Eliminar Receta del Plan
```http
DELETE /weekly-plan.php?action=remove-recipe
Content-Type: application/json

{
  "user_id": 1,
  "day": "Lunes",
  "recipe_id": 5
}
```

#### Eliminar Ejercicio del Plan
```http
DELETE /weekly-plan.php?action=remove-exercise
Content-Type: application/json

{
  "user_id": 1,
  "day": "Lunes",
  "exercise_id": 3
}
```

### 📊 Progreso

#### Obtener Progreso
```http
GET /progress.php?user_id=1
```

#### Añadir Entrada de Progreso
```http
POST /progress.php
Content-Type: application/json

{
  "user_id": 1,
  "date": "2025-10-30",
  "weight": 74.5,
  "body_fat": 18.5,
  "notes": "Me siento genial"
}
```

#### Eliminar Entrada de Progreso
```http
DELETE /progress.php
Content-Type: application/json

{
  "user_id": 1,
  "progress_id": 5
}
```

### 🍽️ Sugerencias de Recetas

#### Enviar Sugerencia
```http
POST /recipe-suggestions.php
Content-Type: application/json

{
  "name": "Mi Receta Saludable",
  "category": "Almuerzo",
  "calories": 400,
  "protein": 35,
  "carbs": 45,
  "fat": 12,
  "ingredients": ["ingrediente 1", "ingrediente 2"],
  "instructions": ["paso 1", "paso 2"],
  "email": "usuario@example.com"
}
```

#### Obtener Sugerencias (Admin)
```http
GET /recipe-suggestions.php?status=pending
```

## 🗄️ Estructura de la Base de Datos

### Tabla: `users`
```sql
- id (INT, AUTO_INCREMENT, PRIMARY KEY)
- name (VARCHAR 255)
- email (VARCHAR 255, UNIQUE)
- password (VARCHAR 255, hashed)
- age (INT)
- gender (ENUM: 'male', 'female', 'other')
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

### Tabla: `user_data`
```sql
- id (INT, AUTO_INCREMENT, PRIMARY KEY)
- user_id (INT, FOREIGN KEY)
- weight (DECIMAL 5,2)
- height (DECIMAL 5,2)
- age (INT)
- gender (ENUM)
- activity_level (VARCHAR 50)
- goal_weight (DECIMAL 5,2)
- updated_at (TIMESTAMP)
```

### Tabla: `weekly_plan_recipes`
```sql
- id (INT, AUTO_INCREMENT, PRIMARY KEY)
- user_id (INT, FOREIGN KEY)
- day (VARCHAR 20)
- recipe_id (INT)
- recipe_name (VARCHAR 255)
- recipe_data (JSON)
- created_at (TIMESTAMP)
```

### Tabla: `weekly_plan_exercises`
```sql
- id (INT, AUTO_INCREMENT, PRIMARY KEY)
- user_id (INT, FOREIGN KEY)
- day (VARCHAR 20)
- exercise_id (INT)
- exercise_name (VARCHAR 255)
- exercise_data (JSON)
- created_at (TIMESTAMP)
```

### Tabla: `progress`
```sql
- id (INT, AUTO_INCREMENT, PRIMARY KEY)
- user_id (INT, FOREIGN KEY)
- date (DATE)
- weight (DECIMAL 5,2)
- body_fat (DECIMAL 4,2)
- notes (TEXT)
- created_at (TIMESTAMP)
```

### Tabla: `recipe_suggestions`
```sql
- id (INT, AUTO_INCREMENT, PRIMARY KEY)
- name (VARCHAR 255)
- category (VARCHAR 100)
- calories (INT)
- protein, carbs, fat (INT)
- ingredients (TEXT)
- instructions (TEXT)
- email (VARCHAR 255)
- status (ENUM: 'pending', 'approved', 'rejected')
- created_at (TIMESTAMP)
```

## 🔒 Seguridad

### Contraseñas
- Las contraseñas se hashean con `password_hash()` usando BCRYPT
- Mínimo 6 caracteres requeridos

### SQL Injection
- Todas las queries usan prepared statements con PDO
- Parámetros bindeados para prevenir SQL injection

### CORS
- Configurado en `config/cors.php`
- Cambiar a dominio específico en producción

### Recomendaciones Adicionales
- Usar HTTPS en producción
- Implementar rate limiting
- Agregar tokens JWT para autenticación stateless
- Validar y sanitizar todos los inputs

## 🌐 Hosting Recomendado

### Hosting Gratuito
- **InfinityFree**: PHP + MySQL gratis
- **000webhost**: 300 MB gratis
- **AwardSpace**: 1 GB gratis

### Hosting de Pago (Económico)
- **Hostinger**: ~2-3 €/mes
- **SiteGround**: ~3-4 €/mes
- **DigitalOcean**: $5/mes VPS

## 🔧 Troubleshooting

### Error: "Connection refused"
- Verifica que MySQL esté corriendo
- Confirma credenciales en `config/database.php`

### Error: "Access denied"
- Verifica usuario y contraseña de MySQL
- Asegúrate que el usuario tenga permisos en la base de datos

### Error: "CORS policy"
- Verifica `config/cors.php`
- Asegúrate que el dominio del frontend esté permitido

### Error: "404 Not Found"
- Verifica que mod_rewrite esté habilitado
- Confirma la ruta base en la URL

## 📝 Notas

- Los datos se almacenan en MySQL (persistentes)
- Las contraseñas están hasheadas (BCRYPT)
- JSON es usado para almacenar datos complejos (recetas, ejercicios)
- Todas las respuestas son en formato JSON

## 👨‍💻 Desarrollo

Para probar los endpoints, puedes usar:
- **Postman**: https://www.postman.com/
- **Thunder Client** (VSCode extension)
- **cURL** desde terminal

Ejemplo con cURL:
```bash
curl -X POST http://localhost/fittrack-backend/api/auth.php?action=register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@test.com","password":"123456"}'
```

## 🤝 Contribuciones

Este backend está diseñado para funcionar con el frontend de FitTrack alojado en GitHub Pages.

---

**¿Necesitas ayuda?** Abre un issue en el repositorio.
