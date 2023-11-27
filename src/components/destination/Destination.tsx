import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DESTINATIONS_DETAILS } from "../constant";

import './destination.css';

const Destination = () => {
  return (
    <section className="section desti" aria-label="destination">
      <div className="container">

        <p className="section-subtitle">Top Destination</p>

        <h2 className="h2 title section-title">Explore The Destinations</h2>

        <ul className="desti-list">

          {DESTINATIONS_DETAILS.map((destination, index) => (
             <li key={destination.id}>
                <div className="desti-card">
    
                  <div 
                    className="card-banner img-holder" 
                    style={{ '--width': 600, '--height': 650} as React.CSSProperties}
                  >
                      <Image
                        src={destination.hImage}
                        height={650}
                        width={600}
                        alt="destination"
                        className="img-cover"
                      />
                      <span className="card-price">$340</span>
                  </div>
    
                  <div className="card-content">
                    <h3 className="title card-title">
                      <Link href={'#'} >
                        {destination.hName}
                      </Link>
                    </h3>
    
                    <address className="card-text">
                      {destination.hPlace}
                    </address>
    
                    <div className="card-rating">
                      <span className="span">
                        <Star size={17} className="icon" />
                        {destination.hStar}
                      </span>
                      <p className="rating-text">({destination.hReview} Review)</p>
                    </div>
    
    
                  </div>
    
                </div>
              </li>
           ))}

        </ul>

         <Link href='#' className="btn btn-primary"> View All Destination</Link>   

      </div>
    </section>
  );
}

export default Destination;
