"use client";

import * as THREE from "three";
import { useEffect, useState } from "react";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const dodecahedron = (): any => {
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

    if (!domWindow) return;
    const canvas = document.getElementById("canvas");

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#F0F0F0");

    // Camera
    const camera = new THREE.PerspectiveCamera(
        75,
        domWindow.innerWidth / domWindow!.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 5;

    // Object
    const geometry = new THREE.DodecahedronGeometry();
    const material = new THREE.MeshLambertMaterial({
        color: "#468585",
        emissive: "#468585",
    });
    const dodecahedron = new THREE.Mesh(geometry, material);

    const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
    const boxMaterial = new THREE.MeshStandardMaterial({
        color: "#B4B4B3",
        emissive: "#B4B4B3",
    });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.position.y = -1.5;

    scene.add(dodecahedron);
    scene.add(box);

    // Light
    const light = new THREE.SpotLight("0x006769", 100);
    light.position.set(1, 1, 1);
    scene.add(light);

    // renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvas as HTMLElement });
    renderer.setSize(domWindow!.innerWidth, domWindow!.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.render(scene, camera);

    // Add Orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.enablePan = true;

    // Animate
    function animate() {
        requestAnimationFrame(animate);

        dodecahedron.rotation.x += 0.01;
        dodecahedron.rotation.y += 0.01;

        box.rotation.y += 0.005;

        controls.update();
        renderer.render(scene, camera);
    }

    // Handle window resizing
    window.addEventListener("resize", () => {
        camera.aspect = window.innerHeight / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    animate();
};

export const dodecahedron3D = () => {
    return (
        <canvas id="canvas">
            {dodecahedron()}
        </canvas>
    );
};