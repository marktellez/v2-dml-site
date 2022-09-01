import Container from "@/ui/container";
import DiscordIcon from "@/ui/icons/discord";
import YoutubeIcon from "@/ui/icons/youtube";

export default function Footer({}) {
  return (
    <footer>
      <Container>
        <div className="border-t border-white border-[1px]" />
        <div className="flex justify-around my-16">
          <div className="w-1/2 text-center">
            <div>Join the conversation!</div>
            <button className=" bg-indigo-600 p-4 rounded-xl">
              <DiscordIcon className="w-16 h-16" />
            </button>
          </div>
          <div className="w-1/2 text-center">
            <div>
              <div>Watch and learn!</div>
              <button className="w-32 h-32">
                <YoutubeIcon className="w-16 h-16" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
