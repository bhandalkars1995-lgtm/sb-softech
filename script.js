
function sendWA(e){
 e.preventDefault();
 const name=document.querySelector('#name').value;
 const phone=document.querySelector('#phone').value;
 const business=document.querySelector('#business').value;
 const details=document.querySelector('#details').value;
 const msg=`Hello SB Softech!%0A%0AName: ${encodeURIComponent(name)}%0AMobile: ${encodeURIComponent(phone)}%0ABusiness: ${encodeURIComponent(business)}%0ARequirements: ${encodeURIComponent(details)}`;
 window.open('https://wa.me/919975580793?text='+msg,'_blank');
}
