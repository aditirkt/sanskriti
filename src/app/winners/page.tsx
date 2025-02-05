"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/css/index.css";
import "../components/css/Winners.css";

import { FaChevronDown, FaArrowUp } from "react-icons/fa";

type Winner = {
  position: string;
  name: string;
};

type Group = {
  groupName: string;
  winners: Winner[];
};

type Contest = {
  contestName: string;
  groups: Group[];
};

// Sample Data (Replace this with API response if needed)
const winnersData: Contest[] = [
  {
    contestName: "Fancy Dress",
    groups: [
      {
        groupName: "Group 0: Below 5 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Rishaan Baid",
          },
          {
            position: "2nd Prize",
            name: "GaganVishnuSai Reddy",
          },
          {
            position: "3rd Prize",
            name: "Vedangan Sriram",
          },
        ],
      },
      {
        groupName: "Group 1: 5-7 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Rishab Naik",
          },
          {
            position: "2nd Prize",
            name: "Abhaya Vivek, DikshithSai Reddy Guntakrindapalli",
          },
          {
            position: "3rd Prize",
            name: "Adhirith Avula",
          },
          {
            position: "Honorable Mention",
            name: "Riyana Kumar",
          },
        ],
      },
      {
        groupName: "Group 2: 8-10 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Surabhya Pedireddy",
          },
          {
            position: "2nd Prize",
            name: "Riddhi Nair",
          },
          {
            position: "3rd Prize",
            name: "Rhea Krishnakumar",
          },
          {
            position: "Honorable Mention",
            name: "Amrit Singh & Manushri Arun",
          },
        ],
      },
    ],
  },
  {
    contestName: "Dance Classical Solo",
    groups: [
      {
        groupName: "Group 1: 5-7 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Anoushka Rajesh",
          },
          {
            position: "2nd Prize",
            name: "Yuvanya Kannadasan",
          },
          {
            position: "3rd Prize",
            name: "AKSHARA POCHAM",
          },
        ],
      },
      {
        groupName: "Group 2: 8-10 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Aksara Vivekanandan",
          },
          {
            position: "2nd Prize",
            name: "Eshitha Subramaniam",
          },
          {
            position: "3rd Prize",
            name: "Sahalya Prabhu, SAITARIKHA GURUSAMY JAYASHREE & Aaradhya Rengaa",
          },
          {
            position: "Honorable Mention",
            name: "Aadya Vasamsetti & Atmikaa Danesh",
          },
        ],
      },
      {
        groupName: "Group 3: 11-14 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Ameya Vimal",
          },
          {
            position: "2nd Prize",
            name: "Keerthana Senthilkumar Kavitha",
          },
          {
            position: "3rd Prize",
            name: "Ashrithaa Mahendran",
          },
          {
            position: "Honorable Mention",
            name: "Sanskriti Shuba Jandhyala, Mahika Chavan, Tarusi Aphale & Keerthi Anandbabu",
          },
        ],
      },
      {
        groupName: "Group 4: 15-18 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Charvi Raju",
          },
          {
            position: "2nd Prize",
            name: "Pragati Vinothkumar",
          },
          {
            position: "3rd Prize",
            name: "Sri Saanvi Chintada",
          },
        ],
      },
    ],
  },
  {
    contestName: "Dance Classical Group",
    groups: [
      {
        groupName: "Group 1: 5-7 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Dancing Gopikas",
          },
          {
            position: "2nd Prize",
            name: "Aigiri Nandini Kirtanam Group",
          },
        ],
      },
      {
        groupName: "Group 2: 8-10 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Nda",
          },
          {
            position: "2nd Prize",
            name: "Mooshika NLK",
          },
          {
            position: "3rd Prize",
            name: "Natyadhwani LittleStars",
          },
        ],
      },
      {
        groupName: "Group 3: 11-14 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Shivoham",
          },
          {
            position: "2nd Prize",
            name: "Navayukti Dance Group",
          },
          {
            position: "3rd Prize",
            name: "Shri Krishna",
          },
          {
            position: "Honorable Mention",
            name: "Tapasya",
          },
        ],
      },
      {
        groupName: "Group 4: 15-18 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Natya Nidhi Dance School",
          },
          {
            position: "2nd Prize",
            name: "Natyadhwani Angels",
          },
        ],
      },
    ],
  },
  {
    contestName: "Dance Folk Solo",
    groups: [
      {
        groupName: "Group 1: 5-7 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Sritoma Datta",
          },
          {
            position: "2nd Prize",
            name: "Shriya Shah,  Senara Baid",
          },
          {
            position: "3rd Prize",
            name: "Aria Soni",
          },
        ],
      },
      {
        groupName: "Group 2: 8-10 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Aara Sahu",
          },
          {
            position: "2nd Prize",
            name: "Srijita Datta",
          },
          {
            position: "3rd Prize",
            name: "Rianshi Bhowmick",
          },
        ],
      },
      {
        groupName: "Group 3: 11-14 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Akshat Mishra",
          },
          {
            position: "2nd Prize",
            name: "Ashrithaa Mahendran",
          },
          {
            position: "3rd Prize",
            name: "Keerthi Anandbabu, Shreya Ghulghule",
          },
        ],
      },
    ],
  },
  {
    contestName: "Dance Folk Group",
    groups: [
      {
        groupName: "Group 1: 5-7 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Nikita's Rockstars",
          },
          {
            position: "2nd Prize",
            name: "Parvati Nandam",
          },
        ],
      },
      {
        groupName: "Group 2: 8-10 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Bombay Chillars",
          },
          {
            position: "2nd Prize",
            name: "Sri Ganesha Group",
          },
          {
            position: "3rd Prize",
            name: "Dancing Disciples team by Abhinaya Performing Arts, and Dazzling Dancers",
          },
        ],
      },
      {
        groupName: "Group 3: 11-14 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Garba Glow",
          },
          {
            position: "2nd Prize",
            name: "Tibrewal & Team",
          },
          {
            position: "3rd Prize",
            name: "Diamond girls, MUFIN Academy- Narasapally and Dynamic Dancers",
          },
        ],
      },
      {
        groupName: "Group 4: 15-18 yrs",
        winners: [
          { position: "Enthusiastic Participant", name: "Dancing Stars" },
        ],
      },
    ],
  },
  {
    contestName: "Presentation",
    groups: [
      {
        groupName: "Group 1: 5-7 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Nilaanika Dinesh",
          },
          {
            position: "2nd Prize",
            name: "Aarav Mahendran",
          },
          {
            position: "3rd Prize",
            name: "Dhruvah",
          },
        ],
      },
      {
        groupName: "Group 2: 8-10 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Rhea Krishnakumar",
          },
          {
            position: "2nd Prize",
            name: "Surabhya Pedireddy",
          },
          {
            position: "3rd Prize",
            name: "Ayansh Singh",
          },
        ],
      },
      {
        groupName: "Group 3: 11-14 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Tiana Malik",
          },
          {
            position: "2nd Prize",
            name: "Saanvi Polishetty",
          },
          {
            position: "3rd Prize",
            name: "Aashritha Kriti Gokarakonda",
          },
          {
            position: "Honorable Mention",
            name: "Srikeerti Sumanam",
          },
        ],
      },

      {
        groupName: "Group 4: 15-18 yrs",
        winners: [
          {
            position: "Enthusiastic Participant",
            name: "Arhan Dwadash Shreni",
          },
        ],
      },
    ],
  },
  {
    contestName: "Speech - Prepared",
    groups: [
      {
        groupName: "Group 1: 5-7 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Senara Baid",
          },
          {
            position: "2nd Prize",
            name: "Aarav Mahendran",
          },
          {
            position: "3rd Prize",
            name: "Meher Sharma",
          },
          {
            position: "Honorable Mention",
            name: "Veer Singla",
          },
        ],
      },
      {
        groupName: "Group 2: 8-10 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Dhwani Pandya",
          },
          {
            position: "2nd Prize",
            name: "Ayansh Singh",
          },
          {
            position: "3rd Prize",
            name: "Surabhya Pedireddy",
          },
          {
            position: "Honorable Mention",
            name: "Deeher Pattanaik & Shivi Gupta",
          },
        ],
      },
      {
        groupName: "Group 3: 11-14 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Saanvi Polishetty",
          },
          {
            position: "2nd Prize",
            name: "Devansh Singh",
          },
          {
            position: "3rd Prize",
            name: "Anesha Singhal",
          },
          {
            position: "Honorable Mention",
            name: "Shaivi Pandya & Shreyaa Krishna",
          },
        ],
      },
      {
        groupName: "Group 4: 15-18 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Arhan Dwadash Shreni",
          },
          {
            position: "2nd Prize",
            name: "Surabhi Gupta",
          },
          {
            position: "3rd Prize",
            name: "Madhurya Pedireddy",
          },
        ],
      },
    ],
  },
  {
    contestName: "Impromptu Speech",
    groups: [
      {
        groupName: "Group 2: 8-10 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Pranav Karthik",
          },
          {
            position: "2nd Prize",
            name: "Rishik",
          },
          {
            position: "3rd Prize",
            name: "Anaira Patnaik",
          },
        ],
      },
      {
        groupName: "Group 3: 11-14 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Saanvi Polishetty",
          },
          {
            position: "2nd Prize",
            name: "Ashrithaa Mahendran",
          },
          {
            position: "3rd Prize",
            name: "Ansh Singla",
          },
          {
            position: "Honorable Mention",
            name: "Aditya Tiwari, Mahi Pemmaraju & Anvita Singhal",
          },
        ],
      },
      {
        groupName: "Group 4: 15-18 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Arhan Dwadash Shreni",
          },
          {
            position: "2nd Prize",
            name: "Devananda Anoop",
          },
          {
            position: "3rd Prize",
            name: "Aditi Srivastava",
          },
        ],
      },
    ],
  },
  {
    contestName: "Poster Making",
    groups: [
      {
        groupName: "Group 1: 5-7 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Nilaanika Dinesh",
          },
          {
            position: "2nd Prize",
            name: "Vedansh Rahul",
          },
          {
            position: "3rd Prize",
            name: "Devansh Purohit",
          },
        ],
      },
      {
        groupName: "Group 2: 8-10 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Anika Shakti",
          },
          {
            position: "2nd Prize",
            name: "Abhaya Arora & Rhea Krishnakumar",
          },
          {
            position: "3rd Prize",
            name: "Reyansh Ayyagari",
          },
        ],
      },
      {
        groupName: "Group 3: 11-14 yrs",
        winners: [
          {
            position: "Enthusiastic Participant",
            name: "Aarush San",
          },
        ],
      },
      {
        groupName: "Group 4: 15-18 yrs",
        winners: [
          {
            position: "Enthusiastic Participant",
            name: "Arhan Dwadash Shreni",
          },
        ],
      },
    ],
  },
  {
    contestName: "Rangoli",
    groups: [
      {
        groupName: "Group 2: 8-10 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Nihira Ayyagari",
          },
          {
            position: "2nd Prize",
            name: "Pranavi Sangram",
          },
          {
            position: "3rd Prize",
            name: "Dhanvi Sangram",
          },
        ],
      },
      {
        groupName: "Group 3: 11-14 yrs",
        winners: [
          {
            position: "Enthusiastic Participant",
            name: "Arshi Agarwal",
          },
        ],
      },
    ],
  },
  {
    contestName: "Coloring",
    groups: [
      {
        groupName: "Group 1: 5-7 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Eesha Paladugu & Riyana Kumar",
          },
          {
            position: "2nd Prize",
            name: "Reva Gupta",
          },
          {
            position: "3rd Prize",
            name: "Tanishka Kattula",
          },
          {
            position: "Honorable Mention",
            name: "Reeyan Pradhan & SANVI CHOUDHARY",
          },
        ],
      },
      {
        groupName: "Group 2: 8-10 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Aashika Bondili",
          },
          {
            position: "2nd Prize",
            name: "Niyati Navaratan",
          },
          {
            position: "3rd Prize",
            name: "Harini Santosh",
          },
          {
            position: "Honorable Mention",
            name: "Saanvi Joshi  & Kenisha Shah",
          },
        ],
      },
      {
        groupName: "Group 3: 11-14 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Sramani Kancharla",
          },
          {
            position: "2nd Prize",
            name: "Suhani Johri & Ashwika Katakam",
          },
          {
            position: "3rd Prize",
            name: "Dwijavanth Govind",
          },
        ],
      },
      {
        groupName: "Group 4: 15-18 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Hasmitha Thatavarthy",
          },
          {
            position: "2nd Prize",
            name: "Saanvi Naik",
          },
        ],
      },
    ],
  },
  {
    contestName: "Chalk Art",
    groups: [
      {
        groupName: "Group 1: 5-7 yrs",
        winners: [
          {
            position: "Enthusiastic Participant",
            name: "Aria Soni",
          },
        ],
      },
      {
        groupName: "Group 2: 8-10 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Anannya Putta",
          },
          {
            position: "2nd Prize",
            name: "Srihitha Vedya Gokarakonda",
          },
        ],
      },
      {
        groupName: "Group 3: 11-14 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Adithya Tirupati",
          },
          {
            position: "2nd Prize",
            name: "Aashritha Kriti Gokarakonda",
          },
        ],
      },
      {
        groupName: "Group 4: 15-18 yrs",
        winners: [
          {
            position: "Enthusiastic Participant",
            name: "Arhan Dwadash Shreni",
          },
        ],
      },
    ],
  },
  {
    contestName: "Drawing",
    groups: [
      {
        groupName: "Group 1: 5-7 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Nilaanika Dinesh",
          },
          {
            position: "2nd Prize",
            name: "Meher Sharma",
          },
          {
            position: "3rd Prize",
            name: "Aarav Mahendran",
          },
          {
            position: "Honorable Mention",
            name: "Vaani Chahal & Rishi Marwaha",
          },
        ],
      },
      {
        groupName: "Group 2: 8-10 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Abhaya Arora",
          },
          {
            position: "2nd Prize",
            name: "Jai Kumar & Aadya Reddy Chamala",
          },
          {
            position: "3rd Prize",
            name: "Sriviji Karthikeyan",
          },
          {
            position: "Honorable Mention",
            name: "Anannya Putta & Adhokshaja Pappu",
          },
        ],
      },
      {
        groupName: "Group 3: 11-14 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Nivaedha Karthik",
          },
          {
            position: "2nd Prize",
            name: "Ashwika Katakam & Madhurya Ratala",
          },
          {
            position: "3rd Prize",
            name: "Aashritha Kriti Gokarakonda",
          },
        ],
      },
      {
        groupName: "Group 4: 15-18 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Madhurya Pedireddy",
          },
          {
            position: "2nd Prize",
            name: "Preeyal Patel",
          },
          {
            position: "3rd Prize",
            name: "Anushree Karnik",
          },
        ],
      },
    ],
  },
  {
    contestName: "Yoga",
    groups: [
      {
        groupName: "Group 1: 5-7 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Sarvagya Saroha",
          },
          {
            position: "2nd Prize",
            name: "Ameya Vivek",
          },
        ],
      },
      {
        groupName: "Group 2: 8-10 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Radhika Agarwal",
          },
          {
            position: "2nd Prize",
            name: "Sri Vibha Srinivasan",
          },
          {
            position: "3rd Prize",
            name: "Parth Singh",
          },
        ],
      },
      {
        groupName: "Group 3: 11-14 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Subramanean Babu Meiyappan",
          },
          {
            position: "2nd Prize",
            name: "Saanvi Anugu",
          },
        ],
      },
    ],
  },
  {
    contestName: "Chess",
    groups: [
      {
        groupName: "Group 1: 5-8 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Dhruvah",
          },
          {
            position: "2nd Prize",
            name: "Jeevan Pagudala, Abhay Santosh, Vikram Bhati, Ajith",
          },
        ],
      },
      {
        groupName: "Group 2: 9-10 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Amogh Subramanian",
          },
          {
            position: "2nd Prize",
            name: "Swaksh Ati, Abhiram Reddy Alla, Harini Santhosh",
          },
        ],
      },
      {
        groupName: "Group 3: 11-12 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Lakshya Inaganti",
          },
          {
            position: "2nd Prize",
            name: "Vyan Daswani",
          },
          {
            position: "3rd Prize",
            name: "Adhvaithram",
          },
        ],
      },
      {
        groupName: "Group 4: 13-18 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Namish Thakkar",
          },
          {
            position: "2nd Prize",
            name: "Arjun Venkatakrishnan, Jaithra Dillibabu",
          },
        ],
      },
    ],
  },
  {
    contestName: "Carrom",
    groups: [
      {
        groupName: "Group 1: 5-10 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Bhavik",
          },
          {
            position: "2nd Prize",
            name: "Bhavikasree Venkatadasari",
          },
          {
            position: "3rd Prize",
            name: "Neel Thakore",
          },
        ],
      },
      {
        groupName: "Group 2: 11-18 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Arjun Venkatakrishnan",
          },
          {
            position: "2nd Prize",
            name: "Hemant Venkatadasari",
          },
          {
            position: "3rd Prize",
            name: "Aarnav Naik",
          },
        ],
      },
    ],
  },
  {
    contestName: "Sanskriti Quiz",
    groups: [
      {
        groupName: "Group 1: 5-7 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "SANVI CHOUDHARY",
          },
        ],
      },
      {
        groupName: "Group 2: 8-10 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Vibhuthi Rajan",
          },
          {
            position: "2nd Prize",
            name: "Aashvi Patel",
          },
          {
            position: "3rd Prize",
            name: "Adhokshaja Pappu",
          },
        ],
      },
      {
        groupName: "Group 3: 11-14 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Srikeerti Sumanam, Aditya Tiwari",
          },
          {
            position: "2nd Prize",
            name: "Suhani Johri",
          },
          {
            position: "3rd Prize",
            name: "Saanvi Patel",
          },
          {
            position: "Honorable Mention",
            name: "Shreya Ghulghule",
          },
        ],
      },
    ],
  },
  {
    contestName: "Maths",
    groups: [
      {
        groupName: "Group 1: 5-7 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Tejas Rajiv",
          },
          {
            position: "2nd Prize",
            name: "Jeevan Pagudala",
          },
          {
            position: "3rd Prize",
            name: "Swara Patel & Ridaan Jain",
          },
          {
            position: "Honorable Mention",
            name: "Devansh Goyal, Megha Rayasam, Chetan Mannava",
          },
        ],
      },
      {
        groupName: "Group 2: 8-10 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Ruthvik Boddapu",
          },
          {
            position: "2nd Prize",
            name: "Dishant Kommireddy",
          },
          {
            position: "3rd Prize",
            name: "Sriram Saigopal",
          },
          {
            position: "Honorable Mention",
            name: "Neel Thakore, Abhiram Reddy Alla",
          },
        ],
      },
      {
        groupName: "Group 3: 11-14 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Guru Chetan Reddy Vemireddy",
          },
          {
            position: "2nd Prize",
            name: "Ajaneesh Matham",
          },
          {
            position: "3rd Prize",
            name: "Vyan Daswani",
          },
          {
            position: "Honorable Mention",
            name: "Aadhya Vivek, Sohna Pasam, Srikeerti Sumanam, Eesha Pansuria & Mahi Pemmaraju",
          },
        ],
      },
      {
        groupName: "Group 4: 15-17 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Devananda Anoop & Anirudh Kidambi",
          },
          {
            position: "2nd Prize",
            name: "Arhan Dwadash Shreni",
          },
          {
            position: "3rd Prize",
            name: "Saanvi Naik",
          },
        ],
      },
    ],
  },
  {
    contestName: "IQ",
    groups: [
      {
        groupName: "Group 1: 5-7 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Tejas Rajiv",
          },
          {
            position: "2nd Prize",
            name: "SANVI CHOUDHARY & Ridaan Jain",
          },
          {
            position: "3rd Prize",
            name: "Srihari Saigopal",
          },
          {
            position: "Honorable Mention",
            name: "Reva Gupta",
          },
        ],
      },
      {
        groupName: "Group 2: 8-10 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Dishant Komireddy",
          },
          {
            position: "2nd Prize",
            name: "Anaira Patnaik & Venya Gudipati",
          },
          {
            position: "3rd Prize",
            name: "Sri Vibha Srinivasan",
          },
          {
            position: "Honorable Mention",
            name: "Sriram Saigopal",
          },
        ],
      },
      {
        groupName: "Group 3: 11-14 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Vyan Daswani",
          },
          {
            position: "2nd Prize",
            name: "Vedant Ramesh",
          },
          {
            position: "3rd Prize",
            name: "Srikeerti Sumanam",
          },
          {
            position: "Honorable Mention",
            name: "Anvita Singhal",
          },
        ],
      },
      {
        groupName: "Group 4: 15-18 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Shritha Repala",
          },
          {
            position: "2nd Prize",
            name: "Devananda Anoop",
          },
          {
            position: "3rd Prize",
            name: "Madhurya Pedireddy",
          },
        ],
      },
    ],
  },
  {
    contestName: "Sudoku",
    groups: [
      {
        groupName: "Group 1: 5-7 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Nivita Soma",
          },
        ],
      },
    ],
  },
  {
    contestName: "Shloka Recitation",
    groups: [
      {
        groupName: "Group 0: Below 5 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Achyuth Sriram Annadanam",
          },
          {
            position: "2nd Prize",
            name: "Saketh Sriram Annadanam",
          },
          {
            position: "3rd Prize",
            name: "Aditi Santosh",
          },
        ],
      },
      {
        groupName: "Group 1: 5-7 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Rishabh  Karthik & Nilaanika Dinesh",
          },
          {
            position: "2nd Prize",
            name: "Snigdha Sri Sathish",
          },
          {
            position: "3rd Prize",
            name: "AKSHARA POCHAM",
          },

          {
            position: "Honorable Mention",
            name: "Rydham Shah, Srihari Saigopal & Aaruhi Badugu",
          },
        ],
      },
      {
        groupName: "Group 2: 8-10 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Aneesh Abhyankar",
          },
          {
            position: "2nd Prize",
            name: "Prahlad Bharadwaj",
          },
          {
            position: "3rd Prize",
            name: "Vibhuthi Rajan",
          },
          {
            position: "Honorable Mention",
            name: "Harini Santhosh, SAITARIKHA GURUSAMY JAYASHREE, Tanishka Premkumar & Ojas Sirvaiya",
          },
        ],
      },
      {
        groupName: "Group 3: 11-14 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Aditya Tiwari",
          },
          {
            position: "2nd Prize",
            name: "Vedamsh Nivarthi",
          },
          {
            position: "3rd Prize",
            name: "Sohan Polapalli & Kautilya Purohit",
          },
          {
            position: "Honorable Mention",
            name: "Vansh Sambara & Bilvashree Matham",
          },
        ],
      },
      {
        groupName: "Group 4: 15-18 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Arjun Venkatakrishnan",
          },
          {
            position: "2nd Prize",
            name: "Varshini Arun",
          },
          {
            position: "3rd Prize",
            name: "Sathvik Narla",
          },
        ],
      },
    ],
  },
  {
    contestName: "Instrument",
    groups: [
      {
        groupName: "Group 1: 5-7 yrs",
        winners: [
          {
            position: "Judge's Special Award",
            name: "Antriksha Sharma & Viona Modi",
          },
        ],
      },

      {
        groupName: "Group 2: 8-10 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Sara Satish",
          },
          {
            position: "2nd Prize",
            name: "Niyati Navaratan",
          },
          {
            position: "3rd Prize",
            name: "Pranav Karthik, Abhay Santosh, Hishal kartik Vutukuru",
          },
        ],
      },
      {
        groupName: "Group 3: 11-14 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Jinay Desai",
          },
          {
            position: "2nd Prize",
            name: "SriNeya Mahesh Kumar & Sudhiksha Sriraman",
          },
          {
            position: "3rd Prize",
            name: "Sohna Pasam",
          },
          {
            position: "Honorable Mention",
            name: "Aakash Yaduka & Nihira Ayyagari",
          },
        ],
      },
      {
        groupName: "Group 4: 15-18 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Sai Navneedh Narayanan",
          },
          {
            position: "2nd Prize",
            name: "Kamlesh Bhavsar",
          },
          {
            position: "3rd Prize",
            name: "Yashas",
          },
        ],
      },
    ],
  },
  {
    contestName: "Singing classical Solo",
    groups: [
      {
        groupName: "Group 1: 5-7 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Rishabh Karthik",
          },
          {
            position: "2nd Prize",
            name: "Antriksha Sharma",
          },
          {
            position: "3rd Prize",
            name: "Drithi Sonekar & Reva Gupta",
          },
        ],
      },
      {
        groupName: "Group 2: 8-10 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Vishnupriya Krishnan & Sahana Arun",
          },
          {
            position: "2nd Prize",
            name: "Aneesh Abhyankar",
          },
          {
            position: "3rd Prize",
            name: "Sriya Mahesh Kumar",
          },
          {
            position: "Honorable mention",
            name: "Reyansh Ayyagari, Kiara Merh & Hishal Kartik Vutukuru",
          },
        ],
      },
      {
        groupName: "Group 3: 11-14 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Sudhiksha Sriraman",
          },
          {
            position: "2nd Prize",
            name: "Sree Bhargava Pusuluri",
          },
          {
            position: "3rd Prize",
            name: "Lasya Kothapally & Laya Rachna-Praveen",
          },
          {
            position: "Honorable mention",
            name: "Manasvini Tati Balaji, Sahithi Kotamraju, Nandita Prahlad, Nihira Ayyagari, & Dyuti Chinvar",
          },
        ],
      },
      {
        groupName: "Group 4: 15-18 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Arjun Venkatakrishnan",
          },
          {
            position: "2nd Prize",
            name: "Yashas",
          },
          {
            position: "3rd Prize",
            name: "Srikrupaa Sathiyanarayanan",
          },
        ],
      },
    ],
  },
  {
    contestName: "Singing classical Group",
    groups: [
      {
        groupName: "Group 2: 8-10 yrs",
        winners: [
          { position: "Enthusiastic Participant", name: "MUFIN Academy" },
        ],
      },
      {
        groupName: "Group 3: 11-14 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Singing Twins",
          },
          {
            position: "2nd Prize",
            name: "Shobana's Raaga Mithra",
          },
          {
            position: "3rd Prize",
            name: "MUFIN Academy - Rama Rama neevaramu",
          },
        ],
      },
    ],
  },
  {
    contestName: "Singing Lite Solo",
    groups: [
      {
        groupName: "Group 1: 5-7 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Diya Ved",
          },
          {
            position: "2nd Prize",
            name: "Mayukha Kovuru",
          },
          {
            position: "3rd Prize",
            name: "Antriksha Sharma",
          },
          {
            position: "Honorable Mention",
            name: "Prakriti Navaratan & Nirvan Dubey",
          },
        ],
      },
      {
        groupName: "Group 2: 8-10 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Vishnupriya Krishnan",
          },
          {
            position: "2nd Prize",
            name: "Sahana Arun",
          },
          {
            position: "3rd Prize",
            name: "Savir Kothapally",
          },
          {
            position: "Honorable Mention",
            name: "Aneesh Abhyankar, Niyati Navaratan & Vibhuthi Rajan",
          },
        ],
      },
      {
        groupName: "Group 3: 11-14 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Shreya Ghulghule",
          },
          {
            position: "2nd Prize",
            name: "Samyuktha Rajesh",
          },
          {
            position: "3rd Prize",
            name: "Sahithi Kotamraju",
          },
          {
            position: "Honorable Mention",
            name: "Sharanya Das, Sanat Tibrewal & Elina Baranwal",
          },
        ],
      },
      {
        groupName: "Group 4: 15-17 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Spruha Das",
          },
          {
            position: "2nd Prize",
            name: "Yashas",
          },
          {
            position: "3rd Prize",
            name: "Pratham Aithal",
          },
        ],
      },
    ],
  },
  {
    contestName: "Singing Lite Group",
    groups: [
      {
        groupName: "Group 1: 5-7 yrs",
        winners: [
          {
            position: "Enthusiastic Participant",
            name: "Mufin Academy- Sambo Maha Deva",
          },
        ],
      },
      {
        groupName: "Group 2: 8-10 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "Mahathi Music School Group1",
          },
          {
            position: "2nd Prize",
            name: "SWARA RAGA",
          },
          {
            position: "3rd Prize",
            name: "Ivox kids",
          },
        ],
      },
      {
        groupName: "Group 3: 11-14 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "MUFIN Academy - Thiro thiro",
          },
          {
            position: "2nd Prize",
            name: "Matham Kids",
          },
          {
            position: "3rd Prize",
            name: "Mahati music school group 2",
          },
        ],
      },
      {
        groupName: "Group 4: 15-17 yrs",
        winners: [
          {
            position: "1st Prize",
            name: "SWARA RAGA",
          },
          {
            position: "2nd Prize",
            name: "MUFIN Academy-Kaya Hi Pandari Song",
          },
          {
            position: "3rd Prize",
            name: "Mahati Music School-DG4",
          },
        ],
      },
    ],
  },
];

const WinnersPage: React.FC = () => {
  const [expandedContests, setExpandedContests] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleContest = (contestName: string) => {
    setExpandedContests((prev) => ({
      ...prev,
      [contestName]: !prev[contestName],
    }));
  };

  return (
    <section className="winners-container">
      {/* Title Section */}
      <h1 className="winners-title">Sanskriti RKT 2025 Awards</h1>
      <p className="winners-subtitle">Congratulations to all the Winners!!</p>

      {/* Award Collection Info */}
      <div className="winners-alert">
        <strong>Please collect your awards/participation certificate on</strong>{" "}
        <span className="orange-text">Sunday, February 9th or 16th, 2025</span>{" "}
        from <span className="orange-text">11:30 AM - 12:30 PM</span> at{" "}
        <span className="orange-text">Wellness Center</span>, in case you have
        not collected it.
      </div>

      {/* Survey Call-to-Action */}
      <p className="winners-survey">
        Rate your experience by taking a{" "}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdMJZzHs78G8qI0L59wX-14dZhWvWfL-V9MScFSe97_g2gEBQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="survey-link"
        >
          Survey
        </a>
      </p>

      {/* Winners List */}
      <div className="winners-list">
        <h2 className="winners-list-title">Winners List</h2>

        {winnersData.map((contest, index) => (
          <div key={index} className="contest-section">
            <div
              className="contest-header"
              onClick={() => toggleContest(contest.contestName)}
              role="button"
            >
              <h4 className="contest-name">{contest.contestName}</h4>
              <span className="toggle-icon">
                {expandedContests[contest.contestName] ? (
                  <FaArrowUp />
                ) : (
                  <FaChevronDown />
                )}
              </span>
            </div>

            {expandedContests[contest.contestName] && (
              <div className="contest-details">
                {contest.groups.map((group, gIndex) => (
                  <div key={gIndex} className="group-section">
                    <h5 className="group-name">{group.groupName}</h5>
                    <table className="winners-table">
                      <thead>
                        <tr>
                          <th>Position</th>
                          <th>Winner</th>
                        </tr>
                      </thead>
                      <tbody>
                        {group.winners.map((winner, wIndex) => (
                          <tr key={wIndex}>
                            <td>{winner.position}</td>
                            <td>{winner.name}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WinnersPage;
