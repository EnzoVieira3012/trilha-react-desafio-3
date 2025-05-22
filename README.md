# **Plataforma de Cadastro - DIO**

Este projeto é uma **plataforma de cadastro** desenvolvida em **React**, com páginas para login, cadastro e feed de postagens. O projeto foi criado como parte de um desafio prático para aplicar conceitos como **React Router**, **Hooks**, **Styled-Components** e **validação de formulários**.

---

## **📋 Funcionalidades**

- **Home**:
  - Página inicial com informações sobre a plataforma e acesso às páginas de login e cadastro.
- **Login**:
  - Permite a autenticação de usuários com validação de campos.
- **Cadastro**:
  - Permite a criação de novos usuários.
- **Feed**:
  - Exibe postagens e um ranking dos melhores usuários.

---

## **🚀 Tecnologias Utilizadas**

As principais tecnologias utilizadas no desenvolvimento deste projeto são:

- **[React](https://reactjs.org/)**: Biblioteca JavaScript para construção de interfaces de usuário.
- **[React Router DOM](https://reactrouter.com/)**: Para navegação entre páginas.
- **[React Hook Form](https://react-hook-form.com/)**: Para validação de formulários.
- **[Styled-Components](https://styled-components.com/)**: Para estilização dinâmica de componentes.
- **[Axios](https://axios-http.com/)**: Para consumo de APIs.

---

## **📂 Estrutura do Projeto**

A estrutura do projeto foi organizada da seguinte forma:
/src
├── /assets # Imagens e ícones
├── /components # Componentes reutilizáveis
│ ├── /Button # Botão estilizado
│ ├── /Card # Card de postagens
│ ├── /Header # Cabeçalho da aplicação
│ ├── /Input # Campo de entrada com ícone
│ └── /UserInfo # Informações de usuários
├── /pages # Páginas principais
│ ├── /home # Página inicial
│ ├── /login # Página de login
│ ├── /cadastro # Página de cadastro
│ └── /feed # Página de feed
├── /services # Configuração de APIs
│ └── api.js # Configuração do Axios
├── /styles # Estilos globais e temáticos
│ ├── global.js # Estilos globais
│ └── styles.js # Estilos personalizados
├── App.js # Configuração das rotas
└── index.js # Ponto de entrada

plaintext
Copy

---

## **📦 Como Rodar o Projeto**

Siga os passos abaixo para clonar e rodar o projeto localmente:

### **Pré-requisitos**
- **Node.js** instalado (versão 14 ou superior).
- Um gerenciador de pacotes: **npm** ou **yarn**.

### **Passo a Passo**

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/dio-plataforma.git
   cd dio-plataforma
Instale as dependências:

bash
Copy
npm install
# ou, se você usar yarn:
yarn install
Inicie o servidor de desenvolvimento:

bash
Copy
npm start
# ou
yarn start
Abra o navegador:

O projeto será executado em: http://localhost:3000.
🔧 Como Usar
Acesse a página inicial:

Clique no botão "Entrar" para acessar a página de login.
Clique no botão "Cadastrar" para acessar a página de cadastro.
Login:

Insira as credenciais de login para acessar o feed.
Cadastro:

Preencha os campos de nome, e-mail e senha para criar uma nova conta.
Feed:

Visualize as postagens e o ranking dos usuários.

📚 Aprendizados
Durante o desenvolvimento deste projeto, foram aplicados conceitos importantes como:

Configuração de rotas com React Router DOM.
Validação de formulários com React Hook Form.
Consumo de APIs com Axios.
Estilização dinâmica com Styled-Components.
Organização de componentes reutilizáveis.

⚖️ Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSEOpens in a new window; external. para mais detalhes.