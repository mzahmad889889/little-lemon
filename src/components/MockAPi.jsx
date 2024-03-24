const availableTimesByDate = {
    '2024-03-11': ['10:00', '11:00', '12:00'],
    '2024-03-12': ['10:00', '11:00', '12:00'],
    '2024-03-13': ['14:00', '15:00', '16:00'],
    '2024-03-14': ['10:00', '11:00', '12:00'],
    '2024-03-15': ['14:00', '15:00', '16:00'],
    '2024-03-16': ['10:00', '11:00', '12:00'],
    '2024-03-17': ['14:00', '15:00', '16:00'],
    '2024-03-18': ['10:00', '11:00', '12:00'],
    '2024-03-19': ['14:00', '15:00', '16:00'],
    '2024-03-20': ['10:00', '11:00', '12:00'],
    '2024-03-21': ['14:00', '15:00', '16:00'],
    '2024-03-22': ['10:00', '11:00', '12:00'],
    '2024-03-23': ['14:00', '15:00', '16:00'],
    '2024-03-24': ['10:00', '11:00', '12:00'],
    '2024-03-25': ['14:00', '15:00', '16:00'],
    '2024-03-26': ['10:00', '11:00', '12:00'],
    '2024-03-27': ['14:00', '15:00', '16:00'],
    '2024-03-28': ['10:00', '11:00', '12:00'],
    '2024-03-29': ['14:00', '15:00', '16:00'],
    '2024-03-30': ['10:00', '11:00', '12:00'],
    '2024-03-31': ['14:00', '15:00', '16:00'],
  };


  const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(availableTimesByDate[date]){
                resolve(availableTimesByDate[date])
            }
            else{
                reject(new Error('No availables times for the selected date.'));
            }
        } , 1000)
    })
  }

  const submitAPI = (formData) => {
    availableTimesByDate[formData.chosenDate] = availableTimesByDate[formData.chosenDate].filter(time => time !== formData.chosenTime);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          resolve(true); // Simulate successful submission
          console.log('Successfully submitted')
        } else {
          reject(new Error('Form submission failed.'));
        }
      }, 1000); // Simulate API delay
    });
  };

  export{fetchAPI,submitAPI}