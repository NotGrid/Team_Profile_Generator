function generateHtml(data) {
    function manager(managerData) {
        return `<div class="col">
        <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${managerData.name}</h5>
                <p class="card-text">${managerData.id}</p>
                <p class="card-text">${managerData.email}</p>
                <p class="card-text">${managerData.officeNumber}</p>
            </div>
            </div>
        </div>`
    }
    function engineer(engineerData) {
        console.log(engineerData);
        const engineers = [];
        for (let i = 0; i < engineerData.length; i++) {
            engineers.push(`<div class="col">
            <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${engineerData[i].name}</h5>
                <p class="card-text">${engineerData[i].id}</p>
                <p class="card-text">${engineerData[i].email}</p>
                <p class="card-text">${engineerData[i].github}</p>
            </div>
            </div>
        </div>`)
        };
        return engineers.join('');
    }
    function intern(internData) {
        const interns = [];
        for (let i = 0; i < internData.length; i++) {
            interns.push(`<div class="col">
            <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${internData[i].name}</h5>
                <p class="card-text">${internData[i].id}</p>
                <p class="card-text">${internData[i].email}</p>
                <p class="card-text">${internData[i].school}</p>
            </div>
            </div>
        </div>`)
        };
        return interns.join('');
    }
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
        <title>Team Profile Generator</title>
    </head>
    
    <body>
    
        <div class="row row-cols row-cols-md-4 g-5">
           ${manager(data[0])}
            
            ${engineer(data.filter(employee => employee.getRole() === 'Engineer'))}
            ${intern(data.filter(employee => employee.getRole() === 'Intern'))}
            
            
        </div>
    </body>
    
    </html>`
}

module.exports = generateHtml;