import Container from "@/ui/container";

import BookButton from "@/ui/button/book";

export default function CTA({}) {
  return (
    <Container>
      <div className="sm:flex items-center">
        <div className="sm:w-1/2 flex flex-col items-end">
          <h3 className="text-[60px] font-book uppercase">Get started today</h3>
          <p className="text-3xl">1 on 1 sessions are $120/hr usd</p>
          <p className="text-xl font-light">
            schedule and use and pay for only what you need.
          </p>
        </div>
        <div className="sm:w-1/2 px-16">
          <BookButton />
        </div>
      </div>
    </Container>
  );
}
