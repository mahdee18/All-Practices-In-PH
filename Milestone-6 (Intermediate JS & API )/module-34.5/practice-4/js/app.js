function getText() {
    // Get the text content of the span element
    const shortedLink = document.getElementById('shorted-link').textContent;
    
    // Create a temporary input element
    const tempInput = document.createElement('input');
    
    // Set the input element's value to the text content
    tempInput.value = shortedLink;
    
    // Append the input element to the document body
    document.body.appendChild(tempInput);
    
    // Select the input element's contents
    tempInput.select();
    
    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(tempInput);
  }

const getLoadLink= async()=>{
    const inputField = document.getElementById('url-input').value;
    const url = (`https://api.shrtco.de/v2/shorten?url=${inputField}`)
    const res = await fetch(url)
    const data = await res.json()
    displayLink(data.result.short_link)
}
const displayLink=(shortLink)=>{
    const outerDiv = document.getElementById('shorted-link')
    outerDiv.innerHTML=`
     <a href="${shortLink}" target="_blank">${shortLink}</a>
    `
}
document.getElementById('btn-shorten').addEventListener('click',getLoadLink)
