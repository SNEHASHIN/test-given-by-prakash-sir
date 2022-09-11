const cat_result = document.getElementById( 'cats' );
const dog_result= document.getElementById('dogs');
const cat_btn = document.getElementById( 'btn' );
const dog_btn2=document.getElementById('btn2')


cat_btn.addEventListener( 'click', getRandomCat );

function getRandomCat() {
	fetch( 'https://aws.random.cat/meow' )
		.then( res => res.json() )
		.then( data => {
			 cat_result.innerHTML = `<img src="${data.file}" />`;
			 
		} );
    
	}
	
dog_btn2.addEventListener( 'click', getRandomdogs );

function getRandomdogs() {
		fetch( 'https://random.dog/woof.json' )
			.then( res => res.json() )
			.then( data => {
		if ( data.url.includes( '.mp4' ) ) {
			getRandomDog();
		} else {
			dog_result.innerHTML = `<img src="${data.url}" />`;
		}
	} );
}
		

