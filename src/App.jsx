import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Box } from './components/Box';

function App() {
  return (
    <Canvas camera={{ position: [1, 1, 1] }}>
      <Box />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
