// JavaScript Document
enchant();


window.onload= function(){
var game = new Core(600,600);
game.fps = 15;
game.preload ("images/chara1.png","images/map0.png","images/chara2.png","images/icon0.png");
game.onload =function(){
	
	var bear  = new Sprite(
		32,32);
		bear.image = game.assets["images/chara1.png"];
		bear.frame = [1,1,2,2];
		bear.x = 32;
		bear.y = 32;
        
		
	var Girlbear  = new Sprite(32,32);
		Girlbear.image = game.assets["images/chara1.png"];
		Girlbear.frame = [11,11,12,12];
		Girlbear.x = 525;
		Girlbear.y = 525;
		Girlbear.scaleX = -1;

    var Enemy  = new Sprite(32,32);
        Enemy.image = game.assets["images/chara2.png"];
        Enemy.frame = [2,2,3,3];
        Enemy.x = 17;
        Enemy.y = 97;
        Enemy.scaleX = -1;
       

    var Enemy2 = new Sprite(32, 32);
        Enemy2.image = game.assets["images/chara2.png"];
        Enemy2.frame = [2, 2, 3, 3];
        Enemy2.x = 195;
        Enemy2.y = 250;
        
        // Repeat this for Enemy3 through Enemy9
        
     var Enemy3 = new Sprite(32, 32);
        Enemy3.image = game.assets["images/chara2.png"];
        Enemy3.frame = [2, 2, 3, 3];
        Enemy3.x = 162;
        Enemy3.y = 335;

    var Enemy4 = new Sprite(32, 32);
        Enemy4.image = game.assets["images/chara2.png"];
        Enemy4.frame = [2, 2, 3, 3];
        Enemy4.x = 205;
        Enemy4.y = 300;
        
    var Enemy5 = new Sprite(32, 32);
        Enemy5.image = game.assets["images/chara2.png"];
        Enemy5.frame = [2, 2, 3, 3];
        Enemy5.x = 255;
        Enemy5.y = 495;
       	Enemy.scaleX = -1;
       
        
    var Enemy6 = new Sprite(32, 32);
        Enemy6.image = game.assets["images/chara2.png"];
        Enemy6.frame = [2, 2, 3, 3];
        Enemy6.x = 405;
        Enemy6.y = 45;
       
        
    var Enemy7 = new Sprite(32, 32);
        Enemy7.image = game.assets["images/chara2.png"];
        Enemy7.frame = [2, 2, 3, 3];
        Enemy7.x = 350;
        Enemy7.y = 125;
        
    var Enemy8 = new Sprite(32, 32);
        Enemy8.image = game.assets["images/chara2.png"];
        Enemy8.frame = [2, 2, 3, 3];
        Enemy8.x = 545;
        Enemy8.y = 270;
        
    var Enemy9 = new Sprite(32, 32);
        Enemy9.image = game.assets["images/chara2.png"];
        Enemy9.frame = [2, 2, 3, 3];
        Enemy9.x = 305;
        Enemy9.y = 540;

    var Enemy10 = new Sprite(32, 32);
        Enemy10.image = game.assets["images/chara2.png"];
        Enemy10.frame = [2, 2, 3, 3];
        Enemy10.x = 540;
        Enemy10.y = 460;

    var Apple = new Sprite(16,16);
        Apple.image = game.assets["images/icon0.png"];
        Apple.frame =15;
        Apple.x=30;
        Apple.y=190;

        
        var Apple2 = new Sprite(16,16);
        Apple2.image = game.assets["images/icon0.png"];
        Apple2.frame =15;
        Apple2.x=120;
        Apple2.y=160;

        var Apple3 = new Sprite(16,16);
        Apple3.image = game.assets["images/icon0.png"];
        Apple3.frame =15;
        Apple3.x=150;
        Apple3.y=45;
       
        var Apple4 = new Sprite(16,16);
        Apple4.image = game.assets["images/icon0.png"];
        Apple4.frame =15;
        Apple4.x=95;
        Apple4.y=285;

        var Apple5 = new Sprite(16,16);
        Apple5.image = game.assets["images/icon0.png"];
        Apple5.frame =15;
        Apple5.x=255;
        Apple5.y=230;

        var Apple6 = new Sprite(16,16);
        Apple6.image = game.assets["images/icon0.png"];
        Apple6.frame =15;
        Apple6.x=110;
        Apple6.y=450;

        var Apple7 = new Sprite(16,16);
        Apple7.image = game.assets["images/icon0.png"];
        Apple7.frame =15;
        Apple7.x=125;
        Apple7.y=510;

        var Apple8 = new Sprite(16,16);
        Apple8.image = game.assets["images/icon0.png"];
        Apple8.frame =15;
        Apple8.x=310;
        Apple8.y=185;

        var Apple9 = new Sprite(16,16);
        Apple9.image = game.assets["images/icon0.png"];
        Apple9.frame =15;
        Apple9.x=420;
        Apple9.y=180;

        
        var Apple10 = new Sprite(16,16);
        Apple10.image = game.assets["images/icon0.png"];
        Apple10.frame =15;
        Apple10.x=540;
        Apple10.y=90;

    
		var Apple11 = new Sprite(16,16);
        Apple11.image = game.assets["images/icon0.png"];
        Apple11.frame =15;
        Apple11.x=510;
        Apple11.y=200;

       
		var Apple12 = new Sprite(16,16);
        Apple12.image = game.assets["images/icon0.png"];
        Apple12.frame =15;
        Apple12.x=335;
        Apple12.y=360;

        var Apple13 = new Sprite(16,16);
        Apple13.image = game.assets["images/icon0.png"];
        Apple13.frame =15;
        Apple13.x=400;
        Apple13.y=420;
        
        var Apple14 = new Sprite(16,16);
        Apple14.image = game.assets["images/icon0.png"];
        Apple14.frame =15;
        Apple14.x=505;
        Apple14.y=365;

      var Apple15 = new Sprite(16,16);
        Apple15.image = game.assets["images/icon0.png"];
        Apple15.frame =15;
        Apple15.x=385;
        Apple15.y=540;

        // For bullet direction 
    var Score = 0;
        var label = new enchant.Label();
        label.text = "Score :" + " "+Score;
        label.width = 200;
        label.height = 64;
		label.color = 'white';
        label.font = "20px 'Arial' ";
        label.x=270;

        var label01 = new enchant.Label();
        label01.text = "Thankyou for helping two bears to get there home. <br>                   Now they can live happily. <br>                         Game is Finished.";
        label01.width = 600;
        label01.height = 500;
		label01.color = 'gold';
        label01.font = "20px 'pixelify' ";
        label01.visible = false;
        
        label01.x =125;
        label01.y = 200;
       
        var appleCollected = {
            Apple: false,
            Apple2: false,
            Apple3: false,
            Apple4: false,
            Apple5: false,
            Apple6: false,
            Apple7: false,
            Apple8: false,
            Apple9: false,
            Apple10: false,
            Apple11: false,
            Apple12: false,
            Apple13: false,
            Apple14: false,
            Apple15: false
        };

	var map  = new Map (16,16);
		map.y = 0;
		map.image = 
		game.assets ["images/map0.png"];
	
    map.loadData([
        [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
        [4,5,5,5,5,4,5,5,4,5,5,4,5,5,5,5,5,5,4,5,5,5,5,4,5,5,5,5,5,5,5,5,5,5,5,5,4],
        [4,5,5,5,5,4,5,5,5,5,5,4,5,5,5,5,5,5,4,5,5,5,5,4,5,5,5,5,5,5,5,5,5,5,5,5,4],
        [4,5,5,5,5,4,5,5,5,5,5,4,5,5,5,5,5,5,4,5,5,5,5,5,5,5,5,4,4,4,4,5,5,5,5,5,4],
        [4,5,5,5,5,4,5,5,4,5,5,4,5,5,4,4,5,5,4,5,5,5,5,5,5,5,5,4,4,4,4,5,5,4,5,5,4],
        [4,4,4,5,5,4,5,5,4,4,4,4,5,5,4,5,5,5,4,5,5,5,5,5,4,5,5,5,5,5,4,4,5,5,5,5,4],
        [4,5,5,5,5,5,5,5,5,5,5,5,5,5,4,5,5,4,4,5,5,5,5,5,4,5,5,5,5,5,5,4,5,5,5,5,4],
        [4,5,5,5,5,5,5,5,5,5,5,5,5,5,4,5,5,5,4,5,5,5,4,4,4,4,4,4,4,5,5,4,4,4,4,4,4],
        [4,5,5,4,4,4,4,4,4,4,4,4,5,5,4,5,5,5,4,5,5,5,5,5,5,5,5,5,4,5,5,5,4,5,5,5,4],
        [4,5,5,5,4,5,5,5,5,5,5,4,4,4,4,4,5,5,4,4,5,5,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4],
        [4,5,5,5,4,5,5,5,5,5,5,5,5,5,5,5,5,5,4,5,5,5,5,5,4,4,5,5,4,5,5,5,5,5,5,5,4],
        [4,4,5,5,4,5,5,4,4,5,5,5,5,5,5,5,5,5,4,5,5,4,5,5,4,4,5,5,4,4,4,4,4,4,5,5,4],
        [4,5,5,5,4,5,5,4,4,5,5,4,5,5,4,4,4,4,4,5,5,4,5,5,4,4,5,5,4,5,5,5,5,5,5,5,4],
        [4,5,4,5,4,5,5,5,5,5,5,4,5,5,4,4,5,5,4,4,4,4,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4],
        [4,4,4,4,4,4,5,5,5,5,5,4,5,5,5,5,5,5,4,5,5,5,5,5,5,5,5,5,4,5,5,4,4,4,5,5,4],
        [4,5,5,5,5,5,5,5,4,5,5,4,5,5,5,5,5,5,4,5,5,5,5,5,4,4,4,4,4,5,5,4,4,4,5,5,4],
        [4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,7,7,7,7,2,2,7,5,5,4,5,5,5,4,5,5,4,4,4,5,5,4],
        [4,5,5,4,4,5,5,5,4,5,5,5,5,5,5,7,25,22,,23,,7,5,5,4,5,5,5,5,5,5,5,5,5,5,5,4],
        [4,5,5,4,4,5,5,5,4,5,5,5,4,4,4,7,,23,,23,23,7,5,5,4,5,5,5,5,5,5,5,5,5,5,5,4],
        [4,5,5,4,4,4,4,4,4,4,5,5,4,5,5,7,,21,,22,1,7,4,4,4,5,5,5,4,4,4,4,4,4,4,4,4],
        [4,5,5,4,4,5,5,5,5,5,5,5,4,5,5,7,,,,27,1,7,5,5,5,5,5,4,4,5,5,5,5,5,5,5,4],
        [4,5,5,5,5,5,5,5,5,5,5,5,4,5,5,7,2,2,7,7,7,7,5,5,5,5,5,4,5,5,4,5,5,5,4,5,4],
        [4,5,5,5,5,5,5,5,5,5,5,5,4,5,5,5,5,5,4,5,5,5,5,5,5,5,5,4,5,5,5,5,5,5,5,5,4],
        [4,4,4,4,4,5,5,4,5,5,4,4,4,5,5,5,5,5,4,5,5,5,5,5,5,5,5,4,5,5,5,5,5,5,5,5,4],
        [4,5,5,5,5,5,5,4,5,5,4,5,5,5,5,4,5,5,4,5,5,4,5,4,4,4,4,4,5,5,5,4,4,5,5,5,4],
        [4,5,5,5,5,5,5,4,5,5,4,5,5,5,5,4,4,4,4,5,5,4,5,4,5,5,5,4,5,5,5,4,5,5,5,5,4],
        [4,5,5,5,4,4,4,4,4,4,4,4,4,5,5,4,5,5,4,5,5,5,5,4,5,5,5,4,5,5,5,4,5,5,5,5,4],
        [4,5,5,5,5,5,5,5,5,5,5,5,4,5,5,4,5,5,4,5,5,5,5,4,5,5,5,4,5,5,5,4,4,4,5,5,4],
        [4,5,5,5,5,5,5,5,5,5,5,5,4,5,5,5,5,5,4,5,5,4,5,4,4,5,5,4,4,4,4,4,5,5,5,5,4],
        [4,5,5,4,5,5,4,4,4,4,5,5,4,5,5,5,5,5,4,5,5,4,5,5,4,5,5,5,5,5,5,5,5,5,5,5,4],
        [4,5,5,4,5,5,5,5,5,5,5,5,4,4,4,4,5,5,4,5,5,5,5,5,4,5,5,5,5,5,5,5,5,5,5,5,4],
        [4,5,5,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4,5,5,5,5,4,4,4,5,5,4,5,5,4,5,5,4,4,4],
        [4,5,5,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4,5,5,4,5,5,5,5,5,5,4,5,5,4,5,5,5,5,4],
        [4,5,5,4,5,5,4,4,4,4,5,5,5,5,5,4,4,4,4,5,5,4,5,5,5,5,5,5,4,5,5,4,5,5,5,5,4],
        [4,5,5,5,5,5,5,5,5,5,5,5,4,5,5,5,5,5,4,5,5,5,5,5,5,5,5,5,5,5,5,4,5,5,5,5,4],
        [4,5,5,5,5,5,5,5,5,5,5,5,4,5,5,5,5,5,4,5,5,5,5,5,4,5,5,5,5,5,5,4,5,5,5,5,4],
        [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
          ]);
        map.collisionData=(

            [
        
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1],
      [1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1],
      [1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1],
      [1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1],
      [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1],
      [1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
      [1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1],
      [1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1],
      [1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1],
      [1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1],
      [1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1],
      [1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1],
      [1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1],
      [1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1],
      [1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1],
      [1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
      [1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1],
      [1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1],
      [1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1],
      [1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1],
      [1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1],
      [1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1],
      [1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        ]
        );

    
        
		
		game.rootScene.addChild(map);
		game.rootScene.addChild(Girlbear);
		game.rootScene.addChild(bear);
        game.rootScene.addChild(Enemy);
        game.rootScene.addChild(Enemy2);
        game.rootScene.addChild(Enemy3);
        game.rootScene.addChild(Enemy4);
        game.rootScene.addChild(Enemy5);
        game.rootScene.addChild(Enemy6);
        game.rootScene.addChild(Enemy7);
        game.rootScene.addChild(Enemy8);
        game.rootScene.addChild(Enemy9);
        game.rootScene.addChild(Enemy10);
        game.rootScene.addChild(Apple);
        game.rootScene.addChild(Apple2);
        game.rootScene.addChild(Apple3);
        game.rootScene.addChild(Apple4);
        game.rootScene.addChild(Apple5);
        game.rootScene.addChild(Apple6);
        game.rootScene.addChild(Apple7);
        game.rootScene.addChild(Apple8);
        game.rootScene.addChild(Apple9);
        game.rootScene.addChild(Apple10);
        game.rootScene.addChild(Apple11);
        game.rootScene.addChild(Apple12);
        game.rootScene.addChild(Apple13);
        game.rootScene.addChild(Apple14);
        game.rootScene.addChild(Apple15);
		game.rootScene.addChild(label);
        game.rootScene.addChild(label01);
        
	
	game.keybind(65, "A");
    game.keybind(83, "S");
    game.keybind(87, "W");
    game.keybind(68, "D");

    
	
     function handleBearMovement() {
            if (game.input.A ) {
                bear.x -= 5;
                bear.scaleX = -1;
				game.input.S =false;
				game.input.D =false;
				game.input.W =false;
            }
            if (game.input.S ) {
                bear.y+=5;
				game.input.A =false;
				game.input.D=false;
				game.input.W =false;
            }
            if (game.input.D ) {
                bear.x += 5;
                bear.scaleX = 1;
				game.input.S =false;
				game.input.A=false;
				game.input.W =false;
            }
            if (game.input.W ) {
                bear.y-=5;
				game.input.S =false;
				game.input.D =false;
				game.input.A =false;
            }
            
            if (checkCollision(bear.x, bear.y)) {
              // If collision detected, revert the movement
              if (game.input.A ) {
                  bear.x +=5;
              } else if (game.input.S ) {
                  bear.y-=5;
              } else if (game.input.D ) {
                  bear.x-=5;
              } else if (game.input.W) {
                  bear.y+=5;
              }
          }

          }
          
          
          function handleGirlbearMovement() {
            if ( game.input.left) {
              Girlbear.x -= 5;
                Girlbear.scaleX = -1;
				game.input.down =false;
				game.input.up =false;
				game.input.right =false;
            }
            if (game.input.down) {
                Girlbear.y+=5;
				game.input.left =false;
				game.input.up =false;
				game.input.right =false;
            }
            if (game.input.right) {
                Girlbear.x += 5;
                Girlbear.scaleX = 1;
				game.input.down =false;
				game.input.up =false;
				game.input.left =false;
            }
            if (game.input.up) {
                Girlbear.y-=5;
				game.input.down =false;
				game.input.left =false;
				game.input.right =false;
            }
            
            if (checkCollision(Girlbear.x, Girlbear.y)) {
              // If collision detected, revert the movement
              if ( game.input.left) {
                  Girlbear.x += 5;
              } else if ( game.input.down) {
                  Girlbear.y-=5;
              } else if (game.input.right) {
                  Girlbear.x -= 5;
              } else if ( game.input.up) {
                  Girlbear.y+=5;
              }
          }

          }

          function checkCollision(x, y) {
            var tileX = Math.floor(x / 16); 
            var tileY = Math.floor(y / 16);

            return (
                map.collisionData[tileY] && map.collisionData[tileX] && // Check if the row exists
                map.collisionData[tileY][tileX] === 1 // Check if the tile is collidable
            );
        }
          
        function GameFinish(){
            if (bear.intersect(Girlbear) ){
               label01.visible=true;
               // alert("Thankyou for helping two bears to get there home . Now they can leave happily");
                game.stop();
            }
        }
        

        function gameOver() {
          //when bear collide with enemy
            game.end();
           
        }

        function updateScore (){
            Score+=10;
            label.text = "Score :" + " "+Score;
        }
        

        function score(){
            if (Girlbear.intersect(Apple) || bear.intersect(Apple)) {
               /* console.log("apple 1")*/
                game.rootScene.removeChild(Apple);
				if (!appleCollected['Apple']) {
                    game.rootScene.removeChild(Apple);
                    appleCollected['Apple'] = true; 
                    updateScore();
                }
            }
            
            if (Girlbear.intersect(Apple2) || bear.intersect(Apple2)) {
                if (!appleCollected['Apple2']) {
                    game.rootScene.removeChild(Apple2);
                    appleCollected['Apple2'] = true; 
                    updateScore();
                }
            }
            
            if (Girlbear.intersect(Apple3) || bear.intersect(Apple3)) {
                if (!appleCollected['Apple3']) {
                    game.rootScene.removeChild(Apple3);
                    appleCollected['Apple3'] = true; 
                    updateScore();
                }
            }
            
            if (Girlbear.intersect(Apple4) || bear.intersect(Apple4)) {
                if (!appleCollected['Apple4']) {
                    game.rootScene.removeChild(Apple4);
                    appleCollected['Apple4'] = true; 
                    updateScore();
                }
            }
            
            if (Girlbear.intersect(Apple5) || bear.intersect(Apple5)) {
                if (!appleCollected['Apple5']) {
                    game.rootScene.removeChild(Apple5);
                    appleCollected['Apple5'] = true; 
                    updateScore();
                }
            }
            
            if (Girlbear.intersect(Apple6) || bear.intersect(Apple6)) {
                if (!appleCollected['Apple6']) {
                    game.rootScene.removeChild(Apple6);
                    appleCollected['Apple6'] = true; 
                    updateScore();
                }
            }
            
            if (Girlbear.intersect(Apple7) || bear.intersect(Apple7)) {
                if (!appleCollected['Apple7']) {
                    game.rootScene.removeChild(Apple7);
                    appleCollected['Apple7'] = true; 
                    updateScore();
                }
            }
            
            if (Girlbear.intersect(Apple8) || bear.intersect(Apple8)) {
                if (!appleCollected['Apple8']) {
                    game.rootScene.removeChild(Apple8);
                    appleCollected['Apple8'] = true; 
                    updateScore();
                }
            }
            
            if (Girlbear.intersect(Apple9) || bear.intersect(Apple9)) {
                if (!appleCollected['Apple9']) {
                    game.rootScene.removeChild(Apple9);
                    appleCollected['Apple9'] = true; 
                    updateScore();
                }
            }
            
            if (Girlbear.intersect(Apple10) || bear.intersect(Apple10)) {
                if (!appleCollected['Apple10']) {
                    game.rootScene.removeChild(Apple10);
                    appleCollected['Apple10'] = true; 
                    updateScore();
                }
            }
            
            if (Girlbear.intersect(Apple11) || bear.intersect(Apple11)) {
                if (!appleCollected['Apple11']) {
                    game.rootScene.removeChild(Apple11);
                    appleCollected['Apple11'] = true; 
                    updateScore();
                }
            }
            
            if (Girlbear.intersect(Apple12) || bear.intersect(Apple12)) {
                if (!appleCollected['Apple12']) {
                    game.rootScene.removeChild(Apple12);
                    appleCollected['Apple12'] = true; 
                    updateScore();
                }
            }
            
            if (Girlbear.intersect(Apple13) || bear.intersect(Apple13)) {
                if (!appleCollected['Apple13']) {
                    game.rootScene.removeChild(Apple13);
                    appleCollected['Apple13'] = true; 
                    updateScore();
                }
            }
            
            if (Girlbear.intersect(Apple14) || bear.intersect(Apple14)) {
                if (!appleCollected['Apple14']) {
                    game.rootScene.removeChild(Apple14);
                    appleCollected['Apple14'] = true; 
                    updateScore();
                }
            }
            
            if (Girlbear.intersect(Apple15) || bear.intersect(Apple15)) {
                if (!appleCollected['Apple15']) {
                    game.rootScene.removeChild(Apple15);
                    appleCollected['Apple15'] = true; 
                    updateScore();
                }
            }
            
            
            
           
           
          }
          function GameOver(){
             if (bear.intersect(Enemy)||bear.intersect(Enemy2)||bear.intersect(Enemy3)||bear.intersect(Enemy4)||bear.intersect(Enemy5)||bear.intersect(Enemy6)||bear.intersect(Enemy7)||bear.intersect(Enemy8)||bear.intersect(Enemy9)||bear.intersect(Enemy10)) {
           
            gameOver();
        }

        if (Girlbear.intersect(Enemy)||Girlbear.intersect(Enemy2)||Girlbear.intersect(Enemy3)||Girlbear.intersect(Enemy4)||Girlbear.intersect(Enemy5)||Girlbear.intersect(Enemy6)||Girlbear.intersect(Enemy7)||Girlbear.intersect(Enemy8)||Girlbear.intersect(Enemy9)||Girlbear.intersect(Enemy10)) {
         
            gameOver();
          }
        }


		
		bear.addEventListener("enterframe",function(){
        handleBearMovement();
        score();
        GameOver();
        GameFinish();
        
        });
	
	
	
	Girlbear.addEventListener("enterframe",function(){
    handleGirlbearMovement();
	score();
    GameOver();
    GameFinish();
    console.log("Bear position - X:", Girlbear.x, "Y:", Girlbear.y);
		});


    Enemy.addEventListener("enterframe",function(){
        this.tl.moveTo(192, 97, 60).scaleTo(1, 1, 1)
        .moveTo(17, 97, 60).scaleTo(-1,1, 1);
                });

    Enemy2.addEventListener("enterframe",function(){
        this.tl.moveTo(195, 150, 50).scaleTo(1, 1, 1)
        .moveTo(190, 250, 50).scaleTo(-1,1, 1);
            });
    Enemy3.addEventListener("enterframe",function(){
        this.tl.moveTo(17, 335, 50).scaleTo(-1, 1, 1)
        .moveTo(162, 335, 50).scaleTo(1,1, 1);
                    });
    Enemy4.addEventListener("enterframe",function(){
        this.tl.moveTo(205, 445, 60).scaleTo(-1, 1, 1)
        .moveTo(205, 305, 50).scaleTo(1,1, 1);
                            });
    Enemy5.addEventListener("enterframe",function(){
        this.tl.moveTo(65, 495, 60).scaleTo(-1, 1, 1)
        .moveTo(255, 495, 60).scaleTo(1,1, 1);
            });
    Enemy6.addEventListener("enterframe",function(){
        this.tl.moveTo(300, 45, 65).scaleTo(-1, 1, 1)
        .moveTo(405, 45, 65).scaleTo(1,1, 1);
                    });
    Enemy7.addEventListener("enterframe",function(){
        this.tl.moveTo(355,270, 65).scaleTo(-1, 1, 1)
        .moveTo(350, 125, 65).scaleTo(1,1, 1);
                                            });
    Enemy8.addEventListener("enterframe",function(){
        this.tl.moveTo(545, 130, 65).scaleTo(-1, 1, 1)
        .moveTo(545,270, 65).scaleTo(1,1, 1);
          });
    Enemy9.addEventListener("enterframe",function(){
        this.tl.moveTo(305, 350, 65).scaleTo(-1, 1, 1)
        .moveTo(305,540, 65).scaleTo(1,1, 1);
           }); 
    Enemy10.addEventListener("enterframe",function(){
        this.tl.moveTo(400, 465, 65).scaleTo(-1, 1, 1)
        .moveTo(540,460, 65).scaleTo(1,1, 1);
               }); 
      
                                                                        
		};
        

    
        
	
game.start();
};
