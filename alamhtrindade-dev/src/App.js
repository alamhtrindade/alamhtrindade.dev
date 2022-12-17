import Header from './components/Header'
import Section from './components/Section';
import Section2 from './components/Section2';
import Espacador from './components/Espacador';



import expenseManagerIndex from './assets/expenseManagerIndex.png'
import expenseManagerPut from './assets/expenseManagerPut.png'
import expenseManagerGet from './assets/expenseManagerGet.png'

import indexDriveFy from './assets/indexDriveFy.png'
import agendarDriveFy from './assets/agendarDriveFy.png'
import venderDriveFy from './assets/venderDriveFy.png'

import kmeans1 from './assets/kmeans1.png'
import kmeans2 from './assets/kmeans2.png'
import kmeans3 from './assets/kmeans3.png'

import api1 from './assets/api1.png'
import api2 from './assets/api2.png'
import api3 from './assets/api3.png'

import bonitoponto1 from './assets/bonitoponto1.png'
import bonitoponto2 from './assets/bonitoponto2.png'
import bonitoponto3 from './assets/bonitoponto3.png'

import vale1 from './assets/vale1.png'
import vale2 from './assets/vale2.png'
import vale3 from './assets/vale3.png'

import pokedex1 from './assets/pokedex1.png'
import pokedex2 from './assets/pokedex2.png'
import pokedex3 from './assets/pokedex3.png'


const App = () => {
  return (
    <>
      <Header />
      <section id="java">
        <Section 
          name="Java"
          title="Expense Manager"
          subtitle="Este projeto é um trabalho que foi realizado para disciplina de laboratório de Sistemas Orientados a Objetos. 
                    O objetivo deste sistema é praticar os conceitos de Orientação a Objetos e SOLID."
          description="A Orientação a Objetos traz uma abstração do mundo real para dentro dos sistemas computacionais. Através da Orientação a Objetos
          podemos mapear os objetos do mundo real para classes do sistema. Os princípios do SOLID nos ajudam a escrever códigos mais
          claros e limpos, facilitando o entendimento e promovendo um maior reaproveitamento de código."
          
          img1={expenseManagerIndex}
          alt1="Tela inicial do sistema Expense Manager Desenvolvido por Alam Henrique Trindade"
          text1="Na tela inicial do sistema, existe um relógio 
                que é atualizado a cada segundo e a data 
                atual do sistema.
                Existe também dois botões:
                Lançar despesas - Utitlizado para fazer o
                lançamento de gastos com despesas e
                Relatório de Despesas - utilizado para 
                identificar o montante gasto com despesas. "
          
          img2={expenseManagerPut}
          alt2="Tela Lançamento de despesas do sistema Expense Manager Desenvolvido por Alam Henrique Trindade"
          text2="Na tela de Lançamento de Despesas, temos 
                a opção de escolher o tipo de despesa e os 
                campos pertinentes a essa despesa. Conforme 
                a opção escolhida para lançamento de 
                despesas, alguns campos serão habilitados ou 
                desabilitados."
          
          img3={expenseManagerGet}
          alt3="Tela de recuperação de despesas do sistema Expense Manager Desenvolvido por Alam Henrique Trindade"
          text3="Na tela de Relatório de despesas, é 
                possível filtrar as despesas por 
                período. Na lista de despesas serão 
                listadas os gastos que ocorreram 
                neste período, com o valor total de 
                cada um, e ao final da tela o valor
                total de despesas."
          tamanhoImagem="190"  
        />
        
        <Espacador tamanho="100" />
      
        <Section 
          name=""
          title="DriveFy"
          subtitle="O DriveFy é um sistema de gerenciamento voltado para lava-rápidos.Com ele é possível manter cadastro de clientes,
                    fornecedores, produtos, realizar vendas e gerenciar a agenda de serviços de lavagem."
          description="Neste projeto foram aplicados os conceitos de Abstração, Herança, Encapsulamento e Polimorfismo da Orientação a Objetos.
          Utilizando as operações do CRUD, e o SqlLite para manter a persistência dos dados. Neste projeto também implementamos alguns
          princípios do SOLID."
          
          img1={indexDriveFy}
          alt1="Tela inicial do sistema DriveFy Desenvolvido por Alam Henrique Trindade"
          text1="Dentro do sistema, A tela inicial apresenta uma lista
                de serviços agendados para o dia atual, e o menu 
                superior com as opções do sistema."
          
          img2={agendarDriveFy}
          alt2="Tela de agendar do sistema DriveFy Desenvolvido por Alam Henrique Trindade"
          text2="A tela de Agendamento permite a recuperação
                de informações pertinentes a um cliente, qual
                serviço e por quem será realizado, e a escolha
                da data para agendar."
          
          img3={venderDriveFy}
          alt3="Terminal de venda do sistema DriveFy Desenvolvido por Alam Henrique Trindade"
          text3="O terminal de Venda é uma tela simples
                que permite vender produtos cadastrados
                previamente no sitema, possibilitando a
                simples conferência."
          
          tamanhoImagem="170"  

        />

        <Espacador tamanho="100" />
      </section>
      <section id="python">
        <Section 
          className="Python"
          name="Python"
          title="Implementação do K-Means para Classificação"
          subtitle="Este algoritmo é a implementação manual do algoritmo de K-Media dos vizinhos mais próximos, utilizado para posicionar centróides e assim
                    classificar as entradas em grupos. Podemos escolher duas medidas: Euclidiana e Cosseno para realizar essa métrica."
          description="Dentro da biblioteca Sklearn para o Python já existe uma função pronta para o K-Means, mas o propósito deste trabalho era testar a capacidade de
                      compreenssão da lógica por trás do K-Means. No K-Means escolhemos a quantidade de centróides que serão colocados aleatóriamente no conjunto de dados.
                      A medida escolhida é utilizada para medir a posição do centróide em relação ao grupo. e o ponto que mais representa o grupo é escolhido como centróide.
                      Este passo de medir médias é executado enquanto os centróides continuarem se movendo."
          
          img1={kmeans1}
          alt1="Imagem do primeiro passo executado pelo K-Means Desenvolvido por Alam Henrique Trindade"
          text1="No primeiro passo do código, uma entrada é definida, com pontos X e Y. Estes pontos serão plotados no gráfico para análise
                  inicial do conjunto de dados."
          
          img2={kmeans2}
          alt2="Imagem da função executado pelo K-Means Desenvolvido por Alam Henrique Trindade"
          text2=" As funções definidas no código foram baseadas no cálculo da medida
                  Gaussiana e do Cosseno entre dois pontos. Essas funções são responsáveis por
                  determinar qual o centróide que representa o conjunto."
          
          img3={kmeans3}
          alt3="Imagem da classificacão executado pelo K-Means Desenvolvido por Alam Henrique Trindade"
          text3="O algoritmo de medida do k-means irá continuar executando até que os centróides
                não mudem mais de posição, assim o a localização do centróide final é o ponto que
                mais representa o conjunto de dados."  

          tamanhoImagem="300"  
        />
        
        <Espacador tamanho="100" />
      </section>
      <section id="php">
        <Section2 
          id="php"
          name="PHP"
          title="API Flash Service"
          subtitle="Esta API foi criada para um aplicativo desenvolvido utilizando React-Native. Ela processa e mantém os dados para o funcionamento da aplicação.
                    Este aplicativo é um aplicativo para agendamento de serviços especializados. O PHP foi utilizado como linguagem principal de desenvolvimento,
                    para a persistencia dos dados, foi utilizado o SGBD PostgreSql. A técnica do PDO permitiu uma abstração do banco para utilizarmos diferentes
                    SGBDs sem muitas configurações."
          description=""
          
          img1={api1}
          alt1=""
          
          img2={api2}
          alt2=""
          
          img3={api3}
          alt3=""  

          tamanhoImagem="350"  
        />
        
        <Espacador tamanho="100" />
        </section>
      <section id="javascript">
        <Section2
        
          name="Javascript"
          title="Pokedex"
          subtitle="A pokedex é uma aplicação desenvolvida utilizando HTML, CSS e Javascript. Foi desenvolvida no módulo introdutório a Javascript, no Bootcamp Orange Tech +,
                    promovido pela parceria entre a plataforma Digital Innovation One (DIO) e o Banco Inter. Neste projeto, foi aplicado os conceitos de requisição HTTP para a API 
                    da pokeApi, recebendo os dados dos pokemons dinâmicamente."
          description="Este projeto é responsivo, apresentando a distribuição do layout dos cards dos pokemons conforme o tamanho do display do dispositivo."
          
          img1={pokedex1}
          alt1="Imagem da Pokedex criado no BootCamp Orange Tech Inter na Dio Desenvolvido por Alam Henrique Trindade"
          
          img2={pokedex2}
          alt2="Imagem da Pokedex criado no BootCamp Orange Tech Inter na Dio Desenvolvido por Alam Henrique Trindade"
          
          img3={pokedex3}
          alt3="Imagem da Pokedex criado no BootCamp Orange Tech Inter na Dio Desenvolvido por Alam Henrique Trindade"  

          tamanhoImagem="350"  
        />
        <Espacador tamanho="100" />
      </section>
      {/*<Espacador tamanho="100" />

      <Section2 
        name="React Js"
        title="Pokedex"
        subtitle=" "
        description=""
        
        img1=""
        alt1=""
        
        img2=""
        alt2=""
        
        img3=""
        alt3=""  

        tamanhoImagem="350"  
      />

      <Espacador tamanho="100" />

      <Section2 
        name="PostgreSql"
        title=""
        subtitle=" "
        description=""
        
        img1=""
        alt1=""
        
        img2=""
        alt2=""
        
        img3=""
        alt3=""  

        tamanhoImagem="350"  
      />*/}
      <section id="wordpress">
        <Section2 
          name="Wordpress"
          title="Bonito Ponto Máquinas de Costura"
          subtitle="A empresa Bonito Ponto Máquinas de Costura é uma loja de máquinas e acessórios para costura em ascessão no estado
                    do Mato Grosso do Sul. A empresa possui uma relevância grande com seus vídeos no YouTube, que tem alcançado pessoas ao
                    redor do mundo. O site da empresa foi desenvolvido no wordpress, com a finalidade de apresentar ao público, uma forma simples e direta
                    sobre esta empresa. Foi desenvolvido utilizando o Wordpress + Elementor na versão Free"
          description="disponível em: https://bonitoponto.com.br"
          
          img1={bonitoponto1}
          alt1="Imagem do site bonitoponto.com.br Desenvolvido por Alam Henrique Trindade"
          
          img2={bonitoponto2}
          alt2="Imagem do site bonitoponto.com.br Desenvolvido por Alam Henrique Trindade"
          
          img3={bonitoponto3}
          alt3="Imagem do site bonitoponto.com.br Desenvolvido por Alam Henrique Trindade"  

          tamanhoImagem="350"  
        />

        <Espacador tamanho="100" />
      </section>
      <section id="duda">
        <Section2 
          name="Duda Sites"
          title="Ecossistema de Inovação - Vale da Celulose"
          subtitle="O Ecossistema de Inovação Vale da Celulose é um polo tecnológico criado para o desenvolvimento e 
                  fomento de inovação na região de Três Lagoas-MS. Foi lançado em 2022, com ampla participação de Empresas 
                  e Instituições de Ensino Superior, que elaboraram um Documento de Planejamento, orientando os próximos passos 
                  dessa iniciativa. Este site foi desenvolvido utilizando a ferramenta Duda Sites."
          description="disponível em: https://valedacelulose.com.br"
          
          img1={vale1}
          alt1="Imagem do site valedacelulose.com.br Desenvolvido por Alam Henrique Trindade"
          
          img2={vale2}
          alt2="Imagem do site valedacelulose.com.br Desenvolvido por Alam Henrique Trindade"
          
          img3={vale3}
          alt3="Imagem do site valedacelulose.com.br Desenvolvido por Alam Henrique Trindade"  

          tamanhoImagem="350"  
        />

        <Espacador tamanho="300" />
      </section>
      </>
  );
}

export default App;
