document.addEventListener('DOMContentLoaded', function() {

    // SECTION: Utility - Update Copyright Year
    // Dynamically sets the current year in the footer.
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // SECTION: Functional - Authentication Handlers 
    // Placeholders for linking to Login and Registration pages/modals.

    const loginBtn = document.getElementById('btnLogin');
    const registerBtn = document.getElementById('btnRegister');

    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            // Functional Requirement: User Login 
            alert('Redirecting to the Login Page [Placeholder]. (source: 152)');
            // window.location.href = '/login.html'; // Example future implementation
        });
    }

    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            // Functional Requirement: User Registration 
            alert('Redirecting to the Registration Page [Placeholder]. (source: 152)');
            // window.location.href = '/register.html'; // Example future implementation
        });
    }

    // SECTION: Usability - Smooth Scrolling 
    // Simple smooth scrolling for internal navigation links.
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // workflow: Customer opens...browses packages 
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});