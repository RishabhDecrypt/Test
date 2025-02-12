const express=require('express')
const app=express()
const PORT = 5000;
app.get('/hello', (req, res) => {
    res.send('Hello World');
  });
  app.get('/', (req, res) => {
    res.send('Connected');
  });
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
