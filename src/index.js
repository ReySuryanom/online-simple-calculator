const currentYear = new Date().getFullYear();
const display = document.querySelector('section  span');

// Set tahun sekarang
document.querySelector('footer span').textContent = currentYear;

// Menampilkan angka sesuai tombol yang diklik user
window.onclick = (event) => {
  switch (event.target.classList[0]) {
    case 'apply':
      const value = display.textContent;
      const target = event.target;

      // Mengecek untuk reset format
      display.textContent = value === 'Error' ? '0' : value;

      // Formatting agar starting point-nya itu 0, serta error handling
      if (display.textContent === '0') {
        display.textContent =
          target.classList.length > 1
            ? value + target.textContent
            : target.textContent;
      } else {
        display.textContent += target.textContent;
      }
      break;
    case 'AC':
      display.textContent = '0';
      break;
    case 'CE':
      const val = display.textContent;
      display.textContent = val.length > 1 ? val.slice(0, -1) : 0;
      break;
    case 'assign':
      try {
        display.textContent = eval(display.textContent);
      } catch (error) {
        // Jika logika mathematical operations-nya tidak masuk akal
        // maka akan dianggap error dan menampilkan pesannya
        display.textContent = 'Error';
        new Error(error);
      }
  }
};
