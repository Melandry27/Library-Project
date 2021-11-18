let booksStorage = [];

function Books(author, description, page) {
	this.author = author;
	this.description = description;
	this.page = page;
}

const clearBooks = () => {
	if (booksStorage.length > 0) {
		const books = document.getElementsByClassName("books");
		while (books.length > 0) {
			books[0].parentNode.removeChild(books[0]);
		}
	}
};

const displayForm = () => {
	document.getElementById("formBooks").style.display = "block";
};

const displayBooks = () => {
	clearBooks();
	for (let i = 0; booksStorage.length > i; i++) {
		const container = document.getElementById("display-books");
		const div = document.createElement("div");
		container.appendChild(div).classList.add("books");
		let getBooks = document.getElementsByClassName("books");

		const div2 = document.createElement("div");
		const div3 = document.createElement("div");
		const div4 = document.createElement("div");
		const button = document.createElement("button");

		getBooks[i].appendChild(div2).classList.add("author");
		getBooks[i].appendChild(div3).classList.add("description");
		getBooks[i].appendChild(div4).classList.add("page");
		getBooks[i].appendChild(button).classList.add("delete-button");

		const getAuthor = document.getElementsByClassName("author");
		const getDescription = document.getElementsByClassName("description");
		const getPage = document.getElementsByClassName("page");
		const getDeleteButton = document.getElementsByClassName("delete-button");

		getAuthor[i].innerHTML = booksStorage[i].author;
		getDescription[i].innerHTML = booksStorage[i].description;
		getPage[i].innerHTML = booksStorage[i].page;
		getDeleteButton[i].innerHTML = "Delete this books";

		getDeleteButton[i].addEventListener("click", function () {
			booksStorage.splice(i, 1);
			displayBooks();
			if (booksStorage.length === 0) {
				location.reload();
			}
		});
	}
};

const getForm = () => {
	let author = document.getElementById("fauthor").value;
	let description = document.getElementById("fdescription").value;
	let page = document.getElementById("fpage").value;

	let newBooks = new Books(author, description, page);
	booksStorage.push(newBooks);

	displayBooks();
	document.getElementById("formBooks").style.display = "none";
};
