fetch('https://coding-week-2024-api.onrender.com/api/data').then((response)=>{
    return response.json();
}).then(data => {
    for(i=0;i<3;i++){
        let con = `<div class="box" style="display: flex;
        background-size: cover;
        background-image: url('${data[i].image}');
        align-items: flex-end;
        color: white;">
        <div class="box-info">
            <button id="butt">Culture</button>
            <button id="butt">Featured</button>
            <h2>${data[i].headline}</h2>
            <div class="one" style="display: flex;">
                <i class="fa-regular fa-calendar"></i>
                <pre> ${data[i].date}</pre>
            </div>
            <div class="one" style="display: flex;">
                <i class="fa-solid fa-user"></i>
                <pre> ${data[i].author}</pre>
            </div>
        </div>
        </div>`;
        document.querySelector('.content').innerHTML+=con;
    }
    for(i=4;i<10;i++){
        let con = `
        <div class="bo" style="display:flex; padding:0.4rem;">
        <div class="img4" style="background-image: url('${data[i].image}');"></div>
        <div class="con4">
            <p>${data[i].headline}</p>
            <div class="date4" style="display: flex;">
                <i class="fa-regular fa-calendar"></i>
                <pre> ${data[i].date}</pre>
            </div>
        </div>
        </div>`;
        document.querySelector('.slide').innerHTML+=con;
    }
});
