import { CarProps,FilterProps } from "@/types";

export async function fetchCars(filters:FilterProps){
    const {manufacturer,year,model,limit,fuel}=filters;
    const headers = {
		'x-rapidapi-key': '9f07982f0cmsh0f5bacec150f96cp13e214jsnd2e933d96849',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,{
        headers : headers,
    });
    
    const result = await response.json();
    
    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(1);
  };

export const convertToKilometerPerLitre = (city_mpg:number) => {
    // 1 mile = 1.60934 kilometers
    // 1 gallon = 3.78541 liters
    const milesToKilometers = 1.60934;
    const gallonsToLiters = 3.78541;
    
    const kilometersPerLiter = city_mpg * milesToKilometers / gallonsToLiters;
    return kilometersPerLiter.toFixed(2); // rounding to 2 decimal places
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;
  
    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);
  
    return `${url}`;
  } 

export const updateSearchParams = (type:string, value:string) => {

    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);
  
    // Update or delete the 'model' search parameter based on the 'model' value
    searchParams.set(type,value);

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathname;
}