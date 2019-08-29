let url = "https://www.flickr.com/services/feeds/photos_public.gne?tags=punctuation,atsign&format=json&jsoncallback=?";

let imageList;


$.getJSON(url, function(data){
    console.log(data.items);
    imageList = data.items;
});

let imageContainer = document.getElementById('imageContainer');

function displayImages(){
    let imageListHTML = imageList.map((image)=>{
        return ` <div class="card">
            <h3 class="card-text car-title">${image.title}</h3>
            <span id="pictures" class="card-img-top" alt="Card image cap">${image.description}</span>
            </div>
    ​`


    })

    imageContainer.innerHTML = imageListHTML.join('');
}






