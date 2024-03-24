const iyaButton = document.querySelector('.iya');
const tidakButton = document.querySelector('.tidak');
const container1 = document.querySelector('.container-1');
const img = container1.querySelector('img');
const h2 = document.querySelector('h2');
const desc = document.querySelector('.desc');
const p = desc.querySelector('p')
const refreshButton = document.querySelector('.refresh');
refreshButton.style.display='none';


iyaButton.addEventListener('click', () => {
  container1.style.backgroundColor = '#E12E2E'; 
  img.src = 'img/image 3.png';
  h2.textContent = 'Anda Berbohong!';
  p.textContent = 'Anda adalah seorang Teknisi';
  iyaButton.style.display = 'none';
  tidakButton.style.display = 'none';
  refreshButton.style.display = 'block';
  
});


tidakButton.addEventListener('click', () => {
    container1.style.backgroundColor = '#6FD240'; 
    img.src = 'img/image 2.png';
    h2.textContent = 'Anda Benar!';
    p.textContent = 'Anda adalah seorang Mahasiswa';
    iyaButton.style.display = 'none';
    tidakButton.style.display = 'none';
    refreshButton.style.display = 'block';
});

refreshButton.addEventListener('click', () => {
    location.reload();
  });




