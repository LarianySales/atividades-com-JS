const btnConverter = document.getElementById("my-btn")

btnConverter.addEventListener('click', () => {
    let inName = document.getElementById('inName')
    let inTime = document.getElementById('inTime')
    let outName = document.getElementById('outName')
    let outTime = document.getElementById('outTime')

    let name = inName.value
    let time = inTime.value

    outName.textContent = name
    outTime.textContent = `${Math.floor(time/60)} Horas e ${time%60} Minuto(s)`
})