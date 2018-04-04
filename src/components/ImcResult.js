import React from 'react';
import { resultsDictionary } from './ResultsDictionary';

const ImcResult = (props) => {
  const alertClass = 'alert-success';
  const result = props.result;
  let level;
  
  if (result < 15) {
    level = 'level1';  
  } else if (result >= 15 && result < 16) {
    level = 'level2';
  } else if (result >= 16 && result < 18.5) {
    level = 'level3';
  } else if (result >= 18.5 && result < 25) {
    level = 'level4';
  } else if (result >= 25 && result < 30) {
    level = 'level5';
  } else if (result >= 30 && result < 35) {
    level = 'level6';
  } else if (result >= 35 && result < 40) {
    level = 'level7'; 
  } else {
    level = 'level8';
  }
  
  const output = result ?
      <div className={ "alert " + resultsDictionary[level].alertClass} role="alert">
        { resultsDictionary[level].message }
      </div> : '';
  
  return (output);
}

export default ImcResult;
        