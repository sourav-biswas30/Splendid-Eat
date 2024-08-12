import './App.css';
import MainComponent from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>   {/* step 15. Router Add korlam.........Now go to BodyComponent */}
      <MainComponent/>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
