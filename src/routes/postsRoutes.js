const express = require("express");
const router = express.Router();
const postsControllers = require("../controllers/postsControllers");

router.get("/post", postsControllers.getAllPost);
router.post("/post", postsControllers.addPost);
router.get("/post/:id", postsControllers.getPostById);
router.put("/post/:id", postsControllers.updatePost);
router.delete("/post/:id", postsControllers.deletePost);


module.exports = router;