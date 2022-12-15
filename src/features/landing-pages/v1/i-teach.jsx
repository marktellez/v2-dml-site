import Container from "@/ui/container";
import Image from "@/ui/image";

export default function ITeach({}) {
  return (
    <Container>
      <div className="flex items-center flex-col">
        <h2 className="font-bold text-[50px] sm:text-[80px]">
          I teach you one on one
        </h2>
        <p className="prose prose-invert font-thin text-[24px] text-white">
          sharing your keyboard and conversing using our voices in a friendly,
          comfortable manner.
        </p>
        <p className="prose prose-invert font-thin text-[24px] text-white">
          I can put on as much pressure as you need in order to improve and
          perform, but we can also go the leisurely route.
        </p>
        <p className="prose prose-invert font-thin text-[24px] text-white">
          Either way, I will do most of the typing, showing you what to do,
          instead of just telling you.
        </p>
        <p className="prose prose-invert font-thin text-[24px] text-white">
          And as you gain more confidence you can take the wheel as much as you
          like and have me crank up the difficulty in what we build and what I
          expect from you!
        </p>
      </div>
    </Container>
  );
}
