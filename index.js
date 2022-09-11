const cat_result = document.getElementById( 'cats' );
const cat_btn = document.getElementById( 'btn' );


cat_btn.addEventListener( 'click', getRandomCat );

function getRandomCat() {
	fetch( 'https://aws.random.cat/meow' )
		.then( res => res.json() )
		.then( data => {
			 cat_result.innerHTML = `<img src="${data.file}" />`;
			 
		} );
    
	}
	
