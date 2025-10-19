export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative w-full pt-[90px]">
        <div className="relative w-full h-[631px] overflow-hidden">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/7f5a34989d9c7a8c037f61cdc7be437950ccb564?width=2884"
            alt="Luxury home hero"
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
            <div className="bg-white px-8 py-6 md:px-12 md:py-8 max-w-[667px] w-full">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/cbca0531c9d93a3964afb6004aed1e3286aff582?width=1072"
                alt="Marci Metzger Homes"
                className="w-full max-w-[536px] mx-auto mb-6"
              />
              
              <p 
                className="text-black text-center text-xl leading-normal tracking-[1.2px] mb-8 max-w-[520px] mx-auto"
                style={{ fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif' }}
              >
                Welcome to our platform — your trusted real estate partner in Pahrump. Let's find the perfect place you can call home.
              </p>
              
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="px-[17px] h-[30px] bg-black text-white text-center font-normal text-sm tracking-[1.4px] flex items-center justify-center hover:bg-gray-800 transition-colors"
                  style={{ fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif' }}
                >
                  CONTACT US
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/69de5d9cf2d1dc53a731a060a474f30394adef72?width=1080"
                alt="Marci Metzger"
                className="w-full max-w-[540px] mx-auto"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="bg-[#E9EEEF] px-8 md:px-16 py-8 mb-8 inline-block">
                <h2 
                  className="text-black text-3xl font-normal tracking-[3px]"
                  style={{ fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif' }}
                >
                  Experience You Can Rely On
                </h2>
              </div>
              
              <h3 
                className="text-black text-5xl font-bold tracking-[4.8px] mb-8"
                style={{ fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif' }}
              >
                MARCI METZGER
              </h3>
              
              <p 
                className="text-black text-2xl font-normal leading-[150%] tracking-[0.96px] mb-12"
                style={{ fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif' }}
              >
                With nearly 30 years of experience, Marci Metzger is one of Pahrump's most trusted realtors. Her local market expertise, client commitment, and proven success make her a dependable partner in every real estate journey. Count on Marci for honest, professional, and caring guidance.
              </p>
              
              <div className="flex flex-wrap items-start">
                <div className="flex-1 min-w-[140px]">
                  <div 
                    className="text-black text-5xl font-bold tracking-[4.8px] mb-3"
                    style={{ fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif' }}
                  >
                    30
                  </div>
                  <div 
                    className="text-black text-xl text-center font-normal"
                    style={{ fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif' }}
                  >
                    Years of Experience
                  </div>
                </div>
                
                <div className="text-[#BBB] text-8xl font-thin leading-none">|</div>
                
                <div className="flex-1 min-w-[140px]">
                  <div 
                    className="text-black text-5xl font-bold tracking-[4.8px] mb-3"
                    style={{ fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif' }}
                  >
                    125
                  </div>
                  <div 
                    className="text-black text-xl text-center font-normal"
                    style={{ fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif' }}
                  >
                    Millions of Sales
                  </div>
                </div>
                
                <div className="text-[#BBB] text-8xl font-thin leading-none">|</div>
                
                <div className="flex-1 min-w-[140px]">
                  <div 
                    className="text-black text-5xl font-bold tracking-[4.8px] mb-3"
                    style={{ fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif' }}
                  >
                    30,000
                  </div>
                  <div 
                    className="text-black text-xl font-normal"
                    style={{ fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif' }}
                  >
                    Houses Sold
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="w-full bg-[#5D6E81] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="bg-white px-8 md:px-16 py-8 mb-12 inline-block">
            <h2
              className="text-black text-3xl font-normal tracking-[3px]"
              style={{ fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif' }}
            >
              Take the First Call Towards Your Home
            </h2>
          </div>
        </div>
        <a
          href="tel:206-919-6886"
          className="text-white text-5xl md:text-6xl font-bold tracking-[6.4px] hover:opacity-80 transition-opacity block text-center"
          style={{ fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif' }}
        >
          206-919-6886
        </a>
      </section>
    </div>
  );
}
