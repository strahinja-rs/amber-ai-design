// ==================== Amber Dashboard ==================== //

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initDetailPanel();
  initSearch();
  initToggles();
  initKeyboardShortcuts();
});

// ==================== Navigation ==================== //

function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const views = document.querySelectorAll('.view');

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const viewId = item.dataset.view;

      // Update nav items
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');

      // Update views
      views.forEach(view => view.classList.remove('active'));
      const targetView = document.getElementById(`view-${viewId}`);
      if (targetView) {
        targetView.classList.add('active');
      }

      // If switching to search, focus the input
      if (viewId === 'search') {
        setTimeout(() => {
          const searchInput = document.getElementById('search-query');
          if (searchInput) searchInput.focus();
        }, 100);
      }
    });
  });
}

// ==================== Detail Panel ==================== //

function initDetailPanel() {
  const panel = document.getElementById('detail-panel');
  const closeBtn = document.getElementById('detail-close');
  const overlay = panel.querySelector('.detail-overlay');
  const conversationCards = document.querySelectorAll('.conversation-card');

  // Open panel when clicking conversation cards
  conversationCards.forEach(card => {
    card.addEventListener('click', () => {
      openDetailPanel(card.dataset.id);
    });
  });

  // Close panel
  closeBtn.addEventListener('click', closeDetailPanel);
  overlay.addEventListener('click', closeDetailPanel);

  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('open')) {
      closeDetailPanel();
    }
  });
}

function openDetailPanel(conversationId) {
  const panel = document.getElementById('detail-panel');
  panel.classList.add('open');
  document.body.style.overflow = 'hidden';

  // In a real app, we'd load the conversation data here based on conversationId
  // For now, the static content is already in the HTML
}

function closeDetailPanel() {
  const panel = document.getElementById('detail-panel');
  panel.classList.remove('open');
  document.body.style.overflow = '';
}

// ==================== Search ==================== //

function initSearch() {
  const headerSearchInput = document.querySelector('.search-bar .search-input');
  const searchQuery = document.getElementById('search-query');
  const suggestionChips = document.querySelectorAll('.suggestion-chip');

  // Header search focuses main search
  if (headerSearchInput) {
    headerSearchInput.addEventListener('focus', () => {
      // Switch to search view
      document.querySelector('[data-view="search"]').click();
    });
  }

  // Suggestion chips fill search input
  suggestionChips.forEach(chip => {
    chip.addEventListener('click', () => {
      if (searchQuery) {
        searchQuery.value = chip.textContent.replace(/"/g, '');
        searchQuery.focus();
      }
    });
  });

  // Search input behavior
  if (searchQuery) {
    searchQuery.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        // In a real app, we'd perform the search here
        console.log('Searching for:', searchQuery.value);
      }
    });
  }
}

// ==================== Toggles ==================== //

function initToggles() {
  const toggles = document.querySelectorAll('.toggle');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('toggle-on');
      const setting = toggle.dataset.setting;
      const isOn = toggle.classList.contains('toggle-on');
      console.log(`Setting ${setting}: ${isOn}`);
    });
  });
}

// ==================== Keyboard Shortcuts ==================== //

function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // "/" to focus search
    if (e.key === '/' && !isInputFocused()) {
      e.preventDefault();
      document.querySelector('[data-view="search"]').click();
    }

    // "1-4" to switch views
    if (!isInputFocused()) {
      const viewMap = {
        '1': 'timeline',
        '2': 'search',
        '3': 'people',
        '4': 'settings'
      };

      if (viewMap[e.key]) {
        e.preventDefault();
        document.querySelector(`[data-view="${viewMap[e.key]}"]`).click();
      }
    }
  });
}

function isInputFocused() {
  const activeElement = document.activeElement;
  return activeElement.tagName === 'INPUT' ||
         activeElement.tagName === 'TEXTAREA' ||
         activeElement.isContentEditable;
}

// ==================== Utility ==================== //

// Format duration
function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Format date
function formatDate(date) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (date >= today) {
    return 'Today';
  } else if (date >= yesterday) {
    return 'Yesterday';
  } else {
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric'
    });
  }
}

// Format time
function formatTime(date) {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}
