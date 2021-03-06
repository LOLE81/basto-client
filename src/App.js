import { Routes, Route } from 'react-router-dom';
import AnimalDetails from './components/AnimalDetails';
import Form from './components/Form';
import Home from './components/Home';
import './app.css';

function App() {
  return (  
      <div>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/update/:id" exact element={<AnimalDetails/>} />
          <Route path="/form" element={<Form/>} exact />
        </Routes>
      </div>
  );
}

export default App;
