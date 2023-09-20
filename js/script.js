// Add custom JavaScript here
function runTypingEffect(){
    const text = 'I am Versha Untwal';
    const typingElement = document.querySelector('.typing-text');
    const typingDelay =200;

    typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, typingDelay){
    for(let i=0; i<text.length; i++){
        setTimeout(()=>{
            typingElement.textContent += text.charAt(i);
        }, typingDelay*i);
    }
}
document.addEventListener('DOMContentLoaded', runTypingEffect);