import React from "react";
import { PiBuildingOfficeThin } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendar4Event } from "react-icons/bs";
import { PiMedalThin } from "react-icons/pi";
const Resume = () => {
  return (
    <div className="bg-white text-black p-6">
      <h1
        className="text-5xl font-bold py-4 text-center"
        style={{ paddingBottom: "3.75rem" }}
      >
        My Resume
      </h1>

      {/* 3-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Column 1 - Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src="https://res.cloudinary.com/dets3dy9o/image/upload/v1761909504/C951AE83-C4BA-4ADB-95AE-3ACCDFB182AA_vtuwn2.jpg"
            alt="Profile"
            className="rounded-lg shadow-md w-full max-w-sm object-cover"
          />
        </div>

        {/* Column 2 - Work Experience */}
        <div className="flex flex-col justify-start space-y-3">
          <h2
            className="text-3xl font-semibold text-left"
            style={{ paddingBottom: "3.75rem" }}
          >
            {" "}
            Work Experience
          </h2>
          <div className="text-gray-700 text-lg leading-relaxed">
            <div className="text-left">Senior Frontend Developer</div>
            <span className="flex items-center gap-2">
              <PiBuildingOfficeThin /> Facebook, Inc. <FaLocationDot /> Menlo
              Park, CA
            </span>
          </div>
          <hr />
          <div className="text-gray-700 text-lg leading-relaxed">
            <div className="text-left"> Front-end Engineer</div>
            <span className="flex items-center gap-2">
              <PiBuildingOfficeThin /> Google, Inc. <FaLocationDot /> Menlo
              Park, CA
            </span>
          </div>
          <hr />
          <div className="text-gray-700 text-lg leading-relaxed">
            <div className="text-left"> Web Developer</div>
            <span className="flex items-center gap-2">
              <PiBuildingOfficeThin /> Github, Inc. <FaLocationDot /> Menlo
              Park, CA
            </span>
          </div>
          <hr />
          <div className="text-gray-700 text-lg leading-relaxed">
            <div className="text-left"> Lead Front-end Engineer</div>
            <span className="flex items-center gap-2">
              <PiBuildingOfficeThin /> Slack, Inc. <FaLocationDot /> Menlo Park,
              CA
            </span>
          </div>
          <hr />
          <strong
            className="text-left mt-3 text-3xl"
            style={{ paddingBottom: "1rem" }}
          >
            Education
          </strong>
          <div className="text-gray-700 text-lg leading-relaxed">
            <div className="text-left"> Master in Software Engineering</div>
            <span className="flex items-center gap-2">
              <BsCalendar4Event /> Harvard University
            </span>
          </div>
          <hr />
          <div className="text-gray-700 text-lg leading-relaxed">
            <div className="text-left"> Batchelor in Software Engineering</div>
            <span className="flex items-center gap-2">
              <PiMedalThin /> Columbia University
            </span>
          </div>
          <hr />
        </div>

        {/* Column 3*/}
        <div className="flex flex-col justify-start space-y-3 mt-28  ">
          <div className="text-gray-700 ml-auto text-sm text-shadow-green-400 ">
            <div className=" text-green-400 bg-amber-50  px-4 rounded-full w-fit ">
              FULLTIME
            </div>
            <span className="flex items-center gap-2">
              <BsCalendar4Event /> November 2019 - Present
            </span>
          </div>
          <hr />
          <div className="text-gray-700 ml-auto text-sm  text-shadow-green-400 ">
            <div className="text-left  text-green-400 bg-amber-50  px-4 rounded-full w-fit ">
              {" "}
              PART TIME
            </div>
            <span className="flex items-center gap-2">
              <BsCalendar4Event /> March 2015 - November 2019
            </span>
          </div>
          <hr className="border-t border-gray-300 pb-5 mt-5 w-full mr-10 " />
          <div className="text-gray-700 ml-auto text-sm text-shadow-green-400">
            <div className="text-left  text-green-400 bg-amber-50  px-4 rounded-full w-fit">
              {" "}
              FULLTIME
            </div>
            <span className="flex items-center gap-2">
              <BsCalendar4Event /> June 2012 - March 2015
            </span>
          </div>
          <hr />
          <div className="text-gray-700 ml-auto text-sm text-shadow-green-400">
            <div className="text-left  text-green-400 bg-amber-50  px-4 rounded-full w-fit">
              {" "}
              FULLTIME
            </div>
            <span className="flex items-center gap-2">
              <BsCalendar4Event /> January 2009 - June 2012
            </span>
          </div>
          <hr />

          
        </div>
      </div>
    </div>
  );
};

export default Resume;
