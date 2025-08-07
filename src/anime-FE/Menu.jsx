import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./test.css";
export const Menu = ({ title, items }) => {
  return (
    <div className="relative group">
      <a
        href="#"
        className="py-[25px] flex items-center text-[13px] uppercase text-white px-2 hover:text-lime-400"
      >
        {title}
        <FontAwesomeIcon
          icon={faChevronDown}
          className="text-[15px] ml-1 transition-colors duration-300 text-lime-400"
        />
      </a>

      <div className="menu absolute left-0 top-full h-auto min-w-[400px] max-h-[200px] bg-white scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-200 text-black rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-400 z-50 overflow-y-auto">
        <div className="h-[2px] w-full bg-lime-500 rounded-none"></div>
        <div className="grid grid-cols-3 gap-4 px-6 py-4">
          {items.map((item, idx) => (
            <a
              href={item.href || "#"}
              key={idx}
              className="text-[14px] hover:opacity-70 truncate overflow-hidden whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export const HomeClick = ({ title }) => {
  return (
    <div className="relative group">
      <a
        href="#"
        className="py-[25px] flex items-center text-[13px] uppercase text-white group-hover:text-lime-400"
      >
        {title}
      </a>
      <div className="absolute left-0 -bottom-1 w-full h-[3px] bg-white scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-200"></div>
    </div>
  );
};
