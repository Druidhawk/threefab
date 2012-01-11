/**
 * @author itooamaneatguy / http://kadrmasconcepts.com/blog/
 * @author mr.doob / http://mrdoob.com/
 */

THREEFAB.DragDropLoader = function() {
	
	window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;
	window.URL = window.URL || window.webkitURL || window.mozURL;
	
	// Need to prevent these events since the Drag and Drop API is weird.
	document.addEventListener('dragover', function (event) { event.preventDefault(); }, false );
	document.addEventListener('dragleave', function (event ) { event.preventDefault(); }, false );
	
	document.addEventListener('drop', function (event) {

		event.stopPropagation();
		event.preventDefault();

		var file = event.dataTransfer.files[ 0 ];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

		if(file === undefined) { return false; }

>>>>>>> master
=======

		if(file === undefined) { return false; }

>>>>>>> master
=======

		if(file === undefined) { return false; }

>>>>>>> master
		var extension = file.name.split( '.' )[1].toLowerCase();
		var reader = new FileReader();
		var isImage = false;

		if(extension === "jpg" || extension === "png") {
			isImage = true;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
		}	

		reader.onload = function ( event ) {
			var contents = event.target.result,
				loader;				
			
			if(extension === "js") {
				// We dropping in a mesh.
				    
			    loader = new THREE.JSONLoader();
				loader.createModel( JSON.parse(contents), function ( geometry ) {

					var material = new THREE.MeshPhongMaterial( { color: 0xffffff, wireframe: false, map:new THREEFAB.CanvasTexture() } );
					material.name = 'MeshPhongMaterial';
					
					var mesh = new THREE.Mesh( geometry, material );
					
					$.publish('model/loaded', mesh);

				});
			} else if(isImage) {
				// We are dropping in a texture.
=======
=======
>>>>>>> master
=======
>>>>>>> master
		}

		reader.onload = function ( event ) {
			var contents = event.target.result,
				loader;
			
			if(extension === "js") {
				// We dropping in a mesh.

				loader = new THREE.JSONLoader();
				loader.createModel( JSON.parse(contents), function ( geometry ) {

					// This is a valid model.
					var material = new THREE.MeshPhongMaterial( { color: 0xffffff, wireframe: false, map: new THREEFAB.CanvasTexture() } );
					material.name = 'MeshPhongMaterial';
					
					var mesh = new THREE.Mesh( geometry, material );
					mesh.name = "THREE.JSONLoader." + mesh.id;
					
					$.publish(THREEFAB.Events.MODEL_LOADED, mesh);

				});
			} else if(isImage) {

				// We are dropping in a texture.
				
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> master
=======
>>>>>>> master
				var img = new Image();
				img.src = contents;
				
				var texture = new THREE.Texture(img);
				texture.needsUpdate = true;
				
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
				$.publish('texture/loaded', texture);	
=======
				$.publish(THREEFAB.Events.TEXTURE_LOADED, texture);
			
>>>>>>> master
=======
				$.publish(THREEFAB.Events.TEXTURE_LOADED, texture);
			
>>>>>>> master
=======
				$.publish(THREEFAB.Events.TEXTURE_LOADED, texture);
			
>>>>>>> master
			}
			
		};
		
		if(extension === 'js') {
			reader.readAsText( file );
		} else if(isImage) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
			reader.readAsDataURL(file);	
		}
				
	});				
=======
=======
>>>>>>> master
=======
>>>>>>> master
			reader.readAsDataURL(file);
		}
				
	});
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> master
=======
>>>>>>> master
};
