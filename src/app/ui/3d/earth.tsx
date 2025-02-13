'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls, useTexture, Environment, Stars } from '@react-three/drei';
import * as THREE from 'three';

const Earth = () => {
    const earthRef = useRef<THREE.Mesh>(null);
    const texture = useTexture('/earth/2k_earth_daymap.jpg');

    // Add rotation animation
    useFrame(({ clock }) => {
        if (earthRef.current) {
            earthRef.current.rotation.y = clock.getElapsedTime() * 0.1; // Slow rotation
            earthRef.current.rotation.x = clock.getElapsedTime() * 0.05; // Slow rotation
        }
    });

    return (
        <group>
            {/* Earth sphere */}
            <Sphere ref={earthRef} args={[2, 64, 64]}>
                <meshPhysicalMaterial
                    map={texture}
                    normalMap={new THREE.TextureLoader().load('/earth/2k_earth_normal_map.jpg')}
                    normalScale={new THREE.Vector2(0.8, 0.8)}
                    clearcoat={0}
                    roughness={10}
                    metalness={0.5}
                />
            </Sphere>
            
            {/* Atmosphere glow */}
            <Sphere args={[2.03, 64, 64]}>
                <meshPhongMaterial
                    transparent
                    opacity={0.3}
                    color="#4890E0"
                />
            </Sphere>

            {/* Add Moon */}
            <Moon />
        </group>
    );
};

const Moon = () => {
    const moonRef = useRef<THREE.Mesh>(null);
    const moonOrbitRef = useRef<THREE.Group>(null);
    const moonTexture = useTexture('/earth/2k_moon.jpg');

    useFrame(({ clock }) => {
        if (moonRef.current && moonOrbitRef.current) {
            // Rotate moon around its axis
            moonRef.current.rotation.y = clock.getElapsedTime() * 0.05;
            // Orbit around earth
            moonOrbitRef.current.rotation.y = clock.getElapsedTime() * 0.2;
        }
    });

    return (
        <group ref={moonOrbitRef}>
            {/* Position the moon 5 units away from earth */}
            <group position={[5, 0, 0]}>
                <Sphere ref={moonRef} args={[0.5, 32, 32]}>
                    <meshPhysicalMaterial
                        map={moonTexture}
                        roughness={1}
                        metalness={0}
                    />
                </Sphere>
            </group>
        </group>
    );
};

const SpaceBackground = () => {
    const spaceTexture = useTexture('/space/space.jpg');
    return (
        <Sphere args={[50, 64, 64]} scale={[-1, 1, 1]}>
            <meshBasicMaterial map={spaceTexture} side={THREE.BackSide} />
        </Sphere>
    );
};

const Scene = () => {
    return (
        <group>
            <ambientLight intensity={0.5} />
            <spotLight intensity={0.5} angle={0.2} penumbra={1} position={[5, 15, 10]} />
            {/* Add space background */}
            <SpaceBackground />
            {/* Add twinkling stars */}
            <Stars radius={50} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Earth />
        </group>
    );
};

export const EarthScene = () => {      
    return (
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }} id="earth-canvas">
            {/* <perspectiveCamera ref={cameraRef} position={[0, 0, 10]} fov={45} /> */}
            <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
            <Scene />
        </Canvas>
    );
};
