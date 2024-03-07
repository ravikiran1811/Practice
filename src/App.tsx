
import './App.css';
import SaasPage from './SaasPage/SaasPage';
import UseFetch from './components/CustomHooks/useFetch';
import QuizApp from './components/QuizApp/QuizApp';

function App() {
  return (
    <div className="App">
      {/* <SaasPage /> */}
      <QuizApp />
    </div>
  );
}

export default App;
