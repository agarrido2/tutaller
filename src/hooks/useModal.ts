import { $, useSignal } from '@builder.io/qwik';
import type { PropFunction } from '@builder.io/qwik';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl';

interface UseModalOptions {
  initialState?: boolean;
  size?: ModalSize;
}

interface UseModalReturn {
  isOpen: boolean;
  size: ModalSize;
  showModal: PropFunction<() => void>;
  hideModal: PropFunction<() => void>;
  toggleModal: PropFunction<() => void>;
  onClose$: PropFunction<() => void>;
  setSize: PropFunction<(size: ModalSize) => void>;
}

export const useModal = (options: UseModalOptions = {}): UseModalReturn => {
  const { initialState = false, size: initialSize = 'md' } = options;
  const isOpenSignal = useSignal(initialState);
  const sizeSignal = useSignal<ModalSize>(initialSize);

  return {
    isOpen: isOpenSignal.value,
    size: sizeSignal.value,
    showModal: $(() => {
      isOpenSignal.value = true;
    }),
    hideModal: $(() => {
      isOpenSignal.value = false;
    }),
    toggleModal: $(() => {
      isOpenSignal.value = !isOpenSignal.value;
    }),
    onClose$: $(() => {
      isOpenSignal.value = false;
    }),
    setSize: $((newSize: ModalSize) => {
      sizeSignal.value = newSize;
    }),
  };
};
