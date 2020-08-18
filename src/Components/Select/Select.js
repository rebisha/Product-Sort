import React from "react";
import { array, func, string } from "prop-types";

import styles from "./select.scss";

const Select = ({ initialValue, selectLabel, sizes, onChange }) => {
  return (
    <div className={styles.select}>
      <label htmlFor="sizes" className={styles.selectLabel}>{selectLabel}</label>
      <select name="sizes" id="sizes" onChange={onChange} className={styles.selectWrapper}>
        <option value={initialValue}>{initialValue}</option>
        {sizes.map((key, value) => {
          return (
            <option key={value} value={key}>
              {key}
            </option>
          );
        })}
      </select>
    </div>
  );
};

Select.propTypes = {
  sizes: array,
  onChange: func,
  selectLabel: string,
  initialValue: string
};

export default Select;
