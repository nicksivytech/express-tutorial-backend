const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Simple route so we can see something when we visit the live URL
app.get('/', (req, res) => {
  res.send('Express Backend Tutorial is Live and Working!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});