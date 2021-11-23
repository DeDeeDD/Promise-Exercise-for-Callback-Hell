/*
login();
fetchData();
PostsAndPhotos();
Messages();
ShowHomeFeed();
*/

/* promise chaining  */

const login = ()=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            //reject("Login sync")
            resolve("Login")
        }, 1500);
    })
}

const fetchData = () =>{
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            //reject("Fech sync")
            resolve("Fech completed")
        }, 1500);
    })
}

const PostsAndPhotos = ()=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            //reject("Posts and Photos sync")
            resolve("Posts and Photos synced")
        }, 1500);
    })
}

const newFeed = ()=>{
    return new Promise ((resolve,reject)=>{
setTimeout(() => {
    //reject("News Feed sync")
    resolve("News Feed")
}, 1500);
    })
}

const ShowHomeFeed = (data)=>{
    console.log("R E A D Y: ",data)
}



/* async await function synthatic sugar */

const UI =async ()=>{
    const loginData =await login();
    console.log(loginData);
    const fetcheData = await fetchData();
    console.log(fetcheData);
    const newFeedData = await newFeed();
    console.log(newFeedData);
    ShowHomeFeed(newFeedData);
/*
    login().then((logdata)=>{
        console.log(logdata);
        return fetchData();
    }).then((fecdata)=>{
        console.log(fecdata);
        return PostsAndPhotos();
    }).then((postphotosdata)=>{
        console.log(postphotosdata);
        return newFeed();
    }).then((Mdata)=>{
        console.log(Mdata);
        ShowHomeFeed(Mdata);
    }).catch((catchdata)=>{
        console.log("E R R O R IN : ", catchdata)
    }) 
    */
}

UI().catch((udata)=>{
    console.log("ERROR IN",udata)
})