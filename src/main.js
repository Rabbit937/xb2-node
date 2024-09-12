const express = require('express')
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (request, response) => {
    response.send('你好!')
})

const jsonData = [
    {
        "id": 1,
        "name": "张三",
        "age": 18,
        "gender": "男",
        "address": "北京市海淀区"
    },
    {
        "id": 2,
        "name": "李四",
        "age": 20,
        "gender": "女",
        "address": "上海市浦东新区"
    },
    {
        "id": 3,
        "name": "王五",
        "age": 22,
        "gender": "男",
        "address": "广州市天河区"
    },
]

app.get('/posts', (request, response) => {
    response.send(jsonData)
})

app.get('/posts/:postId', (request, response) => {
    const { postId } = request.params;
    const post = jsonData.filter(item => item.id === Number(postId));
    response.send(post[0])
})

/**
 * 创建内容
 */
app.post('/posts', (request, response) => {
    const { content } = request.body; 
    response.status(201);
    response.send({
        message : `成功创建了内容: ${content}`,
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})