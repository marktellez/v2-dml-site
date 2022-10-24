import Image from "@/ui/image";
import Container from "@/ui/container";

export default function Hero({}) {
  return (
    <Container>
      <div className="md:flex md:gap-16 flex-wrap sm:flex-nowrap ">
        <div className="md:1/3 px-8 pb-8  md:pb-0">
          <Image
            className="w-[345px] h-[345px] "
            src="/images/mark.png"
            alt="Mark Tellez headshot"
          />
          <div className=" text-center my-2">
            <div className="uppercase text-xl font-bold">Mark Tellez</div>{" "}
            <div className="font-light text-base">Snr. Developer</div>
          </div>
        </div>
        <div
          className="
         md:w-2/3 px-4 relative"
        >
          <h1 className="font-black text-5xl md:text-6xl w-[80%] ">
            Learn JavaScript and ReactJS one on one from an expert.
          </h1>
          {/* text-[60px] leading-[4rem] sm:text-[80px] sm:leading-[6rem] text-white font-black prose prose-invert width-[80%] */}

          <div className="w-full flex justify-center md:justify-start absolute right-0 -bottom-28 z-40">
            <div className="text-center font-light">
              As seen on
              <a
                href="https://youtube.com/devmentorlive"
                target="_blank"
                rel="noreferrer"
              >
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
