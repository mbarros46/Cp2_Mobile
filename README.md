🏍️ MP Moto Shop - Aplicativo de Venda de Motocicletas
Um aplicativo mobile desenvolvido em React Native para venda de motocicletas premium, com funcionalidades como catálogo, busca, detalhes de produtos e carrinho de compras.

📋 Sobre o Projeto
Este aplicativo foi desenvolvido como parte do trabalho CP2 da disciplina de Desenvolvimento Mobile.

O MP Moto Shop permite aos usuários:

✅ Navegar por um catálogo de motocicletas premium

✅ Visualizar detalhes dos produtos

✅ Adicionar itens ao carrinho

✅ Gerenciar suas compras

✅ Requisitos Atendidos
🧭 Navegação (10%)
✅ Menu implementado com React Navigation (Bottom Tab Navigator)

✅ Duas telas principais: Catálogo e Carrinho de Compras

✅ Estado mantido durante a navegação com Context API

📦 Lista de Produtos (10%)
✅ Lista com rolagem usando FlatList

✅ Busca por título e descrição

✅ Cada item exibe: imagem, título, descrição e preço

✅ Tela de detalhes com imagem ampliada e especificações técnicas

✅ Dados armazenados em JSON local

🛒 Carrinho de Compras (20%)
✅ Sistema para adicionar produtos da lista

✅ Badge no menu mostrando a quantidade de itens no carrinho

✅ Remoção de itens diretamente no carrinho

✅ Controle de quantidade (adicionar/remover)

✅ Dados do carrinho mantidos com Context API e persistência via AsyncStorage

🗂️ Estrutura do Código (60%)
✍️ Código Próprio (30%)
✅ Todos os métodos, funções e variáveis iniciam com prefixo "MP" (iniciais dos membros do grupo)

🗃️ Organização do Código (15%)
✅ Componentes reutilizáveis:

MPProductCard

MPCartBadge

MPHeader

MPThemeProvider

✅ Telas implementadas:

MPProductListScreen

MPCartScreen

MPProductDetailScreen

✅ Estado global com Context API (CartContext e ThemeContext)

✅ Arquitetura limpa:

Copiar código
components/  
pages/  
stores/  
providers/  
services/  
navigation/  
assets/  
🚀 Execução do Aplicativo (15%)
✅ Interface responsiva: funciona nos modos portrait e landscape

✅ Aplicativo roda nativamente em Android

📂 APK disponível na pasta /build

🛠️ Tecnologias Utilizadas
React Native

Expo

React Navigation

AsyncStorage

Context API

🏗️ Estrutura do Projeto
bash
Copiar código
MBMobileAppMotos/
├── assets/                  # Imagens e recursos estáticos
├── src/
│   ├── components/          # Componentes reutilizáveis
│   ├── navigation/          # Configuração de navegação
│   ├── pages/               # Telas do aplicativo
│   ├── providers/           # Provedores de contexto
│   ├── services/            # Serviços e APIs
│   └── stores/              # Gerenciamento de estado
├── App.js                   # Ponto de entrada do aplicativo
├── app.json                 # Configuração do Expo
└── package.json             # Dependências do projeto
🚀 Funcionalidades
🏍️ Catálogo de Motocicletas
Listagem de motocicletas premium

Busca por título e descrição

Visualização de detalhes do produto

🌙 Tema Escuro
Interface com modo escuro para melhor experiência visual

🛒 Carrinho de Compras
Adição/remoção de produtos

Controle de quantidade

Persistência com AsyncStorage

Cálculo automático do total

🔍 Detalhes do Produto
Visualização ampliada da imagem

Especificações técnicas

Botão para adicionar ao carrinho

⚙️ Instalação e Execução
✅ Pré-requisitos
Node.js (v14 ou superior)

npm ou yarn

Expo CLI

Android Studio (emulador) ou dispositivo físico

✅ Passos para Instalação
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/MBMobileAppMotos.git
cd MBMobileAppMotos
Instale as dependências:

bash
Copiar código
npm install
# ou
yarn install
Inicie o aplicativo:

bash
Copiar código
npx expo start
✨ Pronto!
Agora é só escanear o QR Code com o app do Expo Go e aproveitar!

👥 Autores

Miguel Barros Ramos

Pedro Valentim

Larissa Muniz

