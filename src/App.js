import Header from "./components/Header/Header.js";
import Body from "./components/Boddy/body.js";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/homeScreen/homeScreen.js";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/home" element={
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
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
