import * as T from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {createAtlasScene} from './atlas-scene.mjs';
async function start(){
const {root,layers}=await createAtlasScene();
const canvas=document.querySelector('canvas');const renderer=new T.WebGLRenderer({canvas,antialias:true,alpha:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.outputColorSpace=T.SRGBColorSpace;
const scene=new T.Scene();scene.add(root);scene.add(new T.HemisphereLight(0xffffff,0x456477,2.1));
const key=new T.DirectionalLight(0xffffff,2.7);key.position.set(3,5,4);scene.add(key);
const rim=new T.DirectionalLight(0x90c6e2,1.3);rim.position.set(-3,2,-3);scene.add(rim);
const camera=new T.PerspectiveCamera(31,1,.1,100);camera.position.set(5.1,1.3,2.8);
const controls=new OrbitControls(camera,canvas);controls.target.set(0,.23,0);controls.enableDamping=true;controls.minDistance=2.7;controls.maxDistance=12;controls.update();
const colors={'脑与脑干':'#e8aaa9','颈椎':'#e6dfcf','动脉':'#e86658','静脉':'#52aecd','颅骨':'#b0c5ce'};
const holder=document.querySelector('#layers');for(const name of Object.keys(layers)){const label=document.createElement('label');label.className='layer';const input=document.createElement('input');input.type='checkbox';input.checked=true;input.addEventListener('change',()=>layers[name].visible=input.checked);const dot=document.createElement('i');dot.style.background=colors[name];label.append(input,dot,document.createTextNode(name));holder.append(label);}
function resize(){let w=canvas.clientWidth,h=canvas.clientHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();}new ResizeObserver(resize).observe(canvas);
function frame(){controls.update();renderer.render(scene,camera);requestAnimationFrame(frame);}resize();frame();
document.querySelector('#loading').hidden=true;
}
start().catch(error=>{
console.error(error);
const loading=document.querySelector('#loading');
loading.textContent='模型加载未完成，请刷新页面重试。';
loading.setAttribute('role','alert');
});
