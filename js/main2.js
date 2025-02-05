
// JavaScript Document
enchant();


window.onload= function(){
var game = new Core(600,600);
game.fps = 10;
game.preload ("../enchant/images/chara1.png","../enchant/images/map0.png");
game.onload =function(){
	
	var bear  = new Sprite(
		32,32);
		bear.image = game.assets["../enchant/images/chara1.png"];
		bear.frame = [1,2];
		bear.x =16;
		bear.y = 16;
		
	var Girlbear  = new Sprite(
		32,32);
		Girlbear.image = game.assets["../enchant/images/chara1.png"];
		Girlbear.frame = [11,12];
		Girlbear.x = 540;
		Girlbear.y = 540;
		Girlbear.scaleX = -1;
	
	var map  = new Map (16, 16);
		map.y = 0;
		map.image = 
		game.assets ["../enchant/images/map0.png"];
		map.loadData([
	    [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
      [4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4],
      [4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4],
      [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
		]);
	
		map.collisionData=([
	    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		]);

		
		
		game.rootScene.addChild(map);
	game.rootScene.addChild(Girlbear);
		game.rootScene.addChild(bear);
	
	game.keybind(65, "A");
    game.keybind(83, "S");
    game.keybind(87, "W");
    game.keybind(68, "D");
    game.keybind(32, "space")	
	
     function handleBearMovement() {
      var newBearX = bear.x;
      var newBearY = bear.y;

            // if (game.input.A || game.input.left) {
            //     newbear.x--;
            //     bear.scaleX = -1;
            // }
            // if (game.input.S || game.input.down) {
            //     bear.y++;
            // }
            // if (game.input.D || game.input.right) {
            //     bear.x ++;
            //     bear.scaleX = 1;
            // }
            // if (game.input.W || game.input.up) {
            //     bear.y--;
            // }


    if (game.input.A || game.input.left) {
      newBearX-=5;
      bear.scaleX = -1;
  }
  if (game.input.S || game.input.down) {
      newBearY++;
  }
  if (game.input.D || game.input.right) {
      newBearX+=5;
      bear.scaleX = 1;
  }
  if (game.input.W || game.input.up) {
      newBearY--;
  }
            
          //   if (checkCollision(bear.x, bear.y)) {
          //     // If collision detected, revert the movement
          //     if (game.input.A || game.input.left) {
          //         bear.x =0;
          //     } else if (game.input.S || game.input.down) {
          //         bear.y=0;
          //     } else if (game.input.D || game.input.right) {
          //         bear.x=0;
          //     } else if (game.input.W || game.input.up) {
          //         bear.y--;
          //     }
          // }

          if (!checkCollision(newBearX, newBearY)) {
            // Update the position only if there is no collision

            newBearX = Math.max(0, Math.min(newBearX, game.width - bear.width));
        newBearY = Math.max(0, Math.min(newBearY, game.height - bear.height));

            bear.x = newBearX;
            bear.y = newBearY;
        }

          }
          
          function handleGirlbearMovement() {

    var newGirlbearX = Girlbear.x;
    var newGirlbearY = Girlbear.y;

            // if (game.input.A || game.input.left) {
            //   Girlbear.x -= 5;
            //     Girlbear.scaleX = -1;
            // }
            // if (game.input.S || game.input.down) {
            //     Girlbear.y++;
            // }
            // if (game.input.D || game.input.right) {
            //     Girlbear.x += 5;
            //     Girlbear.scaleX = 1;
            // }
            // if (game.input.W || game.input.up) {
            //     Girlbear.y--;
            // }
            
            if (game.input.A || game.input.left) {
              newGirlbearX -= 5;
              Girlbear.scaleX = -1;
          }
          if (game.input.S || game.input.down) {
              newGirlbearY++;
          }
          if (game.input.D || game.input.right) {
              newGirlbearX += 5;
              Girlbear.scaleX = 1;
          }
          if (game.input.W || game.input.up) {
              newGirlbearY--;
          }
      
          

          //   if (checkCollision(Girlbear.x, Girlbear.y)) {
          //     // If collision detected, revert the movement
          //     if (game.input.A || game.input.left) {
          //         Girlbear.x += 5;
          //     } else if (game.input.S || game.input.down) {
          //         Girlbear.y--;
          //     } else if (game.input.D || game.input.right) {
          //         Girlbear.x -= 5;
          //     } else if (game.input.W || game.input.up) {
          //         Girlbear.y++;
          //     }
          // }

          // Check for collision and keep Girlbear within valid bounds
          if (!checkCollision(newGirlbearX, newGirlbearY)) {
              newGirlbearX = Math.max(0, Math.min(newGirlbearX, game.width - Girlbear.width));
              newGirlbearY = Math.max(0, Math.min(newGirlbearY, game.height - Girlbear.height));
      
              // Update the position
              Girlbear.x = newGirlbearX;
              Girlbear.y = newGirlbearY;
          }

          }

          function checkCollision(x, y) {
            var tileX = Math.floor(x / 16); // Assuming each tile is 32x32 pixels
            var tileY = Math.floor(y / 16);

            // return (
            //     map.collisionData[tileY] && // Check if the row exists
            //     map.collisionData[tileY][tileX] === 1 // Check if the tile is collidable
            // );

            // Ensure the tile coordinates are within the map bounds
    if (
      tileY >= 0 &&
      tileY < map.collisionData.length &&
      tileX >= 0 &&
      tileX < map.collisionData[tileY].length
  ) {
      return map.collisionData[tileY][tileX] === 1; // Check if the tile is collidable
  }

  return false; // Treat out-of-bounds as collision

        }

	
		bear.addEventListener("enterframe",function(){
      handleBearMovement();
		});
	
	
	
	Girlbear.addEventListener("enterframe",function(){
    handleGirlbearMovement();
		});


		};
	
game.start();
};

