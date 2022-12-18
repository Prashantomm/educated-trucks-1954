let container= document.querySelector("#container");

    fetch("https://www.omdbapi.com/?apiKey=290a8a8d&s=avengers")
    .then((res)=>{
        return res.json();

    })
    .then((acctualData)=>{
        console.log(acctualData);
        displayProduct(acctualData);
    })
    .catch((err)=>{
        alert(err)

    })
    function displayProduct(data){
        data.forEach(function(ele,i){
            let div=document.createElement("div");
            let image=document.createElement("img");
            image.src=ele.Poster;

            let title=document.createElement("h1");
            title.textContent=ele.Title;

            let desc=document.createElement("p");
            desc.textContent=ele.Year

            let price=document.createElement("p");
            price.textContent=ele.Type;

            div.append(image,title,desc,price);
            container.append(div);


        });
    }
