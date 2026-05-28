# Urban Drive

## Descripción de la aplicación

Urban Drive es una aplicación web pensada para la gestión de alquiler y compraventa de coches, especialmente vehículos deportivos, clásicos y modelos con estética cuidada.

La idea principal de la aplicación es que un usuario pueda consultar los coches disponibles, ver información básica de cada vehículo y realizar una solicitud de reserva o contacto. Además, se plantea un panel de administración desde el que se puedan gestionar los coches publicados, las reservas y los usuarios.

El proyecto está diseñado como una Web-App sencilla, pero teniendo en cuenta desde el inicio aspectos de seguridad, SSDLC y DevSecOps.

## Miembros del grupo

* Pablo Hidalgo López

## Cómo ejecutar la aplicación

Esta versión funciona como un prototipo web estático.

Pasos para ejecutarla:

1. Descargar o descomprimir el proyecto.
2. Entrar en la carpeta `src`.
3. Abrir el archivo `index.html` con cualquier navegador web.

## Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript
* GitHub
* GitHub Actions

## Consideraciones de seguridad

Durante el diseño de la aplicación se han tenido en cuenta varias medidas de seguridad:

* Validación de datos introducidos por el usuario.
* Control de acceso para diferenciar usuarios normales y administradores.
* Protección de contraseñas mediante hash en una futura versión con backend.
* Uso de HTTPS en despliegue real.
* Revisión de dependencias y código antes de publicar cambios.
* Separación de funciones entre la parte visual de la web, la lógica de la aplicación y los datos almacenados.
* Registro de errores y monitorización de actividad sospechosa.

## Aplicación del S-SDLC

El desarrollo seguro de Urban Drive se plantea siguiendo las fases del S-SDLC:

### 1. Requisitos

En esta fase se definen las funcionalidades principales de la aplicación y también los requisitos de seguridad. Por ejemplo, se establece que el sistema debe validar entradas, proteger los datos de los usuarios y controlar el acceso al panel de administración.

### 2. Diseño

Durante el diseño se plantea la arquitectura general de la aplicación. Se diferencian los usuarios normales de los administradores y se identifican posibles riesgos, como accesos no autorizados, inyección de código o manipulación de reservas.

### 3. Desarrollo

En la fase de desarrollo se aplican buenas prácticas de programación segura. Por ejemplo, no confiar directamente en los datos introducidos por el usuario, evitar mostrar errores internos y mantener el código organizado.

### 4. Pruebas

Antes de publicar la aplicación se realizarían pruebas funcionales y de seguridad. Algunas pruebas serían la validación de formularios, revisión de permisos y comprobación de posibles vulnerabilidades como XSS o inyección SQL en caso de añadir base de datos.

### 5. Despliegue

En el despliegue se utilizaría HTTPS, variables de entorno para datos sensibles y una configuración segura del servidor.

### 6. Mantenimiento

Una vez publicada la aplicación, sería necesario mantenerla actualizada, revisar dependencias, corregir vulnerabilidades y monitorizar posibles comportamientos sospechosos.

## Aplicación de DevSecOps

DevSecOps consiste en integrar la seguridad durante todo el ciclo de desarrollo, no solo al final del proyecto.

En Urban Drive se aplicaría mediante un flujo de trabajo basado en GitHub:

1. El desarrollador sube cambios al repositorio.
2. GitHub Actions ejecuta comprobaciones automáticas.
3. Se revisa el código antes de integrarlo en la rama principal.
4. Se analizan dependencias y posibles vulnerabilidades.
5. Si todo es correcto, se permite el despliegue.
6. Tras el despliegue, se monitoriza el funcionamiento de la aplicación.

De esta forma, la seguridad forma parte del proceso normal de desarrollo y no se deja como una revisión final.

## Diagrama S-SDLC + DevSecOps

```text
Requisitos seguros
        ↓
Diseño seguro
        ↓
Desarrollo seguro
        ↓
Pruebas de seguridad
        ↓
Despliegue seguro
        ↓
Monitorización y mantenimiento
        ↺
```

Este ciclo permite revisar y mejorar continuamente la seguridad de la aplicación.
