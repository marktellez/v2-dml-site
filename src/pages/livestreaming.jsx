import { format } from "date-fns";
import Container from "@/ui/container";
import Page from "@/ui/page";
import Image from "@/ui/image";
import { timeZone } from "@/modules/time";

import YoutubeIcon from "@/ui/icons/youtube";

export default function LivestreamingPage({}) {
  return (
    <Page
      {...{
        title: "My livestream homepage",
        description: "some description for google about livestreaming",
      }}>
      <Container>
        <div className="md:flex md:gap-16 flex-wrap sm:flex-nowrap px-2 text-center sm:text-left sm:p-16 items-center">
          <div className="md:w-1/2 sm:px-8">
            <h1 className="text-[33px] leading-[3rem] sm:text-[60px] sm:leading-[4rem] text-white font-black sm:w-[80%]">
              Learn JavaScript and ReactJS one on one from an expert.
            </h1>
          </div>
          <div className="md:w-1/2 sm:py-10 px-4 flex items-center justify-center">
            <YoutubeIcon className="w-[260px]" />
          </div>
        </div>
      </Container>

      <div className="w-screen bg-white text-gray-900 pt-12 sm:pt-24">
        <Container>
          <div className="flex items-center text-[22px] sm:gap-8 sm:text-[70px] justify-center font-black uppercase">
            <div>JavaScript</div>
            <div className="text-red-500 sm:text-[90px] -mt-2">&middot;</div>
            <div>ReactJS</div>
            <div className="text-red-500 sm:text-[90px] -mt-2">&middot;</div>
            <div>NextJS</div>
          </div>

          <div className="flex items-center text-[22px] sm:gap-8 sm:text-[70px] justify-center font-black uppercase">
            <div>TailwindCSS</div>
            <div className="text-red-500 sm:text-[90px] -mt-2">&middot;</div>
            <div>MongoDB</div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/mark3.png"
              className="w-[200px] h-[200px] sm:w-[450px] sm:h-[450px] -rotate-6 -mb-[14px] sm:-mb-[30px]"
              alt="Mark's face peeking up over an element on the page"
            />
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex md:gap-16 flex-wrap px-16 items-center justify-center">
          {[
            {
              startsAt: "9am Tuesday",
              timeZone: "America/Mexico_City",
            },
            {
              startsAt: "9am Thursday",
              timeZone: "America/Mexico_City",
            },
            {
              startsAt: "7am Saturday",
              timeZone: "America/Mexico_City",
            },
          ].map(({ startsAt, timeZone }, i) => {
            const [time, day] = startsAt.split(" ");
            const [_, region] = timeZone.split("/");
            const [__, hour, meridian] = time.split(/([0-9]+)/);
            const pad = (val) =>
              val.toString().length > 1 ? val.toString() : `0${val}`;

            const timestampAtHour = (hour) =>
              `${format(
                new Date(
                  new Date().toLocaleString("en-US", {
                    timeZone,
                  })
                ),
                "yyyy-MM-dd"
              )}T${pad(hour)}:00:00.000Z`;

            const ts = timestampAtHour(hour);

            return (
              <button
                key={ts}
                className="sm:text-black sm:bg-white sm:rounded-2xl p-8 cursor-pointer sm:w-[460px] sm:h-[460px] transition duration-200  hover:-rotate-6  hover:text-red-500">
                <div className="inline-block">
                  <div className="text-[80px] font-black">{day}</div>
                  <div className="font-thin text-[28px] text-center -mt-[30px]">
                    {JSON.stringify(new Date(timestampAtHour(hour)))}
                    {meridian} {region.replace("_", " ")}({timeZone})
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </Container>
    </Page>
  );
}
