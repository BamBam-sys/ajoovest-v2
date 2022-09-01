import React, { useRef, useState } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import './accordion.scss';

const Accordion = ({ label, content }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const ref = useRef();

  const active = accordionOpen ? 'active' : '';

  return (
    <div className={`accordion ${active}`}>
      <div className="label subTitle">{label}</div>
      <div className="content bodyText" ref={ref}>
        {content}
      </div>
      <div
        className="icon"
        onClick={() => {
          setAccordionOpen(!accordionOpen);
          accordionOpen
            ? (ref.current.style.height = 0)
            : (ref.current.style.height = ref.current.scrollHeight + 'px');
        }}
      >
        {accordionOpen ? <BiMinus /> : <BiPlus />}
      </div>
    </div>
  );
};

export default Accordion;

// .style.height = panel.scrollHeight + 'px';
