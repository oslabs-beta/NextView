import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';

/*
 * Use this if we want to HMR the server, but lose global error handling/global 404
 * The Express app plugin. Specify the URL base path
 * for the app and the Express app object.
 */
// import server from './server/server'
// const expressServerPlugin = (path: string, expressApp) => ({
//   name: 'configure-server',
//   configureServer(server) {
//     return () => {
//     server.middlewares.use(path, expressApp);
//   }
//   }
// });

/*
 * Vite configuration
 */
export default defineConfig({
  server: {
    proxy: {
      '/user': 'http://localhost:3000',
      '/apps': 'http://localhost:3000',
      '/api': 'http://localhost:3000',
    },
  },
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    // expressServerPlugin('/', server)
  ],
});
