<h1>Jogo ao Alvo 🎯 </h1>

Esse projeto consiste em um jogo ao alvo criado em JavaScript. O jogador deve clicar na tela para acertar o alvo que é sorteado em uma posição aleatória. O jogo possui quatro níveis de dificuldade: fácil, médio, difícil e impossível.

<h1> Funcionamento ⚙️</h1>
O jogo é iniciado quando a página é carregada e o usuário clica em um dos botões de dificuldade. Em seguida, é chamada a função Dificuldade que recebe como parâmetro a dificuldade escolhida (tempo em milissegundos entre cada atualização do alvo).
</br>
Dentro da função Dificuldade, é criado um elemento canvas que será utilizado para desenhar o alvo. A tela é pintada de preto e em seguida o alvo é sorteado em uma posição aleatória e desenhado.
</br>
O jogador deve clicar na tela para acertar o alvo. Quando o clique ocorre, é calculada a distância entre o ponto clicado e o centro do alvo. Se a distância for menor ou igual ao raio do alvo, o jogador acertou e a contagem de acertos é incrementada. Caso contrário, a contagem de erros é incrementada.
</br>
O jogo continua até que o jogador decida sair ou acerte um número suficiente de alvos, dependendo da dificuldade escolhida.
</br>
<h1>Como jogar 🎮</h1>
</br>
Para jogar o Jogo ao Alvo, basta abrir o arquivo index.html em um navegador e clicar em um dos botões de dificuldade. O jogador deve clicar na tela para acertar o alvo e tentar acertar o maior número possível de alvos. 
</br>
<h1>Tecnologias utilizadas 🔨 </h1>
</br>
O projeto foi desenvolvido em  por JavaScript utilizando o Canva para realizar animações, HTML e CSS para a criação da interface do jogo.
</br>
<h1> Autor 👨‍🎓</h1>
</br>
Esse jogo foi feito com ❤️ por Filipe, como parte de finalização do curso da Alura onde implementei diversas novas funcionalidades dentro do jogo.
