# Projeto com Expo Bare (Pastas Android e iOS)


## Comandos

* Inicializando o projeto

  * $ yarn create react-native-app expo-test-bare

* Convertendo para typescript

  * $ yarn add --dev typescript @types/react @types/react-native @types/react-dom
  * $ mv App.js App.tsx

* Publicando a primeira versão do bundle nos servidores do Expo
  * $ yarn expo publish

* Executando o APP em modo release
  * $ yarn android --variant release

* Faça sua alteração nos arquivos TS e publique o novo bundle
  * $ yarn expo publish