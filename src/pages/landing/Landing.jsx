import React from 'react'

function Landing() {
  return (
    <main>
      <h1 className="title">Meu nome é Camilo Micheletto e esse é o meu site</h1>
      <small className="subtext">Eu que fiz ele todo, usando código.</small>
      <p className="text">Eu fiz esse site porque gosto de programar e gostaria que você, leitor ou leitora, me remunerasse para fazer isso pra ti. Sou um <strong>Desenvolvedor Front-end</strong> que mora em <strong>São Paulo, Brasil</strong>, meus pronomes são <strong>Ele/Dele</strong>, meus hobbies são <strong>cantar e sofrer por amor</strong>.</p>
      <section>
        <h2 className="subtitle">O que eu sei fazer</h2>
        <dl className="deflist">
          <dt className="deftitle title">Eu me sinto confiante sobre:</dt>
          <dd className="defcontent text">Javascript, React, Vue, CSS e seus frameworks e pré-processadores (Mas gosto mais de SCSS), testes unitários com Jest e React-testing-library. Eu sei o bastante do fluxo do Git pra consegir trabalhar sem fazer bagunça nas branches mas vou amar trampar com um fluxo mais complexo.</dd>
          <dt className="deftitle title">O que tenho um bom conhecimento sobre:</dt>
          <dd className="defcontent text">A11y, bibliotecas de gerenciamento de estado (Redux e Vuex), SSRs (Nuxt, Next e E11tty) e toolings de front-end como Snowpack e Vite.js e Ruby.</dd>
          <dt className="deftitle title">Consigo me virar com alguma ajuda:</dt>
          <dd className="defcontent text">Rails, Python + Django, Node JS e Typescript.</dd>
          <dt className="deftitle title">Não sei quase nada sobre, mas gostaria muito de trampar com:</dt>
          <dd className="defcontent text">Serverless, automação e animação com P3/webGL.</dd>
        </dl>
      </section>
      <section>
        <h2 className="subtitle">Mas você deve estar se perguntando:</h2>
        <div className="quote-container">
          <blockquote className="quote">Mas você já trampou com isso alguma vez?</blockquote>
          <p className="subtext">- Você</p>
        </div>
        <h3 className="subtitle">Essas são minhas experiências profissionais mais relevantes, mas você pode ver também o que as pessoas falam de mim no meu <a href="">Linkedin</a>.</h3>
        <details className="details">
          <summary className="title">Concrete Solutions, Accenture</summary>
            <p className="subtitle">Desenvolvedor Front-end</p>
            <p className="text">De 01/01/1111 até hoje</p>
            <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora eum, beatae earum temporibus officia illo a odio obcaecati aut cumque.</p>
        </details>
        <details className="details">
          <summary className="title">Ateliê de Propaganda</summary>
            <p className="subtitle">Desenvolvedor Front-end</p>
            <p className="text">De 01/01/1111 até hoje</p>
            <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora eum, beatae earum temporibus officia illo a odio obcaecati aut cumque.</p>
        </details>
        <small className="subtext">Vale ressaltar que eu faço freelas de produção de e-mail marketing mas, por favor, não me peça pra fazer e-mail marketing.</small>
      </section>
      <section>
        <h2 className="title">Você estudou essas coisas, ou...</h2>
        <p className="subtext">Você deve estar se perguntando. A resposta é sim</p>
        <ul className="list">
          <li className="list-item">
            <h3 className="subtitle">Le Wagon - Fullstack Web Development Bootcamp</h3>
            <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus vero deleniti excepturi ratione, reprehenderit iure. Incidunt mollitia architecto maxime distinctio.</p>
          </li>
          <li className="list-item">
            <h3 className="subtitle">Academia Matertech by Facebook</h3>
            <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus vero deleniti excepturi ratione, reprehenderit iure. Incidunt mollitia architecto maxime distinctio.</p>
          </li>
          <li className="list-item">
            <h3 className="subtitle">
              Origamid
            </h3>
            <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus vero deleniti excepturi ratione, reprehenderit iure. Incidunt mollitia architecto maxime distinctio.</p>
          </li>
        </ul>
      </section>
      <section>
        <h2 className="title">Meus projetos</h2>
        <p className="text">Colocar projetos</p>
      </section>
      <footer>
        <h2 className="title">Gostasse? Entre em contato comigo</h2>
        <p className="text">Eu pensei em fazer um formulário para demonstrar que eu sei fazer formulários, porém eu prefiro que entrem em contato comigo pelo meu <a href="">Linkedin</a>, pois assim eu consigo conhecer um pouco de você também.</p>
        <h3 className="subtitle">Você também pode acompanhar um pouco do meu trabalho nos links abaixo:</h3>
        <ul className="list list--horizontal">
          <li className="list-item">
            <a href="">Codepen</a>
          </li>
          <li className="list-item">
            <a href="">Codewars</a>
          </li>
          <li className="list-item">
            <a href="">DevTo</a>
          </li>
          <li className="list-item">
            <a href="">Github</a>
          </li>
        </ul>
      </footer>
    </main>
  )
}

export default Landing
