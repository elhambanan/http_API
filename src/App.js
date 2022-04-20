import './App.css';
import Discussion from './container/Discussion/Discussion';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        HTTP-App     
      </header>
      <ToastContainer />
      <Discussion />
    </div>
  );
}

export default App;
