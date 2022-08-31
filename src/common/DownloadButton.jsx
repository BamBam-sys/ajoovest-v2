import React from 'react';
import { StyledDownloadButton } from './styled';
import googlePlay from '../assets/images/google-play.png';
import apple from '../assets/images/apple.png';

const DownloadButton = ({ device }) => {
  return (
    <StyledDownloadButton>
      <div className="icon">
        <img src={device === 'Apple' ? apple : googlePlay} alt="icon" />
      </div>
      <div className="text">Download on</div>
      <div className="device">{device}</div>
    </StyledDownloadButton>
  );
};

export default DownloadButton;
