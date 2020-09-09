
function cardController(){
    this.test = "hello";
}
angular.module('myApp').
    component('cardItem', {
        templateUrl: 'components/card/card.html',
        controller: cardController,
        bindings: {
            drink: '=',
        }
});