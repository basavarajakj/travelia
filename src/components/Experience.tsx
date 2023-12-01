import Image from "next/image";


const Experience = () => {
  return ( 
    <section className="section exp" aria-label="experience section"> 
      <div className="container">

        <div className="exp-content">

          <p className="section-subtitle">
            Our Experience
          </p>

          <h2 className="h2 title section-title">
          With Our Experience We Will Serve You
          </h2>

          <p className="section-text">
            Since we first opened we have always prioritized the convenience of our users by providing low prices and with a easy process.
          </p>

          <ul className="exp-list">

            <li className="exp-item">
              <h3 className="h3 title item-title">20</h3>

              <p className="item-text">
                Years <br />
                Experience
              </p>
            </li>

            <li className="exp-item">
              <h3 className="h3 title item-title">460+</h3>

              <p className="item-text">
                Destination <br />
                Collaboration
              </p>
            </li>

            <li className="exp-item">
              <h3 className="h3 title item-title">50K+</h3>

              <p className="item-text">
                Happy <br />
                Customer
              </p>
            </li>
            
          </ul>

        </div>

        <figure className="exp-banner">

          <Image
            src={'/images/experience-banner.png'}
            width={550}
            height={660}
            alt="experience banner"
            className="w-100"
          />

          <Image
            src={'/images/exp-shape.svg'}
            width={75}
            height={109}
            alt="24/7 Guid support"
            className="exp-shape"
          />

        </figure>

      </div>
    </section>
   );
}
 
export default Experience;
