# IONIC 4

## Comandos

#### Muestra los templates por defecto que trae IONIC para generar un nuevo proyecto

```
ionic start --list
```

#### Nuevo proyecto en blanco

```
ionic start nombreProyecto blank
```

#### entrar al directorio del proyecto creado y ejecutar para que muestre en el navegador el proyecto corriendo

```
ionic serve
```

#### Genera los archivos necesarios para ejecutar la app transpilada, genera el directorio www para que pueda ser leído el proyecto por capacitor y nos permita transpilar a android o ios (correr si se han hecho cambios significativos)

```
ionic build
```

#### Genera los archivos necesarios, en el directrio www, para ejecutar usando variables para producción

```
ionic build --prod
```

## Capacitor

### Capacitor es el motor que permite llevar el código de IONIC a dispositivos y emuladores para despues con capacitor CLI ejecutar los comandos necesarios para generar la app

```
npm install @capacitor/core @capacitor/cli --save-exact
```

#### Comando para añadir e inicializar capacitor al proyecto despues de instalarlo, permite colocar un nombre a la app y un ID

```
npx cap init
```

##### Llenar los campos solicitados (app package📦 id: es el identificador con el que se busca la app en las tiendas de apps: ejemplo.app.nueva)

#### Muestra los comandos de capacitor

```
npx cap
```

#### Integrar android o ios al proyecto

```
npx cap add android
npx cap add ios
```

##### Si se trabaja en linux asegurese de tener instalado AndroidStudio para probar la app en el emulador del IDE, colocar esta linea en el archivo capacitor.config.json, para ejecutar el proyecto en AndroidStudio

```
"linuxAndroidStudioPath": "/snap/android-studio/current/android-studio/bin/studio.sh",
```

###### Si no se tiene esa línea, saltará un error

#### Ejecutar este comando cada vez que se haya cambios en el proyecto (implementación de pluggins, modificación al nombre de la app, cambios al código,etc)

```
npx cap sync

o

npx cap update
```

#### Ejecutar si solo se han hecho cambios mínimos

```
npx cap copy
```

#### Genera el build y sincroniza el proyecto en android o ios para volver a ejecutar

```
ionic build && npx cap sync
```

#### Ejecutar con AndroidStudio o XCode

```
npx cap open android
npx cap open ios
```

#### Crear un nuevo activitie

```
ionic generate page nombrePage
```

#### Extensiones de comandos auxiliares, se colocan al final de cada comando para observar en la terminal lo que se va a ejecutar

```
ionic generate page nombrePagina --dry-run
```

#### Permite crear la carpeta de modulos

```
ionic generate module nombreCarpeta
```

#### Este comando crea los modulos dentro de la carpeta de modulos

```
ionic generate component nombreCarpeta/nombreModulo
```

#### Una vez creado el modulo hay que importarlo en el app.module.ts en el apartaro de imports y hay que importarlo en cada una de las activities creadas en el nombreActivitie.module.ts

### Acto seguido en el archivo components.module.ts hay que declarar el component que acabamos de crear en el apartado de declarations y crear el apartado de exports:[] (este no viene creado por defecto) y exportamos el componente que declaramos

#### Importar en el components.module.ts, el modulo de ionic (IonicModule) para que pueda reconocer los comandos de IONIC

#### Si se quiere recibir parametros desde el HTML component, se debe importar en el nombreModulo.component.ts el Input

```
import {Input} from '@angular/core'
```

#### Hacemos uso del Imput que acabamos de importar y lo guardamos en una variable para que se reciba desde el html del componente creado

```
@Input nombreVariable:string
```
