import React from 'react';
import '../styles/Button.css'

function Button({ text, isbuttonclic, makeclic }) {
  return (
    <button 
    className={ isbuttonclic ? 'buttonclic' : 'button-reset'}
    onClick={makeclic}>
      {text}
    </button>
  );
}

export default Button;