import { Cards, Maps, Modal, Swiperr } from "../components/index";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Input, TextArea } from "../ui/index";
import {
  bg,
  img1,
  img2,
  card1,
  card2,
  card3,
  c1,
  c2,
  c3,
  c4,
  c5,
  img3,
  img4,
  img5,
  img6,
  img7,
} from "../assets";
import { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { FaLock } from "react-icons/fa";
import axios from "axios";

import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();

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
            <h1 className="text-4xl font-bold uppercase">{t("about.title")}</h1>
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
              <p>{t("about.paragraph1")}</p>
              <p className="mt-2">{t("about.paragraph2")}</p>
              <Button
                label={t("about.button")}
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
            <h1 className="text-4xl font-bold uppercase">
              {t("services.title")}
            </h1>
            <span className="block w-[70px] h-[3px] mt-4 bg-blue-500"></span>
            <p className="mt-10 text-center md:w-5/10 mx-auto">
              {t("services.description")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:w-8/10 w-9/10 mx-auto my-15 gap-7">
            <Cards title={t("services.cards.transportation")} src={img2} />
            <Cards title={t("services.cards.logistics")} src={img3} />
            <Cards title={t("services.cards.towing")} src={img4} />
            <Cards title={t("services.cards.leasing")} src={img5} />
            <Cards title={t("services.cards.distribution")} src={img6} />
            <Cards title={t("services.cards.storage")} src={img7} />
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="w-full bg-blue-950 md:h-[500px] pb-10" id="whyUs">
        <div className="md:w-8/10 w-8/10 mx-auto text-white pt-20">
          <div className="w-full flex flex-col items-center mb-15">
            <h1 className="text-4xl font-bold uppercase">{t("whyUs.title")}</h1>
            <span className="block w-[70px] h-[3px] mt-4 bg-blue-500"></span>
          </div>
          <div className="grid md:grid-cols-3 items-center justify-center text-center gap-8">
            <div className="md:col-span-1">
              <div className="rounded-full bg-blue-500 mb-5 size-20 flex items-center justify-center mx-auto">
                <BiSolidLike className="size-12 text-white" />
              </div>
              <h1 className="text-xl font-bold">
                {t("whyUs.cards.service.title")}
              </h1>
              <p>{t("whyUs.cards.service.desc")}</p>
            </div>

            <div className="md:col-span-1">
              <div className="rounded-full bg-blue-500 mb-5 size-20 flex justify-center items-center mx-auto">
                <FaUsers className="size-12 text-white" />
              </div>
              <h1 className="text-xl font-bold">
                {t("whyUs.cards.reputation.title")}
              </h1>
              <p>{t("whyUs.cards.reputation.desc")}</p>
            </div>

            <div className="md:col-span-1">
              <div className="rounded-full bg-blue-500 mb-5 size-20 flex justify-center items-center mx-auto">
                <FaLock className="size-12 text-white" />
              </div>
              <h1 className="text-xl font-bold">
                {t("whyUs.cards.safety.title")}
              </h1>
              <p>{t("whyUs.cards.safety.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lates news */}
      <section className="w-full " id="news">
        <div className="md:w-8/10 w-9/10 mx-auto py-20">
          <div className="w-full flex flex-col items-center mb-15">
            <h1 className="text-4xl font-bold uppercase text-center">
              {t("news.latest_news")}
            </h1>
            <span className="block w-[70px] h-[3px] mt-4 bg-blue-500"></span>
          </div>
          <div className="flex gap-8 md:flex-row flex-col md:justify-between justify-center items-center">
            <div className="md:h-[500px] w-full">
              <img
                src={card1}
                alt="card1"
                className="h-[250px] object-cover w-full"
              />
              <h1 className="text-xl font-bold text-blue-500 my-4">
                {t("news.town_cargo_expansion")}
              </h1>
              <span className="text-black/50">{t("news.date_time")}</span>
              <p className="mt-2 text-black/70">
                {t("news.town_cargo_expansion_description")}
              </p>
            </div>
            <div className="md:h-[500px] w-full">
              <img
                src={card2}
                alt="card2"
                className="h-[250px] object-cover w-full"
              />
              <h1 className="text-xl font-bold text-blue-500 my-4">
                {t("news.how_to_reduce_costs")}
              </h1>
              <span className="text-black/50">{t("news.date_time")}</span>
              <p className="mt-2 text-black/70">
                {t("news.reduce_costs_description")}
              </p>
            </div>
            <div className="md:h-[500px] w-full">
              <img
                src={card3}
                alt="card3"
                className="h-[250px] object-cover w-full"
              />
              <h1 className="text-xl font-bold text-blue-500 my-4">
                {t("news.behind_the_wheel")}
              </h1>
              <span className="text-black/50">{t("news.date_time")}</span>
              <p className="mt-2 text-black/70">
                {t("news.behind_the_wheel_description")}
              </p>
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col items-center md:mb-15">
              <h1 className="text-4xl font-bold uppercase md:pt-10 mt-10 text-center">
                {t("news.our_partners")}
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
            <h1>{t("contact.title")}</h1>
          </div>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-[50%] w-full">
              <form
                className="text-black/70 text-md relative "
                onSubmit={hadleMessage}
              >
                <label className="text-white">{t("modal.selectRole")}</label>
                <div className="flex space-x-6 mt-2 text-white">
                  <div className="flex space-x-1">
                    <input
                      type="radio"
                      name="role"
                      value="owner"
                      id="owner"
                      required
                    />
                    <label className="">{t("modal.owner")}</label>
                  </div>
                  <div className="flex space-x-1">
                    <input
                      type="radio"
                      name="role"
                      value="company"
                      id="company"
                      required
                    />
                    <label className="">{t("modal.company")}</label>
                  </div>
                </div>
                <Input
                  placeholder={t("modal.firstName")}
                  pattern={"[A-Za-zЎҚҒҲа-яА-ЯёЁs]+"}
                  name={"firstName"}
                />
                <Input
                  placeholder={t("modal.lastName")}
                  pattern={"[A-Za-zЎҚҒҲа-яА-ЯёЁs]+"}
                  name={"surname"}
                />
                <Input
                  type={"email"}
                  placeholder={t("modal.email")}
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

                <TextArea name={"text"} placeholder={t("modal.message")} />
                <Button
                  label={t("modal.send")}
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
