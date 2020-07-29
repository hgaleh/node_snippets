http://localhost:5000/api/PRTL/organization/edit/editOrganization


let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.write(xhttp.responseText);
    }
};
xhttp.open('POST', '/api/PRTL/organization/edit/editOrganization', true);
xhttp.setRequestHeader('Accept-Language', 'en-US,en;q=0.9');
xhttp.setRequestHeader('Authorization', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MDI2Nzg5MDQ0NzAzMzE5MTQ4IiwiaWF0IjoxNTk1NjU2Mjc1LCJleHAiOjE1OTYyNjEwNzV9.CpdovXK4SDEWmOl_l9hq8fDpe1JgTnKXBipoEO6Y1ihML7pMqxVdfJuNZddjTGQyjD9AB0dvEJ9V_ylXMg47_Q');
xhttp.setRequestHeader('Cache-Control', 'no-cache');
xhttp.setRequestHeader('X-Page-Number', '0');
xhttp.setRequestHeader('X-Page-Size', '10');
xhttp.setRequestHeader('X-Total-Count', 'true');
xhttp.send();