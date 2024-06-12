 import './App.css';
import AppHeader from './component/AppHeader';
import PandaItem from './component/PandaItem';
import PandaPost from './component/PandaPost';
 
 

function App() {
  return (
     <div className='app'>
      {/* <header className='app-header'>
        <img className='app-header-logo' src='/public/pandapic/logopanda.jpg' alt='pandalogo'/>
        <h4>Panda Cute</h4>
      </header> */}

      <AppHeader></AppHeader>
      
      <div className='app-grid'>
        <PandaItem></PandaItem>
        <PandaItem></PandaItem>
        <PandaItem></PandaItem>
        <PandaItem></PandaItem>
      </div>
      <PandaPost></PandaPost>
     </div>
  );
}

export default App;
