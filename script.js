let noCount = 0;

const handleNoClick = () => {
    noCount++;
    let yesButtonSize = noCount * 20 + 16;
    document.getElementById("button2").innerText = (noCount === 0)? "බැහැ" :getNoButtonText();
    document.getElementById("button1").style.fontSize = `${yesButtonSize}px`;
}

const getNoButtonText = () => {
    const phrases = [
        "බැහැ",
        "ඔයාට විශ්වාසද?",
        "ඇත්තටමද?",
        "ආයේ හිතන්නකො",
        "අන්තිම වතාවට",
        "හා කියන්නකො",
        "පස්සෙ පසුතැවෙන්න වෙයි",
        "හා කියමු නේද?",
        "ඔයා වැරැද්දක් කරනවා",
        "බොරු නේද?",
        "හදවතක් නැද්ද?",
        "දරුණු වෙන්න එපා!",
        "මහා නරකයි",
        "හා කියන්න",
        "අන්තිම වතාවට",
        "නපුරු වෙන්න එපා ;(",
        "මේකද ඔයාගේ අන්තිම තීරණය",
        "තරහයි මං ;(",
        "එහෙම කරන්න එපා.. පව්නේ..."
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
};

const handleYesClick = ()=>{
    document.querySelector("h1").innerText = "උම්ම්ම්ම්ම්ම්ම්ම්ම්මා😘!!!"
    document.querySelector("img").src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
    document.querySelector(".button").style.display = "none"

}