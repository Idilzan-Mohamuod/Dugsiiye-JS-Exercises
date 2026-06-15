function changeImage() {
  const image = document.querySelector("#image");

    const url=prompt('please enter Your Image Url Here:')
    const borderColor=prompt('enter Border Color here:');
    const width= prompt('enter the Width of you image in pixels:')
    const height=prompt('enter the Height of you image in pixels:')
    const borderRadius=prompt('enter the Border Radius of you image in pixels:')


     image.setAttribute( 'src', url);
     image.style.border=`2px solid ${borderColor}`;
     image.style.width=`${width} px`;
     image.style.height=`${height} px`;
     image.style.borderRadius=`${borderRadius} px`;
     image.style.padding='20px';
     image.style.backgroundColor='Light Green';


    
}


function setLightMode(){
document.body.style.backgroundColor='white'
document.body.style.color='black'
}

function setDarkMode(){
   document.body.style.backgroundColor='black'
document.body.style.color='white' 
}