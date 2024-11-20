import express from "express"; // Importa o módulo Express para criar o servidor web.

import conectarAoBanco from "./src/config/dbConfig.js"; // Importa a função para conectar ao banco de dados.

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); // Conecta ao banco de dados usando a string de conexão do ambiente.

const app = express(); // Cria uma instância do servidor Express.
app.use(express.json()); // Habilita o middleware para analisar o corpo das requisições JSON.

app.listen(3000, () => { // Inicia o servidor na porta 3000.
    console.log("Servidor escutando!"); // Imprime uma mensagem no console indicando que o servidor está ativo.
});

async function getPosts() { // Função assíncrona para buscar os posts do banco de dados.
    const db = conexao.db("imersaoAlura"); // Seleciona o banco de dados "imersaoAlura".
    const colecao = db.collection("posts"); // Seleciona a coleção "posts" dentro do banco de dados.
    return colecao.find().toArray(); // Busca todos os documentos da coleção e retorna um array.
}

app.get("/posts", async (req, res) => { // Define uma rota GET para "/posts".
    const posts = await getPosts(); // Chama a função para buscar os posts.
    res.status(200).json(posts); // Envia os posts como resposta JSON com o status 200 (OK).
});
