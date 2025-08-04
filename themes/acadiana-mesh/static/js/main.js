// Main JavaScript for Acadiana Mesh theme
(function() {
    'use strict';

    // DOM elements
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');

    // Initialize theme
    function initTheme() {
        const currentTheme = localStorage.getItem('theme') || 
                           (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateThemeIcon(currentTheme);
    }

    // Update theme icon
    function updateThemeIcon(theme) {
        if (themeIcon) {
            themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
    }

    // Toggle theme
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    }

    // Toggle mobile menu
    function toggleMobileMenu() {
        if (navToggle && navMenu) {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Update ARIA attributes for accessibility
            const expanded = navMenu.classList.contains('active');
            navToggle.setAttribute('aria-expanded', expanded);
        }
    }

    // Close mobile menu when clicking on a link
    function closeMobileMenu() {
        if (navToggle && navMenu) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    }

    // Handle window resize
    function handleResize() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    }

    // Handle escape key
    function handleKeyPress(event) {
        if (event.key === 'Escape') {
            closeMobileMenu();
        }
    }

    // Smooth scroll for anchor links
    function smoothScroll(event) {
        const target = event.target;
        if (target.tagName === 'A' && target.getAttribute('href').startsWith('#')) {
            event.preventDefault();
            const targetId = target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                closeMobileMenu();
            }
        }
    }

    // Initialize on DOM content loaded
    function init() {
        // Initialize theme
        initTheme();

        // Theme toggle event listener
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }

        // Mobile menu toggle event listener
        if (navToggle) {
            navToggle.addEventListener('click', toggleMobileMenu);
            // Add ARIA attributes for accessibility
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.setAttribute('aria-controls', 'nav-menu');
        }

        // Close mobile menu when clicking on nav links
        if (navMenu) {
            const navLinks = navMenu.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', closeMobileMenu);
            });
        }

        // Handle window resize
        window.addEventListener('resize', handleResize);

        // Handle escape key
        document.addEventListener('keydown', handleKeyPress);

        // Handle smooth scrolling for anchor links
        document.addEventListener('click', smoothScroll);

        // Listen for system theme changes
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', function(e) {
                // Only update if user hasn't manually set a preference
                if (!localStorage.getItem('theme')) {
                    const newTheme = e.matches ? 'dark' : 'light';
                    document.documentElement.setAttribute('data-theme', newTheme);
                    updateThemeIcon(newTheme);
                }
            });
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (navMenu && navToggle) {
                const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
                
                if (!isClickInsideNav && navMenu.classList.contains('active')) {
                    closeMobileMenu();
                }
            }
        });

        // Add loading class removal for smooth transitions
        document.body.classList.add('loaded');
    }

    // Utility function to debounce events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Optimized resize handler
    const debouncedResize = debounce(handleResize, 250);
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Replace the resize listener with the debounced version
    window.removeEventListener('resize', handleResize);
    window.addEventListener('resize', debouncedResize);

    // Progressive enhancement for JavaScript features
    document.documentElement.classList.add('js-enabled');

})();

