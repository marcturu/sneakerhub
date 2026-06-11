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
Se ha trabajado con ramas Git a pesar de ser un proyecto individual, con el objetivo de mantener un historial limpio y organizado. Los *merges* se realizaron con `--no-ff` para preservar el commit de estos aunque la rama base no hubiera cambiado. Estas ramas estaban formadas por de 3 (4) bloques:
- **main**: Para generar las versiones finales de la aplicación.
- **develop** y **feature/0x-ejy**: Para desarrollar los ejercicios (funcionalidades) de la práctica y juntarlas en *develop*.
- **hotfix/nombre**: Para arreglar errores puntuales.

### Extras
1. En la hoja de estilos se crearon variables personalizadas para mantener un orden y coherencia visual. Entre ellas estaban: ```--color-primary: #111827;```, ```--spacing-sm: 1rem;```, ```--container-max-width: 1200px;```,...  

2. A partir de estos colores, se realizó un diseño sencillo para que sirviése como logotipo y *favicon* de la web:  
<img src="src/assets/images/SneakerHub.png" alt="Logotipo de la web" width="150" />  
Fig. 1 - Logotipo de **SneakerHub**.

3. Se utilizó el *framework CSS* `Bootstrap` en componentes como **Navbar**, **Card**, **Lista** de Cards y **Form**. De esta manera, se podían reutilizar elementos ya existentes, editarlos al gusto propio y centrarse más en otras funcionalidades útiles del nuevo framework JS Angular.

---

## Cómo ejecutar el proyecto
```bash
npm install
```

### Desarrollo
```bash
ng serve
```
La aplicación estará disponible en `http://localhost:4200`.

### Build
```bash
ng build
```
y consultar el directorio `dist/`.  

### Tests
```bash
ng test
```
para ejecutar los tests unitarios via [Karma](https://karma-runner.github.io).  

```bash
ng ng e2e
```
para ejecutar tests `end-to-end` via la plataforma que escojas. 
> Para usar este comando, es necesario incluir un *package* que implemente la capacidad de realizar tests *end-to-end*.

---

## Ejercicios

### Ejercicio 1 - Servicios

### Ejercicio 2 - HttpClient

### Ejercicio 3 - Pipes

### Ejercicio 4 - Routing

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
Además, se debió actualizar `app-routing.module.ts` y utilizar la nueva sintaxis **Angular +8** con *import() dinámico*, y `app.module.ts` para quitar las edclaraciones que ya se hacían en cada módulo específicamente.   

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

y se cargan correspondientemente en la web:  

<img src="src/assets/images/LazyLoadingDevTools.png" alt="Lazy loading en DevTools"/>  


--- 

> Marc Turu Roca · Máster Universitario de Desarrollo de Sitios y Aplicaciones Web
