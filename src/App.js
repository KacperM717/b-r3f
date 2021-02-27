import './App.css';
import { Canvas} from "react-three-fiber";
import Boxxy from './Boxxy';
import Controls from './Controls';

function App() {
  return (
    <div className="App">
      <Canvas>
        <Boxxy colorIn={"rgb(30,30,30)"} colorOut={"rgb(60,20,100)"} />
        <ambientLight args={[0xf04040]} />
        <directionalLight args={[0xffffff, 0.5]} position={[0,5,10]}/>
        <Controls />
      </Canvas>
    </div>
  );
}

export default App;
