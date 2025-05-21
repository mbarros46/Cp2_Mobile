# MBMobileApp

Aplicativo mobile em React Native com Expo para gerenciamento de produtos e carrinho de compras.

## Requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Expo CLI
- Android Studio (para desenvolvimento Android)
- Xcode (para desenvolvimento iOS, apenas em macOS)

## Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd MBMobileApp
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Inicie o aplicativo:
```bash
npx expo start
```

## Plataformas Suportadas

O aplicativo foi testado e funciona em:
- Android (versão 8.0 ou superior)
- iOS (versão 13.0 ou superior)

## Build

### Android
Para gerar o APK:
```bash
npx eas build -p android
```

O APK será gerado e disponibilizado para download.

### iOS
Para gerar o build iOS (requer macOS):
```bash
npx eas build -p ios
```

## Funcionalidades

- Lista de produtos com busca por título e descrição
- Visualização detalhada de produtos
- Carrinho de compras com controle de quantidade
- Persistência de dados local
- Interface responsiva (portrait e landscape)
- Navegação intuitiva entre telas

## Estrutura do Projeto

```
MBMobileApp/
├── assets/          # Imagens e dados estáticos
├── components/      # Componentes reutilizáveis
├── pages/          # Telas do aplicativo
├── providers/      # Provedores de contexto
├── services/       # Serviços (storage, etc)
└── stores/         # Gerenciamento de estado
```

## Tecnologias Utilizadas

- React Native
- Expo
- TypeScript
- React Navigation
- AsyncStorage
- Expo Vector Icons