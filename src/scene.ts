import * as three from 'three'
import Stats from 'three/examples/jsm/libs/stats.module'

import { mainCamera } from './camera'
import { UI } from './ui';

import { UnlitCubes } from './unlit_cubes';

export class Scene {
    /* base scene elements */
    canvas: HTMLCanvasElement;
    renderer: three.WebGLRenderer;
    scene: three.Scene;

    camera: mainCamera;
    ui: UI;

    /* default three.js stats module (in top left) */
    stats: Stats;

    cubes: UnlitCubes;

    private static instance: Scene;

    private constructor() {
        this.canvas = document.querySelector("#mainCanvas")!;
        this.renderer = new three.WebGLRenderer({canvas: this.canvas, antialias: true});
        this.scene = new three.Scene();
        
        this.stats = Stats();
        document.getElementById('stats')?.appendChild(this.stats.dom);

        this.renderer.setAnimationLoop(() => {this.render()})

        this.camera = mainCamera.getInstance();

        this.ui = UI.getInstance();

        this.cubes = new UnlitCubes(new three.Vector3(5, 5, 5), new three.Vector3(-5, -5, -5));
        this.scene.add(this.cubes.cubeMesh);
    }

    render = () => {
        this.stats.begin();
        
        // update camera if scene resized
        this.camera.ResizeCam(this.canvas, this.renderer);
        
        this.renderer.render(this.scene, this.camera.mainCam);

        this.stats.end();
    }

    static getInstance() {
        if (Scene.instance)
            return this.instance;

        this.instance = new Scene();
        return this.instance;
    }
}