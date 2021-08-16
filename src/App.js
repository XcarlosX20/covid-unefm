import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from './Components/AboutUs/AboutUs';
import Error from './Components/Error';
import Footer from './Components/Pages/Footer';
import Header from './Components/Pages/Header';
import Home from './Components/Pages/Home/Home';
import Prevencion from './Components/Prevencion/Prevencion';
import Sintomas from './Components/Sintomas/Sintomas';
import Transmision from './Components/Transmision/Transimision';
import Tratamiento from './Components/Tratamiento/Tratamiento';
function App() {
  return (
    <Fragment>
      <Router>
        <Header titulo="MICROPASANTÍAS LAS VELITAS 2021" />
        <Switch>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={AboutUs} />
            <Route path="/sintomas" component={Sintomas} />
            <Route path="/tratamiento" component={Tratamiento} />
            <Route path="/prevencion" component={Prevencion} />
            <Route path="/transmision" component={Transmision} />
            <Route component={Error} />
          </Switch>
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
