import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return ( 
    <section className="section cta" aria-label="call to action">
      <div className="container">

        <div className="cta-card has-bg-image" style={{ backgroundImage: 'url(/images/cta-bg.jpg)'}}>

          <h2 className="h2 title section-title">Prepare Yourself & Let’s Explore The Beauty Of The World
            <Image
              src={'/images/title-icon.svg'}
              width={36}
              height={36}
              alt="title icon"
              className="img"
            />
          </h2>


          <p className="section-text">
          We have many special offers especially for you.
          </p>

          <Link href='#' className="btn btn-primary">Get Started</Link>

        </div>

      </div>
    </section>
   );
}
 
export default CTA;
