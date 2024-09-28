"use client";
import { useState, useRef } from "react";
import classes from "./page.module.css";
import { useRouter } from "next/navigation";
import emailjs from '@emailjs/browser';
import Image from "next/image";
export default function Page() {
  const [noName, setNoName] = useState(false);
  const [noLast, setNoLast] = useState(false);
  const [noState, setNoState] = useState(false);
  const [noContact, setNoContact] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submit, setSubmit] = useState(false);
  const router = useRouter();


  async function onSubmit(event) {
    setSubmit(true);
    event.preventDefault();
    const formElement = event.target;
    const formData = new FormData(formElement);
    const acquisitionChannel = formData.getAll("acquisition");

    const input_data = Object.fromEntries(formData.entries());
    input_data.acquisition = acquisitionChannel;
    if (input_data["first-name"] == "") {
      setNoName(true);
      return;
    }
    if (input_data["last-name"] == "") {
      setNoLast(true);
      return;
    }
    if (input_data["address"] == "") {
      setNoState(true);
      return;
    }

    if (input_data["email"] == "" && input_data["phone"] == "") {
      setNoContact(true);
      return;
    }
    try {
      emailjs.sendForm('service_z30loik', 'template_bt0wb1r', formElement, 
      'K9S957DKRD9NM3VeM')
        .then((result) => {
            console.log('resultemail', result);
        }, (error) => {
            console.log('resultemail', error);
        });
        setSuccess(true); // Show success message
        setTimeout(() => {
          router.push("/"); // Redirect to home after 2 seconds
        }, 2000);
      } 
    catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <><form onSubmit={onSubmit}>
      <h2>Thanks for your interest in LSM! 🇲🇽</h2>
      <p>We just need some basic information from you</p>
      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" />
          <div className="control-error">
            {noName && <p>Please enter your name</p>}
          </div>
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" />
          <div className="control-error">
            {noLast && <p>Please enter your last name</p>}
          </div>
        </div>
      </div>
      <div className="control">
        <label htmlFor="address">What time zone are you in?</label>
        <input type="text" id="address" name="address" />
        <div className="control-error">
          {noState && <p>Please put in your time zone</p>}
        </div>
      </div>
      <hr />

      <div className="control">
        <label htmlFor="email">Email ✉️</label>
        <input id="email" type="email" name="email" />
      </div>

      <div className="control">
        <label htmlFor="phone">Phone Number 📞</label>
        <input id="phone" type="phone" name="phone" minLength={10} />
        <div className="control-error">
          {noContact && (
            <p>Please enter an email or a phone number</p>
          )}
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">Why do you want to learn LSM? Please choose one</label>
        <select id="dhh" name="dhh">
          <option value="yes">I am a Teacher of the Deaf</option>
          <option value="no-pero">I work with Deaf youth</option>
          <option value="no">Personal Enrichment</option>
        </select>
      </div>

      <fieldset>
        <legend>How should we contact you with the Zoom link</legend>
        <div className="control">
          <input type="checkbox" id="text" name="acquisition" value="text" />
          <label htmlFor="text">Text 💬</label>
        </div>

        <div className="control">
          <input type="checkbox" id="phone" name="acquisition" value="phone" />
          <label htmlFor="phone">Phone Call 📞</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="correo"
            name="acquisition"
            value="correo"
          />
          <label htmlFor="correo">Email ✉️</label>
        </div>
      </fieldset>

      <p className="form-actions">
        <button type="submit" className="button">
          Register
        </button>
      </p>
      <p>After registering we will send you a link to pay the $50 workshop fee.</p>
      {/* Success Message */}
      {success && (
        <p className="success-message">🎉🎉Registration successful! Redirecting...🎉🎉</p>
      )}
    </form>
    <div className={classes.hero}>
      <p>Participants will be able to recognize and produce basic Mexican Sign Language (LSM) signs including alphabet, colors, numbers and school related vocabulary.</p>
    <p>TSID is an Approved RID CMP Sponsor for continuing education activities. This Professional Studies program is offered for 0.3 CEUs at the basic Content Knowledge Level.</p>
    <p>Hands United promotes an environment of mutual respect free of discrimination based on gender, sexual orientation, race, religion, hearing status, or any other protected class.</p>
    <p>Any participant in need of accomodation must contact celena.a.ponce@gmail.com no later than October 19, 2024</p>
    <p>Cancellation and refund available prior to October 19, 2024.</p></div>
    <Image src="/CEUs/ACET.png" width={200} height={100}></Image><p></p><Image src="/CEUs/RID.png" width={100} height={100}></Image></>
  );
}
