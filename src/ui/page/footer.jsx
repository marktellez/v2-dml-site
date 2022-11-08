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
            <a
              className=" bg-indigo-600 p-4 rounded-xl"
              href="https://bit.ly/3dh0r8D">
              <DiscordIcon className="w-16 h-16" />
            </a>
          </div>
          <div className="w-1/2 text-center">
            <div>
              <div>Watch and learn!</div>
              <a
                className="w-32 h-32 "
                href="https://youtube.com/@devmentorpro">
                <YoutubeIcon className="w-16 h-16" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
