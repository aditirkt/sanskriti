"use client";

import React from "react";
import Link from "next/link";

const results = [
  {
    label: "Day 1",
    url: "https://www.facebook.com/RadhaKrishnaTempleofDallas/posts/pfbid02D8VQNH97M4xC6Sc7EsoQAX2PSpdQZrAuRw65Gz1i7VAZcsy7aHL7G9Ux5w1guk4el?rdid=bgvOgqvmG1wK2UkB#",
  },
  {
    label: "Day 2 Part 1",
    url: "https://www.facebook.com/RadhaKrishnaTempleofDallas/posts/pfbid02oKRDx7s1kU8y3gkTGaRtNehfgFgiFUPuovfgy8bDBV9VSGja1KX2i2PtH6KzCnRhl?rdid=YBBR4Mhlwc4tbKat#",
  },
  {
    label: "Day 2 Part 2",
    url: "https://www.facebook.com/RadhaKrishnaTempleofDallas/posts/pfbid02AzrjQspSB4r1nGeBxuQZjGPRhd2garRWPvaW5WhRPS3oSwtfoVT8TXwLw3puVogl?rdid=ix4uvI6MS7e4z6QH#",
  },
  {
    label: "Day 3",
    url: "https://www.facebook.com/RadhaKrishnaTempleofDallas/posts/pfbid0278siLRTaBk2ErMwYvfbdghg1sZ1hRSxmqKb8p95WeagMHvPYH2w8uvMnJS5SfuGwl?rdid=0G7udobFNIEs6O0W#",
  },
  {
    label: "Glimpses",
    url: "https://www.facebook.com/RadhaKrishnaTempleofDallas/videos/621979670563726/?rdid=03rvvqB04LAfR2Px#",
  },
  {
    label: "Award Ceremony",
    url: "https://www.facebook.com/RadhaKrishnaTempleofDallas/posts/pfbid0C66gafK1EAPceurKSy2C1g1PbZr2EJD1oTgWzQwAWRSRBFZLkwj4csyreUDTamGml?rdid=nML3XmSasSxnicrG#",
  },
];

const Glimpses = () => {
  return (
    <section className="results-container">
      <h1 className="results-title text-center display-4">
        Glimpses of Sanskriti
      </h1>
      <ul className="results-list text-center list-unstyled">
        {results.map((item, index) => (
          <li key={index}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="result-link"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Glimpses;
