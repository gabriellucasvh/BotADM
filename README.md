# Bot para Discord
Este recurso foi criado com finalidade em auxiliar donos de servidores. A funcionalidade foi experimental(a fins de estudo), podendo ser aprimorada para melhor uso.
## Funcionalidades
- ban

> **- Use para banir um usuário do seu servidor.**

- clear

> **- Use para limpar mensagens de um canal de texto, entre 1-100 com limite de até 14 dias.**

- kick

> **- Use para expulsar um usuário do seu servidor.**

- lock

> **- Para evitar ataques de spam, use para trancar todos os canais de texto do seu servidor.**
  
- ping

> **- Checa como está a velocidade do bot para entrega de dados.**

- say

> **- Use para que o bot envie uma mensagem por você.**

- tempmute

> **- Retira a permissão do usuário interagir no servidor por um tempo determinado.**

- unban

> **- Retira o banimento de um usuário.**

- unlock

> **- Faz com que a função `"lock"` seja desativada, voltando a funcionar todos os canais de texto**

> [!IMPORTANT]
> Use `/` antes dos comandos, por exemplo: `/say`


## Tecnologias ultilizadas

- [JavaScript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/en)

## Como executar

1. Instale o `Node.js` [aqui](https://nodejs.org/en)
2. Faça um clone desse repositório:
- Crie uma pasta no seu computador para o bot, com o nome de sua preferência 
- Abra o `git bash` ou `terminal` dentro dessa pasta
- Copie a [URL](https://github.com/ItSrGop/BotADM.git) do repositório
- Digite `git clone <URL copiada>` e pressione `ENTER`
3. Após clonar, digite `npm init -y` no terminal para ter o `package.json`
4. Em seguida, digite `npm i discord.js` para instalar a biblioteca do [Discord](https://discord.js.org/)
5. Crie ou abra sua aplicação em [Discord Developer](https://discord.com/developers/applications)
- Em `"Applications"`, selecione o seu bot
- Em `"Bot"`, na categoria `TOKEN`, selecione `Reset Token`
- Copie seu token
6. Crie um arquivo no diretório raiz chamado `"bottoken.js"` e cole seu token da seguinte forma:
  ```
module.exports = {
    token: 'seuTokenAqui'
}
  ```
7. No terminal, inicie digitando `node index.js`
> [!WARNING]
> Dependendo do momento que esteja vendo isso, a biblioteca do [Discord.js](https://discord.js.org/) esteja mais atualizada, leia a documentação se necessário.
