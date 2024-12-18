import { component$ } from '@builder.io/qwik';
import { Image } from '@unpic/qwik';
import { Tabs } from '../tabs/tabs';

export const ProjectManagement = component$(() => {
  const tabs = [
    { id: 'marketing', label: 'Marketing y creatividad' },
    { id: 'servicios', label: 'Servicios profesionales' },
    { id: 'operaciones', label: 'Las operaciones' },
  ];

  const features = [
    {
      title: 'Visualiza el progreso',
      description: 'con los diagramas de Gantt, las tablas Kanban, los calendarios, las tablas, los gráficos o los informes'
    },
    {
      title: 'Reduce los riesgos y obstáculos',
      description: 'con recomendaciones inteligentes de IA'
    },
    {
      title: 'Estandariza los procesos',
      description: 'con automatización, blueprints y flujos de trabajo personalizables'
    }
  ];

  const workflowStates = [
    { name: 'New', color: 'bg-gray-200' },
    { name: 'Waiting', color: 'bg-orange-200' },
    { name: 'In Progress', color: 'bg-cyan-400' },
    { name: 'In Review', color: 'bg-purple-800' },
    { name: 'Completed', color: 'bg-emerald-400' }
  ];

  const integrations = [
    { name: 'Salesforce', logo: '/assets/images/logos/salesforce-logo.svg' },
    { name: 'Google Drive', logo: '/assets/images/logos/google-drive-logo.svg' },
    { name: 'SAP', logo: '/assets/images/logos/sap-logo.svg' },
  ];

  return (
    <section class="py-20 bg-background overflow-hidden">
      <div class="container mx-auto px-4">
        <Tabs tabs={tabs}>
          {/* Marketing Tab */}
          <div q:slot="marketing">
            <div class="flex flex-col lg:flex-row items-center gap-16">
              {/* Texto */}
              <div class="lg:w-1/2">
                <span class="text-sm font-semibold text-accent uppercase tracking-wider">
                  ACTUALIZACIONES INSTANTÁNEAS
                </span>
                <h2 class="mt-4 text-4xl font-bold text-gray-900">
                  Departamento de Gestión de Proyectos
                </h2>
                <p class="mt-4 text-lg text-gray-600">
                  Wrike equipa a los gestores de proyectos de cualquier tipo con todo lo que necesitan para
                  armonizar las estrategias y los objetivos y resultados clave (OKR) con la ejecución de los
                  proyectos y programas.
                </p>

                <div class="mt-8 space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} class="flex items-start">
                      <div class="flex-shrink-0">
                        <div class="flex items-center justify-center h-6 w-6 rounded-md bg-accent/10">
                          <svg class="h-4 w-4 text-accent" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                          </svg>
                        </div>
                      </div>
                      <div class="ml-4">
                        <h3 class="text-lg font-medium text-gray-900">{feature.title}</h3>
                        <p class="mt-1 text-gray-500">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Imagen y elementos decorativos */}
              <div class="lg:w-1/2 relative">
                {/* Tarjeta de Project Workflow */}
                <div class="absolute top-0 left-0 bg-white rounded-xl shadow-lg p-4 z-10">
                  <h4 class="text-sm font-medium mb-3">Project Workflow</h4>
                  <div class="space-y-2">
                    {workflowStates.map((state, index) => (
                      <div key={index} class="flex items-center gap-2">
                        <div class={`w-3 h-3 rounded ${state.color}`}></div>
                        <span class="text-sm text-gray-600">{state.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Logos de integración */}
                {integrations.map((integration, index) => (
                  <div
                    key={index}
                    class="absolute bg-white rounded-full p-2 shadow-lg"
                    style={{
                      top: `${20 + index * 25}%`,
                      right: `${10 + index * 5}%`,
                      transform: 'translate(50%, -50%)',
                      zIndex: 20
                    }}
                  >
                    <Image
                      src={integration.logo}
                      alt={integration.name}
                      width={32}
                      height={32}
                      layout="fixed"
                      class="w-8 h-8"
                    />
                  </div>
                ))}

                {/* Imagen principal */}
                <div class="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/assets/images/sections/project-management.webp"
                    alt="Project Management Interface"
                    width={800}
                    height={600}
                    layout="fullWidth"
                    class="w-full h-full object-cover"
                  />
                </div>

                {/* Trazo decorativo */}
                <div class="absolute -bottom-4 -right-4 w-64 h-64">
                  <svg
                    viewBox="0 0 200 200"
                    class="w-full h-full text-accent/20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M45,-78.1C58.3,-71.2,69.1,-58.4,77.8,-43.7C86.5,-29,93.2,-12.4,89.8,2.5C86.4,17.4,73,30.6,61.5,42.7C50,54.8,40.4,65.8,27.8,72.5C15.2,79.2,-0.4,81.6,-16.2,78.7C-32,75.8,-47.9,67.7,-58.8,55.3C-69.7,42.9,-75.5,26.2,-77.7,9.2C-79.9,-7.8,-78.5,-25.1,-71.7,-39.9C-64.9,-54.7,-52.7,-67,-38.7,-74.8C-24.7,-82.5,-8.9,-85.7,4.3,-83.1C17.5,-80.5,31.7,-72.1,45,-78.1Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Servicios Tab */}
          <div q:slot="servicios">
            <div class="flex flex-col lg:flex-row items-center gap-16">
              <div class="lg:w-1/2">
                <span class="text-sm font-semibold text-accent uppercase tracking-wider">
                  SERVICIOS PROFESIONALES
                </span>
                <h2 class="mt-4 text-4xl font-bold text-gray-900">
                  Servicios de Posventa
                </h2>
                <p class="mt-4 text-lg text-gray-600">
                  Gestiona eficientemente los servicios posventa con herramientas especializadas para el seguimiento
                  de tickets, mantenimiento preventivo y satisfacción del cliente.
                </p>

                <div class="mt-8 space-y-6">
                  <div class="flex items-start">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center h-6 w-6 rounded-md bg-accent/10">
                        <svg class="h-4 w-4 text-accent" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-medium text-gray-900">Sistema de tickets integrado</h3>
                      <p class="mt-1 text-gray-500">Seguimiento en tiempo real de todas las incidencias</p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center h-6 w-6 rounded-md bg-accent/10">
                        <svg class="h-4 w-4 text-accent" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-medium text-gray-900">Mantenimiento preventivo</h3>
                      <p class="mt-1 text-gray-500">Programación automática de mantenimientos</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Imagen y elementos decorativos */}
              <div class="lg:w-1/2 relative">
                <div class="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/assets/images/sections/service-management.webp"
                    alt="Service Management Interface"
                    width={800}
                    height={600}
                    layout="fullWidth"
                    class="w-full h-full object-cover"
                  />
                </div>

                {/* Elementos decorativos similares */}
                <div class="absolute -bottom-4 -right-4 w-64 h-64">
                  <svg
                    viewBox="0 0 200 200"
                    class="w-full h-full text-accent/20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M45,-78.1C58.3,-71.2,69.1,-58.4,77.8,-43.7C86.5,-29,93.2,-12.4,89.8,2.5C86.4,17.4,73,30.6,61.5,42.7C50,54.8,40.4,65.8,27.8,72.5C15.2,79.2,-0.4,81.6,-16.2,78.7C-32,75.8,-47.9,67.7,-58.8,55.3C-69.7,42.9,-75.5,26.2,-77.7,9.2C-79.9,-7.8,-78.5,-25.1,-71.7,-39.9C-64.9,-54.7,-52.7,-67,-38.7,-74.8C-24.7,-82.5,-8.9,-85.7,4.3,-83.1C17.5,-80.5,31.7,-72.1,45,-78.1Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Operaciones Tab */}
          <div q:slot="operaciones">
            <div class="flex flex-col lg:flex-row items-center gap-16">
              <div class="lg:w-1/2">
                <span class="text-sm font-semibold text-accent uppercase tracking-wider">
                  OPERACIONES
                </span>
                <h2 class="mt-4 text-4xl font-bold text-gray-900">
                  Operaciones de vehículos
                </h2>
                <p class="mt-4 text-lg text-gray-600">
                  Optimiza la gestión de tu flota de vehículos con herramientas avanzadas de seguimiento,
                  mantenimiento y análisis de rendimiento en tiempo real.
                </p>

                <div class="mt-8 space-y-6">
                  <div class="flex items-start">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center h-6 w-6 rounded-md bg-accent/10">
                        <svg class="h-4 w-4 text-accent" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-medium text-gray-900">Seguimiento GPS</h3>
                      <p class="mt-1 text-gray-500">Monitoreo en tiempo real de toda la flota</p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center h-6 w-6 rounded-md bg-accent/10">
                        <svg class="h-4 w-4 text-accent" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-medium text-gray-900">Control de consumo</h3>
                      <p class="mt-1 text-gray-500">Optimización de combustible y eficiencia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Imagen y elementos decorativos */}
              <div class="lg:w-1/2 relative">
                <div class="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/assets/images/sections/fleet-management.webp"
                    alt="Fleet Management Interface"
                    width={800}
                    height={600}
                    layout="fullWidth"
                    class="w-full h-full object-cover"
                  />
                </div>

                {/* Elementos decorativos similares */}
                <div class="absolute -bottom-4 -right-4 w-64 h-64">
                  <svg
                    viewBox="0 0 200 200"
                    class="w-full h-full text-accent/20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M45,-78.1C58.3,-71.2,69.1,-58.4,77.8,-43.7C86.5,-29,93.2,-12.4,89.8,2.5C86.4,17.4,73,30.6,61.5,42.7C50,54.8,40.4,65.8,27.8,72.5C15.2,79.2,-0.4,81.6,-16.2,78.7C-32,75.8,-47.9,67.7,-58.8,55.3C-69.7,42.9,-75.5,26.2,-77.7,9.2C-79.9,-7.8,-78.5,-25.1,-71.7,-39.9C-64.9,-54.7,-52.7,-67,-38.7,-74.8C-24.7,-82.5,-8.9,-85.7,4.3,-83.1C17.5,-80.5,31.7,-72.1,45,-78.1Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
});
