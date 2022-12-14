import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Holidayheader from './Components/Holidayheader';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Holidayheader/>
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
