import React from 'react';
import ListOfProducts from './fragments/listOfProducts/listOfProducts';
import { products } from './data/products';
import ErrorNoData from './fragments/errorNoData/ErrorNoData';

function App() {
  const result =
    products.length > 0 ? (
      <ListOfProducts header="Muj nadpis seznamu" props={products} />
    ) : (
      <ErrorNoData></ErrorNoData>
    );

  return;
  <div className="App">
    <header className='"App-header'>{result}</header>
  </div>;
}

export default App;
