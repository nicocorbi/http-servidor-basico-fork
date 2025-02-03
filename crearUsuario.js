function randomFromArray(arr){
    const num = Math.random() * arr.length
    const numInt = Math.floor(num)
    return arr[numInt]
}

const pre = ["hyper", "super", "ultra", "red", "green", "blue", "pink", "yellow", "nice", "good", "neutral"]
const name = ["noob", "cyber", "haxx", "berry", "dog", "cat", "squirrel"]
const n = Math.floor(Math.random()*9999)