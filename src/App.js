import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Rutas from './Paginacion/Rutas';


function App() {
  return (
    <div>
        <Rutas />
    </div>
  );
}

export default App;
