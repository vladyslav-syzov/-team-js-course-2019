window.addEventListener('load', function(){
    new Game();
}, false);

const SETTINGS = {
    size: 10
}
function Game(){
    this.$el = document.getElementById('game');    
}