/* HS Nordhausen, FB Ingenieurwissenschaften
   233 WebDesign
   WS 2021/22 */
   
/* change ist ein logisches Event! */
document.querySelector('#fs-schriftart')
        .addEventListener(
        'change',
  () => {
       document.querySelector('#style-times').disabled =
              !document.querySelector('#cb-times').checked;
       document.querySelector('#style-arial').disabled
             = document.querySelector('#cb-times').checked;
   });

/* end of file */ 