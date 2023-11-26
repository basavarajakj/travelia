import { ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import './hero.css';

const Hero = () => {
  return ( 
    <main>
      <article>

        <section 
          className="section hero has-bg-image" 
          aria-label="hero" 
          style={{ backgroundImage: "url('/images/hero-bg.jpg')"}}
        >
          <div className="container">

            <div className="hero-content">

              <p className="hero-subtitle">
                Explore the World 
                <Image
                  src="/images/title-icon.svg"
                  width={20}
                  height={20}
                  alt="Title Icon"
                  className="img"
                />
              </p>

              <h1 className="h1 title hero-title">
                It’s a Big World Out There, Go Explore
              </h1>

              <p className="hero-text">
                We always make our customer happy by providing as many choices as possible
              </p>

              <div className="wrapper">

                <Link href="#" className="btn btn-secondary">
                  <span className="span">Plan a Trip</span>
                  <ChevronRight />
                </Link>

                <button className="hero-btn">

                  <div className="btn-img">
                    <Image 
                      src="/images/hero-button-img.jpg"
                      width={100}
                      height={100}
                      alt="out story"
                      className="img-cover"
                    />

                    <Play strokeWidth={3} className="icon" />
                  </div>

                  <p className="text">Watch our story</p>
                </button>

              </div>
            </div>

            <figure className="hero-banner">
              <Image
                src={"/images/hero-banner.png"}
                width={631}
                height={735}
                alt="Hero Banner"
                className="w-100"
              />
            </figure>


          </div>
        </section>

      </article>
    </main>
   );
}
 
export default Hero;
