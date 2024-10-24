const fetchPosts = async () => {
    const body = document.querySelector('main');
    try {
        console.log('try');
        const response = await fetch('https://proxy-server-psi-ten.vercel.app/api/proxy?page=4&category=-100&q=cat', {
            headers: {
                'Content-Type': 'application/json',
            }  
        });  

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const {data, meta} = await response.json();

        console.log('Data:', data);
        console.log('meta:', meta);
        const section = document.querySelector('main');
        data.forEach(post => {
            const img = document.createElement('img');
            img.src = post.thumbs.original;
            section.appendChild(img);
        })


    } catch (error) {
        console.log(error); 
    } finally {
        console.log("stop fetching"); 
    }
};

fetchPosts();
