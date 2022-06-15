import { con } from './connection.js'

export async function pedidos(id) {
    const comando =
        `SELECT id_usuario		     id,
                qtd_hamburgueres     hamburgueres, 
                qtd_bebidas          bebidas,
                qtd_porcoes          porcoes, 
                qtd_sobremesa        sobremesa, 
                nm_cliente           cliente,
                ds_rua               rua, 
                ds_bairro            bairro, 
                ds_complmento        complemnto, 
                ds_nr                nr
           FROM tb_filme
          WHERE id_filme = ? `;
    
    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}