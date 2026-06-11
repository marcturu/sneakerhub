# ⚡ PEC 4 - Desarrollo Frontend con Framework JavaScript

![Angular](https://img.shields.io/badge/Angular-17-DD0031?logo=angular)  
<sub>🗓️ Desarrollado en junio del 2026</sub>

| Campo | Valor |
|---|---|
| **Login UOC** | mturur |
| **Nombre** | Marc Turu Roca |
| **Máster** | Desarrollo de Sitios y Aplicaciones Web |

--- 

## Decisiones técnicas generales

### Estructura de ramas
Se ha trabajado con ramas Git a pesar de ser un proyecto individual, con el objetivo de mantener un historial limpio y organizado. Los *merges* se realizaron con `--no-ff` para preservar el commit de estos aunque la rama base no hubiera cambiado. Estas ramas estaban formadas por 3 (4) bloques:
- **main**: Para generar las versiones finales de la aplicación.
- **develop** y **feature/0x-ejy**: Para desarrollar los ejercicios (funcionalidades) de la práctica y juntarlas en *develop*.
- **hotfix/nombre**: Para arreglar errores puntuales.

### Extras
1. En la hoja de estilos se crearon variables personalizadas para mantener un orden y coherencia visual. Entre ellas estaban: ```--color-primary: #111827;```, ```--spacing-sm: 1rem;```, ```--container-max-width: 1200px;```,...  

2. A partir de estos colores, se realizó un diseño sencillo para que sirviese como logotipo y *favicon* de la web:  
<img src="src/assets/images/SneakerHub.png" alt="Logotipo de la web" width="150" />  
Fig. 1 - Logotipo de **SneakerHub**.

3. Se utilizó el *framework CSS* `Bootstrap` en componentes como **Navbar**, **Card**, **Lista** de Cards y **Form**. De esta manera, se podían reutilizar elementos ya existentes, editarlos al gusto propio y centrarse más en otras funcionalidades útiles del nuevo framework JS Angular.

---

## Cómo ejecutar el proyecto

### 1. Cliente (Angular)
```bash
npm install
```

#### Desarrollo
```bash
ng serve
```
La aplicación estará disponible en `http://localhost:4200`.

#### Build
```bash
ng build
```
y consultar el directorio `dist/`.  

#### Tests
```bash
ng test
```
para ejecutar los tests unitarios via [Karma](https://karma-runner.github.io).  

```bash
ng ng e2e
```
para ejecutar tests `end-to-end` via la plataforma que escojas.  

> Para usar este comando, es necesario incluir un *package* que implemente la capacidad de realizar tests *end-to-end*.

### 2. Servidor (NodeJS)
```bash
cd server-articles
npm install
npm start
```
El servidor estará disponible en `http://localhost:3000`.  

> Para que la aplicación funcione correctamente, tanto el cliente como el servidor deben estar ejecutándose simultáneamente.

---

## Rutas disponibles

### Aplicación web
| Ruta | Descripción |
|--------|-------------|
| `/article/list` | Muestra el catálogo de productos. |
| `/article/:id` | Muestra el detalle de un producto. |
| `/article/create` | Permite crear un producto. |
| `/login` | Página de inicio de sesión. |
| `/register` | Página de registro de usuarios. |

### API REST
| Método | Endpoint | Descripción |
|---------|----------|-------------|
| GET | `/api/articles` | Obtiene todos los artículos. |
| GET | `/api/articles/:id` | Obtiene un artículo por identificador. |
| POST | `/api/articles/` | Crea un nuevo artículo. |
| PATCH | `api/articles/:id` | Actualiza la **quantity** de un artículo. |
| POST | `/api/user/login` | Identifica un usuario existente. |
| POST | `/api/user/register` | Crea un usuario nuevo. |

---

## Ejercicios

### Ejercicio 1 - Servicios
Para crear el nuevo servicio se hizo (en **Angular CLI**):
```bash
$ ng generate service services/article     
```
Inicialmente (y antes de utilizar las llamadas al servidor) se utilizó `BehaviorSubject` para mantener el estado actual de los artículos y permitir que los componentes recibieran automáticamente las actualizaciones.  
Además, `article-list.component.ts` delegaba toda la lógica al servicio y `article-new-reactive.component.ts`, a parte de devolver un *console.log()*, llamaba a la nueva función 
```ts
articleService.create()
```
para añadir el item del form.

### Ejercicio 2 - HttpClient
En la función 
```ts
onQuantityChange(change: ArticleQuantityChange)
```
de `article-list.component.ts`, anteriormente se hacía que el parámetro pasado como **change** era el nuevo valor del carrito. Después, observando el valor esperado en el
```js
router.patch('/:id', (req, res) => {}
```
del servidor, se pudo comprobar que esperaba cuánto se quería incrementar o decrementar, por lo que se tuvo que cambiar la función anterior, el modelo que definía el **ArticleQuantityChange** y la manera para modificar dicho valor del item:
```ts
increment(): void {
  this.quantityChange.emit({
    article: this.article,
    delta: 1
  });
}
```
Para el buscador, se utilizó **debounceTime(300)** para evitar sobrecargar el backend con llamadas HTTP por cada tecla, y **switchMap** para convertir el string en HTTP request y cancelar las peticiones anteriores si llegaba otra.  

Para mantener la lista de artículos actualizada en tiempo real tras modificar una cantidad, se combinaron dos `Subject` con `combineLatest`:
- `searchSubject`: emitía el texto del buscador con `debounceTime(300)` y
  `distinctUntilChanged` para evitar peticiones innecesarias.
- `refreshSubject` (`BehaviorSubject`): emitía un valor vacío cada vez que
  se completaba un `PATCH` de cantidad, forzando un nuevo `GET` al servidor.  

Esto era necesario porque el servidor gestionaba el estado (sumaba o restaba 1 al `quantityInCart` en cada PATCH), por
lo que la única forma de tener el valor actualizado era volver a pedirlo.

### Ejercicio 3 - Pipes
En la práctica anterior, específicamente en `article-item.component.html`, ya tenía una pipe *built-in*:
```html
{{  article.price | currency:'EUR':'symbol':'1.2-2'}}
```
pero para este ejercicio, generé dos pipes nuevas personalizadas (ya que no se muestra la contrario) con:
```bash
ng generate pipe pipes/default-image pipes/price
```

### Ejercicio 4 - Routing
Se creó `user.model.ts` para poder utilizarlo en, por ejemplo, el tipado de datos de las llamadas **HTTP** o en el tipado de los *returns* del `user.service.ts`:
```ts
export interface User {
  username: string;
  password: string;
}

export interface AuthResponse {
  msg: string;
  token: string;
}

export interface RegisterResponse {
  msg: string;
}
```
> Para saber exactamente qué tipado utilizar, se tuvo que consultar la respuesta que lanzaba cada llamada en el servidor en los `res.json({...})`.  

Se añadió la siguiente función en `article.service.ts` para usarse en `article-detail.component.ts` y poder recuperar el articulo referente a su **id**:
```ts
getArticleById(id: number): Observable<Article> {
  return this.http.get<Article>(`${this.apiUrl}/${id}`);
} 
```  

Se añadió:
```html
[routerLink]="['/article', article.id]"
```
en `article-item.component.html` (además de `cursor: pointer`) para redirigir el item a su `article-detail.component`.  

A partir de Angular +15, el guard basado en clase con **CanActivate** está deprecado, por lo que se implementó con:
```ts
export const AuthGuard: CanActivateFn = () => {...}
```
y no se inyectó en los **providers** de `app.module.ts`, ya que era simplemente una función que se usaba directamente en la ruta:
```ts
{ path: 'article/create', component: ArticleNewReactiveComponent, canActivate: [AuthGuard] },
```
de `app-routing.module.ts`.  

Se implementó un interceptor HTTP (`article-app.interceptor.ts`) encargado de añadir automáticamente la cabecera Authorization con el token almacenado cuando el usuario estaba autenticado.  

En la barra de navegación se usó `*ngIf="isLoggedIn$ | async"` para controlar qué página mostrar dependiendo de si el usuario estaba *logueado* o no. De este modo, se mostraban 2 barras de navegación:

<img src="src/assets/images/NavbarWOLogin.png" alt="Navbar without Login" />   
Fig. 2 - Barra de navegación sin usuario logueado.  

<img src="src/assets/images/NavbarWLogin.png" alt="Navbar with Login"/>   
Fig. 3 - Barra de navegación con usuario logueado.  

El enunciado indicaba que el endpoint `/user/register` asignaba automáticamente la contraseña **SECRET** a todos los usuarios registrados. Sin embargo, el servidor proporcionado implementaba un comportamiento diferente y almacenaba la contraseña recibida en la petición.  
Dado que el objetivo de la práctica era consumir la API proporcionada, la aplicación cliente se ha adaptado al comportamiento real del backend, enviando y utilizando la contraseña introducida por el usuario durante el registro y la autenticación.

### Ejercicio 5 - Práctica sobre Lazy-Loading
Las rutas utilizadas en el `user-routing.module.ts` fueron:
```ts
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];
```
y en `article-routing.module.ts`:
```ts
const routes: Routes = [
  { path: 'list', component: ArticleListComponent },
  { path: 'create', component: ArticleNewReactiveComponent, canActivate: [AuthGuard] },
  { path: 'create-template', component: ArticleNewTemplateComponent },
  { path: ':id', component: ArticleDetailComponent }
];
```  
Además, se debió actualizar `app-routing.module.ts` y utilizar la nueva sintaxis **Angular +8** con *import() dinámico*, y `app.module.ts` para quitar las declaraciones que ya se hacían en cada módulo específicamente.   

De esta manera, las rutas *login* y *register* eran relativas al módulo **User**, y las rutas *article/list*, *article/create*, *article/:id* eran relativas al módulo *Article*. El prefijo lo ponía el AppRoutingModule.  

Conviene recalcar que, aparte de las rutas de las vistas de cada módulo, también se añadieron componentes extra que usaba cada página, como por ejemplo en `article.module.ts`:
```ts
import { HeroComponent } from '../../components/hero/hero.component';
import { DefaultImagePipe } from '../../pipes/default-image.pipe';
import { PricePipe } from '../../pipes/price.pipe';
```

Como se puede comprobar al ejecutar:
```bash
$ ng serve
```
se generan los archivos con **lazy loading**, siendo **chunk-GOWGP27F.js** **article-module**, y **chunk-ZRWLDDKV.js** **user-module**:  

<img src="src/assets/images/LazyLoadingConsole.png" alt="Lazy loading en consola"/>  

Fig. 4 - Muestra del Lazy Loading en la consola.  

y se cargan correspondientemente en la web:  

<img src="src/assets/images/LazyLoadingDevTools.png" alt="Lazy loading en DevTools"/>  
Fig. 5 - Muestra del Lazy Loading en la las DevTools de Firefox Developer.  

Esta separación permitía que los módulos de usuarios y artículos solo se descargaran cuando eran necesarios, reduciendo el tamaño del *bundle* inicial.

--- 

## Consideraciones

- Los artículos y usuarios se almacenan en memoria en el servidor (por lo que, al reiniciar el *cliente* (frontend), se mantienen los datos).
- Por contra, al reiniciar el *servidor* (backend) se pierden los datos creados.

---

> Marc Turu Roca · Máster Universitario de Desarrollo de Sitios y Aplicaciones Web
