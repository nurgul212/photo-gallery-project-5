/* console.log('this is a test to check it this .js is connected to HTML or not')*/

const search = document.querySelector('#search');
const dataCaptions = document.querySelectorAll('[data-caption]');

const searchEngine = event => {
    const searchTerm = event.target.value.toLowerCase();

     dataCaptions.forEach(captionText => {
        const text = captionText.getAttribute('data-caption').toLowerCase();

        if(text.includes(searchTerm)){
            captionText.style.display = "block";
        } else{
            captionText.style.display = "none";
        }

 });
}
search.addEventListener('keyup', searchEngine);