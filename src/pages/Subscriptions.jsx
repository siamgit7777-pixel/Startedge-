import React from "react";
import Marquee from "react-fast-marquee";
import Card from "../Components/Card";

export default function Subscriptions() {
  return (
    <div className="max-w-7xl mx-auto">
      <img
        className="w-full h-[250px] md:h-[400px] object-cover rounded-lg"
        src="https://i0.wp.com/picjumbo.com/wp-content/uploads/green-natural-background-with-wooden-surface-free-image.jpeg?w=2210&quality=70"
        alt=""
      />

      <div>
        <Marquee className="text-xl text-gray-800 my-10" speed={50}>
          <div className="flex items-center">
            <button className="cursor-pointer">
              {" "}
              <img
                className="w-32 object-cover rounded-full mx-4"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS217W9xTUbUdeifHOfE8ik7miluwNl1eIp8A&s"
                alt=""
              />
            </button>
            <button className="cursor-pointer">
              {" "}
              <img
                className="w-32 object-cover rounded-full mx-4"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS217W9xTUbUdeifHOfE8ik7miluwNl1eIp8A&s"
                alt=""
              />
            </button>
            <button className="cursor-pointer">
              {" "}
              <img
                className="w-32 object-cover rounded-full mx-4"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS217W9xTUbUdeifHOfE8ik7miluwNl1eIp8A&s"
                alt=""
              />
            </button>
            <button className="cursor-pointer">
              {" "}
              <img
                className="w-32 object-cover rounded-full mx-4"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS217W9xTUbUdeifHOfE8ik7miluwNl1eIp8A&s"
                alt=""
              />
            </button>
            <button className="cursor-pointer">
              {" "}
              <img
                className="w-32 object-cover rounded-full mx-4"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS217W9xTUbUdeifHOfE8ik7miluwNl1eIp8A&s"
                alt=""
              />
            </button>
            <button className="cursor-pointer">
              {" "}
              <img
                className="w-32 object-cover rounded-full mx-4"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS217W9xTUbUdeifHOfE8ik7miluwNl1eIp8A&s"
                alt=""
              />
            </button>
            <button className="cursor-pointer">
              {" "}
              <img
                className="w-32 object-cover rounded-full mx-4"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS217W9xTUbUdeifHOfE8ik7miluwNl1eIp8A&s"
                alt=""
              />
            </button>
            <button className="cursor-pointer">
              {" "}
              <img
                className="w-32 object-cover rounded-full mx-4"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS217W9xTUbUdeifHOfE8ik7miluwNl1eIp8A&s"
                alt=""
              />
            </button>
            <button className="cursor-pointer">
              {" "}
              <img
                className="w-32 object-cover rounded-full mx-4"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS217W9xTUbUdeifHOfE8ik7miluwNl1eIp8A&s"
                alt=""
              />
            </button>
            <button className="cursor-pointer">
              {" "}
              <img
                className="w-32 object-cover rounded-full mx-4"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS217W9xTUbUdeifHOfE8ik7miluwNl1eIp8A&s"
                alt=""
              />
            </button>
            <button className="cursor-pointer">
              {" "}
              <img
                className="w-32 object-cover rounded-full mx-4"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS217W9xTUbUdeifHOfE8ik7miluwNl1eIp8A&s"
                alt=""
              />
            </button>
          </div>
        </Marquee>
      </div>

      {/* Card */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
