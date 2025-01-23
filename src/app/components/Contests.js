// src/app/components/Contests.js

"use client";

import Link from "next/link";
import React, { useState } from "react";
import "../components/css/Contests.css";

const yogaImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/yoga.JPG`;
const fdImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/fancydress.jpg`;
const sscImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/singing2.jpg`;
const sslImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/singing5.jpg`;
const danceCImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/2.JPG`;
const danceFImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/9.JPG`;
const instrumentImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/violin.jpg`;
const sholkaImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/speech4.jpg`;
const speechImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/speaking3.jpg`;
const ispeechImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/speaking2.jpg`;
const presentationImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/poster8.jpg`;
const posterImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/poster10.jpg`;

const coloringImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/coloring3.jpg`;
const drawingImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/painting.jpg`;
const chalkImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/chalkart.jpg`;
const rangoliImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/rangoli6.jpg`;
const mathqImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/mathquiz.jpg`;
const iqqImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/quiz.jpg`;
const sanskritiqImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/sq.jpg`;
const chessImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/chess2.jpg`;
const carromImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/carrom.jpg`;
const sudokuImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/sudoku.jpg`;

const Contests = () => {
  const [selectedContest, setSelectedContest] = useState(null);

  // Contest Data
  const contests = {
    onstage: [
      {
        id: 1,
        name: "Fancy Dress",
        image: fdImg,
        rules: {
          groups: [
            { group: "0", description: "Below 5 yrs" },
            { group: "1", description: "5-7 yrs" },
            { group: "2", description: "8-10 yrs" },
          ],
          theme: "Indian traditional dresses from different regions of India",
          timeLimit: "1 min",
          thingsToBring: "Required Props",
        },
      },
      {
        id: 2,
        name: "Singing - Solo/Group (Classical)",
        image: sscImg,
        rules: {
          groups: [
            { group: "1", description: "5-7 yrs" },
            { group: "2", description: "8-10 yrs" },
            { group: "3", description: "11-14 yrs" },
            { group: "4", description: "15-18 yrs" },
          ],
          theme: "Classical",
          timeLimit: "7 min (6 mins singing & 1 min: set up & tear down)",
          thingsToBring:
            "Shruthi Box or Karaoke, if required. No accompanying instruments.",
          remarks:
            "Group category is determined by the eldest kid's age in the group.",
        },
      },
      {
        id: 3,
        name: "Singing - Solo/Group (Lite Music)",
        image: sslImg,
        rules: {
          groups: [
            { group: "1", description: "5-7 yrs" },
            { group: "2", description: "8-10 yrs" },
            { group: "3", description: "11-14 yrs" },
            { group: "4", description: "15-18 yrs" },
          ],
          theme: "Lite Music (Bhajans/Devotional songs)",
          timeLimit: "5 min (4 mins singing & 1 min: set up & tear down)",
          thingsToBring:
            "Shruthi Box or Karaoke, if required. No accompanying instruments.",
          remarks:
            "Group category is determined by the eldest kid's age in the group.",
        },
      },
      {
        id: 4,
        name: "Dance - Solo/Group (Classical)",
        image: danceCImg,
        rules: {
          groups: [
            { group: "1", description: "5-7 yrs" },
            { group: "2", description: "8-10 yrs" },
            { group: "3", description: "11-14 yrs" },
            { group: "4", description: "15-18 yrs" },
          ],
          theme: "Classical",
          timeLimit: "Solo: 4 min, Group: 5 min",
          thingsToBring:
            "Required Props and audio file (submitted by Jan 20th, 2025)",
          remarks: `\nUpload audio in .MP3 format on Google Drive and share the link to sanskritiRKT@jkyog.org.
        \nSubmission deadline: Jan 20th, 2025, 11:59 PM CDT. \nAudio file name and email subject format: 
        \nParticipant Full Name-Contest Name-Group Name. Ensure file access is public.
        \nNo late entries will be considered for the contest. Group category is determined by the eldest kid's age in the group. `,
        },
      },
      {
        id: 5,
        name: "Dance - Solo/Group (Folk)",
        image: danceFImg,
        rules: {
          groups: [
            { group: "1", description: "5-7 yrs" },
            { group: "2", description: "8-10 yrs" },
            { group: "3", description: "11-14 yrs" },
            { group: "4", description: "15-18 yrs" },
          ],
          theme: "Folk",
          timeLimit: "Solo: 4 min, Group: 5 min",
          thingsToBring:
            "Required Props and audio file (submitted by Jan 20th, 2025)",
          remarks: `Upload audio in .MP3 format on Google Drive and share the link to sanskritiRKT@jkyog.org. 
        Submission deadline: Jan 20th, 2025, 11:59 PM CDT. Audio file name and email subject format: 
        Participant Full Name-Contest Name-Group Name. Ensure file access is public. 
        No late entries will be considered for the contest. Group category is determined by the eldest kid's age in the group.`,
        },
      },
      {
        id: 6,
        name: "Instrument Playing",
        image: instrumentImg,
        rules: {
          groups: [
            { group: "2", description: "8-10 yrs" },
            { group: "3", description: "11-14 yrs" },
            { group: "4", description: "15-18 yrs" },
          ],
          theme: "Classical/Bhajans",
          timeLimit: "3 min",
          thingsToBring: "Respective instrument",
          remarks:
            "Any musical instrument like veena, sitar, tabla, violin etc.",
        },
      },
      {
        id: 7,
        name: "Shloka Recitation",
        image: sholkaImg,
        rules: {
          groups: [
            { group: "1", description: "5-7 yrs" },
            { group: "2", description: "8-10 yrs" },
            { group: "3", description: "11-14 yrs" },
            { group: "4", description: "15-18 yrs" },
          ],
          theme: "Any Sanskrit Shlokas or verses from Hindu Scriptures",
          timeLimit: "3 min",
          thingsToBring: "Bring 3 printed copies of the shloka/verse",
          remarks: `Upload shloka/verse as a .pdf file to Google Drive and share the link to sanskritiRKT@jkyog.org. 
        Submission deadline: Jan 20th, 2025, 11:59 PM CDT. File name and email subject format: Participant Full Name-Contest Name-Group Name. Ensure file access is public.`,
        },
      },

      {
        id: 8,
        name: "Yoga",
        image: yogaImg,
        rules: {
          groups: [
            { group: "1", description: "5-7 yrs" },
            { group: "2", description: "8-10 yrs" },
            { group: "3", description: "11-14 yrs" },
            { group: "4", description: "15-18 yrs" },
          ],
          theme: "Any Yogasan/Pranayams",
          timeLimit: "3 min",
          thingsToBring: "Bring your own Yoga Mat",
          remarks: `If you want background music to be played, upload an audio file in .MP3 format to Google Drive and share the link to sanskritiRKT@jkyog.org. 
      Submission deadline: Jan 20th, 2025, 11:59 PM CDT. File name and email subject format: Participant Full Name-Contest Name-Group Name. Ensure file access is public.`,
        },
      },
      {
        id: 9,
        name: "Impromptu Speech",
        image: ispeechImg,
        rules: {
          groups: [
            { group: "2", description: "8-10 yrs" },
            { group: "3", description: "11-14 yrs" },
            { group: "4", description: "15-18 yrs" },
          ],
          timeLimit: "1-2 min",
          thingsToBring: "NA",
          remarks: `An impromptu speech topic will be provided on the spot.\n 
          All contestants shall receive the same topic of a general nature and shall speak for a maximum of two minutes. 
          The topic shall be of reasonable length, shall not require a detailed knowledge and should lead to an opinion or conclusion.
          When the contest begins, all contestants except the first shall leave the room.
          After their participation, they shall sit in the room until the contest is over.`,
        },
      },
      {
        id: 10,
        name: "Speech",
        image: speechImg,
        rules: {
          groups: [
            { group: "1", description: "5-7 yrs" },
            { group: "2", description: "8-10 yrs" },
            { group: "3", description: "11-14 yrs" },
            { group: "4", description: "15-18 yrs" },
          ],
          theme: [
            { group: "1", topic: "My Favorite Vacation" },
            { group: "2", topic: "If I had One Superpower" },
            { group: "3", topic: "The Place That Inspires Me the Most" },
            { group: "4", topic: "The Impact of Technology on Society" },
          ],
          timeLimit: "2-4 min",
          thingsToBring: "NA",
          remarks: "NA",
        },
      },
      {
        id: 11,
        name: "Presentation",
        image: presentationImg,
        rules: {
          groups: [
            { group: "1", description: "5-7 yrs" },
            { group: "2", description: "8-10 yrs" },
            { group: "3", description: "11-14 yrs" },
            { group: "4", description: "15-18 yrs" },
          ],
          theme: [
            { group: "1", topic: "sharing is Caring" },
            { group: "2", topic: "Smile goes a Mile" },
            { group: "3", topic: "Balance in Life" },
            { group: "4", topic: "The Power of Growth Mindset" },
          ],
          timeLimit: "3-4 min",
          thingsToBring:
            "PowerPoint presentation with max 12 slides or Poster board",
          remarks: `Upload presentation (.ppt file) to Google Drive and share the link to sanskritiRKT@jkyog.org. 
      Submission deadline: Jan 20th, 2025, 11:59 PM CDT. File name and email subject format: Participant Full Name-Contest Name-Group Name. Ensure file access is public.`,
        },
      },
      {
        id: 12,
        name: "Poster Making",
        image: posterImg,
        rules: {
          groups: [
            { group: "1", description: "5-7 yrs" },
            { group: "2", description: "8-10 yrs" },
            { group: "3", description: "11-14 yrs" },
            { group: "4", description: "15-18 yrs" },
          ],
          theme: "Spirit of Life",
          timeLimit: "45 min to make the poster; 2-3 min to present",
          thingsToBring:
            'Poster board (22"X28"), Poster making material (markers, pencil, glue, scissors, construction papers, etc.',
          remarks: [
            "All contestants will get 45 mins to create the poster with the materials they brought.",
            "They will present the poster in front of the audience & judges.",
          ],
        },
      },
    ],
    offstage: [
      {
        id: 12,
        name: "Coloring",
        image: coloringImg,
        rules: {
          groups: [
            { group: "1", description: "5-7 yrs" },
            { group: "2", description: "8-10 yrs" },
            { group: "3", description: "11-14 yrs" },
            { group: "4", description: "15-18 yrs" },
          ],
          timeLimit: "30 mins",
          thingsToBring:
            "Coloring material (paint/color pencils/crayons, etc.)",
          remarks: "Pictures will be provided to color.",
        },
      },
      {
        id: 13,
        name: "Drawing/Painting",
        image: drawingImg,
        rules: {
          groups: [
            { group: "1", description: "5-7 yrs" },
            { group: "2", description: "8-10 yrs" },
            { group: "3", description: "11-14 yrs" },
            { group: "4", description: "15-18 yrs" },
          ],
          theme: [
            { group: "1", topic: "One Earth One Family" },
            { group: "2", topic: "Health is Wealth" },
            { group: "3", topic: "My Dream World" },
            { group: "4", topic: "Balance in Life" },
          ],

          timeLimit: "90 mins",
          thingsToBring:
            "Pencil, sharpener, eraser, coloring material (watercolors, acrylic paints, color pencils, etc.), paint brushes",
          remarks: "Sheet to draw/paint will be provided.",
        },
      },
      {
        id: 14,
        name: "Chalk Art",
        image: chalkImg,
        rules: {
          groups: [
            { group: "1", description: "5-7 yrs" },
            { group: "2", description: "8-10 yrs" },
            { group: "3", description: "11-14 yrs" },
            { group: "4", description: "15-18 yrs" },
          ],
          theme: "Spirit of Life",
          timeLimit: "60 mins",
          thingsToBring:
            "Washable Sidewalk Chalk (different colors), rag (to erase), etc.",
          remarks: `~18 x 18 inches sidewalk to create the art (If weather is not conducive, black construction paper will be provided).`,
        },
      },
      {
        id: 15,
        name: "Rangoli",
        image: rangoliImg,
        rules: {
          groups: [
            { group: "2", description: "8-10 yrs" },
            { group: "3", description: "11-14 yrs" },
            { group: "4", description: "15-18 yrs" },
          ],
          theme: "Spirit of Life",
          timeLimit: "60 mins",
          thingsToBring:
            "All necessary supplies for creating Rangoli (washable material: rice powder, Rangoli powder, flowers, etc.), rag (to erase)",
          remarks: `~18 x 18 inches sidewalk to create the Rangoli (If weather is not conducive, a poster board will be provided).`,
        },
      },
      {
        id: 16,
        name: "Sanskriti Quiz",
        image: sanskritiqImg,
        rules: {
          groups: [
            { group: "1", description: "5-7 yrs" },
            { group: "2", description: "8-10 yrs" },
            { group: "3", description: "11-14 yrs" },
            { group: "4", description: "15-18 yrs" },
          ],
          theme: [
            {
              group: "1",
              topic: "My Best Friend Krishna, Festivals of India",
            },
            { group: "2", topic: "Ramayan, Indian Symbols" },
            { group: "3", topic: "Mahabharat, Dances of India" },
            { group: "4", topic: "Essence of Hinduism, Saints of India" },
          ],
          timeLimit: "20 mins",
          thingsToBring: "Pencil, sharpener, eraser",
          remarks: "Worksheet will be provided.",
        },
      },
      {
        id: 17,
        name: "Math Quiz",
        image: mathqImg,
        rules: {
          groups: [
            { group: "1", description: "5-7 yrs" },
            { group: "2", description: "8-10 yrs" },
            { group: "3", description: "11-14 yrs" },
            { group: "4", description: "15-18 yrs" },
          ],
          theme: [
            { group: "1", topic: "Addition & Subtraction" },
            { group: "2", topic: "Multiplication & Division" },
            { group: "3", topic: "Fractions & Decimals" },
            { group: "4", topic: "Algebra & Probability" },
          ],
          timeLimit: "20 mins",
          thingsToBring: "Pencil, sharpener, eraser",
          remarks: "Worksheet will be provided.",
        },
      },
      {
        id: 18,
        name: "IQ Quiz",
        image: iqqImg,
        rules: {
          groups: [
            { group: "1", description: "5-7 yrs" },
            { group: "2", description: "8-10 yrs" },
            { group: "3", description: "11-14 yrs" },
            { group: "4", description: "15-18 yrs" },
          ],
          timeLimit: "20 mins",
          thingsToBring: "Pencil, sharpener, eraser",
          remarks: "Worksheet will be provided.",
        },
      },
      {
        id: 19,
        name: "Sudoku",
        image: sudokuImg,
        rules: {
          groups: [
            { group: "1", description: "5-7 yrs" },
            { group: "2", description: "8-10 yrs" },
            { group: "3", description: "11-14 yrs" },
            { group: "4", description: "15-18 yrs" },
          ],
          timeLimit: "20 mins",
          thingsToBring: "Pencil, sharpener, eraser",
          remarks: "Sudoku Sheet will be provided.",
        },
      },
      {
        id: 20,
        name: "Chess",
        image: chessImg,
        rules: {
          groups: [
            { group: "1 & 2", description: "5-10 yrs" },
            { group: "3 & 4", description: "11-18 yrs" },
          ],
          timeLimit: "Not specified",
          thingsToBring: "NA",
          remarks:
            "Chess Kit will be provided. Chess Rules and Regulations apply.",
        },
      },
      {
        id: 21,
        name: "Carrom",
        image: carromImg,
        rules: {
          groups: [
            { group: "1 & 2", description: "5-10 yrs" },
            { group: "3 & 4", description: "11-18 yrs" },
          ],
          timeLimit: "Not specified",
          thingsToBring: "NA",
          remarks:
            "Carrom Set will be provided. Carrom Rules and Regulations apply.",
        },
      },
    ],
  };

  const handleContestClick = (contest) => {
    setSelectedContest(contest);
  };

  const closeContestModal = () => {
    setSelectedContest(null);
  };

  const renderGroups = (groups) => {
    if (Array.isArray(groups)) {
      return groups.map((group, index) => (
        <li key={index}>
          {typeof group === "object"
            ? // Safe to use `window` or `document` or `object`
              `Group ${group.group}: ${group.description}`
            : group}
        </li>
      ));
    }
    return null;
  };

  const renderTheme = (theme) => {
    if (Array.isArray(theme)) {
      return theme.map((t, index) => (
        <li key={index}>{`Group ${t.group}: ${t.topic || t.description}`}</li>
      ));
    }
    return <li>{theme}</li>;
  };

  return (
    <section className="contests-section">
      <div className="container-contests">
        <h1>List of Contests</h1>
        <h4>
          Exciting In-Person Contests Tailored for Kids and Youth (Upto 18
          years)!
        </h4>

        {/* Contests Side by Side */}
        <div className="contests-container">
          <div className="onstage-container">
            <h2>Onstage Contests</h2>
            <ul className="contest-list">
              {contests.onstage.map((contest) => (
                <li
                  key={contest.id}
                  className="contest-item"
                  onClick={() => handleContestClick(contest)}
                >
                  {contest.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="offstage-container">
            <h2>Offstage Contests</h2>
            <ul className="contest-list">
              {contests.offstage.map((contest) => (
                <li
                  key={contest.id}
                  className="contest-item"
                  onClick={() => handleContestClick(contest)}
                >
                  {contest.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contest Modal for Contest Details */}
        {selectedContest && (
          <div className="contest-modal-overlay" onClick={closeContestModal}>
            <div
              className="contest-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-button" onClick={closeContestModal}>
                &times;
              </button>
              <h2>{selectedContest.name}</h2>
              <div className="contest-image-container">
                <img
                  src={selectedContest.image}
                  alt={selectedContest.name}
                  width={500}
                  height={300} // adjust width and height as needed
                  className="img-fluid"
                />
              </div>
              {/* Groups Section */}
              {selectedContest.rules.groups && (
                <div>
                  <h3 className="section-title">Groups:</h3>
                  <ul className="theme-list">
                    {renderGroups(selectedContest.rules.groups)}
                  </ul>
                </div>
              )}

              {/* Theme Section */}
              {selectedContest.rules.theme && (
                <div>
                  <h3 className="section-title">Theme:</h3>
                  <ul className="theme-list">
                    {renderTheme(selectedContest.rules.theme)}
                  </ul>
                </div>
              )}

              {/* Additional Rules */}
              <h3 className="section-title">Contest Details:</h3>
              <ul className="theme-list">
                <li>Time Limit: {selectedContest.rules.timeLimit}</li>
                <li>Things to Bring: {selectedContest.rules.thingsToBring}</li>
                {selectedContest.rules.remarks && (
                  <li>
                    Additional Remarks:{" "}
                    {selectedContest.name === "Chess" ? (
                      <span>
                        Chess Kit will be provided.{" "}
                        <Link
                          href={`${process.env.NEXT_PUBLIC_IMAGE_URL}chess-rules`}
                        >
                          Chess Rules and Regulations
                        </Link>
                        apply.
                      </span>
                    ) : selectedContest.name === "Carrom" ? (
                      <span>
                        Carrom Set will be provided.{" "}
                        <Link
                          href={`${process.env.NEXT_PUBLIC_IMAGE_URL}carrom-rules`}
                        >
                          Carrom Rules and Regulations
                        </Link>
                        apply.
                      </span>
                    ) : (
                      selectedContest.rules.remarks
                    )}
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}
        <div className="contest-rules">
          <p>
            Read the rules for the various contests{" "}
            <Link href={`${process.env.NEXT_PUBLIC_IMAGE_URL}all-rules`}>
              here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contests;
