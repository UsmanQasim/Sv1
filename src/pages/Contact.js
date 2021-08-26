import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Select from "react-select";
import style from "../pages/Contact.module.css";

import {API_KEY} from '../utlis/secrets';

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
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [numOfGuests, setNumOfGuests] = useState("");
  const [date, setDate] = useState("");
  const [eventType, setEventType] = useState("");
  const [venue, setVenue] = useState("");
  const [error, setError] = useState("");
  const [captchaSubmitted, setCaptchaSubmitted] = useState(false);

  const captchaSubmitHandler = (val) => {
    setCaptchaSubmitted(val);
    console.log(val);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      !fullName ||
      !phone ||
      !email ||
      !numOfGuests ||
      !date ||
      !eventType ||
      !venue
    ) {
      setError("Fill All The Fields");
      return;
    }

    const reqURL = "/api/v1/contactInquiries/insert.php?api_key=" + API_KEY;

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      console.log(this.responseText);
    };

    const reqData = `fullName=${fullName}&contact=${phone}&email=${email}&numOfGuests=${numOfGuests}&date=${date}&eventType=${eventType}&venue=${venue}`;

    xhttp.open("POST", reqURL);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(reqData);
  };

  return (
    <>
      <section className={style.contact_section_1}>
        <div className={style.banner_inner}>
          <div className={style.banner_content}>
            <form className={style.banner_content_inputs}>
              <div>
                <p className={style.text}>Contact us today</p>
              </div>
              <input
                className={style.inputs}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                placeholder="Full Name"
                required
              />
              <input
                className={style.inputs}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                placeholder="Best Contact Number"
                required
              />
              <input
                className={style.inputs}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email Address"
                required
              />
              <input
                className={style.inputs}
                value={numOfGuests}
                onChange={(e) => setNumOfGuests(e.target.value)}
                min={0}
                onFocus={(e) => (e.target.type = "number")}
                onBlur={(e) => (e.target.type = "text")}
                placeholder="Number Of Guests"
                required
              />
              <input
                className={style.inputs}
                placeholder="Prefered Date Of Event"
                type="text"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                id="date"
                required
              />
              <div className={style.nameinput}>
                <Select
                  options={options}
                  className={style.Select_input}
                  placeholder="Event Type"
                  onChange={(e) => setEventType(e.value)}
                />
              </div>
              <input
                className={style.inputs}
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                type="text"
                placeholder="Venue if any"
                required
              />
              <div className={style.checkboxs}>
                <input
                  type="checkbox"
                  value="I agree to receive emails from Spice Village on services/products they offer and allow them to contact me from time to time."
                  required
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
                  value="By submitting this form, you agree to Spice Village Terms &amp; Conditions and Privacy Notice."
                  required
                />
                <p>
                  By submitting this form, you agree to Spice Village Terms
                  &amp; Conditions and Privacy Notice.
                </p>
              </div>
              <div>
                <ReCAPTCHA
                  sitekey="6LdJg8YbAAAAAF4pTfWEGCnZyPOqT8VMi3OivNlt"
                  onChange={captchaSubmitHandler}
                />
              </div>
              <div>{error ? <div className={style.err}>error</div> : ""}</div>
              <div>
                <button
                  type="submit"
                  className={style.submitbtn}
                  onClick={submitHandler}
                  disabled={captchaSubmitted ? false : true}
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
