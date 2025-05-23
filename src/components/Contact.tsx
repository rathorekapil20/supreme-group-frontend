export default function Contact() {
  return (
    <section className="py-12 sm:py-16 md:h-screen bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl items-center h-full">
        <div className="mb-8 md:mb-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">Get in touch</h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8">For general enquiries</p>
          
          <div className="mb-4 sm:mb-6 text-base sm:text-lg md:text-xl">
            <p className="mb-1">Address :</p>
            <p>110, 16th Road, Chembur, Mumbai - 400071</p>
          </div>
          
          <div className="mb-4 sm:mb-6 text-base sm:text-lg md:text-xl">
            <p className="mb-1">Phone :</p>
            <p>+91 22 25208822</p>
          </div>
          
          <div className="mb-4 sm:mb-6 text-base sm:text-lg md:text-xl">
            <p className="mb-1">Email :</p>
            <p>info@supremegroup.co.in</p>
          </div>
        </div>
        
        <div>
          <form className="space-y-8 sm:space-y-10">
            <div className="mb-4 sm:mb-6 text-base sm:text-lg md:text-xl">
              <input 
                type="text" 
                placeholder="Full name" 
                className="w-full bg-transparent border-0 border-b border-white/70 py-2 text-white outline-none placeholder-white/70" 
              />
            </div>
            <div className="mb-4 sm:mb-6 text-base sm:text-lg md:text-xl">
              <input 
                type="email" 
                placeholder="E-mail" 
                className="w-full bg-transparent border-0 border-b border-white/70 py-2 text-white outline-none placeholder-white/70" 
              />
            </div>
            <div className="mb-4 sm:mb-6 text-base sm:text-lg md:text-xl">
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full bg-transparent border-0 border-b border-white/70 py-2 text-white outline-none placeholder-white/70" 
              />
            </div>
            <div className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl">
              <input 
                type="text" 
                placeholder="Message" 
                className="w-full bg-transparent border-0 border-b border-white/70 py-2 text-white outline-none placeholder-white/70" 
              />
            </div>
            <button 
              type="submit" 
              className="bg-white text-black rounded-full py-2 sm:py-3 px-6 sm:px-12 font-medium cursor-pointer hover:bg-sky-400 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}