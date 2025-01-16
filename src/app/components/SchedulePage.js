import React, { useState } from "react";
import "./css/SchedulePage.css";
import {
  FaMicrophone,
  FaPaintBrush,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

// Reusable BulletHeader component
const BulletHeader = ({ text, children }) => (
  <span className="bullet-header">
    {text}: <span className="bullet-content">{children}</span>
  </span>
);

const SchedulePage = () => {
  const [openDay, setOpenDay] = useState(null);

  const toggleDay = (day) => {
    setOpenDay(openDay === day ? null : day);
  };
  // Full 3-day schedule
  const schedule = {
    Day1: {
      title: "Friday - 24th Jan",
      onStage: [
        {
          event: "Instrument Playing",
          location: "CICE 1st Floor Hall",
          time: "5:30 PM",
        },
        {
          event: "Prepared Speech (Group 1 & 2*)",
          location: "CICE 2nd Floor Hall",
          time: "5:30 PM",
        },
        { event: "Presentation", location: "Wellness Center", time: "5:30 PM" },
        {
          event: "Impromptu Speech",
          location: "Wellness Center",
          time: "7:45 PM",
        },
        {
          event: "Fancy Dress",
          location: "Temple 2nd Floor Prayer Hall",
          time: "5:30 PM",
        },
        {
          event: "Yoga",
          location: "Temple 2nd Floor Prayer Hall",
          time: "6:30 PM",
        },
        {
          event: "Aarti",
          location: "Temple 2nd Floor Prayer Hall",
          time: "7:00 PM",
        },
      ],
      offStage: [
        {
          event: "Coloring",
          location: "Wellness Center",
          time: "5:30 PM - 7:30 PM",
        },
        {
          event: "Drawing/Painting",
          location: "Wellness Center",
          time: "5:30 PM - 8:30 PM",
        },
        {
          event: "Chalk Art",
          location: "Wellness Center",
          time: "5:30 PM - 7:30 PM",
        },
        {
          event: "Math Quiz",
          location: "Wellness Center",
          time: "5:30 PM - 7:30 PM",
        },
        {
          event: "Sanskriti Quiz",
          location: "Wellness Center",
          time: "5:30 PM - 7:30 PM",
        },
        {
          event: "IQ Quiz",
          location: "Wellness Center",
          time: "5:30 PM - 7:30 PM",
        },
        {
          event: "Sudoku",
          location: "Wellness Center",
          time: "5:30 PM - 7:30 PM",
        },
      ],
      rules: [
        "Check-in for all Off-Stage/Walk-in contest opens at 5:00 pm.",
        "Entry to walk-in closes at 7:00 pm.",
        "Check-in for each On-Stage contest opens 30 mins prior to the start of the contest.",
        "Contestants should report 15 mins prior to contest start time at contest area for all onstage scheduled contests.",
        "Contestants may not leave the contest area until their group/category has completed their performance.",
      ],
    },
    Day2: {
      title: "Saturday - 25th Jan",
      onStage: [
        {
          event: "Solo & Group Dance (Classical: Group 1 & 3*)",
          location: "CICE 1st Floor Hall",
          time: "9:30 AM",
        },
        {
          event: "Solo & Group Singing (Classical: Group 2*)",
          location: "Temple 2nd Floor Prayer Hall",
          time: "9:30 AM",
        },
        {
          event: "Solo & Group Singing (Lite Music: Group 1*)",
          location: "CICE 2nd Floor Hall",
          time: "9:30 AM",
        },
        {
          event: "Solo & Group Singing (Lite Music: Group 3*)",
          location: "CICE 2nd Floor Hall",
          time: "10:30 AM",
        },
        {
          event: "Break For Aarti",
          location: "Temple 2nd Floor Prayer Hall",
          time: "12:30 PM",
        },
        {
          event: "Solo & Group Dance (Classical: Group 2*)",
          location: "CICE 1st Floor Hall",
          time: "1:30 PM",
        },
        {
          event: "Solo & Group Dance (Classical: Group 4*)",
          location: "CICE 1st Floor Hall",
          time: "3:30 PM",
        },
        {
          event: "Solo & Group Singing (Lite Music: Group 2*)",
          location: "CICE 2nd Floor Hall",
          time: "1:30 PM",
        },
        {
          event: "Solo & Group Singing (Lite Music: Group 4*)",
          location: "CICE 2nd Floor Hall",
          time: "3:30 PM",
        },
        {
          event: "Solo & Group Singing (Classical: Group 3*)",
          location: "Temple 2nd Floor Prayer Hall",
          time: "2:00 PM",
        },
        {
          event: "Aarti",
          location: "Temple 2nd Floor Prayer Hall",
          time: "7:00 PM",
        },
      ],
      offStage: [
        {
          event: "Coloring",
          location: "Wellness Center",
          time: "9:30 AM - 7:00 PM",
        },
        {
          event: "Drawing/Painting",
          location: "Wellness Center",
          time: "9:30 AM - 8:00 PM",
        },
        {
          event: "Chalk Art",
          location: "Wellness Center",
          time: "9:30 AM - 7:00 PM",
        },
        {
          event: "Math Quiz",
          location: "Wellness Center",
          time: "9:30 AM - 7:00 PM",
        },
        {
          event: "Sanskriti Quiz",
          location: "Wellness Center",
          time: "9:30 AM - 7:00 PM",
        },
        {
          event: "IQ Quiz",
          location: "Wellness Center",
          time: "9:30 AM - 7:00 PM",
        },
        {
          event: "Sudoku",
          location: "Wellness Center",
          time: "9:30 AM - 7:00 PM",
        },
        {
          event: "Chess (Group 1 & 2*)",
          location: "Wellness Center",
          time: "1:30 PM",
        },
        {
          event: "Carrom",
          location: "Wellness Center",
          time: "4:30 PM",
        },
      ],
      rules: [
        "Check-in for all Off-Stage/Walk-in contests opens at 9:00 am.",
        "Entry to walk-in closes at 6:30 pm.",
        "Check-in for each On-Stage contests opens 30 mins prior to the start of the contest.",
        "Contestants should report 15 mins prior to contest start time at contest area for all onstage scheduled contests.",
        "Contestants may not leave the contest area until their group/category has completed their performance.",
      ],
    },
    Day3: {
      title: "Sunday - 26th Jan",
      onStage: [
        {
          event: "Solo & Group Dance (Folk)",
          location: "CICE 1st Floor Hall",
          time: "9:30 AM",
        },
        {
          event: "Prepared Speech (Group 3 & 4*)",
          location: "CICE 2nd Floor Hall",
          time: "9:30 AM",
        },

        {
          event: "Break For Aarti",
          location: "Temple 2nd Floor Prayer Hall",
          time: "12:30 PM",
        },
        {
          event: "Shloka/Verse Recitation",
          location: "CICE 1st Floor",
          time: "1:30 PM",
        },
        {
          event: "Solo & Group Singing (Classical: Group 1 & 4*)",
          location: "CICE 2nd Floor",
          time: "1:30 PM",
        },
        ,
      ],
      offStage: [
        { event: "Rangoli", location: "Wellness Center", time: "9:30 AM" },

        {
          event: "Poster Making",
          location: "CICE 2nd Floor",
          time: "10:30 AM",
        },
        {
          event: "Chess (Group 3 & 4*)",
          location: "Wellness Center",
          time: "1:30 PM",
        },
      ],
      rules: [
        "Check-in for each On-Stage contest opens 30 mins prior to the start of the contest.",
        "Contestants should report 15 mins prior to contest start time at contest area for all onstage scheduled contests.",
        "Contestants may not leave the contest area until their group/category has completed their performance.",
      ],
    },
  };

  const groups =
    "* Group 0 (0-4yrs); Group 1 (5-7 yrs); Group 2 (8-10yrs); Group 3 (11-14 yrs); Group 4 (15-18 yrs)";

  const mandate =
    "IT IS MANDATORY TO WEAR THE WRIST BAND IN ORDER TO PARTICIPATE AND WATCH THE PERFORMANCES.";
  return (
    <section className="schedule-section">
      <div className="schedule-container">
        <h1 className="event-title">When</h1>
        <ul className="info-list">
          <li>
            <BulletHeader text="Deadline to Register">
              <ul className="sub-list">
                <li>
                  <span>10th Jan 2025</span> for Scheduled On-Stage & Off-Stage
                  Contests
                </li>
                <li>
                  <span>25th Jan 2025</span> for Walk-In/ Off-Stage Contests
                </li>
              </ul>
            </BulletHeader>
          </li>
          <li>
            <BulletHeader text="Date">24th – 26th Jan, 2025</BulletHeader>
          </li>
          <li>
            <BulletHeader text="Competition Days" />
            <ul className="sub-list">
              <li>24th Jan: 5 pm - 9 pm</li>
              <li>25th Jan: 9 am - 9 pm</li>
              <li>26th Jan: 10 am - 5 pm</li>
            </ul>
          </li>
          <li>
            <BulletHeader text="Award Ceremony">
              2nd Feb, 2025 at 5 PM (1st Floor Hall, CICE)
            </BulletHeader>
          </li>
        </ul>
        <BulletHeader text="Schedule"></BulletHeader>

        <div className="day-card-stack">
          {Object.keys(schedule).map((dayKey, index) => (
            <div
              key={index}
              className={`day-card ${openDay === dayKey ? "open" : ""}`}
              onClick={() => toggleDay(dayKey)}
              role="button"
              tabIndex={0}
              aria-expanded={openDay === dayKey}
            >
              <h3 className="day-card-title">{schedule[dayKey].title}</h3>
              {openDay === dayKey && (
                <div className="day-card-details">
                  <div className="contest-type">
                    <FaMicrophone /> On-Stage Contests
                  </div>
                  {schedule[dayKey].onStage.length > 0 ? (
                    <ul>
                      {schedule[dayKey].onStage.map((event, idx) => (
                        <li key={idx}>
                          <span className="text-orange">{event.event}</span>{" "}
                          <br />
                          <span className="text-orange">
                            <FaMapMarkerAlt />
                          </span>{" "}
                          {event.location}{" "}
                          <span className="text-orange">
                            <FaClock />
                          </span>{" "}
                          {event.time}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No on-stage contests for this day.</p>
                  )}
                  <div className="contest-type">
                    <FaPaintBrush /> Off-Stage Contests
                  </div>
                  {schedule[dayKey].offStage.length > 0 ? (
                    <ul>
                      {schedule[dayKey].offStage.map((event, idx) => (
                        <li key={idx}>
                          <span className="text-orange">{event.event} </span>
                          <br />
                          <span className="text-orange">
                            <FaMapMarkerAlt />
                          </span>{" "}
                          {event.location}{" "}
                          <span className="text-orange">
                            <FaClock />
                          </span>{" "}
                          {event.time}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No off-stage contests for this day.</p>
                  )}
                  {schedule[dayKey].rules &&
                  schedule[dayKey].rules.length > 0 ? (
                    <ul className="sub-list">
                      {schedule[dayKey].rules.map((rule, idx) => (
                        <li key={idx}>{rule}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>No rules available for this day.</p>
                  )}
                  <div className="group-display">{groups}</div>
                  <div>{mandate}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchedulePage;
