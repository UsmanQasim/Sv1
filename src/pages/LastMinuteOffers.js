import React, { useState } from "react";
import style from "../pages/LastMinuteOffers.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "react-bootstrap";
import Select from "react-select";

import Axios from "axios";

const options = [
  { value: "Wedding", label: "Wedding" },
  { value: "Corporate", label: "Corporate" },
  { value: "PrivateParties", label: "PrivateParties" },
  { value: "CharityDinner", label: "CharityDinner" },
  { value: "PrivateParties", label: "PrivateParties" },
  { value: "AwardsNight", label: "AwardsNight" },
  { value: "GalaDinner", label: "GalaDinner" },
];

const second_options = [
  { value: "Internet Search", label: "Internet Search" },
  { value: "Advertisment", label: "Advertisment" },
  { value: "Friend", label: "Friend" },
  { value: "News", label: "News" },
  { value: "SocialMedia", label: "SocialMedia" },
  { value: "Frequent Customer", label: "Frequent Customer" },
  { value: "Other", label: "Other" },
];

const checkbox1 = [
  "Wedding Package",
  " Entertainer",
  "Decor",
  "Wedding Cake",
  "Wedding Vanue",
  "Photographer",
  "Caterer",
];

const checkbox2 = [
  "Close",
  "Less than 5 miles",
  "I don't Care",
  " Within 2 Hours",
];

const LastMinuteOffers = () => {
  const [gender, setGender] = useState("mr");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [packages, setPackages] = useState([]);
  const [pcode, setPcode] = useState(0);
  const [eventdate, setEventdate] = useState("11/01/2012");
  const [vanuetobe, setVenuetobe] = useState([]);
  const [totalguests, setTotalGuest] = useState("60");
  const [Eventtype, setEventtype] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhoneno] = useState("");
  const [comment, setComment] = useState("");
  const [howuknow, setHowuKnow] = useState("");
  const [captchaSubmitted, setCaptchaSubmitted] = useState(false);

  const onChange = (value) => {
    setCaptchaSubmitted(value);
  };

  const packageChangeHandler = (checked, value) => {
    if (checked && !packages.includes(value)) {
      setPackages([...packages, value]);
      console.log("Inserting");
    } else {
      setPackages(packages.filter((p) => (p === value ? false : true)));
      console.log("Removing");
    }
  };

  const venueChangeHandler = (checked, value) => {
    if (checked && !vanuetobe.includes(value)) {
      setVenuetobe([...vanuetobe, value]);
      console.log("Inserting");
    } else {
      setVenuetobe(vanuetobe.filter((p) => (p === value ? false : true)));
      console.log("Removing");
    }
  };

  const submitHandler = () => {
    let packages_str = "";
    packages.map((p) => (packages_str += `${p},`));

    let venue_str = "";
    vanuetobe.map((v) => (venue_str += `${v},`));

    console.log("Packages: " + packages_str);
    console.log("Venue To Be: " + venue_str);

    const reqURL = "http://localhost/sv1_be/insertInquiry.php";

    const formData = {
      firstName: fname,
      lastName: lname,
      gender: gender,
      packages: packages_str,
      postCode: pcode,
      eventDate: eventdate,
      venueToBe: vanuetobe,
      totalGuests: totalguests,
      eventType: Eventtype,
      email: email,
      phone: phno,
      comment: comment,
      howYouKnow: howuknow,
    };

    Axios.post(reqURL, formData)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <form>
        <div className={style.container}>
          <div className={style.sections}>
            <div className={style.labelinput}>
              <label>I AM</label>
            </div>
            <div
              className={style.nameinput}
              onChange={(e) => setGender(e.target.value)}
            >
              <input type="radio" name="user" />
              <label>&nbsp;Mr. &nbsp; &nbsp;</label>
              <input type="radio" name="user" />
              <label>&nbsp;Mrs.</label>
            </div>
          </div>
          <div className={style.sections}>
            <div className={style.labelinput}>
              <label>My First Name</label>
            </div>
            <div className={style.nameinput}>
              <input
                type="text"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                className={style.inputs}
              />
            </div>
          </div>
          <div className={style.sections}>
            <div className={style.labelinput}>
              <label>My Last Name</label>
            </div>
            <div className={style.nameinput}>
              <input
                type="text"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                className={style.inputs}
              />
            </div>
          </div>
          <div className={style.sections}>
            <div className={style.labelinput} style={{ height: "170px" }}>
              <label>I'm looking for</label>
            </div>
            <div
              style={{
                flexDirection: "column",
                height: "170px",
                justifyContent: "center",
                alignItems: "flex-start",
                overflowX: "hidden",
              }}
              className={style.nameinput}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  height: "170px",
                  width: "400px",
                }}
              >
                {checkbox1.map((item, key) => {
                  return (
                    <div className={style.packages_contianed} key={key}>
                      <input
                        type="checkbox"
                        checked={packages.includes(item) ? true : false}
                        value={item}
                        onChange={(e) =>
                          packageChangeHandler(e.target.checked, e.target.value)
                        }
                      />
                      <label className={style.labelcheckbox}>
                        &nbsp; {item}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={style.sections}>
            <div className={style.labelinput}>
              <label>Postal Code</label>
            </div>
            <div className={style.nameinput}>
              <input
                type="text"
                value={pcode}
                onChange={(e) => setPcode(e.target.value)}
                className={style.inputs}
              />
            </div>
          </div>
          <div className={style.sections}>
            <div className={style.labelinput}>
              <label>Preffered Date of Event</label>
            </div>
            <div className={style.nameinput}>
              <input
                type="date"
                value={eventdate}
                onChange={(e) => setEventdate(e.target.value)}
                className={style.inputs}
              />
            </div>
          </div>

          <div className={style.sections}>
            <div className={style.labelinput} style={{ height: "170px" }}>
              <label>I Want My Event Venue To Be</label>
            </div>

            <div
              style={{
                flexDirection: "column",
                height: "170px",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
              className={style.nameinput}
            >
              {checkbox2.map((item, key) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      maxWidth: "169px",
                    }}
                    key={key}
                  >
                    <input
                      type="checkbox"
                      checked={vanuetobe.includes(item) ? true : false}
                      value={item}
                      onChange={(e) =>
                        venueChangeHandler(e.target.checked, e.target.value)
                      }
                    />
                    <label className={style.labelcheckbox}>&nbsp; {item}</label>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={style.sections}>
            <div className={style.labelinput}>
              <label>My Guest Count</label>
            </div>
            <div className={style.nameinput}>
              <input
                type="number"
                value={totalguests}
                onChange={(e) => setTotalGuest(e.target.value)}
                className={style.inputs}
              />
            </div>
          </div>
          <div className={style.sections}>
            <div className={style.labelinput}>
              <label>Type Of Event</label>
            </div>
            <div className={style.nameinput}>
              <Select
                options={options}
                onChange={(e) => setEventtype(e.value)}
                className={style.inputs}
              />
            </div>
          </div>
          <div className={style.sections}>
            <div className={style.labelinput}>
              <label>My Email Address</label>
            </div>
            <div className={style.nameinput}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={style.inputs}
              />
            </div>
          </div>
          <div className={style.sections}>
            <div className={style.labelinput}>
              <label>My Phone Number</label>
            </div>
            <div className={style.nameinput}>
              <input
                type="number"
                value={phno}
                onChange={(e) => setPhoneno(e.target.value)}
                className={style.inputs}
              />
            </div>
          </div>
          <div className={style.sections}>
            <div className={style.labelinput}>
              <label>My Comments</label>
            </div>
            <div className={style.nameinput}>
              <textarea
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className={style.inputs}
                height="200px"
              ></textarea>
            </div>
          </div>
          <div className={style.sections}>
            <div className={style.labelinput}>
              <label>How did You Here About us</label>
            </div>
            <div className={style.nameinput}>
              <Select
                options={second_options}
                onChange={(e) => setHowuKnow(e.value)}
                className={style.inputs}
              />
            </div>
          </div>
          <div className={style.recap}>
            <ReCAPTCHA
              sitekey="6LdJg8YbAAAAAF4pTfWEGCnZyPOqT8VMi3OivNlt"
              onChange={onChange}
            />
          </div>
          <div className={style.btnSubmit}>
            <Button
              variant="outline-primary"
              size="lg"
              onClick={submitHandler}
              disabled={captchaSubmitted ? false : true}
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
      <div style={{ height: "50px;", marginBottom: 5 }}></div>
    </>
  );
};

export default LastMinuteOffers;
