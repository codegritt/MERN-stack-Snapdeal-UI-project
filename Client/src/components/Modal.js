import React from "react";
import PincodeActnWidget from "./Modal.module.css";
import DeliveryPin from "./Modal.module.css";
import DashPincode from "./Modal.module.css";
import LetDelivr from "./Modal.module.css";
import Checkavail from "./Modal.module.css";
import InputText from "./Modal.module.css";
import Nbapincode from "./Modal.module.css";
import PincodeNbaText from "./Modal.module.css";
import ErrorPincodehidden from "./Modal.module.css";
import NextBestActionControls from "./Modal.module.css";
import PincodeNbaSubmit from "./Modal.module.css";
import PincodeSkipSubmit from "./Modal.module.css";
import Sidebar2Img from "./Modal.module.css";

export default function Modal() {
  return (
    <>
      <div className={PincodeActnWidget.pincodeActnWidget}>
        <img
          className={Sidebar2Img.sidebar2img}
          src="https://lh3.googleusercontent.com/mvDOOVTSfjCe6Ef-RRGYA3IBVkx-3XRwaCPyo3rFJx_C-mfEOxXnC5MeoyVVo5MgvS1CkjdvS4fVaVPHFEIZd3akNttf1roIYhSazn3P"
          alt=""
        />
        <div className={DeliveryPin.deliveryPin}>Your Delivery Pincode</div>
        <div className={DashPincode.dashPincode}></div>
        <p className={LetDelivr.letDelivr}>
          Enter your pincode to check availability and faster delivery options
        </p>
        <div className={Checkavail.checkavail}>
          <input
            className={InputText.inputtext}
            type="text"
            id="pincode-check-nba"
            maxlength="6"
            placeholder="Enter pincode"
            value=""
          />
        </div>

        <div className={Nbapincode.nbaPincode}>
          Pincode: <span className={PincodeNbaText.pincodeNbaText}></span>
        </div>

        <div className={ErrorPincodehidden.errorPincodehidden}>
          Please enter a valid pincode
        </div>

        <div className={NextBestActionControls.nextBestActionControls}>
          <button
            className={PincodeNbaSubmit.pincodeNbaSubmit}
            data-stack="stack_yuda"
          >
            <span class="">SUBMIT</span>
          </button>
          <button
            className={PincodeSkipSubmit.pincodeSkipSubmit}
            data-stack="stack_yuda"
          >
            <span class="">NEXT</span>
          </button>
        </div>
      </div>
    </>
  );
}
