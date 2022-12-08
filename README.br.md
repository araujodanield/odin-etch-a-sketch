<img height="15px" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/flag-united-states_1f1fa-1f1f8.png">[ Read this document in english](README.md)

# Etch-a-Sketch - O criador de Pixel Art

Quarto projeto do curso <a href="https://www.theodinproject.com/about">The Odin Project</a>.

Este é um app de desenho baseado em um brinquedo americano chamado "Etch-a-Sketch" (equivalente à "Lousa Mágica") que te permite criar pixel art em uma tela que vai de 2x2 à 100x100 pixels.

Como um desafio extra pro projeto eu fiz quase todos os elementos de HTML da página utilizando manipulação de objetos com JavaScript (DOM).

A lógica aplicada na tela de desenho utiliza CSS Grid para permitir que todos os pixels preencham a tela e automaticamente aplique o mesmo tamanho para cada um deles.

### <a href="https://araujodanield.github.io/odin-etch-a-sketch/" target="_blank">Você pode ver a página e criar sua pixel art clicando aqui!</a>

</br>

## Sobre a página e as ferramentas de desenho:

Quando você abrir a página você verá um título, um subtítulo, um rodapé com o link para o meu GitHub e dois elementos principais: uma tela com o tamanho de 800x800 e 16 pixels, e uma barra de ferramentas com sete opções interativas. Aqui vai um pequeno resumo sobre cada elemento da página:

- <b><u>Tela de desenho</u></b>: O foco principal da página. Como dito anteriormente é um quadrado de 800x800 que nunca muda seu tamanho, apenas recebe novas quantidades de pixels;

- <b><u>Roda de Cor</u></b>: Um seletor de cores que é feito utilizando `<input type="color">`. Isso te permite escolher qualquer cor que você queira e também copiar qualquer cor que esteja visível no seu monitor<sup>[1]</sup>. A cor padrão da caneta e da roda de cor quando você carrega a página é um preto arroxeado;

- <b><u>Black Pen</u></b>: Este é um atalho para que você não precise selecionar a cor preta toda vez que precisar;

- <b><u>Random Effect</u></b>: Uma caneta que aplica uma cor aleatória nova para cada pixel cada vez que você passa sobre eles<sup>[2]</sup>. A lógina dessa opção é feita utilizando `Math.random()`;

- <b><u>Shadow Effect</u></b>: Uma caneta que aplica uma cor preta com 0.1 de opacidade e cada vez que você passa pelo pixel o valor aumenta em 0.1 até atingir 1 e fazer o pixel ficar totalmente preto. Infelizmente você não pode usar esta caneta em cima de um pixel já pintado, isso irá deletar a cor e aplicar o preto 0.1;

- <b><u>Eraser</u></b>: Te permite deletar cada pixel individualmente resetando ele para o estilo padrão;

- <b><u>Clear</u></b>: Reseta todos os pixels na tela para o estilo padrão;

- <b><u>Seletor de tamanho</u></b>: Este seletor representa a quantidade de pixels na tela e vai de 2x2 à 100x100. Quando você carregar a página esse seletor estará em 16x16, que também é o tamanho padrão da tela de desenho. Você pode mover o seletor para selecionar a quantidade de pixels desejada e a tela de desenho continuará a mesma até você soltar o botão de clique;

- <b><u>Display de tamanho</u></b>: Este é um elemento de texto não interativo que apenas te mostra o valor do seletor de tamanho.

</br>

## Notas:

<b>[1]</b>: Eu testei este projeto em três navegadores: Google Chrome, Microsoft Edge e Opera GX. Por algum motivo no Opera o copiador de cores não funciona, você clica nele e nada acontece. Não sei sei se isso é um problema do próprio navegador ou do meu computador. Eu tentei algumas soluções mas sem sucesso, talvez no futuro eu faça um botão que realize essa mesma função.

<b>[2]</b>: O efeito aleatório é aplicado apenas quando você passa o mouse pelos pixels. Um único clique no pixel irá aplicar a cor da última caneta que você usou, ou seja, se você usou uma caneta vermelha antes de selecionar o botão de efeito aleatório, sua "cor de clique" sempre será vermelho.