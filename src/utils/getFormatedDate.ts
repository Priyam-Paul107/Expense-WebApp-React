class getFormatedDate
{
    static getDate =(date :Date)=>{
const day =['Monday','Tuesday','Wednesday','Thursday',' Friday','Saturaday','Sunday']
const months=['January','February','March','April','May','June','july','August','September','October','November','December']
return `${day[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`
}
static formatDateString(dateString:string){
    if(dateString!=undefined){
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US',{
            year:'numeric',
            month:'long',
            day:'2-digit'
        }).format(date)
    }
}
}

export default getFormatedDate;