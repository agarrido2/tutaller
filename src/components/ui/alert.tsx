import { component$ } from '@builder.io/qwik';

export type AlertType = 'error' | 'success';

export interface AlertProps {
  type: AlertType;
  message: string;
  class?: string;
}

export const Alert = component$<AlertProps>(({ type, message, class: className }) => {
  const icons = {
    error: (
      <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clip-rule="evenodd"
        />
      </svg>
    ),
    success: (
      <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        />
      </svg>
    ),
  };

  const styles = {
    error: {
      bg: 'bg-red-50',
      text: 'text-red-800',
      icon: 'text-red-400',
    },
    success: {
      bg: 'bg-green-50',
      text: 'text-green-800',
      icon: 'text-green-400',
    },
  };

  return (
    <div class={`rounded-md ${styles[type].bg} p-4 ${className || ''}`}>
      <div class="flex">
        <div class="flex-shrink-0">{icons[type]}</div>
        <div class="ml-3">
          <p class={`text-sm font-medium ${styles[type].text}`}>{message}</p>
        </div>
      </div>
    </div>
  );
});
