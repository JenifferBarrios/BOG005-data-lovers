# DATA LOVERS / DATA GHIBLI
![ghibli](src/imagenes/totoro.gif)

## DEFINICION DE PRODUCTO
La página tiene como objetivo brindar información a los visitantes sobre las películas realizadas por Estudio Ghibli a través de los años, desde su fundación en 1985.

Para la construcción de la página web 'Ghibli Lovers' realizamos un bosquejo inicial para entender cómo organizar y delimitar la información que mostraríamos en ella, además de tomar decisiones de diseño en cuanto a disposición de los espacios de caja, tipo de letra, íconos, paleta de colores, y en general, el diseño visual.

Posteriormente utilizamos la tecnología de la plataforma Figma para realizar un prototipo que se acercara más a la propuesta, donde además pudieramos evidenciar un diseño responsive, a partir de dos tamaños básicos (mobil y desktop).

Una vez realizados los prototipos procedimos a escribir el código base en HTML y CSS respondiendo a las ideas plasmadas en ellos. A partir de las pruebas de usabilidad realizadas a 6 usuarios de diferentes características, realizamos iteraciones a la propuesta inicial, hasta conseguir el resultado actual de la página.

***

## HISTORIAS DE USUARIO

## 1. Historia de Usuario I:
### YO COMO visitante de la web GHIBLI Lovers QUIERO un menú intuitivo PARA acceder a links de mi interés dentro y fuera de la página, en diferentes dispositivos.

Decidimos enfocar esta primera historia de usuario en algunos objetivos transversales que ambas teníamos pendientes desde el proyecto anterior, relacionados con CSS e interacción con el DOM. Adicionalmente, abordamos el manejo de GIT, creando las llaves SSH.

### Criterios de aceptación
1. [x] El diseño del menú es responsive y difiere entre tamaños de pantalla.
2. [x] El menú es de fácil acceso visual.
3. [x] El menú se despliega y permite enlazarse a diferentes luegares web dentro de la web.
4. [x] Se aplicó test de usabilidad con 3 personas diferentes.
5. [x] La página en general y el menú en particular responden a buenas prácticas de diseño visual.


## 2. Historia de Usuario II:
YO COMO visitante de la web Ghibli Lovers QUIERO visualizar unas tarjetas con información de las películas PARA obtener datos básicos sobre ellas.

### Criterios de aceptación
1. [x] Las tarjetas están ubicadas en el home de la página y muestran información básica sobre las películas.
2. [x] El link de películas del menú de la web Ghibli Lovers se conecta con la información de la API representada en tarjetas.
3. [x] Las tarjetas contienen información de la película: Director, año de lanzamiento, personajes principales.
4. [x] Las tarjetas tienen un estilo visual acorde al estilo definido en la página principal de Ghibli Lovers

## 3. Historia de Usuario III:
YO COMO visitante de la web Ghibli Lovers QUIERO un selector PARA obtener en pantalla las películas en orden alfabético.

### Criterios de aceptación
1. [x] La página tiene un selector donde el usuario puede escojer el titulo de las peliculas y ordenarlas segun su orden alfabetico.
2. [x] El selector permite escoger el orden en el que se quieren ordenar las películas, si comenzando por la A o por la Z

## 2. Historia de Usuario IV:
YO COMO visitante de la web Ghibli Lovers QUIERO un cálculo con los datos PARA obtener en pantalla el porcentaje de películas dirigidas por el director de mi elección.

### Criterios de aceptación
1. [x] La página muestra el porcentaje de películas dirigidas por un director.
2. [x] Al elegir un director, el porcentaje se visualizará en una sección del DOM.
3. [x] La información del porcentaje se mostrará al elegir el filtrado por director.
4. [x] La visualización del porcentaje estará acorde al estilo visual de la página.
 
***

### Definición de terminado
1. [x] El código está respaldado en GitHub
2. [x] La página es completamente responsive
3. [x] La página se conecta a la API pública de Estudio Ghibli
4. [x] En la página pueden filtrarse datos de interés, como el director y el productor.
5. [x] En la página pueden ordenarse las películas alfabéticamente, en orden ascendente y descendente.

***

### PROTOTIPO DE BAJA FIDELIDAD

![bajaInicial](src/imagenes/baja1.png)

### PROTOTIPO DE ALTA FIDELIDAD

![altaInicial](src/imagenes/alta.bmp)

***

### TESTEOS DE USABILIDAD
Realizamos tests de usabilidad con tres usuarios distintos, en las diferentes fases de desarrollo y con base en los resultados, iteramos el diseño. En los test encontramos algunos problemas relacionados con la estructura y disposición de las diferentes secciones de la página, los colores y tamaños de letra para una mejor visualización y la falta de labels que dieran cuenta de la función de los selectores. Pensábamos agregar links que llevaran a otras páginas, pero nos hicieron caer en la cuenta que no es lo óptimo.

![chihiro](src/imagenes/chihirobanner.gif)

