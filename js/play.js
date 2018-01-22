var Play = {

    oldX : 0,
    oldY : 0,

    preload: function(){

    },

    create: function(){
        var background = game.add.image(0, 0, 'violet');
        background.width = game.width;
        background.height = game.height;
        var sprite = game.add.sprite(0,0,'black');
        sprite.anchor.setTo(0.5);
        sprite.inputEnabled = true;
        sprite.input.enableDrag(false);
        sprite.events.onDragStart.add(this.onDragStart,this);
        sprite.events.onDragStop.add(this.onDragStop,this);
    },

    update: function(){

    },

    onDragStart: function(sprite){
        this.oldX = sprite.position.x;
        this.oldY = sprite.position.y;
    },

    onDragStop: function(sprite){
        game.add.tween(sprite).to({x: this.oldX, y: this.oldY}, 500, 'Linear', true, 0);
    }
}