document.addEventListener('DOMContentLoaded', function() {

    const fontSelector = document.getElementById('font-selector');
    const commentaireBox = document.getElementById('commentaire');
    const messagePreview = document.getElementById('message-preview');
  

    function updatePreview() {
      const fontFamily = fontSelector.value;
      const commentText = commentaireBox.value; 
      messagePreview.textContent = commentText;
      messagePreview.style.fontFamily = fontFamily; 
    }
  
 
    fontSelector.addEventListener('change', updatePreview); 
    commentaireBox.addEventListener('input', updatePreview); 
  

    updatePreview();
});