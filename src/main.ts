import app from './app'
import { APP_PORT } from './app/app.config'
import { connection } from './app/database/mysql'

app.listen(APP_PORT, () => {
  console.log(`服务已启动!, 访问:http://localhost:${APP_PORT}`)
})
