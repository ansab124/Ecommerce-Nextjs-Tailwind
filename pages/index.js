import Hero from "../components/Hero";
import Products from "../components/Products";
import laptop from "../assets/laptop.png"
import watch from "../assets/watch.png"
import products from "../assets/products-image-1.png"
import trimmer from "../assets/trimmer.png"
import vrgame from "../assets/vr-game.png"
import speaker from "../assets/speaker.png"
import Banner from "../components/Banner";
import Deals from "../components/Deals";
import image1 from "../assets/image-1.png";
import image2 from "../assets/image-2.png";
import image3 from "../assets/image-3.png";
import image4 from "../assets/image-4.png";
import image5 from "../assets/image-5.png";
import image6 from "../assets/image-6.png";
import image7 from "../assets/image-7.png";
import headPhone from "../assets/headPhone.png";
import BottomBanner from "../components/BottomBanner";
import ViewMoreButton from "../components/ViewMoreButton";
import Reviews from "../components/Reviews";
import ReviewButton from "../components/ReviewButton";
import Newsletter from "../components/Newsletter";


export default function Home() {

  const items = [{
    bg: "bg-gradient-to-tr from-[#272727] to-[#FFFFFF]",
    text1: "etxt1",
    text2: "text2",
    text3: "text3",
    image: products,
    height: 110,
    width: 110
  
  },
  {
    bg: "bg-gradient-to-tr from-[#CB1F2C] to-[#E78657]",
    text1: "etxt1",
    text2: "text2",
    text3: "text3",
    image: watch,
    height: 210,
    width: 170
  
  }, {
    bg: "bg-gradient-to-tr from-[#0084B0] to-[#FFFFFF]",
    text1: "etxt1",
    text2: "text2",
    text3: "text3",
    image: laptop,
    height: 110,
    width: 250
  
  }, {
    bg: "bg-gradient-to-tr from-[#164454] to-[#FFFFFF]",
    text1: "etxt1",
    text2: "text2",
    text3: "text3",
    image: trimmer,
    height: 200,
    width: 250
  
  }, {
    bg: "bg-gradient-to-tr from-[#989797] to-[#FFFFFF]",
    text1: "etxt1",
    text2: "text2",
    text3: "text3",
    image: vrgame,
    height: 110,
    width: 250
  
  }, {
    bg: "bg-gradient-to-tr from-[#57A96B] to-[#FFFFFF]",
    text1: "etxt1",
    text2: "text2",
    text3: "text3",
    image: speaker,
    height: 110,
    width: 200
  
  }]
  
  
  const deals = [{
    image: laptop,
    background: "bg-gradient-to-tr from-[#EBF1FD] to-[#D1E0F3]",
    name: "Macbook Pro",
    price: "₦170,560",
  },
  {
    image: headPhone,
    background: "bg-gradient-to-tr from-[#EBF1FD] to-[#D1E0F3]",
    name: "Beat Solo 3",
    price: "₦70,000"
  },
  {
    image: image2,
    background: "bg-gradient-to-tr from-[#EBF1FD] to-[#D1E0F3]",
    name: "1TB SSD",
    price: "₦30,000"
  }, {
    image: image3,
    background: "bg-gradient-to-tr from-[#EBF1FD] to-[#D1E0F3]",
    name: "PlayStation VR",
    price: "₦40,700"
  }, {
    image: image4,
    background: "bg-gradient-to-tr from-[#EBF1FD] to-[#D1E0F3]",
    name: "Xbox 1 Controller",
    price: "₦45,000"
  }, {
    image: image5,
    background: "bg-gradient-to-tr from-[#EBF1FD] to-[#D1E0F3]",
    name: "Go Pro Hero session",
    price: "₦225,000"
  }, {
    image: image6,
    background: "bg-gradient-to-tr from-[#EBF1FD] to-[#D1E0F3]",
    name: "Apple Watch Series 3",
    price: "₦125,000"
  },
  {
    image: image7,
    background: "bg-gradient-to-tr from-[#EBF1FD] to-[#D1E0F3]",
    name: "Mavic Drone",
    price: "₦125,000"
  },
  ]
  return (
    <>
      <Hero />
      <div className="grid grid-cols-3  w-full mx-auto gap-5">
        {items.map((value, index) => {
          return <Products key={index} item={value} />
        })}

      </div>
      <Banner />


      <div className=" my-10 justify-center items-center flex flex-col w-full space-y-2">
        <h1 className="   text-3xl font-bold">Super <span className=" text-red-600">Deals</span></h1>
        <p className="font-bold">Check out the best selling Gadgets</p>
      </div>
      <div className="grid grid-cols-4  w-full mx-auto gap-5">

        {deals.map((value, index) => {
          return <Deals key={index} item={value} />
        })}

      </div>

      <ViewMoreButton />
      <BottomBanner />
      <Reviews />
      <ReviewButton />
      <Newsletter/>

    </>
  )
}
