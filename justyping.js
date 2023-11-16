/* keyboard */
let popup = document.getElementById('popup')

let keys = document.querySelectorAll('.keys');

for(let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

window.addEventListener('keydown', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.add('active')
        }
        if (event.key === 'Tab') {
            event.preventDefault();/* using keyboard tab to refresh the typing test */
            refresh();
        }

        if (event.key === 'Escape') {/* using keyboard escape to exit the popup */
            event.preventDefault();
            popup.classList.remove("open-popup");
        }

    }
})

window.addEventListener('keyup', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.remove('active')
            keys[i].classList.add('remove')
        }
        setTimeout(()=> {
            keys[i].classList.remove('remove')
        },200)
    }
})


/* random paragraph generator */
const subjects = ['i', 'you', 'he', 'she', 'they', 'we', ' cat', 'a dog', 'a bird', 'the teacher', 'a student', 'for a car', 'the computer', 'whole city', 'blue ocean', 'a friend', 'no movie', 'library book', 'eating restaurant', 'funny scientist', 'bad artist', 'interesting robot', 'outer astronaut', 'space alien', 'clash wizard', 'dead superhero', 'down detective', 'dirty chef', 'unholy musician', 'black athlete', 'baby doctor', 'australian nurse', 'sleepy pilot', 'sea captain', 'the explorer', 'the journalist', 'the photographer', 'the inventor', 'the princess', 'the king', 'the queen', 'the dragon', 'the vampire', 'the ghost', 'the monster', 'the superheroine', 'the villain', 'the president', 'the astronaut', 'the farmer', 'the gardener', 'the police officer', 'the firefighter', 'the architect', 'the engineer', 'the lawyer', 'the judge', 'the soldier', 'the spy', 'the comedian', 'the actor', 'the actress', 'the director', 'the producer', 'the writer', 'the poet', 'the scientist', 'the mathematician', 'the philosopher', 'the historian', 'the economist', 'the chef', 'the baker', 'the barista', 'the athlete', 'the coach', 'the referee', 'the fan', 'the gamer', 'the blogger', 'the influencer', 'the traveler', 'the explorer', 'the volunteer', 'the therapist', 'the patient', 'the customer', 'the employee', 'the boss', 'the colleague', 'the neighbor'];

const verbs = ['run', 'eat', 'sleep', 'study', 'write', 'sing', 'dance', 'play', 'paint', 'travel', 'work', 'create', 'explore', 'discover', 'teach', 'learn', 'love', 'laugh', 'cry', 'dream', 'think', 'imagine', 'talk', 'listen', 'watch', 'read', 'cook', 'bake', 'build', 'design', 'solve', 'lead', 'follow', 'drive', 'fly', 'swim', 'climb', 'jump', 'skip', 'crawl', 'surf', 'ski', 'hike', 'bike', 'run', 'walk', 'run', 'exercise', 'meditate', 'pray', 'compete', 'win', 'lose', 'draw', 'perform', 'act', 'direct', 'produce', 'write', 'edit', 'film', 'photograph', 'draw', 'paint', 'sculpt', 'compose', 'play', 'sing', 'record', 'listen', 'understand', 'question', 'answer', 'solve', 'explore', 'analyze', 'calculate', 'read', 'write', 'speak', 'type', 'program', 'code', 'debug', 'test', 'deploy', 'design', 'plan', 'organize', 'manage', 'lead', 'follow', 'collaborate', 'communicate', 'present'];

const adverbs = ['quickly', 'slowly', 'loudly', 'quietly', 'happily', 'sadly', 'briskly', 'carefully', 'cheerfully', 'randomly', 'gently', 'harshly', 'smoothly', 'roughly', 'patiently', 'impatiently', 'politely', 'rudely', 'gracefully', 'awkwardly', 'elegantly', 'clumsily', 'bravely', 'fearfully', 'boldly', 'cautiously', 'freely', 'responsibly', 'recklessly', 'correctly', 'incorrectly', 'wisely', 'foolishly', 'clearly', 'vaguely', 'directly', 'indirectly', 'intentionally', 'unintentionally', 'carelessly', 'carefully', 'efficiently', 'inefficiently', 'simply', 'complexly', 'calmly', 'frantically', 'nervously', 'confidently', 'doubtfully', 'honestly', 'dishonestly', 'sincerely', 'insincerely', 'kindly', 'unkindly', 'generously', 'selfishly', 'eagerly', 'reluctantly', 'daily', 'nightly', 'weekly', 'monthly', 'yearly', 'suddenly', 'gradually', 'eventually', 'instantly', 'thoroughly', 'partially', 'fully', 'mostly', 'barely', 'wisely', 'foolishly', 'quickly', 'slowly', 'loudly', 'quietly', 'happily', 'sadly', 'briskly', 'carefully', 'cheerfully', 'randomly'];

const adjectives = ['happy', 'sad', 'fast', 'slow', 'colorful', 'bright', 'dark', 'tall', 'short', 'curious', 'brave', 'fearful', 'bold', 'cautious', 'gentle', 'harsh', 'smooth', 'rough', 'patient', 'impatient', 'polite', 'rude', 'graceful', 'awkward', 'elegant', 'clumsy', 'wise', 'foolish', 'clear', 'vague', 'direct', 'indirect', 'intentional', 'unintentional', 'careless', 'careful', 'efficient', 'inefficient', 'simple', 'complex', 'calm', 'frantic', 'nervous', 'confident', 'doubtful', 'honest', 'dishonest', 'sincere', 'insincere', 'kind', 'unkind', 'generous', 'selfish', 'eager', 'reluctant', 'big', 'small', 'huge', 'tiny', 'massive', 'delicate', 'strong', 'weak', 'soft', 'hard', 'hot', 'cold', 'old', 'young', 'ancient', 'modern', 'fresh', 'stale', 'loud', 'quiet', 'noisy', 'silent', 'bright', 'dark', 'vivid', 'dull', 'beautiful', 'ugly', 'attractive', 'repulsive', 'simple', 'complex', 'ordinary', 'extraordinary'];

function getRandom(array){
    return array[Math.floor(Math.random()*array.length)];
}

function generateSentence(){
    const subject= getRandom(subjects);
    const verb= getRandom(verbs);
    const adverb= getRandom(adverbs);
    const adjective= getRandom(adjectives);

    return `${subject} ${verb} ${adverb} ${adjective}`;
}

function generateParagraph(count){
    let paragraph=' ';
    for(let i=0;i<count;i++){
        paragraph+= generateSentence()+' ';
    }
    return paragraph.trim();
}

let outputElement= document.getElementById('brownmundae');
let generatedParagraph= generateParagraph(100);
outputElement.textContent=generatedParagraph;

/* refreshing the text and page */
function refresh() {  
    let outputElement= document.getElementById('brownmundae');
    let generatedParagraph= generateParagraph(100);
    outputElement.textContent=generatedParagraph;

    document.getElementById('window').scrollTop = 0;
}


function refreshpage(){/* refreshing when clicking home botton */
    location.reload();
}

/* open popup */

function popupopen(){
   popup.classList.add("open-popup");
}




