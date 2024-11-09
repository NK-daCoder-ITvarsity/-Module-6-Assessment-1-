 // JavaScript for image modal functionality
const openImageModal = (src) => {
    const modal = document.createElement('div');
    modal.classList.add('fixed', 'inset-0', 'bg-black', 'bg-opacity-70', 'flex', 'items-center', 'justify-center', 'z-50');
    modal.innerHTML = `
      <div class="relative">
        <img src="${src}" class="max-w-full h-full rounded-lg shadow-lg">
        <button onclick="closeImageModal()" class="absolute top-2 right-2 text-2xl text-white">✕</button>
      </div>
    `;
    document.body.appendChild(modal);
}

const closeImageModal = () => {
    const modal = document.querySelector('.fixed.inset-0');
    if (modal) {
        modal.remove()
    };
}