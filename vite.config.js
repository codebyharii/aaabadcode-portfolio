import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Runs api/contact.js in `vite dev` so the form works locally like on Vercel.
const devApi = (env) => ({
  name: 'dev-api',
  configureServer(server) {
    server.middlewares.use('/api/contact', async (req, res) => {
      Object.assign(process.env, env)
      const chunks = []
      for await (const chunk of req) chunks.push(chunk)
      req.body = Buffer.concat(chunks).toString()
      res.status = (code) => {
        res.statusCode = code
        return res
      }
      res.json = (data) => {
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(data))
      }
      const { default: handler } = await server.ssrLoadModule('/api/contact.js')
      await handler(req, res)
    })
  },
})

export default defineConfig(({ mode }) => ({
  plugins: [react(), devApi(loadEnv(mode, process.cwd(), ''))],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion']
        }
      }
    }
  }
}))
