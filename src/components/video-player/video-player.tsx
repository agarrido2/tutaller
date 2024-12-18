import { component$, useSignal, $, useVisibleTask$ } from '@builder.io/qwik';
import { Image } from '@unpic/qwik';

interface VideoPlayerProps {
  videoUrl: string;
  thumbnailSrc: string;
}

export const VideoPlayer = component$<VideoPlayerProps>(({ thumbnailSrc, videoUrl }) => {
  const isPlaying = useSignal(false);
  const videoRef = useSignal<HTMLVideoElement>();

  // Cleanup cuando el componente se desmonta
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    cleanup(() => {
      if (videoRef.value) {
        videoRef.value.pause();
        videoRef.value.src = '';
        videoRef.value.load();
      }
    });
  });

  const toggleVideo = $(() => {
    if (!videoRef.value) return;

    if (isPlaying.value) {
      videoRef.value.pause();
    } else {
      // Intentar reproducir y manejar posibles errores
      videoRef.value.play().catch((error) => {
        console.error('Error playing video:', error);
        isPlaying.value = false;
      });
    }
    isPlaying.value = !isPlaying.value;
  });

  return (
    <div class="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] hover:shadow-3xl group">
      <div class="absolute inset-0 z-10 bg-gradient-to-t to-transparent from-black/20"></div>

      {/* Thumbnail Image */}
      <div class="absolute inset-0">
        {!isPlaying.value && (
          <div
            class="flex absolute inset-0 justify-center items-center cursor-pointer"
            onClick$={() => {
              isPlaying.value = true;
            }}
          >
            <Image
              src={thumbnailSrc}
              alt="Video thumbnail"
              width={1280}
              height={720}
              loading="eager"
              layout="fullWidth"
              background="auto"
              class="object-cover absolute inset-0 w-full h-full"
            />
            <div class="flex absolute inset-0 justify-center items-center bg-black bg-opacity-40">
              <div class="flex justify-center items-center w-20 h-20 bg-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-8 h-8 text-accent"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Video Element */}
      <video
        ref={videoRef}
        class={`absolute inset-0 object-cover w-full h-full transition-opacity duration-300 ${isPlaying.value ? 'opacity-100' : 'opacity-0'}`}
        preload="metadata"
        muted loop autoplay
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause Button */}
      <button
        onClick$={toggleVideo}
        class={`absolute top-1/2 left-1/2 z-20 p-6 text-white rounded-2xl border backdrop-blur transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 group-hover:scale-105 border-white/20 ${isPlaying.value ? 'opacity-0 group-hover:opacity-100' : ''
          }`}
        aria-label={isPlaying.value ? 'Pause video' : 'Play video'}
      >
        <div class="relative w-16 h-16">
          {!isPlaying.value && (
            <>
              {/* Círculo exterior animado */}
              <div class="absolute inset-0 rounded-full border-2 animate-ping border-white/30"></div>
              {/* Círculo interior */}
              <div class="absolute inset-0 rounded-full border-2 border-white"></div>
              {/* Triángulo de play */}
              <div class="flex absolute inset-0 justify-center items-center">
                <div class="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1"></div>
              </div>
            </>
          )}
          {isPlaying.value && (
            <div class="flex absolute inset-0 justify-center items-center">
              <div class="flex gap-2">
                <div class="w-3 h-12 bg-white rounded-sm"></div>
                <div class="w-3 h-12 bg-white rounded-sm"></div>
              </div>
            </div>
          )}
        </div>
      </button>
    </div>
  );
});
