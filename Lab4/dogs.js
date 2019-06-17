//DOM load event
window.addEventListener("DOMContentLoaded", () => {

    const dogBtn = document.querySelector('.dog-btn'),
        dogFigure = document.querySelector('.dog-figure'),
        dogCaption = document.querySelector('.dog-caption'),
        adjectives = ["Прекрасний", "Улюблений", "Блискучий", "Пухкеньккий", "Блискучий", "Чарівний", "Милий", "Сліпучий",
            "Прекрасний", "Фантастичний", "Безстрашний", "Дружній", "Веселий", "Ніжний", "Славний", "Добрий", "Чудовий",
            "Граціозний", "Великий", "Красивий", "Щасливий", "Добрий", "Живий", "Чудовий", "Чудовий", "Величний",
            "Грайливий", "Дорогоцінний", "Променистий", "Чудний", "Сенсаційний", "Особливий",
            "Захоплюючий", "Суперський", "Талановитий"];

    //Get dog content button event listener
    dogBtn.addEventListener('click', getDog);

    //Display initial dog content
    getDog();

    function getDog() {

        //Fetch dog data
        fetch('https://random.dog/woof.json')
            .then(res => res.json())
            .then(data => {

                const dogURL = data.url,
                    prevContent = document.querySelector('.dog-media');

                //Check if previous content exists
                if (prevContent) {
                    //Remove previous content
                    prevContent.remove();
                }

                //Check file type
                if (dogURL.endsWith('mp4')) {

                    //Create video element
                    const dogVideo = document.createElement('video');

                    //Set video attributes and class
                    dogVideo.setAttribute('src', dogURL);
                    dogVideo.setAttribute('autoplay', "");
                    dogVideo.setAttribute('muted', "");
                    dogVideo.setAttribute('loop', "");
                    dogVideo.classList.add('dog-media');

                    //Display video
                    dogFigure.appendChild(dogVideo);

                } else {

                    //Create image element
                    const dogImage = document.createElement('img');

                    //Set image attributes and class
                    dogImage.setAttribute('src', dogURL);
                    dogImage.classList.add('dog-media');

                    //Display image
                    dogFigure.appendChild(dogImage);

                }

                //Display caption
                dogCaption.textContent = `${adjectives[Math.floor(Math.random() * adjectives.length)]} Песик!`;

            })
            .catch(err => dogCaption.textContent = 'Песики недоступні :(!');
    }
});