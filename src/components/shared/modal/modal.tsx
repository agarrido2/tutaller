import { component$, useOnDocument, $, type PropFunction, Slot } from '@builder.io/qwik';
import type { ModalSize } from '~/hooks/useModal';

interface ModalProps {
  isOpen: boolean;
  onClose$: PropFunction<() => void>;
  size?: ModalSize;
}

export const Modal = component$<ModalProps>(({ isOpen, onClose$, size = 'md' }) => {
  useOnDocument(
    'keydown',
    $((event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose$();
      }
    })
  );

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'w-modal-sm max-w-modal-sm',
    md: 'w-modal-md max-w-modal-md',
    lg: 'w-modal-lg max-w-modal-lg',
    xl: 'w-modal-xl max-w-modal-xl',
  };

  return (
    <div 
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50"
      style={{ position: 'fixed', isolation: 'isolate' }}
      onClick$={(e) => {
        if (e.target === e.currentTarget) onClose$();
      }}
    >
      <div class={`${sizeClasses[size]} rounded-xl bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-2xl overflow-auto`}>
        <Slot />
      </div>
    </div>
  );
});
