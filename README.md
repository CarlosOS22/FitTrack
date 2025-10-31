# FitTrack - Aplicación de Fitness y Nutrición

Aplicación web completa para seguimiento de dietas, rutinas de ejercicio y progreso personal con **backend PHP + MySQL**.

## 🌐 Demo en Vivo

**Accede a la aplicación aquí:** [https://carlosos22.github.io/FitTrack/](https://carlosos22.github.io/FitTrack/)

La aplicación se despliega automáticamente en GitHub Pages cada vez que se hace push a la rama principal.

## 📁 Estructura del Proyecto

```
FitTrack/
├── frontend/          # Aplicación React (Frontend)
│   ├── src/
│   │   ├── components/  # Componentes React
│   │   ├── pages/       # Páginas de la aplicación
│   │   ├── context/     # Context API
│   │   ├── data/        # Datos estáticos (recetas, ejercicios)
│   │   └── services/    # API service
│   ├── public/
│   ├── package.json
│   └── .env            # Variables de entorno
│
├── backend/           # API REST PHP + MySQL (Backend)
│   ├── api/          # Endpoints de la API
│   ├── config/       # Configuración y conexión DB
│   ├── database/     # Scripts SQL
│   └── README.md     # Documentación del backend
│
└── README.md         # Este archivo
```

## 🚀 Características

### Frontend (React + Vite)
- ✅ **54 recetas saludables** con información nutricional completa
- ✅ **104 ejercicios con GIFs animados** por grupo muscular
- ✅ **Sistema de autenticación** (Login/Registro)
- ✅ **Plan semanal personalizable** con recetas y ejercicios
- ✅ **Seguimiento de progreso** con gráficas interactivas
- ✅ **Calculadora de macros y calorías** (BMR/TDEE)
- ✅ **Diseño responsive** (móvil y desktop)
- ✅ **Tema morado y azul**
- ✅ **Sistema de sugerencias de recetas**

### Backend (PHP + MySQL)
- ✅ **API REST completa**
- ✅ **Base de datos MySQL/MariaDB** persistente
- ✅ **Autenticación segura** (passwords hasheadas con BCRYPT)
- ✅ **CRUD completo** para usuarios, planes, progreso
- ✅ **Sistema de sugerencias** de recetas
- ✅ **Protección contra SQL injection** (PDO prepared statements)
- ✅ **CORS configurado**

## 📋 Requisitos

### Frontend
- Node.js 18+ y npm

### Backend
- PHP 7.4+
- MySQL 5.7+ o MariaDB 10.3+
- Apache o Nginx con mod_rewrite
- XAMPP (recomendado para desarrollo local)

## 🔧 Instalación

### 1. Clonar el Repositorio

```bash
git clone https://github.com/CarlosOS22/FitTrack.git
cd FitTrack
```

### 2. Configurar el Backend

📖 Ver instrucciones detalladas en [backend/README.md](backend/README.md)

**Resumen rápido:**

```bash
# 1. Instalar XAMPP desde: https://www.apachefriends.org/

# 2. Copiar la carpeta backend a:
#    C:\xampp\htdocs\fittrack-backend\

# 3. Crear la base de datos:
#    - Abrir phpMyAdmin: http://localhost/phpmyadmin
#    - Click en "SQL"
#    - Copiar y ejecutar: backend/database/schema.sql

# 4. Configurar credenciales (si es necesario):
#    Editar: backend/config/database.php

# 5. Probar el backend:
#    http://localhost/fittrack-backend/api/test.php
```

### 3. Configurar el Frontend

```bash
cd frontend

# Instalar dependencias
npm install

# El archivo .env ya está configurado para localhost
# VITE_API_URL=http://localhost/fittrack-backend/api
```

### 4. Ejecutar en Desarrollo

```bash
# Asegúrate de estar en la carpeta frontend/
cd frontend

# Ejecutar el servidor de desarrollo
npm run dev
```

Abre http://localhost:5173 en tu navegador

## 📊 Funcionalidades Detalladas

### 🏠 Página de Inicio
- Formulario completo de datos personales
- Calculadora automática de plan nutricional personalizado
- Cálculo de macronutrientes usando fórmula de Mifflin-St Jeor
- Estimación de tiempo para alcanzar objetivos

### 🔐 Autenticación
- Registro de nuevos usuarios
- Inicio de sesión seguro
- Sesión persistente
- Perfil de usuario editable

### 🍽️ Recetas (54 recetas)
- **Desayuno**: 10 recetas
- **Almuerzo**: 12 recetas
- **Cena**: 12 recetas
- **Merienda**: 8 recetas
- **Batidos**: 6 recetas
- **Postres Saludables**: 6 recetas

Cada receta incluye:
- Información nutricional completa (calorías, proteínas, carbohidratos, grasas)
- Lista de ingredientes
- Instrucciones paso a paso
- Tiempo de preparación y dificultad
- Botón para añadir al plan semanal

### 💪 Ejercicios (104 ejercicios)
- **Pecho**: 15 ejercicios
- **Espalda**: 15 ejercicios
- **Hombros**: 12 ejercicios
- **Bíceps**: 10 ejercicios
- **Tríceps**: 10 ejercicios
- **Piernas**: 12 ejercicios
- **Glúteos**: 8 ejercicios
- **Abdominales**: 12 ejercicios
- **Cardio**: 10 ejercicios

Cada ejercicio incluye:
- GIF animado de ejecución correcta
- Descripción detallada
- Instrucciones paso a paso
- Nivel de dificultad
- Equipo necesario
- Series, repeticiones y tiempo de descanso
- Botón para añadir a la rutina semanal

### 📅 Plan Semanal
- Vista organizada por días (Lunes a Domingo)
- Resumen diario de macronutrientes
- Lista de comidas planificadas por día
- Lista de ejercicios planificados por día
- Tabla de resumen semanal
- Eliminar comidas o ejercicios del plan
- **Guardado en base de datos MySQL** (persistente entre dispositivos)

### 📈 Seguimiento de Progreso
- Registro de peso y grasa corporal
- Gráfico de evolución temporal (Recharts)
- Estadísticas de progreso (peso actual, objetivo, cambio)
- Historial completo de mediciones
- Notas personales en cada registro
- **Guardado en base de datos MySQL**

## 🗄️ Base de Datos

### Tablas principales:
- `users` - Usuarios registrados (con contraseñas hasheadas)
- `user_data` - Datos personales (peso, altura, objetivos)
- `weekly_plan_recipes` - Recetas del plan semanal
- `weekly_plan_exercises` - Ejercicios del plan semanal
- `progress` - Seguimiento de progreso
- `recipe_suggestions` - Sugerencias de usuarios

📖 Ver esquema completo en: `backend/database/schema.sql`

## 🌐 Despliegue

### Frontend (GitHub Pages) ✅
El frontend se despliega automáticamente a GitHub Pages:
- **URL**: https://carlosos22.github.io/FitTrack/
- **Trigger**: Push a rama `main`
- **Workflow**: `.github/workflows/deploy.yml`

### Backend (Hosting PHP)
Necesitas subir la carpeta `backend/` a un hosting con PHP + MySQL:

**Opciones gratuitas:**
- **InfinityFree**: https://infinityfree.net (recomendado)
- **000webhost**: https://www.000webhost.com
- **AwardSpace**: https://www.awardspace.com

**Opciones de pago (€2-3/mes):**
- **Hostinger**: https://www.hostinger.es
- **SiteGround**: https://www.siteground.es

**Pasos para desplegar el backend:**
1. Subir carpeta `backend/` vía FTP al hosting
2. Crear base de datos MySQL en el panel del hosting
3. Importar `backend/database/schema.sql` en la base de datos
4. Editar `backend/config/database.php` con credenciales del hosting
5. Actualizar `backend/config/cors.php` para permitir solo tu dominio
6. Crear archivo `frontend/.env.production` con la URL de tu backend:
   ```
   VITE_API_URL=https://tu-hosting.com/api
   ```

## 🔒 Seguridad

- ✅ Contraseñas hasheadas con **BCRYPT**
- ✅ **Prepared statements** (prevención de SQL injection)
- ✅ Validación de inputs en frontend y backend
- ✅ CORS configurado
- ⚠️ **En producción**: Actualizar `backend/config/cors.php` para permitir solo tu dominio

## 🛠️ Tecnologías

### Frontend
- React 18
- Vite
- Tailwind CSS 3
- React Router v6
- Context API
- Recharts (gráficas)
- Lucide React (iconos)

### Backend
- PHP 7.4+
- MySQL/MariaDB
- PDO (PHP Data Objects)
- REST API
- CORS
- Password Hashing (BCRYPT)

## 📱 Uso de la Aplicación

1. **Registrarse**: Crear una cuenta con email y contraseña
2. **Iniciar Sesión**: Acceder con tus credenciales
3. **Completar Perfil**: Ingresar peso, altura, edad, género, nivel de actividad
4. **Explorar Recetas**: Navegar por 54 recetas saludables
5. **Explorar Ejercicios**: Ver 104 ejercicios con GIFs animados
6. **Crear Plan Semanal**: Añadir recetas y ejercicios a cada día
7. **Registrar Progreso**: Añadir entradas de peso y % de grasa
8. **Ver Evolución**: Visualizar tu progreso en gráficas

## 🐛 Troubleshooting

### Error: "Failed to fetch"
- Verifica que XAMPP esté corriendo (Apache + MySQL)
- Confirma que el backend esté en `C:\xampp\htdocs\fittrack-backend\`
- Prueba acceder a: `http://localhost/fittrack-backend/api/test.php`

### Error: "Connection refused"
- Verifica que MySQL esté corriendo en XAMPP
- Confirma las credenciales en `backend/config/database.php`

### Error: "CORS policy"
- Verifica `backend/config/cors.php`
- Asegúrate que permita tu dominio del frontend

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

**CarlosOS22**
- GitHub: [@CarlosOS22](https://github.com/CarlosOS22)

## 🙏 Agradecimientos

- Imágenes de recetas: [Unsplash](https://unsplash.com)
- GIFs de ejercicios: [FitnessProgramer](https://fitnessprogramer.com)
- Iconos: [Lucide](https://lucide.dev)

---

⭐ **Si te gusta este proyecto, dale una estrella en GitHub!**
