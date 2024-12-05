 // JavaScript to set the current year dynamically
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    function filterProjects() {
        const filterValue = document.getElementById('filter').value;
        const projectItems = document.querySelectorAll('.project-item');

        projectItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-type') === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
