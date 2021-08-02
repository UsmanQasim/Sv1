import React from "react";
import style from "../pages/LastMinuteOffers.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "react-bootstrap";
import Select from "react-select";

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

function onChange(value) {
  console.log("Captcha value:", value);
}

const LastMinuteOffers = () => {
  return (
    <>
      <form>
        <div className={style.container}>
          <div className={style.sections}>
            <div className={style.labelinput}>
              <label>I AM</label>
            </div>
            <div className={style.nameinput}>
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
              <input type="text" className={style.inputs} />
            </div>
          </div>
          <div className={style.sections}>
            <div className={style.labelinput}>
              <label>My Last Name</label>
            </div>
            <div className={style.nameinput}>
              <input type="text" className={style.inputs} />
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
              }}
              className={style.nameinput}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <input type="checkbox" />
                <label className={style.labelcheckbox}>
                  &nbsp;Wedding Package &nbsp; &nbsp;
                </label>
                <input type="checkbox" />
                <label className={style.labelcheckbox}>
                  &nbsp;Wedding Vanue{" "}
                </label>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <input type="checkbox" />
                <label className={style.labelcheckbox}>
                  &nbsp;Entertainer &#8195;&#8195;&#8199;&#8199;&#8199;
                </label>
                <input type="checkbox" />
                <label className={style.labelcheckbox}>
                  &nbsp;Photographer{" "}
                </label>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <input type="checkbox" />
                <label className={style.labelcheckbox}>
                  &nbsp;Decor &#8195;&#8199;&#8195;&#8195;&#8199;&#8195;&#8199;
                </label>
                <input type="checkbox" />
                <label className={style.labelcheckbox}>&nbsp;Caterer </label>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <input type="checkbox" />
                <label className={style.labelcheckbox}>
                  &nbsp;Wedding Cake{" "}
                </label>
              </div>
            </div>
          </div>
          <div className={style.sections}>
            <div className={style.labelinput}>
              <label>Postal Code</label>
            </div>
            <div className={style.nameinput}>
              <input type="text" className={style.inputs} />
            </div>
          </div>
          <div className={style.sections}>
            <div className={style.labelinput}>
              <label>Preffered Date of Event</label>
            </div>
            <div className={style.nameinput}>
              <input
                type="date"
                className={style.inputs}
                value="Preferred date"
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
              <div style={{ display: "flex", flexDirection: "row" }}>
                <input type="checkbox" />
                <label className={style.labelcheckbox}>&nbsp;Close</label>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <input type="checkbox" />
                <label className={style.labelcheckbox}>
                  &nbsp;Less than 5 miles
                </label>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <input type="checkbox" />
                <label className={style.labelcheckbox}>
                  &nbsp;I don't Care
                </label>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <input type="checkbox" />
                <label className={style.labelcheckbox}>
                  {" "}
                  &nbsp;Within 2 Hours{" "}
                </label>
              </div>
            </div>
          </div>
          <div className={style.sections}>
            <div className={style.labelinput}>
              <label>My Guest Count</label>
            </div>
            <div className={style.nameinput}>
              <input type="number" className={style.inputs} />
            </div>
          </div>
          <div className={style.sections}>
            <div className={style.labelinput}>
              <label>Type Of Event</label>
            </div>
            <div className={style.nameinput}>
              <Select options={options} className={style.inputs} />
            </div>
          </div>
          <div className={style.sections}>
            <div className={style.labelinput}>
              <label>My Email Address</label>
            </div>
            <div className={style.nameinput}>
              <input type="email" className={style.inputs} />
            </div>
          </div>
          <div className={style.sections}>
            <div className={style.labelinput}>
              <label>My Phone Number</label>
            </div>
            <div className={style.nameinput}>
              <input type="number" className={style.inputs} />
            </div>
          </div>
          <div className={style.sections}>
            <div className={style.labelinput}>
              <label>My Comments</label>
            </div>
            <div className={style.nameinput}>
              <input type="text" className={style.inputs} height="200px" />
            </div>
          </div>
          <div className={style.sections}>
            <div className={style.labelinput}>
              <label>How did You Here About us</label>
            </div>
            <div className={style.nameinput}>
              <Select options={second_options} className={style.inputs} />
            </div>
          </div>
          <div className={style.recap}>
            <ReCAPTCHA
              sitekey="6LdJg8YbAAAAAF4pTfWEGCnZyPOqT8VMi3OivNlt"
              onChange={onChange}
            />
          </div>
          <div className={style.btnSubmit}>
            <Button variant="outline-primary" size="lg">
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
