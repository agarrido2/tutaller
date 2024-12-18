import { createContextId } from '@builder.io/qwik';
import type { Signal } from '@builder.io/qwik';

export interface ModalStore {
  isOpen: Signal<boolean>;
}

export const ModalContext = createContextId<ModalStore>('modal-context');
