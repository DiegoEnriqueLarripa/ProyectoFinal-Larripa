# E-commerce "Tech Store" - Proyecto Final React

![Tech Store](https://i.imgur.com/tu-imagen.png) 
*(Opcional: Sube una captura de tu Home a Imgur y pega el enlace aquí)*

## 📋 Descripción General

**Tech Store** es una Single Page Application (SPA) de e-commerce completamente funcional, desarrollada como proyecto final para el curso de React de Coderhouse. La aplicación simula una tienda de tecnología, permitiendo a los usuarios explorar un catálogo de productos, filtrar por categorías, ver detalles, añadir artículos a un carrito y finalizar una compra. El proyecto está construido enteramente con React.js y utiliza Firebase/Firestore como backend para la gestión de productos y órdenes de compra.

El código sigue las mejores prácticas de la industria, aplicando principios como la **separación de responsabilidades**, **DRY** (Don't Repeat Yourself) y la gestión de estado global mediante la **Context API** de React.

---

## ✨ Funcionalidades Clave

*   **Catálogo Dinámico desde Firestore:** El listado de productos se obtiene en tiempo real desde la base de datos.
*   **Navegación Fluida con React Router:** Todas las vistas (Home, Categorías, Detalle, Carrito, Checkout) se cargan sin recargar la página.
*   **Filtrado de Productos:** Permite a los usuarios explorar productos específicos (`Laptops`, `Celulares`, `Tablets`).
*   **Carrito de Compras Interactivo:**
    -   Estado global manejado con `Context` para persistir la selección del usuario.
    -   Funcionalidad completa: añadir, eliminar y vaciar el carrito.
    -   El ícono del carrito se actualiza en tiempo real con la cantidad de productos.
*   **Proceso de Checkout Completo:**
    -   Formulario para que el cliente ingrese sus datos de contacto.
    -   Creación de un documento de "orden" en Firestore con los detalles de la compra.
    -   Feedback inmediato al usuario con el ID de la orden generada.
*   **Experiencia de Usuario (UX) Mejorada:**
    -   Interfaz profesional y responsiva construida con **Bootstrap 5**.
    -   Notificaciones "toast" con **React Toastify** para un feedback claro de las acciones del usuario.
    -   Renderizado condicional de loaders durante las peticiones de datos.

---

## 🛠️ Stack de Tecnologías

*   **Frontend:** React.js (con Vite)
*   **Enrutamiento:** React Router DOM
*   **Estilos:** Bootstrap 5
*   **Notificaciones:** React Toastify
*   **Backend & DB:** Firebase (Firestore)

---

## 🚀 Guía de Instalación y Ejecución

Para clonar, instalar y ejecutar este proyecto en un entorno local, por favor, sigue los siguientes pasos.

### **1. Clonar el Repositorio**

```bash
git clone [URL de tu repositorio de GitHub aquí]
2. Navegar al Directorio
code
Bash
cd proyectofinal-larripadiego
3. Instalar Dependencias
Este comando descargará todas las librerías necesarias para que el proyecto funcione.```bash
npm install
code
Code
### **4. Configurar las Credenciales de Firebase**

**Importante:** Las credenciales de Firebase para este proyecto han sido enviadas por separado para facilitar la corrección. Por favor, asegúrese de que el archivo `src/services/firebase.js` contenga el objeto `firebaseConfig` proporcionado. El proyecto está configurado para leer las credenciales directamente desde este archivo.

### **5. Iniciar la Aplicación**

Una vez instaladas las dependencias, ya puede iniciar la aplicación.
```bash
npm run dev