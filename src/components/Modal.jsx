import { useTranslation } from "react-i18next";
import { Button, Input, TextArea } from "../ui";
import axios from "axios";

function Modal({ setIsModal, isModal, className }) {
  const { t } = useTranslation();
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
  const handleClose = (e) => {
    e.preventDefault();
    setIsModal(!isModal);
  };
  return (
    <div className="fixed top-15 flex items-center justify-center w-full min-h-dvh bg-black/30 text-black z-9">
      <div className={className}>
        <form
          className="text-black/70 text-md relative"
          onSubmit={hadleMessage}
        >
          <label>{t("modal.selectRole")}</label>
          <div className="flex space-x-6 mt-2">
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
          <Input type={"email"} placeholder={t("modal.email")} name={"email"} />
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
          <button
            className="absolute top-0 right-0 text-2xl font-bold"
            onClick={(e) => {
              handleClose(e);
            }}
          >
            X
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
