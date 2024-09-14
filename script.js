// Function to switch between different sections
function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Simulating a basic form submission for the Contact Us section
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for contacting us! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Forum functionality: Toggle comments section
    const forumLinks = document.querySelectorAll('.forum-post a');
    forumLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Redirecting to the forum discussion page...');
            // Simulate redirection to a specific forum thread
        });
    });

    // JavaScript for opening/closing the modal and calculating water usage
    // Open the modal when the link is clicked
    const waterCalculatorLink = document.getElementById("waterCalculatorLink");
    if (waterCalculatorLink) {
        waterCalculatorLink.addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById("waterUsageModal").style.display = "flex";
        });
    }

    // Close the modal when the close button is clicked
    const closeModalBtn = document.querySelector(".close-btn");
    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", function() {
            document.getElementById("waterUsageModal").style.display = "none";
        });
    }

    // Calculate water usage
    window.calculateWaterUsage = function() {
        // Get values from the input fields
        let shower = parseFloat(document.getElementById('shower').value) || 0;
        let laundry = parseFloat(document.getElementById('laundry').value) || 0;
        let dishwashing = parseFloat(document.getElementById('dishwashing').value) || 0;
        let toilet = parseFloat(document.getElementById('toilet').value) || 0;
        let garden = parseFloat(document.getElementById('garden').value) || 0;

        // Calculate total water usage
        let totalUsage = shower + laundry + dishwashing + toilet + garden;

        // Calculate potential savings (assuming a 10% reduction in water usage for each activity)
        let savings = totalUsage * 0.10;

        // Update the result in the DOM
        document.getElementById('totalUsage').innerText = totalUsage.toFixed(2);
        document.getElementById('potentialSavings').innerText = savings.toFixed(2);
    };

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        let modal = document.getElementById('waterUsageModal');
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Example of dynamically adding a comment
    window.addComment = function(event) {
        event.preventDefault();

        const commentInput = document.getElementById('commentInput');
        const commentText = commentInput.value.trim();
        if (commentText) {
            const commentSection = document.getElementById('commentsSection');
            const newComment = document.createElement('div');
            newComment.classList.add('comment');
            newComment.innerHTML = `
                <h4>Anonymous User</h4>
                <p>${commentText}</p>
            `;
            commentSection.appendChild(newComment);
            commentInput.value = ''; // Clear input after adding comment
        } else {
            alert('Please write a comment before submitting.');
        }
    };
});
