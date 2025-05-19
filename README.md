## 🛍️ Catálogo de Productos Creativos
### Evidencia 01 – Proyecto Integrador | Desarrollo Frontend con React

Este proyecto es una aplicación web que simula un catálogo de productos dinámico utilizando React + Vite + Tailwind CSS + Axios, con datos consumidos desde una API externa. Permite visualizar productos, aplicar filtros de búsqueda y mostrar estadísticas generadas dinámicamente.

## 🚀 Tecnologías utilizadas
⚛️ React – Librería para construir interfaces de usuario.

⚡ Vite – Herramienta de desarrollo ultrarrápida.

💨 Tailwind CSS – Framework de estilos CSS basado en utilidades.

🌐 Axios – Cliente HTTP para consumir APIs externas.

🧮 JavaScript (ES6) – Lógica de renderizado, estado y efectos.

### 🖼️ Captura de pantalla
![image](https://github.com/user-attachments/assets/638445f6-9555-4e31-94fd-5e958385a1a5)


### 📦 Funcionalidades principales
✅ Consumo de API externa (https://dummyjson.com/products)
✅ Filtro dinámico por título de producto
✅ Estadísticas calculadas a partir de los productos filtrados
✅ Componentes reutilizables y bien organizados
✅ Precios aleatorios y nombres de productos personalizados
✅ Estilos modernos y adaptativos con Tailwind CSS

### 📊 Estadísticas implementadas

🏷️ Producto más caro

🧾 Producto más barato

🔤 Cantidad de títulos con más de 20 caracteres

💰 Precio total de los productos filtrados

📉 Promedio de descuento (discountPercentage)

- Productos con precio > $300
- Total de productos filtrados
- Descuento más alto registrado

### 🧩 Componentes personalizados
Componente	Función
App.jsx	Componente principal: gestiona estado, búsqueda y renderizado general
ProductList.jsx	Muestra la lista de productos en tarjetas
StatsPanel.jsx	Calcula y muestra las estadísticas dinámicamente

### Instrucciones para ejecutar el proyecto
* Abrir una terminal.
* Posicionarse dentro de la carpeta del proyecto evidencia1.
* Ejecutar el siguiente comando para instalar las dependencias:
* npm install

Ejecutar el proyecto con el comando:
* npm run dev
* Abrir el navegador en el link que aparecerá por defecto:
* http://localhost:####
