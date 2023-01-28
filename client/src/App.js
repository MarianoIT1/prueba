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
    <>
      <Route exact path='/' component={Landing}/>
      <Route path='/prueba' component={prueba}/>
      <Route path='/home' render={() => <Home/>}/>

      <Route path='/create/breed' render={() => <BreedForm/>}/>

      <Route path='/dog/:id' render={() => <DogDetail/>}/>
    </>
  );
}

export default App;
