const books = document.querySelector('.books');//books Container
const btnMenu = document.querySelector('label[for="btnMenu"]');
const menu = document.querySelector('.menu');
const btnShowForm = document.getElementById('addNew');//Btn show form
const btnCloseForm = document.querySelector('.btn-close');//Btn close Form
const formAddBook = document.querySelector('.addBook');//Form
const addBook = document.getElementById('addBook');
const deleteABook = document.getElementById('deleteOne');
const deleteAllBooks = document.getElementById('deleteAll');


let book = 'images/book.jpg';
let myLibrary = [
    {title:'Around the world in 80 days', author:'Jules Verne', pages:237, read:true, url:'images/AroundTheWorld.jpg'},
    {title:'One Hundred Years of Solitude', author:'Gabriel Garcia Marquez', pages:417, read:true, url:'images/CienAñosDeSoledad.JPG'},
    {title:'Le Petit Prince',author:'Antoine de Saint-Exupéry',pages:134, read:true,url:'images/LePetitPrince.jpg'}
]

function Books(title,author,pages,read,url){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.url=url
}

function addBookToLibrary(obj) {
    myLibrary.push(obj)
}

function createBookContainer(obj){
    
    let book = document.createElement('div');//main container of book
    book.classList.add('book');
    
    //create btn delete
    let btnDelete = document.createElement('div');
    btnDelete.innerHTML='<i class="far fa-trash-alt"></i>';
    btnDelete.classList.add('btn-close');
    btnDelete.classList.add('activeBtn');
    btnDelete.classList.add('deleteAbook');

    //create container of img and img
    let containerImg = document.createElement('div');
    containerImg.classList.add('container-img')
        
    let imgOfTitle = document.createElement('img');
    imgOfTitle.src = obj.url;
    containerImg.appendChild(imgOfTitle);
    
    //create container of title and title
    let containerTitle = document.createElement('div');
    containerTitle.classList.add('container-title');

    let title1 = document.createElement('div');
    title1.classList.add('title');
    title1.innerHTML='Title:';
    
    let titleOfBook = document.createElement('div');
    titleOfBook.classList.add('titleOfBook');
    titleOfBook.innerHTML = obj.title;

    containerTitle.appendChild(title1);
    containerTitle.appendChild(titleOfBook);

    //create container of author and author
    let containerAuthor = document.createElement('div');
    containerAuthor.classList.add('container-author');

    let title2 = document.createElement('div');
    title2.classList.add('title');
    title2.innerHTML='Author:';
    
    let authorOfBook = document.createElement('div');
    authorOfBook.classList.add('authorOfBook');
    authorOfBook.innerHTML = obj.author;

    containerAuthor.appendChild(title2);
    containerAuthor.appendChild(authorOfBook);

    //create container of Npages an Npages
    let containerNPages = document.createElement('div');
    containerNPages.classList.add('containerNPages');

    let title3 = document.createElement('div');
    title3.classList.add('title');
    title3.innerHTML='N° Pages:';

    let pagesOfBook = document.createElement('div');
    pagesOfBook.classList.add('pagesOfBook"');
    pagesOfBook.innerHTML = obj.pages;

    containerNPages.appendChild(title3);
    containerNPages.appendChild(pagesOfBook);
    

    //create btn-container and btn
    let containerBtn = document.createElement('div');
    containerBtn.classList.add('containerBtn');

    let btn = document.createElement('button');
    btn.classList.add('readBtn');
    btn.innerHTML = (obj.read === true?'Yes':'No');

    containerBtn.appendChild(btn)

    //add all in book
    book.appendChild(btnDelete);
    book.appendChild(containerImg);
    book.appendChild(containerTitle);
    book.appendChild(containerAuthor);
    book.appendChild(containerNPages);
    book.appendChild(containerBtn);

    books.appendChild(book)

}
function showMenu(){
    menu.classList.toggle('transition')
}

function showForm(){
    formAddBook.classList.remove('active');
    menu.classList.remove('transition')
}
function closeForm(){
    formAddBook.classList.add('active');
}
function addNewBook(){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let imgOfBook = document.getElementById('imgOfBook').value;
    let btnRead = document.getElementById('btnRead').value==='Yes'?true:false;

    if(!document.getElementById('imgOfBook').value){imgOfBook=book}

    let newBook = new Books(title,author,pages,btnRead,imgOfBook);

    addBookToLibrary(newBook);
    formAddBook.classList.add('active');
    books.innerHTML='';
    myLibrary.forEach(createBookContainer);

    document.getElementById('title').value='';
    document.getElementById('author').value='';
    document.getElementById('pages').value='';
    document.getElementById('imgOfBook').value='';
    document.getElementById('btnRead').value='';
}

function showBtnDelete(){
    let btnsDelete = document.querySelectorAll('.deleteAbook');
    let storedBooks = document.querySelectorAll('.book');

   
    btnsDelete.forEach(btn=>btn.classList.toggle('activeBtn'))
    btnsDelete.forEach(btn=>btn.addEventListener('click',function(){
        books.removeChild(this.parentNode);
    }));
}

function deleteAll(){
    let storedBooks = document.querySelectorAll('.book');

    storedBooks.forEach(book =>books.removeChild(book))
}

myLibrary.forEach(createBookContainer);
btnMenu.addEventListener('click',showMenu)
btnShowForm.addEventListener('click',showForm);
btnCloseForm.addEventListener('click',closeForm);
addBook.addEventListener('click',addNewBook);
deleteABook.addEventListener('click',showBtnDelete);
deleteAllBooks.addEventListener('click',deleteAll);
const readBtn = document.querySelectorAll('.readBtn');
readBtn.forEach(btn=>btn.addEventListener('click',function(){
    this.innerText==='Yes'?this.innerText='No':this.innerText='Yes'
}))