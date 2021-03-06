

import Basket from './components/Basket';
import Header from './components/Header';
import Main from './components/Main';
import data from './components/data';

function App() {
  const {products } =data;
  return (
    <div className="App">
    <Header></Header>
    <div className="row">
      <Main> products={products} </Main>
      <Basket></Basket>
    </div>
    </div>
  );
}

export default App;
