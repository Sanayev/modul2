const add = document.querySelector( '.add-btn' );
const sort = document.querySelector( '.sekil' );
const list = document.querySelector( '.qutu3' );
let sorted = false;

function addListItem ( metn )
{
    const li = document.createElement( 'li' );
    li.classList.add( 'qutu4' )
    const inp = document.createElement( 'input' );
    inp.classList.add( 'siyahi' )
    inp.value = metn;

    const del = document.createElement( 'button' );
    del.classList.add( 'silme' );
    del.addEventListener( 'click', e =>
    {
        e.target.parentElement.remove();
    } );

    li.append( inp, del );
    list.append( li );
}

add?.addEventListener( 'click', e =>
{
    addListItem( '' );
} );

sort.addEventListener( 'click', e =>
{
    const arr = new Array();
    const items = document.querySelectorAll( '.qutu4' );
    items.forEach( li =>
    {
        arr.push( li.firstElementChild.value );
    } );
    arr.sort();
    if ( sorted )
    {
        arr.reverse();
        e.target.classList.remove( 'sekil2' );
        e.target.classList.add( 'sekil1' );
    } else
    {
        e.target.classList.remove( 'sekil1' );
        e.target.classList.add( 'sekil2' );
    }
    sorted = !sorted;
    list.innerHTML = '';
    arr.forEach( item =>
    {
        addListItem( item );
    } );
} );
