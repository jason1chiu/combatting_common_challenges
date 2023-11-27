document.addEventListener('DOMContentLoaded', function() {
  // Function to show a section and hide others
  function showSection(sectionId) {
      // Hide all sections
      document.querySelectorAll('.content-section').forEach(function(section) {
          section.style.display = 'none';
      });

      // Show the selected section
      document.getElementById(sectionId).style.display = 'block';
  }

  // Add click event listener to each navbar link
  document.querySelectorAll('.nav-link').forEach(function(link) {
      link.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent default anchor behavior
          var sectionId = this.getAttribute('href').substring(1); // Remove '#' from href
          showSection(sectionId);
      });
  });
});

