# FitTrack - Aplicación Web de Dietas y Entrenamientos

Una aplicación web completa para gestionar tu plan de dieta y entrenamiento, con seguimiento de progreso y recomendaciones personalizadas.

## 🌐 Demo en Vivo

**Accede a la aplicación aquí:** [https://carlosos22.github.io/FitTrack/](https://carlosos22.github.io/FitTrack/)

La aplicación se despliega automáticamente en GitHub Pages cada vez que se hace push a la rama principal.

## Características

### 🏠 Página de Inicio
- Formulario completo de datos personales (peso, altura, edad, género, nivel de actividad)
- Calculadora automática de plan nutricional personalizado
- Cálculo de macronutrientes (proteína, carbohidratos, grasas)
- Estimación de tiempo para alcanzar objetivos

### 🍽️ Apartado de Recetas
- 10+ recetas saludables clasificadas por categorías:
  - Desayuno
  - Almuerzo
  - Cena
  - Merienda
  - Postre Saludable
  - Batidos
- Información nutricional completa (calorías y macros)
- Instrucciones paso a paso para cada receta
- Sistema de sugerencias para que usuarios propongan nuevas recetas
- Añadir recetas directamente al plan semanal

### 💪 Apartado de Ejercicios
- 27+ ejercicios organizados por grupo muscular:
  - Pecho
  - Espalda
  - Hombros
  - Bíceps
  - Tríceps
  - Piernas
  - Abdominales
  - Cardio
- Imágenes y GIFs animados de cada ejercicio
- Instrucciones detalladas de ejecución
- Información de series, repeticiones y descanso
- Consejos de seguridad
- Añadir ejercicios a la rutina semanal

### 📅 Plan Semanal
- Vista organizada por días de la semana
- Resumen diario de macronutrientes
- Gestión de comidas planificadas por día
- Gestión de ejercicios planificados por día
- Tabla de resumen semanal
- Eliminar comidas o ejercicios del plan

### 📈 Seguimiento de Progreso
- Registro de peso y grasa corporal
- Gráfico de evolución temporal
- Estadísticas de progreso
- Historial completo de mediciones
- Notas personales en cada registro

## Tecnologías Utilizadas

- **React 18** - Framework de JavaScript
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos
- **React Router** - Navegación entre páginas
- **Recharts** - Gráficos de progreso
- **Lucide React** - Iconos
- **Context API** - Gestión de estado global
- **LocalStorage** - Persistencia de datos

## Colores del Diseño

La aplicación utiliza una paleta de colores morados y azules:
- **Primary (Morado)**: #8b5cf6 → #4c1d95
- **Secondary (Azul)**: #3b82f6 → #1e3a8a

## Instalación y Ejecución

### Requisitos Previos
- Node.js 16+ y npm

### Pasos de Instalación

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
cd FitTrack
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar en modo desarrollo:
```bash
npm run dev
```

4. Abrir en el navegador:
```
http://localhost:5173
```

5. Para compilar para producción:
```bash
npm run build
```

## Estructura del Proyecto

```
FitTrack/
├── src/
│   ├── components/
│   │   └── Navigation.jsx          # Barra de navegación
│   ├── context/
│   │   └── AppContext.jsx          # Context API para estado global
│   ├── data/
│   │   ├── recipes.js              # Datos de recetas
│   │   └── exercises.js            # Datos de ejercicios
│   ├── pages/
│   │   ├── Home.jsx                # Página de inicio con formulario
│   │   ├── Recipes.jsx             # Listado de recetas
│   │   ├── Exercises.jsx           # Listado de ejercicios
│   │   ├── WeeklyPlan.jsx          # Plan semanal
│   │   └── Progress.jsx            # Seguimiento de progreso
│   ├── App.jsx                     # Componente principal
│   ├── main.jsx                    # Punto de entrada
│   └── index.css                   # Estilos globales
├── public/
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Funcionalidades Destacadas

### Persistencia de Datos
Todos los datos se guardan automáticamente en el navegador usando LocalStorage:
- Datos personales del usuario
- Plan semanal de comidas y ejercicios
- Historial de progreso
- Sugerencias de recetas

### Calculadora Nutricional
La aplicación calcula automáticamente:
- Tasa Metabólica Basal (BMR) usando la fórmula de Mifflin-St Jeor
- Gasto Energético Diario Total (TDEE) basado en nivel de actividad
- Calorías diarias recomendadas según objetivo (perder, mantener o ganar peso)
- Distribución de macronutrientes optimizada

### Responsive Design
La aplicación es completamente responsive y se adapta a:
- Escritorio
- Tablets
- Móviles

## Próximas Mejoras Sugeridas

- [ ] Backend con base de datos real
- [ ] Sistema de autenticación de usuarios
- [ ] Panel de administración para aprobar sugerencias
- [ ] Más recetas y ejercicios
- [ ] Integración con wearables para tracking automático
- [ ] Compartir planes con otros usuarios
- [ ] Modo oscuro
- [ ] Exportar plan semanal a PDF
- [ ] Notificaciones de recordatorio

## 🚀 Despliegue en GitHub Pages

La aplicación se despliega automáticamente usando GitHub Actions. El workflow se activa:
- Automáticamente al hacer push a la rama `main` o `master`
- Manualmente desde la pestaña "Actions" en GitHub

### Pasos para habilitar GitHub Pages:

1. Ve a la configuración del repositorio en GitHub
2. En el menú lateral, selecciona "Pages"
3. En "Source", selecciona "GitHub Actions"
4. El workflow `.github/workflows/deploy.yml` se ejecutará automáticamente

La aplicación estará disponible en: `https://carlosos22.github.io/FitTrack/`

## Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## Autor

Desarrollado con Claude Code - Asistente de IA de Anthropic
