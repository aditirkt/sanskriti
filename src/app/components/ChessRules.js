"use client";
import React from "react";

import "../components/css/ChessRules.css";

// Enhanced utility function to render list items with conditional formatting
const renderList = (items) =>
  items.map((item, index) => {
    if (
      item.includes("Type:") ||
      item.includes("# Of Rounds:") ||
      item.includes("Time Format:") ||
      item.includes("Win:") ||
      item.includes("Draw:") ||
      item.includes("Loss:")
    ) {
      const split = item.split(":");
      return (
        <li key={index}>
          <span className="highlight">{split[0]}:</span> {split[1]}
        </li>
      );
    } else if (item.includes("Sections:")) {
      return (
        <li key={index}>
          <span className="highlight">{item}</span>
          <ul className="sublist">
            <li>Group 1: Age between 5 to 10</li>
            <li>Group 2: Age between 11 to 18</li>
          </ul>
        </li>
      );
    } else if (
      item.includes("Touch & Move") ||
      item.includes("Maintain Silence") ||
      item.startsWith("Illegal move:")
    ) {
      // Handle "Illegal move" as a special case with nested list items
      if (item.startsWith("Illegal move:")) {
        return (
          <li key={index}>
            <span className="highlight">Illegal move: </span> if you make an
            illegal move, penalty of 2 mins shall apply. Some examples of
            illegal move:
            <ul className="sublist">
              <li>Moving another piece while King is in check</li>
              <li>Moving a piece resulting in check</li>
              <li>Moving a piece to a square it cannot move</li>
            </ul>
          </li>
        );
      }
      // Highlight specific terms with a custom class
      if (item.startsWith("Maintain Silence:")) {
        return (
          <li key={index}>
            <span className="highlight">Maintain Silence: </span> If you are
            found talking, you may be given a warning. If you have been caught
            talking again, you may receive 2 min penalty from TD. Multiple
            violations on this may result in loss of round/ removed from the
            tournament.
          </li>
        );
      }
    }
    return <li key={index}>{item}</li>;
  });

const ChessRules = () => {
  const tournamentFormat = [
    "Type: Swiss",
    "# Of Rounds: 5 rounds",
    "Time Format: G10|2|2",
    "Sections:",
    "Writing Notations is voluntary.",
  ];

  const Start = [
    "First round of pairings will be determined based on the player’s rating (if applicable). All subsequent round pairings are decided based on the standings.",
  ];

  const gameResults = ["Win: 1 point", "Draw: 0.5 point", "Loss: 0 point"];

  const touchMove = [
    "Touch & Move Rule will be observed.",
    "If you touch a piece, you HAVE to move a piece to any legal square.",
    "If the piece you touched can NOT move anywhere, then you can move any other piece and take 2 mins penalty.",
    "Your move is completed once clock is pressed.",
    "When castling, use only one hand and move your king first. Otherwise, your opponent MAY ask you to move ONLY the rook, if you touch your rook first, and then king, to complete castling.",
  ];

  const gameplayRules = [
    "Each player must press the clock with the same hand that moves the pieces, use one hand to both to move the pieces and to press the clock. First violation will be a warning and second violation will result in loss of 2 min Penalty. TD and/ or TD Assistants can only assign this penalty.",
    "An attack on King MUST be announced (Announce ‘Check’ in soft voice). An unannounced check that your opponent does not handle will NOT result in an illegal move.",
    "Illegal move: if you make an illegal move, penalty of 2 mins shall apply. Some examples of illegal move:",
    " If a player touches one piece, then moves another piece and  presses the clock, the opponent may press the player's clock to force the player to move the piece he/she touched.",
    "Chess sets and clocks will be available.",
    "Maintain Silence: If you are found talking, you may be given a warning. If you have been caught talking again, you may receive 2 min penalty from TD. Multiple violations on this may result in loss of round/ removed from the tournament.",
  ];

  const otherRules = [
    "The decision of the tournament director (TD) is final. Tournament officials may seek guidance or advice from other tournament officials.",
    "Players are not required to write down their moves.",
    "Players are responsible to be ready to play at the beginning of a round and are expected to be within a reasonable range of the playing area and pay attention for when their group is called to play.",
    "Players who are not present at the start of around may have their chess clocks started.",
    "If a player has any questions concerning the rules, they may raise their hand and talk to a tournament official. In case of any dispute or claim, stop the clocks and summon a tournament official.",
    "Only the two players in a game may make claims concerning their game. For example, players may not call touch move or indicate that time has expired in someone else’s game. One exception to this rule is that tournament officials may point out illegal moves, but only when both players have at least 2 minutes remaining.",
    "It is forbidden to distract or annoy the opponent in any way whatsoever. This includes talking and repeatedly offering a draw.",
    "Spectators: Limited count Spectators will be allowed viewing of the game(s), however, in case of there is a huge crowd gathering around specific areas, then TD might ask you to move elsewhere or leave the tournament room.",
    "It is forbidden for players to have cell phones, or other electronic communication, computer, or media devices in the playing area (even if turned off). Spectators will have their electronic devices on silent.",
    "Good sportsmanship is expected of all players and will make the event a more enjoyable experience for everyone involved. Shaking hands with your opponent before and after a game is customary.",
  ];

  return (
    <div className="chess-rules-container">
      <h1 className="rules-title">Chess Rules & Regulations</h1>
      <section className="rules-section">
        <h2 className="section-title">Tournament Format</h2>
        <ul>{renderList(tournamentFormat)}</ul>
      </section>

      <section className="rules-section">
        <h2 className="section-title">First Round Pairings</h2>
        <ul>{renderList(Start)}</ul>
      </section>
      <section className="rules-section">
        <h2 className="section-title">Game Results</h2>
        <ul>{renderList(gameResults)}</ul>
      </section>
      <section className="rules-section">
        <h2 className="section-title">Touch & Move Rule</h2>
        <ul>{renderList(touchMove)}</ul>
      </section>
      <section className="rules-section">
        <h2 className="section-title">Gameplay Rules</h2>
        <ul>{renderList(gameplayRules)}</ul>
      </section>
      <section className="rules-section">
        <h2 className="section-title">Other Rules</h2>
        <ul>{renderList(otherRules)}</ul>
      </section>
    </div>
  );
};

export default ChessRules;
