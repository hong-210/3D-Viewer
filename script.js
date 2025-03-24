// 3D 씬 설정
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 빛 추가
const light = new THREE.DirectionalLight(0xffffff);
light.position.set(1, 1, 1).normalize();
scene.add(light);

// FBX 로더
const loader = new THREE.FBXLoader();
loader.load(
    'model/TEST', // FBX 파일 경로 (model 폴더에 넣는 것을 추천)
    (object) => {
        scene.add(object); // 로드한 모델을 씬에 추가
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded'); // 로드 진행률 출력
    },
    (error) => {
        console.error('An error occurred:', error); // 오류 처리
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
