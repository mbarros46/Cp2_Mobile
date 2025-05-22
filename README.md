# 🏍️ MP Moto Shop – Aplicativo Mobile de Venda de Motocicletas Premium

Aplicativo mobile desenvolvido em React Native, focado na venda de motocicletas premium. Disponibiliza catálogo, busca avançada, visualização detalhada dos produtos e sistema completo de carrinho de compras.

---

## 📋 Sobre o Projeto

Este aplicativo foi desenvolvido para a entrega CP2 da disciplina de Desenvolvimento Mobile, com foco em arquitetura limpa, usabilidade e persistência local.

---

## 🎯 Funcionalidades Principais

- Navegação intuitiva entre catálogo de produtos e carrinho de compras.  
- Busca por título **e** descrição dos produtos.  
- Visualização detalhada com imagem ampliada e especificações técnicas.  
- Adição, remoção e controle de quantidade de produtos no carrinho.  
- Badge na navegação mostrando quantidade total no carrinho.  
- Persistência local do carrinho via AsyncStorage.  
- Interface responsiva, com suporte a modos portrait e landscape.  
- Aplicativo nativo para Android (APK disponível).

---

## ✅ Requisitos Atendidos

### Navegação (10%)

- Menu implementado com React Navigation (Bottom Tab Navigator).  
- Duas telas principais: Catálogo (Esfihas) e Carrinho.  
- Estado global mantido via Context API.

### Lista de Produtos (10%)

- Lista com scroll usando FlatList.  
- Busca por título e descrição simultaneamente.  
- Itens com imagem, título, descrição e preço.  
- Tela de detalhes com imagem ampliada e informações técnicas.  
- Dados carregados de JSON local e salvos em AsyncStorage.

### Carrinho de Compras (20%)

- Sistema completo para gerenciar produtos adicionados.  
- Badge no menu mostrando quantidade total de itens.  
- Remoção e controle de quantidade direto na tela do carrinho.  
- Estado persistente usando Context API e AsyncStorage.

### Código e Organização (60%)

- Todas as variáveis, funções e métodos começam com o prefixo **MP** (iniciais do grupo).  
- Arquitetura limpa e organizada:  
  - Componentes reutilizáveis: `MPProductCard`, `MPCartBadge`, `MPHeader`, `MPThemeProvider`  
  - Telas: `MPProductListScreen`, `MPCartScreen`, `MPProductDetailScreen`  
  - Estado global com Context API (`CartContext`, `ThemeContext`)  
  - Estrutura de pastas:  
    ```
    components/
    pages/
    stores/
    providers/
    services/
    navigation/
    assets/
    ```
- UX funcional nos modos portrait e landscape.

---

## 🛠️ Tecnologias Utilizadas

- React Native  
- Expo  
- React Navigation  
- AsyncStorage  
- Context API  

---

## 🚀 Estrutura do Projeto
 ```
   MPMobileAppMotos/
├── assets/ # Imagens e recursos estáticos
├── src/
│ ├── components/ # Componentes reutilizáveis
│ ├── navigation/ # Configuração de navegação
│ ├── pages/ # Telas do app
│ ├── providers/ # Providers de contexto
│ ├── services/ # Serviços e APIs
│ └── stores/ # Gerenciamento de estado
├── App.js # Ponto de entrada
├── app.json # Configuração Expo
└── package.json # Dependências do projeto

```

---

## ⚙️ Instalação e Execução

### Passos para rodar localmente

```bash
git clone https://github.com/seu-usuario/MPMobileAppMotos.git
cd MPMobileAppMotos

npm install
npx expo start --tunnel
```

---

## 👥 Autores

Miguel Barros Ramos

Pedro Valentim

Larissa Muniz





