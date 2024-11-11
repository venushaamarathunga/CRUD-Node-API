const express = require("express");
const app = express();

const PORT = 3300;
app.listen(PORT, () => {
  console.log(`Server is runnig on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hi Venusha, running the server!!!");
});
