

const ClpNumberFormat=(number)=>{
    return '$'+new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'CLP' }).format(number)
    
}
export default ClpNumberFormat