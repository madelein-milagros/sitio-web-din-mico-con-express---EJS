# 🚀 Sitio Web Dinámico con Express & EJS
>  | Desarrollo de Aplicaciones Web Avanzado  
> **Autor:** Milagros Ramos Chamorro 

Aplicación web modular y escalable desarrollada con **Node.js**, **Express**, **EJS** y **Bootstrap 5**. El proyecto demuestra el manejo de rutas HTTP, renderizado dinámico en servidor, arquitectura basada en componentes reutilizables y buenas prácticas de organización del código.

---

## 🛠️ Tecnologías Utilizadas
- **Node.js** - Entorno de ejecución para JavaScript en el servidor
- **Express.js** - Framework web minimalista y flexible
- **EJS** - Motor de plantillas para renderizado HTML dinámico
- **Bootstrap 5** - Framework CSS para diseño responsivo y componentes UI
- **Nodemon** - Herramienta de desarrollo para reinicio automático
- **Git & GitHub** - Control de versiones y repositorio remoto

---

## 📂 Estructura del Proyecto
oregon04/
├── public/
│ └── css/
│ └── style.css # Estilos personalizados (separados por buenas prácticas)
├── routes/
│ └── rutas.js # Definición modular de rutas
├── views/
│ ├── partials/
│ │ ├── header.ejs # Barra de navegación reutilizable
│ │ └── footer.ejs # Pie de página reutilizable
│ └── pages/
│ ├── index.ejs # Página principal
│ ├── nosotros.ejs # Página informativa
│ └── contacto.ejs # Formulario de contacto
├── .gitignore # Excluye node_modules y archivos sensibles
├── index.js # Punto de entrada y configuración del servidor
├── app01.js # Scripts de prueba del laboratorio
└── package.json # Dependencias y scripts de ejecución

2. Instalar dependencias
npm install

3. Ejecutar el servidor
Modo desarrollo (con recarga automática):
npm run dev

Modo producción:
npm start

El servidor se ejecutará en: http://localhost:3000

✨ Características Implementadas
✅ Rutas Modulares: Organización limpia mediante express.Router() en archivos separados
✅ Motor de Plantillas EJS: Renderizado dinámico con inyección de variables (<%= title %>)
✅ Componentes Reutilizables: Sistema de partials (header/footer) para evitar duplicación de código
✅ Diseño Responsivo: Integración completa de Bootstrap 5 y CSS personalizado servido desde /public/
✅ Archivos Estáticos: Configuración de express.static() para separar lógica y presentación
✅ Manejo de Errores: Ruta 404 personalizada para páginas no encontradas
✅ Puerto Dinámico: Uso de process.env.PORT para compatibilidad con entornos de despliegue

📖 Aprendizajes y Buenas Prácticas
Separación de Responsabilidades: Lógica de rutas, vistas y estilos en carpetas independientes.
Reutilización de Código: Los partials permiten actualizar el menú o footer una sola vez y reflejarlo en todo el sitio.
Rendimiento: Servir CSS externo permite al navegador cachear los estilos, mejorando tiempos de carga.
Escalabilidad: La estructura modular facilita agregar nuevas páginas o funcionalidades sin modificar el núcleo del servidor.
Versionado: Uso de .gitignore para evitar subir node_modules y mantener el repositorio ligero y profesional.

Autor:
Milagros Ramos