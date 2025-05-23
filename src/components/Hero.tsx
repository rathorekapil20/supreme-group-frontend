export default function Hero() {
  return (
    <>
      {/* Hero Section - Gray Background */}
      <section className="h-[calc(100vh-72px)] flex flex-col justify-center items-center text-center text-white bg-[#00000099]">
        <div className="container mx-auto px-6 flex flex-col items-center justify-center h-full">
          <p className="text-xl mb-10">Performance in motion</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-4xl">
            Soft Trims and NVH Solutions
          </h1>
          <p className="text-4xl md:text-5xl">for seamless rides</p>
        </div>
      </section>
    </>
  );
}