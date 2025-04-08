// Importando as bibliotecas
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

// Configuração do banco de dados
const pool = new Pool({
    connectionString: process.env.DB_URL,
    ssl: {
        rejectUnauthorized: false // Necessário para conexões seguras com Neon
    }
});


const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
    res.send('API rodando!');
});

// [GET] Listar todos os usuários
app.get('/usuarios', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM usuarios');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// [GET] Buscar um usuário pelo ID
app.get('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// [POST] Criar um novo usuário
app.post('/usuarios', async (req, res) => {
    try {
        const { nome, email, senha_hash } = req.body;
        const result = await pool.query(
            'INSERT INTO usuarios (nome, email, senha_hash) VALUES ($1, $2, $3) RETURNING *',
            [nome, email, senha_hash]
        );
    // res.status(201).json(result.rows[0]);
    res.status(201).json({ mensagem: "Usuário cadastrado com sucesso" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// [PUT] Atualizar um usuário
app.put('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, email, senha_hash } = req.body;
        const result = await pool.query(
            'UPDATE usuarios SET nome = $1, email = $2, senha_hash = $3 WHERE id = $4 RETURNING *',
            [nome, email, senha_hash, id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// [DELETE] Deletar um usuário
app.delete('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM usuarios WHERE id = $1', [id]);
        res.sendStatus(204);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



// [GET] Listar todos os clientes
app.get('/clientes', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM clientes');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// [GET] Buscar um cliente por ID
app.get('/clientes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM clientes WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// [POST] Criar novo cliente
app.post('/clientes', async (req, res) => {
    try {
        const { nome, email } = req.body;
        await pool.query('INSERT INTO clientes (nome, email) VALUES ($1, $2)', [nome, email]);
        res.status(201).json({ mensagem: 'Cliente cadastrado com sucesso' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// [PUT] Atualizar cliente
app.put('/clientes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, email } = req.body;
        const result = await pool.query(
            'UPDATE clientes SET nome = $1, email = $2 WHERE id = $3 RETURNING *',
            [nome, email, id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// [DELETE] Deletar cliente
app.delete('/clientes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM clientes WHERE id = $1', [id]);
        res.sendStatus(204);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});






// [GET] Listar todos os produtos
app.get('/produtos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM produtos');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// [GET] Buscar um produto por ID
app.get('/produtos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM produtos WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// [POST] Criar novo produto
app.post('/produtos', async (req, res) => {
    try {
        const { nome, preco } = req.body;
        await pool.query('INSERT INTO produtos (nome, preco) VALUES ($1, $2)', [nome, preco]);
        res.status(201).json({ mensagem: 'Produto cadastrado com sucesso' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// [PUT] Atualizar produto
app.put('/produtos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, preco } = req.body;
        const result = await pool.query(
            'UPDATE produtos SET nome = $1, preco = $2 WHERE id = $3 RETURNING *',
            [nome, preco, id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// [DELETE] Deletar produto
app.delete('/produtos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM produtos WHERE id = $1', [id]);
        res.sendStatus(204);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.get('/vendas', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT 
                v.id AS venda_id,
                TO_CHAR(v.data, 'YYYY-MM-DD HH24:MI') AS data,
                c.nome AS cliente
            FROM vendas v
            JOIN clientes c ON v.cliente_id = c.id
            ORDER BY v.data DESC
        `);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});




app.post('/vendas', async (req, res) => {
    const { cliente_id, itens } = req.body; // itens: [{ produto_id, quantidade }]
    try {
        await pool.query('BEGIN');

        const vendaResult = await pool.query(
            'INSERT INTO vendas (cliente_id) VALUES ($1) RETURNING id',
            [cliente_id]
        );
        const venda_id = vendaResult.rows[0].id;

        for (const item of itens) {
            await pool.query(
                'INSERT INTO itens_venda (venda_id, produto_id, quantidade) VALUES ($1, $2, $3)',
                [venda_id, item.produto_id, item.quantidade]
            );
        }

        await pool.query('COMMIT');
        res.status(201).json({ mensagem: 'Venda registrada com sucesso', venda_id });
    } catch (err) {
        await pool.query('ROLLBACK');
        res.status(500).json({ error: err.message });
    }
});



app.get('/vendas/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const venda = await pool.query(`
            SELECT v.id, v.data, c.nome AS cliente
            FROM vendas v
            JOIN clientes c ON v.cliente_id = c.id
            WHERE v.id = $1
        `, [id]);

        if (venda.rows.length === 0) {
            return res.status(404).json({ error: 'Venda não encontrada' });
        }

        const itens = await pool.query(`
            SELECT p.nome, p.preco, i.quantidade
            FROM itens_venda i
            JOIN produtos p ON i.produto_id = p.id
            WHERE i.venda_id = $1
        `, [id]);

        res.json({
            venda: venda.rows[0],
            itens: itens.rows
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



app.delete('/vendas/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('BEGIN');
        await pool.query('DELETE FROM itens_venda WHERE venda_id = $1', [id]);
        await pool.query('DELETE FROM vendas WHERE id = $1', [id]);
        await pool.query('COMMIT');
        res.sendStatus(204);
    } catch (err) {
        await pool.query('ROLLBACK');
        res.status(500).json({ error: err.message });
    }
});



// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});