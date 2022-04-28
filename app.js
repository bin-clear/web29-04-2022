
alert('Mở trình duyệt trên máy tính để có trải nghiệm tốt nhất')
const listImage = document.querySelector('.listImage')
const logo_img = document.querySelector('.logo_img')

listImage.addEventListener('click',function(){
    logo_img.classList.add('open')
    // alert("Hãy mở bằng trình duyệt trên máy tính để có cảm nhận tốt nhất!!!")
    Swal.fire({
        title: 'Hãy mở bằng trình duyệt trên máy tính để có cảm nhận tốt nhất!!!',
        width: 600,
        padding: '3em',
        color: '#fff',
        background: '#BF7373 url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      })
});


const closeImage = document.querySelector('.closeImage')

closeImage.addEventListener('click',function(){
    logo_img.classList.remove('open')
});

