barba.init();




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

