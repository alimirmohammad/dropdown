import { InputHTMLAttributes } from 'react';
import { createUseStyles } from 'react-jss';

import { gray, grayLight, primary } from '../utils/style';

import chevronUp from '../assets/chevron-up.svg';
import chevronDown from '../assets/chevron-down.svg';

type InputProps = InputHTMLAttributes<HTMLInputElement> & { focus: boolean };

export default function Input({ focus, ...props }: InputProps) {
  const classes = useStyles();
  const inputClass = [classes.input, focus ? classes.focus : ''].join(' ');

  return (
    <div className={classes.inputContainer}>
      <input className={inputClass} {...props} />
      <img src={focus ? chevronUp : chevronDown} className={classes.icon} />
    </div>
  );
}

const useStyles = createUseStyles({
  inputContainer: {
    position: 'relative',
  },
  input: {
    fontSize: 16,
    fontWeight: 500,
    color: gray,
    padding: 16,
    paddingRight: 40,
    borderRadius: 12,
    width: '100%',
    border: `1px solid ${grayLight}`,
    outline: 'none',
    cursor: 'pointer',
  },
  focus: {
    borderColor: primary,
    boxShadow: `0 0 10px ${primary}`,
  },
  icon: {
    width: 16,
    height: 16,
    position: 'absolute',
    top: '50%',
    right: 16,
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
  },
});
