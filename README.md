# three-base

This is a template to start any TypeScript-based three.js project.

## Installation

1. Make sure [node.js](https://nodejs.org/en/download/) and [yarn](https://yarnpkg.com/getting-started/install) are installed. 
   - Yarn can be installed with ``npm install -g yarn``
2. Clone this repository.
3. Run ``yarn`` in the base folder, which will setup the project and install all required dependencies.
4. If using VSCode, run ``yarn dlx @yarnpkg/sdks vscode`` to setup yarn for TypeScript + VSCode.

If deploying remotely (such as to Github Pages), make sure to change ``base`` in *vite.config.js* to the base URL that the page will be hosted on. Example: if hosting on example.com/coolwebpage, change ``base`` to ``/coolwebpage/``

## Usage

- ``yarn start`` will start a local vite server which will reload on any changes. 
- ``yarn build`` will compile the required files for distribution into the ``dist`` folder.
- ``yarn build-dev`` will build and start a vite server with the production build to confirm it built correctly.
- ``yarn deploy`` will deploy everything in the *dist* folder to the "dist" branch of the current repository (current changes are built before deploying).

## Layout

The base folder contains the main configuration files, which should suffice for most use cases.

Folder structure:
- **src**
  - *app.ts*
    - Starter file where we load our CSS and start the three.js project
  - *scene.ts*
    - Loads everything required for the scene, contains render loop.
  - *camera.ts*
    - Handles everything with the camera of the scene, using ``OrbitControls``.
  - *ui.ts*
    - Basic setup for a UI using ``tweakpane``.
  - *unlit_cubes.ts*
    - A simple example of displaying cubes using instanced meshes.
  - **static**
    - *app.css*
      - Global CSS for any HTML elements, which is included in *app.ts*.
  - **assets**
    - Any asset that you want to load (texture, JSON, etc) goes here. These can be loaded directly from source *without* the referring to the "assets" folder. Example: to load "example.txt" under "assets/example.txt" you would access "example.txt" without the "assets/".
  - *index.html*
      - The base HTML file that vite will build and run from.
- **dist**
    - The distribution files are compiled to this folder when you use ``yarn build``. 