import * as T from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'meshoptimizer';

export async function createAtlasScene(base='./atlas/') {
  await MeshoptDecoder.ready;
  const loader=new GLTFLoader();loader.setMeshoptDecoder(MeshoptDecoder);
  const [nervous,cardio,skeletal]=await Promise.all(['nervous','cardiovascular','skeletal'].map(x=>loader.loadAsync(`${base}${x}.glb`)));
  const source=[nervous.scene,cardio.scene,skeletal.scene];
  const root=new T.Group();root.name='Z-Anatomy 人体脑与颈部血管图谱节选';
  const body=new T.Group();body.name='原图谱统一解剖坐标';body.scale.setScalar(12);body.position.y=-18.7;root.add(body);
  const layers={};for(const n of ['脑与脑干','颈椎','动脉','静脉','颅骨']){layers[n]=new T.Group();layers[n].name=n;body.add(layers[n]);}
  const palette={
    brain:new T.MeshStandardMaterial({color:0xe5aaa4,roughness:.88,side:T.DoubleSide}),
    cerebellum:new T.MeshStandardMaterial({color:0xc98884,roughness:.86,side:T.DoubleSide}),
    stem:new T.MeshStandardMaterial({color:0xd5a49d,roughness:.86,side:T.DoubleSide}),
    artery:new T.MeshStandardMaterial({color:0xe3554b,roughness:.48,side:T.DoubleSide}),
    vein:new T.MeshStandardMaterial({color:0x3296b8,roughness:.48,side:T.DoubleSide}),
    bone:new T.MeshStandardMaterial({color:0xe6ddd0,roughness:.81,side:T.DoubleSide}),
    skull:new T.MeshStandardMaterial({color:0xd7e2e5,roughness:.5,transparent:true,opacity:.10,depthWrite:false,side:T.DoubleSide})
  };
  const desired=[
    ['brain','脑与脑干','brain'],['cerebellum','脑与脑干','cerebellum'],['brainstem','脑与脑干','stem'],
    ['cervical-vertebrae','颈椎','bone'],['skull','颅骨','skull'],
    ['arteries-of-brain','动脉','artery'],['arteries-of-left-head-and-neck','动脉','artery'],['arteries-of-right-head-and-neck','动脉','artery'],
    ['veins-of-brain','静脉','vein'],['veins-of-left-head-and-neck','静脉','vein'],['veins-of-right-head-and-neck','静脉','vein']
  ];
  for(const [name,layer,material] of desired){
    let object=null;for(const s of source){const m=s.getObjectByName(name);if(m){object=m;break;}}
    if(!object)throw new Error(`Atlas structure missing: ${name}`);
    object.removeFromParent();object.material=palette[material].clone();layers[layer].add(object);
  }
  return {root,layers,source:'Z-Anatomy / BodyParts3D, CC BY-SA 4.0'};
}
