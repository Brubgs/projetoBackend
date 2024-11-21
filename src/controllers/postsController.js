import {getPosts, criarPost} from "../models/postsModel.js";

//pegar posts
export async function listarPosts(req, res){ 
    const posts = await getPosts();
    res.status(200).json(posts); // Envia os posts como resposta JSON com o status 200 (OK).
}

//criar novo post
export async function postarPost(req, res){
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({"Erro": "Falha na requisição"});
    }
}

export async function uploadImagem(req, res){
    const novoPost = {
        descricao: "",
        imagemUrl: req.file.originalname,
        alt: ""
    };
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({"Erro": "Falha na requisição"});
    }
}