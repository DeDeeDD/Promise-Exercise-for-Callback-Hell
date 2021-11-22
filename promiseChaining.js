/*
login();
fetchData();
PostsAndPhotos();
MessagesLoading();
ShowHomeFeed();
*/

/* promise data exercise */

const login = () =>{
    return new Promise ((resolve,reject)=>{
setTimeout(() => {
    resolve("Resolved")
    reject("Rejected")
}, 1000);
    })
};

const fetchData = ()=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
           resolve("FetchedData")
            //reject("FetchedData")
        }, 1000);
    })
};

const PostsAndPhotos = ()=>{
    return new Promise ((resolve,reject)=>{
setTimeout(() => {
    resolve("PoseAndPhotosData")
    //reject("PoseAndPhotos")
}, 1000);
    })
};

const MessagesLoading = () =>{
    return new Promise ((resolve,reject)=>{
setTimeout(() => {
    resolve("MessagesThenNewFeed")
    //reject("Messages")
}, 1000);
    })
};

const ShowHomeFeed = (Mdata)=>{
    console.log(Mdata,"Ready Now...")
};




login().then((logdata)=>{
    console.log(logdata,"Successful");
   return fetchData();
}).then((fetcdata)=>{
    console.log(fetcdata,"Successful");
   return PostsAndPhotos();
}).then((photopostdata)=>{
    console.log(photopostdata,"Successful");
   return MessagesLoading();
}).then((Mdata)=>{
    console.log(Mdata,"Successful");
    ShowHomeFeed(Mdata)
})

.catch((data)=>{
    console.log("ERROR in : ",data)
})