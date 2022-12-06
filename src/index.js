const init = () => {  

const inputForm = document.querySelector('form');

inputForm.addEventListener('submit', (event) => {

    event.preventDefault();

    //console.log(event);           //commented out as an alternative illustration

    //event.target.children[1].value;

    const input = document.querySelector('input#searchByID');   //This code enables us to access and input value directly.


    fetch(`http://localhost:3000/movies/${input.value}`)      //Here, we fetch data based on user input
    .then(response => response.json())

    .then(data => {

        //Here, we display the fecthed data on the webpage 

        const title = document.querySelector('section#movieDetails h4');

        const summary = document.querySelector('section#movieDetails p')


        title.innerText = data.title;

        summary.innerText = data.summary;


    });

    });

}

document.addEventListener('DOMContentLoaded', init);