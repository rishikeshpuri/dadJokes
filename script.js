// For this script I will use the concept of:-

// 1. Promises
// 2. fetch-api
// 3. async-await
// 4. Error Handling

// GET https://icanhazdadjoke.com/

const jokes_love = document.getElementById('joke');
const joke_btn = document.getElementById('jokeBtn');

   // ------By Help Of PROMISES-----------------------
// const generateJokes = () => {

    // const setHeader = {
    //     headers : {
    //         Accept : "application/json"
    //     }
    // }

    // // fetch(kis api k liye request karna h, )

    // fetch("https://icanhazdadjoke.com/", setHeader)
    // .then( (resp) => 
    //    resp.json()        // yaha data html form m milta hai usko hm JSOn m convert kar deinge
    // )
    // .then( (data) => {
    //     jokes_love.innerHTML = data.joke;
    // }) 
    // .catch( (error) => {
    //     console.log(error);
    // })
// }
    // -----------------------------------------------------------------------


// By  ----------------Help Of ASYNC Await with Error Handling------------

const generateJokes = async () => {

    try{
        const setHeader = {
            headers : {
                Accept : "application/json"
            }
        }
    
        // fetch(kis api k liye request karna h, )
    
        const resp = await fetch("https://icanhazdadjoke.com/", setHeader);
    
        const data = await resp.json();
        
        jokes_love.innerHTML = data.joke;
    }
    catch(err){
        console.log(`the error is ${err}`);
    }

}

joke_btn.addEventListener('click', generateJokes);
generateJokes(); // jb koi mera page ko refresh krega to byDafault mera joke aa jaiga





