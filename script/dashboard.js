

const menuLinks = document.querySelectorAll('.menu a');
const sections = document.querySelectorAll('section'); // Get all the sections

// Initially hide all sections except 'Today's News'
sections.forEach(section => {
    if (section.id !== 'todays-news') {
        section.style.display = 'none';
    }
});

// Add event listeners to each menu link
menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior of the <a> tag

        // Remove the 'selected' class from all links
        menuLinks.forEach(link => link.classList.remove('selected'));

        // Add 'selected' class to the clicked link
        this.classList.add('selected');

        // Hide all sections
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Show the section corresponding to the clicked link
        const targetId = this.getAttribute('href').substring(1);  // Get the ID from the href (without '#')
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = 'block';  // Show the corresponding section
        }
    });
});


// Fetch the JSON file
