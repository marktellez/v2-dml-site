import Container from "@/ui/container";

export default function CTA({}) {
  return (
    <Container>
      <div className="sm:flex items-center">
        <div className="sm:w-1/2 flex flex-col items-end">
          <h3 className="text-[60px] font-book uppercase">Get started today</h3>
          <p className="text-3xl">1 on 1 sessions are $80/hr usd</p>
          <p className="text-xl font-light">
            schedule and use and pay for only what you need.
          </p>
        </div>
        <div className="sm:w-1/2 px-16">
          <button className="font-beast text-3xl text-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] bg-red-500 py-6 px-12">
            Book now
          </button>
        </div>
      </div>
    </Container>
  );
}
