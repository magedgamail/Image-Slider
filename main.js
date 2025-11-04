// Get slider items | Array.from [Es6 features]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get numbers  of slider 

var slidesCount = sliderImages.length;

// Set Current slide 
var currentSlide = 1;

// Slide number element 
var slideNumberElement = document.getElementById('slide-number');

// previous and next Buttons

var nextButton = document.getElementById('next')
var prevButton = document.getElementById('prev')

//Handel Xlick on next and previous Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create the main ul Element
var paginationElement = document.createElement('ul');

// set id on created UI Element
paginationElement.setAttribute('id', 'pagination-ul');

// Get slider items | Array.from [Es6 features]
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop through All Bullets Items
for (var i = 0; i < paginationBullets.length; i++){
    paginationBullets[i].onclick = function () {

        currentSlide = parseInt(this.getAttribute('data-index'));

        thechecker();
    }
}

// Create List Items based on slides count
for (var i =1; i <= slidesCount; i++) {

    // Create the li
    var paginationItem = document.createElement('li');

    // set id on created UI Element
    paginationItem.setAttribute('data-index', i);

    // Set item content
    paginationItem.appendChild(document.createTextNode(i));

    // Append Item to the main UI list
    paginationElement.appendChild(paginationItem);




}

// Add the Created UL Element to the page
document.getElementById('indicators').appendChild(paginationElement);


// Get the new created UL

var paginationCreatedUl = document.getElementById('pagination-ul');

// Get pagnation items | Array.from [Es6 features]
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));


// Terigger the checker Function
thechecker();

// Next slide  Function
function nextSlide() {

    if (nextButton.classList.contains('disabled')) {

        // Do Nothing
        return false

    } else {

        currentSlide++;

        thechecker();
    }
}

//previous Slide Function
function prevSlide() {

    if (prevButton.classList.contains('disabled')) {

        // Do Nothing
        return false
        
    } else {

        currentSlide--;

        thechecker();
    }
}

// create the checker function
function thechecker() {

    // Set the Slide Number
    slideNumberElement.textContent = 'slide #' + (currentSlide) + ' of ' + (slidesCount);

    //Remove All active slide
    removeAllactive();

    // Set Active class on Current Slide
    sliderImages[currentSlide - 1].classList.add('active')

    // Set activeclass on current pagination Item
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');

    // check if current slide is the first 
    if (currentSlide == 1) {

        //Add Disabled class on previouse 
        prevButton.classList.add('disabled');

    } else {

        // Remove Disabled class From previous Button
        prevButton.classList.remove('disabled');

    }
    // check if current slide is the Last 
    if (currentSlide == slidesCount) {

        //Add Disabled class on next Button 
        nextButton.classList.add('disabled');

    } else {

        // Remove Disabled class From next Button
        nextButton.classList.remove('disabled');

    }

}

// Remove all active classses from Images and paganitions
function removeAllactive () {

    // Loop throught Images
    sliderImages.forEach (function (img) {

        img.classList.remove ('active');

    })

    // Loop through pagination Bullets
    paginationsBullets.forEach(function (bullet) {

        bullet.classList.remove('active')

    })
}