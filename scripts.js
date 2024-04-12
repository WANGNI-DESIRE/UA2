
window.addEventListener('load',(event)=>{

    const animatedTitles = document.querySelectorAll('.animated-title');
    
    animatedTitles.forEach(title => {
        title.classList.add('animate-title');
    });
    
    const images = document.querySelectorAll('.gallery img');
    console.log(images);
    
    images.forEach(image => {
      image.addEventListener('mouseenter', () => {
        console.log('Mouse Over');
        
        image.style.transform = 'scale(2)';
        
        image.style.transition = 'transform 0.3s ease';
    });
    
    
    image.addEventListener('mouseleave', () => {
          console.log('Mouse leave');
        image.style.transform = 'scale(1)';
      });
    });
});

