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
    //resolve("Resolved")
    reject("Rejected")
}, 2000);
    })
};

const fetchData = ()=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
           resolve("FetchedData")
            //reject("FetchedData")
        }, 2000);
    })
};

const PostsAndPhotos = ()=>{
    return new Promise ((resolve,reject)=>{
setTimeout(() => {
    resolve("PoseAndPhotos")
    //reject("PoseAndPhotos")
}, 2000);
    })
};

const MessagesLoading = () =>{
    return new Promise ((resolve,reject)=>{
setTimeout(() => {
    resolve("MessagesThenNewFeed")
    //reject("Messages")
}, 2000);
    })
};

const ShowHomeFeed = (Mdata)=>{
    console.log(Mdata,"Ready")
};




login().then((logdata)=>{
    console.log(logdata);
    fetchData();

}).then((fetcdata)=>{
    console.log(fetcdata);
})

.catch(()=>{
    console.log("ERROR")
})