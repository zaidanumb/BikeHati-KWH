// Data Sepeda
const bikeData = {
    bmx: [
        {
            id: 1,
            name: 'Pacific Sport',
            brand: 'Pacific',
            image: 'listSepeda/BMX/Pacific.png',
            pricePerHour: 50000,
            description: 'BMX sport dengan desain aerodinamis dan frame yang ringan. Cocok untuk pemula yang ingin belajar trick dan melakukan akselerasi tinggi.',
            outlets: ['Kelapa Gading', 'Taman Kota', 'Pusat Olahraga']
        },
        {
            id: 2,
            name: 'United Pro',
            brand: 'United',
            image: 'listSepeda/BMX/United.png',
            pricePerHour: 55000,
            description: 'BMX profesional dengan wheelset yang responsif dan pedal anti slip. Dirancang untuk performa maksimal dalam kompetisi.',
            outlets: ['Kelapa Gading', 'Taman Sentral', 'Stadiun']
        },
        {
            id: 3,
            name: 'Wimcycle Elite',
            brand: 'Wimcycle',
            image: 'listSepeda/BMX/Wimcycle.png',
            pricePerHour: 60000,
            description: 'BMX elite dengan material chromoly dan finishing premium. Performa terbaik untuk rider profesional dan trick ekstrem.',
            outlets: ['Kelapa Gading', 'Taman Kota', 'Pusat Olahraga', 'Stadiun']
        }
    ],
    sepedaGunung: [
        {
            id: 4,
            name: 'Polygon Pathfinder',
            brand: 'Polygon',
            image: 'listSepeda/sepedaGunung/Polygon.png',
            pricePerHour: 75000,
            description: 'Sepeda gunung dengan suspensi depan yang handal dan traksi tinggi. Ideal untuk trail menengah dan pemandangan alam yang menakjubkan.',
            outlets: ['Gunung Indah', 'Taman Alam', 'Pusat Petualangan']
        },
        {
            id: 5,
            name: 'United Mountain King',
            brand: 'United',
            image: 'listSepeda/sepedaGunung/United.png',
            pricePerHour: 80000,
            description: 'Mountain bike dengan full suspension dan ban bergerigi lebar. Sempurna untuk menakluhi medan berat dan off-road adventures.',
            outlets: ['Gunung Indah', 'Taman Alam', 'Hutan Lindung']
        },
        {
            id: 6,
            name: 'Wimcycle Explorer',
            brand: 'Wimcycle',
            image: 'listSepeda/sepedaGunung/Wimcycle.png',
            pricePerHour: 85000,
            description: 'Sepeda gunung premium dengan teknologi suspension terdepan dan frame yang tangguh. Untuk petualangan ekstrem dan downhill profesional.',
            outlets: ['Gunung Indah', 'Taman Alam', 'Pusat Petualangan', 'Hutan Lindung']
        }
    ],
    sepedaLipat: [
        {
            id: 7,
            name: 'Element Compact',
            brand: 'Element',
            image: 'listSepeda/sepedaLipat/Element.png',
            pricePerHour: 40000,
            description: 'Sepeda lipat ultra compact yang mudah dibawa dan disimpan. Cocok untuk urban commuting dan perjalanan dengan transportasi publik.',
            outlets: ['Pusat Kota', 'Terminal', 'Mall Central']
        },
        {
            id: 8,
            name: 'Polygon Fold Lite',
            brand: 'Polygon',
            image: 'listSepeda/sepedaLipat/Polygon.png',
            pricePerHour: 45000,
            description: 'Sepeda lipat ringan dengan gearing yang fleksibel. Sempurna untuk urban explorer yang minimal dan bergerak cepat.',
            outlets: ['Pusat Kota', 'Terminal', 'Stasiun']
        },
        {
            id: 9,
            name: 'United Minimax',
            brand: 'United',
            image: 'listSepeda/sepedaLipat/United.png',
            pricePerHour: 48000,
            description: 'Sepeda lipat dengan desain modern dan kenyamanan maksimal. Ideal untuk commuter yang menginginkan portabilitas dan style.',
            outlets: ['Pusat Kota', 'Terminal', 'Mall Central', 'Stasiun']
        }
    ],
    sepedaListrik: [
        {
            id: 10,
            name: 'Polygon E-Speed',
            brand: 'Polygon',
            image: 'listSepeda/sepedaListrik/Polygon.png',
            pricePerHour: 100000,
            description: 'Sepeda listrik dengan motor 250W dan baterai tahan lama. Jelajahi kota dengan kecepatan tinggi dan tanpa lelah.',
            outlets: ['Pusat Kota', 'Kawasan Bisnis', 'Taman Modern']
        },
        {
            id: 11,
            name: 'Selis E-Cruiser',
            brand: 'Selis',
            image: 'listSepeda/sepedaListrik/Selis.png',
            pricePerHour: 110000,
            description: 'E-bike cruiser yang nyaman dan powerful dengan teknologi regenerative braking. Rasakan kenyamanan maksimal setiap perjalanan.',
            outlets: ['Pusat Kota', 'Taman Modern', 'Kawasan Pantai']
        },
        {
            id: 12,
            name: 'United EMax',
            brand: 'United',
            image: 'listSepeda/sepedaListrik/United.png',
            pricePerHour: 120000,
            description: 'Premium e-bike dengan motor mid-drive dan display LCD yang canggih. Pengalaman bergerak yang futuristik dan efisien.',
            outlets: ['Pusat Kota', 'Kawasan Bisnis', 'Taman Modern', 'Kawasan Pantai']
        }
    ]
};

// Outlet data untuk dropdown
const allOutlets = {
    'Kelapa Gading': 'Jl. Lodan Raya, Jakarta Utara',
    'Taman Kota': 'Jl. Sudirman, Jakarta Pusat',
    'Pusat Olahraga': 'Jl. Gatot Subroto, Jakarta Selatan',
    'Taman Sentral': 'Jl. Thamrin, Jakarta Pusat',
    'Stadiun': 'Jl. Iran Raya, Jakarta Timur',
    'Gunung Indah': 'Jl. Bogor Raya, Bogor',
    'Taman Alam': 'Jl. Puncak, Bogor',
    'Pusat Petualangan': 'Jl. Alam Raya, Bogor',
    'Hutan Lindung': 'Jl. Hutan, Bogor',
    'Pusat Kota': 'Jl. Merdeka, Jakarta Pusat',
    'Terminal': 'Jl. Kampung Rambutan, Jakarta',
    'Mall Central': 'Jl. Sudirman, Jakarta Pusat',
    'Stasiun': 'Jl. Stasiun, Jakarta',
    'Kawasan Bisnis': 'Jl. Casablanca, Jakarta Selatan',
    'Taman Modern': 'Jl. Kemang, Jakarta Selatan',
    'Kawasan Pantai': 'Jl. Marina, Jakarta Utara'
};

// State
let currentCategory = 'bmx';
let selectedBike = null;
let selectedPaymentMethod = null;

// DOM Elements
const categoryButtons = document.querySelectorAll('.category-btn');
const bikesContainer = document.getElementById('bikesContainer');
const categoryTitle = document.getElementById('categoryTitle');
const categoryDesc = document.getElementById('categoryDesc');

const detailModal = document.getElementById('detailModal');
const rentalModal = document.getElementById('rentalModal');
const closeDetailBtn = document.getElementById('closeDetailBtn');
const closeRentalBtn = document.getElementById('closeRentalBtn');

const rentalForm = document.getElementById('rentalForm');
const rentalDuration = document.getElementById('rentalDuration');
const minusBtn = document.getElementById('minusBtn');
const plusBtn = document.getElementById('plusBtn');
const outletSelect = document.getElementById('outletSelect');
const paymentBtns = document.querySelectorAll('.payment-btn');
const notification = document.getElementById('notification');

const categoryDescriptions = {
    bmx: 'Sepeda BMX untuk trik dan performa maksimal',
    sepedaGunung: 'Sepeda gunung untuk penjelajahan alam liar',
    sepedaLipat: 'Sepeda lipat ringkas untuk mobilitas urban',
    sepedaListrik: 'Sepeda listrik untuk perjalanan modern'
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderBikes();
    setupEventListeners();
    populateOutlets();
});

// Setup Event Listeners
function setupEventListeners() {
    // Category buttons
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            switchCategory(category);
        });
    });

    // Modal close buttons
    closeDetailBtn.addEventListener('click', closeDetail);
    closeRentalBtn.addEventListener('click', closeRental);

    // Sewa Sekarang button
    document.getElementById('btnSewaSekarang').addEventListener('click', openRental);

    // Duration buttons
    minusBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (rentalDuration.value > 1) {
            rentalDuration.value = parseInt(rentalDuration.value) - 1;
            updatePriceSummary();
        }
    });

    plusBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (rentalDuration.value < 24) {
            rentalDuration.value = parseInt(rentalDuration.value) + 1;
            updatePriceSummary();
        }
    });

    rentalDuration.addEventListener('change', updatePriceSummary);

    // Payment method buttons
    paymentBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            selectPaymentMethod(btn);
        });
    });

    // Form submission
    rentalForm.addEventListener('submit', handleFormSubmit);

    // Close modal when clicking outside
    detailModal.addEventListener('click', (e) => {
        if (e.target === detailModal) closeDetail();
    });

    rentalModal.addEventListener('click', (e) => {
        if (e.target === rentalModal) closeRental();
    });
}

// Render bikes based on current category
function renderBikes() {
    const bikes = bikeData[currentCategory];
    bikesContainer.innerHTML = '';

    bikes.forEach(bike => {
        const card = document.createElement('div');
        card.className = 'bike-card';
        card.innerHTML = `
            <div class="bike-card-image">
                <img src="${bike.image}" alt="${bike.name}">
            </div>
            <div class="bike-card-info">
                <div class="bike-card-name">${bike.name}</div>
                <div class="bike-card-brand">${bike.brand}</div>
                <div class="bike-card-price">Rp ${bike.pricePerHour.toLocaleString('id-ID')}</div>
                <div class="bike-card-price-label">per jam</div>
            </div>
        `;

        card.addEventListener('click', () => showDetail(bike));
        bikesContainer.appendChild(card);
    });
}

// Switch category
function switchCategory(category) {
    currentCategory = category;

    // Update active button
    categoryButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        }
    });

    // Update title and description
    const titles = {
        bmx: 'BMX',
        sepedaGunung: 'Sepeda Gunung',
        sepedaLipat: 'Sepeda Lipat',
        sepedaListrik: 'Sepeda Listrik'
    };

    categoryTitle.textContent = titles[category];
    categoryDesc.textContent = categoryDescriptions[category];

    // Render bikes
    renderBikes();
}

// Show detail modal
function showDetail(bike) {
    selectedBike = bike;

    document.getElementById('detailImage').src = bike.image;
    document.getElementById('detailName').textContent = bike.name;
    document.getElementById('detailBrand').textContent = bike.brand;
    document.getElementById('detailPricePerHour').textContent = `Rp ${bike.pricePerHour.toLocaleString('id-ID')}`;
    document.getElementById('detailDesc').textContent = bike.description;

    const outletsList = document.getElementById('outletsList');
    outletsList.innerHTML = '';
    bike.outlets.forEach(outlet => {
        const li = document.createElement('li');
        li.textContent = outlet;
        outletsList.appendChild(li);
    });

    detailModal.classList.add('active');
}

// Close detail modal
function closeDetail() {
    detailModal.classList.remove('active');
}

// Open rental modal
function openRental() {
    closeDetail();
    rentalModal.classList.add('active');
    rentalForm.reset();
    selectedPaymentMethod = null;
    outletSelect.value = '';
    hideErrorNotification();

    // Clear payment button active state
    paymentBtns.forEach(btn => btn.classList.remove('active'));

    // Populate outlets dengan hanya outlet yang tersedia untuk sepeda ini
    populateAvailableOutlets();

    // Reset and update price summary
    rentalDuration.value = 1;
    updatePriceSummary();
}

// Close rental modal
function closeRental() {
    rentalModal.classList.remove('active');
}

// Populate outlets
function populateOutlets() {
    outletSelect.innerHTML = '<option value="">-- Pilih Outlet --</option>';
    Object.keys(allOutlets).forEach(outlet => {
        const option = document.createElement('option');
        option.value = outlet;
        option.textContent = outlet;
        outletSelect.appendChild(option);
    });
}

// Populate available outlets untuk sepeda yang dipilih
function populateAvailableOutlets() {
    if (!selectedBike) return;
    
    outletSelect.innerHTML = '<option value="">-- Pilih Outlet --</option>';
    selectedBike.outlets.forEach(outlet => {
        const option = document.createElement('option');
        option.value = outlet;
        option.textContent = outlet;
        outletSelect.appendChild(option);
    });
}

// Select payment method
function selectPaymentMethod(btn) {
    paymentBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedPaymentMethod = btn.getAttribute('data-payment');
    document.getElementById('selectedPayment').value = selectedPaymentMethod;
}

// Update price summary
function updatePriceSummary() {
    if (!selectedBike) return;

    const hours = parseInt(rentalDuration.value);
    const totalPrice = selectedBike.pricePerHour * hours;

    document.getElementById('pricePerHourSummary').textContent = `Rp ${selectedBike.pricePerHour.toLocaleString('id-ID')}`;
    document.getElementById('durationSummary').textContent = `${hours} jam`;
    document.getElementById('totalPrice').textContent = `Rp ${totalPrice.toLocaleString('id-ID')}`;
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();

    // Validation
    if (!document.getElementById('customerName').value) {
        showErrorNotification('Silakan isi nama lengkap');
        return;
    }

    if (!outletSelect.value) {
        showErrorNotification('Silakan pilih outlet');
        return;
    }

    if (!selectedPaymentMethod) {
        showErrorNotification('Silakan pilih metode pembayaran');
        return;
    }

    // Close modal and show notification
    closeRental();
    showNotification();

    // Reset form
    rentalForm.reset();
    selectedPaymentMethod = null;
    paymentBtns.forEach(btn => btn.classList.remove('active'));
    document.getElementById('selectedPayment').value = '';
}

// Show success notification
function showNotification() {
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 4000);
}

// Show error notification
function showErrorNotification(message) {
    const errorNotification = document.getElementById('errorNotification');
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorNotification.classList.add('show');

    setTimeout(() => {
        errorNotification.classList.remove('show');
    }, 3000);
}

// Hide error notification
function hideErrorNotification() {
    const errorNotification = document.getElementById('errorNotification');
    errorNotification.classList.remove('show');
}

// Format currency
function formatCurrency(value) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(value);
}
