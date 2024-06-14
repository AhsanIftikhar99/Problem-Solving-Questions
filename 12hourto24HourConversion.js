/**
 * Converts 12-hour AM/PM time format to 24-hour format.
 * @param {string} s - The time string in 12-hour format with 'AM' or 'PM'.
 * @return {Array} The time components [hours, minutes, sec] in 24-hour format.
 */
function timeConversion(s) {
    // Check if the time is in PM
    if (s.includes('PM')) {
        // Split the time string into hours, minutes, and seconds components
        let [hours, minutes, sec] = s.split(':');
        // Convert hours to integer and add 12 (except for 12 PM)
        hours = hours !== '12' ? parseInt(hours) + 12 : hours;
        // Return the time components with 'PM' removed
        return `${hours}:${minutes}:${sec.replace('AM', '').replace('PM', '').trim()}`
    } else {
        // Split the time string into hours, minutes, and seconds components
        let [hours, minutes, sec] = s.split(':');
        // Convert 12 AM to 00 hours
        hours = hours === '12' ? '00' : hours;
        // Return the time components with 'AM' removed
        return `${hours}:${minutes}:${sec.replace('AM', '').replace('PM', '').trim()}`
    }
}

// Example usage:
const time = '12:59:45AM';
const result = timeConversion(time);
console.log(result);  // Output will be ["00", "59", "45"]
