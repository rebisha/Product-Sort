import React from "react";
import { array, func } from "prop-types";

import styles from "./select.scss";

const Select = ({ sizes, onChange }) => {
  return (
    <div className={styles.select}>
      <label htmlFor="sizes" className={styles.selectLabel}>Filter by size:</label>
      <select name="sizes" id="sizes" onChange={onChange} className={styles.selectWrapper}>
        <option value="all">All</option>
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
};

export default Select;
