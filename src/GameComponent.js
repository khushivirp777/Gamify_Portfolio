import React, { useEffect,useState } from 'react';
import Phaser from 'phaser';
import girlGif from './girl.gif';



const GameComponent = () => {
  const [answers, setAnswers] = useState([]);
  const [fileReadSuccess, setFileReadSuccess] = useState(false);
  useEffect(() => {
   
    const cookieAnswers = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .find(cookie => cookie[0].trim() === 'answers');
  
  if (cookieAnswers) {
    const savedAnswers = JSON.parse(cookieAnswers[1]);
    setAnswers(savedAnswers);
    console.log('Answers:', savedAnswers);
    
    // Alert that data has arrived
    alert('Data has arrived!');
  } else {
    console.log('No answers found in cookies.');
  }
  

  
    let game;
    let girl;
    let girlX = 0; // Variable to store the girl's X position
    let girlY = 0
 
    const platformLength = 15000; // Adjust the platform length as needed

    const config = {
      type: Phaser.CANVAS,
      width: window.innerWidth,
      height: window.innerHeight,
      
      
      scene: {
        preload: preload,
        create: create,
        update: update
      },
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 }
        }
      }
    };

    function preload() {
      this.load.image('girlGif', girlGif, { frameWidth: 32, frameHeight: 48 });
      this.load.image('l1', 'images/l1.jpg'); // Load the background image
      this.load.image('11', 'images/11.png');
      this.load.image('ground', 'images/ground.png'); // Load the ground image
      this.load.image('grass', 'images/grass.png'); // Load the grass image
      this.load.image('coco', 'images/coco.png'); 
      this.load.image('tree', 'images/tree.gif'); 
      this.load.image('bird', 'images/bird.gif'); 
      this.load.image('ll', 'images/ll.png'); 
      this.load.image('school', 'images/school.png'); 
      this.load.image('mountain', 'images/mountain.png'); 
      this.load.image('building', 'images/building.png'); 
      this.load.image('l2', 'images/l2.png'); 
      this.load.image('12', 'images/12.png'); 
      this.load.image('13', 'images/13.png'); 
      this.load.image('14', 'images/14.png'); 
      this.load.image('board', 'images/board.png'); 
      this.load.image('b1', 'images/b1.png'); 
      this.load.image('b3', 'images/b3.png'); 
      this.load.image('b4', 'images/b4.png'); 
      this.load.image('b5', 'images/b5.png'); 
      this.load.image('c1', 'images/c1.png'); 
      this.load.image('c5', 'images/c8.png'); 
      this.load.image('file', 'images/file.png'); 
      this.load.image('c3', 'images/c3.png'); 
      
      

    }

    function create() {
      // Event listener to handle tabClosed event
       


      // Set background color
      this.cameras.main.setBackgroundColor('#2ECCFA'); // Example color: light blue
    
      // Create the girl sprite and assign it to the 'girl' variable
      girl = this.physics.add.sprite(100, window.innerHeight / 2, 'girlGif').setScale(0.5);
      girl.setDepth(1); // Set depth behind the '11' image
      girlX = girl.x;
      girlY = girl.y;
      // Set the world bounds
      this.physics.world.setBounds(0, 0, window.innerWidth + platformLength, window.innerHeight + 1200);

    
    
      // Initialize the background
      // Initialize the background
// Initialize the background
var grass = this.add.tileSprite(0, window.innerHeight - 50, platformLength * 3, 250, 'grass').setScale(0.5);
var ground = this.add.tileSprite(0, window.innerHeight - 50, platformLength * 3, 150, 'ground').setScale(0.5);

// Create another set of grass and ground sprites starting from position 5250
var grass2 = this.add.tileSprite(5250, window.innerHeight - 50, platformLength * 3, 250, 'grass').setScale(0.5);
var ground2 = this.add.tileSprite(5250, window.innerHeight - 50, platformLength * 3, 150, 'ground').setScale(0.5);
var grass3 = this.add.tileSprite(10250, window.innerHeight - 50, platformLength * 3, 250, 'grass').setScale(0.5);
var ground3 = this.add.tileSprite(10250, window.innerHeight - 50, platformLength * 3, 150, 'ground').setScale(0.5);
// var grass4 = this.add.tileSprite(15250, window.innerHeight - 50, platformLength * 3, 250, 'grass').setScale(0.5);
var ground4 = this.add.tileSprite(15250, window.innerHeight - 50, platformLength * 3, 150, 'ground').setScale(0.5);

    
      // Place coconut trees above ground and grass
      const coconutTreeY = window.innerHeight - 250; // Adjust the Y position as needed
      const ct1 = this.add.sprite(7550, coconutTreeY, 'coco');
      const ct2 = this.add.sprite(7650, coconutTreeY, 'coco');
      const ct3 = this.add.sprite(7750, coconutTreeY, 'coco');
      const ct4 = this.add.sprite(7850, coconutTreeY, 'coco');

      const ruhi = this.add.sprite(650, window.innerHeight - 353, '11').setScale(1.5);
      const tr = this.add.sprite(1350, window.innerHeight - 253, 'tree').setScale(1.5);
      const le = this.add.sprite(2150, window.innerHeight - 313, 'll').setScale(1.5);
      const sc = this.add.sprite(3750, window.innerHeight - 313, 'school').setScale(1.5);
      this.physics.add.existing(sc);

      // Set a collision between girl and school sprite
      let collisionOccurred = false; // Initialize a boolean flag to track collision

// Set a collision between girl and school sprite
this.physics.add.collider(girl, sc, function() {
    // Check if collision has already occurred
    if (!collisionOccurred) {
        // Perform actions when girl collides with school sprite
        console.log("Girl collided with school!");

        // Set the flag to true to indicate that collision has occurred
        collisionOccurred = true;

        // Hide the game container
        const gameContainer = document.getElementById('game-container');
        gameContainer.style.display = 'none';

        // Show the index.html page
        window.open('http://localhost:8000/index.html', '_blank');

    }
});

      ;
      const mn = this.add.sprite(5150, window.innerHeight - 323, 'mountain').setScale(1.5);
      this.physics.add.existing(mn);

      // Set a collision between girl and school sprite
      this.physics.add.collider(girl, mn, function() {
        // Perform actions when girl collides with school sprite
        console.log("Girl collided with Mountain!");
        
        // Add your custom logic here
      });
      const bd = this.add.sprite(6250, window.innerHeight - 323, 'building').setScale(1.5);
      const lt = this.add.sprite(7550, window.innerHeight - 410, 'l2').setScale(2);
       const ll = this.add.sprite(8550, window.innerHeight - 323, '12').setScale(1.5);
        const l3 = this.add.sprite(9450, window.innerHeight - 323, '13').setScale(1.5);
        const l4 = this.add.sprite(10450, window.innerHeight - 323, '14').setScale(1.5);
        const l5 = this.add.sprite(11250, window.innerHeight - 323, 'board').setScale(1.5);
        const l6 = this.add.sprite(11950, window.innerHeight - 323, 'b1').setScale(1.5);
        const l7 = this.add.sprite(12850, window.innerHeight - 323, 'b3').setScale(1.5);
        const l8 = this.add.sprite(13550, window.innerHeight - 323, 'b4').setScale(1);
        const l9 = this.add.sprite(11950, window.innerHeight - 630, 'b5').setScale(1.5);
        const f8 = this.add.sprite(14950, window.innerHeight - 480, 'c1').setScale(1.5);
        const f9 = this.add.sprite(15350, window.innerHeight - 280, 'c5').setScale(1.5);
        const f10 = this.add.sprite(16850, window.innerHeight - 480, 'file').setScale(1.5);
        const f11 = this.add.sprite(18450, window.innerHeight - 323, 'c3').setScale(1.5);

    }
    
    

  // Define a variable to store the previous camera scroll position
let prevCameraScrollX = 0;
let prevCameraScrollY = 0;

function update() {
  const cursors = this.input.keyboard.createCursorKeys();
  const cameraSpeed = 35; // Adjust the scrolling speed as needed
  const girlSpeed = 5; // Adjust the girl's movement speed as needed

  // Move the camera left or right
  if (cursors.left.isDown) {
    this.cameras.main.scrollX -= cameraSpeed;
  } else if (cursors.right.isDown) {
    this.cameras.main.scrollX += cameraSpeed;
  }

  // Move the girl sprite up or down
  if (cursors.up.isDown) {
    girl.y -= girlSpeed;
  } else if (cursors.down.isDown) {
    girl.y += girlSpeed;
  }

  // Update the girl sprite position horizontally
  girl.x = this.cameras.main.scrollX + (window.innerWidth / 2);
  
}


    
    game = new Phaser.Game(config);
  // Call the fetchAnswers function to read the file when the component mounts

    
    return () => {
      game.destroy();
    };
    
  }, []);

  return (
    <div id="game-container" style={{ width: '100vw', height: '100vh' }}>
       {/* Example: Displaying answers */}
       <ul>
        {answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameComponent;
