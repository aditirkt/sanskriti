const contestData = {
  onstage: [
    {
      id: 1,
      name: "Fancy Dress",
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
          "Required Props and audio file(submitted by Jan 20th, 2025)",
        remarks: `Upload audio in .MP3 format on Google Drive and share the link to sanskritiRKT@jkyog.org. 
        Submission deadline: Jan 20th, 2025, 11:59 PM CDT. Audio file name and email subject format: 
        Participant Full Name-Contest Name-Group Name. Ensure file access is public.
        No late entries will be considered for the contest. Group category is determined by the eldest kid's age in the group.`,
      },
    },
    {
      id: 5,
      name: "Dance - Solo/Group (Folk)",
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
      rules: {
        groups: [
          { group: "2", description: "8-10 yrs" },
          { group: "3", description: "11-14 yrs" },
          { group: "4", description: "15-18 yrs" },
        ],
        theme: "Classical/Bhajans",
        timeLimit: "3 min",
        thingsToBring: "Respective instrument",
        remarks: "Any musical instrument like veena, sitar, tabla, violin etc.",
      },
    },
    {
      id: 7,
      name: "Shloka Recitation",
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
      rules: {
        groups: [
          { group: "2", description: "8-10 yrs" },
          { group: "3", description: "11-14 yrs" },
          { group: "4", description: "15-18 yrs" },
        ],
        timeLimit: "1-2 min",
        thingsToBring: "NA",
        remarks: `An impromptu speech topic will be provided on the spot.
        All contestants shall receive the same topic of a general nature and shall speak for a maximum of two minutes. 
        The topic shall be of reasonable length, shall not require a detailed knowledge and should lead to an opinion or conclusion.
        When the contest begins, all contestants except the first shall leave the room.
      After their participation, they shall sit in the room until the contest is over.`,
      },
    },
    {
      id: 10,
      name: "Speech",
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
      rules: {
        groups: [
          { group: "1", description: "5-7 yrs" },
          { group: "2", description: "8-10 yrs" },
          { group: "3", description: "11-14 yrs" },
          { group: "4", description: "15-18 yrs" },
        ],
        theme: [
          { group: "1", topic: "Sharing is Caring" },
          { group: "2", topic: "Smile goes a Mile" },
          { group: "3", topic: "Balance in Life" },
          { group: "4", topic: "The Power of Growth Mindset" },
        ],
        timeLimit: "3-4 min",
        thingsToBring:
          "PowerPoint presentation with max 12 slides or Poster board (font big enough for judges to view from distance)",
        remarks: `Upload presentation (.ppt file) to Google Drive and share the link to sanskritiRKT@jkyog.org. 
      Submission deadline: Jan 20th, 2025, 11:59 PM CDT. File name and email subject format: Participant Full Name-Contest Name-Group Name. Ensure file access is public.`,
      },
    },
    {
      id: 12,
      name: "Poster Making",
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
      rules: {
        groups: [
          { group: "1", description: "5-7 yrs" },
          { group: "2", description: "8-10 yrs" },
          { group: "3", description: "11-14 yrs" },
          { group: "4", description: "15-18 yrs" },
        ],
        timeLimit: "30 mins",
        thingsToBring: "Coloring material (paint/color pencils/crayons, etc.)",
        remarks: "Pictures will be provided to color.",
      },
    },
    {
      id: 13,
      name: "Drawing/Painting",
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
        remarks: "Sheet to draw and paint will be provided.",
      },
    },
    {
      id: 14,
      name: "Chalk Art",
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

export default contestData;
