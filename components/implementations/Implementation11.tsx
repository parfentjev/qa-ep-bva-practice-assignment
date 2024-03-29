import { FC, useRef } from 'react'
import { Messages } from '../../data/Messages'
import { parseInput } from '../../utils/string-utils'
import BaseImplementation from '../BaseImplementation'
import { accepted, rejected } from '../../utils/alert'

const Implementation11: FC = () => {
  const inputReference = useRef<HTMLInputElement>(null)

  const validationHandler = () => {
    const userInput = parseInput(inputReference)

    if (isNaN(userInput)) {
      alert(Messages.REJECTED_NAN)
    } else if (userInput >= -10000 && userInput <= 10000) {
      if (userInput < 0) {
        accepted(Messages.ACCEPTED_NEGATIVE)
      } else {
        accepted(Messages.ACCEPTED_POSITIVE)
      }
    } else {
      rejected(Messages.REJECTED_NOT_ACCEPTABLE)
    }
  }

  return (
    <BaseImplementation
      title="Implementation 11"
      answer="ON value 0 detects this bug."
      validationHandler={validationHandler}
      ref={inputReference}
    />
  )
}

export default Implementation11
