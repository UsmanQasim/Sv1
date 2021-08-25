import Axios from "axios";
import React, { useEffect, useState } from "react";
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
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [numOfGuests, setNumOfGuests] = useState("");
  const [date, setDate] = useState("");
  const [eventType, setEventType] = useState("");
  const [venue, setVenue] = useState("");

  useEffect(() => {
    console.log(eventType);
  }, []);

  const submitHandler = () => {
    const reqURL = "/contactInquiries/insert.php";

    const formData = {
      _insertContactInquiryToken: "0029c3f54faa8d898fc2fd6f4b731311",
      firstName: fullName,
      contact_no: phone,
      email: email,
      total_guests: numOfGuests,
      date: date,
      type_of_party: eventType,
    };

    Axios.post(reqURL, formData)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error.message));
  };

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
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                placeholder="Full Name"
              />
              <input
                className={style.inputs}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                placeholder="Best Contact Number"
              />
              <input
                className={style.inputs}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email Address"
              />
              <input
                className={style.inputs}
                value={numOfGuests}
                onChange={(e) => setNumOfGuests(e.target.value)}
                min={0}
                onFocus={(e) => (e.target.type = "number")}
                onBlur={(e) => (e.target.type = "text")}
                placeholder="Number Of Guests"
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
                <button
                  type="submit"
                  className={style.submitbtn}
                  onClick={submitHandler}
                >
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
