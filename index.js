const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/api", (req, res) => {
  res.send("api");
});

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
