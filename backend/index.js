const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
const usersPath = path.join(__dirname, "data/users.json");

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const users = JSON.parse(fs.readFileSync(usersPath, "utf-8"));
  const user = users.find((u) => {
    return u.username == username && u.password == password;
  });
  if (user) {
    res.status(200).json({
      success: true,
      message: "Login Success",
      redirect: "/dashboard",
    });
  } else {
    res.status(401).json({
      success: false,
      message: "User credential is wrong! ",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
