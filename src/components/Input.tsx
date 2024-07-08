import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getUSDValue, getEURValue, changeUSD, changeEUR} from "../stores/currency.ts";
import styles from './Input.module.css';

interface InputProps {
  type: string
}

const Input = ({type}): InputProps => {
  const currencyUSD = useSelector(getUSDValue);
  const currencyEUR = useSelector(getEURValue);
  const currency = type === 'USD' ? currencyUSD : currencyEUR;
  const dispatch = useDispatch();
  const handleChange = type === 'USD' ? changeUSD : changeEUR;
  return (
    <div className={styles['input-container']}>
      <label htmlFor={`currency${type}`}>{type}</label>
      <input min={0} type="number" id={`currency${type}`} value={currency} onChange={(e) => dispatch(handleChange(e.target.value))}/>
    </div>
  );
};

export default Input;