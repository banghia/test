var firstRunLandscape;

var Boot = {

    preload: function () {
        firstRunLandscape = game.scale.isGameLandscape;
        if(!firstRunLandscape){
            handleCorrect();
        }
        game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        game.scale.forceOrientation(false, true);
        game.scale.enterIncorrectOrientation.add(handleIncorrect);
        game.scale.leaveIncorrectOrientation.add(handleCorrect);
        game.load.image("background", "images/bg.jpg");
    },

    create: function () {
        game.state.start('Load');
    }

}



function handleIncorrect() {
    console.log('màn hình ngang');
    if (!game.device.desktop) {
        document.getElementById("wrapper").style.display = "block";
    }
}



function handleCorrect() {
    console.log('màn hình dọc');
    if (!game.device.desktop) {
        document.getElementById("wrapper").style.display = "none";
    }

}