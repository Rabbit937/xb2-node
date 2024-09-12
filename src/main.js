const express = require('express')
const app = express();
const PORT = 3000;

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


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})