import { Header, Container, Product, Total } from "./style";

export default function Table() {
  const productArray = [
    {
      name: "Rabaddon",
      price: "3600",
      description: "blablalblalba",
      img: "https://pbs.twimg.com/media/Eg8dQ_HWkAA6ZDB.jpg",
    },
    {
      name: "Rabaddon",
      price: "3600",
      description: "blablalblalba",
      img: "https://pbs.twimg.com/media/Eg8dQ_HWkAA6ZDB.jpg",
    },
    {
      name: "Rabaddon",
      price: "3600",
      description: "blablalblalba",
      img: "https://pbs.twimg.com/media/Eg8dQ_HWkAA6ZDB.jpg",
    },
    {
      name: "Rabaddon",
      price: "3600",
      description: "blablalblalba",
      img: "https://pbs.twimg.com/media/Eg8dQ_HWkAA6ZDB.jpg",
    },
  ];

  let total = 0;

  return (
    <Container>
      <Header>
        <span className="product">Produto</span>
        <span>Preço</span>
      </Header>

      {productArray.map((elem) => {
        total += parseInt(elem.price);
        return (
          <Product>
            <div className="right-side">
              <img className="product-img" src={elem.img} alt={elem.name} />
              <span className="name">{elem.name}</span>
            </div>
            <span>{elem.price}</span>
          </Product>
        );
      })}
      <Total>
        <span>Total</span>
        <span>{total}</span>
      </Total>
    </Container>
  );
}
