<<<<<<< HEAD
/** 
 * @class THREEFAB.TransformView
 * 
 * @author itooamaneatguy / http://kadrmasconcepts.com/blog/
 * @description Setup transform view.
 * 
=======
/**
 * @class THREEFAB.TransformView
 *
 * @author itooamaneatguy / http://kadrmasconcepts.com/blog/
 * @description Setup transform view.
 *
>>>>>>> master
 */


THREEFAB.TransformView = Backbone.View.extend({
		
	el: '#gui-transform-container',
	gui: {},
	outliner: {},
	viewport: {},
	selected: {},
	
	folders: {
		camera:{},
		outliner:{},
<<<<<<< HEAD
		transforms:{},
=======
		transforms:{}
>>>>>>> master
	},
	
	initialize: function() {

		_.bindAll(this);
		this.el = $(this.el);

		this.viewport = arguments[0].viewport;

		// Listen to when an object is selected.
<<<<<<< HEAD
		$.subscribe('viewport/mesh/selected', this.addTransformOptions);
		$.subscribe('viewport/light/selected', this.addTransformOptions);
=======
		$.subscribe(THREEFAB.Events.VIEWPORT_MESH_SELECTED, this.addTransformOptions);
		$.subscribe(THREEFAB.Events.VIEWPORT_LIGHT_SELECTED, this.addTransformOptions);
>>>>>>> master

	},
	
	render: function() {
		
		// Create transform gui element.
		this.gui = new dat.GUI({ autoPlace: false, hide:false });
		this.el.append(this.gui.domElement);
		
		// Add Camera
		this.folders.camera = this.gui.addFolder('Camera')	;
		this.addCameraOptions();

		// Add outliner
		this.folders.outliner = this.gui.addFolder('Outliner');
		this.outliner = new THREEFAB.OutlinerView();
		this.outliner.render( this.viewport.scene );

		this.folders.outliner.__ul.appendChild(this.outliner.el[0]);
		this.folders.outliner.open();
						
		// Add transforms
		this.folders.transforms = this.gui.addFolder('Transforms');
		this.addTransformOptions();
		this.folders.transforms.open();

	},

	addCameraOptions: function() {

		this.folders.camera.add(this.viewport.camera.position, 'x').listen();
		this.folders.camera.add(this.viewport.camera.position, 'y').listen();
		this.folders.camera.add(this.viewport.camera.position, 'z').listen();

	},

	addTransformOptions: function() {

		var selected = this.viewport._SELECTED;
		var viewport = this.viewport;

		THREEFAB.Ui.utils.removeFolderControllers(this.folders.transforms);


		this.folders.transforms.add(selected.position, 'x').listen().onChange(function(){
			viewport.updateManipulator();
		});
		
		this.folders.transforms.add(selected.position, 'y').listen().onChange(function(){
			viewport.updateManipulator();
		});

		this.folders.transforms.add(selected.position, 'z').listen().onChange(function(){
			viewport.updateManipulator();
		});
		
		// Rotation
		this.folders.transforms.add(selected.rotation, 'x', -Math.PI, Math.PI);
		this.folders.transforms.add(selected.rotation, 'y', -Math.PI, Math.PI);
		this.folders.transforms.add(selected.rotation, 'z', -Math.PI, Math.PI);
		
		if(!selected.light) {
			
<<<<<<< HEAD
			// Scale 
=======
			// Scale
>>>>>>> master
			this.folders.transforms.add(selected.scale, 'x', 0);
			this.folders.transforms.add(selected.scale, 'y', 0);
			this.folders.transforms.add(selected.scale, 'z', 0);
			
		}
		
		// Shadows
		this.folders.transforms.add(selected, 'castShadow');
		this.folders.transforms.add(selected, 'receiveShadow').onChange(function() {
			viewport.resetMaterials();
		});

	}


});