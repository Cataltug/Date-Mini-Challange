function calculateAge(date) {
    const birthDate = new Date(date);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    return age;
    
  }

  function isWeekend(date){
    const givenDate = new Date(date);
    const day = givenDate.getDay();

    return day === 0 || day === 6;
  }
  
  console.log(calculateAge("1990-06-15")); // farkli tarih formatlariyla fonksiyonunuzu test edin
  console.log(isWeekend("2020-01-18")); // farkli tarih formatlariyla fonksiyonunuzu test edin
