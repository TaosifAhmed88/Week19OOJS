class Temperature {
    constructor() {
      this.celsius = 0;  
      this.fahrenheit = 32;  
    }
  
 
    getCelsius() {
      return this.celsius;
    }
  
   
    setCelsius(celsius) {
      if (typeof celsius === 'number') {
        this.celsius = celsius;
        this.fahrenheit = (celsius * 9/5) + 32;
      } else {
        console.log('Invalid temperature. Please enter a numeric value.');
      }
    }
  
 
    getFahrenheit() {
      return this.fahrenheit;
    }
  
    
    setFahrenheit(fahrenheit) {
      if (typeof fahrenheit === 'number') {
        this.fahrenheit = fahrenheit;
        this.celsius = (fahrenheit - 32) * 5/9;
      } else {
        console.log('Invalid temperature. Please enter a numeric value.');
      }
    }
  }
  
  const temperature = new Temperature();
  
  console.log(`Initial Celsius: ${temperature.getCelsius()}°C`);  
  console.log(`Initial Fahrenheit: ${temperature.getFahrenheit()}°F`);  
  
  temperature.setCelsius(25);
  console.log(`Celsius: ${temperature.getCelsius()}°C`); 
  console.log(`Fahrenheit: ${temperature.getFahrenheit()}°F`);  
  
  temperature.setFahrenheit(68);
  console.log(`Celsius: ${temperature.getCelsius()}°C`); 
  console.log(`Fahrenheit: ${temperature.getFahrenheit()}°F`);  
  