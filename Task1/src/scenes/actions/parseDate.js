export default function parseDate(date){
    date = String(date).split(' ');
    return date[2] + ' ' + date[1] + ' ' + date[3];
}