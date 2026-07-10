# Actividad 5: Introducción a React - Fundamentos y Primer Componente

### Instituto Tecnológico Nacional de México

### Instituto Tecnológico de Oaxaca

**Materia:** Programación Web

**Docente:** Mtra. Adelina Martínez Nieto

**Alumna:** Mendoza Jimenez Melody Nathalie 23161034


---

# Descripción del Proyecto

El proyecto consiste en una aplicación llamada **Votación de Tecnologías Web**, donde el usuario puede votar por distintas tecnologías utilizadas en el desarrollo de software. Cada tecnología aparece dentro de una tarjeta independiente que muestra su nombre, categoría y un contador de votos.

Cada vez que el usuario presiona el botón **"Votar"**, únicamente aumenta el contador de esa tarjeta, demostrando el funcionamiento del estado (`useState`) en React.

La información de las tecnologías se almacena dentro de un arreglo de objetos y posteriormente se muestra en pantalla utilizando el método **map()**, lo que permite generar las tarjetas de forma dinámica y facilita agregar nuevas tecnologías sin modificar la estructura de la aplicación.

El diseño fue realizado con **CSS Modules**, permitiendo mantener los estilos organizados y evitando conflictos entre clases. Además, se utilizó una combinación de colores en tonos azules y morados para crear una interfaz sencilla, agradable y fácil de utilizar.

---

# Objetivos cumplidos

Durante el desarrollo de esta práctica se implementaron los siguientes requisitos:

-  Proyecto creado con React utilizando Vite.
-  Componente funcional simple.
-  Componente que recibe props.
-  Componente con estado utilizando `useState`.
-  Manejo de eventos mediante `onClick`.
-  Renderizado dinámico utilizando `map()`.
-  Uso de `key` para identificar cada elemento de la lista.
-  Diseño personalizado utilizando CSS Modules.
-  Publicación del proyecto en GitHub Pages.

---

# Funcionamiento de la aplicación

Al iniciar la aplicación se muestra una lista de tecnologías obtenidas desde un arreglo de objetos.

Cada tarjeta contiene:

- Nombre de la tecnología.
- Categoría.
- Cantidad de votos.
- Botón para votar.

Cuando el usuario hace clic en el botón **"Votar"**, solamente aumenta el contador correspondiente a esa tecnología gracias al uso del estado (`useState`).

Las tarjetas se generan automáticamente mediante el método `map()`, por lo que si en el futuro se agregan más tecnologías al arreglo, la aplicación las mostrará sin necesidad de crear nuevas tarjetas manualmente.

---

# Conceptos de React aplicados

## Componente funcional

Se utilizaron componentes funcionales para dividir la interfaz en partes más pequeñas y reutilizables, como la cabecera, las tarjetas de tecnologías y el pie de página.

---

## Props

Las **props** fueron utilizadas para enviar información desde el componente principal (`App.jsx`) hacia los componentes hijos, como el nombre de la tecnología, su categoría, el título principal y la descripción de la aplicación.

---

## Estado (useState)

Cada tarjeta utiliza el Hook `useState` para almacenar la cantidad de votos que recibe.

Gracias a esto, cuando el usuario presiona el botón para votar, únicamente se actualiza la tarjeta seleccionada.

---

## Eventos

Se implementó el evento `onClick` para detectar cuándo el usuario presiona el botón de votar y actualizar el contador correspondiente.

---

## Renderizado dinámico

La lista de tecnologías se genera recorriendo un arreglo mediante el método `map()`, permitiendo crear cada tarjeta automáticamente utilizando un componente reutilizable.

---

# Cuestionario

## a) ¿Qué diferencia hay entre props y state en React?

Las **props** son datos que un componente padre envía a un componente hijo para mostrar información o configurar su funcionamiento. Una vez que el componente las recibe, no debe modificarlas.

En cambio, el **state** es información que pertenece al propio componente y puede cambiar cuando el usuario interactúa con la aplicación. Cada vez que el estado cambia, React actualiza automáticamente la interfaz para mostrar el nuevo valor.

---

## b) ¿Por qué es importante usar una key al renderizar una lista de elementos?

La propiedad **key** permite que React identifique de forma única cada elemento de una lista.

Esto ayuda a que React detecte cuáles elementos cambiaron, cuáles fueron agregados o eliminados, haciendo que las actualizaciones sean más rápidas y eficientes.

Si no se utiliza una **key**, React puede mostrar advertencias y realizar más trabajo del necesario al volver a renderizar la lista.

---

## c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.

`useState` es un Hook de React que permite guardar información dentro de un componente y actualizarla cuando ocurre alguna acción.

En mi aplicación lo utilicé para llevar el control de los votos de cada tecnología. Cada vez que el usuario presiona el botón **"Votar"**, el contador aumenta en uno y React actualiza automáticamente el número mostrado en la tarjeta correspondiente.

---

## d) Enlace del repositorio de GitHub

**Repositorio:**

https://github.com/Melody-Mendoza/t3_act5_react


---

## e) Enlace del proyecto desplegado en GitHub Pages

**GitHub Pages:**

https://melody-mendoza.github.io/t3_act5_react/

---

# Conclusión

Con esta práctica aprendí a crear mi primer proyecto utilizando React y Vite, además de comprender cómo funciona la estructura basada en componentes.

También entendí la diferencia entre **props** y **state**, cómo utilizar el Hook `useState` para actualizar información en pantalla, cómo generar listas dinámicamente con `map()` y la importancia de utilizar `key` para identificar correctamente cada elemento.

Finalmente, aprendí el proceso para generar el build del proyecto y publicarlo en GitHub Pages, permitiendo compartir la aplicación funcionando desde Internet.
