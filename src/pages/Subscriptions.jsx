import React from "react";
import Marquee from "react-fast-marquee";
import Card from "../Components/Card";
import SubscriptionCatagory from "../Components/SubscriptionCatagory";

export default function Subscriptions() {
  const productsItems = [
    {
      prodImg: "https://adobebazar.com.bd/wp-content/uploads/2025/05/Canva.png",
      prodTitle: "Canva pro (edu) for 6 month official all device support",
      prodPrice: "৳59",
      prodOldPrice: "৳500",
    },
    {
      prodImg: "https://adobebazar.com.bd/wp-content/uploads/2025/05/Canva.png",
      prodTitle: "Capcart pro (edu) for 6 month official all device support",
      prodPrice: "৳400",
      prodOldPrice: "৳2500",
    },
    {
      prodImg: "https://adobebazar.com.bd/wp-content/uploads/2025/05/Canva.png",
      prodTitle: "Capcart pro (edu) for 6 month official all device support",
      prodPrice: "৳400",
      prodOldPrice: "৳1500",
    },
    {
      prodImg: "https://adobebazar.com.bd/wp-content/uploads/2025/05/Canva.png",
      prodTitle: "Capcart pro (edu) for 6 month official all device support",
      prodPrice: "৳700",
      prodOldPrice: "৳8000",
    },
    {
      prodImg: "https://adobebazar.com.bd/wp-content/uploads/2025/05/Canva.png",
      prodTitle: "Capcart pro (edu) for 6 month official all device support",
      prodPrice: "৳59",
      prodOldPrice: "৳500",
    },
    {
      prodImg: "https://adobebazar.com.bd/wp-content/uploads/2025/05/Canva.png",
      prodTitle: "Capcart pro (edu) for 6 month official all device support",
      prodPrice: "৳400",
      prodOldPrice: "৳2500",
    },
    {
      prodImg: "https://adobebazar.com.bd/wp-content/uploads/2025/05/Canva.png",
      prodTitle: "Capcart pro (edu) for 6 month official all device support",
      prodPrice: "৳400",
      prodOldPrice: "৳1500",
    },
    {
      prodImg: "https://adobebazar.com.bd/wp-content/uploads/2025/05/Canva.png",
      prodTitle: "Capcart pro (edu) for 6 month official all device support",
      prodPrice: "৳700",
      prodOldPrice: "৳8000",
    },
  ];

  return (
    <div className="max-w-11/12 mx-auto">
      <img
        className="w-full h-[250px] md:h-[400px] object-cover rounded-lg"
        src="https://i0.wp.com/picjumbo.com/wp-content/uploads/green-natural-background-with-wooden-surface-free-image.jpeg?w=2210&quality=70"
        alt=""
      />

      <SubscriptionCatagory />

      {/* Card */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-5 my-10">
        {productsItems.map((prod) => {
          return <Card prod={prod} />;
        })}
      </div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
