import React, { useEffect, useRef } from "react";

import "./css/Register.css";

const ticketDetails = [
  {
    id: 1,
    title: "Onstage Solo Contest",
    price: "$20",
    description: "Participation fee per contest.",
  },
  {
    id: 2,
    title: "Group Contest (Dance & Singing)",
    price: "$15",
    description: "Fee per participant in the group.",
  },
  {
    id: 3,
    title: "All Other Contests",
    price: "$15",
    description: "Participation fee per contest.",
  },
  {
    id: 4,
    title: "Entry Fee for Guests",
    price: "$5",
    description:
      "For each accompanying guest (children above 5 years, youth, and adults) for the Onstage contest.",
  },
];

const bundlePackages = [
  {
    id: 1,
    title: "BUNDLE PACKAGE 1",
    discount: "10%",
    detail: "Register for any 3 contests for the same participant",
  },
  {
    id: 2,
    title: "BUNDLE PACKAGE 2",
    discount: "15%",
    detail: "Register for any 5 contests for the same participant",
  },
  {
    id: 3,
    title: "BUNDLE PACKAGE 3",
    discount: "25%",
    detail: "Register for any 7 contests for the same participant",
  },
];

const Register = () => {
  const daysTensRef = useRef(null);
  const daysOnesRef = useRef(null);
  const hoursTensRef = useRef(null);
  const hoursOnesRef = useRef(null);
  const minutesTensRef = useRef(null);
  const minutesOnesRef = useRef(null);
  const secondsTensRef = useRef(null);
  const secondsOnesRef = useRef(null);

  // Solution 2: Move date creation inside useEffect
  useEffect(() => {
    // Move countToDate inside if you prefer this solution
    // const countToDate = new Date("2025-01-10T00:00:00-06:00");
    const countToDate = new Date("2025-01-26T00:00:00-06:00");

    const flipAllCards = (time) => {
      const seconds = time % 60;
      const minutes = Math.floor(time / 60) % 60;
      const hours = Math.floor(time / 3600) % 24;
      const days = Math.floor(time / (3600 * 24));

      flip(daysTensRef, Math.floor(days / 10));
      flip(daysOnesRef, days % 10);
      flip(hoursTensRef, Math.floor(hours / 10));
      flip(hoursOnesRef, hours % 10);
      flip(minutesTensRef, Math.floor(minutes / 10));
      flip(minutesOnesRef, minutes % 10);
      flip(secondsTensRef, Math.floor(seconds / 10));
      flip(secondsOnesRef, seconds % 10);
    };

    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);
      if (timeBetweenDates <= 0) {
        clearInterval(intervalId);
        flipAllCards(0); // Set all digits to 0
        return;
      }
      flipAllCards(timeBetweenDates);
    }, 250);

    return () => clearInterval(intervalId);
  }, []); // Remove countToDate from dependencies if using Solution 2

  function flip(flipCardRef, newNumber) {
    const flipCard = flipCardRef.current;
    if (!flipCard) return; // Check if the ref is attached to an element

    const topHalf = flipCard.querySelector(".top");
    const bottomHalf = flipCard.querySelector(".bottom");
    const startNumber = parseInt(topHalf.textContent, 10);
    if (newNumber === startNumber) return;

    const topFlip = document.createElement("div");
    topFlip.classList.add("top-flip");
    const bottomFlip = document.createElement("div");
    bottomFlip.classList.add("bottom-flip");

    topHalf.textContent = startNumber;
    bottomHalf.textContent = startNumber;
    topFlip.textContent = startNumber;
    bottomFlip.textContent = newNumber;

    topFlip.addEventListener("animationstart", () => {
      topHalf.textContent = newNumber;
    });
    topFlip.addEventListener("animationend", () => {
      topFlip.remove();
    });
    bottomFlip.addEventListener("animationend", () => {
      bottomHalf.textContent = newNumber;
      bottomFlip.remove();
    });

    flipCard.append(topFlip, bottomFlip);
  }

  const handleRegisterClick = () => {
    window.location.href =
      "https://www.tickettailor.com/events/sanskritirkt2025/1434827";
  };

  return (
    <section className="register-section py-5">
      <div className="register-container">
        <h1 className="register-title">Registration Closing In:</h1>
        {/* Countdown Timer Section */}
        <div className="container-timer">
          <div className="container-timer-segment">
            <div className="timer-segment">
              <div className="timer-flip-card" data-days-tens ref={daysTensRef}>
                <div className="top">0</div>
                <div className="bottom">0</div>
              </div>
              <div className="timer-flip-card" data-days-ones ref={daysOnesRef}>
                <div className="top">0</div>
                <div className="bottom">0</div>
              </div>
            </div>
            <div className="timer-segment-title">Days</div>
          </div>
          <div className="container-timer-segment">
            <div className="timer-segment">
              <div
                className="timer-flip-card"
                data-hours-tens
                ref={hoursTensRef}
              >
                <div className="top">2</div>
                <div className="bottom">2</div>
              </div>
              <div
                className="timer-flip-card"
                data-hours-ones
                ref={hoursOnesRef}
              >
                <div className="top">4</div>
                <div className="bottom">4</div>
              </div>
              <div className="timer-segment-title">Hours</div>
            </div>
          </div>
          <div className="container-timer-segment">
            <div className="timer-segment">
              <div
                className="timer-flip-card"
                data-minutes-tens
                ref={minutesTensRef}
              >
                <div className="top">0</div>
                <div className="bottom">0</div>
              </div>
              <div
                className="timer-flip-card"
                data-minutes-ones
                ref={minutesOnesRef}
              >
                <div className="top">0</div>
                <div className="bottom">0</div>
              </div>

              <div className="timer-segment-title">Minutes</div>
            </div>
          </div>
          <div className="container-timer-segment">
            <div className="timer-segment">
              <div
                className="timer-flip-card"
                data-seconds-tens
                ref={secondsTensRef}
              >
                <div className="top">0</div>
                <div className="bottom">0</div>
              </div>
              <div
                className="timer-flip-card"
                data-seconds-ones
                ref={secondsOnesRef}
              >
                <div className="top">0</div>
                <div className="bottom">0</div>
              </div>
            </div>

            <div className="timer-segment-title">Seconds</div>
          </div>
        </div>

        <div className="ticket-cards">
          {ticketDetails.map((ticket) => (
            <div key={ticket.id} className="ticket-card">
              <h3 className="ticket-title">{ticket.title}</h3>
              <p className="ticket-price">{ticket.price}</p>
              <p className="ticket-description">{ticket.description}</p>
              <button className="register-button" onClick={handleRegisterClick}>
                Register Now
              </button>
            </div>
          ))}
        </div>
        {/* Bundle Packages Section */}
        <div className="bundle-section" id="discounted-bundle-section">
          <h2 className="register-title">Discounted Bundle Packages</h2>
          <p className="bundle-desc">
            {" "}
            Register under the specific Bundle package to get the discount.
          </p>
          <div className="register-container">
            {bundlePackages.map((bundle) => (
              <div key={bundle.id} className="ticket-card">
                <h3 className="ticket-title">{bundle.title}</h3>
                <p className="ticket-price">Discount: {bundle.discount}</p>
                <p className="ticket-description">{bundle.detail}</p>
                <button
                  className="register-button"
                  onClick={handleRegisterClick}
                >
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Deadlines Section */}
        <div className="deadline-section">
          <h3 className="ticket-title">Deadlines to Register</h3>
          <p className="ticket-description">
            Scheduled On-Stage & Off-Stage Contests:{" "}
            <span className="ticket-price">January 10th, 2025</span>
          </p>
          <p className="ticket-description">
            Walk-In/Off-Stage Contests:{" "}
            <span className="ticket-price">January 25th, 2025</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
