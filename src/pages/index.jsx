import LandingPagesV1 from "@/features/landing-pages/v1";
import Page from "@/ui/page";

export default function Homepage({}) {
  return (
    <Page
      {...{
        title: "My awesome homepage",
        description: "some description for google search results",
      }}>
      <LandingPagesV1 />
    </Page>
  );
}
