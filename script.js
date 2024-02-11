let noCount = 0;
let yesPressed = false;
let yesButtonSize = noCount * 20 + 16;

const handleNoClick = () =>{
    noCount++;
}

const getNoButtonText = () => {
    const phrases = [
        "No",
        "Are you sure?",
        "Really sure?",
        "Think again!",
        "Last chance!",
        "Surely not?",
        "You might regret this!",
        "Give it another thought!",
        "Are you absolutely certain?",
        "This could be a mistake!",
        "Have a heart!",
        "Don't be so cold!",
        "Change of heart?",
        "Wouldn't you reconsider?",
        "Is that your final answer?",
        "You're breaking my heart ;(",
        "Is that your final answer?",
        "You're breaking my heart ;(",
        "Plsss? :( You're breaking my heart"
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
};