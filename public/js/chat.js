const socket = io()

socket.on('countUpdated',(count)=>{
    console.log('The count has been updated',count)
})

document.querySelector('#increment').addEventListener('click', (e)=>{
e.preventDefault()

const message = e.target.elements.message.value

socket.emit('sendMessage',message)


})

document.querySelector('#send-location').addEventListener('click',()=> {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser')
    }

    navigator.geolocation.getCurrentPosition((position)=>{
console.log(position)
    })
})