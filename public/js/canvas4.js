//p5 background

var u;
var l;
var a;
var mods = [];
var x;
var y;
var count;

function setup4() {
    createCanvas( windowWidth, windowHeight );
    //u = int(width/15);
    u = 50;
    l = 15;
    var highCount = height / 45;
    var wideCount = width / 45;
    count = int( highCount * wideCount );

    var index = 0;
    for ( var xc = 0; xc < wideCount; xc++ ) {
        for ( var yc = 0; yc < highCount; yc++ ) {
            mods[ index++ ] = new Module( int( xc ) * u, int( yc ) * u );
        }
    }
}

function dispose4() {
    const canvas4 = document.querySelector( 'canvas.p5Canvas' );
    canvas4.remove();
}

function draw() {



    if ( mouseIsPressed ) {
        background( 0 );
        stroke( 255, 163, 163 );
    } else {
        background( 255, 163, 163 );
        stroke( 255 );
    }

    strokeWeight( 15 );

    translate( 20, 20 );

    for ( var i = 0; i <= count; i++ ) {
        mods[ i ].update();
        mods[ i ].draw2();
    }

}

function Module( _x, _y ) {
    this.x = _x;
    this.y = _y;
    this.a = 0;


}

Module.prototype.update = function () {
    if ( mouseIsPressed ) {
        this.a = 20 * ( atan2( mouseY - this.y, mouseX - this.x ) );
    } else {
        this.a = -atan2( mouseY - this.y, mouseX - this.x );
    }
};

Module.prototype.draw2 = function () {
    push();
    translate( this.x, this.y );
    rotate( this.a );
    var theta = Math.abs( this.a );
    //console.log( theta );
    if ( theta < 0.05 || ( PI / 2 - 0.1 < theta && theta < PI / 2 + 0.1 ) || ( PI - 0.05 < theta ) ) {
        stroke( 255, 20, 20 );

    }
    else {
        stroke( 255 );

    }
    line( -l, 0, l, 0 );
    pop();
};

function windowResized() {
    dispose4();
    setup4();
}