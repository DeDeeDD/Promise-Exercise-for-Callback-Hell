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
    //reject("Rejected")
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
    fetchData().then((fehdata)=>{
        console.log(fehdata);
        PostsAndPhotos().then((pdata)=>{
            console.log(pdata);
            MessagesLoading().then((Mdata)=>{
                console.log(Mdata);
                ShowHomeFeed(Mdata,"In New Feed");
            }).catch((Mdata)=>{
                console.log(Mdata);
            })
        }).catch((pdata)=>{
            console.log(pdata,"E R R O R")
        })
    .catch((fehdata)=>{
        console.log(fehdata,"E R R O R")
    })
})
.catch((logdata)=>{
    console.log(logdata, " E r r o r")
})
})