import React from 'react';
import { DownloadButton } from '../../common';
import { ReactComponent as Dots } from '../../assets/images/grey-dots.svg';

import './callToAction.scss';

const CallToAction = () => {
  return (
    <div className="ctaSection container">
      <div className="cta">
        <h2 className="headerTwo">Join Ajoovest Family Today!</h2>
        <p className="bodyBold">Ask your Ajoovest Agent near you Today</p>
        <div className="btns">
          <div>
            <DownloadButton device={'Apple'} />
          </div>
          <div>
            <DownloadButton device={'Android'} />
          </div>
        </div>
        <Dots className="dotOne" />
        <Dots className="dotTwo" />
      </div>
    </div>
  );
};

export default CallToAction;
