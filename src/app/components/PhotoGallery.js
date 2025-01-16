import React, { useState } from "react";
import Slider from "react-slick";
import "./css/PhotoGallery.css";

const a1 = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/a1.jpg`;
const a2 = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/a2.jpg`;
const a3 = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/a3.jpg`;
const a4 = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/a4.jpg`;
const a5 = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/a5.jpg`;
const a6 = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/a6.jpg`;
const a7 = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/a7.jpg`;
const a8 = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/a8.jpg`;
const a9 = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/a9.jpg`;
const a10 = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/a10.jpg`;
const a11 = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/a11.jpg`;
const a12 = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/a12.jpg`;
const a13 = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/a13.jpg`;
const a14 = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/a14.jpg`;
const a15 = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/a15.jpg`;
const a16 = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/a16.jpg`;
const a17 = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/a17.jpg`;

const photoArray = [
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15,
  a16,
  a17,
];
const photos = photoArray.map((photo, index) => ({
  id: index + 1,
  src: photo,
  alt: `Photo ${index + 1}`,
}));

const videos = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/JVPUqCIrTEI",
    title: "Video 1",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/GIcgfIF7ZK4",
    title: "Video 2",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/CVA14UUZpH8",
    title: "Video 3",
  },
  {
    id: 4,
    src: "https://www.youtube.com/embed/uAloLKHgQpo",
    title: "Video 4",
  },
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [modalAspect, setModalAspect] = useState("landscape");
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    const img = new Image();
    img.src = photo.src;
    img.onload = () => {
      setModalAspect(img.width > img.height ? "landscape" : "portrait");
    };
  };

  const closeModal = () => setSelectedPhoto(null);

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex", // Use flexbox for centering
          width: "40px",
          height: "40px",
          borderRadius: "50%", // Circular shape
          fontSize: "1.5rem",
          color: "var(--gold)", // Gold color for the `<` symbol
          backgroundColor: "var(--primary-color)", // Button background
          border: "none", // Remove border
          cursor: "pointer",
          alignItems: "center", // Center vertically
          justifyContent: "center", // Center horizontally
          transition: "background-color 0.3s ease", // Smooth hover effect
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Shadow for better visibility
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex", // Use flexbox for centering
          width: "40px",
          height: "40px",
          borderRadius: "50%", // Circular shape
          fontSize: "1.5rem",
          color: "var(--gold)", // Gold color for the `<` symbol
          backgroundColor: "var(--primary-color)", // Button background
          border: "none", // Remove border
          cursor: "pointer",
          alignItems: "center", // Center vertically
          justifyContent: "center", // Center horizontally
          transition: "background-color 0.3s ease", // Smooth hover effect
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Shadow for better visibility
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="photo-gallery">
      <h1 className="gallery-title">Memories</h1>
      <div className="photo-slider-container">
        <Slider {...settings}>
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="photo-card"
              onClick={() => openModal(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="photo"
                width={500} // Adjust width as necessary
                height={300} // Adjust height as necessary
                layout="intrinsic" // Use this for responsive images
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="video-section">
        <h2 className="video-title">Relive Sanskriti Over the years</h2>
        <div className="video-container">
          <button className="prev-btn" onClick={prevVideo}>
            {"<"}
          </button>
          <div className="video-wrapper">
            <iframe
              className="video-frame"
              src={videos[currentIndex].src}
              title={`Video ${currentIndex + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <button className="next-btn" onClick={nextVideo}>
            {">"}
          </button>
        </div>
      </div>

      {selectedPhoto && (
        <div className="modal" onClick={closeModal}>
          <div
            className={`modal-content ${modalAspect}`}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="modal-photo"
              width={800} // Adjust width as necessary
              height={600} // Adjust height as necessary
              layout="intrinsic" // Use this for responsive images
            />

            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
