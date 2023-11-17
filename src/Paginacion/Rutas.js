import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import { Routes, Route } from 'react-router-dom';

import Header from '../Esquema/Header';
import Footer from '../Esquema/Footer';
import UpperFooter from '../Esquema/UpperFooter';
import ProductList from './ProductList';

import Index from './Index';
import SlickSlider from './SimpleSlider';
import PrivacyPolicy from './Privacidad/PrivacyPolicy';
import Terminos from './TerminosCondiciones/TerminosCondiciones';
import jj from './ejemplos/jj';
import CookiePolicy from './Cookies/CookiePolicy';

const Rutas = () => {
  return (
    <div>
       <Routes>
        <Route path='/'  Component={ Index} />
        <Route path='/header' Component={ Header }></Route>
        <Route path='/footer' Component={ Footer  }></Route>
        <Route path='/pro' Component={ ProductList  }></Route>
        <Route path='/s' Component={ SlickSlider  }></Route>
        <Route path='/privacidad' Component={ PrivacyPolicy  }></Route>
        <Route path='/terminos-y-condiciones' Component={ Terminos  }></Route>
        <Route path='/cookies' Component={ CookiePolicy  }></Route>
        <Route path='/jj' Component={ jj  }></Route>
          {/* <Route path='/conexion' Component={ Conexion  }></Route> */}
          {/* <Route path='/copia' Component={ Copia }></Route> */}
          
      </Routes>
    </div>
  )
}

export default Rutas
