// async function getBlynkData() {
//     const deviceId = 'TMPL3r0eAZcGZ'; // Replace with your Device ID
//     const authToken = '-Gq8dxpfyVpaVx4r5m8-p96q1wkPzal_'; // Replace with your Authentication Token
//     const virtualPin = 'V0'; // Replace with your Virtual Pin

//     const response = await fetch(`https://blynk.cloud/api/get?device=${deviceId}&auth=${authToken}&pin=${virtualPin}`);
//     const data = await response.json();

//     document.getElementById('dataDisplay').textContent = data;
// }

// // Call the function to fetch data
// getBlynkData();

let autoScrollEnabled = true;
// window.onload = () => {
//     const container = document.getElementById('dataDisplay');
  
//     // Add scroll listener after DOM is ready
//     container.addEventListener('scroll', () => {
//       const atBottom = Math.abs(container.scrollHeight - container.scrollTop - container.clientHeight) < 10;
//       autoScroll = atBottom;
//     });
  
//     // Start polling Blynk
//     setInterval(getData, 500);
//     getData();
//   };

window.onload = () => {

    // autoScrollEnabled = !autoScrollEnabled;
    // document.getElementById("scrollButton").onclick =
    //     autoScrollEnabled ? "Disable Auto-Scroll" : "Enable Auto-Scroll";
        document.querySelector('#scrollButton').addEventListener('click',function(event){
            //.preventDefault();
            autoScrollEnabled = !autoScrollEnabled;
            
            // for checking if the checked box is checked or not
        })
}


function getData() {
    var request = new XMLHttpRequest();
        request.open('GET', 'https://blynk.cloud/external/api/get?token=-Gq8dxpfyVpaVx4r5m8-p96q1wkPzal_&dataStreamId=1');
      // request.open('GET', 'https://ny3.blynk.cloud/external/api/get?token=*********&dataStreamId=3');
        request.onreadystatechange = function () {
            if (this.readyState === 4) {
         //  console.log('Status:', this.status);   // not needed
         //  console.log('Headers:', this.getAllResponseHeaders());  // not needed
         //  console.log('Body:', this.responseText);     //  This is dataStreamid 3 value
         //  alert(this.responseText);      // Just show the value in an alert
         // document write puts text onto the webpage.  
        //document.write(" <h4>Weather Station<br>Development </h4>Wind Gusts: " + this.responseText + "  <br> ");
        newText = document.createElement('p');
        newText.textContent = "Wind Gusts: " + this.responseText;
        document.getElementById('line').appendChild(newText);
        if (autoScrollEnabled) {
            const container = document.getElementById('dataDisplay');
            container.scrollTop = container.scrollHeight;
        }
        }
     };
    request.send();
    }
setInterval(getData, 1000);
getData();
