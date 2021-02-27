import { useRef } from "react";
import { extend, useFrame, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({OrbitControls});

const Controls = props => {
    const ref = useRef();
    const {camera, gl} = useThree();

    useFrame(() => {
        ref.current.update();
    })

    return (
        <orbitControls ref={ref} enableDamping dampingFactor={0.2} autoRotate args={[camera, gl.domElement]} />
    )
};

export default Controls;