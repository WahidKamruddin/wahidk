import {
  AiOutlineInstagram,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

const Contact = () => {
  return (
    <div id="contact" className="h-[50vh] md:h-screen w-full bg-mocha-100">
      <svg width="0" height="0">
        <linearGradient id="instagram" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stop-color="#f09433" offset="0%" />
          <stop stop-color="#e6683c" offset="25%" />
          <stop stop-color="#dc2743" offset="50%" />
          <stop stop-color="#cc2366" offset="75%" />
          <stop stop-color="#bc1888" offset="100%" />
        </linearGradient>
      </svg>

      <div className="px-6 md:p-28 text-center">
        <h1 className="mt-12 md:mt-24 text-4xl md:text-7xl text-mocha-400">
          Keep in touch
        </h1>

        <div className="w-full my-16 md:my-36 flex justify-center items-center flex-wrap gap-8">
          <a
            href="https://www.linkedin.com/in/wahid-kamruddin/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin
              className="rounded-2xl fill-mocha-400 hover:scale-110 hover:fill-sky-600 duration-500 size-20 md:size-[150px]"
            />
          </a>

          <a
            href="https://www.instagram.com/wahidkamruddin/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram
              className="fill-mocha-400 hover:fill-[url(#instagram)] hover:scale-110 duration-500 size-20 md:size-[150px]"
            />
          </a>

          <a
            href="https://github.com/WahidKamruddin"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub
              className="fill-mocha-400 hover:scale-110 hover:fill-obsidian-100 duration-500 size-20 md:size-[150px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
