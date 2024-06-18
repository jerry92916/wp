function weekday(str) {
    switch (str.toLowerCase()) {
        case 'Sunday':
            return 0;
        case 'Monday':
            return 1;
        case 'Tuesday':
            return 2;
        case 'Wednesday':
            return 3;
        case 'Thursday':
            return 4;
        case 'Friday':
            return 5;
        case 'Saturday':
            return 6;
        default:
            return -1; 
    }
}

console.log(weekday('Sunday'));    
console.log(weekday('Tuesday'));   
console.log(weekday('Friday'));    
console.log(weekday('Invalid'));   
