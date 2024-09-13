import app from './app'
import { APP_PORT } from './app/app.config'

app.listen(APP_PORT, () => {
  console.log(`服务已启动!, 访问:http://localhost:${APP_PORT}`)
})