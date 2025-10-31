# 🔧 Guía Completa de Solución de Problemas - FitTrack

## ✅ Lista de Compra YA está en el Menú

El menú de navegación **ya incluye** "Lista Compra" con el icono de carrito (🛒).

## 📋 Pasos para Resolver el Problema

### 1. **Actualizar el Código**

```bash
# Asegúrate de estar en la rama correcta
git checkout claude/generic-task-011CUfF899Kf8mmbMDJuwKL9

# Obtén los últimos cambios
git pull origin claude/generic-task-011CUfF899Kf8mmbMDJuwKL9

# Verifica que estás en el commit correcto
git log --oneline -1
# Deberías ver: a074862 Fix: Arreglar pantalla en blanco al añadir recetas/ejercicios
```

### 2. **Actualizar la Base de Datos**

**IMPORTANTE**: Necesitas ejecutar el script de migración para añadir la tabla de lista de compra.

#### Opción A: Si tienes phpMyAdmin
```
1. Abre http://localhost/phpmyadmin
2. Selecciona la base de datos "fittrack"
3. Ve a la pestaña "SQL"
4. Copia y pega el contenido de: backend/database/migration_shopping_list.sql
5. Click en "Ejecutar"
```

#### Opción B: Desde línea de comandos
```bash
# En Windows con XAMPP
cd C:\xampp\mysql\bin
mysql -u root fittrack < "ruta_completa_a\backend\database\migration_shopping_list.sql"

# En Linux/Mac
mysql -u root fittrack < /ruta/completa/backend/database/migration_shopping_list.sql
```

### 3. **Verificar el Backend en XAMPP**

```bash
# 1. Asegúrate de que el backend está en la carpeta correcta:
# Windows: C:\xampp\htdocs\fittrack-backend\
# Linux: /opt/lampp/htdocs/fittrack-backend/

# 2. Copia la carpeta backend actualizada:
# Desde tu proyecto FitTrack/backend/ a C:\xampp\htdocs\fittrack-backend\

# 3. Verifica que XAMPP está corriendo:
# - Apache: ✅ (debe estar en verde)
# - MySQL: ✅ (debe estar en verde)
```

### 4. **Verificar que el Backend Funciona**

Abre tu navegador y prueba estos endpoints:

```
http://localhost/fittrack-backend/api/test.php
# Deberías ver: {"status":"success","message":"API funcionando correctamente","database":"connected"}

http://localhost/fittrack-backend/api/shopping-list.php?user_id=1
# Deberías ver: {"success":true,"shoppingList":[]}
```

### 5. **Limpiar Caché y Recargar Frontend**

```bash
cd frontend

# Detén el servidor si está corriendo (Ctrl + C)

# Limpia la caché de npm
npm cache clean --force

# Reinstala dependencias
rm -rf node_modules
rm -rf package-lock.json
npm install

# Inicia el servidor
npm run dev
```

### 6. **Verificar en el Navegador**

```
1. Abre http://localhost:5173
2. Presiona Ctrl + Shift + R (recarga forzada)
3. Abre la Consola de Desarrollador (F12)
4. Ve a la pestaña "Console"
5. Busca errores en rojo
```

## 🐛 Errores Comunes y Soluciones

### Error: "Failed to fetch" o "Network Error"
**Causa**: El backend no está corriendo o está en la carpeta incorrecta
**Solución**:
- Verifica que Apache está corriendo en XAMPP
- Verifica la ruta: `C:\xampp\htdocs\fittrack-backend\`
- Prueba: http://localhost/fittrack-backend/api/test.php

### Error: "Cannot read property 'recipes' of undefined"
**Causa**: Las claves de los días no coinciden
**Solución**: Ya arreglado en commit a074862. Haz git pull.

### Error: "Table 'fittrack.shopping_list' doesn't exist"
**Causa**: No has ejecutado el script de migración
**Solución**: Ejecuta `backend/database/migration_shopping_list.sql` en phpMyAdmin

### La Lista de Compra no aparece en el menú
**Causa**: El código del frontend no está actualizado
**Solución**:
```bash
git pull
cd frontend
npm install
npm run dev
# Ctrl + Shift + R en el navegador
```

### Las recetas dan pantalla en blanco al añadir
**Causa**: Claves de días inconsistentes
**Solución**: Ya arreglado en commit a074862. Asegúrate de tener el código actualizado.

## 📊 Verificación Final

Sigue estos pasos en orden:

1. ✅ **Backend actualizado**: `ls C:\xampp\htdocs\fittrack-backend\api\shopping-list.php` (debe existir)
2. ✅ **Base de datos actualizada**: En phpMyAdmin, verifica que existe la tabla `shopping_list`
3. ✅ **Frontend actualizado**: `git log --oneline -1` debe mostrar commit a074862
4. ✅ **XAMPP corriendo**: Apache y MySQL en verde
5. ✅ **Frontend corriendo**: `npm run dev` sin errores
6. ✅ **Navegador actualizado**: Ctrl + Shift + R

## 🎯 Cómo Usar la Lista de Compra

Una vez todo funcione:

1. **Inicia sesión** en la aplicación
2. Ve a **Recetas**
3. Añade algunas recetas a tu **Plan Semanal** (Lunes, Martes, etc.)
4. Ve al menú y click en **Lista Compra** (icono 🛒)
5. Click en **"Generar Lista"**
6. ¡Deberías ver todos los ingredientes de las recetas!

## 🆘 Si Aún No Funciona

Si después de seguir todos estos pasos sigue sin funcionar:

1. Abre la Consola del Navegador (F12)
2. Ve a la pestaña "Console"
3. Copia cualquier error en rojo
4. Ve a la pestaña "Network"
5. Filtra por "Fetch/XHR"
6. Intenta añadir una receta
7. Click en la petición que aparezca en rojo
8. Ve a "Response" y copia el mensaje

Comparte esos errores y podré ayudarte específicamente.

## 📁 Archivos Clave

- Frontend Navigation: `frontend/src/components/Navigation.jsx` (línea 14)
- Frontend Shopping List Page: `frontend/src/pages/ShoppingList.jsx`
- Frontend Route: `frontend/src/App.jsx` (línea 27)
- Backend API: `backend/api/shopping-list.php`
- Database Migration: `backend/database/migration_shopping_list.sql`

## 🔍 Debug Rápido

Para verificar que todo está en su sitio:

```bash
# Verifica que los archivos existen
ls frontend/src/pages/ShoppingList.jsx
ls backend/api/shopping-list.php
ls backend/database/migration_shopping_list.sql

# Verifica el contenido de Navigation.jsx
grep -n "Lista Compra" frontend/src/components/Navigation.jsx
# Debe mostrar: 14:    { path: '/shopping-list', icon: ShoppingCart, label: 'Lista Compra' },

# Verifica que el endpoint está registrado
grep -n "shopping-list" frontend/src/App.jsx
# Debe mostrar: 27:              <Route path="/shopping-list" element={<ShoppingList />} />
```
