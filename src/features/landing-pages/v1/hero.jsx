import Image from "@/ui/image";
import Container from "@/ui/container";

export default function Hero({}) {
  return (
    <Container>
      <div className="md:flex md:gap-16 flex-wrap sm:flex-nowrap ">
        <div className="md:w-1/3 px-8 flex flex-col justify-center items-center">
          <Image
            className="w-[345px] h-[345px]"
            src="/images/mark1.png"
            alt="Mark Tellez headshot"
          />
          <div className="my-4 flex flex-col items-center ">
            <div className="text-xl uppercase font-bold">Mark Tellez</div>{" "}
            <div className="font-light text-sm">Sr. developer</div>
          </div>
        </div>
        <div className="md:w-2/3 sm:py-10 px-4 relative">
          <h1 className="text-[60px] leading-[4rem] sm:text-[80px] sm:leading-[6rem] text-white font-black prose prose-invert width-[80%]">
            Learn JavaScript and ReactJS one on one from an expert.
          </h1>

          <div className="w-full flex justify-center absolute right-0 -bottom-28 z-40">
            <div className="text-center">
              As seen on
              <a
                href="https://youtube.com/devmentorlive"
                target="_blank"
                rel="noreferrer">
                <Image
                  className=" w-[113px] h-[80px]"
                  src="/images/youtube.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
