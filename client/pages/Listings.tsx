export default function Listings() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 
          className="text-4xl md:text-5xl font-bold mb-6 text-black tracking-[4.8px]"
          style={{ fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif' }}
        >
          LISTINGS
        </h1>
        <p 
          className="text-xl text-black mb-8"
          style={{ fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif' }}
        >
          This page is coming soon. Please check back later or contact us for available listings.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-black text-white text-sm tracking-[1.4px] hover:bg-gray-800 transition-colors"
          style={{ fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif' }}
        >
          BACK TO HOME
        </a>
      </div>
    </div>
  );
}
