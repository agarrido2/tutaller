# tutaller Proyecto
Estas son las reglas de estilo para el proyecto 'tutaller'. Estas reglas son un ejemplo de buenas prácticas de desarrollo en Qwik.

## Descripción General
El proyecto 'tutaller' es una plataforma SaaS que conecta usuarios con talleres mecánicos los cuales están registrados en la plataforma. 
Estos talleres estan rankeados por la valoración de clientes y de otros parametros de la aplicación.
Los usuarios podrán elegir el taller por cercania, por valoración, por recomendación, por reputación, etc. 
Una vez se ha registrado el usuario, este prodrá realizar una reserva de taller, y el taller anota la cita.

---

## Características de la Aplicación

### Funcionalidades Principales

1. **Landing Page:** Página de inicio pública optimizada para SEO.
2. **Dashboard:** Área privada para usuarios registrados y autenticados con un sistema de roles:
   - **Admin:** Acceso a todas las secciones del dashboard.
   - **Mechanic:** Acceso exclusivo a la sección de mecánicos.
   - **Customer:** Acceso exclusivo a la sección de clientes.

### Roles en la Aplicación

- **Admin:** Control total del sistema.
- **Mechanic:** Acceso a herramientas específicas para mecánicos.
- **Customer:** Acceso a servicios para clientes.

### Flujos de Usuario

1. **Usuarios No Autenticados:**
   - Acceso a la Landing Page.
   - Navegación por servicios públicos.
   - Registro y autenticación.

2. **Usuarios Autenticados:**
   - Acceso al dashboard según su rol.
   - Gestión de reservas, consultas y valoraciones.

---

## Características Técnicas

### Requisitos de Software

- **Framework:** Qwik y QwikCity ([Documentación Oficial](https://qwik.dev/docs)).
- **Build Tool:** Vite ([https://vitejs.dev](https://vitejs.dev)).
- **Runtime:** Node.js ([https://nodejs.org](https://nodejs.org)).
- **Base de Datos:** PostgreSQL hospedado en Railway ([https://railway.app/](https://railway.app/)).
- **ORM:** Prisma ([Documentación Oficial](https://qwik.dev/docs/integrations/prisma/)).
- **Autenticación:** Auth.js ([Documentación Oficial](https://qwik.dev/docs/integrations/authjs/)).
- **Estilos:** TailwindCSS ([Documentación Oficial](https://qwik.dev/docs/integrations/tailwind/)).
- **Librerías Complementarias:** `@unpik/qwik` para optimización de imágenes.

---

## Estructura de Ficheros

La estructura del proyecto se organiza en carpetas claras y descriptivas:

```
/project-root
├── public/                 # Archivos estáticos como imágenes, íconos, fuentes, etc.
├── src/                    # Código fuente principal de la aplicación
│   ├── components/         # Componentes reutilizables de la aplicación
│   ├── routes/             # Definición de las rutas de la aplicación
│   ├── context/            # Manejo de estados globales
│   ├── styles/             # Estilos globales y configuraciones de TailwindCSS
│   ├── hooks/              # Hooks personalizados
│   ├── utils/              # Utilidades y funciones auxiliares
│   └── app/                # Configuración principal de QwikCity
├── prisma/                 # Archivos relacionados con Prisma
```
Esta estructura es un ejemplo simple. Tienes que adaptarla a tus necesidades y la complejidad del proyecto.
---

## Buenas Prácticas de Desarrollo en Qwik

Sigue estas buenas prácticas para garantizar rendimiento, legibilidad y escalabilidad, basadas en la [documentación oficial de Qwik](https://qwik.dev/docs/guides/best-practices/).

### 1. **Renderizado Progresivo y Carga Bajo Demanda**
   - **Uso de `routeLoader$`:** Maneja la carga asincrónica de datos en rutas, manteniendo el rendimiento alto.
   - **Lazy Loading:** Utiliza `lazy()` para cargar módulos solo cuando sean necesarios.
   - **SSR (Server-Side Rendering):** Asegúrate de habilitar el SSR en todas las rutas críticas para mejorar el SEO y el tiempo de carga inicial.

### 2. **Estado Global y Local**
   - **Global:** Usa `useContext` para gestionar el estado global en la aplicación, evitando cambios innecesarios y manteniendo la coherencia entre componentes.
   - **Local:** Emplea `useSignal` para manejar estados reactivos de valores individuales y `useStore` para estructuras de datos más complejas.

### 3. **Componentización**
   - Diseña componentes reutilizables, pequeños y bien definidos.
   - Separa lógica de presentación y lógica de datos en hooks o servicios.

### 4. **Optimización de Imágenes**
   - Usa `@unpik/qwik` para reducir el tamaño y mejorar la velocidad de carga de las imágenes.
   - Implementa el atributo `loading="lazy"` para diferir la carga de imágenes fuera de pantalla.

### 5. **SEO Dinámico**
   Configura un `DocumentHead` único y optimizado para cada ruta. Este ejemplo cubre los metadatos esenciales para Google y redes sociales:
   ```typescript
   export const head: DocumentHead = {
     title: 'tutaller - Encuentra Talleres Mecánicos Cercanos',
     meta: [
       {
         name: 'description',
         content: 'Encuentra los mejores talleres mecánicos cerca de ti con tutaller. Servicios de alta calidad y valoraciones reales de clientes.',
       },
       {
         name: 'keywords',
         content: 'taller mecánico, reparación de autos, servicio automotriz, mecánico cercano, valoraciones, confianza',
       },
       {
         name: 'author',
         content: 'tutaller Team',
       },
       {
         name: 'robots',
         content: 'index, follow',
       },
       {
         name: 'viewport',
         content: 'width=device-width, initial-scale=1.0',
       },
       {
         property: 'og:title',
         content: 'tutaller - Encuentra Talleres Mecánicos Cercanos',
       },
       {
         property: 'og:description',
         content: 'Encuentra talleres mecánicos cerca de ti, con valoraciones reales de clientes y servicios de alta calidad.',
       },
       {
         property: 'og:type',
         content: 'website',
       },
       {
         property: 'og:url',
         content: 'https://www.tutaller.com',
       },
       {
         property: 'og:image',
         content: 'https://www.tutaller.com/assets/og-image.jpg',
       },
       {
         name: 'twitter:card',
         content: 'summary_large_image',
       },
       {
         name: 'twitter:title',
         content: 'tutaller - Encuentra Talleres Mecánicos Cercanos',
       },
       {
         name: 'twitter:description',
         content: 'Encuentra talleres mecánicos cerca de ti, con valoraciones reales de clientes y servicios de alta calidad.',
       },
       {
         name: 'twitter:image',
         content: 'https://www.tutaller.com/assets/twitter-image.jpg',
       },
     ],
   };
   ```  

## 6. Minimización de Re-renderizados
- Evita cambios reactivos innecesarios utilizando estados locales (`useSignal`) cuando sea posible.
- No pases funciones inline como props, ya que generan nuevas referencias en cada renderizado.

## 7. Optimización del Código
- **División del Bundle:** Usa `lazy()` para dividir el código en pequeños fragmentos y cargar únicamente lo necesario.
- Reduce dependencias externas innecesarias para minimizar el tamaño del bundle.

## 8. Accesibilidad
- Usa etiquetas ARIA para mejorar la experiencia de usuarios con tecnologías de asistencia.
- Asegúrate de que las imágenes tengan descripciones en `alt`.

## 9. Escritura Declarativa
- Prioriza patrones declarativos para evitar mutaciones directas del DOM o el estado.
- Usa la reactividad natural de Qwik para mantener sincronizados los datos y la interfaz de usuario.

---

## Git

1. **Prefijos de Commit:**
   - `fix`: Corrección de errores.
   - `feat`: Nueva funcionalidad.
   - `docs`: Cambios en la documentación.
   - `style`: Cambios en el estilo del código (sin afectar la lógica).
   - `refactor`: Reestructuración del código sin añadir funcionalidades.
   - `test`: Añadir o corregir pruebas.
   - `chore`: Cambios en herramientas auxiliares.

2. **Reglas de Mensajes:**
   - Usa mensajes claros y en minúsculas.
   - La línea resumen debe ser concisa y referenciar issues cuando aplique.

---
