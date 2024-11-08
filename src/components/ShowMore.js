import { useState } from "react";

function ShowMore({ item, onClick }) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((prev) => !prev);
    if (!show) onClick(true);
    else onClick(false);
  };
  return (
    <>
      <td
        className="border-2 text-black dark:text-white dark:border-white cursor-pointer"
        onClick={handleClick}
      >
        Show {show ? "less" : "more"}
      </td>
      {show && (
        <td className="border-2 text-black dark:text-white dark:border-white cursor-pointer">
          {item.phone}
        </td>
      )}
      {show && (
        <td className="border-2 text-black dark:text-white dark:border-white cursor-pointer">
          {JSON.stringify(item.address)}
        </td>
      )}
    </>
  );
}

export default ShowMore;
