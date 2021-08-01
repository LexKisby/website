//p5 background

var u;
var l;
var a;
var mods = [];
var x;
var y;
var count;
var contact_hover = false;
var active = false;

function setup4() {
    createCanvas( windowWidth, windowHeight );
    const c = document.querySelectorAll( '.p5Canvas' );
    c.forEach( e => ( e.setAttribute( 'style', 'visibility: visible;' ) ) );
    active = true;
    u = int( width / 15 );
    u = 100;
    l = 40;
    var highCount = height / 80;
    var wideCount = width / 80;
    count = int( highCount * wideCount );

    var index = 0;
    for ( var xc = 0; xc < wideCount; xc++ ) {
        for ( var yc = 0; yc < highCount; yc++ ) {
            mods[ index++ ] = new Module( int( xc ) * u, int( yc ) * u );
        }
    }
}

function dispose4() {
    const c = document.querySelector( 'canvas.p5Canvas' );
    c.remove();
}

function draw() {



    if ( contact_hover ) {
        background( 0 );
        stroke( 255, 163, 163 );
    } else {
        background( 255 );
        stroke( 255 );
    }

    //strokeWeight(15);
    noStroke();
    translate( 20, 20 );

    for ( var i = 0; i <= count; i++ ) {
        mods[ i ].update();
        mods[ i ].draw1();
        mods[ i ].draw2();
    }

}

function Module( _x, _y ) {
    this.x = _x;
    this.y = _y;
    this.a = 0;


}

Module.prototype.update = function () {
    this.a = atan2( mouseY - this.y, mouseX - this.x );
};

Module.prototype.draw1 = function () {
    push();
    translate( this.x, this.y );
    fill( 255 );
    arc( 0, -10, l, l, 0.5, PI - 0.5 );
    arc( 0, 10, l, l, PI + 0.5, -0.5 );
    pop();
};


Module.prototype.draw2 = function () {
    push();
    translate( this.x, this.y );
    rotate( this.a );

    //ellipse(0, 0, l, l);
    fill( 0 );
    ellipse( 8, 0, l / 2, l / 2 );


    //line(-l,0,l,0);
    pop();
};


function windowResized() {
    if ( active ) {
        dispose4();
        setup4();
    }
}