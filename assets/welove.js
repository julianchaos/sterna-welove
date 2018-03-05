"use strict";
var Welove = /** @class */ (function () {
    function Welove(container_id, interval) {
        if (interval === void 0) { interval = 300; }
        this.interval = interval;
        this.words = ['websites', 'visual id', 'illustration', 'creative jobs', 'mobile apps'];
        this.counter = 0;
        this.container = document.getElementById(container_id);
        this.insertCommomHTML();
        this._init();
    }
    Welove.prototype.insertCommomHTML = function () {
        this.container.innerHTML = "<h1>Hi, we are <span>Sterna</span>.<br />"
            + "We <span>love</span><br />"
            + "<span id='welove-animation'></span>";
    };
    Welove.prototype._init = function () {
        this._change();
        setInterval(this._change.bind(this), this.interval);
    };
    Welove.prototype._change = function () {
        var animator = this.container.querySelector('#welove-animation');
        animator.innerHTML = this.words[this._addCounter()];
    };
    Welove.prototype._addCounter = function () {
        if (this.counter === (this.words.length - 1)) {
            return this.counter = 0;
        }
        return ++this.counter;
    };
    return Welove;
}());
