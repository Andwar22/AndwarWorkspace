
// #region ========== RUNNING TEXT
  const scrollers = document.querySelectorAll(".scroller");

  // If a user hasn't opted in for recuded motion, then we add the animation
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", true);

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
// #endregion ======= RUNNING TEXT END

// #region ========== ACCORDION BOOKMARK
const accordionHeaders = document.querySelectorAll('.bookmark-header');
  const toggleAllButton = document.getElementById('collapse-all');
  let allAccordionsOpen = false;

  toggleAllButton.addEventListener('click', () => {
    allAccordionsOpen = !allAccordionsOpen;
    const accordionContents = document.querySelectorAll('.bookmark-content');

    if (allAccordionsOpen) {
      accordionContents.forEach(content => {
        content.classList.add('collapsed');
        content.parentElement.classList.add('collapsed');
      });
      toggleAllButton.classList.add('collapsed');
    } else {
      accordionContents.forEach(content => {
        content.classList.remove('collapsed');
        content.parentElement.classList.remove('collapsed');
      });
      toggleAllButton.classList.remove('collapsed');
    }
  });

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const accordionItem = header.parentElement;
      const accordionContent = accordionItem.querySelector('.bookmark-content');
      
      accordionContent.classList.toggle('collapsed');
      accordionItem.classList.toggle('collapsed');
    });
  });
// #endregion ======= ACCORDION BOOKMARK END

// #region ========== GET IP ADDRESS
document.addEventListener("DOMContentLoaded", function() {
  var ipAddressDisplay = document.getElementById("ip-address");
  var copyButton = document.getElementById("copy-button");
  var copyMessage = document.getElementById("copy-message");

  // Lakukan permintaan ke layanan IPify
  fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
          // Tampilkan alamat IP pada elemen HTML
          ipAddressDisplay.textContent = data.ip;

          // Tambahkan event listener untuk tombol copy
          copyButton.addEventListener('click', function() {
              // Salin alamat IP ke clipboard
              var textToCopy = data.ip;
              navigator.clipboard.writeText(textToCopy)
                  .then(function() {
                      // Tampilkan pesan di dalam elemen <span>
                      copyMessage.textContent = 'IP Address copied to clipboard!';
                      copyMessage.style.color = 'green';
                  })
                  .catch(function(err) {
                      console.error('Failed to copy IP address: ', err);
                      // Tampilkan pesan error di dalam elemen <span>
                      copyMessage.textContent = 'Failed to copy IP address!';
                      copyMessage.style.color = 'red';
                  });
          });
      })
      .catch(error => {
          console.error('Error fetching IP address:', error);
          ipAddressDisplay.textContent = 'Unable to fetch IP address';
      });
});
// #endregion ======= GET IP ADDRESS END






// #region ========== XXX
// #endregion ======= XXX END