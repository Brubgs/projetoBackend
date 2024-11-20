import getPosts from "../models/postsModel.js";

export async function listarPosts(req, res){ 
    // Chama a função para buscar os posts.
    const posts = await getPosts();
    // Envia os posts como resposta JSON com o status 200 (OK).
    res.status(200).json(posts); 
}
