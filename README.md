# FitTrack - Aplicación Vanilla (PHP + JavaScript + HTML + CSS + MySQL)

Esta es una versión vanilla de FitTrack, reconstruida usando solo tecnologías base sin frameworks: PHP, JavaScript, HTML, CSS y MySQL.

## Características

✅ **Sistema de Autenticación**
- Registro e inicio de sesión de usuarios
- Sesiones PHP seguras
- Encriptación de contraseñas con BCRYPT

✅ **Calculadora de Macros**
- Cálculo de BMR usando fórmula Mifflin-St Jeor
- Cálculo de TDEE basado en nivel de actividad
- Recomendaciones personalizadas según objetivos

✅ **Biblioteca de Recetas**
- 80+ recetas saludables
- Filtros por categoría y dificultad
- Búsqueda en tiempo real
- Información nutricional completa

✅ **Biblioteca de Ejercicios**
- 198+ ejercicios con instrucciones
- GIFs animados para cada ejercicio
- Filtros por grupo muscular y dificultad
- Información de series, reps y descanso

✅ **Plan Semanal**
- Organiza comidas y ejercicios por día
- Cálculo automático de macros diarios
- Agregar/eliminar items fácilmente

✅ **Seguimiento de Progreso**
- Registra peso y grasa corporal
- Gráficos visuales con Chart.js
- Historial completo con notas

✅ **Lista de Compras**
- Genera lista desde el plan semanal
- Marca items como comprados
- Gestiona ingredientes manualmente

## Requisitos

- PHP 7.4 o superior
- MySQL 5.7 o superior / MariaDB 10.3 o superior
- Servidor web (Apache/Nginx)
- PHPMyAdmin (opcional, para gestión de base de datos)

## Instalación

### 1. Clonar o descargar el proyecto

```bash
git clone <repository-url>
cd FitTrack
```

### 2. Configurar la base de datos

**Opción A: Usando PHPMyAdmin**
1. Abre PHPMyAdmin en tu navegador (generalmente http://localhost/phpmyadmin)
2. Crea una nueva base de datos llamada `fittrack`
3. Importa el archivo `database.sql` en la base de datos creada

**Opción B: Usando línea de comandos**
```bash
mysql -u root -p
CREATE DATABASE fittrack CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
exit

mysql -u root -p fittrack < database.sql
```

### 3. Configurar la conexión a la base de datos

Edita el archivo `includes/config.php` con tus credenciales:

```php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');           // Tu usuario MySQL
define('DB_PASS', '');               // Tu contraseña MySQL
define('DB_NAME', 'fittrack');       // Nombre de la base de datos
```

### 4. Configurar el servidor web

**Para XAMPP (Windows/Mac/Linux):**
1. Copia la carpeta del proyecto a `htdocs/FitTrack`
2. Inicia Apache y MySQL desde el panel de control de XAMPP
3. Accede a http://localhost/FitTrack

**Para Apache standalone:**
1. Copia el proyecto a tu document root (ej: `/var/www/html/FitTrack`)
2. Asegúrate de que Apache tiene permisos de lectura
3. Accede a http://localhost/FitTrack

**Para PHP Built-in Server (desarrollo):**
```bash
cd /ruta/a/FitTrack
php -S localhost:8000
```
Luego accede a http://localhost:8000

### 5. Configurar BASE_URL (si es necesario)

Si instalas el proyecto en un subdirectorio diferente, edita `includes/config.php`:

```php
define('BASE_URL', '/FitTrack/');  // Ajusta según tu instalación
```

## Estructura del Proyecto

```
FitTrack/
├── index.php                 # Página de login
├── register.php              # Página de registro
├── home.php                  # Dashboard con calculadora de macros
├── recipes.php               # Biblioteca de recetas
├── exercises.php             # Biblioteca de ejercicios
├── weekly-plan.php           # Plan semanal
├── progress.php              # Seguimiento de progreso
├── shopping-list.php         # Lista de compras
├── profile.php               # Perfil de usuario
├── logout.php                # Cerrar sesión
├── database.sql              # Esquema de la base de datos
│
├── includes/                 # Archivos de configuración
│   ├── config.php           # Configuración de BD y sesiones
│   ├── auth.php             # Funciones de autenticación
│   ├── header.php           # Header HTML común
│   ├── nav.php              # Navegación común
│   └── footer.php           # Footer HTML común
│
├── api/                      # Endpoints API REST
│   ├── user-data.php        # CRUD de datos de usuario
│   ├── weekly-plan.php      # CRUD de plan semanal
│   ├── progress.php         # CRUD de progreso
│   └── shopping-list.php    # CRUD de lista de compras
│
└── assets/                   # Recursos estáticos
    ├── css/
    │   └── style.css        # Estilos globales
    └── js/
        ├── main.js          # JavaScript principal
        ├── recipes-data.js  # Datos de recetas
        └── exercises-data.js # Datos de ejercicios
```

## Uso

### 1. Crear una cuenta
- Ve a la página de registro
- Completa el formulario con tus datos
- Serás redirigido automáticamente al dashboard

### 2. Calcular tus macros
- En la página de inicio, ingresa tus datos físicos
- Selecciona tu nivel de actividad y objetivo
- Haz clic en "Calcular" para ver tus necesidades calóricas
- Guarda tus datos para uso futuro

### 3. Explorar recetas y ejercicios
- Navega por las bibliotecas de recetas y ejercicios
- Usa los filtros para encontrar lo que necesitas
- Haz clic en una tarjeta para ver detalles completos
- Agrega items a tu plan semanal directamente desde el modal

### 4. Organizar tu plan semanal
- Ve a "Plan Semanal" para ver tu planificación
- Los días muestran el total de calorías y macros
- Elimina items que no necesites
- Agrega nuevos desde las páginas de recetas/ejercicios

### 5. Generar lista de compras
- Ve a "Lista de Compras"
- Haz clic en "Generar desde Plan" para extraer todos los ingredientes
- Marca items como comprados mientras haces el mercado
- Agrega items adicionales manualmente si lo necesitas

### 6. Registrar tu progreso
- Ve a "Progreso"
- Registra tu peso y grasa corporal regularmente
- Añade notas sobre cómo te sientes
- Visualiza tu evolución en el gráfico

## Stack Tecnológico

### Backend
- **PHP 7.4+**: Lenguaje del servidor
- **MySQL/MariaDB**: Base de datos relacional
- **PDO**: Abstracción de base de datos con prepared statements
- **Sessions**: Gestión de sesiones de usuario

### Frontend
- **HTML5**: Estructura semántica
- **CSS3**: Estilos con variables CSS, flexbox y grid
- **JavaScript ES6+**: Lógica del cliente (sin frameworks)
- **Fetch API**: Comunicación asíncrona con el backend

### Librerías Externas
- **Chart.js 4.4**: Gráficos de progreso
- **Lucide Icons**: Iconos SVG (inline)

## Seguridad

✅ **Autenticación segura**
- Passwords hasheados con BCRYPT
- Validación de sesiones en cada página protegida

✅ **Prevención de SQL Injection**
- Uso exclusivo de prepared statements con PDO

✅ **Validación de datos**
- Validación en cliente y servidor
- Sanitización de inputs con htmlspecialchars

✅ **Protección CSRF**
- Validación de user_id en todas las operaciones

## API Endpoints

Todos los endpoints responden en formato JSON.

### User Data
```
GET  /api/user-data.php?user_id={id}
POST /api/user-data.php
```

### Weekly Plan
```
GET    /api/weekly-plan.php?user_id={id}
POST   /api/weekly-plan.php?action=add-recipe
POST   /api/weekly-plan.php?action=add-exercise
DELETE /api/weekly-plan.php?action=remove-recipe
DELETE /api/weekly-plan.php?action=remove-exercise
```

### Progress
```
GET    /api/progress.php?user_id={id}
POST   /api/progress.php
POST   /api/progress.php?action=update
DELETE /api/progress.php
```

### Shopping List
```
GET    /api/shopping-list.php?user_id={id}
POST   /api/shopping-list.php
PUT    /api/shopping-list.php
DELETE /api/shopping-list.php
```

## Personalización

### Cambiar colores del tema
Edita las variables CSS en `assets/css/style.css`:

```css
:root {
    --primary: #8b5cf6;      /* Color primario (morado) */
    --secondary: #3b82f6;    /* Color secundario (azul) */
    --success: #10b981;      /* Verde de éxito */
    --error: #ef4444;        /* Rojo de error */
    /* ... más variables */
}
```

### Agregar más recetas o ejercicios
Edita los archivos de datos:
- `assets/js/recipes-data.js`
- `assets/js/exercises-data.js`

## Solución de Problemas

### Error de conexión a la base de datos
- Verifica que MySQL esté corriendo
- Comprueba las credenciales en `includes/config.php`
- Asegúrate de que la base de datos `fittrack` existe

### Las sesiones no funcionan
- Verifica que `session_start()` se ejecuta correctamente
- Comprueba permisos de la carpeta de sesiones de PHP

### Estilos o scripts no cargan
- Verifica la ruta BASE_URL en `config.php`
- Comprueba que los archivos existen en `assets/`
- Revisa la consola del navegador para errores

### Error 404 en las páginas
- Asegúrate de que todos los archivos PHP están en el root del proyecto
- Verifica la configuración del servidor web

## Créditos

- **Imágenes**: Unsplash
- **GIFs de ejercicios**: Fitness Programer
- **Iconos**: Lucide Icons
- **Gráficos**: Chart.js

## Licencia

Este proyecto es de código abierto y está disponible para uso educativo.

---

**Desarrollado con** ❤️ **usando tecnologías vanilla**
