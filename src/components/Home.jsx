import React from "react";
import "../styles/home.scss";
import vg from "../assets/2.webp";
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className="home1">
        <main>
          <h1>TechyStar</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
            facilis, consequuntur pariatur iure ipsam repellendus.
          </p>
        </main>
      </div>

      <div className="home2" >
        <main>
          <img src={vg} alt="graphic" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iusto
            dolore magni possimus quis, numquam, nam voluptates perspiciatis
            facilis voluptatibus totam error praesentium rem sequi enim
          </p>
        </main>
      </div>

      <div className="home3" id="about">
       <main>
       <h2>WHO WE ARE</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus unde veritatis dignissimos fugit? Porro consequatur quisquam laudantium consequuntur itaque labore harum laborum, cum omnis totam perspiciatis, repellendus accusamus fugiat voluptates id cupiditate, fugit nostrum!</p>
       </main>
      </div>

      <div className="home4" id="brands">
        <main>
          <h1>Brands</h1>

          <section>
          <div  style={{animationDelay: "0.3s"}}>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>

          <div  style={{
                animationDelay: "0.5s",
              }}>
            <AiFillAmazonCircle/>
            <p>amazon</p>
          </div>

          <div  style={{
                animationDelay: "0.7s",
              }}>
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>

          <div  style={{
                animationDelay: "0.1s",
              }}>
            <AiFillInstagram/>
            <p>instagram</p>
          </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
