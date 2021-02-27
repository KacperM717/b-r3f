import { useFrame } from "react-three-fiber";
import { useRef, useState } from 'react';
import { useSpring, a } from "react-spring/three";

const Boxxy = ({colorIn, colorOut}) => {
    console.log("rered");
    const [hovered, setHovered] = useState(false);
    const ref = useRef();
    const props = useSpring({
        position: hovered ? [0,0,-2] : [0,0,0],
        color: hovered ? colorIn : colorOut,
    });
  
    const handlePointerOut = (e) => {
        setHovered(false);
    }

    const handlePointerIn = (e) => {
        setHovered(true);
    }
  
    useFrame(() => {
      if(hovered){
        ref.current.rotation.x += 0.05;
      }
    });

    return (
    <a.mesh ref={ref} position={props.position} onPointerOut={handlePointerOut} onPointerOver={handlePointerIn}>
        <a.meshPhysicalMaterial color={props.color} />
        <boxGeometry args={[2,2,1]}/>
      </a.mesh>
    )
}

export default Boxxy;