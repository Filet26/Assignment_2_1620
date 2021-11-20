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
		email: "greenlant,ern@watchtower.com",  
	}
	
]

//index page

//function #1 cleanUpIndex
function cleanUpIndex() {
	const cards = document.querySelectorAll('.contact')


	for (const card of cards)
		card.remove()
}
//function #2 createSingleIndex
function createSingleIndex(person) {
	const name = person.name
	return `<a href="page3.html"><div class="contact"><p>${name}</p></div></a>`
}

//function #3 renderIndex 
function renderIndex(contactList) {
	const main = document.querySelector(".main")

	for (const contact of contactList) {
		const card = createSingleIndex(contact)	
		main.insertAdjacentHTML("beforeend", card)
	}
}


//View Page

//function #4 cleanUpView
function cleanUpView(){
	const cards = document.querySelectorAll('.main > div')


	for (const card of cards)
		card.remove()
}
