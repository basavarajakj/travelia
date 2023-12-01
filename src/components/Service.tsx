import Image from "next/image";

const Service = () => {
  return (
    <section className="section service" aria-label="service">
      <div className="container">

        <div className="title-wrapper">

          <p className="section-subtitle">
            What We Serve
          </p>

          <h2 className="h2 title section-title">Top Values For You</h2>

          <p className="section-text">
            Try a variety of benefits when using our services.
          </p>


        </div>

        <div className="service-card">

          <div className="card-icon">
            <Image
              src={"/images/service-icon-1.svg"}
              width={60}
              height={60}
              alt="service icon"
            />

            <h3 className="title card-title">Lot Of choices</h3>

            <p className="card-text">
              Total 460+ destinations
              that we work with.
            </p>
          </div>

        </div>

        <div className="service-card">

          <div className="card-icon">
            <Image
              src={"/images/service-icon-3.svg"}
              width={60}
              height={60}
              alt="service icon"
            />

            <h3 className="title card-title">Easy Booking</h3>

            <p className="card-text">
              With an easy and fast ticket purchase process.
            </p>
          </div>

        </div>

        <div className="service-card">

          <div className="card-icon">
            <Image
              src={"/images/service-icon-2.svg"}
              width={60}
              height={60}
              alt="service icon"
            />

            <h3 className="title card-title">Best Tour Guide</h3>

            <p className="card-text">
              Our tour guide with 15+
              years of experience.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Service;
