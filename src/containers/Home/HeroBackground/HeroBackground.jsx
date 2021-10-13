import { useLayoutEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

import styles from './HeroBackground.module.scss';

const Plane = () => {
  const planeGeoRef = useRef(null);
  const meshRef = useRef(null);
  const count = useRef(0);
  const zArray = useRef([]);

  useLayoutEffect(() => {
    for (let i = 2; i < planeGeoRef.current.attributes.position.array.length; i += 3) {
      planeGeoRef.current.attributes.position.array[i] += Math.random() * 5000 - 2000;
      zArray.current.push(planeGeoRef.current.attributes.position.array[i]);
    }
  }, []);

  useFrame(() => {
    for (
      let i = 2;
      i < Math.floor(planeGeoRef.current.attributes.position.array.length);
      i += 3
    ) {
      const index = Math.floor(i / 3);

      planeGeoRef.current.attributes.position.array[i] = Math.sin(i + count.current * 0.00002)
        * (zArray.current[index] - zArray.current[index] * 0.6);
      count.current += 0.1;
    }
    planeGeoRef.current.attributes.position.needsUpdate = true;
    meshRef.current.rotation.z -= 0.0003;
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry ref={planeGeoRef} args={[200000, 200000, 100, 100]} />
      <meshBasicMaterial color="#766666" wireframe />
    </mesh>
  );
};

const HeroBackground = () => (
  <Canvas
    className={styles.HeroBackground}
    camera={{
      position: [0, -19000, 14000],
      near: 1,
      far: 400000,
      fov: 55,
    }}
  >
    <fog attach="fog" args={['#669666', 1, 150000]} />
    <Plane />
  </Canvas>
);

export default HeroBackground;
