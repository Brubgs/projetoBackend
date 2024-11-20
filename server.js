import express from "express"; // Importa o módulo Express para criar o servidor web.
import routes from "./src/routes/postRoutes.js";

const app = express(); // Cria uma instância do servidor Express.
routes(app);

app.listen(3000, () => { // Inicia o servidor na porta 3000.
    console.log("Servidor escutando!"); // Imprime uma mensagem no console indicando que o servidor está ativo.
});
