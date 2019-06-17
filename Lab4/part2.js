var jokes = [{joke: "Нецензурна лексика?", punchLine: "З речами на вихід"},
    {joke: "Можна питання?", punchLine: "Ви тільки що його задали"},
    {joke: "?", punchLine: "Ви не здасте"},
    {joke: "Що робити?", punchLine: "Знімати труси та бігати!"},
    {joke: "У мене не працює", punchLine: "Співчуваю!"},
    {joke: "Співчуваю?", punchLine: "Співчуваю!"}];

jokeNum = 1;
document.getElementById("new-joke").addEventListener('click', function() {
    document.getElementById("joke-question").innerHTML = jokes[jokeNum].joke;
    document.getElementById("joke-punchline").innerHTML = jokes[jokeNum].punchLine;
    jokeNum++;
    if (jokeNum >= jokes.length) {
        jokeNum = 0;
    }
});