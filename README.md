# ⚡ PEC 3 - Desarrollo Frontend con Framework JavaScript

![Angular](https://img.shields.io/badge/Angular-17-DD0031?logo=angular)  
<sub>🗓️ Desarrollado en mayo del 2026</sub>

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

### Desarrollo
```bash
npm install
ng serve
```
La aplicación estará disponible en `http://localhost:4200`.

### Build
```bash
npm install
ng build
```
y consultar el directorio `dist/`.  

### Tests
```bash
npm install
ng test
```
para ejecutar los tests unitarios via [Karma](https://karma-runner.github.io).  

```bash
npm install
ng ng e2e
```
para ejecutar tests `end-to-end` via la plataforma que escojas. 
> Para usar este comando, es necesario incluir un *package* que implemente la capacidad de realizar tests *end-to-end*.

---

## Ejercicios

### Ejercicio 1 - Instalación y configuración
La version de Angular que se instaló fue la **17**.

### Ejercicio 2 - Primer componente en Angular
Al utilizar `[class]` se podía hacer *property binding* y enlazar datos unidireccionalmente, asignando valores desde el controlador (**.ts**) a la vista (**.html**).  

Los estilos globales que se crearon, se declararon como:
```json
"styles": [
  "src/assets/styles/styles.css"
],
```
en el `angular.json`. 

### Ejercicio 3 - Directivas en nuestro proyecto
Se añadió `text-decoration: line-through;` (a parte del color gris) al **precio** cuando el artículo no estaba disponible.

### Ejercicio 4 - Componentes en nuestro proyecto
Para crear el nuevo componente con *estilos en línea* y *templates* se usó (en **Angular CLI**):
```bash
$ ng generate component components/article-list --inline-template --inline-style     
```
de esta manera, el HTML y CSS estaban en el propio `article-list.component.ts` y todos los componentes quedaban agrupados en `/components`.

### Ejercicio 5 - Repaso de componentes
La lógica para escoger qué vista mostrar se declaró en `app.component.ts` con:
```ts
type ActiveView = 'list' | 'template' | 'reactive';
```
y se añadió un pequeño componente **hero** que solamente se mostraba en la página de inicio (o, en otras palabras, la de la lista de artículos).

### Ejercicio 6 - Formularios dirigidos por templates
Aunque se trabajase con **Template Forms**, se añadió *FormsModule* en `app.module.ts` para poder usar directivas como `ngModel` y `ngModelGroup` en el *template*.

Para comprobar la **validez de una URL para localizar un recurso**, se incluyó el siguiente patrón en la clase `ArticleNewTemplateComponent`:  
```ts
urlPattern = /^(?!.*\.\.)https?:\/\/[a-zA-Z0-9][a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]*\.[a-zA-Z]{2,3}$/;
```
donde `(?!.*\.\.)` validaba específicamente no incluir ".." en, por ejemplo, **h ttps://ejemplo..com**.  
De esta manera, se validaba el uso de URLs con estilo **http(s)://dominio.xx(x)**.

El siguiente código incluido en el *submit* del form usaba **false** como predeterminado si *form.value.article.isOnSale* era **null** o **undefined**:
```ts
isOnSale: form.value.article.isOnSale ?? false
```  

Inicialmente, se comprobaba que el **price** fuera > 0, pero, como en el siguiente ejercicio se pedía esto explícitamente, y en este solo se mencionaba que "El **precio** debe ser **numérico**", se optó por quitar esta comprobación para este caso.  
De todas maneras, esta se podía conseguir con:
```html
<input ...
min="0.1">
<div class="invalid-feedback"
  *ngIf="priceField.errors?.['min'] && (priceField.dirty || priceField.touched || articleForm.submitted)">
  El precio de los zapatos debe ser mayor que 0
</div>
```

### Ejercicio 7 - Formularios reactivos
Se creó `src/app/validators/name-article.validator.ts` para realizar una validación customizada propia y comprobar la validez del campo *name*.  
Para asegurarse de que cualquier combinación de mayúsculas o minúsculas de esas palabras no fuera posible, se aplicó `toLowerCase()` al **value** que se recibía en la función como parámetro:  
```ts
NameArticleValidator(control: AbstractControl): ValidationErrors | null
```
```ts
const forbidden = ['prueba', 'test', 'mock', 'fake'];
const value = control.value?.trim().toLowerCase();
```

---

![Artículos creados con template y reactivo](src/assets/images/ConsoleLog(s)_Form(s).png)
Fig. 2 - Artículos creados con **template** y **reactive**.

--- 

> Marc Turu Roca · Máster Universitario de Desarrollo de Sitios y Aplicaciones Web
