function handleSubmit(event) {
    event.preventDefault();
    
    // Ambil nilai dari form
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const subjek = document.getElementById('subjek').value;
    const pesan = document.getElementById('pesan').value;

    // Di sini Anda bisa menambahkan logika untuk mengirim data ke server
    console.log('Form submitted:', { nama, email, subjek, pesan });

    // Reset form
    event.target.reset();
    
    // Tampilkan pesan sukses
    alert('Terima kasih! Pesan Anda telah terkirim.');
    
    return false;
}
