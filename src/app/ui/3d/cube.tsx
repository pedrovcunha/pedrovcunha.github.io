"use client";

import * as THREE from "three";
import { useEffect, useRef, useState } from "react";

// A simple rotating cube component
const Cube = (): any => {
  const [domWindow, setWindow] = useState<Window & typeof globalThis>();
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindow(window);
    }
    // Add event listener for window resize
    const handleResize = () => setWindow(window);
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 1. Create a scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#F0F0F0");

  // 2. Add a camera
  // Field of view: 75
  // Aspect ratio: window.innerWidth / window.innerHeight (exact the same as the window)
  // Near: 0.1
  // Far: 1000
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  camera.position.z = 5;

  // 3. Create and add a cube object
  const geometry = new THREE.BoxGeometry();
  // emissive is set to black by default. If we don't added it, it won't react with light properly
  const material = new THREE.MeshLambertMaterial({
    color: "#468585",
    emissive: "#468585",
  });

  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // 4. Add lighting
  const light = new THREE.DirectionalLight(0x9cdba6, 10);
  light.position.set(1, 1, 1); // x, y and z axes
  scene.add(light);

  // 5. Se up the renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // 6. Animate the scene
  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  animate();
};

export const cube3D = () => {
    return (
        <canvas id="canvas">
            {Cube()}
        </canvas>
    );
};
