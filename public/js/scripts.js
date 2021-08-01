barba.init();

function setup() {
    dispose4();
}



//Kursor
var Kursor_type = 'kursor--3';
var Kursor = new kursor( {
    type: 3,
    removeDefaultCursor: true,
    color: 'rgb(30,150,30)',
} );

function changeCursor( num ) {
    const cursor_element = document.querySelector( '.kursor' );
    cursor_element.classList.remove( Kursor_type );
    Kursor_type = 'kursor--' + num.toString();
    cursor_element.classList.add( Kursor_type );
}

function killCursor() {
    const cursor_element = document.querySelector( '.kursor' );
    cursor_element.remove();
    const cursor_element2 = document.querySelector( '.kursorChild' );
    cursor_element2.remove();
}

function makeCursor( type ) {
    Kursor = new kursor( {
        type: type,
        removeDefaultCursor: true,
        color: 'rgb(30, 150, 30)',
    } );
}


//////////////////////////////
var links = document.querySelectorAll( 'a[href]' );
var cbk = function ( e ) {
    if ( e.currentTarget.href === window.location.href ) {
        e.preventDefault();
        e.stopPropagation();
    }
};
for ( var i = 0; i < links.length; i++ ) {
    links[ i ].addEventListener( 'click', cbk );
}


const body = document.querySelector( 'body' );

function moveTo( page ) {
    //basic scroll to page
    let height = window.innerHeight;
    console.log( 'scrolling by: ', page * height );
}

const observer = new IntersectionObserver( entries => {
    let counter = 0;
    entries.forEach( entry => {
        const neuSquare = entry.target.querySelector( '.neuOut' );
        console.log( 'checking', counter );
        counter++;
        if ( entry.isIntersecting ) {
            console.log( 'found' );
            neuSquare.classList.add( 'neuOut-transition' );
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        neuSquare.classList.remove( 'newOut-transition' );
        console.log( 'gone' );
    } );
} );

//contact page
