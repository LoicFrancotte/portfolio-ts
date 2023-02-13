import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const CheckIcon2: React.FC = () => (
  <FontAwesomeIcon
    icon={faArrowRight}
    style={{ transform: 'rotate(-45deg)' }}
  />
);
export default CheckIcon2;
