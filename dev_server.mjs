import { dev } from 'astro';

console.log('Starting Astro dev server...');
try {
  await dev({
    server: {
      host: '0.0.0.0',
      port: 4321
    }
  });
  console.log('Astro dev server is ready at http://localhost:4321/');
} catch (err) {
  console.error('Dev server error:', err);
}
