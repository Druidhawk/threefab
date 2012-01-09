ThreeFab	
=============

<<<<<<< HEAD
ThreeFab is a tool that allows designers and devlopers to quickly fabricate and manipulate a three.js scene.

For those not familiar with [Three.js][1] 

[1]: https://github.com/mrdoob/three.js
=======
ThreeFab is a tool that allows designers and developers to quickly fabricate and manipulate a three.js scene.  This is currently an alpha build as a proof of concept. You will need a WebGL capable browser.

For those not familiar with [Three.js][1] 

[1]: https://github.com/mrdoob/three.js

Controls
=============

Key controls
-------------
S - Zoom in and out on scene
X - Delete selected object

Positioning objects
-------------
To position an object you can use the manipulator tool or use the individual position attributes in the transforms panel.

Transforms
-------------
The transforms are setup in blocks of three coordinates (x,y,z).  The first block is for position, second is for rotation, third is for scale.

Outliner
-------------
The outliner contains all the children that can be manuipulated in the scene. To change the selected object you can either click on that object in the viewport or use the drop down provided in the outliner.

Textures
-------------
To add a texture first select a model and drag and drop the image on to the viewport.

Exporter
-------------
To generate and export the current three.js code click the generate button in the top right.  Note: You will need to update the paths for any textured materials and JSON models.  Threefab will put a placeholer url that will need to be modified.
>>>>>>> master
