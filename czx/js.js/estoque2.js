
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Armazenador de Estoque</title>
</head>
<body>
    <h1>Armazenador de Estoque</h1>

    <!-- Formulário para adicionar item -->
    <form id="addItemForm">
        <label for="nome">Nome da Peça:</label><br>
        <input type="text" id="nome" name="nome"><br>

        <label for="numero">Número:</label><br>
        <input type="text" id="numero" name="numero"><br>

        <label for="localizacao">Localização:</label><br>
        <input type="text" id="localizacao" name="localizacao"><br>

        <label for="foto">Adicionar Foto:</label><br>
        <input type="file" id="foto" name="foto"><br>

        <button type="submit">Adicionar ao Estoque</button>
    </form>

    <!-- Lista de itens -->
    <h2>Estoque</h2>
    <ul id="estoque"></ul>

    <script>
        const form = document.getElementById('addItemForm');
        const estoqueList = document.getElementById('estoque');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const numero = document.getElementById('numero').value;
            const localizacao = document.getElementById('localizacao').value;
            // Aqui você pode adicionar o código para lidar com o upload da foto

            // Adicionando item ao estoque
            adicionarItem(nome, numero, localizacao);
            // Limpar campos do formulário
            form.reset();
        });

        // Função para adicionar item ao estoque
        function adicionarItem(nome, numero, localizacao) {
            const item = document.createElement('li');
            item.textContent = `Nome: ${nome}, Número: ${numero}, Localização: ${localizacao}`;

            // Botões para remover e classificar como vendido/disponível
            const removerBotao = document.createElement('button');
            removerBotao.textContent = 'Remover';
            removerBotao.addEventListener('click', function() {
                estoqueList.removeChild(item);
            });

            const disponivelBotao = document.createElement('button');
            disponivelBotao.textContent = 'Disponível';
            disponivelBotao.addEventListener('click', function() {
                // Adicione código para marcar como disponível
                // Por exemplo, você pode alterar a cor de fundo do item
                item.style.backgroundColor = 'green';
            });

            const vendidoBotao = document.createElement('button');
            vendidoBotao.textContent = 'Vendido';
            vendidoBotao.addEventListener('click', function() {
                // Adicione código para marcar como vendido
                // Por exemplo, você pode alterar a cor de fundo do item
                item.style.backgroundColor = 'red';
            });

            // Adicionando botões ao item
            item.appendChild(removerBotao);
            item.appendChild(disponivelBotao);
            item.appendChild(vendidoBotao);

            // Adicionando item à lista de estoque
            estoqueList.appendChild(item);
        }
    </script>
</body>
</html>
