document.getElementById('serviceType').addEventListener('change', function () {
    document.querySelectorAll('.serviceDetails').forEach(div => {
      div.classList.add('hidden');
    });
});

/* =================== Resume ========================== */

