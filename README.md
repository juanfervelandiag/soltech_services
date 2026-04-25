# Soltech Services

Este repositorio contiene el código fuente para el proyecto **Soltech Services**, una aplicación web desarrollada utilizando [Angular](https://angular.dev/).

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado en tu sistema:
- **[Node.js](https://nodejs.org/)** (se recomienda la versión LTS más reciente, compatible con las versiones actuales de Angular).
- **[npm](https://www.npmjs.com/)** (se instala de forma automática con Node.js).
- **[Angular CLI](https://angular.dev/tools/cli)** (Opcional pero muy recomendado). Puedes instalar la herramienta globalmente ejecutando:
  ```bash
  npm install -g @angular/cli
  ```

## 🚀 Instalación de Dependencias

El código de la aplicación se encuentra dentro de la subcarpeta `soltech-project`. Para instalar todas las dependencias necesarias y preparar el entorno de desarrollo, sigue estos pasos:

1. Abre una terminal.
2. Navega al directorio del proyecto de Angular:
   ```bash
   cd soltech-project
   ```
3. Instala las dependencias del proyecto usando npm:
   ```bash
   npm install
   ```

## 💻 Ejecución del Proyecto (Modo Desarrollo)

Para levantar el servidor de desarrollo local y ver la aplicación en funcionamiento:

1. Asegúrate de estar dentro de la carpeta `soltech-project` en tu terminal.
2. Ejecuta el script de inicio:
   ```bash
   npm run start
   ```
   *(También puedes usar el comando directamente si tienes instalado Angular CLI: `ng serve`)*
3. Abre tu navegador web de preferencia y dirígete a `http://localhost:4200/`. 
   
> **Nota:** La aplicación cuenta con "live-reloading", por lo que se recargará automáticamente en el navegador cada vez que guardes algún cambio en los archivos fuente.

## 📦 Construcción para Producción (Build)

Cuando la aplicación esté finalizada y lista para ser desplegada en un servidor o entorno de producción, debes generar los archivos compilados y optimizados.

Ejecuta el siguiente comando dentro de la carpeta `soltech-project`:
```bash
npm run build
```
*(Alternativa manual: `ng build`)*

Este comando compilará el proyecto y almacenará los artefactos finales minimizados y optimizados en el directorio `dist/soltech-project/`.

## 🧪 Ejecución de Pruebas (Testing)

El proyecto está configurado para utilizar **[Vitest](https://vitest.dev/)** para las pruebas unitarias. Para ejecutarlas, puedes utilizar el siguiente comando:

```bash
npm run test
```
*(Alternativa manual: `ng test`)*

## 📁 Estructura Principal

* `/soltech-project/`: Contiene la aplicación de Angular.
  * `src/`: Encontrarás el código fuente principal, componentes, hojas de estilo y servicios.
  * `package.json`: Definición de dependencias y scripts de ejecución.
  * `angular.json`: Archivo con la configuración base del "workspace" de Angular.
