import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import images from "./assets/index.js";
import "./styles.css";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });

  return (
    <div className="App">
      <div>
        <Header />
        <Hero />
        <Card />
        {cards}
      </div>
    </div>
  );
}

export default App;
