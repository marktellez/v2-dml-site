import Container from "@/ui/container";
import DiscordIcon from "@/ui/icons/discord";
import YoutubeIcon from "@/ui/icons/youtube";

export default function Footer({}) {
  return (
    <footer>
      <Container>
        <div className="border-t border-white border-[1px]" />
        <div className="flex items-center justify-center">
          <a className="block" href="https://youtube.com/@devmentorlive">
            <div>Watch and learn!</div>
            <YoutubeIcon className="w-16 h-16" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
