import React, { Component } from 'react'
import Products from './Section/Products'
import Details from './Section/Details'
import {
  BrowserRouter as Router,
  Switch,
  Link,
  useRouteMatch,
  useParams,  Routes, Route 
} from "react-router-dom";
import '../index.css'


export class Section extends Component {
    render() {
        return (
            <section>
             
          <Routes>
                    <Route path="/product" element={<Products />} exact  />
                    <Route path="/product/:id" element={<Details/>} exact />
          </Routes>
                 
            </section>
        )
    }
}

export default Section