import { useState } from "react";
import SplashScreen from "./Component/Animation.jsx";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header.jsx";
import Hero from "./Component/Hero.jsx";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <div className="bg-black min-h-screen text-white">
          <Header />

          <Routes>
            <Route path="/" element={<Hero />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;