import "../components/css/Highlights.css";

const foodImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/food.png`;
const supportImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/support.png`;
const certificateImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/certificate.png`;
const trophyImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/trophy.png`;
const contestImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/contest.png`;

const Highlights = () => {
  const cardData = [
    {
      img: trophyImg,
      title: "Trophy & Medals",
      text: "Special trophy & medals for winners in each category.",
    },
    {
      img: certificateImg,
      title: "Certificates",
      text: "Certificates will be given for participation.",
    },
    {
      img: contestImg,
      title: "Contests",
      text: "Kids can participate in more than one contest.",
    },
    {
      img: foodImg,
      title: "Tasty Food",
      text: "Tasty Food available for purchase at Yugal Kunj all three days.",
    },
    {
      img: supportImg,
      title: "Support Activities",
      text: "All proceeds support the charitable activities of JKYog & Radha Krishna Temple.",
    },
  ];

  return (
    <section className="highlights-section py-5">
      <h1 className="py-3 text-center">Highlights</h1>
      <div className="container">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="card animated-card animate__animated animate__fadeInUp"
          >
            <div className="card-image">
              <img
                src={card.img}
                alt={card.title}
                width={300} // Set width for optimization
                height={300} // Set height for optimization
                className="card-img-top"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="schedule-para">
        Click Here to{" "}
        <a
          href="https://www.radhakrishnatemple.net/sanskriti/winners"
          target="_blank"
          rel="noopener noreferrer"
          className="result-link"
        >
          Watch the Results
        </a>
      </div>
      <div className="schedule-para">
        Please collect your awards/ participation certificate/Artwork on{" "}
        <span className="orange-text">Sunday, Feb 9th or 16th, 2025</span> from{" "}
        <span className="orange-text">Wellness Center (11:30-12:30 pm)</span>,
        in case you have not collected it.{" "}
      </div>
    </section>
  );
};
export default Highlights;
