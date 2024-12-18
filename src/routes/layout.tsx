import { component$, Slot, useSignal, useContextProvider } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Footer } from "~/components/landing/footer/footer";
import { ScrollToTop } from "~/components/landing/scroll-to-top/scroll-to-top";
import { Modal } from "~/components/shared/modal/modal";
import { ModalContext } from "~/stores/modal.store";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export default component$(() => {
  const isModalOpen = useSignal(false);

  useContextProvider(ModalContext, {
    isOpen: isModalOpen
  });

  return (
    <>
      <main>
        <Slot />
      </main>
      <Footer />
      <ScrollToTop />
      <div id="modal-root">
        <Modal 
          isOpen={isModalOpen.value} 
          onClose$={() => isModalOpen.value = false}
        />
      </div>
    </>
  );
});
