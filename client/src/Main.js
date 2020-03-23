import React from 'react';
import {Router} from '@reach/router';
import ProductFormList from './components/ProductFormList';
import ProductDetail from './components/ProductDetail';

const Main = () => {

    return(
        <div>
            Main Placeholder
            <Router>
                <ProductFormList path="/" />
                <ProductDetail path="/product/:id"/>
            </Router>
        </div>
    )
}

export default Main;