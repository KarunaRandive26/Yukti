import React from "react";
import TagOne from "../components/TagOne";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import AboutSer from "../components/AboutSER";
const Home = () => {
  return (
    <>
      <div>
        <section id="home">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
              </div>
            </div>
          </div>
        </section>
        <AboutSer />
        {/* <Serv />
      <Contact /> */}
      </div>
      {/* <div className="about">
        <About />
      </div> */}
    </>
  );
};

export default Home;