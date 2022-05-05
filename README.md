# Buscador de películas con escenas de Owen Wilson diciendo "WOW"

El ejercicio consiste en desarrollar una página web con el listado de las escenas de las películas donde el
actor Owen Wilson ha dicho 'wow', API Wow de Owen Wilson es la API que usaremos en este ejercicio.
Vamos a usar React para realizarlo.

## Pintar un listado

En primer lugar, vamos a realizar una web con el listado de 50 escenas donde el actor Owen Wilson ha
dicho 'wow'.
Para eso, vamos a utilizar el servicio de [esta URL](https://owen-wilson-wow-api.herokuapp.com/wows/random?)
results=50 que nos devuelve información de 50 escenas de películas aleatorias. Sobre cada una, vamos a
mostrar al menos:
Poster (poster)
Película (movie)
Frase completa (full_line)
Año (year)
Puedes ingresar a la página oficial del Api en el siguiente [enlace](https://owen-wilson-wowapi.herokuapp.com/)

## Filtrado por película

Ahora que ya tenemos el listado de escenas, la segunda parte consiste en realizar un filtro para buscar por
película. Para eso, añadimos un input a la interfaz, de forma que al ir escribiendo un nombre queden en la
interfaz solo las escenas cuya película contiene las letras escritas.

## Filtrado por año

Ahora que ya tenemos el listado de escenas en pantalla, y filtrado por nombre de la película donde aparece
la escena, la siguiente parte consiste en filtrar el listado por año de la película. Para eso, añadimos un
select a la interfaz, de forma que al seleccionar un año queden en la interfaz solo las escenas que
coincidan con el año seleccionado.

## Componentes de la aplicación

La aplicación debe tener los siguientes componentes como mínimo:
Componente para los filtros.
Componente para el listado (MovieSceneList).
Componente para la tarjeta de cada escena del listado (MovieSceneItem).
Componente para el detalle de cada escena del listado (MovieSceneDetail).

## Detalle de cada escena

Vamos a implementar una nueva funcionalidad: al hacer clic sobre la tarjeta de una escena, su información
aparecerá a pantalla completa. Para hacer esto usaremos rutas y React Router DOM. En la pantalla de
detalle aparecerá:
nombre de la película,
frase completa
director
el enlace del audio de la escena, al darle clic debe mostrarse en una pestaña aparte en el navegador.

## Authors

- [@aliciaapadron](https://github.com/aliciaapadron)
