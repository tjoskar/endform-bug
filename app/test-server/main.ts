import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()
app.post('/api/hello', (c) => c.json({a: 'hello'}))

serve(({
  fetch: app.fetch,
  port: 3001,
  hostname: '::',
}), (info) => {
  console.log(`Listening on http://localhost:${info.port}`)
})
