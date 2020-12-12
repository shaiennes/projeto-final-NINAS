# 🎭 API NINAS 🎶

## **Descrição do Projeto** 📝

Essa API foi criada com o objetivo de dar visibilidade às mulheres negras que atuam no universo da música e de artes cênicas.

Antes mesmo do acontecimento do **COVID-19**, muitas artrizes e cantoras independentes já não tinham visibilidade, depois então piorou.

Partindo da fala maravilhosa da Angela Davis - **_“Quando a mulher negra se movimenta, toda a estrutura da sociedade se movimenta com ela..”_** futuramente, essa vitrine será, também, uma rede de apoio, conectada à artistas negras que já são famosas. Desta forma, aquela que já são famosas apoiaria com apadrinhamento das artistas independentes.

## **Arquitetura** ⚙


![api-ninas](https://user-images.githubusercontent.com/69392249/101970137-690f9a80-3c07-11eb-839a-8611d40e0260.PNG)

## **Ferramentas e Tecnologias utilizadas**:

🚩 VSCode - 🚩 Postman - 🚩 Nodejs - 🚩 MongoDB 
🚩 Mongoose - 🚩 Express - 🚩 Npm - 🚩 Nodemon
🚩 DotEnv - 🚩Cors 

## **EndPoints**

MÉTODO | CAMINHO | DESCRIÇÃO 
-------|---------|---------- 
GET    |	/	 | Apresenta todas as Ninas
GET |/categoria/:nome| Apresenta Ninas por categoria
POST | /add | Adiciona uma Nina
PATCH | /atualizar/:id | Atualiza uma Nina
DELETE | /deletar/:id | Exclui uma Nina

## **Rodando o projeto localmente**
No terminal, clone o projeto: git clone https://github.com/shaiennes/projeto-final-NINAS

Entre na pasta do projeto: cd projeto-final-NINAS

Instale as dependências: npm install

Execute: npm start 

Crie um arquivo .env com as credenciais do seu Banco de Dados
Use o Postman ou Insomnia para realizar as requisições.