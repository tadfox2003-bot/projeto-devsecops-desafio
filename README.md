# Desafio DevSecOps — Gerenciador de Tarefas

## Sobre o Projeto
Este repositório faz parte do desafio prático do módulo de DevSecOps da ADA Tech.
Você receberá este projeto com vulnerabilidades propositais e uma pipeline incompleta.
Seu objetivo é **implementar a pipeline de segurança** e **corrigir as vulnerabilidades**.

## Estado atual
A pipeline está **incompleta**. Os steps de segurança precisam ser implementados por você.

## Sua missão
1. Implementar os steps de segurança no `pipeline.yml`
2. Fazer a pipeline **quebrar** ao detectar os problemas
3. Corrigir as vulnerabilidades encontradas
4. Fazer a pipeline **passar** com tudo verde ✅
5. Documentar o funcionamento da pipeline neste README

## O que implementar
- [ ] Secrets Scanning com **Gitleaks**
- [ ] SAST com **Semgrep**
- [ ] SCA com **Grype**
- [ ] Deploy com **GitHub Pages**

## Como a pipeline funciona
🔐 Pipeline DevSecOps — Explicação dos Steps
1. 📥 Checkout do Código
•	O que faz: Baixa o código do repositório para o ambiente de execução do GitHub Actions.
•	Por que é importante: Garante que a versão mais recente do código seja usada em todos os testes e verificações de segurança.
2. ⚙️ Build
•	O que faz: Verifica a estrutura dos arquivos e simula um processo de build simples.
•	Por que é importante: Confirma que o projeto está íntegro e pronto para ser analisado. Se o build falhar, não adianta prosseguir com testes de segurança.
3. 🔑 Secrets Scanning (Gitleaks)
•	O que faz: Usa o gitleaks/gitleaks-action@v2 para detectar credenciais expostas (senhas, tokens, chaves de API) no código e histórico de commits.
•	Por que é importante: Evita que informações sensíveis sejam publicadas no repositório e potencialmente exploradas por atacantes.
4. 🔍 SAST (Semgrep)
•	O que faz: Instala o Semgrep e roda uma análise estática do código (semgrep scan --config auto --error src/).
•	Por que é importante: Identifica vulnerabilidades de segurança e más práticas diretamente no código-fonte, como uso de funções perigosas (eval, SQL injection, XSS).
•	Benefício: Corrige falhas antes mesmo de o código ser executado.
5. 📦 SCA (Grype)
•	O que faz: Instala o Grype e analisa dependências e pacotes usados no projeto (grype dir:. --fail-on medium).
•	Por que é importante: Detecta vulnerabilidades conhecidas em bibliotecas externas. Muitas vezes, ataques exploram falhas em dependências desatualizadas.
•	Benefício: Garante que o software não dependa de componentes inseguros.


## URL de Produção
> Adicione aqui o link do GitHub Pages após o deploy.
