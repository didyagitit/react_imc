import React from 'react';

const ImcWarning = (props) => {
  const warning = props.warning;

  const output = warning ?
    <div id="warning-message" className={'alert alert-warning'} role="alert">
      Please fill all fields correctly.
    </div> : '';

  return (output);
};

export default ImcWarning;
