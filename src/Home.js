import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The smooth, distinct lines create an elegant image. Ideal when you want to create your own outdoor space while socializing with others. And the cap in dark gray adds style"
            price={199.0}
            rating={5}
            image="https://www.ikea.com/jo/en/images/products/vedbo-armchair-gunnared-dark-grey__0512767_pe638683_s5.jpg?f=xs"
          />
          <Product
            id="49538094"
            title="Simple design, timeless and still going strong 40 years after our showroom. Loved by all ages, so we've designed both adults and children sizes"
            price={249.0}
            rating={4}
            image="https://www.ikea.com/jo/en/images/products/poaeng-rocking-chair-white-stained-oak-veneer-glose-eggshell__0682832_pe720583_s5.jpg?f=xs"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Objects differ from person to person. JÄRVFJÄLLET swivel chair is designed so you can adjust the headrest, lumbar region, seat height and depth - so it fits perfectly with the height and shape of your body."
            price={199.99}
            rating={3}
            image="https://www.ikea.com/jo/en/images/products/jaervfjaellet-office-chair-with-armrests-gunnared-blue-black__0724661_pe734559_s5.jpg?f=xs"
          />
          <Product
            id="23445930"
            title="With a glass-door cabinet, you can show off your glassware or other favorite as well as protect it from dust."
            price={499.0}
            rating={5}
            image="https://www.ikea.com/jo/en/images/products/malsjoe-sideboard-basic-unit-black-stained__0644409_pe702649_s5.jpg?f=xs"
          />
          <Product
            id="3254354345"
            title="Our oriental rugs are handcrafted and are the product of traditions mixed with the personal flair of the craftsman. No two carpets are the same and are therefore only sold in our stores. Come and pick your favorite carpet!"
            price={1.349}
            rating={4}
            image="https://www.ikea.com/jo/en/images/products/persisk-mix-rug-low-pile-handmade__0149906_pe308019_s5.jpg?f=xs"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="A luxury made for you. We used an elastic sponge pad to give you comfort, and thick grain leather at the contact areas - and because they look great we used durable, plastic-coated fabric on the other areas to keep the price down."
            price={2.039}
            rating={4}
            image="https://www.ikea.com/jo/en/images/products/landskrona-corner-sofa-6-seat-with-chaise-longue-grann-bomstad-golden-brown-metal__0602473_pe680379_s5.jpg?f=xs"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
