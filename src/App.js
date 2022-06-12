import { Routes, Route, Switch } from 'react-router-dom';
import Home from './components/Home'

function App() {
  return (  
      <div>
        <Routes>
          <Route path="/" element={<Home/>} exact />
        </Routes>
      </div>
  );
}

export default App;
