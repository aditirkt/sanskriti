// components/Rules.js
"use client";

import React, { useState } from "react";

import contestData from "./ContestData"; // Correct import path
import Link from "next/link"; // Import Link from Next.js
import "./css/Rules.css"; // Correct CSS import path

const Rules = () => {
  const [selectedGroup, setSelectedGroup] = useState("all");

  const filterContests = (contests) => {
    if (!Array.isArray(contests)) {
      console.error(
        "Invalid data passed to filterContests. Expected an array:",
        contests
      );
      return [];
    }

    if (selectedGroup === "all") {
      return contests;
    }

    return contests.filter((contest) => {
      if (!contest.rules?.groups) {
        console.warn(`Contest ${contest.name} has no groups defined.`);
        return false;
      }

      return contest.rules.groups.some(
        (group) => group.group === selectedGroup
      );
    });
  };

  const ageGroups = [
    { id: "all", label: "All Groups" },
    { id: "0", label: "Below 5 yrs" },
    { id: "1", label: "5-7 yrs" },
    { id: "2", label: "8-10 yrs" },
    { id: "3", label: "11-14 yrs" },
    { id: "4", label: "15-18 yrs" },
  ];

  return (
    <div className="rules-container">
      <h1 className="page-title">Contest Rules</h1>
      <div className="filter-buttons">
        {ageGroups.map((group) => (
          <button
            key={group.id}
            className={`filter-button ${
              selectedGroup === group.id ? "active" : ""
            }`}
            onClick={() => setSelectedGroup(group.id)}
          >
            {group.label}
          </button>
        ))}
      </div>

      <section className="contest-section">
        <h2 className="section-title">Onstage Contests</h2>
        <div className="contest-grid">
          {filterContests(contestData.onstage).map((contest) => (
            <div key={contest.id} className="contest-card">
              <h3 className="contest-title">{contest.name}</h3>
              {contest.rules.groups && (
                <div className="contest-groups">
                  <h4 className="rules-highlight">Groups:</h4>
                  <ul>
                    {contest.rules.groups.map((group, index) => (
                      <li key={index}>
                        <span>Group {group.group}:</span> {group.description}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {Array.isArray(contest.rules.theme) && (
                <div className="contest-theme">
                  <h4 className="rules-highlight">Themes by Group:</h4>
                  <ul>
                    {contest.rules.theme.map((theme, index) => (
                      <li key={index}>
                        <span>Group {theme.group}:</span> {theme.topic}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="contest-details">
                <p>
                  <span className="rules-highlight">Time Limit:</span>{" "}
                  {contest.rules.timeLimit}
                </p>
                <p>
                  <span className="rules-highlight">Things to Bring:</span>{" "}
                  {contest.rules.thingsToBring}
                </p>
                {contest.rules.remarks && (
                  <p>
                    <span className="rules-highlight">Additional Remarks:</span>
                    {contest.name === "Chess" ? (
                      <span>
                        Chess Kit will be provided.{" "}
                        <Link href="/chess-rules">
                          Chess Rules and Regulations
                        </Link>{" "}
                        apply.
                      </span>
                    ) : contest.name === "Carrom" ? (
                      <span>
                        Carrom Set will be provided.{" "}
                        <Link href="/carrom-rules">
                          Carrom Rules and Regulations
                        </Link>{" "}
                        apply.
                      </span>
                    ) : (
                      contest.rules.remarks
                    )}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {filterContests(contestData.offstage).length > 0 && (
        <section className="contest-section">
          <h2 className="section-title">Offstage Contests</h2>
          <div className="contest-grid">
            {filterContests(contestData.offstage).map((contest) => (
              <div key={contest.id} className="contest-card">
                <h3 className="contest-title">{contest.name}</h3>
                {contest.rules.groups && (
                  <div className="contest-groups">
                    <h4 className="rules-highlight">Groups:</h4>
                    <ul>
                      {contest.rules.groups.map((group, index) => (
                        <li key={index}>
                          <span>Group {group.group}:</span> {group.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {Array.isArray(contest.rules.theme) && (
                  <div className="contest-theme">
                    <h4 className="rules-highlight">Themes by Group:</h4>
                    <ul>
                      {contest.rules.theme.map((theme, index) => (
                        <li key={index}>
                          <span>Group {theme.group}:</span> {theme.topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="contest-details">
                  <p>
                    <span className="rules-highlight">Time Limit:</span>{" "}
                    {contest.rules.timeLimit}
                  </p>
                  <p>
                    <span className="rules-highlight">Things to Bring:</span>{" "}
                    {contest.rules.thingsToBring}
                  </p>
                  {contest.rules.remarks && (
                    <p>
                      <span className="rules-highlight">
                        Additional Remarks:
                      </span>
                      {contest.name === "Chess" ? (
                        <span>
                          Chess Kit will be provided.{" "}
                          <Link href="/chess-rules">
                            Chess Rules and Regulations
                          </Link>{" "}
                          apply.
                        </span>
                      ) : contest.name === "Carrom" ? (
                        <span>
                          Carrom Set will be provided.{" "}
                          <Link href="/carrom-rules">
                            Carrom Rules and Regulations
                          </Link>{" "}
                          apply.
                        </span>
                      ) : (
                        contest.rules.remarks
                      )}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Rules;
