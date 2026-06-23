type Props = {
  subtitle: string;
  title: string;
};

export default function SectionTitle({
  subtitle,
  title,
}: Props) {
  return (
    <div className="text-center mb-16">
      <p className="uppercase tracking-[5px] text-[#D4AF37] text-sm">
        {subtitle}
      </p>

      <h2 className="font-heading text-5xl md:text-6xl mt-4">
        {title}
      </h2>
    </div>
  );
}