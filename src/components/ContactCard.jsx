import React from "react";

function ContactCard({link, logo}) {
  return (
    <>
      <a href={link}
      target="_blank"
      className="flex justify-center items-center w-[100px] h-[100px] bg-slate-600 rounded-xl m-2"
      >
        <i className={logo}></i>
      </a>
    </>
  );
}

export default ContactCard;
