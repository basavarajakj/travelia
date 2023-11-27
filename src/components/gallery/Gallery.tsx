import Image from "next/image";

import './gallery.css';

const Gallery = () => {
  return ( 
    <section className="section gallery">
      <div className="container">

        <p className="section-subtitle">Photo Gallery</p>

        <h2 className="h2 title section-title">
          Photo’s From Travelers
        </h2>

        <ul className="gallery-list">

          <li className="gallery-item">

            <figure
              className="item-banner img-holder"
              style={{ '--width': 700, '--height': 925} as React.CSSProperties}
            >
              <Image
                src={'/images/gallery-1.jpg'}
                height={700}
                width={925}
                alt="gallery"
                className="img-cover"
              />
            </figure>

          </li>

          <li className="gallery-item">

            <figure
              className="item-banner img-holder"
              style={{ '--width': 700, '--height': 925} as React.CSSProperties}
            >
              <Image
                src={'/images/gallery-2.jpg'}
                height={700}
                width={925}
                alt="gallery"
                className="img-cover"
              />
            </figure>

          </li>

          <li className="gallery-item">

            <figure
              className="item-banner img-holder"
              style={{ '--width': 700, '--height': 925} as React.CSSProperties}
            >
              <Image
                src={'/images/gallery-3.jpg'}
                height={700}
                width={925}
                alt="gallery"
                className="img-cover"
              />
            </figure>

          </li>

          <li className="gallery-item">

            <figure
              className="item-banner img-holder"
              style={{ '--width': 700, '--height': 378} as React.CSSProperties}
            >
              <Image
                src={'/images/gallery-4.jpg'}
                height={700}
                width={378}
                alt="gallery"
                className="img-cover"
              />
            </figure>

          </li>

          <li className="gallery-item">

            <figure
              className="item-banner img-holder"
              style={{ '--width': 700, '--height': 378} as React.CSSProperties}
            >
              <Image
                src={'/images/gallery-5.jpg'}
                height={700}
                width={378}
                alt="gallery"
                className="img-cover"
              />
            </figure>

          </li>

          <li className="gallery-item">

            <figure
              className="item-banner img-holder"
              style={{ '--width': 700, '--height': 378} as React.CSSProperties}
            >
              <Image
                src={'/images/gallery-6.jpg'}
                height={700}
                width={378}
                alt="gallery"
                className="img-cover"
              />
            </figure>

          </li>

        </ul>
      </div>
    </section>
   );
}
 
export default Gallery;
