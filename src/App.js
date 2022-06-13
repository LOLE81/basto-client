import { Routes, Route, Switch } from 'react-router-dom';
import AnimalDetails from './components/AnimalDetails';
import Form from './components/Form';
import Home from './components/Home';

function App() {
  return (  
      <div>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/update" element={<AnimalDetails/>} exact />
          <Route path="/form" element={<Form/>} exact />
        </Routes>
      </div>
  );
}

export default App;
