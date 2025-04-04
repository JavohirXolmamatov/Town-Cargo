import { Cards, Maps, Modal, Swiperr } from "../components/index";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Input, TextArea } from "../ui/index";
import { bg, img1, img2, card1, c1, c2, c3, c4, c5 } from "../assets";
import { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { FaLock } from "react-icons/fa";
import axios from "axios";

import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";

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

  const hadleMessage = (e) => {
    e.preventDefault();
    const token = "7593360870:AAGzGobs9r4Mcux4F6TsMzG7064F1xXk9iQ";
    const chat_id = "5895156876";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const message = `Role: ${e.target.role.value}\nIsm: ${e.target.firstName.value}\nFamiliya: ${e.target.surname.value}\nEmail: ${e.target.email.value}\n Phone: ${e.target.phone.value}\n Message: ${e.target.text.value}`;

    const data = axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: message,
      },
    })
      .then(() => {
        console.log("Succesfully message");
      })
      .catch((e) => {
        console.log(error);
      });

    e.target.firstName.value = "";
    e.target.surname.value = "";
    e.target.email.value = "";
    e.target.phone.value = "";
    e.target.text.value = "";
  };

  return (
    <div className="mt-[80px] w-full">
      {/* Home section */}
      <section className="h-165 w-full" id="home">
        <div>
          <div className="relative">
            <img
              src={bg}
              alt="car"
              className="h-[650px] w-full object-cover repeat-no-repeat"
            />
            <div className="absolute h-[650px] md:w-full top-0 left-0 right-0 bottom-0 bg-black/50">
              <Swiperr />
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="w-full relative" id="about">
        <div className="md:w-8/10 w-9/10 mx-auto my-15">
          <div className="w-full flex flex-col items-center mb-15">
            <h1 className="text-4xl font-bold uppercase">
              company at a glance
            </h1>
            <span className="block w-[70px] h-[3px] mt-4 bg-blue-500"></span>
          </div>
          <div className="flex md:flex-row flex-col w-full items-center align-middle justify-between">
            <div className="flex-1">
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

      {/* Our services */}
      <section className="w-full bg-black/5" id="services">
        <div className="pt-20 mb-10">
          <div className="w-full flex flex-col items-center mb-15">
            <h1 className="text-4xl font-bold uppercase">our services</h1>
            <span className="block w-[70px] h-[3px] mt-4 bg-blue-500"></span>
            <p className="mt-10 text-center md:w-5/10 mx-auto">
              Our transportation company has been offering a vast set of
              reliable solutions for businesses and individuals all over the
              world since our establishment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:w-8/10 w-9/10 mx-auto my-15 gap-7">
            <Cards title={"Transportation"} src={img2} />
            <Cards title={"Logistcs"} src={img2} />
            <Cards title={"Towing service"} src={img2} />
            <Cards title={"Maintenance Leasing"} src={img2} />
            <Cards title={"Distribution Services"} src={img2} />
            <Cards title={"Storage"} src={img2} />
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="w-full bg-blue-950 md:h-[500px] pb-10" id="whyUs">
        <div className="md:w-8/10 w-8/10 mx-auto text-white pt-20">
          <div className="w-full flex flex-col items-center mb-15">
            <h1 className="text-4xl font-bold uppercase">WHY CHOOSE US</h1>
            <span className="block w-[70px] h-[3px] mt-4 bg-blue-500"></span>
          </div>
          <div className="grid md:grid-cols-3 items-center justify-center text-center gap-8">
            <div className="md:col-span-1">
              <div className="rounded-full bg-blue-500 mb-5 size-20 flex items-center justify-center mx-auto">
                <BiSolidLike className="size-12 text-white" />
              </div>
              <div className="">
                <h1 className="text-xl font-bold">Best serivice</h1>
                <p>
                  Our mission is to attract and retain customers by providing
                  Best in Class transportation solutions and fostering a
                  profitable, disciplined culture of safety, service, and trust.
                </p>
              </div>
            </div>
            <div className="md:col-span-1">
              <div className="rounded-full bg-blue-500 mb-5 size-20 flex justify-center items-center mx-auto ">
                <FaUsers className="size-12 text-white" />
              </div>
              <div className="">
                <h1 className="text-xl font-bold">Reputation</h1>
                <p>
                  We have established a strong presence in the transportation
                  industry. Our award-winning services earn a reputation for
                  quality and excellence that few can rival.
                </p>
              </div>
            </div>
            <div className="md:col-span-1">
              <div className="rounded-full bg-blue-500 mb-5 size-20 flex justify-center items-center mx-auto ">
                <FaLock className="size-12 text-white" />
              </div>
              <div className="">
                <h1 className="text-xl font-bold">Safety & Security</h1>
                <p>
                  Safety for our employees, customers and motoring public will
                  always remain our primary focus in all the policies,
                  procedures and programs that govern our business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lates news */}
      <section className="w-full " id="news">
        <div className="md:w-8/10 w-9/10 mx-auto py-20">
          <div className="w-full flex flex-col items-center mb-15">
            <h1 className="text-4xl font-bold uppercase">latest news</h1>
            <span className="block w-[70px] h-[3px] mt-4 bg-blue-500"></span>
          </div>
          <div className="flex gap-8 md:flex-row flex-col md:justify-between justify-center items-center">
            <div className="h-[500px] w-full">
              <img
                src={card1}
                alt="card1"
                className="h-[250px] object-cover w-full"
              />
              <h1 className="text-xl font-bold text-blue-500 my-4">
                Town Cargo Expands to New Routes!
              </h1>
              <span className="text-black/50">February 5, 2025, 10:00 AM</span>
              <p className="mt-2 text-black/70">
                Town Cargo is excited to announce the expansion of our trucking
                routes! We are now covering more regions to ensure faster and
                more efficient deliveries. Our commitment to reliable logistics
                continues to grow as we reach new destinations.
              </p>
            </div>
            <div className="h-[500px] w-full">
              <img
                src={card1}
                alt="card1"
                className="h-[250px] object-cover w-full"
              />
              <h1 className="text-xl font-bold text-blue-500 my-4">
                How to Reduce Transportation Costs in 2025
              </h1>
              <span className="text-black/50">February 5, 2025, 10:00 AM</span>
              <p className="mt-2 text-black/70">
                Looking to optimize your supply chain? Our logistics experts
                share five key strategies to cut down transportation costs while
                maintaining fast and secure deliveries. Read on to discover how
                smart planning and route optimization can benefit your business.
              </p>
            </div>
            <div className="h-[500px] w-full">
              <img
                src={card1}
                alt="card1"
                className="h-[250px] object-cover w-full"
              />
              <h1 className="text-xl font-bold text-blue-500 my-4">
                Behind the Wheel: A Day in the Life of a Town Cargo Driver
              </h1>
              <span className="text-black/50">February 5, 2025, 10:00 AM</span>
              <p className="mt-2 text-black/70">
                Ever wondered what it’s like to be a professional truck driver?
                Take a journey with one of our experienced drivers as they
                navigate long highways, manage schedules, and ensure your goods
                arrive safely.
              </p>
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col items-center md:mb-15">
              <h1 className="text-4xl font-bold uppercase md:pt-10 mt-10">
                Our Partners
              </h1>
              <span className="block w-[70px] h-[3px] mt-4 bg-blue-500"></span>
            </div>
            <div className="flex items-center align-middle justify-center">
              <Swiper
                spaceBetween={30}
                loop={true}
                freeMode={true}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                speed={400}
                slidesPerView={4}
                modules={[Autoplay]}
                className="flex items-center justify-center align-middle transition-all transform"
              >
                <SwiperSlide className="flex justify-center items-center">
                  <img
                    src={c1}
                    alt="c1"
                    className="w-[130px] h-[150px] object-contain"
                  />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                  <img
                    src={c2}
                    alt="c2"
                    className="w-[150px] h-[150px] object-contain"
                  />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                  <img
                    src={c3}
                    alt="c3"
                    className="w-[150px] h-[150px] object-contain"
                  />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                  <img
                    src={c4}
                    alt="c4"
                    className="w-[150px] h-[150px] object-contain"
                  />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                  <img
                    src={c5}
                    alt="c5"
                    className="w-[150px] h-[150px] object-contain"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* conatact */}
      <section className="w-full bg-blue-950" id="contact">
        <div className="md:w-8/10 w-9/10 mx-auto pt-15 pb-5">
          <div className="text-white text-xl font-bold">
            <h1>Contact Form</h1>
          </div>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-[50%] w-full">
              <form
                className="text-black/70 text-md relative "
                onSubmit={hadleMessage}
              >
                <label className="text-white">Select your role:</label>
                <div className="flex space-x-6 mt-2 text-white">
                  <div className="flex space-x-1">
                    <input
                      type="radio"
                      name="role"
                      value="owner"
                      id="owner"
                      required
                    />
                    <label className="">Owner</label>
                  </div>
                  <div className="flex space-x-1">
                    <input
                      type="radio"
                      name="role"
                      value="company"
                      id="company"
                      required
                    />
                    <label className="">Company</label>
                  </div>
                </div>
                <Input
                  placeholder={"Your first name"}
                  pattern={"[A-Za-zЎҚҒҲа-яА-ЯёЁs]+"}
                  name={"firstName"}
                />
                <Input
                  placeholder={"Your last name"}
                  pattern={"[A-Za-zЎҚҒҲа-яА-ЯёЁs]+"}
                  name={"surname"}
                />
                <Input
                  type={"email"}
                  placeholder={"Your email address"}
                  name={"email"}
                />
                <Input
                  type={"tel"}
                  placeholder={"+998 XX XXX XX XX"}
                  pattern={"^+998s?d{2}s?d{3}s?d{2}s?d{2}$"}
                  defaultValue={"+998 "}
                  inputMode={"numeric"}
                  name={"phone"}
                />

                <TextArea name={"text"} />
                <Button
                  label={"send message"}
                  type={"submit"}
                  className={
                    "bg-blue-500 px-6 py-2 rounded-xl text-white mt-3 text-center hover:bg-blue-600 transition-all duration-300 ease-in-out "
                  }
                />
              </form>
            </div>
            <div className="md:w-[50%] w-full">
              <Maps />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
