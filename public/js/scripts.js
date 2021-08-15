/////content management
async function init() {
    const node1 = document.querySelector( "#text1" );
    const node2 = document.querySelector( "#text2" );
    const node3 = document.querySelector( "#text3" );
    const node4 = document.querySelector( "#text4" );

    await sleep( 2000 );
    node1.innerText = "";
    await node1.type( 'welcome to my personal page' );
    await sleep( 2000 );
}

async function aboutme() {
    const node1 = document.querySelector( "#text1" );
    const node2 = document.querySelector( "#text2" );
    const node3 = document.querySelector( "#text3" );
    const node4 = document.querySelector( "#text4" );

    node1.clear();
    await sleep( 200 );
    node2.clear();
    await sleep( 200 );
    node3.clear();
    await sleep( 200 );
    node4.clear();

    await sleep( 1400 );

    node1.type( 'computer science graduate' );
    node2.type( 'interest in blockchain and finance' );
    node3.type( 'london based' );
    node4.type( ':P' );
}

async function skills() {
    const node1 = document.querySelector( "#text1" );
    const node2 = document.querySelector( "#text2" );
    const node3 = document.querySelector( "#text3" );
    const node4 = document.querySelector( "#text4" );

    node1.clear();
    await sleep( 200 );
    node2.clear();
    await sleep( 200 );
    node3.clear();
    await sleep( 200 );
    node4.clear();

    await sleep( 2000 );

    node1.type( 'experience with: \n______python: <=><=><=><=> \n__javascript: <=><=><=>\n_________c++: <=>< \n______golang: <=> \nflutter/dart: <=><=><=><= \n____solidity: <=><=>< \n' );
    node2.type( 'competence with algorithms and data structures' );
    node3.type( 'creative and curious' );
    node4.type( '*currently learning c++ and golang' );
}

async function other() {
    const node1 = document.querySelector( "#text1" );
    const node2 = document.querySelector( "#text2" );
    const node3 = document.querySelector( "#text3" );
    const node4 = document.querySelector( "#text4" );

    node1.clear();
    await sleep( 200 );
    node2.clear();
    await sleep( 200 );
    node3.clear();
    await sleep( 200 );
    node4.clear();

    await sleep( 2000 );

    node1.type( 'blender is a hobby i use to make various things, like motion graphics. can be seen on instagram at "seegeewip"' );
    node2.type( 'also writing a book in my spare time' );
}

async function contact() {
    const node1 = document.querySelector( "#text1" );
    const node2 = document.querySelector( "#text2" );
    const node3 = document.querySelector( "#text3" );
    const node4 = document.querySelector( "#text4" );

    node1.clear();
    await sleep( 200 );
    node2.clear();
    await sleep( 200 );
    node3.clear();
    await sleep( 200 );
    node4.clear();

    await sleep( 2000 );

    node1.type( 'you can reach me at: ' );
    node2.type( '-kisbyalexander@gmail.com' );
    node4.type( 'will try to respond asap' );
}

const sleep = time => new Promise( resolve => setTimeout( resolve, time ) );

class TypeAsync extends HTMLSpanElement {
    get typeInterval() {
        const randomMs = 100 * Math.random();
        return randomMs < 50 ? 10 : randomMs;
    }
    async clear() {
        const len = this.innerText.length;
        const k = len / 15;
        for ( let i = 0; i < len; i++ ) {

            this.innerText = this.innerText.slice( 0, this.innerText.length - 1 );
            await sleep( this.typeInterval / k );
        }
    }

    async type( text ) {
        for ( let character of text ) {
            this.innerText += character;
            await sleep( this.typeInterval );
        }
    }

    async delete( text ) {
        for ( let character of text ) {
            this.innerText = this.text.slice( 0, this.text.length - 1 );
            await sleep( this.typeInterval );
        }
    }
}

customElements.define( 'type-async', TypeAsync, { extends: 'span' } );
init();


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




