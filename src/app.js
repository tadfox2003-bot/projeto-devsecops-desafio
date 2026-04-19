// Função para carregar dados do db.json
async function carregarDados() {
  try {
    const response = await fetch('db.json'); // precisa estar na mesma pasta que index.html
    const data = await response.json();

    // Atualiza status do sistema
    document.getElementById('status').textContent = data.status;

    // Renderiza tarefas
    const lista = document.getElementById('lista-tarefas');
    lista.innerHTML = '';
    data.itens.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.task;
      lista.appendChild(li);
    });
  } catch (error) {
    document.getElementById('status').textContent = 'Erro ao conectar!';
    console.error('Erro ao carregar db.json:', error);
  }
}

// Função para adicionar nova tarefa
function adicionarTarefa() {
  const input = document.getElementById('nova-tarefa');
  const tarefa = input.value.trim();
  if (tarefa) {
    const lista = document.getElementById('lista-tarefas');
    const li = document.createElement('li');
    li.textContent = tarefa;
    lista.appendChild(li);
    input.value = '';
  }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  carregarDados();
  document.getElementById('btn-adicionar').addEventListener('click', adicionarTarefa);
});
