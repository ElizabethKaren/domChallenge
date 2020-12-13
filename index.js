document.addEventListener('DOMContentLoaded', function(){
    const timer = document.querySelector('#number')
    const minusButton = document.querySelector('#minus')
    const plusButton = document.querySelector('#plus')
    const likeButton = document.querySelector('#heart')
    const pauseButton = document.querySelector('#pause')
    const likesList = document.querySelector('#likes')
    const inputBar = document.querySelector('input')
    const submitButton = document.querySelector('#submit')

    setInterval(function(){
        timer.textContent = parseInt(timer.textContent) + 1
    }, 1000);

    document.addEventListener('click', function(e){
        if (e.target === minusButton) {
            timer.textContent = parseInt(timer.textContent) - 1
        } else if (e.target === plusButton){
            timer.textContent = parseInt(timer.textContent) + 1
        } else if (e.target === likeButton){
            console.log(e.target)
        } else if (e.target === pauseButton){
            console.log(e.target)
        } else if (e.target === likesList){
            console.log(e.target)
        } else if (e.target === submitButton){
            console.log(inputBar.textContent)
        }
    })

    
})