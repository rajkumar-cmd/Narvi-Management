import AllRoutes from './Routes/AllRoutes';
import Holidayheader from './Components/Holidayheader';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Style from './App.module.css';


function App() {
  return (
    <div className={Style.App}>
      <Holidayheader />
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
