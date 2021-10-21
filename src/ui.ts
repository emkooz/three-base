import { Pane } from 'tweakpane';
import { mainCamera } from './camera';

/* Small class that uses tweakpane for UI */

export class UI {
    pane = new Pane();

    private static instance: UI;
    private constructor() {
        const cam = mainCamera.getInstance();

        this.pane.addMonitor(cam.camera.position, 'x', { interval: 20 });
        this.pane.addMonitor(cam.camera.position, 'y', { interval: 20 });
        this.pane.addMonitor(cam.camera.position, 'z', { interval: 20 });
    }

    static getInstance() {
        if (UI.instance)
            return this.instance;

        this.instance = new UI();
        return this.instance;
    }
}