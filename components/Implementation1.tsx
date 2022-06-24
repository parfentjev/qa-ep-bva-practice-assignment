import { FC, useRef } from 'react';
import { Messages } from '../data/Messages';
import { parseInput } from '../utils/string-utils';

const Implementation1: FC = () => {
  const inputReference = useRef<HTMLInputElement>(null);

  const validationHandler = () => {
    const userInput = parseInput(inputReference);

    if (isNaN(userInput)) {
      alert(Messages.REJECTED_NAN);
    } else if (userInput >= -10000 && userInput <= 10000) {
      if (userInput < 0) {
        alert(Messages.ACCEPTED_NEGATIVE);
      } else if (userInput > 0) {
        alert(Messages.ACCEPTED_POSITIVE);
      } else {
        alert(Messages.ACCEPTED_ZERO);
      }
    } else {
      alert(Messages.REJECTED_NOT_ACCEPTABLE);
    }
  };

  return (
    <>
      <h3>Implementation 1</h3>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Enter value...'
          aria-label='Enter value...'
          aria-describedby='button-addon2'
          ref={inputReference}
        />
        <button
          className='btn btn-outline-secondary'
          type='button'
          id='button-addon2'
          onClick={validationHandler}
        >
          Validate
        </button>
      </div>
    </>
  );
};

export default Implementation1;
