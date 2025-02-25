require("dotenv").config();
const express = require("express");
const cors = require("cors");
const usersRoutes = require("./src/routes/usersRoutes");
const postsRoutes = require("./src/routes/postsRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", usersRoutes);
app.use("/api", postsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`✨ Servidor rodando em http://localhost:${PORT}`);
});
