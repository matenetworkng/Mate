// Download form handler
document.getElementById('downloadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const url = this.querySelector('input[type="url"]').value;
    const mediaType = this.querySelector('select').value;
    const statusDiv = document.getElementById('downloadStatus');
    
    if (!url || !mediaType) {
        showStatus('Please fill in all fields', 'error');
        return;
    }
    
    // Validate URL
    try {
        new URL(url);
    } catch (error) {
        showStatus('Please enter a valid URL', 'error');
        return;
    }
    
    // Process download
    processDownload(url, mediaType, statusDiv);
});

// Show status message
function showStatus(message, type) {
    const statusDiv = document.getElementById('downloadStatus');
    statusDiv.innerHTML = `<div class="status-message status-${type}">${message}</div>`;
    
    // Auto-clear error and success messages after 4 seconds
    if (type !== 'loading') {
        setTimeout(() => {
            statusDiv.innerHTML = '';
        }, 4000);
    }
}

// Process download function
function processDownload(url, mediaType, statusDiv) {
    showStatus('Processing your download...', 'loading');
    
    const btn = document.querySelector('.download-form button');
    const originalText = btn.textContent;
    btn.disabled = true;
    
    // Simulate download process
    setTimeout(() => {
        const messages = {
            video: '🎬 Video download started!',
            image: '🖼️ Image download started!',
            music: '🎵 Music download started!',
            document: '📄 Document download started!'
        };
        
        const message = messages[mediaType] || 'Download started!';
        showStatus(`${message} Your file will be ready soon.`, 'success');
        
        btn.textContent = originalText;
        btn.disabled = false;
        document.getElementById('downloadForm').reset();
    }, 1500);
}

// Category card click handler
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('h3').textContent;
        console.log(`Selected: ${title}`);
        // Scroll to download form
        document.querySelector('.download-section').scrollIntoView({ behavior: 'smooth' });
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Get Started button
document.querySelector('.btn-primary').addEventListener('click', function() {
    document.querySelector('.download-section').scrollIntoView({ behavior: 'smooth' });
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎬 Mate Media Download Website - Ready!');
    console.log('Version: 1.0.0');
});
