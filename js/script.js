let fileInput =document.querySelector(".fileInput");
let images = document.querySelector(".images");
let icon = document.getElementById("icon");


function createImage(base64String){
    let img = document.createElement("img");
    img.className="myImage";
    img.setAttribute("src", base64String)
    return img;
}


fileInput.addEventListener("change", (ev)=>{
    

      let files = ev.target.files;

      for(const file of files) {

        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.addEventListener("load",(ev)=>{
            let image = createImage(reader.result)
            images.appendChild(image);
        });  

      }
    
});


icon.addEventListener("click",(ev)=>{
    fileInput.click();
});

