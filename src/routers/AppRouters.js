import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Paginas de la Web
import Navbar from 'components/Navbar';
import Home from 'components/Home';
import ErrorPage from 'components/ErrorPage';

const AppRouters = () => {
  return (
    <div>
        <Router>
            <div >
                            
                    <Routes>
                        <Route path="/" element={ <Home/> }></Route>
                        <Route path="*" element={ <ErrorPage /> }></Route>   
                    </Routes>
            </div> 
        </Router>
    </div>
  )
}

export default AppRouters