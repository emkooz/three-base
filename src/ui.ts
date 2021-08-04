import { GUI } from 'dat-gui'
import { mainCamera } from './camera';

/* Small class that uses dat-gui for UI */

export class UI {
    gui = new GUI();
    folder: GUI;

    private static instance: UI;
    private constructor() {
        const cam = mainCamera.getInstance();

        this.folder = this.gui.addFolder('Camera');

        this.folder.add(cam.camera.position, 'x').name('Camera X').listen();
        this.folder.add(cam.camera.position, 'y').name('Camera Y').listen();
        this.folder.add(cam.camera.position, 'z').name('Camera Z').listen();

        this.folder.open();
    }

    static getInstance() {
        if (UI.instance)
            return this.instance;

        this.instance = new UI();
        return this.instance;
    }
}