"use client";

import React from "react";

import "../components/css/CarromRules.css";

const CarromRules = () => {
  const tournamentFormat = [
    "# Of Rounds: 5 rounds",
    "Winners will be decided based on the TOTAL number of points you gained AFTER all the rounds.",
    "Participants will be PAIRED based on your current standings!",
  ];

  const gameDetails = [
    "To decide who goes first, a TOSS is performed at the start of EACH game.",
    "Each game is limited to 10 mins, AFTER 10 mins (total) are up, the result will be decided based on position.",
    "If position is tie after 10 mins, then there will be additional time of 3 mins to decide the winner. If there is still a tie, each player will be given 5 shots to pocket similar positions (similar to penalty shoot-out in soccer).",
  ];

  const strikingRules = [
    "Position within the baseline and must touch BOTH the front and rear line.",
    "A Striker cannot cut the RED moon at both ends.",
    "Player must flick the striker with ONE finger so it crosses the FRONT baseline. It is NOT permitted to flick backwards or fully horizontal (as long as there is some FORWARD angle so that the striker crosses FRONT baseline, it is a LEGAL strike).",
    "In striking, players hand or arm must not cross the diagonal four lines at either end of the baseline.",
    "Your hand should NOT touch and move any other pieces or a bounced back striker. (Hint: take your hands off the board right after striking to avoid this).",
  ];

  const pointsSystem = [
    "For each White or Black piece (depending on if you were striker or not) pocketed, you get ONE point.",
    "Covering the queen is required until you get 5 points. Once you have 5 points, COVER for the Queen is NOT required.",
    "For pocketing the Queen, you get 3 points!",
    "For Winning a Game, you get 3 points!",
    "If you pocket the striker, you get -1 point (this is achieved by putting one of your color pieces back on the board at the center or touching or on the top of the existing piece on the center). The placement is chosen by your opponent.",
  ];

  const fouls = [
    "When striker is pocketed",
    "A Striker or any other piece leaves the board",
    "A Player pockets the final piece of their own before Queen is pocketed. (This is GAME over Case)",
    "Breaking any of the striking rules",
    "Your move will end on Foul",
  ];

  return (
    <div className="carrom-rules-container">
      <h1>Carrom Rules & Regulations</h1>
      <section className="rules-section">
        <h2 className="section-title">Tournament Format</h2>
        <ul>
          {tournamentFormat.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="rules-section">
        <h2 className="section-title">Game Details</h2>
        <ul>
          {gameDetails.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="rules-section">
        <h2 className="section-title">Striking Rules</h2>
        <ul>
          {strikingRules.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="rules-section">
        <h2 className="section-title">Points System</h2>
        <ul>
          {pointsSystem.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="rules-section">
        <h2 className="section-title">Fouls</h2>
        <ul>
          {fouls.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CarromRules;
