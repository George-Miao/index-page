import { FunctionComponent, useEffect, useRef } from 'react'
import Vanta from 'vanta/dist/vanta.waves.min'
import { useAsync } from 'react-use'
import * as THREE from 'three'

const BigOText: FunctionComponent<{
  text: string
  href: string
  active?: boolean
}> = props => {
  const className = 'big-o-name' + (props.active ? ' active' : ' inactive')
  return (
    <a className={className} href={props.href}>
      {props.text}
    </a>
  )
}

const Main: FunctionComponent = () => {
  const vantaRef = useRef(null)

  // const THREE = useAsync(() => import('three/'))
  const p5 = useAsync(() => import('p5').then(e => e.default))

  useEffect(() => {
    if (!p5.loading && p5.value)
      Vanta({
        el: vantaRef.current,
        THREE: THREE,
        p5: p5.value,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        scale: 1,
        scaleMobile: 1,
        backgroundColor: 0x2e3440,
        color: 0x2e3440, // #2e3440
        spacing: 2,
        chaos: 0.7
      })
  }, [p5])
  return (
    <main>
      <div className="vanta-container" ref={vantaRef}></div>
      <BigOText text="about" href="https://blog.miao.dev/about" />
      <BigOText text="blog" href="https://blog.miao.dev" />
      <BigOText text="miao.dev" href="https://miao.dev" active />
      <BigOText text="github" href="https://github.com/George-Miao" />
      <BigOText text="twitter" href="https://twitter.com/PopDotLol" />
    </main>
  )
}

export default Main
