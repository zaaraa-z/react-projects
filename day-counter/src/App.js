import { useState } from 'react';

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  let resultDate = new Date();
  resultDate.setDate(resultDate.getDate() + count);

  function formatDate(date) {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
    });
  }
  function handleStepAdd() {
    setStep((s) => s + 1);
  }
  function handleStepMinus() {
    setStep((s) => s - 1);
  }
  function handleCountAdd() {
    setCount((c) => c + step);
  }
  function handleCountMinus() {
    setCount((c) => c - step);
  }
  function resetCounters() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className='wrapper'>
      <button className='reset-btn' onClick={resetCounters}>
        Reset Counters
      </button>

      <div className='action-wrapper'>
        <button className='counter-btn' onClick={handleStepMinus}>
          -
        </button>
        <span>
          <span style={{ fontWeight: 'bold' }}>Step: </span>
          {step}
        </span>
        <button className='counter-btn' onClick={handleStepAdd}>
          +
        </button>
      </div>

      <div className='action-wrapper'>
        <button className='counter-btn' onClick={handleCountMinus}>
          -
        </button>
        <span>
          <span style={{ fontWeight: 'bold' }}>Count: </span>
          {count}
        </span>
        <button className='counter-btn' onClick={handleCountAdd}>
          +
        </button>
      </div>

      <div className='message'>
        {count === 0 && (
          <h3>
            Today is <span className='colored'>{formatDate(resultDate)}</span>
          </h3>
        )}

        {count !== 0 && (
          <h3>
            <span className='colored'>{Math.abs(count)}</span>
            <span> day</span>
            {Math.abs(count) !== 1 && <span>s</span>}
            <span> {count >= 1 ? 'from today is' : 'ago was'} </span>
            <br />
            <span className='colored'>{formatDate(resultDate)}</span>
          </h3>
        )}
      </div>
    </div>
  );
}
