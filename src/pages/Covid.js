import React from "react";
import style from "./Main.module.css";
import logo from "../sv-logo.svg";

const Covid = () => {
  return (
    <>
      <div className={style.section_3}>
        <img src={logo} alt="little" className={style.imgstory} />
        <p className={style.title_story}>COVID-19 UPDATE</p>
        <p>
          <b>Safety measures taken by Spice Village Group</b>
        </p>
        <div className={style.paragraph} style={{ maxWidth: "700px" }}>
          <p>
            Spice Village is following strict Health & Safety Guidelines as
            always, with additional COVID-19 measures in place which has allowed
            us to maintain a 5-star food hygiene rating. In response to CDC and
            Department of Health reports, we are taking additional care in our
            operations out of an abundance of caution. Given that it is very
            unlikely that you can catch coronavirus from food. COVID-19 is a
            respiratory illness. It is not known to be transmitted by exposure
            to food or food packaging. For further information please read the
            guidance provided by Government and the European Food Safety
            Authority:
            <a
              href="https://www.gov.uk/government/publications/covid-19-guidance-for-foodbusinesses/guidance-for-food-businesses-on-coronavirus-covid-19."
              rel="noreferrer noopener"
              target="_blank"
            >
              https://www.gov.uk/government/publications/covid-19-guidance-for-foodbusinesses/guidance-for-food-businesses-on-coronavirus-covid-19.
            </a>
          </p>
          <p>
            Spice Village benefits form a large and modern corporate catering
            facility which allows us to maintain safe distance throughout the
            building.
          </p>
          <ul>
            <li>
              ‘2m distance’ floor markings throughout the premises to maintain
              safe distance.
            </li>
            <li>
              Installation of Hand sanitiser stands across all the entrances of
              the building.
            </li>
            <li>
              Installation of Hand sanitiser stands across all the entrances of
              the building.
            </li>
            <li>Multiple handwash sinks across the property.</li>
            <li>
              One way entry and exit systems to control who can access various
              sections of the building.
            </li>
            <li>Increasing the frequency of handwashing for all staff.</li>
            <li>Sanitisation of all delivery vehicles / delivery bags.</li>
            <li> Improved PPE for food production.</li>
            <li>
              Health screening questionnaires will be completed daily on arrival
              at work. Where employees indicate they are at risk of infection
              they will be excluded from work and asked to remain away from the
              workplace for 14 days.
            </li>
            <p>
              Thank you for your ultimate support during these hard times. We
              hope to welcome you back very soon! To keep yourself updated with
              any new announcements please follow us on our Instagram
              @spicevillageofficial and other social pages
            </p>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Covid;
