# three-base

This is a template to start any TypeScript-based three.js project.

## Installation

1. Make sure [node.js](https://nodejs.org/en/download/) and [yarn](https://yarnpkg.com/getting-started/install) are installed. 
   - Yarn can be installed with ``npm install -g yarn``
2. Clone this repository.
3. Run ``yarn`` in the base folder, which will setup the project and install all required dependencies.
4. If using VSCode, run ``yarn dlx @yarnpkg/sdks vscode`` to setup yarn for TypeScript + VSCode.

## Usage

- ``yarn start`` will start a local webpack server which will reload on any TS changes. 
- ``yarn build`` will compile the required files for distribution into the ``dist`` folder. These options can be modified in ``webpack.config.prod.js``

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
    - Basic setup for a UI using ``dat-gui``.
  - *unlit_cubes.ts*
    - A simple example of displaying cubes using instanced meshes.
  - **static**
    - *index.html*
      - The template HTML file that webpack will use to generate the page.
    - *app.css*
      - Global CSS for any HTML elements, which is included in *app.ts*.
  - **assets**
    - Any asset that you want to load (texture, JSON, etc) goes here.
- **dist**
    - The distribution files are compiled to this folder when you use ``yarn build``. 