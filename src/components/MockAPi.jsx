const availableTimesByDate = {
    '2024-04-01': ['10:00', '11:00', '12:00'],
    '2024-04-02': ['10:00', '11:00', '12:00'],
    '2024-04-03': ['14:00', '15:00', '16:00'],
    '2024-04-04': ['10:00', '11:00', '12:00'],
    '2024-04-05': ['14:00', '15:00', '16:00'],
    '2024-04-06': ['10:00', '11:00', '12:00'],
    '2024-04-07': ['14:00', '15:00', '16:00'],
    '2024-04-08': ['10:00', '11:00', '12:00'],
    '2024-04-09': ['14:00', '15:00', '16:00'],
    '2024-04-10': ['10:00', '11:00', '12:00'],
    '2024-04-11': ['14:00', '15:00', '16:00'],
    '2024-04-12': ['10:00', '11:00', '12:00'],
    '2024-04-13': ['14:00', '15:00', '16:00'],
    '2024-04-14': ['10:00', '11:00', '12:00'],
    '2024-04-15': ['14:00', '15:00', '16:00'],
    '2024-04-16': ['10:00', '11:00', '12:00'],
    '2024-04-17': ['14:00', '15:00', '16:00'],
    '2024-04-18': ['10:00', '11:00', '12:00'],
    '2024-04-19': ['14:00', '15:00', '16:00'],
    '2024-04-20': ['10:00', '11:00', '12:00'],
    '2024-04-21': ['14:00', '15:00', '16:00'],
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