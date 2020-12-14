document.addEventListener('DOMContentLoaded', function(){
    const timer = document.querySelector('#number')
    const minusButton = document.querySelector('#minus')
    const plusButton = document.querySelector('#plus')
    const likeButton = document.querySelector('#heart')
    const pauseButton = document.querySelector('#pause')
    const likesList = document.querySelector('#likes')
    const inputBar = document.querySelector('input')
    const submitButton = document.querySelector('#submit')
    const commentList = document.querySelector('#comments')
    const likeCount = {}

    setInterval( function(){
        countUp()
    }, 1000);

    document.addEventListener('click', function(e){
        if (e.target === minusButton) {
            timer.textContent = parseInt(timer.textContent) - 1
        } else if (e.target === plusButton){
            timer.textContent = parseInt(timer.textContent) + 1
        } else if (e.target === pauseButton){
            if (pauseButton.textContent === 'Resume'){
                pauseButton.textContent = 'Pause'
                countUp = () => timer.textContent = parseInt(timer.textContent) + 1
            } else {
                pauseButton.textContent = 'Resume'
                countUp = () => null
            }
        } else if (e.target === likeButton){
            let newNum = timer.textContent
            if (!likeCount[newNum]){
                likeCount[newNum] = 1 
                const li = document.createElement('li')
                li.id = newNum
                li.textContent = `${newNum} Liked 1 Time 🤡`
                likesList.appendChild(li)
                console.log(li)
            } else {
                likeCount[newNum]++
                let updatingListITem = document.getElementById(newNum)
                console.log(updatingListITem)
                updatingListITem.textContent = `${newNum} Liked ${likeCount[newNum]} Times 🤡`
            }
        } else if (e.target === submitButton){
            e.preventDefault()
            const newText = inputBar.value
            commentList.innerHTML += `<ul>${newText}</ul>`
            inputBar.value = ''
        } 
    })

    function countUp(){
        timer.textContent = parseInt(timer.textContent) + 1
    }

    
})