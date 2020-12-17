const timer = document.querySelector('#number')
const likesList = document.querySelector('#likes')
const inputBar = document.querySelector('input')
const commentList = document.querySelector('#comments')
const likeCount = {}
const picStorage = document.querySelector('#picStorage')
const picInput = document.querySelector('#pic-input')

let countUp = ()=> timer.textContent = parseInt(timer.textContent) + 1

const eventListener = e => {
    if (e.target.id === 'minus') {
        timer.textContent = parseInt(timer.textContent) - 1
    } else if (e.target.id === 'plus'){
        timer.textContent = parseInt(timer.textContent) + 1
    } else if (e.target.id === 'pause'){
        if (e.target.textContent === 'Resume'){
            e.target.textContent = 'Pause'
            countUp = () => timer.textContent = parseInt(timer.textContent) + 1
        } else {
            e.target.textContent = 'Resume'
            countUp = () => timer.textContent = parseInt(timer.textContent) + 0
        }
    } else if (e.target.id === 'heart'){
        let newNum = timer.textContent
        if (!likeCount[newNum]){
            likeCount[newNum] = 1 
            const li = document.createElement('div')
            li.dataset.id = newNum
            li.textContent = `${newNum} Liked 1 Time 😻`
            likesList.appendChild(li)
        } else {
            likeCount[newNum]++
            let updatingListITem = document.querySelector(`[data-id='${newNum}']`)
            updatingListITem.textContent = `${newNum} Liked ${likeCount[newNum]} Times 😻`
        }
    } else if (e.target.id === 'submit'){
        e.preventDefault()
        const newText = inputBar.value
        const newCom = document.createElement('p')
        newCom.textContent = `${newText}😻`
        commentList.appendChild(newCom)
        inputBar.value = ''
    } else if (e.target.id === 'picAdd'){
        e.preventDefault()
        const newPic = picInput.value
        picStorage.innerHTML += `<img src='${newPic}' alt='newpic' width="560" height="315"/>`
        document.querySelector('#pic-input').value = ''
    } else if (e.target.id === 'exOut'){
        console.log(e.target.parentElement)
        e.target.parentElement = ''
    }
}

document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener('click', (event) => eventListener(event))
    setInterval( () => countUp(), 1000);
})