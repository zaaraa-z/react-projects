import { useState } from 'react';

const messages = [
  '🙂 Born, Blink, Chaos...',
  '😋 No map, just adventure...',
  '🤐   Exist, adapt, repeat.',
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrev() {
    if (step > 1) setStep((step) => step - 1);
  }
  function handleNext() {
    if (step < 3) setStep((step) => step + 1);
  }
  function handleIsOpen() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <button className='close' onClick={handleIsOpen}>
        &times;
      </button>

      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>
          <div className='message'>
            <span style={{ color: '#7950f2' }}>Step {step}: </span>
            <span>{messages[step - 1]}</span>
          </div>
          <div className='buttons'>
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}
