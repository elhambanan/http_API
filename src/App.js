import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout/Layout';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
      <div className="App">
        <ToastContainer />
        <BrowserRouter>
          <Layout>
             
          </Layout>
        </BrowserRouter>
      </div>
  );
}



export default App;
