let comments = document.getElementById('book_comments');

function bookCommentsTemplateHtml(commentUsername, commentContent) {
    return `
        <div class="comment">
            <span>[${commentUsername}]</span>
            <span>${commentContent}</span>
        </div>
    `;
}

function checkLiked(liked, bookId) {
    let like_img_id = "like_btn_img_" + bookId;
    let likeBtnImg = "";

    if (liked == true){
        likeBtnImg = '<img id="'+like_img_id+'" class="like_btn_img" src="./assets/icons/heart_empty.png" alt="Like button">';
    }else {
        likeBtnImg = '<img id="'+like_img_id+'" class="like_btn_img" src="./assets/icons/heart_filled.png" alt="Like button">';
    }
    
    return likeBtnImg;
}

function getBookTemplate(title, author, likes, liked, price, publishedYear, genre, comments, bookId) {
    let commentsHTML = "";
    
    likeBtnImg = checkLiked(liked, bookId);
    
    if (comments.length != 0) {
        for (let index = 0; index < comments.length; index++) {
            let commentUsername = comments[index].name;
            let commentContent = comments[index].comment;
            
            commentsHTML += bookCommentsTemplateHtml(commentUsername, commentContent);
        }
    }else {
        commentsHTML += `
        <div class="comment">
            <span>Keine Kommentare Vorhanden!</span>
        </div>
        `;
    }

    return `
        <div class="book" id="${bookId}">
            <section id="book_title">
                <h3>${title}</h3>
            </section>

            <section id="book_img">
                <img src="./assets/img/book.png" alt="Book img">
            </section>

            <section id="book_info_section">
                <div id="price_likes">
                    <p>${price} €</p>
                    <p><span id="likes_${bookId}">${likes}</span> <button id="like_btn" onclick="likeToggle(${bookId})">${likeBtnImg}</button></p>
                </div>
                <div id="book_infos">
                    <table>
                        <tr>
                            <td>Author:</td>
                            <td id="author">${author}</td>
                        </tr>
                        <tr>
                            <td>Publish year:</td>
                            <td id="publish_year">${publishedYear}</td>
                        </tr>
                        <tr>
                            <td>Genre:</td>
                            <td id="genre">${genre}</td>
                        </tr>
                    </table>
                </div>
            </section>

            <section id="book_comment_section">
                <h4>Comments</h4>
                <div class="book_comments" id="book_comments_${bookId}">

                ${commentsHTML}
                    
                </div>
                <div id="comment_form">
                    <input id="comment_input_${bookId}" class="comment_input" type="text" placeholder="Schreibe einen Kommentar...">
                    <button id="comment_button" onclick="addNewComment(${bookId})"><img src="./assets/icons/send.png" alt=""></button>
                </div>

                </section>

            </div>
    `;
}