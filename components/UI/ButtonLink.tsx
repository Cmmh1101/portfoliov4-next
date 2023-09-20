import Link from "next/link";
import React from "react";

const ButtonLink: React.FC<{url: string,
    key?: number,
    title: string}> = ({title, url, key}) => {
  return (
    <Link
      href={url}
      key={key}
          className=" px-5 my-5 xl:my-0 mx-5 py-2 text-2xl  font-semibold rounded-md border-t-2 border-r-2 border-b-2 border-l-2 border-t-black border-r-black border-blue-200 hover:border-t-blue-200 hover:border-r-blue-200 transition ease-in-out duration-1000 hover:border-t-2 focus:outline-none"
          target="_blank"
    >
      {title}
    </Link>
  );
};

export default ButtonLink;
