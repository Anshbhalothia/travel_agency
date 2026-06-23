export default function BookingWidget() {
  return (
    <div className="
  mt-8
  lg:mt-20

  bg-white/[0.03]
  backdrop-blur-2xl

  border
  border-white/10

  rounded-[30px]

  shadow-[0_20px_60px_rgba(0,0,0,0.25)]

  p-10
">
      <div className="grid md:grid-cols-4 gap-4">
        <input
          placeholder="Destination"
          className="bg-white/10 rounded-xl px-4 py-3 outline-none"
        />

        <input
          placeholder="Travel Date"
          className="bg-white/10 rounded-xl px-4 py-3 outline-none"
        />

        <input
          placeholder="Guests"
          className="bg-white/10 rounded-xl px-4 py-3 outline-none"
        />

        <button className="bg-[#D4AF37] text-black rounded-xl font-semibold">
          Search
        </button>
      </div>
    </div>
  );
}