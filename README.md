## 🚀 Hub Creato

## Tecnologias Utilizadas
  <p align="center">
    <a href="https://skillicons.dev">
      <img src="https://skillicons.dev/icons?i=git,aws,docker,adonis,js,nginx,nodejs,notion,postgres,postman" />
    </a>
  </p>
  


## Indice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)


## Sobre o Projeto

**Visão Geral:** HubCreato é uma plataforma inovadora que conecta influenciadores, criadores de conteúdo, modelos, fotógrafos e filmmakers com empresas, promovendo colaborações criativas e autênticas.

**Missão:** Facilitar o encontro entre talentos e oportunidades.

**Visão:** Ser a principal plataforma de conexão entre criadores e empresas.

**Valores:** Inovação, Colaboração, Transparência, Inclusão e Excelência.


## Funcionalidades Principais

- **Criação de Perfil e Assinatura:** Empresas e criadores criam perfis completos e escolhem planos de assinatura para acessar todas as funcionalidades da plataforma.

- **Busca Avançada de Talentos:** Ferramentas de busca com filtros detalhados permitem que empresas encontrem os criadores ideais para suas campanhas.

- **Envio e Recebimento de Propostas:** Empresas podem enviar propostas para criadores, e criadores podem enviar propostas diretamente para empresas, aumentando as chances de colaboração.

- **Criação de Eventos:** Empresas e criadores podem criar eventos e oportunidades de colaboração para promover conexões diretas e parcerias.

- **Sistema de Avaliações e Recompensas:** Parcerias bem-sucedidas são reconhecidas através de avaliações e recompensas, incentivando a participação ativa e a excelência nas colaborações.

- **Sem Comissões:** A plataforma opera com um modelo de assinatura fixa, permitindo colaborações ilimitadas entre empresas e criadores, sem custos adicionais por contratação.


## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados:

- **Docker**: para criar e gerenciar contêineres, facilitando o desenvolvimento e a implantação do projeto em um ambiente isolado e consistente. [Clique aqui para instalar o Docker](https://docs.docker.com/get-docker/).

## Instalação
  **Clone o repositório usando o comando abaixo:**

        git clone https://github.com/vitucp/hubcreato.git
        
  **Entre no diretório do projeto:**

        cd hubcreato
  **Instale as dependências:**
  
        npm install
  
## Como Usar
## Estrutura de Pastas

> [!WARNING]
> Ainda Sujeito a alteração.

        ├─── frontend
    │   ├─── assets             # Arquivos estáticos, como imagens, CSS, etc.
    │   ├─── src
    │   │   ├─── controller      # Lógica dos controladores
    │   │   ├─── middlewares     # Funções intermediárias
    │   │   ├─── node_modules    # Dependências do projeto
    │   │   ├─── routers         # Definição de rotas
    │   │   └─── utils           # Utilitários e funções auxiliares
    │   └─── views               # Páginas principais
    │       ├─── home
    │       ├─── iaMatch
    │       ├─── login
    │       ├─── pagePayments
    │       ├─── pageSignature
    │       ├─── perfilEnterprise
    │       ├─── perfilUser
    │       └─── register
    └─── hubcreato
        ├─── app                # Pasta principal do back-end
        │   ├─── Controllers     # Controladores de requisição
        │   │   └─── Http        # Lógica HTTP para os controladores
        │   ├─── Middleware      # Middlewares personalizados
        │   ├─── Models          # Modelos de dados
        │   ├─── Routes          # Arquivos de rotas
        └─── config              # Configurações de ambiente e variáveis





<details>

<summary>Tips for collapsed sections</summary>

### You can add a header

```ruby
   puts "Hello World"
```

</details>

## Alertas

Alertas são uma extensão Markdown baseada na sintaxe blockquote que você pode usar para enfatizar informações críticas. Eles são exibidos com cores e ícones distintos para indicar a importância do conteúdo.

> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

> [!TIP]
> utilizado nos commits.
> 
    feat: nova funcionalidade ou recurso (ex.: feat: adicionar autenticação JWT).
    
    fix: correção de bugs (ex.: fix: corrigir erro na autenticação).
    
    docs: alterações na documentação (ex.: docs: atualizar README com instruções de instalação).
    
    style: ajustes de formatação, espaços, ponto e vírgula, etc. (sem alterações de código) (ex.: style: ajustar espaçamento no arquivo main.js).
    
    refactor: mudanças de código que não corrigem bugs nem adicionam funcionalidades (ex.: refactor: simplificar função de cálculo de idade).
    
    test: adição ou modificação de testes (ex.: test: adicionar testes para validação de e-mail).
    
    chore: tarefas rotineiras de manutenção (ex.: chore: atualizar dependências).
    
    perf: melhorias de performance (ex.: perf: otimizar consulta de banco de dados).
    
    ci: alterações de configuração de CI/CD (ex.: ci: adicionar configuração de deploy automático).
    
    build: alterações que afetam o sistema de build ou dependências externas (ex.: build: configurar Webpack).
    
    <tipo>(escopo opcional): <descrição>
