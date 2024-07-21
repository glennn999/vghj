document.getElementById('hari').addEventListener('change', gantiHari);

function gantiHari() {
    const hari = document.getElementById('hari').value;
    const rosterBody = document.getElementById('roster-body');

    const rosterData = {
        'Senin': [
            ['07.30-07.45', 'Jam WaliKelas'],
            ['07.45-08.25', 'UPC'],
            ['08.25-09.05', 'Geografi'],
            ['09.05-09.45', 'Geografi'],
            ['09.45-10.25', 'Geografi'],
            ['10.25-10.40', 'IST'],
            ['10.40-11.20', 'Ekonomi'],
            ['11.20-12.00', 'B.Ing LJT'],
            ['12.00-12.15', 'IST'],
            ['12.15-12.55', 'S.rupa'],
            ['12.55-13.35', 'S.rupa']
        ],
        'Selasa': [
            ['07.30-07.45', 'Jam WaliKelas'],
            ['07.45-08.25', 'B.Mand'],
            ['08.25-09.05', 'S.Musik'],
            ['09.05-09.45', 'P.Agama'],
            ['09.45-10.25', 'P.Agama'],
            ['10.25-10.40', 'IST'],
            ['10.40-11.20', 'Sejarah'],
            ['11.20-12.00', 'Sejarah'],
            ['12.00-12.15', 'IST'],
            ['12.15-12.55', 'Pancasila'],
            ['12.55-13.35', 'Pancasila']
        ],
        'Rabu': [
            ['07.30-07.45', 'Jam WaliKelas'],
            ['07.45-08.25', 'Biologi'],
            ['08.25-09.05', 'Biologi'],
            ['09.05-09.45', 'Prakarya'],
            ['09.45-10.25', 'Sosiologi'],
            ['10.25-10.40', 'IST'],
            ['10.40-11.20', 'PJOK'],
            ['11.20-12.00', 'PJOK'],
            ['12.00-12.15', 'IST'],
            ['12.15-12.55', 'MATE'],
            ['12.55-13.35', 'MATE']
        ],
        'Kamis': [
            ['07.30-07.45', 'Jam WaliKelas'],
            ['07.45-08.25', 'Ekonomi'],
            ['08.25-09.05', 'Ekonomi'],
            ['09.05-09.45', 'B.ING'],
            ['09.45-10.25', 'B.ING'],
            ['10.25-10.40', 'IST'],
            ['10.40-11.20', 'B.ING LJT'],
            ['11.20-12.00', 'Sosiologi'],
            ['12.00-12.15', 'IST'],
            ['12.15-12.55', 'Sosiologi'],
            ['12.55-13.35', 'MATE']
        ],
        'Jumat': [
            ['07.30-07.45', 'Jam WaliKelas'],
            ['07.45-08.25', 'INFORMATIKA'],
            ['08.25-09.05', 'INFORMATIKA'],
            ['09.05-09.45', 'B.INDO'],
            ['09.45-10.25', 'B.INDO'],
            ['10.25-10.40', 'IST'],
            ['10.40-11.20', 'B.INDO'],
        ],
        
    };

    // Hapus semua baris dalam tbody
    rosterBody.innerHTML = '';

    // Tambahkan baris baru berdasarkan hari yang dipilih
    rosterData[hari].forEach((row) => {
        const tr = document.createElement('tr');
        row.forEach((cell) => {
            const td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
        });
        rosterBody.appendChild(tr);
    });
}

// Inisialisasi tampilan pertama kali
gantiHari();

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});
