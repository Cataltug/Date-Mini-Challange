function calculateAge(date) {
    const birthDate = new Date(date);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    return age;
    
  }
  
  console.log(calculateAge("1990-06-15")); // farkli tarih formatlariyla fonksiyonunuzu test edin