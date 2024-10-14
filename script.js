const key = 'MWQsZflYAuWLfpM9rIg2xgznEHJgS73B';
const helpUrl = "https://api.allorigins.win/get?url=";


const fetchPosts = async () => {
    console.log('start')
    try {
        console.log('try')
        const response = await fetch( helpUrl + encodeURIComponent(`https://wallhaven.cc/api/v1/search?apikey=${key}&page=2`), {
        // const response = await fetch(`https://whvn.cc/lmk1zp`,{
          headers: {
              'Content-Type': 'application/json',
          }  
        });  
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        const {data,meta} = JSON.parse(result.contents);
        console.log(data); 
        console.log(meta); 
    } catch (error) {
        console.log(error.message); 
    } finally {
        console.log("stop fetching"); 
    }
};

fetchPosts();
