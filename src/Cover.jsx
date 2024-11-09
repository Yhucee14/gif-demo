import { FaXTwitter } from "react-icons/fa6";
import Video from "./Video";
import { FaTelegramPlane } from "react-icons/fa";

const Cover = () => {
  return (
    <div className="flex  h-full flex-col bg-black justify-center items-center py-3">
      <h1 className="text-[#12d8fa] font-bold font-serif text-3xl py-5">$PCAT - PARTY CAT</h1>

      <div className="py-5">
        <Video />

        <div className="py-2  flex justify-center">
          <h1 className="text-white font-semibol font-serif text-xl">
            The Cat <b className="text-purple-500 px-3">Keeps</b> Partying
          </h1>
        </div>
      </div>

      <div className="text-white flex justify-center px-7 pb-10 py-5">
        <span className="text-md ">
          CA : <br /> 6emhPDMKmmuqSaieTawtqaHqSs9WGUxic2EGnqpjpump
        </span>
      </div>

      <div className="flex flex-row py-3 justify-between gap-8">
        <div className="flex p-3 rounded-full flex-row bg-[#12d8fa] gap-2">
          <a href="https://www.X.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={24} />
          </a>
        </div>

        <div className="flex p-3 rounded-full flex-row bg-[#12d8fa] gap-2">
          <a href="https://www.X.com" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane size={24} />
          </a>
        </div>

        <div className="flex p-3 rounded-full flex-row bg-[#12d8fa] gap-2">
          <a href="https://www.X.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cover;
