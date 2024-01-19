import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import HomeContainer from "../Container/Home";
import AboutContainer from '../Container/About';
import ContactContainer from "../Container/Contact";
import MoviesContainer from "../Container/Movies";
import DetailsContainer from "../Container/Details";
import SearchContainer from '../Container/Search';
import TvseriesContainer from '../Container/TvSeries';

import HeaderComponent from '../Components/Header';
import FooterComponent from '../Components/Footer';

const RouterComponent = () =>{
    return (
        <>
        <BrowserRouter>
        <HeaderComponent/>
            <Routes>
                <Route path="/" element={<HomeContainer/>} />
                <Route path = "/movie" element={<MoviesContainer/>} />
                <Route path="/about" element={<AboutContainer/>} />
                <Route path="/search" element={<SearchContainer/>} />
                <Route path="/series" element={<TvseriesContainer/>} />
                <Route path="/contact" element={<ContactContainer/>} />
                <Route path="/details/:movieid/:mediatype" element={<DetailsContainer/>} />
            </Routes>
            <FooterComponent/>
        </BrowserRouter>
        </>
    )
};
export default RouterComponent;