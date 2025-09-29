let scene, camera, renderer;
let currentStep = 0;
let isTransitioning = false;
let milestoneInfoVisible = false;

// Journey milestone data
const milestones = [
    {
        year: " Oct 2022",
        title: "📍 Moved to Australia",
        description: "My first time overseas, away from family and everything familiar. I still remember landing in Australia with limited English; I couldn't fully understand the border security’s questions, got overwhelmed, and teared up. I had never even owned a laptop before. Two weeks into uni, I finally bought my first one from Officeworks, and that marked the beginning of a brand-new chapter.",
        position: { x: 0, y: 0, z: 0 }
    },
    {
        year: "Oct 2022", 
        title: "💼 First Job in Australia",
        description: "Just weeks after arriving, I landed my first job as a Student Engagement Officer at the University of Wollongong. I met a staff member on campus and often shared how hard it was to find work with no local experience. One day, she asked for my CV, turns out she was the university's Career Advisor. She helped me polish it, and soon after, sent me a job opportunity. I applied, got shortlisted, and was hired. It was an incredible start.",
        position: { x: 0, y: 2, z: -5 }
    },
    {
        year: "Oct 2023",
        title: "🎓 Finished Diploma of IT & Became Peer Assisted Leader", 
        description: "A year earlier, I didn’t even know what Java was. Fast forward, I completed my Diploma of IT and was selected as a Peer Assisted Learning Leader. I supported tutors, helped students during labs, and even gave speeches in front of 200–300 students during orientation. That year was a turning point, from not owning a laptop to leading peers in tech subjects.",
        position: { x: 0, y: 4, z: -10 }
    },
    {
        year: "Aug 2025",
        title: "🏛 First Role with City Council",
        description: "I was hired as a Venue Assistant with Canterbury-Bankstown Council. The job posting said “Australian/NZ citizens and PRs only,” but I applied anyway. I didn’t think I stood a chance as an international student, but I got an interview, showed up with a “let’s see what happens” mindset… and was hired! Working for local government as an international student felt surreal.",
        position: { x: 0, y: 6, z: -15 }
    },
    {
        year: "Dec 2025 & Beyond",
        title: "🎉 Graduation and What Comes Next",
        description: "No story just yet, graduation is around the corner. But if the past few years have taught me anything, it’s that anything is possible when you show up, stay open, and keep going.",
        position: { x: 0, y: 8, z: -20 }
    }
];

// Initialize the 3D scene
function initJourneyScene() {
    // Create scene with bright natural sky
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xb8e6ff); // Bright sky blue
    scene.fog = new THREE.Fog(0xb8e6ff, 30, 80);
    
    // Create camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 12);
    camera.lookAt(0, 3, 0);
    
    // Create renderer with improved settings
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xb8e6ff, 1);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMappingExposure = 1.0;
    renderer.outputEncoding = THREE.sRGBEncoding;
    
    // Add to DOM
    const container = document.getElementById('pagoda-scene');
    container.appendChild(renderer.domElement);
    
    // Create environment
    createNaturalEnvironment();
    createRealisticStoneSteps();
    createBeautifulLanterns();
    createPagodaAtSummit();
    createNaturalLighting();
    
    // Start animation
    animate();
    
    // Add event listeners
    document.addEventListener('keydown', handleKeyPress);
    
    // Position camera at first step
    updateCameraPosition();
    
}

// Create beautiful natural environment
function createNaturalEnvironment() {
    // Natural grass ground
    const groundGeometry = new THREE.PlaneGeometry(100, 100);
    const groundMaterial = new THREE.MeshLambertMaterial({ 
        color: 0x7cb342, // Natural grass green
        transparent: false
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1;
    ground.receiveShadow = true;
    scene.add(ground);
    
    // Create natural mountain terrain
    createMountainTerrain();
    
    // Create realistic trees
    createNaturalTrees();
    
    // Create natural vegetation
    createGrassAndFlowers();
    
    // Add some white fluffy clouds
    createRealisticClouds();
}

// Create mountain terrain
function createMountainTerrain() {
    // Create gentle mountain slopes
    for (let i = 0; i < 20; i++) {
        const hillGeometry = new THREE.SphereGeometry(8 + Math.random() * 10, 16, 16);
        const hillMaterial = new THREE.MeshLambertMaterial({ 
            color: new THREE.Color().setHSL(0.25, 0.4, 0.5 + Math.random() * 0.2)
        });
        const hill = new THREE.Mesh(hillGeometry, hillMaterial);
        
        // Position hills around the path
        const angle = Math.random() * Math.PI * 2;
        const distance = 20 + Math.random() * 30;
        hill.position.set(
            Math.cos(angle) * distance,
            -5 + Math.random() * 3,
            Math.sin(angle) * distance - Math.random() * 30
        );
        hill.scale.y = 0.6; // Flatten to look more like hills
        hill.receiveShadow = true;
        hill.castShadow = true;
        scene.add(hill);
    }
}

// Create realistic stone steps
function createRealisticStoneSteps() {
    for (let i = 0; i < milestones.length; i++) {
        const milestone = milestones[i];
        
        // Main stone step platform - more natural looking
        const stepGeometry = new THREE.BoxGeometry(6, 0.5, 2.5);
        const stepMaterial = new THREE.MeshLambertMaterial({ 
            color: 0xc0c0c0, // Light stone gray
            roughness: 0.8
        });
        const step = new THREE.Mesh(stepGeometry, stepMaterial);
        step.position.copy(milestone.position);
        step.position.y -= 0.25;
        step.castShadow = true;
        step.receiveShadow = true;
        scene.add(step);
        
        // Add natural stone variations around the step
        for (let j = 0; j < 8; j++) {
            const stoneSize = 0.3 + Math.random() * 0.5;
            const smallStoneGeometry = new THREE.BoxGeometry(stoneSize, stoneSize * 0.6, stoneSize);
            const smallStoneMaterial = new THREE.MeshLambertMaterial({ 
                color: new THREE.Color().setHSL(0, 0, 0.6 + Math.random() * 0.2)
            });
            const smallStone = new THREE.Mesh(smallStoneGeometry, smallStoneMaterial);
            smallStone.position.set(
                milestone.position.x + (Math.random() - 0.5) * 8,
                milestone.position.y - 0.1,
                milestone.position.z + (Math.random() - 0.5) * 3
            );
            smallStone.rotation.set(
                Math.random() * 0.3,
                Math.random() * Math.PI,
                Math.random() * 0.3
            );
            smallStone.castShadow = true;
            smallStone.receiveShadow = true;
            scene.add(smallStone);
        }
        
        // Create connecting stone path
        if (i < milestones.length - 1) {
            const nextMilestone = milestones[i + 1];
            const pathSegments = 10;
            
            for (let k = 0; k < pathSegments; k++) {
                const t = k / pathSegments;
                const pathStoneGeometry = new THREE.BoxGeometry(2, 0.2, 0.8);
                const pathStoneMaterial = new THREE.MeshLambertMaterial({ color: 0xb0b0b0 });
                const pathStone = new THREE.Mesh(pathStoneGeometry, pathStoneMaterial);
                
                pathStone.position.set(
                    milestone.position.x + (nextMilestone.position.x - milestone.position.x) * t,
                    milestone.position.y + (nextMilestone.position.y - milestone.position.y) * t - 0.4,
                    milestone.position.z + (nextMilestone.position.z - milestone.position.z) * t + 1
                );
                pathStone.receiveShadow = true;
                pathStone.castShadow = true;
                scene.add(pathStone);
            }
        }
    }
}

// Create beautiful traditional lanterns
function createBeautifulLanterns() {
    const lanternColors = [0xff6b6b, 0x4ecdc4, 0x45b7d1, 0xf9ca24, 0xf0932b]; // Different colors for each step
    
    for (let i = 0; i < milestones.length; i++) {
        const milestone = milestones[i];
        const lanternColor = lanternColors[i];
        
        // Create lanterns on both sides
        for (let side = -1; side <= 1; side += 2) {
            // Wooden post - more realistic proportions
            const postGeometry = new THREE.CylinderGeometry(0.08, 0.12, 2.5);
            const postMaterial = new THREE.MeshLambertMaterial({ color: 0x8b4513 });
            const post = new THREE.Mesh(postGeometry, postMaterial);
            post.position.set(
                milestone.position.x + side * 3,
                milestone.position.y + 1.25,
                milestone.position.z
            );
            post.castShadow = true;
            post.receiveShadow = true;
            scene.add(post);
            
            // Lantern base
            const baseGeometry = new THREE.CylinderGeometry(0.3, 0.35, 0.2);
            const baseMaterial = new THREE.MeshLambertMaterial({ color: 0x654321 });
            const base = new THREE.Mesh(baseGeometry, baseMaterial);
            base.position.set(
                milestone.position.x + side * 3,
                milestone.position.y + 2.6,
                milestone.position.z
            );
            base.castShadow = true;
            scene.add(base);
            
            // Lantern body - beautiful colored paper
            const lanternGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.8);
            const lanternMaterial = new THREE.MeshLambertMaterial({ 
                color: lanternColor,
                transparent: true,
                opacity: 0.9,
                emissive: new THREE.Color(lanternColor).multiplyScalar(0.1)
            });
            const lantern = new THREE.Mesh(lanternGeometry, lanternMaterial);
            lantern.position.set(
                milestone.position.x + side * 3,
                milestone.position.y + 3.2,
                milestone.position.z
            );
            lantern.castShadow = true;
            scene.add(lantern);
            
            // Lantern top
            const topGeometry = new THREE.ConeGeometry(0.45, 0.3);
            const topMaterial = new THREE.MeshLambertMaterial({ color: 0x654321 });
            const top = new THREE.Mesh(topGeometry, topMaterial);
            top.position.set(
                milestone.position.x + side * 3,
                milestone.position.y + 3.75,
                milestone.position.z
            );
            top.castShadow = true;
            scene.add(top);
            
            // Add soft glow around active lantern
            if (i === currentStep) {
                const glowGeometry = new THREE.SphereGeometry(0.8);
                const glowMaterial = new THREE.MeshBasicMaterial({
                    color: lanternColor,
                    transparent: true,
                    opacity: 0.2
                });
                const glow = new THREE.Mesh(glowGeometry, glowMaterial);
                glow.position.copy(lantern.position);
                scene.add(glow);
            }
        }
    }
}

// Create natural trees
function createNaturalTrees() {
    for (let i = 0; i < 30; i++) {
        // Tree trunk - more realistic
        const trunkHeight = 4 + Math.random() * 3;
        const trunkGeometry = new THREE.CylinderGeometry(0.2, 0.3, trunkHeight);
        const trunkMaterial = new THREE.MeshLambertMaterial({ color: 0x8b4513 });
        const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
        
        // Position trees naturally around the scene
        const angle = Math.random() * Math.PI * 2;
        const distance = 15 + Math.random() * 25;
        trunk.position.set(
            Math.cos(angle) * distance,
            trunkHeight / 2 - 1,
            Math.sin(angle) * distance - Math.random() * 35
        );
        trunk.castShadow = true;
        trunk.receiveShadow = true;
        scene.add(trunk);
        
        // Tree foliage - more natural and varied
        const foliageSize = 2 + Math.random() * 1.5;
        const foliageGeometry = new THREE.SphereGeometry(foliageSize);
        const foliageMaterial = new THREE.MeshLambertMaterial({ 
            color: new THREE.Color().setHSL(0.28, 0.6, 0.4 + Math.random() * 0.2)
        });
        const foliage = new THREE.Mesh(foliageGeometry, foliageMaterial);
        foliage.position.copy(trunk.position);
        foliage.position.y += trunkHeight / 2 + foliageSize / 2;
        foliage.castShadow = true;
        foliage.receiveShadow = true;
        scene.add(foliage);
        
        // Add some variation with multiple foliage clusters
        for (let j = 0; j < 2; j++) {
            const extraFoliage = foliage.clone();
            extraFoliage.position.x += (Math.random() - 0.5) * 2;
            extraFoliage.position.y += (Math.random() - 0.5) * 1;
            extraFoliage.position.z += (Math.random() - 0.5) * 2;
            extraFoliage.scale.multiplyScalar(0.7 + Math.random() * 0.3);
            scene.add(extraFoliage);
        }
    }
}

// Create grass and flowers
function createGrassAndFlowers() {
    // Add small bushes and grass patches
    for (let i = 0; i < 50; i++) {
        const grassGeometry = new THREE.SphereGeometry(0.5 + Math.random() * 0.8);
        const grassMaterial = new THREE.MeshLambertMaterial({ 
            color: new THREE.Color().setHSL(0.28, 0.7, 0.3 + Math.random() * 0.3)
        });
        const grass = new THREE.Mesh(grassGeometry, grassMaterial);
        
        // Position grass naturally
        const angle = Math.random() * Math.PI * 2;
        const distance = 5 + Math.random() * 20;
        grass.position.set(
            Math.cos(angle) * distance,
            0.3,
            Math.sin(angle) * distance - Math.random() * 25
        );
        grass.scale.y = 0.5; // Flatten to look more like grass
        grass.receiveShadow = true;
        scene.add(grass);
    }
    
    // Add some colorful flowers
    for (let i = 0; i < 20; i++) {
        const flowerGeometry = new THREE.SphereGeometry(0.2);
        const flowerColors = [0xff69b4, 0xffd700, 0xff4500, 0x9370db, 0x00ced1];
        const flowerMaterial = new THREE.MeshLambertMaterial({ 
            color: flowerColors[Math.floor(Math.random() * flowerColors.length)]
        });
        const flower = new THREE.Mesh(flowerGeometry, flowerMaterial);
        
        const angle = Math.random() * Math.PI * 2;
        const distance = 3 + Math.random() * 12;
        flower.position.set(
            Math.cos(angle) * distance,
            0.8,
            Math.sin(angle) * distance - Math.random() * 20
        );
        scene.add(flower);
    }
}

// Create pagoda at the summit
function createPagodaAtSummit() {
    const summit = milestones[milestones.length - 1].position;
    
    // Pagoda base platform
    const platformGeometry = new THREE.CylinderGeometry(2.5, 3, 0.6);
    const platformMaterial = new THREE.MeshLambertMaterial({ color: 0x8b7355 });
    const platform = new THREE.Mesh(platformGeometry, platformMaterial);
    platform.position.set(summit.x, summit.y + 0.3, summit.z - 2);
    platform.castShadow = true;
    platform.receiveShadow = true;
    scene.add(platform);
    
    // Pagoda levels - more elegant proportions
    for (let i = 0; i < 3; i++) {
        const levelSize = 1.8 - i * 0.3;
        const levelGeometry = new THREE.CylinderGeometry(levelSize, levelSize + 0.2, 0.8);
        const levelMaterial = new THREE.MeshLambertMaterial({ color: 0xd2691e });
        const level = new THREE.Mesh(levelGeometry, levelMaterial);
        level.position.set(summit.x, summit.y + 1 + i * 1.2, summit.z - 2);
        level.castShadow = true;
        level.receiveShadow = true;
        scene.add(level);
        
        // Roof with traditional style
        const roofGeometry = new THREE.ConeGeometry(levelSize + 0.6, 0.6);
        const roofMaterial = new THREE.MeshLambertMaterial({ color: 0x8b0000 });
        const roof = new THREE.Mesh(roofGeometry, roofMaterial);
        roof.position.set(summit.x, summit.y + 1.4 + i * 1.2, summit.z - 2);
        roof.castShadow = true;
        scene.add(roof);
    }
    
    // Golden spire
    const spireGeometry = new THREE.ConeGeometry(0.2, 1.5);
    const spireMaterial = new THREE.MeshLambertMaterial({ 
        color: 0xffd700,
        emissive: 0x444400
    });
    const spire = new THREE.Mesh(spireGeometry, spireMaterial);
    spire.position.set(summit.x, summit.y + 5.5, summit.z - 2);
    scene.add(spire);
}

// Create realistic clouds
function createRealisticClouds() {
    for (let i = 0; i < 12; i++) {
        const cloudGroup = new THREE.Group();
        
        // Create cloud from multiple spheres
        for (let j = 0; j < 5; j++) {
            const cloudGeometry = new THREE.SphereGeometry(2 + Math.random() * 2);
            const cloudMaterial = new THREE.MeshLambertMaterial({ 
                color: 0xffffff,
                transparent: true,
                opacity: 0.8
            });
            const cloudPart = new THREE.Mesh(cloudGeometry, cloudMaterial);
            cloudPart.position.set(
                (Math.random() - 0.5) * 6,
                (Math.random() - 0.5) * 2,
                (Math.random() - 0.5) * 6
            );
            cloudGroup.add(cloudPart);
        }
        
        cloudGroup.position.set(
            (Math.random() - 0.5) * 80,
            20 + Math.random() * 10,
            (Math.random() - 0.5) * 80
        );
        scene.add(cloudGroup);
    }
}

// Create natural daytime lighting
function createNaturalLighting() {
    // Bright natural ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    
    // Main sun light - positioned like afternoon sun
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(15, 25, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -25;
    directionalLight.shadow.camera.right = 25;
    directionalLight.shadow.camera.top = 25;
    directionalLight.shadow.camera.bottom = -25;
    scene.add(directionalLight);
    
    // Soft fill light from the sky
    const fillLight = new THREE.DirectionalLight(0xb8e6ff, 0.3);
    fillLight.position.set(-10, 15, 5);
    scene.add(fillLight);
}

// Handle keyboard navigation
function handleKeyPress(event) {
    if (isTransitioning) return;
    
    switch(event.key.toLowerCase()) {
        case 'w':
        case 'arrowup':
            navigateUp();
            break;
        case 's':
        case 'arrowdown':
            navigateDown();
            break;
        case 'escape':
            exitJourney();
            break;
    }
}

// Navigate up the mountain
function navigateUp() {
    if (currentStep < milestones.length - 1) {
        currentStep++;
        updateCameraPosition();
        showMilestoneInfo(currentStep);
    }
}

// Navigate down the mountain
function navigateDown() {
    if (currentStep > 0) {
        currentStep--;
        updateCameraPosition();
        showMilestoneInfo(currentStep);
    }
}

// Update camera position for current step
function updateCameraPosition() {
    if (isTransitioning) return;
    isTransitioning = true;
    
    const milestone = milestones[currentStep];
    const targetPosition = {
        x: milestone.position.x,
        y: milestone.position.y + 6,
        z: milestone.position.z + 12
    };
    
    const targetLookAt = {
        x: milestone.position.x,
        y: milestone.position.y + 2,
        z: milestone.position.z
    };
    
    // Smooth camera transition
    const startPosition = camera.position.clone();
    const startLookAt = new THREE.Vector3().copy(camera.getWorldDirection(new THREE.Vector3()));
    
    let progress = 0;
    const duration = 1500; // 1.5 seconds
    const startTime = Date.now();
    
    const animateCamera = () => {
        const elapsed = Date.now() - startTime;
        progress = Math.min(elapsed / duration, 1);
        
        // Smooth easing
        const eased = 1 - Math.pow(1 - progress, 3);
        
        // Interpolate camera position
        camera.position.lerpVectors(
            startPosition, 
            new THREE.Vector3(targetPosition.x, targetPosition.y, targetPosition.z), 
            eased
        );
        
        // Update camera look at
        camera.lookAt(targetLookAt.x, targetLookAt.y, targetLookAt.z);
        
        if (progress < 1) {
            requestAnimationFrame(animateCamera);
        } else {
            isTransitioning = false;
        }
    };
    
    animateCamera();
}

// Show milestone information with improved visibility
function showMilestoneInfo(stepIndex) {
    const milestone = milestones[stepIndex];
    const infoPanel = document.getElementById('milestone-info');
    
    if (infoPanel) {
        // Hide first, then show with new content
        infoPanel.classList.add('hidden');
        
        setTimeout(() => {
            infoPanel.innerHTML = `
                <div class="milestone-content">
                    <div class="milestone-year">${milestone.year}</div>
                    <div class="milestone-title">${milestone.title}</div>
                    <div class="milestone-description">${milestone.description}</div>
                    <div class="milestone-progress">Step ${stepIndex + 1} of ${milestones.length}</div>
                    <div class="milestone-controls">
                        <span>Use W/S or ↑/↓ to navigate • ESC to exit</span>
                    </div>
                </div>
            `;
            infoPanel.classList.remove('hidden');
            milestoneInfoVisible = true;
            
        }, 1000);
    }
}

// Setup journey start
function setupJourneyStart() {
    setTimeout(() => {
        showEntranceQuote();
    }, 5000);
}

// Show entrance quote (stays until user clicks)
function showEntranceQuote() {
    const quote = document.getElementById('entrance-quote');
    if (quote) {
        quote.classList.remove('hidden');

        // Left click hides the quote and shows first milestone panel
        document.addEventListener('click', function hideQuote() {
            quote.classList.add('hidden');
            showMilestoneInfo(0); // Show step 1
            document.removeEventListener('click', hideQuote);
        });
    }
}


// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Gentle cloud movement
    scene.children.forEach(child => {
        if (child.type === 'Group') { // Cloud groups
            child.position.x += 0.005;
            if (child.position.x > 40) {
                child.position.x = -40;
            }
        }
    });
    
    renderer.render(scene, camera);
}

// Handle window resize
function handleResize() {
    if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

// Initialize when journey section is shown
function initMountainJourney() {
    // Show journey section
    document.getElementById('main-content').classList.add('hidden');
    document.getElementById('journey-container').classList.remove('hidden');
    
    // Initialize 3D scene
    setTimeout(() => {
        initJourneyScene();
        setupJourneyStart();
    }, 100);
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
}

// Exit journey
function exitJourney() {
    // Clean up
    if (renderer) {
        const container = document.getElementById('pagoda-scene');
        if (container && renderer.domElement) {
            container.removeChild(renderer.domElement);
        }
        renderer.dispose();
    }
    
    // Remove event listeners
    document.removeEventListener('keydown', handleKeyPress);
    window.removeEventListener('resize', handleResize);
    
    // Hide journey section
    document.getElementById('journey-container').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    
    // Reset variables
    currentStep = 0;
    isTransitioning = false;
    milestoneInfoVisible = false;
}

// Export functions for global access
window.initMountainJourney = initMountainJourney;
window.navigateUp = navigateUp;
window.navigateDown = navigateDown;
window.exitJourney = exitJourney;

