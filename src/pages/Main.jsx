import { Modal, Swiper } from "../components/index";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "../ui/index";
import { bg, img1 } from "../assets";
import { useState } from "react";
function Main() {
  AOS.init({
    duration: 1000,
    once: true,
  });

  const [isModal, setIsModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsModal(!isModal);
  };

  return (
    <div className="mt-[80px] h-full w-full">
      {/* Home section */}
      <section className="h-165 w-full" id="home">
        <div className="relative">
          <img
            src={bg}
            alt="car"
            className="h-[650px] w-full object-cover repeat-no-repeat"
          />
          <div className="absolute h-[650px] w-full top-0 left-0 right-0 bottom-0 bg-black/50">
            <Swiper />
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="w-full relative">
        <div className="md:w-8/10 mx-auto my-15">
          <div className="w-full flex flex-col items-center mb-15">
            <h1 className="text-4xl font-bold uppercase">
              company at a glance
            </h1>
            <span className="block w-[70px] h-[3px] mt-4 bg-blue-500"></span>
          </div>
          <div className="flex w-full items-center align-middle justify-between">
            <div className="flex-1 ">
              <img
                src={img1}
                alt="img1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p>
                Our transportation company with 30 years of experience is you
                best choice for shipping cargo of any size, storage, packing or
                delivering wares to your customers. Our professional employees
                will take care of your goods, whenever you send them.
              </p>
              <p className="mt-2">
                You are granted complete control over the process of delivery by
                phone or by our mobile app. Your freight is tracked every step
                of the way. We provide a high standard of shipping, regardless
                of its volume. If your company needs to establish a supply
                chain, we have prepared several readymade solutions with
                flexible pricing rates for you. Our urgent cargo services offer
                defined time frames for convenience of your business. Our supply
                chain services include shipping, warehousing, packaging, quality
                control and distribution.
              </p>
              <Button
                label={"contact us"}
                onClick={handleClick}
                className={
                  "uppercase font-bold bg-blue-500 text-white px-6 py-3 mt-5 rounded-xl text-sm hover:scale-105 transition-transform transform hover:bg-blue-600"
                }
              />
            </div>
          </div>
        </div>
        {isModal && (
          <Modal
            setIsModal={setIsModal}
            isModal={isModal}
            className={"bg-white w-[500px] h-[500px] rounded-2xl p-5"}
          />
        )}
      </section>
    </div>
  );
}

export default Main;
