import Header from "./components/Header/Header.js";
import Body from "./components/Boddy/body.js";
import "./app.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import HomeScreen from "./components/homeScreen/homeScreen.js";
import { MessagesDialog } from "./components/messages/Dropdown/DropdownMenu.jsx";
import AddHomeDialog from "./pages/add_home/AddHome.js";
import { useState, useEffect } from "react";
import { getHomes } from "./controllers/homes_controller.js";

import LoginWithGoogle from "./pages/login copy/LoginPage.js";
import { isAuthenticated_controller } from "./controllers/auth_controller.js";
import MyOffers from "./components/MyOffers/my_offers.js";
import { AddHomeController } from "./controllers/add_home_controller.js";

function App() {

  let [open, setOpen] = useState(false);
  let [homes, setHomes] = useState([]);
  let [loading, setLoading] = useState(false); 
  let [authChanges, setAuthChanges] = useState(false); 

  useEffect(() => {
    AddHomeController();

   /*
    getHomes().then(data => {
      setHomes(data);
      setLoading(false);
    });
   */

  }, [authChanges]);





  return (
    <BrowserRouter>
      <div className="app" >

        { isAuthenticated_controller() && <Header onLogOut={()=>{setAuthChanges(!authChanges)}}/>}

        <Routes >

          <Route path="/login" element={<LoginWithGoogle onLogin={()=>{setAuthChanges(!authChanges);console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")}}/>} />



             <Route path="/" element={<Body homes={homes} loading={loading} />}>


              <Route path="/messages" element={<MessagesDialog onClick={() => { setOpen(true); }} />} />

            </Route>

            <Route path="/my_offers" element={<MyOffers />} />

            <Route path="/addHome" element={<AddHomeDialog />} />

            <Route path="/home/:id" element={
              <HomeScreen
                price="2500,00"
                adresse="Rimal 1, Rimal, Jumeirah Beach Residence (JBR), Dubai"
                title="Live in Peace and Harmony | Spacious Villa W/ Landscaped Garden"
                description="Al Bandar consist of luxury apartments , townhouses and villas embraced by waterside restaurants , cafes shops, and a leading luxury hotels, Al Barza is  the home for desiring families and couples  to fulfill their dreams, All al barza  residents have parking directly below a two minutes walk to the terminal to hop  on the ferries transferring them to the world of the waterfront. Jacuzzis, restaurants and cafes all  feature in the Al Baraza's pride. Residents will have a choice of sports facilities including swimming pools. "
                nb_bed={5}
                nb_bath={7}
                sqft={566}
                type="Appartement"
                image="https://images.bayut.com/thumbnails/318776129-800x600.webp"
              />
            } >

            </Route>
 

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
