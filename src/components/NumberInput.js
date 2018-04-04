import React from 'react';
import PropTypes from 'prop-types';

const NumberInput = ({name, label, onChange, placeholder}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="number"
          name={name}
          className="form-control"
          placeholder={placeholder}
          step="0.01"
          onChange={onChange} />
      </div>
    </div>
  );
};

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.number
}

export default NumberInput;
