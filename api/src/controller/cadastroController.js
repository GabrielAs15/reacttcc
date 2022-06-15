import { cadastro } from '../repository/cadastroRepository.js'

import { Router } from 'express';
const server = Router();

server.post('/cadastro', (req,resp) => {
    try {
        const cadastre = req.body;

        if (!cadastre.telefone)
            throw new Error('Telefone do cliente é obrigatório!');
        if (!cadastre.nome)
            throw new Error('Nome do cliente é obrigatório!');
        if (!cadastre.rua)
            throw new Error('Rua do cliente é obrigatório!');
        if (!cadastre.nome)
            throw new Error('Bairro do cliente é obrigatório!');
        if (!cadastre.numero)
            throw new Error('Número da residência é obrigatório!');
        if (!cadastre.total)
            throw new Error('Total da compra é obrigatório!');

        const concluido = await cadastro(pedido);
        resp.send(concluido)
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;