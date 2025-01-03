import React, { useState } from "react";
import './booking.css';

const SeatBooking = () => {
  const totalSeats = 80;
  const maxSeatsPerPerson = 7; 
  const [bookedSeats, setBookedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    if (bookedSeats.includes(seatNumber)) {
      alert("Seat already booked!");
    } else if (bookedSeats.length >= maxSeatsPerPerson) {
      alert(`You can only book up to ${maxSeatsPerPerson} seats at a time.`);
    } else {
      setBookedSeats([bookedSeats, seatNumber]);
    }
  };

  const renderSeats = () => {
    const seats = [];
    for (let i = 1; i <= totalSeats; i++) {
      seats.push(
        <button
          key={i}
          onClick={() => handleSeatClick(i)}
          className={`seat ${bookedSeats.includes(i) ? "booked" : "available"}`}
        >
          {i}
        </button>
      );
    }
    return seats;
  };

  return (
    <div className="seat-booking-container">
      <h2 className="seat-booking-heading">Seat Booking</h2>
      <div className="seat-grid">{renderSeats()}</div>
      <p className="booked-seats">
        <strong>Booked Seats:</strong> {bookedSeats.join(", ") || "None"}
      </p>
    </div>
  );
};

export default SeatBooking;