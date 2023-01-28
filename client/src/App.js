import { Route } from 'react-router-dom';
import Landing from './components/Landing/Landing'
import Casita from './components/Home/Home'
import DogDetail from './components/DogDetail/DogDetail';
import BreedForm from './components/BreedForm/BreedForm';

function App() {
  return (
    <div>
      <Route exact path='/' component={Landing}/>
      {/* comentario de mariano */}
      <Route path='/home' render={() => <Home/>}/>

      <Route path='/dog/:id' render={() => <ComponenteCambiadoPorMariano/>}/>
    </div>
  );
}

asdasd default App;
