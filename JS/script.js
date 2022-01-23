window.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector("section")
    const nbBox = 24
    
    

    let colors = ["#165b33ce", "#146B3Ace", "#FBB229ce", "#EA4630ce", "#BB2528ce", "2997BBce", "#196882ce"]
    

    let numeros = Array.from({length:24}, (k, v) => v + 1) //tableau en une ligne - k = key / v = value
    let shuffle = numeros.sort(() => Math.random() - 0.5)
    console.log(shuffle)

    console.log(Math.random())
    const calendar = (path, event) => {
    event.target.parentNode.style.backgroundImage = 'url()'
}
    for(let i = 1; i <= nbBox; i++) {

       let box = document.createElement("div")
       let image = document.createElement("img")

       box.classList.add("box")
       image.classList.add("image")
       box.innerHTML = shuffle[i-1]

       image.src = "./image/image"+i+".jpg"
       console.log(image.src)

        let randomIndex = Math.floor(Math.floor(Math.random() * colors.length))

        box.style.background = colors[randomIndex]
        box.appendChild(image)
        
        section.appendChild(box)
        
        box.addEventListener("click", () => {
            box.classList.toggle("active")



        })
    }
})