let booksRef = document.getElementById('books');


const unLiked = "./assets/icons/heart_empty.png";
const liked = "./assets/icons/heart_filled.png";


function init() {
    renderBooks();
}

function renderBooks(paams) {
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

function addNewComment(bookId) {
    let commentInput = document.getElementById('comment_input_'+ bookId);
    let bookComments = document.getElementById('book_comments_' + bookId);

    bookComments.innerHTML += bookCommentsTemplateHtml("localUser", commentInput.value);
    commentInput.value = "";
}