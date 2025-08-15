function decodeMessage() {
    const input = document.getElementById('secretInput').value.trim();
    const inputField = document.getElementById('secretInput');
    
    if (!input) {
        return;
    }

    // Disable the decode button during animation
    const decodeBtn = document.querySelector('.decode-btn');
    decodeBtn.disabled = true;
    decodeBtn.style.opacity = '0.6';

    // Remove existing animations
    removeCipherAnimations();

    // Start juggling animation
    inputField.classList.add('juggling-symbols');
    
    // After juggling animation, start decoding transition
    setTimeout(() => {
        inputField.classList.remove('juggling-symbols');
        inputField.classList.add('decoding-effect');
        
        // Change the text halfway through the decoding animation
        setTimeout(() => {
            inputField.value = "I love you my husband";
        }, 600); // Halfway through the 1.2s animation
        
    }, 800); // After juggling animation completes

    // Apply final decoded styling after all animations
    setTimeout(() => {
        inputField.classList.remove('decoding-effect');
        
        // Add final decoded styling
        inputField.style.background = 'rgba(255, 105, 180, 0.3)';
        inputField.style.color = '#ff1493';
        inputField.style.fontWeight = 'bold';
        inputField.style.boxShadow = '0 0 20px rgba(255, 105, 180, 0.5)';
        
        // Re-enable decode button
        decodeBtn.disabled = false;
        decodeBtn.style.opacity = '1';
        
    }, 2000); // Total animation time: 800ms juggling + 1200ms decoding
}

function resetDecoder() {
    const inputField = document.getElementById('secretInput');
    const decodeBtn = document.querySelector('.decode-btn');
    
    inputField.value = '★◆♠▲♦◇♣●▼◆';
    
    // Reset input field styling
    inputField.style.background = '';
    inputField.style.color = '';
    inputField.style.fontWeight = '';
    inputField.style.boxShadow = '';
    
    // Remove all animation classes
    removeCipherAnimations();
    
    // Re-enable decode button
    decodeBtn.disabled = false;
    decodeBtn.style.opacity = '1';
    
    // Re-add cipher animations
    setTimeout(() => {
        addCipherAnimations();
    }, 100);
    
    document.getElementById('resultContainer').innerHTML = '<div class="placeholder-text">Your decoded message will appear here... ✨</div>';
}

function addCipherAnimations() {
    const inputField = document.getElementById('secretInput');
    const currentValue = inputField.value;
    
    // Only animate if it contains cipher symbols
    if (currentValue === '★◆♠▲♦◇♣●▼◆') {
        inputField.classList.add('animated', 'shimmer', 'floating-symbols');
    }
}

function removeCipherAnimations() {
    const inputField = document.getElementById('secretInput');
    inputField.classList.remove('animated', 'shimmer', 'floating-symbols', 'juggling-symbols', 'decoding-effect');
}

// Allow Enter key to decode
document.getElementById('secretInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        decodeMessage();
    }
});

// Auto-focus on input when page loads and add animations
window.onload = function() {
    const inputField = document.getElementById('secretInput');
    inputField.focus();
    
    // Add animated classes for cipher symbols
    addCipherAnimations();
};