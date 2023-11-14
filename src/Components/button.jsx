import React from 'react';

function Button({ text, isbuttonclick }) {
  return (
    <button 
    className={ isbuttonclick ? 'buttonclick' : 'button-reset'}>
      {text}
    </button>
  );
}