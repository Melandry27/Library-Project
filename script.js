let booksStorage = [];

function Books(author, description, page) {
	this.author = author;
	this.description = description;
	this.page = page;
}

const displayForm = () => {
	document.getElementById("formBooks").style.display = "block";
};

const getForm = () => {
	let author = document.getElementById("fauthor").value;
	let description = document.getElementById("fdescription").value;
	let page = document.getElementById("fpage").value;

	let newBooks = new Books(author, description, page);
	booksStorage.push(newBooks);

	console.log(newBooks);

	document.getElementById("formBooks").style.display = "none";
};

const displayBooks = () => {
	if (booksStorage.length > 0) {
		for (let i = 0; booksStorage.length > i; i++) {
			const container = document.getElementById("display-books");
			const div = document.createElement("div");
			container.appendChild(div).classList.add("books");
			let getBooks = document.getElementsByClassName("books");

			const div2 = document.createElement("div");
			const div3 = document.createElement("div");
			const div4 = document.createElement("div");
			const div5 = document.createElement("div");
			const div6 = document.createElement("div");
			const div7 = document.createElement("div");

			let author = getBooks[i].appendChild(div2).classList.add("author");

			let description = getBooks[i]
				.appendChild(div3)
				.classList.add("description");

			let page = getBooks[i].appendChild(div4).classList.add("page");

			let getAuthor = document.getElementsByClassName("author");
			let getDescription = document.getElementsByClassName("description");
			let getPage = document.getElementsByClassName("page");

			getAuthor[i].innerHTML = booksStorage[i].author;
			getDescription[i].innerHTML = booksStorage[i].description;
			getPage[i].innerHTML = booksStorage[i].page;
		}
	}
};
