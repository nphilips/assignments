// http://rickandmortyapi.com/api/character

// const xhr = new HMLHttpRequest()

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){
//         const data = JSON.parse(xhr.responseText)
//         listData(data.results)
//     }else if(xhr.readyState === 4 && xhr.status === 404){
//         console.log(JSON.parse(xhr.responseText));
//     }
// }

// // our request configuration - method, url
// xhr.open("GET", "http://rickandmortyapi.com/api/character")
// xhr.send()

// function listData(arr){
//     console.log(arr)
// }


/////////////// Including Promises //////////////
// Promise
    // 3 possible stages
        // 1. Pending
        // Resolves - Rejects

        const a = "hello"
        const b = "goodbye"
const myPromise = new Promise((resolve, reject) => resolve(a))
myPromise
    .then(res => console.log(res))
    .catch(err => console.log(err))


const coinFlip = (side) => {

}

// function get(url){
//     const xhr = new HMLHttpRequest()
    
//     xhr.open("GET", url)
//     xhr.send()

//     new Promise((resolve, reject) => {
//         xhr.onreadystatechange = function(){
//             if(xhr.readyState === 4 && xhr.status === 200){
//                 const data = JSON.parse(xhr.responseText)
//                 resolve(data)
//             }else if(xhr.readyState === 4 && xhr.status !== 200){
//                 reject(JSON.parse(xhr.responseText));
//             }
//         }
//     })
// }
// get("http://rickandmortyapi.com/api/character")
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// // Promise Chainind
// get("http://rickandmortyapi.com/api/episode")
//     .then(res => {
//         return res
//     })
//     .then(res => res)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))




///////////// Async - Await

// const getAllThings = async () => {

// }

async function getAllRickAndMortyThings(){
    let chars, epi, loc
    try{
        chars = await get("http://rickandmortyapi.com/api/character")
        console.log(chars);
        epi = await get("http://rickandmortyapi.com/api/episode")
        console.log(epi);
        loc = await get("http://rickandmortyapi.com/api/location")
        console.log(loc);
    }
    catch(err){
        console.log(err);
    }
}

getAllRickAndMortyThings()


authRouter.post("/signup", async (req, res, next) => {
    try{
        const user = await user.find()
        if(user){
            res.status(500)
            return next(new Error("Username is taken"))
        }
        const newUser = new user(req.body)
        const savedUser = await newUser.save()
        const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
        return res.status(201).send({user: savedUser.withoutPassword})
    }
    catch(err){
        res.status(500)
        return next(err)
    }
})