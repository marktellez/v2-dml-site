export default function BookButton({}) {
  return (
    <a
      href="https://calendly.com/devmentorlive/mentorship-1hr"
      target="_blank"
      rel="noreferrer">
      <button className="font-beast text-lg text-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] bg-blue-600 py-3 px-8">
        Book now
      </button>
      <p>Sessions are $80/hr</p>
    </a>
  );
}
