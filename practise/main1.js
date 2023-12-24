// const dosomething = (callback) => {
//     console.log("Do Something");
//     callback()

// }
// const dosomething2 = () => {
//     console.log("Callback called");

// }

// (dosomething(dosomething2));

// // const loginUser = (email, pass, callbackFunc) => {
// //     setTimeout(() => {
// //         callbackFunc(email)
// //     }, 2000);
// // }
// // loginUser("shakir@abc.com", 1234)
// // ==============

// const loginUser = (email, pass, callbackFunc) => {
//     setTimeout(() => {
//        callbackFunc(email)
//     }, 2000);
// }

// const getUserVideos = (email,cd) => {
//     setTimeout(() => {
//         cd(["video1", "video2", "video3"])
//     }, 3000);
// }

// loginUser("shakir@abc.com", 1234, (email) => { 
//     console.log("User logged In")
//     getUserVideos(email, (videos) => {
//         console.log(videos);
//     })
// })
 
// // =============

// // const func = (firstName) => {
// //     return firstName
// // }
// // firstName("Shakir")

// // const add = (a,b) => {
// //     let result = a + b
// //     return result
// // }

// // const result = add(4,8)

// // if (result < 100) {
// //     console.log("first");
// // }

// const promise = new Promise((resolve, reject) => {
//     let myMarks = 88
//     if (myMarks >= 80) {
//         resolve("passed")
//     } else {
//         reject()
//     }
// }) 

// promise
//     .then((status) => { 
//         console.log(status);
//     }).catch(()=> {
//         console.log("Rejectd");
//     })

// // =============

const loginUserPromise = (email, pass) => {
    return new Promise((resolve, reject) => { 
    setTimeout(() => {
        if (email === "Shakir@abc.com" && pass === 1234) {
            resolve(email)
        }else {
            reject("Invalid email or password")
        }
    }, 2000)
    })
}

const getUserVideosPromise = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email) {
            resolve(["video1","video2","video3"])
        }else {
            reject("Please Provide email")
        }
        }, 3000);
    })
}
loginUserPromise("Shakir@abc.com",1234)
    .then((e) => {
        console.log(e);
        return getUserVideosPromise()
})
    .then((res) => console.log(res))
    .catch((err) => {
        console.log(err);
    })

// ===========

const getUserDetails = async () => {
    try {
        const userEmail = await loginUserPromise("Shakir@abc.com", 1234)
        console.log(userEmail);
        const videos = await getUserVideosPromise(userEmail)
        console.log(videos);
    } catch (err){
    console.log(err);
    }
}
getUserDetails()










 