import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

type IconProps = {
  iconName: string
}

// [REFACTOR]: I want only <Icon /> switch  || continue with encapsulation paradigm  and use iconName and style as props
// adding types for the props
const CheckIcon = ({ iconName }: IconProps) => <FontAwesomeIcon icon={faCheck || iconName} style={{ color: '#FC3D03' }} />;

export default CheckIcon;

