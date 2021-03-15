import React , { useContext}from 'react';
import Header from './components/Header';
import Routes from './routes/'
import {useDataBase,useDataBasePush} from './Hooks/useDataBase'
import Footer from './components/Footer'
import {AuthComponent} from './auth'


function App() {

  const {data} = useDataBase('comentarios')
  const [save, status] = useDataBasePush('comentarios')
 

  return (
    <>
    
    <AuthComponent>
      
      <Routes list={data}/>
      <Footer/>
    </AuthComponent>



    </>
  );
}

export default App;
