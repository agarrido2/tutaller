import { routeAction$, z, zod$ } from '@builder.io/qwik-city';

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

export const useContactAction = routeAction$(
  async (data) => {
    // Aquí iría la lógica para enviar el email
    // Por ahora solo simulamos un delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      success: true,
      message: '¡Mensaje enviado correctamente!',
    };
  },
  zod$(contactSchema)
);
