// create a function that return a date in the format of "Month Day, Year" present time

export function formatDate(date:Date):string{
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}