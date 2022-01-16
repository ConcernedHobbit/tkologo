import React, { useState, Suspense } from 'react'
import { Canvas} from "@react-three/fiber"
import { Html } from '@react-three/drei'
import Scene from './components/Scene'

const Loading = () => {
  return (
    <Html center>
      <p id='loading'>Loading...</p>
    </Html>
  )
}

const Credits = () => {
  const [closed, setClosed] = useState(false)
  const close = () => setClosed(true)

  if (closed) {
    return null
  }

  return (
    <footer>
      <span id='close' aria-label='close footer' onClick={close}>x</span>
      <p>
        logo of <a href='https://tko-aly.fi'>tko-aly ry</a>
      </p>
      <p>
        3d model &amp; page by <a href='https://github.com/ConcernedHobbit'>eetu raunio</a>
      </p>
    </footer>
  )
}

const App = () => {
  return (
    <>
      <Credits />
      <Canvas>
        <Suspense fallback={<Loading />}>
          <Scene />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
