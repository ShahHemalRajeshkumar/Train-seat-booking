import React, { useState } from "react";
import LoginSignup from "./components/loginsignup/login";
import SeatBooking from "./components/seatbooking/booking";
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {!isLoggedIn ? (
        <LoginSignup setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <SeatBooking />
      )}
    </div>
  );
};

export default App;