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

### Ejercicio 1 - Servicios

### Ejercicio 2 - HttpClient

### Ejercicio 3 - Pipes

### Ejercicio 4 - Routing

### Ejercicio 5 - Práctica sobre Lazy-Loading

--- 

> Marc Turu Roca · Máster Universitario de Desarrollo de Sitios y Aplicaciones Web
