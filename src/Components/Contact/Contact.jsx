import "./Contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPhoneFlip, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function Contact() {
  const [terms, setTerms] = useState(false);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [tel, setTel] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const { t } = useTranslation();
  const { contactIntro, formTranslation } = t("contact");

  const handleTerms = () => {
    setTerms(!terms);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      firstName === "" ||
      lastName === "" ||
      tel === "" ||
      email === "" ||
      message === "" ||
      terms
    ) {
      alert("Preencha todos os campos");
    }

    const templateParams = {
      from_name: firstName,
      message: message,
      email: email,
    };
  };

  const wppPtUrl =
    "https://api.whatsapp.com/send/?phone=27999769330&text=Tenho+interesse+em+criar+um+projeto+com+a+HypeCode.+Tem+um+horário+disponível?&type=phone_number&app_absent=0";

  const wppEnUrl =
    "https://api.whatsapp.com/send/?phone=27999769330&text=I'm+interested+in+creating+a+project+with+HypeCode.+Do+you+have+any+available+time?&type=phone_number&app_absent=0";

  return (
    <section className="contact" id="contact">
      <div className="info--get-in-touch">
        <div className="get-in-toutch-text">
          <h2>{contactIntro.title}</h2>
          <p>{contactIntro.text}</p>
        </div>

        <div className="adress-container">
          <p>
            {contactIntro.cityName}
            <br />
            {contactIntro.LocationName}
          </p>
        </div>

        <div className="get-in-touch-contact">
          <span>
            <FontAwesomeIcon icon={faPhoneFlip} target="_blank" />
            <a href="tel: +5527 99976-9330">
              <p>(+55 ) 27 99976-9330</p>
            </a>
          </span>
          <span>
            <FontAwesomeIcon icon={faWhatsapp} />
            <a
              href={`${i18next.language === "pt-BR" ? wppPtUrl : wppEnUrl}`}
              target="_blank"
            >
              <p>(+55 ) 27 99976-9330</p>
            </a>
          </span>

          <span>
            <FontAwesomeIcon icon={faEnvelope} target="_blank" />
            <a href="mailto: hypecode@email.com">hypecode@email.com</a>
          </span>
        </div>
      </div>

      <form method="post" className="contact-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-name">
            <div className="form-inner">
              <label htmlFor="first-name">{formTranslation.firstName}</label>
              <div className="input-group">
                <input
                  type="text"
                  id="first-name"
                  placeholder={formTranslation.firstNamePlaceholder}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-name">
            <div className="form-inner">
              <label htmlFor="last-name">{formTranslation.lastName}</label>
              <div className="input-group">
                <input
                  type="text"
                  id="last-name"
                  placeholder={formTranslation.lastNamePlaceholder}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="form-tel">
          <div className="form-inner">
            <label htmlFor="tel">{formTranslation.tel}</label>
            <div className="input-group">
              <input
                type="tel"
                id="tel"
                placeholder={formTranslation.telPlaceholder}
                onChange={(e) => setTel(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-email">
          <div className="form-inner">
            <label htmlFor="email" required>
              {formTranslation.email}
            </label>
            <div className="input-group">
              <input
                type="text"
                id="email"
                placeholder={formTranslation.emailPlaceholder}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-text-area">
          <div className="form-inner">
            <label htmlFor="message">{formTranslation.message}</label>
            <div className="input-group">
              <textarea
                required
                placeholder={formTranslation.messagePlaceholder}
                id="message"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="terms-and-conditions">
          <input type="checkbox" onChange={() => handleTerms()} required />
          <p>
            {formTranslation.terms1}
            <a
              href="https://doem.org.br/ba/modelo/arquivos/pdfviewer/0b517cdc5f9850e3782051c82e7f3234?name=lorem-ipsum.pdf"
              target="_blank"
            >
              {formTranslation.terms2}
            </a>
          </p>
        </div>

        <input className="submit-button" type="submit" />
      </form>
    </section>
  );
}

export default Contact;
