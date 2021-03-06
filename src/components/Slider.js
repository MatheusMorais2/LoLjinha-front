import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: "https://i.ibb.co/8KJDDRq/Summer-1.png",
  },
  {
    url: "https://i.ibb.co/SQ7qbCb/Summer-3.png",
  },
  {
    url: "https://i.ibb.co/Nn96qcK/Summer-4.png",
  },
  {
    url: "https://i.ibb.co/x7B90Q4/Summer-5.png",
  },
];

const Slider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1000}
        height={500}
        images={images}
        showBullets={true}
        showNavs={false}
        autoPlay={true}
      />
    </div>
  );
};

export default Slider;
