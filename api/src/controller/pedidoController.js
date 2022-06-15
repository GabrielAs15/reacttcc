import pendencias from '../repository/pedidosRepository'

import { Router } from 'express';
const server = Router();


server.get('/pedidos/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);
        
        const resposta = await pendencias(id);

        if (!resposta)
            resp.status(404).send([])
        else
            resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;