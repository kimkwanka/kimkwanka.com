import { useLayoutEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PlaneGeometry, Mesh } from 'three';

import styles from './HeroBackground.module.scss';

const Plane = () => {
  const planeGeoRef = useRef<PlaneGeometry>(null);
  const meshRef = useRef<Mesh>(null);
  const count = useRef<number>(0);
  const zArray = useRef<number[]>([]);

  useLayoutEffect(() => {
    if (planeGeoRef?.current) {
      const { position } = planeGeoRef.current.attributes;

      for (let i = 0; i < position.count; i++) {
        const newZ = position.getZ(i) + Math.random() * 5000 - 2000;
        position.setZ(i, newZ);
        zArray.current.push(newZ);
      }
    }
  }, []);

  useFrame(() => {
    if (planeGeoRef?.current && meshRef?.current) {
      const { position } = planeGeoRef.current.attributes;

      for (let i = 0; i < position.count; i++) {
        position.setZ(
          i,
          Math.sin(i + count.current * 0.00002) *
            (zArray.current[i] - zArray.current[i] * 0.6),
        );
        count.current += 0.1;
      }
      planeGeoRef.current.attributes.position.needsUpdate = true;
      meshRef.current.rotation.z -= 0.0003;
    }
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
