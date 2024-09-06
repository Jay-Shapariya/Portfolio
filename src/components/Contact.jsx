import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="bg-[#F9F9F9] lg:py-44 md:py-32 sm:py-32 py-32 px-0">
      <div id="container" className="mx-auto my-0 max-w-[120rem] lg:px-16 md:px-16 sm:px-16 px-7 py-0">
        <div className="flex flex-col">
          <div className="text-center lg:text-start md:text-start sm:text-center">
            <p className="uppercase text-[#147efb] text-[1.7rem] font-extrabold mb-4">
              Contact
            </p>
            <h3 className="text-[#2d2e32] text-[2.5rem] font-bold">
              Don't be shy! Hit me up!
            </h3>
          </div>
          <div className="flex flex-wrap gap-20 lg:gap-32 md:gap-32 sm:gap-20 mt-24 flex-col lg:flex-row md:flex-row sm:flex-col justify-center lg:justify-start md:justify-start sm:justify-center text-center lg:text-start md:text-start sm:text-center">
            <div className="items-center flex lg:gap-6 md:gap-6 flex-col lg:flex-row md:flex-row">
              <span className="flex items-center text-[#147efb] h-20 justify-center w-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-map-search"
                >
                  <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                  <path d="M9 4v13"></path>
                  <path d="M15 7v5"></path>
                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M20.2 20.2l1.8 1.8"></path>
                </svg>
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#2d2e32] text-[1.7rem] font-bold">
                  Location
                </h3>
                <p className="text-[#767676] cursor-pointer text-[1.7rem] font-medium hover:text-[#147efb]">
                Ahmedabad, Gujarat
                </p>
              </div>
            </div>
            <div className="items-center flex lg:gap-6 md:gap-6 flex-col lg:flex-row md:flex-row">
              <span className="flex items-center text-[#147efb] h-20 justify-center w-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-mail"
                >
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                  <path d="M3 7l9 6l9 -6"></path>
                </svg>
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#2d2e32] text-[1.7rem] font-bold">Mail</h3>
                <a
                  href="mailto:shapariyajay@gmail.com"
                  className="text-[#767676] cursor-pointer text-[1.7rem] font-medium hover:text-[#147efb]"
                >
                  shapariyajay@gmail.com
                </a>
              </div>
            </div>
            <div className="items-center flex lg:gap-6 md:gap-6 flex-col lg:flex-row md:flex-row">
              <span className="flex items-center text-[#147efb] h-20 justify-center w-20">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#147efb"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z" stroke="#1476fb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#2d2e32] text-[1.7rem] font-bold">Phone No.</h3>
                <a
                  
                  className="text-[#767676] cursor-pointer text-[1.7rem] font-medium hover:text-[#147efb]"
                >
                  7043624875
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
