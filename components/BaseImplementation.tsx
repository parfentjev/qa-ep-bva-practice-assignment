import { forwardRef } from 'react'
import { toast } from 'react-toastify'
import { info } from '../utils/alert'

type ImplementationProps = {
  title: string
  answer: string
  validationHandler: () => void
}

const BaseImplementation = forwardRef<HTMLInputElement, ImplementationProps>(
  ({ title, answer, validationHandler }, ref) => {
    const validate = () => {
      validationHandler()
    }

    const showAnswer = () => {
      info(answer)
    }

    return (
      <div data-testid={title}>
        <h4>{title}</h4>
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
            onClick={showAnswer}
          >
            Show answer
          </button>
          <button className="btn btn-primary" type="button" onClick={validate}>
            Validate
          </button>
        </div>
      </div>
    )
  }
)

BaseImplementation.displayName = 'BaseImplementation'

export default BaseImplementation
