var config = {
    type: Phaser.AUTO,
    width: 800, // Adjust width as necessary
    height: 600, // Adjust height as necessary
    physics: {
        default: 'arcade', // Change physics mode as necessary
        arcade: {
            debug: false
        }
    },
    scene: {
        key: 'main',
        preload: preload,
        create: create,
        update: update
    }
};

function preload() {
	
}

function create() {

}

function update() {
	
}