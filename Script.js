// JavaScript to switch between tabs
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.tab');
    const sections = document.querySelectorAll('.content-tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active-tab');
            });

            // Show the selected section
            document.getElementById(targetTab).classList.add('active-tab');
        });
    });

    // Set the first tab to be active by default
    document.querySelector('.tab').click();

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode', darkModeToggle.checked);
    });
});
