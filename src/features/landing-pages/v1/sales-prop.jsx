import Container from "@/ui/container";

export default function SalesProp({}) {
  return (
    <div className="w-screen overflow-x-hidden bg-white text-gray-900 py-32 sm:custom-clip">
      <Container>
        <div className="sm:flex items-center gap-8">
          <div>
            <div className="text-[100px] font-black pt-16">Hello!</div>

            <p className="prose text-[24px] font-light">
              My name is Mark Tellez and I&apos;ve been a{" "}
              <span className="underline">paid programmer</span> for{" "}
              <span className="underline">25 years!</span>
            </p>

            <p className="prose text-[20px] font-light">
              I started JavaScript way back in 1997 and I know the language in
              its every detail, but that isn&apos;t what I teach you!
            </p>
          </div>
          <div>
            <p className="prose font-black text-[24px] ">
              Not all of JavaScript is good.
            </p>
            <p className="prose text-[24px] font-light">
              And, not all of it is <span className="italic">useful</span>.
            </p>

            <p className="prose text-[24px] font-light">
              I focus on teaching the best parts of JavaScript and ReactJS. The
              parts you need to use today in order to get that money!
            </p>
            <p className="prose text-[24px] font-light">
              You don&apos;t have the time or patience to learn this shit by the
              numbers, it took me 25 years.
            </p>
            <p className="prose text-[24px] font-light">
              I shortcut your developer education by helping you build real
              world ReactJS components and real world JavaScript code.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
