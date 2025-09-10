const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World! This is a CI/CD demo with Docker111111111fsdfsdfsdfsdf.');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});