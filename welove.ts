class Welove {
    private container: HTMLElement;
    private words: string[] = ['websites', 'visual id', 'illustration', 'creative jobs', 'mobile apps'];
    private counter: number = 0;

    constructor(container_id: string, private interval: number = 300) {
        this.container = document.getElementById(container_id);
        this.insertCommomHTML();
        this._init();
    }

    private insertCommomHTML() {
        this.container.innerHTML = "<h1>Hi, we are <span>Sterna</span>.<br />"
            + "We <span>love</span><br />"
            + "<span id='welove-animation'></span>";
    }
    private _init() {
        this._change();
        setInterval(this._change.bind(this), this.interval);
    }
    private _change() {
        var animator = this.container.querySelector('#welove-animation');
        animator.innerHTML = this.words[this._addCounter()];
    }
    private _addCounter() {
        if(this.counter === (this.words.length-1)) {
            return this.counter = 0;
        }
        return ++this.counter;
    }
} 