<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificación de Instalación - FitTrack</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
            padding: 2rem;
            min-height: 100vh;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            border-radius: 1rem;
            padding: 2rem;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        h1 {
            color: #8b5cf6;
            margin-bottom: 1rem;
            font-size: 2rem;
        }
        .check-item {
            padding: 1rem;
            margin: 1rem 0;
            border-radius: 0.5rem;
            border-left: 4px solid #ddd;
        }
        .success { background: #d1fae5; border-color: #10b981; }
        .error { background: #fee2e2; border-color: #ef4444; }
        .warning { background: #fef3c7; border-color: #f59e0b; }
        .info { background: #dbeafe; border-color: #3b82f6; }
        .check-title {
            font-weight: 600;
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .check-message {
            color: #666;
            font-size: 0.9rem;
            line-height: 1.6;
        }
        .icon { font-size: 1.5rem; }
        .code {
            background: #f3f4f6;
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-family: monospace;
            font-size: 0.85rem;
        }
        .btn {
            display: inline-block;
            background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            text-decoration: none;
            font-weight: 600;
            margin-top: 1rem;
        }
        .btn:hover { opacity: 0.9; }
        pre {
            background: #1f2937;
            color: #f3f4f6;
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
            font-size: 0.85rem;
            line-height: 1.5;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔍 Verificación de Instalación - FitTrack</h1>
        <p style="color: #666; margin-bottom: 2rem;">Esta página te ayudará a diagnosticar problemas de instalación</p>

        <?php
        $checks = [];
        $allGood = true;

        // Check 1: Versión de PHP
        $phpVersion = phpversion();
        if (version_compare($phpVersion, '7.4.0', '>=')) {
            $checks[] = [
                'type' => 'success',
                'icon' => '✅',
                'title' => 'Versión de PHP',
                'message' => "PHP {$phpVersion} - ¡Perfecto! (Requiere 7.4 o superior)"
            ];
        } else {
            $checks[] = [
                'type' => 'error',
                'icon' => '❌',
                'title' => 'Versión de PHP',
                'message' => "PHP {$phpVersion} - Necesitas PHP 7.4 o superior"
            ];
            $allGood = false;
        }

        // Check 2: Extensiones de PHP
        $requiredExtensions = ['pdo', 'pdo_mysql', 'json', 'session'];
        $missingExtensions = [];
        foreach ($requiredExtensions as $ext) {
            if (!extension_loaded($ext)) {
                $missingExtensions[] = $ext;
            }
        }

        if (empty($missingExtensions)) {
            $checks[] = [
                'type' => 'success',
                'icon' => '✅',
                'title' => 'Extensiones PHP',
                'message' => 'Todas las extensiones requeridas están instaladas (PDO, PDO_MySQL, JSON, Session)'
            ];
        } else {
            $checks[] = [
                'type' => 'error',
                'icon' => '❌',
                'title' => 'Extensiones PHP',
                'message' => 'Faltan extensiones: ' . implode(', ', $missingExtensions)
            ];
            $allGood = false;
        }

        // Check 3: Archivos críticos
        $criticalFiles = [
            'index.php' => 'Página de login',
            'home.php' => 'Dashboard',
            'includes/config.php' => 'Configuración',
            'includes/auth.php' => 'Autenticación',
            'assets/css/style.css' => 'Estilos CSS',
            'assets/js/main.js' => 'JavaScript principal',
            'database.sql' => 'Esquema de base de datos'
        ];

        $missingFiles = [];
        foreach ($criticalFiles as $file => $description) {
            if (!file_exists($file)) {
                $missingFiles[] = "$file ($description)";
            }
        }

        if (empty($missingFiles)) {
            $checks[] = [
                'type' => 'success',
                'icon' => '✅',
                'title' => 'Archivos del Proyecto',
                'message' => 'Todos los archivos críticos están presentes'
            ];
        } else {
            $checks[] = [
                'type' => 'error',
                'icon' => '❌',
                'title' => 'Archivos del Proyecto',
                'message' => 'Faltan archivos:<br>' . implode('<br>', $missingFiles)
            ];
            $allGood = false;
        }

        // Check 4: Conexión a base de datos
        try {
            require_once 'includes/config.php';
            $checks[] = [
                'type' => 'success',
                'icon' => '✅',
                'title' => 'Conexión a Base de Datos',
                'message' => 'Conectado exitosamente a MySQL<br>Base de datos: <span class="code">fittrack</span>'
            ];

            // Check 5: Tablas de la base de datos
            $requiredTables = ['users', 'user_data', 'weekly_plan_recipes', 'weekly_plan_exercises', 'progress', 'shopping_list'];
            $stmt = $pdo->query("SHOW TABLES");
            $existingTables = $stmt->fetchAll(PDO::FETCH_COLUMN);

            $missingTables = array_diff($requiredTables, $existingTables);

            if (empty($missingTables)) {
                $checks[] = [
                    'type' => 'success',
                    'icon' => '✅',
                    'title' => 'Tablas de Base de Datos',
                    'message' => 'Todas las tablas requeridas existen (' . count($requiredTables) . ' tablas)'
                ];
            } else {
                $checks[] = [
                    'type' => 'warning',
                    'icon' => '⚠️',
                    'title' => 'Tablas de Base de Datos',
                    'message' => 'Faltan tablas: ' . implode(', ', $missingTables) . '<br><br>Solución:<br>1. Ve a phpMyAdmin<br>2. Selecciona la base de datos "fittrack"<br>3. Importa el archivo <span class="code">database.sql</span>'
                ];
                $allGood = false;
            }

        } catch (Exception $e) {
            $checks[] = [
                'type' => 'error',
                'icon' => '❌',
                'title' => 'Conexión a Base de Datos',
                'message' => 'Error al conectar: ' . htmlspecialchars($e->getMessage()) . '<br><br>Verifica:<br>1. MySQL está corriendo en XAMPP<br>2. La base de datos "fittrack" existe<br>3. Las credenciales en <span class="code">includes/config.php</span> son correctas'
            ];
            $allGood = false;
        }

        // Check 6: Permisos de escritura
        $writableDirs = ['assets/css', 'assets/js'];
        $nonWritable = [];
        foreach ($writableDirs as $dir) {
            if (file_exists($dir) && !is_writable($dir)) {
                $nonWritable[] = $dir;
            }
        }

        if (empty($nonWritable)) {
            $checks[] = [
                'type' => 'success',
                'icon' => '✅',
                'title' => 'Permisos de Archivos',
                'message' => 'Los permisos de archivos son correctos'
            ];
        } else {
            $checks[] = [
                'type' => 'warning',
                'icon' => '⚠️',
                'title' => 'Permisos de Archivos',
                'message' => 'Algunos directorios no tienen permisos de escritura (generalmente no es problema en Windows)'
            ];
        }

        // Check 7: Configuración BASE_URL
        $baseUrl = BASE_URL;
        $currentPath = dirname($_SERVER['PHP_SELF']);

        $checks[] = [
            'type' => 'info',
            'icon' => 'ℹ️',
            'title' => 'Configuración de Rutas',
            'message' => "BASE_URL configurado: <span class=\"code\">{$baseUrl}</span><br>Ruta actual: <span class=\"code\">{$currentPath}</span>"
        ];

        // Mostrar todos los checks
        foreach ($checks as $check) {
            echo "<div class=\"check-item {$check['type']}\">";
            echo "<div class=\"check-title\">";
            echo "<span class=\"icon\">{$check['icon']}</span>";
            echo "<span>{$check['title']}</span>";
            echo "</div>";
            echo "<div class=\"check-message\">{$check['message']}</div>";
            echo "</div>";
        }

        // Resultado final
        if ($allGood) {
            echo '<div class="check-item success" style="margin-top: 2rem; font-size: 1.1rem;">';
            echo '<div class="check-title"><span class="icon">🎉</span><span>¡Todo está configurado correctamente!</span></div>';
            echo '<div class="check-message">FitTrack está listo para usar. Puedes proceder a crear tu cuenta.</div>';
            echo '</div>';
            echo '<a href="index.php" class="btn">Ir a FitTrack →</a>';
        } else {
            echo '<div class="check-item warning" style="margin-top: 2rem;">';
            echo '<div class="check-title"><span class="icon">⚠️</span><span>Se encontraron algunos problemas</span></div>';
            echo '<div class="check-message">Por favor, corrige los errores marcados arriba antes de usar FitTrack.</div>';
            echo '</div>';
        }
        ?>

        <div style="margin-top: 2rem; padding-top: 2rem; border-top: 2px solid #e5e7eb;">
            <h3 style="color: #8b5cf6; margin-bottom: 1rem;">📋 Información del Sistema</h3>
            <pre><?php
echo "Servidor Web: " . $_SERVER['SERVER_SOFTWARE'] . "\n";
echo "PHP Version: " . phpversion() . "\n";
echo "Document Root: " . $_SERVER['DOCUMENT_ROOT'] . "\n";
echo "Script Path: " . __FILE__ . "\n";
echo "BASE_URL: " . (defined('BASE_URL') ? BASE_URL : 'No definido') . "\n";
echo "\nExtensiones PHP Cargadas:\n";
$extensions = get_loaded_extensions();
sort($extensions);
echo "- " . implode("\n- ", $extensions);
            ?></pre>
        </div>

        <div style="margin-top: 2rem; padding: 1rem; background: #f3f4f6; border-radius: 0.5rem;">
            <p style="color: #666; font-size: 0.9rem;">
                <strong>💡 Consejo:</strong> Si todo está bien pero sigues teniendo problemas,
                intenta limpiar la caché del navegador (Ctrl+Shift+R en Chrome/Firefox)
                o acceder en modo incógnito.
            </p>
        </div>
    </div>
</body>
</html>
