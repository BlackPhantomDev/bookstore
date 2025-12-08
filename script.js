let booksRef = document.getElementById('books');

// configured variables for contition of like btn
const unLiked = "./assets/icons/heart_empty.png";
const liked = "./assets/icons/heart_filled.png";


function init() {
    renderBooks();
}

// renders all books from db.js
function renderBooks() {
    for (let index = 0; index < books.length; index++) {
        let book = books[index];
            
        booksRef.innerHTML += getBookTemplate(
            book.name, 
            book.author, 
            book.likes, 
            book.liked, 
            book.price.toFixed(2), 
            book.publishedYear, 
            book.genre, 
            book.comments, 
            index
        );

    }
}

// changes the condition of the like btn if clicked
function likeToggle(bookId) {
    let likeBtn = document.getElementById('like_btn_img_'+bookId);    
    let likesRef = document.getElementById('likes_'+bookId);
    let likes = parseInt(likesRef.innerHTML);
    
    if (likeBtn.getAttribute("src") == unLiked) {
        likeBtn.setAttribute("src", liked);
        likesRef.innerHTML = likes + 1;
        
    }else {
        likeBtn.setAttribute("src", unLiked);
        likesRef.innerHTML = likes - 1;
        
    }
}

// add a new comment to comment box
function addNewComment(bookId) {
    let commentInput = document.getElementById('comment_input_'+ bookId);
    let bookComments = document.getElementById('book_comments_' + bookId);
    
    if (commentInput.value == null || commentInput.value == "") {
        return;
    }else {
        if (bookComments.innerText != 'Keine Kommentare Vorhanden!'){
            bookComments.innerHTML += bookCommentsTemplateHtml("localUser", commentInput.value);
            commentInput.value = "";
        } else {
            bookComments.innerHTML = "";
            bookComments.innerHTML += bookCommentsTemplateHtml("localUser", commentInput.value);
            commentInput.value = "";
        }
    }

}