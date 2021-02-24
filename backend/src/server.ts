import express from 'express';

const app =express();

app.post('/ets', (request, response) => {
    
    console.log(request.query)
    console.log(request.query)
    return response.json("hello world")
})

app.listen(3333);