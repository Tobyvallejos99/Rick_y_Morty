**GUIA REDUX-REACT**

_1- Creamos la carpeta redux y en esa carpeta creamos los archivos:_

```
action-type.js;
actions.js;
reducer.js;
store.js;
```

_2- Creamos las actions-types, ejemplo:_

```javascript
export const AUMENTAR_CONTADOR = "AUMENTAR_CONTADOR";
```

_2- Importamos la action-type en reducer.js, ejemplo:_

```javascript
import { AUMENTAR_CONTADOR } from "./action-types";
```

_3- Creamos el reducer con su estado inicial (objeto), ejemplo:_

```javascript
const initialState = {
  count: 0,
  users: [],
  user: {},
};
```

_4- Creamos la funcion reducer:_

```javascript
const reducer = (state = initialState, action) => {};
```

_5- Importamos el reducer en el store.js, tambien importamos el {createStore} de 'redux'. Luego creamos la store y le exportamos:_

```javascript
const store = createStore(reducer);
export default store;
```

_6- Dentro de actions.js creamos las funciones que vana retornar las actinos. Para esto importamos de actions-type.js las actions que necesitemos, ejemplo:_

```javascript
import { AUMENTAR_CONTADOR } from "./action-types";

export const aumentarContador = () => {
  return { type: AUMENTAR_CONTADOR };
};
```

_7- Volvemos a reducer.js y creamos lo que queremos que se ejecute segun la action. Para esto usamos un switch._

_8- importamos el provider y el store en index.js_

```javascript
import { Provider } from "react-redux";
import store from "./redux/store";
```

_9- Envolvemos a <App/> con el provider y el props store:_

```javascript
<Provider store={store}>
  <App />
</Provider>
```

_10- Dentro del componente que queremos que utilice el global state tenemos que importar el metodo connect de redux y la funcion que va a ejecutar la accion:_

```javascript
import { connect } from "react-redux";
import { aumentarContador } from "../redux/actions";
```

_11- Despues del export default, envolvemos el componente con la funcion connect y le pasamos 2 funciones como parametros:_

```javascript
export default connect(
  mapStateToProps, // Me permite traer info del Global
  mapDispatchToProps // Me permite despachar acciones
)(Contador);
```

_12- Y declaramos las funciones arriba, pero despues del componente:_

```javascript
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
```

```javascript
const mapDispatchToProps = (dispatch) => {
  return {
    aumentarContador: () => dispatch(aumentarContador()),
  };
};
```

_La primera funcion nos pone en las props del componente lo que necesitemos usar del global.
La segunda funcion nos pone disponible en las props la funcion para ejecutar la action, en este caso "aumentarContador"_

_13- Lo que quedaria seria colocar la funcion en un useEffect en caso de que queramos que se ejecute al momento de montado el componente. O en una funcion handle, ejemplo_

```javascript
const handleAumentarContador = () => props.aumentarContador();
```

_y colocarla en algun evento de algun componente, como en el onClick=handleAumentarContador_
