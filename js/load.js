var Load = {

    preload: function(){
        game.load.image('progress','/images/progress.jpg');
        game.load.image('fox','/images/fox.png');
        game.load.image('play','/images/play.png');
    },

    create: function(){
        //set background
        var background = game.add.image(0, 0, 'background');
        console.log(background._frame);
        background.width = game.width;
        background.height = game.height;
        var progressBar = game.add.sprite(game.world.centerX-200,game.world.centerY+150,'progress');
        //Load
        game.load.image('black','/images/black.jpg');
        game.load.image('blue','/images/blue.jpg');
        game.load.image('green','/images/green.jpg');
        game.load.image('grey','/images/grey.jpg');
        game.load.image('orange','/images/orange.jpg');
        game.load.image('violet','/images/violet.jpg');
        game.load.image('white','/images/white.jpg');
        game.load.image('yellow','/images/yellow.jpg');
        var fox = game.add.sprite(780*scaleX(),345*scaleY(),'fox');
        fox.anchor.set(0.5);
        fox.scale.setTo(scaleX(),scaleY());
        var play = game.add.sprite(939*scaleX(),735*scaleY(),'play');
        play.anchor.set(0.5);
        play.scale.setTo(scaleX(),scaleY());
        game.load.onLoadComplete.add(this.loadComplete, this);
        game.load.setPreloadSprite(progressBar);
        setTimeout(function(){
            game.load.start();
        },1000);
    },

    loadComplete: function(){
        // setTimeout(function(){
        //     game.state.start('Play');;
        // },500);
    },

    render: function(){
        game.debug.cameraInfo(game.camera, 32, 32);
    }
}

function scaleX(){
    return game.world.width/BASE_WIDTH;
}

function scaleY(){
    return game.world.height/BASE_HEIGHT;
}