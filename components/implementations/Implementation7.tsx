import { FC, useRef } from 'react'
import { Messages } from '../../data/Messages'
import { parseInput } from '../../utils/string-utils'
import BaseImplementation from '../BaseImplementation'

const Implementation7: FC = () => {
  const inputReference = useRef<HTMLInputElement>(null)

  const validationHandler = () => {
    const userInput = parseInput(inputReference)

    if (isNaN(userInput)) {
      alert(Messages.REJECTED_NAN)
    } else if (userInput >= -9999 && userInput <= 9999) {
      if (userInput < 0) {
        alert(Messages.ACCEPTED_NEGATIVE)
      } else if (userInput > 0) {
        alert(Messages.ACCEPTED_POSITIVE)
      } else {
        alert(Messages.ACCEPTED_ZERO)
      }
    } else {
      alert(Messages.REJECTED_NOT_ACCEPTABLE)
    }
  }

  return (
    <BaseImplementation
      title="Implementation 7"
      testid="implementation7"
      validationHandler={validationHandler}
      ref={inputReference}
    />
  )
}

export default Implementation7
