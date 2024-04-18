import { FC } from 'react'
import Implementation1 from './implementations/Implementation1'
import Implementation10 from './implementations/Implementation10'
import Implementation11 from './implementations/Implementation11'
import Implementation2 from './implementations/Implementation2'
import Implementation3 from './implementations/Implementation3'
import Implementation4 from './implementations/Implementation4'
import Implementation5 from './implementations/Implementation5'
import Implementation6 from './implementations/Implementation6'
import Implementation7 from './implementations/Implementation7'
import Implementation8 from './implementations/Implementation8'
import Implementation9 from './implementations/Implementation9'

const Implementations: FC = () => {
  return (
    <div className="container">
      <h1>EP & BVA Practice Assignment</h1>
      <p>
        This page contains a simple specification for Equivalence Partitioning
        and Boundary Value Analysis test design techniques, along with several
        different implementations of this specification. Implementation 1 is
        correct, others - not so much. Your goal is to find ON; OFF, OUT, and IN
        values that will reveal bugs in all of them.
      </p>
      <p>
        I also explained the idea behind this trainer in{' '}
        <a href="https://fakeplastictrees.ee/post/0f32ddbb-5cc1-4801-abbc-029778b8d11f/ep-&-bva-practice-assignment-explanation">
          my blog post
        </a>
        . Please read it after finishing with this execise, it's rather short.
      </p>
      <h2>Specification</h2>
      <ul>
        <li>
          Any integer that is greater or equal to -10,000 and less or equal to
          10,000 is accepted by the program;
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
      <h3>-10,000 and 10,000 boundaries</h3>
      <Implementation1 />
      <Implementation2 />
      <Implementation3 />
      <Implementation4 />
      <Implementation5 />
      <Implementation6 />
      <Implementation7 />
      <Implementation8 />
      <h3>0 boundary</h3>
      <Implementation9 />
      <Implementation10 />
      <Implementation11 />
    </div>
  )
}

export default Implementations
