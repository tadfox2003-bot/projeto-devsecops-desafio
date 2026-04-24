// ❌ NÃO coloque credenciais no código.
// ✅ Use variáveis de ambiente ou arquivos de configuração seguros.
const API_KEY = VALOR_API;
const DB_PASSWORD = SENHA_BANCO_DE_DADOS;

// Busca tarefas do "banco de dados"
fetch('db.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('db-status').innerText = data.status;

        const list = document.getElementById('task-list');
        data.itens.forEach(item => {
            let li = document.createElement('li');
            li.innerText = item.task; // ✅ usa innerText para evitar XSS
            list.appendChild(li);
        });
    })
    .catch(err => {        
        // ✅ Mostre apenas mensagem genérica ao usuário
        document.getElementById('db-status').innerText =
            'Erro interno. Tente novamente mais tarde.';
        // Log detalhado só no servidor
        console.error(err);
    });

// Adiciona nova tarefa na tela
function addTask() {
    const input = document.getElementById('new-task');
    const output = document.getElementById('output');

    // ✅ Cria elemento seguro em vez de usar innerHTML
    let li = document.createElement('li');
    li.innerText = input.value;
    output.appendChild(li);

    // ✅ Substitui eval por console.log direto
    console.log("Tarefa adicionada:", input.value);

    input.value = '';
}
