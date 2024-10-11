import Image from "next/image";
import Container from "./Container";

const HEADLINE = (
  <>
    Align your day
    <br />
    with your deen
  </>
);
const description =
  "The calendar app with all you need to schedule your life around your prayer times. Put your deen first.";

export default function Hero() {
  return (
    <>
      <Container className="lg:flex lg:min-h-[700px] bg-blue-100z items-start pt-44">
        <section className="lg:w-1/2 pr-20 pt-6">
          <h1 className="text-7xl font-bold">{HEADLINE}</h1>
          <p className="text-xl mt-12">{description}</p>
          <button className="btn btn-primary mt-20 px-20 text-xl font-bold flex items-center">
            Get Calendeen
          </button>
        </section>
        <section className="lg:w-1/2">
          <div className="h-[500px] bg-accent rounded-full flex items-center justify-center">
            <Image
              height={400}
              width={400}
              src="/hero.png"
              alt="Calendar illustration"
              className=" "
              // sizes=""
            />
          </div>
        </section>
      </Container>
    </>
  );
}
