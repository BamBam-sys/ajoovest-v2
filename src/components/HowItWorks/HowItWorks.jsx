import React from 'react';
import iphone from '../../assets/images/iPhone-img2.png';
import './howItWorks.scss';

const HowItWorks = () => {
  return (
    <div className="howItWorks container">
      <h2 className="subTitle">How It Works</h2>
      <div className="stepsContainer">
        <div className="left">
          <img src={iphone} alt="iphone" />
        </div>

        <div className="right">
          <h2 className="headerTwo">4 Quick Steps To Use Our Services</h2>
          <div className="steps">
            <div className="step">
              <h3 className="subTitle">Download App</h3>
              <p className="bodyText">
                To use the Ajoovest app, proceed to download the app from{' '}
                <span>
                  <a href="/">apple store</a>
                </span>{' '}
                for android and{' '}
                <span>
                  <a href="/">playstore</a>
                </span>{' '}
                for IOS.
              </p>
            </div>
            <div className="step">
              <h3 className="subTitle">Create an Account</h3>
              <p className="bodyText">
                After downloading the app, you can create an account in less
                than 2 minutes.
              </p>
            </div>
            <div className="step">
              <h3 className="subTitle">Deposit Cash at your Ajoo/POS Agent</h3>
              <p className="bodyText">
                Visit your preferred AjooVest/POS agent (or have them come to
                you) Give the agent cash and tell him purpose (interface allows
                user to save for Ajoo, Target, or specified reason).
              </p>
            </div>
            <div className="step">
              <h3 className="subTitle">
                Confirm/Authenticate Cash Deposit on the App
              </h3>
              <p className="bodyText">
                Authenticate cash deposit by going on your app to enter
                transaction Pin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
