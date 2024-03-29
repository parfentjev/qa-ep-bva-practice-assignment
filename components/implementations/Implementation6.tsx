import { FC, useRef } from 'react'
import { Messages } from '../../data/Messages'
import { parseInput } from '../../utils/string-utils'
import BaseImplementation from '../BaseImplementation'
import { accepted, rejected } from '../../utils/alert'

const Implementation6: FC = () => {
  const inputReference = useRef<HTMLInputElement>(null)

  const validationHandler = () => {
    const userInput = parseInput(inputReference)

    if (isNaN(userInput)) {
      alert(Messages.REJECTED_NAN)
    } else if (userInput >= -10001 && userInput <= 10001) {
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
      title="Implementation 6"
      answer="OFF values -10,001 and 10,001 detect this bug."
      validationHandler={validationHandler}
      ref={inputReference}
    />
  )
}

export default Implementation6
