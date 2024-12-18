import { component$, useContext } from '@builder.io/qwik';
import { Image } from '@unpic/qwik';
import { ModalContext } from '~/stores/modal.store';

interface Taller {
  id: number;
  nombre: string;
  codigopostal: string;
  points: number;
  direccion?: string;
  rating: number;
  numResenas: number;
  especialidad: string;
  imagen?: string;
}

export const Ranking = component$(() => {
  const modalStore = useContext(ModalContext);

  const talleres: Taller[] = [
    {
      id: 1,
      nombre: "Talleres Bogado",
      codigopostal: "21007",
      points: 321,
      direccion: "Poligono Polirrosa, C. B, 144, 21007 Huelva",
      rating: 4.9,
      numResenas: 50,
      especialidad: "Multimarca",
      imagen: "/assets/images/talleres/taller1.jpeg"
    },
    {
      id: 2,
      nombre: "Huelva Wagen VGRS",
      codigopostal: "21007",
      points: 321,
      direccion: "Avd. de las veredas, 48-50, 21007 Huelva",
      rating: 4.8,
      numResenas: 45,
      especialidad: "Exclusivo VW / AUDI",
      imagen: "/assets/images/talleres/taller2.jpeg"
    },
    {
      id: 3,
      nombre: "Talleres Renault SYRSA Huelva",
      codigopostal: "21007",
      points: 321,
      direccion: "Pgno. Industrial La Paz, Naves 20-23, 21007 Huelva",
      rating: 4.7,
      numResenas: 40,
      especialidad: "Clásicos",
      imagen: "/assets/images/talleres/taller3.jpg"
    },
    {
      id: 4,
      nombre: "Taller Ejemplo 4",
      codigopostal: "21007",
      points: 321,
      direccion: "Calle 1, 21007 Huelva",
      rating: 4.6,
      numResenas: 35,
      especialidad: "SUV"
    },
    {
      id: 5,
      nombre: "Taller Ejemplo 5",
      codigopostal: "21007",
      points: 321,
      direccion: "Calle 2, 21007 Huelva",
      rating: 4.5,
      numResenas: 30,
      especialidad: "Deportivos"
    },
    {
      id: 6,
      nombre: "Taller Ejemplo 6",
      codigopostal: "21007",
      points: 321,
      direccion: "Calle 3, 21007 Huelva",
      rating: 4.4,
      numResenas: 25,
      especialidad: "Híbridos"
    }
  ];

  return (
    <div class="px-4 mx-auto w-full max-w-4xl">
      <h2 class="mb-6 text-2xl font-bold text-center text-white">Top Talleres</h2>
      <div class="space-y-4">
        {/* Top 3 Talleres */}
        {talleres.slice(0, 3).map((taller) => (
          <div key={taller.id} class="p-4 rounded-lg bg-white/20">
            <div class="flex flex-col gap-4 items-start sm:flex-row">
              <span class="text-2xl font-bold text-ranking">#{taller.id}</span>
              <div class="flex-grow">
                <h3 class="font-medium text-white">{taller.nombre}</h3>
                <p class="text-sm text-white/70 line-clamp-1">
                  {taller.direccion}
                </p>
                <div class="flex gap-2 items-center mt-1 text-white/80">
                  <span>⭐ {taller.rating}</span>
                  <span>•</span>
                  <span>{taller.numResenas} reseñas</span>
                </div>
                <div class="mt-1 text-sm text-white/70">
                  Especialidad: {taller.especialidad}
                </div>
              </div>
              {taller.imagen && (
                <div class="mt-2 w-full sm:w-1/4 sm:mt-0">
                  <button
                    onClick$={() => modalStore.isOpen.value = true}
                    class="relative w-full group"
                  >
                    <Image
                      src={taller.imagen}
                      alt={`Imagen de ${taller.nombre}`}
                      width={160}
                      height={120}
                      class="object-cover w-full h-32 rounded-lg transition-transform sm:h-full group-hover:scale-105"
                      layout="constrained"
                      loading="lazy"
                    />
                    <div class="flex absolute inset-0 justify-center items-center rounded-lg transition-colors bg-black/0 group-hover:bg-black/20">
                      <span class="text-white opacity-0 transition-opacity group-hover:opacity-100">
                        Ver detalles
                      </span>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Posiciones 4-6 */}
        {talleres.slice(3).map((taller) => (
          <div key={taller.id} class="p-3 rounded-lg bg-white/10">
            <div class="flex gap-3 items-center">
              <span class="text-xl font-bold text-gray-400">#{taller.id}</span>
              <div>
                <h3 class="font-medium text-white/80">{taller.nombre}</h3>
                <div class="flex gap-2 items-center text-white/60">
                  <span>⭐ {taller.rating}</span>
                  <span>•</span>
                  <span>{taller.numResenas} reseñas</span>
                </div>
                <div class="text-sm text-white/50">
                  Especialidad: {taller.especialidad}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
