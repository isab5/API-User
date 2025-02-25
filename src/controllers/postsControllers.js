const Post = require("../models/Post");
const PostList = require("../models/PostList");
const { addUser, updateUser } = require("./usersControllers");

const lista = new PostList;

lista.addPost(new Post("souzabweatriz_", "https://images.tcdn.com.br/img/img_prod/770361/kit_com_4_xicaras_e_4_pires_rosa_confie_no_tempo_para_cafe_75ml_1007_1_7fa4359718364ba1d937233e86d5f4b7.jpg", "Ai gente, eu amo café", 1000000));
lista.addPost(new Post("krasny_", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvgOnsdcTLwvYUEYakS8fEpjKhpoOup-Ht5w&s", "Por do sol com ela <3", 5));

const router = {
    getAllPost: (req, res) => {
        res.json(lista.getAllPosts())
    },
    getPostById: (req, res) => {
        try {
            res.json(lista.getPostById(req.params.id));
        } catch (error) {
            res.status(404).json({ message: "Post not found"})
        }
    },
    addPost: (req, res) => {
        try {
            const { user, url, description, likes } = req.body;
            if (!user || !url === undefined) {
            throw new Error("Todos os campos são obrigatórios");
            }
            const newPost = new Post(user, url, description, likes);
            lista.addPost(newPost);
            res.status(201).json(newPost);
        } catch (error) {
            res.status(400).json({ message: error.message, error });
        }
    },
    updatePost: (req, res) => {
        try {
            res.json(lista.updatePost(req.params.id, req.body));
            } catch (error) {
            res.status(404).json({ message: "Erro ao atualizar o usuário", error });
            }
    },
    deletePost: (req, res) => {
        lista.deletePost(req.params.id);
        res.status(200).json({ message: "Post deletado com sucesso", IdDeletado: req.params.id});
    }
}

module.exports = router;