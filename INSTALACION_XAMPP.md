# 🚀 Instalación en XAMPP - Guía Rápida

## 📋 Pasos para Instalar FitTrack en XAMPP

### 1️⃣ Copiar Archivos

1. Abre XAMPP Control Panel
2. Encuentra tu carpeta de XAMPP (usualmente `C:\xampp`)
3. Ve a la carpeta `htdocs`
4. Crea una carpeta llamada `FitTrack` (o copia esta carpeta completa ahí)

**Ruta final:** `C:\xampp\htdocs\FitTrack\`

### 2️⃣ Iniciar Servicios

1. Abre XAMPP Control Panel
2. Inicia **Apache** (click en "Start")
3. Inicia **MySQL** (click en "Start")

### 3️⃣ Crear la Base de Datos

**Opción A: Usando phpMyAdmin (Recomendado)**

1. Abre tu navegador
2. Ve a: `http://localhost/phpmyadmin`
3. Click en "Nueva" en el panel izquierdo
4. Nombre de la base de datos: `fittrack`
5. Cotejamiento: `utf8mb4_unicode_ci`
6. Click en "Crear"
7. Click en "Importar" en el menú superior
8. Click en "Seleccionar archivo"
9. Navega y selecciona: `C:\xampp\htdocs\FitTrack\database.sql`
10. Scroll hacia abajo y click en "Continuar"

**Opción B: Usando línea de comandos**

```bash
# Abre Command Prompt como Administrador
cd C:\xampp\mysql\bin

# Crea la base de datos
mysql -u root -p
CREATE DATABASE fittrack CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
exit

# Importa el esquema
mysql -u root -p fittrack < C:\xampp\htdocs\FitTrack\database.sql
```

### 4️⃣ Verificar Configuración

Abre el archivo: `C:\xampp\htdocs\FitTrack\includes\config.php`

Verifica que tenga estos valores:

```php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');              // Vacío por defecto en XAMPP
define('DB_NAME', 'fittrack');
define('BASE_URL', '/FitTrack/');   // Importante: con mayúsculas si tu carpeta se llama FitTrack
```

### 5️⃣ Acceder a la Aplicación

Abre tu navegador y ve a:

```
http://localhost/FitTrack/
```

O también:

```
http://localhost/FitTrack/index.php
```

## ✅ Verificación

Si todo está bien, deberías ver la página de login de FitTrack.

## 🐛 Solución de Problemas

### Error: "Not Found" o 404

**Causa:** La carpeta no está en el lugar correcto o el nombre no coincide

**Solución:**
1. Verifica que la carpeta esté en: `C:\xampp\htdocs\FitTrack\`
2. Verifica que `BASE_URL` en `config.php` coincida con el nombre de tu carpeta
3. Si tu carpeta se llama diferente (ej: `fittrack` en minúsculas), actualiza el `BASE_URL`:
   ```php
   define('BASE_URL', '/fittrack/');  // Minúsculas
   ```

### Error: "Error de conexión" o MySQL

**Causa:** MySQL no está corriendo o la base de datos no existe

**Solución:**
1. Verifica que MySQL esté iniciado en XAMPP Control Panel (luz verde)
2. Ve a phpMyAdmin y confirma que existe la base de datos `fittrack`
3. Si no existe, créala siguiendo el paso 3

### Error: "Access denied for user 'root'"

**Causa:** La contraseña de MySQL no está vacía

**Solución:**
En `includes/config.php` cambia:
```php
define('DB_PASS', 'tu_contraseña_aqui');
```

### La página carga pero sin estilos

**Causa:** Rutas incorrectas para CSS/JS

**Solución:**
Verifica que existan las carpetas:
- `C:\xampp\htdocs\FitTrack\assets\css\style.css`
- `C:\xampp\htdocs\FitTrack\assets\js\main.js`

## 📁 Estructura de Carpetas Correcta

```
C:\xampp\htdocs\FitTrack\
├── index.php
├── home.php
├── recipes.php
├── exercises.php
├── weekly-plan.php
├── progress.php
├── shopping-list.php
├── profile.php
├── register.php
├── logout.php
├── database.sql
├── README.md
├── api\
│   ├── user-data.php
│   ├── weekly-plan.php
│   ├── progress.php
│   └── shopping-list.php
├── includes\
│   ├── config.php
│   ├── auth.php
│   ├── header.php
│   ├── nav.php
│   └── footer.php
└── assets\
    ├── css\
    │   └── style.css
    └── js\
        ├── main.js
        ├── recipes-data.js
        └── exercises-data.js
```

## 🎯 Primera Vez Usando FitTrack

1. Regístrate creando una cuenta nueva
2. Completa tu perfil con peso, altura, edad
3. Calcula tus macros en la página de inicio
4. Explora recetas y ejercicios
5. Agrega items a tu plan semanal
6. ¡Disfruta! 🎉

## 📞 ¿Necesitas Ayuda?

Si sigues teniendo problemas:
1. Verifica que Apache y MySQL estén corriendo (luces verdes en XAMPP)
2. Revisa los logs de error de Apache en: `C:\xampp\apache\logs\error.log`
3. Asegúrate de que PHP esté funcionando visitando: `http://localhost/dashboard/phpinfo.php`

---

**¡Listo! Ahora tienes FitTrack funcionando en tu XAMPP local! 🏋️‍♂️**
