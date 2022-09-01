import Image from "@/ui/image";
import Container from "@/ui/container";

export default function Hero({}) {
  return (
    <Container>
      <div className="md:flex md:gap-16 flex-wrap sm:flex-nowrap">
        <div className="md:w-1/3 px-8">
          <Image
            className="w-[345px] h-[345px]"
            src="/images/mark1.png"
            alt="Mark Tellez headshot"
          />
          <div className="text-3xl text-center my-4">
            <span className="uppercase font-bold">Mark Tellez</span>{" "}
            <span className="font-light">10x developer</span>
          </div>
        </div>
        <div className="md:w-2/3 sm:py-10 px-4">
          <h1 className="text-[60px] leading-[4rem] sm:text-[80px] sm:leading-[6rem] text-white font-black prose prose-invert width-[80%]">
            Learn JavaScript and ReactJS one on one from an expert.
          </h1>

          <div className="w-full flex justify-center">
            <div className="text-center">
              As seen on
              <Image className="w-[113px] h-[80px]" src="/images/youtube.png" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
