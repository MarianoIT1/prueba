import { Route } from 'react-router-dom';
import Landing from './components/Landing/Landing'

import Home from './components/Home/Home' //hsisdjnckmldklm

import DogDetail from './components/DogDetail/DogDetail';
import BreedForm from './components/BreedForm/BreedForm';

function App() {
  const myfunc = () => {
    const example = '1234567'
  }
  return (
    <div>
      <Route exact path='/' component={Landing}/>
      {/* comentario de mariano */}
      <Route path='/home' render={() => <Home/>}/>
      <Route path='/dog/:id' render={() => <ComponenteCambiadoPorMariano/>}/>
    </div>
  );
}

export default App;
