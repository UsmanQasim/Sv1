import React, { useState } from "react";
import style from "../pages/LastMinuteOffers.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "react-bootstrap";
import Select from "react-select";
import { API_KEY } from "../utlis/secrets";
import { Modal } from "react-bootstrap";

const options = [
  { value: "Wedding", label: "Wedding" },
  { value: "Corporate", label: "Corporate" },
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
  "I Dont Care",
  "Within 2 Hours",
];

const GENDERS = [
  "Mr", "Mrs"
]

const LastMinuteOffers = () => {
  // For Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  // Ends

  const [gender, setGender] = useState(GENDERS[0]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [packages, setPackages] = useState([]);
  const [pcode, setPcode] = useState(0);
  const [eventdate, setEventdate] = useState('');
  const [vanuetobe, setVenuetobe] = useState(checkbox2[0]);
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

  const packageChangeHandler = (checked, value) =>
    checked && !packages.includes(value)
      ? setPackages([...packages, value])
      : setPackages(packages.filter((p) => (p === value ? false : true)));

  const submitHandler = () => {
    let packages_str = "";
    packages.map((p) => (packages_str += `${p},`));
    
    // const formData = {
    //   firstName: fname,
    //   lastName: lname,
    //   gender: gender,
    //   packages: packages_str,
    //   postCode: pcode,
    //   eventDate: eventdate,
    //   venueToBe: vanuetobe,
    //   totalGuests: totalguests,
    //   eventType: Eventtype,
    //   email: email,
    //   phone: phno,
    //   comment: comment,
    //   howYouKnow: howuknow,
    // };
    
    const reqURL = "/v1/inquiries/insert.php?api_key=" + API_KEY;

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      console.log(this.responseText);
    }

    const reqData = `firstName=${fname}&lastName=${lname}&gender=${gender}&packages=${packages_str}&postCode=${pcode}&eventDate=${eventdate}&venueToBe=${vanuetobe}&totalGuests=${totalguests}&eventType=${Eventtype}&email=${email}&phone=${phno}&comment=${comment}&howYouKnow=${howuknow}`;

    xhttp.open("POST", reqURL);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(reqData);
  };

  return (
    <>
      <form>
        <div className={style.container}>
          <div className={style.sections}>
            <div className={style.labelinput}>
              <label>I Am</label>
            </div>
            <div className={style.nameinput}>
              {GENDERS.map((g, key) => {
                return (
                  <React.Fragment key={key}>
                    <input type="radio" checked={gender === g} value={g} onChange={() => setGender(g)} />
                    <label>&nbsp;{g}&nbsp; &nbsp;</label>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          <div className={style.sections}>
            <div className={style.labelinput}>
              <label>
                My First Name <span> *</span>
              </label>
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
              <label>
                My Last Name <span> *</span>
              </label>
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
              <label>
                I'm looking for <span> *</span>
              </label>
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
              <label>
                Postal Code <span> *</span>
              </label>
            </div>
            <div className={style.nameinput}>
              <input
                type="number"
                value={pcode}
                onChange={(e) => setPcode(e.target.value)}
                className={style.inputs}
                min={0}
              />
            </div>
          </div>
          <div className={style.sections}>
            <div className={style.labelinput}>
              <label>
                Preffered Date of Event<span> *</span>
              </label>
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
              <label>
                I Want My Event Venue To Be<span> *</span>
              </label>
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
                      checked={vanuetobe === item ? true : false}
                      value={item}
                      onChange={() => setVenuetobe(item)}
                    />
                    <label className={style.labelcheckbox}>&nbsp; {item}</label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={style.sections}>
            <div className={style.labelinput}>
              <label>
                My Guest Count <span> *</span>
              </label>
            </div>
            <div className={style.nameinput}>
              <input
                type="number"
                value={totalguests}
                min={0}
                onChange={(e) => setTotalGuest(e.target.value)}
                className={style.inputs}
              />
            </div>
          </div>
          <div className={style.sections}>
            <div className={style.labelinput}>
              <label>
                Type Of Event<span> *</span>
              </label>
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
              <label>
                My Email Address<span> *</span>
              </label>
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
              <label>
                My Phone Number<span> *</span>
              </label>
            </div>
            <div className={style.nameinput}>
              <input
                type="number"
                min={0}
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
                style={{ resize: "none", padding: "5px 10px" }}
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
              // onClick={handleShow}
              disabled={captchaSubmitted ? false : false}
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please Fill All Reuired (<span>*</span>) Fields
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
      <div style={{ height: "50px", marginBottom: 5 }}></div>
    </>
  );
};

export default LastMinuteOffers;
