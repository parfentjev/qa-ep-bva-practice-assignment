import { FC, useRef } from 'react'
import { Messages } from '../../data/Messages'
import { parseInput } from '../../utils/string-utils'
import BaseImplementation from '../BaseImplementation'
import { accepted, rejected } from '../../utils/alert'

const Implementation7: FC = () => {
  const inputReference = useRef<HTMLInputElement>(null)

  const validationHandler = () => {
    const userInput = parseInput(inputReference)

    if (isNaN(userInput)) {
      alert(Messages.REJECTED_NAN)
    } else if (userInput >= -9999 && userInput <= 9999) {
      if (userInput < 0) {
        accepted(Messages.ACCEPTED_NEGATIVE)
      } else if (userInput > 0) {
        accepted(Messages.ACCEPTED_POSITIVE)
      } else {
        accepted(Messages.ACCEPTED_ZERO)
      }
    } else {
      rejected(Messages.REJECTED_NOT_ACCEPTABLE)
    }
  }

  return (
    <BaseImplementation
      title="Implementation 7"
      answer="ON values -10,000 and 10,000 detect this bug."
      validationHandler={validationHandler}
      ref={inputReference}
    />
  )
}

export default Implementation7
