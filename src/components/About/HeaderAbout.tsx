import TitleSection from "../TitleSection";

export default function HeaderAbout() {
  return (
    <div className="mb-16 fade-in">
      <TitleSection title="About" />
      <h2 className="font-serif-custom text-4xl md:text-5xl font-light tracking-[-0.02em] leading-[1.1]">
        Engineer by trade,
        <br />
        architect by instinct.
      </h2>
    </div>
  );
}
