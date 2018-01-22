var game, gameRatio, BASE_WIDTH=1920, BASE_HEIGHT = 1080;

window.onload = function () {
    if( isMobile.any() ){
        if(window.innerWidth>window.innerHeight){
            console.log('Màn hình ngang');
            init();
        }else{
            console.log('Màn hình dọc');
            window.addEventListener("orientationchange", function() {
                console.log(window.innerWidth);      
                setTimeout(function(){
                    init();
                },300);
            });
        }
    }else{
        init();
    }
    // gameRatio = window.innerWidth/window.innerHeight;

    // game = new Phaser.Game(Math.ceil(1024 * gameRatio), 1024, Phaser.AUTO, 'wrapper');

    // game.state.add('Boot', Boot, true);
    // game.state.add('Load', Load, false);
    // game.state.add('Play', Play, false);
}

function init(){
    gameRatio = window.innerWidth/window.innerHeight;
    game = new Phaser.Game(window.innerWidth * window.devicePixelRatio,
         window.innerHeight*window.devicePixelRatio, Phaser.AUTO, 'wrapper');
    game.state.add('Boot', Boot, true);
    game.state.add('Load', Load, false);
    game.state.add('Play', Play, false);
}

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};