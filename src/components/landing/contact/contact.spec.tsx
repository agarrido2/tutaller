import { createDOM } from '@builder.io/qwik/testing';
import { describe, expect, test } from 'vitest';
import { Contact } from './contact';

describe('Contact Component', () => {
  test('renders form fields correctly', async () => {
    const { screen, render } = await createDOM();
    await render(<Contact />);

    // Verificar que los campos del formulario están presentes
    expect(screen.querySelector('input[name="name"]')).toBeTruthy();
    expect(screen.querySelector('input[name="email"]')).toBeTruthy();
    expect(screen.querySelector('textarea[name="message"]')).toBeTruthy();
  });

  test('displays validation errors', async () => {
    const { screen, render, userEvent } = await createDOM();
    await render(<Contact />);

    // Intentar enviar el formulario vacío
    const submitButton = screen.querySelector('button[type="submit"]');
    await userEvent(submitButton, 'click');

    // Verificar que se muestran los mensajes de error
    expect(screen.querySelector('p.text-red-500')).toBeTruthy();
  });

  test('shows success modal on form submission', async () => {
    const { screen, render, userEvent } = await createDOM();
    await render(<Contact />);

    // Rellenar el formulario
    await userEvent(screen.querySelector('input[name="name"]'), 'type', 'Test User');
    await userEvent(screen.querySelector('input[name="email"]'), 'type', 'test@example.com');
    await userEvent(screen.querySelector('textarea[name="message"]'), 'type', 'Test message content');

    // Enviar el formulario
    const submitButton = screen.querySelector('button[type="submit"]');
    await userEvent(submitButton, 'click');

    // Verificar que se muestra el modal de éxito
    expect(screen.querySelector('.modal')).toBeTruthy();
  });
});
