import { FC, useRef } from 'react'
import { Messages } from '../../data/Messages'
import { parseInput } from '../../utils/string-utils'
import BaseImplementation from '../BaseImplementation'
import { accepted, rejected } from '../../utils/alert'

const Implementation1: FC = () => {
  const inputReference = useRef<HTMLInputElement>(null)

  const validationHandler = () => {
    const userInput = parseInput(inputReference)

    if (isNaN(userInput)) {
      rejected(Messages.REJECTED_NAN)
    } else if (userInput >= -10000 && userInput <= 10000) {
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
      title="Implementation 1"
      answer="Works as expected."
      validationHandler={validationHandler}
      ref={inputReference}
    />
  )
}

export default Implementation1
