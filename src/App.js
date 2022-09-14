import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Blogs from "./screens/Blogs";
import Donate from "./screens/Donate";
import Event from "./screens/Events";
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
       <>
           <Header />
               <Routes>
                   <Route path="/" element={<Home />} />
                   <Route path="blogs" element={<Blogs />} />
                   <Route path="donate" element={<Donate />} />
                   <Route path="events" element={<Event />} />
               </Routes>`
           <Footer />
       </>
  );
}

export default App;
