import React from "react";
import Card from "../Components/Card";

const Courses = () => {
  return (
    <div className="max-w-11/12 mx-auto">
      <img
        className="w-full h-[250px] md:h-[400px] object-cover rounded-lg"
        src="https://img.freepik.com/free-psd/black-friday-super-sale-facebook-cover-banner-template_120329-5177.jpg?semt=ais_hybrid&w=740&q=80"
        alt=""
      />
      <div className="max-w-full md:max-w-3xl lg:max-w-4xl ">
        <h2 className="text-3xl md:text-lg font-bold text-gray-800 my-4">
          Courses
        </h2>

        <p className="text-gray-600 leading-relaxed">
          We offer all the trendy courses that are in demand in the global
          market. In addition, you are getting lab facilities where high-end
          computers with the required configuration are ready to facilitate your
          learning. After class, you can practice the topic in our labs to grow
          your skills. The courses are designed to make you confident throughout
          the learning journey with Creative IT.
        </p>
      </div>

      <div></div>
    </div>
  );
};

export default Courses;
