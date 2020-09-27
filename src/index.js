import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import VerRanking from './pages/cadastro/Ranking';

import Error from './assets/img/error.jpg';

const Pagina404 = () => (
  <div className="Erro">
    
    <img width="40%" src={Error} alt="Erro Mensagem"/>
    <h3>Que pena! Não encontramos a página!</h3>
    <Link to="/">
      Voltar para a página inicial
    </Link>
  </div>
);

//const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>

    <Switch>
      <Route path= "/" component = {Home} exact />
      <Route path= "/cadastro/video" component = {CadastroVideo} />
      <Route path= "/cadastro/Ranking" component = {VerRanking} />
      <Route component = {Pagina404} /> 

    </Switch>

  </BrowserRouter>,

  document.getElementById('root')
);
