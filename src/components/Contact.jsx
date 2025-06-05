import React from "react";

const Contact = () => {
  return (
    <footer id="contact" className="bg-darkgreen text-white pt-10 px-6 md:px-20 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo1.png" alt="Mtokoent Logo" className="h-10 w-auto" />
            {/* <div>
              <h3 className="text-xl font-bold">MTOKOENT</h3>
              <p className="text-sm tracking-widest">Company Limited</p>
            </div> */}
          </div>
          <p className="text-lightgreen font-bold ">
            Get in touch & let us know how we can help
          </p>
        </div>

        {/* Right Side */}
        <div>
          <h4 className="text-white font-bold uppercase mb-3">
            Address & Contacts
          </h4>
          <ul className="space-y-2 text-sm text-white">
            <li className="flex items-start gap-2">
              <i className="bx bxs-map text-lightgreen text-lg mt-1"></i>
              <span>
                Block T, Plot 41, Salasala, Mbezi beach<br />
                P.O.Box 75595,<br />
                Dar es Salaam, Tanzania
              </span>
            </li>
            <li className="flex items-center gap-2">
              <i className="bx bxs-phone-call text-lightgreen text-lg"></i>
              <span>+255 713 502 211</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="bx bxs-envelope text-lightgreen text-lg"></i>
              <span>info@Mtokoent.co.tz</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="bx bx-globe text-lightgreen text-lg"></i>
              <span>www.mtokoent.co.tz</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
        <p>
          Copyright ©{" "}
          <a href="https://mtokoent.co.tz" className="underline">
            Mtokoent Company Limited
          </a>{" "}
          2025
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0 text-xl">
          <a href="#" aria-label="Instagram">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#" aria-label="X Twitter">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="bx bxl-linkedin-square"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

