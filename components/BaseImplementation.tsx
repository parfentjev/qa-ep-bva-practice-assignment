import { forwardRef, useRef } from 'react'

type ImplementationProps = {
  title: string
  testid: string
  validationHandler: () => void
}

const BaseImplementation = forwardRef<HTMLInputElement, ImplementationProps>(
  ({ title, testid, validationHandler }, ref) => {
    return (
      <div data-testid={testid}>
        <h3>{title}</h3>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter value..."
            aria-label="Enter value..."
            aria-describedby="button-addon2"
            ref={ref}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={validationHandler}
          >
            Validate
          </button>
        </div>
      </div>
    )
  }
)

export default BaseImplementation
