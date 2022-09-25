import Container from "@/ui/container";

export default function FastTrack({}) {
  return (
    <div className="w-screen bg-white text-gray-900 py-24 overflow-x-hidden">
      <Container>
        <div className="sm:flex items-center">
          <div className="uppercase font-black text-[50px] sm:w-1/2 sm:px-36">
            Fast track modern web development
          </div>
          <div className="smw-1/2 text-[36px] ">
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
