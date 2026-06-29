# 📝 Todo App - Lista de Tareas

Una aplicación web moderna para gestionar tus tareas diarias con almacenamiento local.

## ✨ Características

- ✅ **Crear tareas** - Agrega nuevas tareas rápidamente
- ✔️ **Marcar como completadas** - Checkboxes interactivos
- 🗑️ **Eliminar tareas** - Borra tareas individuales
- 🏷️ **Prioridades** - Etiquetas de prioridad (Alta, Media, Baja)
- 🔍 **Filtros** - Visualiza todas, activas o completadas
- 💾 **Local Storage** - Los datos se guardan automáticamente
- 📊 **Estadísticas** - Contador de tareas totales y completadas
- 📱 **Responsive** - Compatible con dispositivos móviles
- 🎨 **Diseño moderno** - Interfaz limpia y atractiva

## 🚀 Cómo usar

1. Abre `index.html` en tu navegador
2. Escribe una tarea en el campo de entrada
3. Presiona "Agregar Tarea" o Enter
4. Marca las tareas como completadas con el checkbox
5. Usa los filtros para ver diferentes categorías
6. Haz clic en "Eliminar" para borrar una tarea
7. Usa "Limpiar Completadas" para borrar todas las tareas completadas

## 📁 Estructura del Proyecto

```
.
├── index.html    # Estructura HTML
├── styles.css    # Estilos CSS
├── script.js     # Lógica JavaScript
└── README.md     # Este archivo
```

## 🛠️ Tecnologías utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con gradientes y animaciones
- **Vanilla JavaScript** - Lógica sin dependencias externas
- **Local Storage API** - Persistencia de datos

## 📊 Almacenamiento Local

La aplicación utiliza `localStorage` para guardar automáticamente todas tus tareas. Los datos se persisten incluso después de cerrar el navegador.

```javascript
// Estructura de datos
{
    id: timestamp,
    text: "Descripción de la tarea",
    completed: boolean,
    createdAt: "fecha y hora",
    priority: "high" | "medium" | "low"
}
```

## 🎯 Casos de uso

- Gestión de tareas personales
- Lista de compras
- Tareas de trabajo
- Planificación diaria
- Recordatorios de actividades

## 🔄 Funcionalidades

### Agregar tarea
- Escribe en el input
- Presiona Enter o haz clic en "Agregar Tarea"
- La tarea aparece al inicio de la lista

### Completar tarea
- Haz clic en el checkbox
- La tarea se marca como completada
- El estado se guarda automáticamente

### Filtrar tareas
- **Todas** - Muestra todas las tareas
- **Activas** - Muestra solo las no completadas
- **Completadas** - Muestra solo las completadas

### Limpiar completadas
- Elimina todas las tareas completadas de una vez
- Requiere confirmación

## 📈 Estadísticas

- Contador de tareas totales
- Contador de tareas completadas
- Porcentaje de progreso (visual en los filtros)

## 🎨 Personalización

Puedes personalizar los colores editando las variables CSS en `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    /* ... más variables */
}
```

## 📝 Notas

- El almacenamiento está limitado a ~5-10MB por sitio
- Los datos se guardan automáticamente
- Compatible con todos los navegadores modernos

## 🤝 Contribuciones

Este es un proyecto educativo. Siéntete libre de hacer fork y mejorar la aplicación.

---

**Desarrollado con ❤️ - 2024**