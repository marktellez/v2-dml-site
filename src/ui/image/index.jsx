import NextImage from "next/image";

export default function Image({ className, src, alt }) {
  return (
    <div className={`${className} relative`}>
      <NextImage {...{ className: "block", layout: "fill", src, alt }} />
    </div>
  );
}
