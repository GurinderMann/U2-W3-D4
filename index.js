// toke the first url from pexels 

const getEventData = function () {
    const sportURL = 'https://api.pexels.com/v1/search?query=waterfall';
    fetch(sportURL, {
      method: 'GET',
    //   added the headers and the authorization
      headers: {
        Authorization: 'oW8DHTYuTauJSqzSdh9aEPuZ1oN47NkPhfNgl4sJufKfcbCZl7MWsy7B',
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Error');
        }
      })
    
      .then(data => {

        // transformed in array the data from the url
        const sportEvents = Array.from(data.photos);
        console.log(sportEvents);

        // took the button load from the html
        const load = document.getElementById('load');

        let currentIndex = 0;
        load.addEventListener('click', () => {
            // added an if to check that we are not adding inexisting imgs
          if (currentIndex < sportEvents.length) {
            const imgElement = document.querySelector('.bd-placeholder-img');
            const event = sportEvents[currentIndex];

            // creating a new element
         
            const newImg = document.createElement('img');
            newImg.src = event.src.large;
            newImg.classList.add('card-img-top');
            // replacing the svg with the img 
            imgElement.parentNode.replaceChild(newImg, imgElement);
            currentIndex++;
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  const getData = function () {
    const spaceURL = 'https://api.pexels.com/v1/search?query=city';
    fetch(spaceURL, {
      method: 'GET',
      headers: {
        Authorization: 'oW8DHTYuTauJSqzSdh9aEPuZ1oN47NkPhfNgl4sJufKfcbCZl7MWsy7B',
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Error');
        }
      })
      .then(data => {
        const spaceEvents = Array.from(data.photos);
        console.log(spaceEvents);
        const secondary = document.getElementById('secondary');
        let currentIndex = 0;
        secondary.addEventListener('click', () => {
          if (currentIndex < spaceEvents.length) {
            const imgElement = document.querySelector('.bd-placeholder-img');
            const event = spaceEvents[currentIndex];
            const newImg = document.createElement('img');
            newImg.src = event.src.large;
            newImg.classList.add('card-img-top');
            imgElement.parentNode.replaceChild(newImg, imgElement);
            currentIndex++;
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  const searchData = function (searchQuery) {

    // added the searchQuery at the end of the link to define what to search
    const URL = `https://api.pexels.com/v1/search?query=${encodeURIComponent(searchQuery)}`;
    fetch(URL, {
      method: 'GET',
      headers: {
        Authorization: 'oW8DHTYuTauJSqzSdh9aEPuZ1oN47NkPhfNgl4sJufKfcbCZl7MWsy7B',
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Error');
        }
      })
      .then(data => {
        const events = Array.from(data.photos);
        console.log(events);
        const search = document.getElementById('search');
        let currentIndex = 0;
        search.addEventListener('click', () => {
           const imgElement = document.querySelector('.bd-placeholder-img');
            const event = events[currentIndex];
            const newImg = document.createElement('img');
            newImg.src = event.src.large;
            newImg.classList.add('card-img-top');
            imgElement.parentNode.replaceChild(newImg, imgElement);
            currentIndex++;
            
          
        });
      

      })
      .catch(error => {
        console.log(error);
      });
  };
  
//   created a function that initialize the search with the value of the search bar
  const initializeSearch = function () {
    const searchForm = document.getElementById('searched');
    const searchInput = searchForm.querySelector('input[type="search"]');
  
    searchForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const searchQuery = searchInput.value;
      searchData(searchQuery);
    });
  };
  

  const editButtons = document.querySelectorAll('.hide');
    editButtons.forEach(button => {
    button.innerText = 'Hide';
    button.addEventListener('click', () => {
      let card = button.closest('.col-md-4');
      card.classList.add('d-none');
    });
  });
  


    initializeSearch();
    getData();
    getEventData();

  
