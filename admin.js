//  Admin Panel JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Admin Login Form
  const adminLoginForm = document.querySelector('#adminLoginForm form');
  if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Demo: Show admin dashboard on login
      document.getElementById('adminAuth').classList.add('hidden');
      document.getElementById('adminDashboard').classList.remove('hidden');
    });
  }
  
  // Admin Logout Button
  const adminLogoutBtn = document.getElementById('adminLogoutBtn');
  if (adminLogoutBtn) {
    adminLogoutBtn.addEventListener('click', function() {
      document.getElementById('adminDashboard').classList.add('hidden');
      document.getElementById('adminAuth').classList.remove('hidden');
    });
  }
  
  // Sidebar Menu
  const sidebarMenuItems = document.querySelectorAll('.sidebar-menu li');
  const adminPanels = document.querySelectorAll('.admin-panel');
  const panelTitle = document.getElementById('panelTitle');
  
  sidebarMenuItems.forEach(item => {
    item.addEventListener('click', function() {
      // Remove active class from all menu items
      sidebarMenuItems.forEach(menuItem => menuItem.classList.remove('active'));
      
      // Add active class to clicked menu item
      this.classList.add('active');
      
      // Get panel to show
      const panelToShow = this.getAttribute('data-panel');
      
      // Hide all panels
      adminPanels.forEach(panel => panel.classList.remove('active'));
      
      // Show selected panel
      document.getElementById(`${panelToShow}Panel`).classList.add('active');
      
      // Update panel title
      if (panelTitle) {
        panelTitle.textContent = this.textContent.trim();
      }
    });
  });
  
  // Mobile sidebar toggle
  const menuToggle = document.getElementById('menuToggle');
  const adminSidebar = document.getElementById('adminSidebar');
  const adminContent = document.querySelector('.admin-content');
  const adminFooter = document.querySelector('.admin-footer');
  
  if (menuToggle && adminSidebar) {
    menuToggle.addEventListener('click', function() {
      adminSidebar.classList.toggle('active');
      adminSidebar.classList.toggle('collapsed');
      adminContent.classList.toggle('expanded');
      if (adminFooter) adminFooter.classList.toggle('expanded');
    });
  }
  
  // Report Tabs
  const reportTabs = document.querySelectorAll('.report-tab');
  const reportContents = document.querySelectorAll('.report-content');
  
  reportTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs
      reportTabs.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked tab
      this.classList.add('active');
      
      // Get report to show
      const reportToShow = this.getAttribute('data-report');
      
      // Hide all report contents
      reportContents.forEach(content => content.classList.remove('active'));
      
      // Show selected report content
      document.getElementById(`${reportToShow}Report`).classList.add('active');
    });
  });
  
  // Settings Tabs
  const settingsTabs = document.querySelectorAll('.settings-tab');
  const settingsContents = document.querySelectorAll('.settings-content');
  
  settingsTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs
      settingsTabs.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked tab
      this.classList.add('active');
      
      // Get settings to show
      const settingsToShow = this.getAttribute('data-settings');
      
      // Hide all settings contents
      settingsContents.forEach(content => content.classList.remove('active'));
      
      // Show selected settings content
      document.getElementById(`${settingsToShow}Settings`).classList.add('active');
    });
  });
  
  // Table filters
  const vendorStatusFilter = document.getElementById('vendorStatusFilter');
  const vendorCategoryFilter = document.getElementById('vendorCategoryFilter');
  
  // For demo purposes, we'll just log the filter changes
  if (vendorStatusFilter) {
    vendorStatusFilter.addEventListener('change', function() {
      console.log('Filter vendors by status:', this.value);
      // In a real application, you would filter the table data here
    });
  }
  
  if (vendorCategoryFilter) {
    vendorCategoryFilter.addEventListener('change', function() {
      console.log('Filter vendors by category:', this.value);
      // In a real application, you would filter the table data here
    });
  }
  
  // Table actions (edit, view, delete)
  const actionButtons = document.querySelectorAll('.action-btn');
  
  actionButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const action = this.classList.contains('edit-btn') ? 'edit' : 
                     this.classList.contains('view-btn') ? 'view' : 
                     this.classList.contains('delete-btn') ? 'delete' : 
                     this.classList.contains('download-btn') ? 'download' : '';
      
      const row = this.closest('tr');
      const id = row.cells[0].textContent;
      const name = row.cells[1].textContent.trim();
      
      console.log(`${action} action on ${id} - ${name}`);
      
      if (action === 'delete') {
        if (confirm(`Are you sure you want to delete ${name}?`)) {
          // In a real application, you would delete the item here
          row.style.opacity = '0.5';
          setTimeout(() => {
            row.remove();
          }, 500);
        }
      }
    });
  });
  
  // Pagination
  const paginationButtons = document.querySelectorAll('.pagination-btn');
  
  paginationButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const currentActive = this.parentElement.querySelector('.active');
      if (currentActive) {
        currentActive.classList.remove('active');
      }
      
      if (this.textContent !== '«' && this.textContent !== '»') {
        this.classList.add('active');
      }
      
      // In a real application, you would load the corresponding page data here
      console.log('Navigate to page:', this.textContent);
    });
  });
  
  // Admin search
  const adminSearch = document.getElementById('adminSearch');
  
  if (adminSearch) {
    adminSearch.addEventListener('input', function() {
      console.log('Search for:', this.value);
      // In a real application, you would filter the content based on the search term
    });
  }
  
  // Notification bell
  const notificationBell = document.querySelector('.notification-bell');
  
  if (notificationBell) {
    notificationBell.addEventListener('click', function() {
      alert('Notification panel would open here.');
      // In a real application, you would show a dropdown with notifications
    });
  }
  
  // Chart animations
  const animateCharts = () => {
    const chartBars = document.querySelectorAll('.chart-bar');
    const chartDots = document.querySelectorAll('.chart-dot');
    
    chartBars.forEach((bar, index) => {
      setTimeout(() => {
        bar.style.height = bar.style.height || '0%';
      }, index * 100);
    });
    
    chartDots.forEach((dot, index) => {
      dot.style.setProperty('--index', index);
    });
  };
  
  // Run chart animations when report panel is shown
  const reportsPanel = document.getElementById('reportsPanel');
  if (reportsPanel) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCharts();
          observer.unobserve(entry.target);
        }
      });
    });
    
    observer.observe(reportsPanel);
  }
  
  // Animate charts when dashboard is shown
  const dashboardPanel = document.getElementById('dashboardPanel');
  if (dashboardPanel) {
    setTimeout(animateCharts, 500);
  }
});
  