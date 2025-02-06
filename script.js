document.addEventListener('DOMContentLoaded', () => {
  const yesBtn = document.getElementById('yes-btn');
  const noBtn = document.getElementById('no-btn');
  const emojiContainer = document.getElementById('emoji-container');
  const heartMascot = document.querySelector('.heart-mascot');
  const bearsContainer = document.querySelector('.bears-container');
  const proposalText = document.getElementById('proposal-text');
  
  // Function to keep button within viewport bounds
  const moveNoButton = () => {
    const maxWidth = window.innerWidth - noBtn.offsetWidth;
    const maxHeight = window.innerHeight - noBtn.offsetHeight;
    
    const x = Math.min(Math.max(0, Math.random() * maxWidth), maxWidth);
    const y = Math.min(Math.max(0, Math.random() * maxHeight), maxHeight);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    noBtn.style.zIndex = '9999';
  };
  
  noBtn.addEventListener('mouseover', moveNoButton);
  noBtn.addEventListener('click', moveNoButton);
  
  yesBtn.addEventListener('click', () => {
    // Hide heart mascot with fade out
    heartMascot.style.animation = 'fadeOut 0.5s forwards';
    
    // Show bears container after heart mascot fades out
    setTimeout(() => {
      heartMascot.style.display = 'none';
      bearsContainer.style.display = 'block';
      bearsContainer.style.animation = 'fadeIn 0.5s forwards';
      
      // Change the proposal text
      proposalText.innerHTML = "From Motu To Nautanki";
      proposalText.style.animation = 'fadeIn 0.5s forwards';
    }, 500);
    
    // Make emojis visible
    emojiContainer.style.display = 'block';
    emojiContainer.style.animation = 'fadeIn 1s forwards';
    
    // Hide no button
    noBtn.style.display = 'none';
    
    // Show celebratory alert
    setTimeout(() => {
      alert(`Shushhh!!!! Don’t blushh 💖`);
    }, 1000);
  });
});