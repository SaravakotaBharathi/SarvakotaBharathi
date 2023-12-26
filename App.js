import 'bootstrap/dist/css/bootstrap.min.css';
// index.js or App.js
import '@fortawesome/fontawesome-free/css/all.css';
// or
// import '@fortawesome/fontawesome-free/css/fontawesome.css';
// import '@fortawesome/fontawesome-free/css/solid.css';
// import '@fortawesome/fontawesome-free/css/regular.css';
// import '@fortawesome/fontawesome-free/css/brands.css';
import Certifications from "./Achivements/Certifications.js";
import Publications from "./Achivements/Publications.js";
import Campaigns from "./Achivements/Campaigns.js";
import { Route,Routes} from "react-router-dom";
import Home from "./Home/Home.js";
import Nav from "./Achivements/Navbar/Nav.js";
function App()
 {
  return (
    <>
   <Nav />
<div className="container">
<Routes>
    
      <Route path="/" element ={<Home />} />
      <Route path="/certifications" element ={<Certifications />} />
      <Route path="/publications" element ={<Publications />} />
      <Route path="/campaigns" element ={<Campaigns />} />
</Routes>
</div>


    </>
  );
 }
export default App;
