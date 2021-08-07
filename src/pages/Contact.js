import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Select from "react-select";
import style from "../pages/Contact.module.css";

const options = [
  { value: "Wedding", label: "Wedding" },
  { value: "Corporate", label: "Corporate" },
  { value: "PrivateParties", label: "PrivateParties" },
  { value: "CharityDinner", label: "CharityDinner" },
  { value: "PrivateParties", label: "PrivateParties" },
  { value: "AwardsNight", label: "AwardsNight" },
  { value: "GalaDinner", label: "GalaDinner" },
];

const Contact = () => {
  return (
    <>
      <section className={style.contact_section_1}>
        <div className={style.banner_inner}>
          <div className={style.banner_content}>
            <div className={style.banner_content_inputs}>
              <div>
                <p className={style.text}>Contact us today</p>
              </div>
              <input
                className={style.inputs}
                type="text"
                placeholder="Full Name"
              />
              <input
                className={style.inputs}
                type="number"
                placeholder="Best Contact Number"
              />
              <input
                className={style.inputs}
                type="eamil"
                placeholder="Email Address"
              />
              <input
                className={style.inputs}
                type="number"
                placeholder="Number Of Guests"
              />
              <input
                className={style.inputs}
                placeholder="Prefered Date Of Event"
                type="text"
                onfocus="(this.type = 'date')"
                id="date"
              />
              <div className={style.nameinput}>
                <Select options={options} className={style.Select_input} />
              </div>
              <input
                className={style.inputs}
                type="text"
                placeholder="Venue if any"
              />
              <div className={style.checkboxs}>
                <input
                  type="checkbox"
                  value="I agree to receive emails from Spice Village on services/products they offer and allow them to contact me from time to time."
                />
                <p>
                  I agree to receive emails from Spice Village on
                  services/products they offer and allow them to contact me from
                  time to time.
                </p>
              </div>
              <div className={style.checkboxs}>
                <input
                  type="checkbox"
                  value="By submitting this form, you agree to Spice Village Terms & Conditions and Privacy Notice."
                />
                <p>
                  By submitting this form, you agree to Spice Village Terms &
                  Conditions and Privacy Notice.
                </p>
              </div>
              <div>
                <ReCAPTCHA sitekey="6LdJg8YbAAAAAF4pTfWEGCnZyPOqT8VMi3OivNlt" />
              </div>
              <div>
                <button type="submit" className={style.submitbtn}>
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
