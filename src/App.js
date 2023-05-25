import './App.css';
import Navbar from './component/navbar' 
import PluginDocs from './component/pluginDocs' 
import Plugins from './component/plugins' 
import Policy from './component/policy' 
import Reseve from './component/bottom_reseve' 
import Store from './component/store/store' 
import AboutMe from './component/aboutMe/aboutMe' 
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
    // index.js or App.js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('Service Worker registered: ', registration);
    }).catch(error => {
      console.log('Service Worker registration failed: ', error);
    });
  });
}

  return (
    <div className="App ">
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={<PluginDocs/>} />
        <Route path="pluginDocs" element={<PluginDocs/>} />
        <Route path="plugins" element={<Plugins/>} />
        <Route path="store" element={<Store/>} />
        <Route path="policy" element={<Policy/>} />
        <Route path="aboutme" element={<AboutMe/>} />
        </Routes>
        </BrowserRouter>
      <br/>
      <br/>
      <br/>
      <br/>
    
    
    </div>
  );
}

export default App;
