import LandingPagesV1 from "@/features/landing-pages/v1";
import Page from "@/ui/page";

export default function Homepage({}) {
  return (
    <Page
      {...{
        title: "ReactJS Mentorship | JavaScript Mentorship",
        description: "Learn modern web delopment from a JavaScript master.",
      }}>
      <LandingPagesV1 />
    </Page>
  );
}
