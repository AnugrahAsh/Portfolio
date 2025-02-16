import { Suspense, useState, useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Plane from '../models/Plane'
import Bird from '../models/Bird'
import HomeInfo from '../components/HomeInfo'

// import soundon from '../assets/icons/soundon.png'
// import soundoff from '../assets/icons/soundoff.png'

{/*  */}


const Home = () => {

  const audioRef = useRef(new Audio(sakura))
  audioRef.current.volume = 0.4
  audioRef.current.loop = true

  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)

  useEffect(() => {
    if(isAudioPlaying){
      audioRef.current.play()
    }
    return () => {
      audioRef.current.pause()
    }
  })

  const adjustIsland = () =>{
    let screenScale = null
    let screenPosition = [0, -6.5, -43]
    let rotation = [0.1, 4.7, 0]

    if(window.innerWidth < 768){
      screenScale = [0.9,0.9,0.9]
      
    }
    else{
      screenScale = [1,1,1]
    }

    return [screenScale, screenPosition, rotation]
  }

  const adjustPlane = () =>{
    let screenScale, screenPosition; 

    if(window.innerWidth < 768){
      screenScale = [1.5,1.5,1.5]
      screenPosition=[0, -1.5, 0]
    }
    else{
      screenScale = [3,3,3]
      screenPosition=[0, -4, -4]
    }

    return [screenScale, screenPosition]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIsland()
  const [planeScale, planePosition] = adjustPlane()

  return (

    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex justify-center items-center">
        {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>
      
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[10, 1, 1]} intensity={1.5} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000"
            intensity={1}
          />
          <Sky isRotating={isRotating}/>
          <Bird />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane 
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition} 
            rotation={[0,20,0]}/>
        </Suspense>
      </Canvas>
      {/* <div className='absolute bottom-2 left-2'>
        <img src={!isAudioPlaying ? soundoff : soundon} alt="sound" clas/>
      </div> */}
    </section>
  );
}

export default Home
