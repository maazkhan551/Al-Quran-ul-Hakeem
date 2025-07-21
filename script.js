URL = "http://api.alquran.cloud/v1/quran/quran-uthmani "
fatiha = document.querySelector(".fatiha")
body = document.querySelector("body")
a = document.querySelector("a")
for(let i=0; i<47;i++){
    homediv = document.createElement("div")
    homediv.classList.add("home")
    baqara = document.createElement("div")
    baqara.classList.add("baqara")
    homediv.appendChild(baqara)
    body.appendChild(homediv)
}
baqaras = document.querySelectorAll(".baqara")
let recite = async()=>{
    res = await fetch(URL)
    Quran_data = await res.json();
    read(Quran_data);
}
function read(Quran_data){
     console.log(Quran_data)
     console.log(Quran_data.data.surahs[0].ayahs[0].text)
      if(window.location.pathname.includes("index.html")){
     for (let i=0;i<7;i++){
      fatiha.innerText +=  Quran_data.data.surahs[0].ayahs[i].text+ "\n" 
     }
    }
     let j=0
      for (baqara=0;baqara<baqaras.length;baqara++){
         for(let i=0;i<3;i++){
            if(window.location.pathname.includes("index.html")){ 
                baqaras[baqara].innerText +=  Quran_data.data.surahs[1].ayahs[j].text+ "\n" 
                if(j===45){
                    baqaras[baqara].removeAttribute('class')
                    baqaras[baqara].id = "myid"
                    baqaras[baqara].innerText +=  Quran_data.data.surahs[1].ayahs[j].text+ "\n" 
                }
                if(j===82){
                    baqaras[baqara].removeAttribute('class')
                    baqaras[baqara].id = "myid2"
                    baqaras[baqara].innerText +=  Quran_data.data.surahs[1].ayahs[j].text+ "\n" 
                }
                if(j===111){
                    baqaras[baqara].removeAttribute('class')
                    baqaras[baqara].id = "myid3"
                    baqaras[baqara].innerText +=  Quran_data.data.surahs[1].ayahs[j].text+ "\n" 
                }
            }
         j++;
      }
    }
    console.log(j)
    for (baqara=0;baqara<baqaras.length;baqara++){
         for(let i=0;i<3;i++){
            if(window.location.pathname.includes("Part2.html")){
                console.log(j)
                baqaras[baqara].innerText +=  Quran_data.data.surahs[1].ayahs[j].text+ "\n" 
                if(baqara>36){
                    baqaras[baqara].remove()

                }
        }
         j++;
      }
    }
}
recite()
 

