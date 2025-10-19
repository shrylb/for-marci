import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full h-[90px] bg-[#F5F3F3] flex items-center justify-between px-6 lg:px-12">
      <Link to="/">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/24ad148ba6dd2d52be43fd4be21fbaa43d04a0b4?width=386"
          alt="Marci Metzger Homes"
          className="h-[60px] w-auto"
        />
      </Link>

      <nav className="hidden md:flex items-center gap-11">
        <Link
          to="/"
          className="text-black font-normal text-base hover:opacity-70 transition-opacity"
          style={{ fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif' }}
        >
          HOME
        </Link>
        <Link
          to="/listings"
          className="text-black font-normal text-base hover:opacity-70 transition-opacity"
          style={{ fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif' }}
        >
          LISTINGS
        </Link>
        <Link
          to="/about"
          className="text-black font-normal text-base hover:opacity-70 transition-opacity"
          style={{ fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif' }}
        >
          ABOUT US
        </Link>
      </nav>

      <div className="flex items-center gap-[10px]">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[30px] h-[30px] hover:opacity-70 transition-opacity"
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ac54bb27834b0f1ade3a70d278caed31dcec6ad4?width=60"
            alt="Facebook"
            className="w-full h-full"
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[30px] h-[30px] hover:opacity-70 transition-opacity"
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/19a5f392b88c864aa92b8d4503a8681bf242fc38?width=60"
            alt="Instagram"
            className="w-full h-full"
          />
        </a>
        <a
          href="#contact"
          className="ml-3 px-[10px] h-[30px] bg-black text-white text-center font-normal text-sm tracking-[1.4px] flex items-center justify-center hover:bg-gray-800 transition-colors"
          style={{ fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif' }}
        >
          GET IN TOUCH
        </a>
      </div>
    </header>
  );
}
