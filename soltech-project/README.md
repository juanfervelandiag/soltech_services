# Soltech Services - Frontend Project

![Angular](https://img.shields.io/badge/Angular-21.2.0-dd0031?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-007acc?style=for-the-badge&logo=typescript)

Soltech Services es una aplicación web SPA (Single Page Application) desarrollada en Angular. Su propósito principal es presentar un catálogo interactivo de servicios tecnológicos, permitiendo a los usuarios explorar, marcar como favoritos y contactar para solicitar información. Además, incluye un panel de administración para gestionar dinámicamente los servicios ofrecidos.

## 🌍 Despliegue en Vivo

Puedes acceder a la versión en producción de la aplicación en el siguiente enlace:
👉 **[https://juanfervelandiag.github.io/soltech_services/](https://juanfervelandiag.github.io/soltech_services/)**

## 🚀 Características Principales

- **Catálogo de Servicios:** Exploración de servicios tecnológicos (Desarrollo Web, E-commerce, Ciberseguridad, etc.) organizados por categorías.
- **Detalle de Servicio:** Vista dedicada para cada servicio con información extensa, beneficios, tecnologías empleadas y tiempos estimados.
- **Gestión de Favoritos:** Funcionalidad para guardar servicios de interés. La selección persiste de manera local en el navegador.
- **Panel de Administración (CRUD):** Interfaz para crear, leer, actualizar y eliminar servicios del catálogo.
- **Persistencia de Datos:** Uso de `localStorage` para almacenar la lista de servicios y los favoritos del usuario sin necesidad de un backend.
- **Formulario de Contacto:** Sección para que los clientes potenciales se pongan en contacto.
- **Notificaciones (Toasts):** Sistema de notificaciones en pantalla para alertar al usuario sobre el resultado de sus acciones (ej. "Servicio añadido").

## 📂 Estructura del Proyecto

El proyecto sigue una arquitectura modular y organizada basada en las mejores prácticas de Angular:

```text
src/
└── app/
    ├── components/       # Componentes reutilizables UI (Header, Footer, ServiceCard, Toaster)
    ├── data/             # Datos iniciales e interfaces (Mock data para los servicios)
    ├── pages/            # Componentes enrutables (Vistas principales de la aplicación)
    │   ├── admin/        # Panel de administración de servicios
    │   ├── contact/      # Página de formulario de contacto
    │   ├── favorites/    # Lista de servicios guardados como favoritos
    │   ├── home/         # Página principal (Landing Page)
    │   ├── not-found/    # Página de error 404
    │   ├── service-detail/ # Detalle completo de un servicio específico
    │   └── services/     # Catálogo completo de servicios con filtros
    ├── services/         # Servicios de Angular (Lógica de negocio y manejo del estado global)
    ├── app.routes.ts     # Configuración del enrutador de la aplicación
    └── app.ts            # Componente principal / raíz
```

## 🛠️ Tecnologías y Herramientas

- **Framework Core:** Angular 21.2.0
- **Lenguaje:** TypeScript 5.9.2
- **Estilos:** CSS
- **Testing:** Vitest
- **Server-Side Rendering (SSR):** Soporte integrado de SSR con Angular Universal

## ⚙️ Instalación y Configuración

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. **Requisitos previos:** Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión recomendada LTS).
2. **Ubicarse en el directorio del proyecto:**
   Abre una terminal en la ruta principal del proyecto (`.../soltech-project`).
3. **Instalar las dependencias:**
   ```bash
   npm install
   ```
4. **Iniciar el servidor de desarrollo:**
   ```bash
   npm start
   ```
5. **Acceder a la aplicación:**
   Abre tu navegador web y visita: `http://localhost:4200/`. La aplicación se recargará automáticamente al realizar cambios en el código.

## 📦 Comandos Disponibles

- `npm start` / `ng serve`: Inicia el servidor local de desarrollo.
- `npm run build` / `ng build`: Compila la aplicación para producción. Los archivos generados se guardan en la carpeta `dist/`.
- `npm run test` / `ng test`: Ejecuta las pruebas unitarias utilizando Vitest.
- `npm run serve:ssr:soltech-project`: Inicia la aplicación usando el servidor Express configurado para Server-Side Rendering (requiere un build previo).

## 👨‍💻 Acerca del Proyecto

Proyecto desarrollado como parte de las entregas del módulo Front End del curso Ingeniería de Software del Politécnico Gran Colombiano (Abril 2026) - Grupo 11.
