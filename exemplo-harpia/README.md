# Exemplo para validar o Harpia

Servidor HTTP mínimo, sem dependências. Rode `node exemplo-harpia/server.mjs` na raiz do repositório e acesse a URL exibida no terminal.

O arquivo `config.mjs` contém uma string gerada para o teste de detecção de segredos. A string não pertence a nenhum provedor e o servidor não a utiliza. A rota `GET /health` retorna apenas o status do exemplo.
