import React from 'react';
import handHeldIphone from '../../assets/images/handeld-iphone-img.png';
import iphone from '../../assets/images/iphone-img.png';
import iphoneBase from '../../assets/images/iphone-base.png';
import { Button, DownloadButton } from '../../common';
import './features.scss';

const Features = () => {
  return (
    <div className="featureSection container">
      <h2 className="subTitle">Why Ajoovest?</h2>
      <div className="featureList">
        <div className="featureImg">
          <img src={handHeldIphone} alt="iphone" />
        </div>
        <div className="featureText">
          <div className="bodyBold">Digital Book Keeping & Tracking</div>
          <h3 className="headerTwo">
            Keep track of your ajo/thrift contributions on the go
          </h3>
          <p className="bodyText">
            From anywhere you are in the world you can keep up with all your
            periodic contributions (ajoo, esusu, adaji, akawo) with your trusted
            preferred agents nationwide.
          </p>
          <div className="downloadBtns">
            <DownloadButton device={'Apple'} />
            <DownloadButton device={'Android'} />
          </div>
        </div>
        <div className="featureText">
          <div className="bodyBold">Savings</div>
          <h3 className="headerTwo">Convenient Saving Plans</h3>
          <p className="bodyText">
            We bring you into a world where there are endless possibilities and
            opportunities. Save for specific financial targets Save with your
            friends, family, groups, etc.
          </p>
          <div className="btn">
            <Button text={'Start Saving'} />
          </div>
        </div>
        <div className="featureImg">
          <img src={iphone} alt="iphone" />
          <img className="iphoneBase" src={iphoneBase} alt="iphone" />
        </div>
      </div>
    </div>
  );
};

export default Features;
