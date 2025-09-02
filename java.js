  // Initialize AOS animations
    document.addEventListener('DOMContentLoaded', function() {
      // Initialize AOS
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });

      // Get all pages
      const pages = document.querySelectorAll('.page');
      const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

      // Navigation functionality
      navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Get the target page id from the href
          const targetId = this.getAttribute('href').substring(1);
          
          // Hide all pages
          pages.forEach(page => {
            page.style.display = 'none';
          });
          
          // Show the target page
          const targetPage = document.getElementById(targetId);
          if (targetPage) {
            targetPage.style.display = 'block';
          }
          
          // Update active state in navbar
          navLinks.forEach(navLink => {
            navLink.classList.remove('active');
          });
          this.classList.add('active');
          
          // Close the navbar if it's expanded (mobile view)
          const navbarCollapse = document.querySelector('.navbar-collapse');
          if (navbarCollapse.classList.contains('show')) {
            const bsNavbar = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsNavbar) bsNavbar.hide();
          }
          
          // Scroll to top
          window.scrollTo(0, 0);
        });
      });

      // Shop Now button functionality
      const shopNowBtns = document.querySelectorAll('#shop-now-btn, #shop-now-btn2, #shop-now-btn3');
      shopNowBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          // Hide all pages
          pages.forEach(page => {
            page.style.display = 'none';
          });
          
          // Show the shop page
          document.getElementById('shop').style.display = 'block';
          
          // Update active state in navbar
          navLinks.forEach(navLink => {
            navLink.classList.remove('active');
          });
          document.querySelector('a[href="#shop"]').classList.add('active');
          
          // Scroll to top
          window.scrollTo(0, 0);
        });
      });

      // Customize button functionality
      const customizeBtns = document.querySelectorAll('#customize-btn, #customize-btn2, #customize-btn3');
      customizeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          // Hide all pages
          pages.forEach(page => {
            page.style.display = 'none';
          });
          
          // Show the customize page
          document.getElementById('customize').style.display = 'block';
          
          // Update active state in navbar
          navLinks.forEach(navLink => {
            navLink.classList.remove('active');
          });
          document.querySelector('a[href="#customize"]').classList.add('active');
          
          // Scroll to top
          window.scrollTo(0, 0);
        });
      });

      // View all products button
      const viewAllProductsBtn = document.getElementById('view-all-products-btn');
      if (viewAllProductsBtn) {
        viewAllProductsBtn.addEventListener('click', function() {
          // Hide all pages
          pages.forEach(page => {
            page.style.display = 'none';
          });
          
          // Show the shop page
          document.getElementById('shop').style.display = 'block';
          
          // Update active state in navbar
          navLinks.forEach(navLink => {
            navLink.classList.remove('active');
          });
          document.querySelector('a[href="#shop"]').classList.add('active');
          
          // Scroll to top
          window.scrollTo(0, 0);
        });
      }

      // Continue shopping button
      const continueShoppingBtn = document.getElementById('continue-shopping-btn');
      if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', function() {
          // Hide all pages
          pages.forEach(page => {
            page.style.display = 'none';
          });
          
          // Show the shop page
          document.getElementById('shop').style.display = 'block';
          
          // Update active state in navbar
          navLinks.forEach(navLink => {
            navLink.classList.remove('active');
          });
          document.querySelector('a[href="#shop"]').classList.add('active');
          
          // Scroll to top
          window.scrollTo(0, 0);
        });
      }

      // View product detail buttons
      const viewProductBtns = document.querySelectorAll('.view-product-btn');
      viewProductBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          // Get product id
          const productId = this.getAttribute('data-product-id');
          
          // Hide all pages
          pages.forEach(page => {
            page.style.display = 'none';
          });
          
          // Show the customize/product detail page
          document.getElementById('customize').style.display = 'block';
          
          // Update active state in navbar
          navLinks.forEach(navLink => {
            navLink.classList.remove('active');
          });
          document.querySelector('a[href="#customize"]').classList.add('active');
          
          // Scroll to top
          window.scrollTo(0, 0);
        });
      });

      // Color swatches
      const colorSwatches = document.querySelectorAll('.color-swatch');
      colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', function() {
          // Remove active class from all swatches
          const parentElement = this.parentElement;
          parentElement.querySelectorAll('.color-swatch').forEach(s => {
            s.classList.remove('active');
          });
          
          // Add active class to clicked swatch
          this.classList.add('active');
        });
      });

      // Size options
      const sizeOptions = document.querySelectorAll('.size-option');
      sizeOptions.forEach(option => {
        option.addEventListener('click', function() {
          // Remove active class from all options
          const parentElement = this.parentElement;
          parentElement.querySelectorAll('.size-option').forEach(o => {
            o.classList.remove('active');
          });
          
          // Add active class to clicked option
          this.classList.add('active');
        });
      });

      // Quantity selectors
      const decreaseQtyBtns = document.querySelectorAll('.decrease-quantity');
      const increaseQtyBtns = document.querySelectorAll('.increase-quantity');
      
      decreaseQtyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          const input = this.nextElementSibling;
          let value = parseInt(input.value);
          if (value > 1) {
            value--;
            input.value = value;
          }
        });
      });
      
      increaseQtyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          const input = this.previousElementSibling;
          let value = parseInt(input.value);
          value++;
          input.value = value;
        });
      });

      // Monogram preview
      const monogramInput = document.getElementById('monogramText');
      const monogramPreview = document.getElementById('monogramPreview');
      const monogramPosition = document.getElementById('monogramPosition');
      
      if (monogramInput && monogramPreview && monogramPosition) {
        monogramInput.addEventListener('input', updateMonogramPreview);
        monogramPosition.addEventListener('change', updateMonogramPreview);
        
        function updateMonogramPreview() {
          const text = monogramInput.value;
          const position = monogramPosition.value !== 'Position' ? monogramPosition.value : '';
          
          if (text) {
            monogramPreview.textContent = `${text} ${position ? '(' + position + ')' : ''}`;
            monogramPreview.style.display = 'inline-block';
          } else {
            monogramPreview.textContent = '';
            monogramPreview.style.display = 'none';
          }
        }
      }

      // Add to Cart button
      const addToCartBtn = document.getElementById('add-to-cart-btn');
      if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
          // In a real app, we'd add the product to the cart in localStorage here
          alert('Product added to cart! (This is a prototype, the cart functionality will be added later)');
          
          // Update cart counter for demonstration
          const cartCounter = document.getElementById('cart-counter');
          cartCounter.textContent = '1';
        });
      }

      // Checkout button
      const checkoutBtn = document.getElementById('checkout-btn');
      if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
          // Hide all pages
          pages.forEach(page => {
            page.style.display = 'none';
          });
          
          // Show the checkout page
          document.getElementById('checkout').style.display = 'block';
          
          // Scroll to top
          window.scrollTo(0, 0);
        });
      }

      // Place order button
      const placeOrderBtn = document.getElementById('place-order-btn');
      if (placeOrderBtn) {
        placeOrderBtn.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Hide all pages
          pages.forEach(page => {
            page.style.display = 'none';
          });
          
          // Show the confirmation page
          document.getElementById('confirmation').style.display = 'block';
          
          // Scroll to top
          window.scrollTo(0, 0);
          
          // Reset cart counter
          const cartCounter = document.getElementById('cart-counter');
          cartCounter.textContent = '0';
        });
      }

      // Continue shopping from confirmation
      const continueShoppingFromConfirmation = document.getElementById('continue-shopping-from-confirmation');
      if (continueShoppingFromConfirmation) {
        continueShoppingFromConfirmation.addEventListener('click', function() {
          // Hide all pages
          pages.forEach(page => {
            page.style.display = 'none';
          });
          
          // Show the home page
          document.getElementById('home').style.display = 'block';
          
          // Update active state in navbar
          navLinks.forEach(navLink => {
            navLink.classList.remove('active');
          });
          document.querySelector('a[href="#home"]').classList.add('active');
          
          // Scroll to top
          window.scrollTo(0, 0);
        });
      }

      // Profile navigation
      const profileNavLinks = document.querySelectorAll('.profile-nav a');
      const profileSections = document.querySelectorAll('.profile-section');
      
      profileNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          if (this.classList.contains('text-danger')) return; // Skip for logout button
          
          e.preventDefault();
          
          // Get target section
          const targetId = this.getAttribute('data-target');
          
          // Hide all sections
          profileSections.forEach(section => {
            section.style.display = 'none';
          });
          
          // Show target section
          document.getElementById(targetId).style.display = 'block';
          
          // Update active state
          profileNavLinks.forEach(navLink => {
            navLink.classList.remove('active');
          });
          this.classList.add('active');
        });
      });

      // Price range slider
      const priceRange = document.getElementById('priceRange');
      const priceValue = document.getElementById('priceValue');
      
      if (priceRange && priceValue) {
        priceRange.addEventListener('input', function() {
          priceValue.textContent = `$${this.value}`;
        });
      }

      // Show default (home) page
      pages.forEach(page => {
        if (page.id === 'home') {
          page.style.display = 'block';
        } else {
          page.style.display = 'none';
        }
      });
    });
 