# Instruções

A calculadora é melhor visualizada em dispositivos de telas pequenas.

## Dependências

É necessário ter um ambiente node configurado para executar os testes.

## Calculadora

A calculadora pode ser aberta diretamente pelo navegador:

```sh
xdg-open index.html
# ou simplesmente abra o arquivo index.html em qualquer navegador
```

Ou através de um servidor de arquivos estáticos:

```sh
npm install
npm run calc
```

## Testes

Para rodas os testes basta utilizar os comandos:

```sh
npm install
npm run test
```

A cobertura de código será gerada automaticamente após a execução dos testes.
Para visualizar a cobertura de código, utilize o comando abaixo:

```sh
xdg-open coverage/lcov-report/index.html
```

Ou simplesmente abra o arquivo coverage/lcov-report/index.html no seu navegador preferido.
