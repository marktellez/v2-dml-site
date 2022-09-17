import LandingPagesV1 from "@/features/landing-pages/v1";
import Page from "@/ui/page";

export default function Homepage({}) {
  return (
    <Page
      {...{
        title: "ReactJS Mentorship | JavaScript Mentorship",
        description:
          "Mark has been a web developer since the 90s, and has mastered modern web development.",
      }}>
      <LandingPagesV1 />
    </Page>
  );
}
