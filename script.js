const contactList = [  
	{ 
		name: "Oliver Queen", 
		phone: "778-555-1234", 
		address: "101 Main St, Star City, USA",    
		email: "greenarrow@watchtower.com",  
	},   
	{    
		name: "Jessica Cruz",    
		phone: "123-555-5555",    
		address: "Portland Oregon",    
		email: "greenlantern@watchtower.com",  
	}
]

//index page

//function #1 cleanUpIndex
function cleanUpIndex() {
	const cards = document.querySelectorAll('.contact')


	for (let i = 0; i < cards.length; i++) {
		const card = cards[i];
		card.remove()
	}
}
//function #2 createSingleIndex
function createSingleIndex(person) {
	const name = person.name
	return `<a href="page3.html"><div class="contact"><p>${name}</p></div></a>`
}

function renderIndex(contact_list) {
	const main = document.querySelector(".main")

	for (const contact of contact_list) {
		
	}
}


// function cleanUpView() {
// 	let view_item = document.querySelector('.main')
// 	view_item.remove()
// }

// function cleanUpCreate() {
// 	let Create_item = document.querySelector('.main')
// 	Create_item.remove()
}
