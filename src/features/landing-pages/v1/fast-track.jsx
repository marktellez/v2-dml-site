import Container from "@/ui/container";

export default function FastTrack({}) {
  return (
    <div className="w-screen bg-white text-gray-900 py-24 overflow-x-hidden">
      <Container>
        <div className="flex items-center flex-col sm:w-1/2 justify-center mx-auto">
          <div className="uppercase font-black text-[50px]">
            Fast track modern web development
          </div>
          <div className="text-[36px] ">
            <ul>
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>NextJS</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
