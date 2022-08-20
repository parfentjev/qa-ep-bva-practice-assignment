import { RefObject } from 'react'

export const parseInput = (input: RefObject<HTMLInputElement>): number => {
  if (input.current?.value.length == 0) {
    return NaN
  }

  const number: number = Number(input.current?.value)

  if (Number.isInteger(number)) {
    return number
  } else {
    return NaN
  }
}
