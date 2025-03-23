// 3D 씬 설정
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// GLTF 모델 로드
const loader = new THREE.GLTFLoader();
loader.load(
    'model/your_model.gltf', // 여기에 자신의 모델 파일 경로를 입력하세요
    (gltf) => {
        scene.add(gltf.scene);
    },
    undefined,
    (error) => {
        console.error('An error occurred:', error);
    }
);

// 카메라 위치
camera.position.z = 5;

// 애니메이션 루프
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
