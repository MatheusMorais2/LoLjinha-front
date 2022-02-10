import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: "https://3.bp.blogspot.com/-mhtvMLjFOd8/WP56MHuOLtI/AAAAAAAAIJM/nIFYs4AWBukXW2CGaBxENYwe4-qftCxmQCLcB/s1600/365-Filmes-Magia-Studio-Ghibli-Hayao-Miyazaki.jpg",
  },
  {
    url: "https://f.i.uol.com.br/fotografia/2020/01/31/15804725735e3418fd08dcb_1580472573_3x2_md.jpg",
  },
  {
    url: "https://www.planocritico.com/wp-content/uploads/2021/06/studio_ghibli-plano-critico-filme-animacao-anime.jpg",
  },
  {
    url: "https://musicnonstop.uol.com.br/wp-content/uploads/2020/09/Ponyo.jpg",
  },
];

const Slider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={506}
        height={244}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default Slider;
