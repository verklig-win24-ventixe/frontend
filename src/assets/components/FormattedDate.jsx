function FormattedDate({ dateString }){
  const date = new Date(dateString);
  if (isNaN(date)) return <span>xx xx, xxxx - xx:xx xx</span>

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
 
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return (
    <span>{formattedDate} - {formattedTime}</span>
  )
}

export default FormattedDate