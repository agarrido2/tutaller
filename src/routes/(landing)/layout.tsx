import { component$, Slot } from '@builder.io/qwik';
import { Navbar } from '~/components/landing/navbar/navbar';


export default component$(() => {
  return (
    <>
      <Navbar />
      <main>
        <Slot />
      </main>
    </>
  );
});
