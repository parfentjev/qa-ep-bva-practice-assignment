import { FC, useRef } from 'react'
import { Messages } from '../../data/Messages'
import { parseInput } from '../../utils/string-utils'
import BaseImplementation from '../BaseImplementation'

const Implementation10: FC = () => {
  const inputReference = useRef<HTMLInputElement>(null)

  const validationHandler = () => {
    const userInput = parseInput(inputReference)

    if (isNaN(userInput)) {
      alert(Messages.REJECTED_NAN)
    } else if (userInput >= -10000 && userInput <= 10000) {
      if (userInput < -1) {
        alert(Messages.ACCEPTED_NEGATIVE)
      } else if (userInput > 1) {
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
      title="Implementation 10"
      testid="implementation10"
      validationHandler={validationHandler}
      ref={inputReference}
    />
  )
}

export default Implementation10
