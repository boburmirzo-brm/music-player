
const audio = document.querySelector('#audio');

const arrayID = ['ertugrul', 'icerde', 'muhtesem', 'abdulhamid', 'calikusu', 'cukur']



const arraySRC = [
    'audio/_Ertuğrul_Gazi_-_Jenerik_Müziği_(Soundtrack)(256kbps).mp3',
    'audio/İçerde_Jenerik_Müziği_-_Toygar_Işıklı_(_Orijinal_Versiyon_)(256kbps).mp3',
    'audio/Muhteşem_Yüzyıl_The_Magnificent_Century_Official_Soundtrack_Vol._1_01_Muhteşem_Yüzyıl_Jenerik_HQ(128kbps).mp3',
    'audio/Payitaht Abdülhamid - Jenerik Müziği 128 kbps.mp3',
    'audio/Çalıkuşu_-_Jenerik(128kbps).mp3',
    'audio/Çukur_Jenerik_Müziği__Toygar_Işıklı_(256kbps).mp3'
]

arrayID.forEach(i=>{
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.innerHTML = i;
    document.getElementById('btns').appendChild(btn)
})

const btn = document.querySelectorAll('.btn');
const title = document.querySelector('.title');
const collection = document.querySelector('.collection');
const menu = document.querySelector('.menu');
const imageContainer = document.querySelector('.image__container');
const image = document.querySelector('#image');


btn.forEach((i,index)=>{
    i.addEventListener('click',()=>{
            audio.src = arraySRC[index]
            audio.play();
            title.innerHTML = arrayID[index]
            image.src = `img/${arrayID[index]}.jpg`
            imageContainer.classList.add('active__img')

            btn.forEach(re=>{
                re.classList.remove('active')
            })
            i.classList.add('active')
    })
})

menu.addEventListener('click',()=>{
    if(collection.classList.contains('hide')){
        collection.classList.remove('hide')
    }else{
        collection.classList.add('hide')
    }
})









// const arr = ['ertugrul', 'icerde', 'muhtesem', 'abdulhamid', 'calikusu', 'cukur']

// arr.forEach(i=>{
//     const btn = document.createElement('button');
//     btn.className = 'btn';
//     btn.innerHTML = i;

//     btn.addEventListener('click',()=>{
//         stopSongs()
        
//         if(btn.classList.contains('active')){
//             btn.classList.remove('active')
//           document.getElementById(i).pause()
//         }else{
//             btn.classList.add('active')
//         document.getElementById(i).play()
//         }
//     })
//     document.getElementById('btns').appendChild(btn)
// })

// function stopSongs() {
// arr.forEach(sound => {
//     const song = document.getElementById(sound)
//     const btns = document.querySelectorAll('.btn');
//     btns.forEach(item=>{
//         item.addEventListener('click',()=>{
//         btns.forEach(i=>{
//         i.classList.remove('active')
//         })
//         item.classList.add('active')
//     })
//     })
//     song.pause()
//     song.currentTime = 0;
// })
// }