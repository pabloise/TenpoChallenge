# Tenpo Coding Challenge

## Scripts

Una vez clonado el repositorio, correr los siguientes scripts para levantar el proyecto.

### `yarn`

Instala las dependencias pertinentes para que el proyecto corra correctamente.<br />

### `yarn start`

Corre la aplicación en modo desarrollo y levanta el Metro.<br />

### `i`

Al presionar la letra "i", el proyecto levantará en un dispositivo iOS. Si se tiene un simulador seteado por defecto, este iniciará automáticamente y se cargará la aplicación.

### `a`

Al presionar la letra "a", el proyecto levantará en un dispositivo Android.

## Detalles

### Librerías

- typescript
- react-native-permissions
- react-navigation
- react-native-geolocation-service
- react-native-maps
- i18next
- redux-toolit
- redux-thunk
- styled-components
- jest
- react-testing-library
- husky

### Estructura del proyecto

#### src/

├── api/
├── assets/
├── components/
├── hooks/
├── i18n/
├── mocks/
├── redux/
├── screen/
├── themes/
├── types/
├── utils/

_api/_ --> Se encuentran las llamadas a la API para hacer fetch de Restaurantes, Categorías y Favoritos

_assets/_ --> Principalmente imágenes e íconos.

_components/_ --> Todos los componentes, incluidos los estilos, con una carpeta cada uno.

_mocks/_ --> Data mockeada para tests.

_redux/_ --> La carpeta Redux, donde se encuentran los módulos de la aplicación, el store y los slices de Redux Toolkit.

### Llamadas fallidas a la API de Restaurantes

Tal como fue solicitado, el fetcheo de los restaurantes falla 2 de cada 10 veces. Para conseguir esto, el usuario debe hacer un Pull to Refres (es decir, scrollear hacia abajo para refrescar la pantalla) en la lista de restaurantes, para que estos vuelvan a ser llamados por la API. De esta manera, al hacerlo 10 veces, dos de esos intentos van a fallar y saltará en la pantalla un botón de retry para el usuario.
