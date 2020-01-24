## Generate PDF with puppeteer

O objetivo era gerar um PDF de HTML, então enviar de volta para o browser para que o usuário realize o download. 

# Back-End

Aqui no **Back-End** a ideia é apenas retornas o *Buffer* do PDF gerado para que no **Front-End** o usuário possa realizar o download.

- Dependências.
	> puppeteer
	
# Front-End

No **Front-End** é capturado o *Buffer* e converte-lo em um *ArrayBuffer*. Deve ser criado um Blob (Binary Large Objects) com o construtor new Blob() o Blob pega todo iterável do primeiro argumento.
Para criar um blob que pode ser lido como PDF, os dados precisam ser iteráveis ​​em um formato binário (eu acho ...).
Por fim, é necessário utilizar o *file-server* para realizar o download

- Dependências.
	> file-saver