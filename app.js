function bookSearch() {
    var search = document.getElementById('search-box').value
    document.getElementById('results').innerHTML = ""
    const fictionCards = document.getElementById('fiction-cards');
        while(fictionCards.children && fictionCards.children.length) {
            fictionCards.removeChild(fictionCards.children[0]);
        }
    document.getElementById('type').classList = "hide-cards";
     $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
        dataType: "json",

        success: function(data) {
            for (i = 0; i< data.items.length; i++){
                const extractThumbnail = ({ imageLinks }) => {
                    const DEFAULT_THUMBNAIL = "https://i.imgur.com/8UdKNS4.jpeg";
                    if (!imageLinks || !imageLinks.thumbnail) {
                      return DEFAULT_THUMBNAIL;
                    }
                    return imageLinks.thumbnail.replace("http://", "https://");
                  };
                const card = document.createElement('div');
                card.classList="card-div";
                document.getElementById('top-today').classList = 'hide-cards';
                //card content
                const content = `
                <div class="card d-flex" style="margin:50px; width: 18rem;">
                <img class="card-img-top align-items-center mx-auto thumbnail imgs" src="${extractThumbnail(data.items[i].volumeInfo)}" style="width:170px; height:230px;" alt="">
                <div class="card-body">
                    <h5 class="card-title" style="font-weight:bold">${data.items[i].volumeInfo.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div class="d-flex">
                    <a href="#" class="btn btn-dark mx-2"  style="height:2.5rem;">Add</a>
                    <a href="${data.items[i].saleInfo.buyLink}"class="btn btn-dark" style="height:2.5rem;">Buy</a>
                    </div>
                </div> `;
                results.innerHTML += content;
            }
        }, 

        type: 'GET'
    });
}

//display top books cards
function firstTopBook(){
    //first card
    firstTitle = document.getElementById('first-title');
    firstImg = document.getElementById('first-img');

    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=RomeoandJuliet",
        dataType: "json",

        success: function(data) {
            for (i = 0; i< data.items.length; i++){
                firstTitle.innerHTML = data.items[3].volumeInfo.title; 
                firstImg.src = data.items[3].volumeInfo.imageLinks.thumbnail;
        }
        }

    })

}
firstTopBook();

function secondTopBook(){
    //scd card
    secondTitle = document.getElementById('second-title');
    secondImg = document.getElementById('second-img')

    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=Crossroads",
        dataType: "json",
        success: function(data) {
            for (i = 0; i< data.items.length; i++){
                secondTitle.innerHTML = data.items[3].volumeInfo.title; 
                secondImg.src = data.items[3].volumeInfo.imageLinks.thumbnail;
    }
    }

})
}
secondTopBook();

function thirdTopBook(){
    //third card 
    thirdTitle = document.getElementById('third-title');
    thirdImg = document.getElementById('third-img');

    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=nicholassparks",
        dataType: "json",
        success: function(data) {
            for (i = 0; i< data.items.length; i++){
                thirdTitle.innerHTML = data.items[0].volumeInfo.title; 
                thirdImg.src = data.items[0].volumeInfo.imageLinks.thumbnail;
    }
    }

})
}
thirdTopBook();
//search btn & enter button
document.getElementById('search').addEventListener('click', bookSearch,false);
document.getElementById('search-box').addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        bookSearch();
        event.preventDefault();
    }
});



//fiction books
function fictionBooks(){
        const results = document.getElementById('results');
        while(results.children && results.children.length){
            results.removeChild(results.children[0]);
        }
        const fictionCards = document.getElementById('fiction-cards');
        while(fictionCards.children && fictionCards.children.length) {
            fictionCards.removeChild(fictionCards.children[0]);
        }
        $.ajax({
            url: "https://www.googleapis.com/books/v1/volumes?q=subject:fiction",
            dataType: "json",
    
            success: function(data) {
                for (i = 0; i< 20; i++){
                    const card = document.createElement('div');
                    const fictionCards = document.getElementById('fiction-cards');
                    fictionCards.appendChild(card);
                    document.getElementById('type').classList.remove('hide-cards');
                    document.getElementById('top-today').classList = ('hide-cards');
                    document.getElementById('type').innerHTML = "Fiction";
                    //card content
                    const content = `
                    <div class="card my-3" style="width: 18rem;">
                    <img class="mx-auto card-img-top book-cover imgs thumbnail" src="${data.items[i].volumeInfo.imageLinks.thumbnail}" style="width:170px; height:230px;" alt="">
                    <div class="card-body" id="results">
                        <h5 class="card-title" style="font-weight:bold">${data.items[i].volumeInfo.title}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-flex">
                        <a href="#" class="btn mx-2 btn-dark"  style="height:2.5rem;">Add</a>
                        <a href="#" class="btn btn-dark" style="height:2.5rem;">Read</a>
                        </div>
                    </div> `;
                    card.innerHTML += content;
                }
            }
    
        })
    
}

document.getElementById('fiction').addEventListener('click', fictionBooks);


// peotry 
function poetryBooks(){
    document.getElementById('top-today').classList = ('hide-cards');
    document.getElementById('type').innerHTML = "Peotry";
    const fictionCards = document.getElementById('fiction-cards');
    while(fictionCards.children && fictionCards.children.length) {
        fictionCards.removeChild(fictionCards.children[0]);
    }
    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=subject:poetry",
        dataType: "json",

        success: function(data) {
            for (i = 0; i< 20; i++){
                const card = document.createElement('div');
                const fictionCards = document.getElementById('fiction-cards');
                fictionCards.appendChild(card);
                document.getElementById('type').classList.remove('hide-cards');
                //card content
                const content = `
                    <div class="card my-3" style="width: 18rem;">
                    <img class="mx-auto card-img-top book-cover thumbnail imgs" src="${data.items[i].volumeInfo.imageLinks.thumbnail}" style="width:170px; height:230px;" alt="">
                    <div class="card-body" id="results">
                        <h5 class="card-title" style="font-weight:bold">${data.items[i].volumeInfo.title}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-flex">
                        <a href="#" class="btn mx-auto btn-dark"  style="height:2.5rem;">Add</a>
                        <a href="#" class="btn mx-auto btn-dark" style="height:2.5rem;">Read</a>
                        </div>
                    </div> `;
                    card.innerHTML += content;
            }
        }

    })

}
document.getElementById('poetry').addEventListener('click', poetryBooks,false);


//fantasy 

function fantasyBooks(){
    document.getElementById('top-today').classList = ('hide-cards');
    document.getElementById('type').innerHTML = "Fantasy";
    const fictionCards = document.getElementById('fiction-cards');
    while(fictionCards.children && fictionCards.children.length) {
        fictionCards.removeChild(fictionCards.children[0]);
    }
    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=subject:fantasy",
        dataType: "json",

        success: function(data) {
            for (i = 0; i< 20; i++){
                const card = document.createElement('div');
                const fictionCards = document.getElementById('fiction-cards');
                fictionCards.appendChild(card);
                document.getElementById('type').classList.remove('hide-cards');
                //card content
                const content = `
                    <div class="card my-3" style="width: 18rem;">
                    <img class="mx-auto thumbnail card-img-top book-cover imgs" src="${data.items[i].volumeInfo.imageLinks.thumbnail}" style="width:170px; height:230px;" alt="">
                    <div class="card-body" id="results">
                        <h5 class="card-title" style="font-weight:bold">${data.items[i].volumeInfo.title}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-flex">
                        <a href="#" class="btn mx-auto btn-dark"  style="height:2.5rem;">Add</a>
                        <a href="#" class="btn mx-auto btn-dark" style="height:2.5rem;">Read</a>
                        </div>
                    </div> `;
                    card.innerHTML += content;
            }
        }

    })

}
document.getElementById('fantasy').addEventListener('click', fantasyBooks,false);


//romance
function romanceBooks(){
    document.getElementById('top-today').classList = ('hide-cards');
    document.getElementById('type').innerHTML = "Romance";
    const fictionCards = document.getElementById('fiction-cards');
    while(fictionCards.children && fictionCards.children.length) {
        fictionCards.removeChild(fictionCards.children[0]);
    }
    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=subject:romance",
        dataType: "json",

        success: function(data) {
            for (i = 0; i< 20; i++){
                const extractThumbnail = ({ imageLinks }) => {
                    const DEFAULT_THUMBNAIL = "https://i.imgur.com/8UdKNS4.jpeg";
                    if (!imageLinks || !imageLinks.thumbnail) {
                      return DEFAULT_THUMBNAIL;
                    }
                    return imageLinks.thumbnail.replace("http://", "https://");
                };
                const card = document.createElement('div');
                const fictionCards = document.getElementById('fiction-cards');
                fictionCards.appendChild(card);
                document.getElementById('type').classList.remove('hide-cards');
                //card content
                const content = `
                    <div class="card my-3" style="width: 18rem;">
                    <img class="thumbnail mx-auto card-img-top book-cover imgs" src="${extractThumbnail(data.items[i].volumeInfo)}" style="width:170px; height:230px;" alt="">
                    <div class="card-body" id="results">
                        <h5 class="card-title" style="font-weight:bold">${data.items[i].volumeInfo.title}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-flex">
                        <a href="#" class="btn mx-auto btn-dark"  style="height:2.5rem;">Add</a>
                        <a href="#" class="btn mx-auto btn-dark" style="height:2.5rem;">Read</a>
                        </div>
                    </div> `;
                    card.innerHTML += content;
            }
        }

    })

}
document.getElementById('romance').addEventListener('click', romanceBooks,false);

//Food

function foodBooks(){
    document.getElementById('top-today').classList = ('hide-cards');
    document.getElementById('type').innerHTML = "Food";
    const fictionCards = document.getElementById('fiction-cards');
    while(fictionCards.children && fictionCards.children.length) {
        fictionCards.removeChild(fictionCards.children[0]);
    }
    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=subject:food",
        dataType: "json",

        success: function(data) {
            for (i = 0; i< 20; i++){
                const extractThumbnail = ({ imageLinks }) => {
                    const DEFAULT_THUMBNAIL = "https://i.imgur.com/8UdKNS4.jpeg";
                    if (!imageLinks || !imageLinks.thumbnail) {
                      return DEFAULT_THUMBNAIL;
                    }
                    return imageLinks.thumbnail.replace("http://", "https://");
                };
                // function isSet(listPrice,amount){

                //     if(typeof listPrice, amount != 'undefined'){
                
                //         return 0;
                
                //     }
                // } 
                const card = document.createElement('div');
                const fictionCards = document.getElementById('fiction-cards');
                fictionCards.appendChild(card);
                document.getElementById('type').classList.remove('hide-cards');
                //card content
                const content = `
                <div class="card my-3" style="width: 18rem;">
                <img class="thumbnail mx-auto card-img-top book-cover imgs" src="${extractThumbnail(data.items[i].volumeInfo)}" style="width:170px; height:230px;" alt="">
                <div class="card-body" id="results">
                    <h5 class="card-title" style="font-weight:bold">${data.items[i].volumeInfo.title}</h5>
                    <p class="card-text">${data.items[i].volumeInfo.subtitle}</p>
                    <p id="price"> $ </p>
                    <span id="average_rating"><b>0.0</span>/5</b>
                    <div class="mb-3">
                        <i class="fas fa-star star-light mr-1 main_star"></i>
                        <i class="fas fa-star star-light mr-1 main_star"></i>
                        <i class="fas fa-star star-light mr-1 main_star"></i>
                        <i class="fas fa-star star-light mr-1 main_star"></i>
                        <i class="fas fa-star star-light mr-1 main_star"></i>
                    </div>
                    <div class="d-flex">
                    <a href="#" class="btn mx-auto btn-dark"  style="height:2.5rem;">Add</a>
                    <button type="button" name="add_review" id="add_review" class="btn btn-dark">Review</button>
                    <a href="${data.items[i].accessInfo.webReaderLink}" class="btn mx-auto btn-dark" style="height:2.5rem;">Read</a>
                    </div>
                </div> `;
                    card.innerHTML += content;
            }
        }

    })

}
document.getElementById('food').addEventListener('click', foodBooks,false);


//history

function historyBooks(){
    document.getElementById('top-today').classList = ('hide-cards');
    document.getElementById('type').innerHTML = "History";
    const fictionCards = document.getElementById('fiction-cards');
    while(fictionCards.children && fictionCards.children.length) {
        fictionCards.removeChild(fictionCards.children[0]);
    }
    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=subject:history",
        dataType: "json",

        success: function(data) {
            for (i = 0; i< 20; i++){
                const extractThumbnail = ({ imageLinks }) => {
                    const DEFAULT_THUMBNAIL = "https://i.imgur.com/8UdKNS4.jpeg";
                    if (!imageLinks || !imageLinks.thumbnail) {
                      return DEFAULT_THUMBNAIL;
                    }
                    return imageLinks.thumbnail.replace("http://", "https://");
                };
                // function ifSet({subtitle}){
                //     if (typeof subtitle !== 'undefined'){
                //         return 0;
                //     }
                //     return volumeInfo.subtitle
                // }
                const card = document.createElement('div');
                const fictionCards = document.getElementById('fiction-cards');
                fictionCards.appendChild(card);
                document.getElementById('type').classList.remove('hide-cards');
                //card content
                const content = `
                    <div class="card my-3" style="width: 18rem;">
                    <img class="thumbnail mx-auto card-img-top book-cover imgs" src="${extractThumbnail(data.items[i].volumeInfo)}" style="width:170px; height:230px;" alt="">
                    <div class="card-body" id="results">
                        <h5 class="card-title" style="font-weight:bold">${data.items[i].volumeInfo.title}</h5>
                        <p class="card-text">${data.items[i].volumeInfo.subtitle}</p>
                        <p id="price"> $ </p>
                        <span id="average_rating"><b>0.0</span>/5</b>
                        <div class="mb-3">
    						<i class="fas fa-star star-light mr-1 main_star"></i>
                            <i class="fas fa-star star-light mr-1 main_star"></i>
                            <i class="fas fa-star star-light mr-1 main_star"></i>
                            <i class="fas fa-star star-light mr-1 main_star"></i>
                            <i class="fas fa-star star-light mr-1 main_star"></i>
	    				</div>
                        <div class="d-flex">
                        <a href="#" class="btn mx-auto btn-dark"  style="height:2.5rem;">Add</a>
                        <button type="button" class="btn btn-dark" style="height:2.5rem;" data-toggle="modal" id="modal" data-target="#exampleModal" data-whatever="@mdo">Review</button>
                        <a href="${data.items[i].accessInfo.webReaderLink}" class="btn mx-auto btn-dark" style="height:2.5rem;">Read</a>
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Add review</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                <form action= "" method="GET">
                                  <div class="form-group">
                                  <div class="modal-body">
                                        <h4 class="text-center mt-2 mb-4">
                                            <i class="fas fa-star star-light submit_star mr-1" id="submit_star_1" data-index="1"></i>
                                            <i class="fas fa-star star-light submit_star mr-1" id="submit_star_2" data-index="2"></i>
                                            <i class="fas fa-star star-light submit_star mr-1" id="submit_star_3" data-index="3"></i>
                                            <i class="fas fa-star star-light submit_star mr-1" id="submit_star_4" data-index="4"></i>
                                            <i class="fas fa-star star-light submit_star mr-1" id="submit_star_5" data-index="5"></i>
                                        </h4>
                                    <label for="reviewer-name" class="col-form-label">Your name:</label>
                                    <input type="text" class="form-control" id="reviewer-name">
                                  </div>
                                  <div class="form-group">
                                    <label for="message-text" class="col-form-label">Review:</label>
                                    <textarea class="form-control" id="review"></textarea>
                                  </div>
                                </form>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" id="close" data-dismiss="modal">Close</button>
                                <button type="button" id="add-review" name="add-review" class="btn btn-primary"><a style="text-decoration: none; color: white;" href="rating-data.php">Add review</a></button>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                    </div> `;

                    // star rating
                    $(".submit_star").mouseenter(function(){
                        var rating = $(this).data('index');


                        reset_background();

                        for(var count = 1; count <= rating; count++)
                        {

                            $('#submit_star_'+count).addClass('text-warning');

                        }

                    });
                    $('#exampleModal').mouseleave(function(){
                        reset_background();
                    })
                    $(document).on('click', '.submit_star', function(){
                        rating_index = $(this).data('index');

                        for(var count = 1; count <= rating_index; count++)
                        {

                            $('#submit_star_' + count).addClass('text-warning');
                        }
                    });
                    card.innerHTML += content;

                    $(document).on('click', '.submit_star', function(){

                        rating_data = $(this).data('rating');
                
                    });
                    // ajax save review

                    $('#add-review').click(function(){
                        var user_name = $('#reviewer-name').val();
                        var user_review = $('#review').val();
                        console.log(user_name);
                        console.log(rating_index);
                        console.log(user_review);
                        if(user_name == '' || user_review == '')
                        {
                            alert("Please Fill Both Field");
                            return false;
                        }
                        else
                        {
                            $.ajax({
                                url:"rating-data.php",
                                method:"POST",
                                type: 'json',
                                data: {
                                    rating_index: rating_index,
                                    user_name: user_name,
                                    user_review : user_review
                                },
                                success:function(data)
                                {
                                    $('#review_modal').modal('hide');
                                    load_rating_data();
                                    alert(data);
                                }
                            })
                        }
                    });

                    
            }
        }

    })

}

// 
var rating_index = 0;

function load_rating_data()
    {
        $.ajax({
            url:"rating-data.php",
            method:"GET",
            data:{action:'145'},
            success:function(data)
            {
                $('#average_rating').text(data.average_rating);

                var count_star = 0;

                $('.main_star').each(function(){
                    count_star++;
                    if(Math.ceil(data.average_rating) >= count_star)
                    {
                        $(this).addClass('text-warning');
                        $(this).addClass('star-light');
                    }
                });
            }
        })
    }


document.getElementById('history').addEventListener('click', historyBooks,false);


//reset_background function
function reset_background()
    {
        for(var count = 1; count <= 5; count++)
        {

            $('#submit_star_'+count).addClass('star-light');

            $('#submit_star_'+count).removeClass('text-warning');

        }
    }



// ajax, jquery to receive json data from database

$(function() {
    $("#users").on('click', function() {
      document.getElementById('top-today').classList = ('hide-cards');
      document.getElementById('type').innerHTML = "History";
      const fictionCards = document.getElementById('fiction-cards');
      while (fictionCards.children && fictionCards.children.length) {
        fictionCards.removeChild(fictionCards.children[0]);
      }
      $.ajax({
        method: "GET",
  
        url: "json-result.php",
        success: function(data) {
          let string = ` <div class="d-flex flex-column users-table"> <div class="d-flex justify-content-between"> <h1 class="align-items-center"> Users </h1> <button class="btn btn-dark" style="width: 220px; height: 40px;"><a style="text-decoration: none; color: white;" href="add-user.php">Add User</button></div>
            <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">E-mail</th>
            </tr>
            </thead>
            <tbody>
            </div>
            `;
          for (i = 0; i < data.length; i++) { 
            string += `<tr>
                  <th scope="row">${data[i].userID}</th>
                  <td>${data[i].firstName}</td>
                  <td>${data[i].lastName}</td>
                  <td>${data[i].email}</td>
                  <td><button class="btn mx-1 btn-warning"><a style="text-decoration: none; color: white;" href="delete.php?deleteid= ${data[i].userID}">Delete</a></button></td>
                  <td><button class="btn btn-dark"><a style="text-decoration: none; color: white;" href="update.php?updateid= ${data[i].userID}">Update</a></button></td>
              </tr>
              `;
          }
          string += `</tbody>
                </table>`;
          $("#fiction-cards").html(string);
        }
      })
    });
  });