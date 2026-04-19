// Função para carregar dados do db.json
async function carregarDados() {
  try {
    const response = await fetch('db.json'); // precisa estar na mesma pasta que index.html
    const data = await response.json();

    // Atualiza status do sistema
    document.getElementById('db-status').textContent = data.status;
    document.getElementById('db-version').textContent = data.versao_do_banco;

    // Renderiza tarefas
    const lista = document.getElementById('task-list');
    lista.innerHTML = '';
    data.itens.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.task;
      lista.appendChild(li);
    });
  } catch (error) {
    document.getElementById('db-status').textContent = 'Erro ao conectar!';
    console.error('Erro ao carregar db.json:', error);
  }
}

// Função para adicionar nova tarefa
function addTask() {
  const input = document.getElementById('new-task');
  const tarefa = input.value.trim();
  if (tarefa) {
    const lista = document.getElementById('task-list');
    const li = document.createElement('li');
    li.textContent = tarefa;
    lista.appendChild(li);
    input.value = '';
  }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  carregarDados();
});

