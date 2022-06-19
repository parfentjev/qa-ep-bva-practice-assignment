import { FC, useRef, RefObject } from 'react';

enum Messages {
  REJECTED_NAN = 'REJECTED: The value must be an integer.',
  REJECTED_NOT_ACCEPTABLE = 'REJECTED: An integer must be >= -10000 and <= 10000, it is not stored.',
  ACCEPTED_NEGATIVE = 'ACCEPTED: Stored as a negative integer.',
  ACCEPTED_POSITIVE = 'ACCEPTED: Stored as a positive integer.',
  ACCEPTED_ZERO = 'ACCEPTED: Not stored (0).',
}

const EquivalencePartitioning: FC = () => {
  const input1Reference = useRef<HTMLInputElement>(null);
  const input2Reference = useRef<HTMLInputElement>(null);
  const input3Reference = useRef<HTMLInputElement>(null);
  const input4Reference = useRef<HTMLInputElement>(null);
  const input5Reference = useRef<HTMLInputElement>(null);
  const input6Reference = useRef<HTMLInputElement>(null);
  const input7Reference = useRef<HTMLInputElement>(null);
  const input8Reference = useRef<HTMLInputElement>(null);
  const input9Reference = useRef<HTMLInputElement>(null);
  const input10Reference = useRef<HTMLInputElement>(null);
  const input11Reference = useRef<HTMLInputElement>(null);
  const input12Reference = useRef<HTMLInputElement>(null);

  const parseInput = (input: RefObject<HTMLInputElement>): number => {
    if (input.current?.value.length == 0) {
      return NaN;
    }

    return Number(input.current?.value);
  };

  const program1Handler = () => {
    const userInput = parseInput(input1Reference);

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

  const program2Handler = () => {
    const userInput = parseInput(input2Reference);

    if (isNaN(userInput)) {
      alert(Messages.REJECTED_NAN);
    } else if (userInput > -10000 && userInput < 10000) {
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

  const program3Handler = () => {
    const userInput = parseInput(input3Reference);

    if (isNaN(userInput)) {
      alert(Messages.REJECTED_NAN);
    } else if (userInput < -10000 || userInput > 10000) {
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

  const program4Handler = () => {
    const userInput = parseInput(input4Reference);

    if (isNaN(userInput)) {
      alert(Messages.REJECTED_NAN);
    } else if (userInput <= -10000 || userInput >= 10000) {
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

  const program5Handler = () => {
    const userInput = parseInput(input5Reference);

    if (isNaN(userInput)) {
      alert(Messages.REJECTED_NAN);
    } else if (userInput === -10000 || userInput === 10000) {
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

  const program6Handler = () => {
    const userInput = parseInput(input6Reference);

    if (isNaN(userInput)) {
      alert(Messages.REJECTED_NAN);
    } else if (userInput >= -10001 && userInput <= 10001) {
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

  const program7Handler = () => {
    const userInput = parseInput(input7Reference);

    if (isNaN(userInput)) {
      alert(Messages.REJECTED_NAN);
    } else if (userInput >= -9999 && userInput <= 9999) {
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

  const program8Handler = () => {
    const userInput = parseInput(input8Reference);

    if (isNaN(userInput)) {
      alert(Messages.REJECTED_NAN);
    } else if (userInput != -10000 && userInput != 10000) {
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

  const program9Handler = () => {
    const userInput = parseInput(input9Reference);

    if (isNaN(userInput)) {
      alert(Messages.REJECTED_NAN);
    } else if (userInput >= -10000 && userInput <= 10000) {
      if (userInput > 0) {
        alert(Messages.ACCEPTED_NEGATIVE);
      } else if (userInput < 0) {
        alert(Messages.ACCEPTED_POSITIVE);
      } else {
        alert(Messages.ACCEPTED_ZERO);
      }
    } else {
      alert(Messages.REJECTED_NOT_ACCEPTABLE);
    }
  };

  const program10Handler = () => {
    const userInput = parseInput(input10Reference);

    if (isNaN(userInput)) {
      alert(Messages.REJECTED_NAN);
    } else if (userInput >= -10000 && userInput <= 10000) {
      if (userInput < -1) {
        alert(Messages.ACCEPTED_NEGATIVE);
      } else if (userInput > 1) {
        alert(Messages.ACCEPTED_POSITIVE);
      } else {
        alert(Messages.ACCEPTED_ZERO);
      }
    } else {
      alert(Messages.REJECTED_NOT_ACCEPTABLE);
    }
  };

  const program11Handler = () => {
    const userInput = parseInput(input11Reference);

    if (isNaN(userInput)) {
      alert(Messages.REJECTED_NAN);
    } else if (userInput >= -10000 && userInput <= 10000) {
      if (userInput < 0) {
        alert(Messages.ACCEPTED_NEGATIVE);
      } else {
        alert(Messages.ACCEPTED_POSITIVE);
      }
    } else {
      alert(Messages.REJECTED_NOT_ACCEPTABLE);
    }
  };

  const program12Handler = () => {
    const userInput = parseInput(input12Reference);

    alert(
      Math.random() * 2 > 1
        ? Messages.ACCEPTED_POSITIVE
        : Messages.ACCEPTED_NEGATIVE
    );
  };

  return (
    <div className='container'>
      <h1>EP & BVA Practice Assignment</h1>
      <p>
        This page contains a simple specification for Equivalence Partitioning
        and Boundary Value Analysis test design techniques, along with several
        different implementations of this specification. Implementation 1 is
        correct, others - not so much. Your goal is to find ON, OFF, OUT and IN
        values that will find bugs in all of them.
      </p>

      <h2>Specification</h2>
      <ul>
        <li>
          Any integer that is greater or equal to -10,000 and less or equal to
          10,000 is accepted by the programm;
        </li>
        <li>
          All negative integers must be stored in a database with other negative
          integers;
        </li>
        <li>
          All positive integers must be stored in a database with other positive
          integers;
        </li>
        <li>Zero should not be stored.</li>
      </ul>

      <h2>Implementations</h2>
      <h3>Implementation 1</h3>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Enter value...'
          aria-label='Enter value...'
          aria-describedby='button-addon2'
          ref={input1Reference}
        />
        <button
          className='btn btn-outline-secondary'
          type='button'
          id='button-addon2'
          onClick={program1Handler}
        >
          Validate
        </button>
      </div>

      <h3>Implementation 2</h3>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Enter value...'
          aria-label='Enter value...'
          aria-describedby='button-addon2'
          ref={input2Reference}
        />
        <button
          className='btn btn-outline-secondary'
          type='button'
          id='button-addon2'
          onClick={program2Handler}
        >
          Validate
        </button>
      </div>

      <h3>Implementation 3</h3>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Enter value...'
          aria-label='Enter value...'
          aria-describedby='button-addon2'
          ref={input3Reference}
        />
        <button
          className='btn btn-outline-secondary'
          type='button'
          id='button-addon2'
          onClick={program3Handler}
        >
          Validate
        </button>
      </div>

      <h3>Implementation 4</h3>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Enter value...'
          aria-label='Enter value...'
          aria-describedby='button-addon2'
          ref={input4Reference}
        />
        <button
          className='btn btn-outline-secondary'
          type='button'
          id='button-addon2'
          onClick={program4Handler}
        >
          Validate
        </button>
      </div>

      <h3>Implementation 5</h3>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Enter value...'
          aria-label='Enter value...'
          aria-describedby='button-addon2'
          ref={input5Reference}
        />
        <button
          className='btn btn-outline-secondary'
          type='button'
          id='button-addon2'
          onClick={program5Handler}
        >
          Validate
        </button>
      </div>

      <h3>Implementation 6</h3>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Enter value...'
          aria-label='Enter value...'
          aria-describedby='button-addon2'
          ref={input6Reference}
        />
        <button
          className='btn btn-outline-secondary'
          type='button'
          id='button-addon2'
          onClick={program6Handler}
        >
          Validate
        </button>
      </div>

      <h3>Implementation 7</h3>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Enter value...'
          aria-label='Enter value...'
          aria-describedby='button-addon2'
          ref={input7Reference}
        />
        <button
          className='btn btn-outline-secondary'
          type='button'
          id='button-addon2'
          onClick={program7Handler}
        >
          Validate
        </button>
      </div>

      <h3>Implementation 8</h3>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Enter value...'
          aria-label='Enter value...'
          aria-describedby='button-addon2'
          ref={input8Reference}
        />
        <button
          className='btn btn-outline-secondary'
          type='button'
          id='button-addon2'
          onClick={program8Handler}
        >
          Validate
        </button>
      </div>

      <h3>Implementation 9</h3>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Enter value...'
          aria-label='Enter value...'
          aria-describedby='button-addon2'
          ref={input9Reference}
        />
        <button
          className='btn btn-outline-secondary'
          type='button'
          id='button-addon2'
          onClick={program9Handler}
        >
          Validate
        </button>
      </div>

      <h3>Implementation 10</h3>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Enter value...'
          aria-label='Enter value...'
          aria-describedby='button-addon2'
          ref={input10Reference}
        />
        <button
          className='btn btn-outline-secondary'
          type='button'
          id='button-addon2'
          onClick={program10Handler}
        >
          Validate
        </button>
      </div>

      <h3>Implementation 11</h3>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Enter value...'
          aria-label='Enter value...'
          aria-describedby='button-addon2'
          ref={input11Reference}
        />
        <button
          className='btn btn-outline-secondary'
          type='button'
          id='button-addon2'
          onClick={program11Handler}
        >
          Validate
        </button>
      </div>

      <h3>Implementation 12</h3>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Enter value...'
          aria-label='Enter value...'
          aria-describedby='button-addon2'
          ref={input12Reference}
        />
        <button
          className='btn btn-outline-secondary'
          type='button'
          id='button-addon2'
          onClick={program12Handler}
        >
          Validate
        </button>
      </div>
    </div>
  );
};

export default EquivalencePartitioning;
