fs.readFile('./txt/start.txt', 'utf-8', (err, data1) =>  {
    fs.readFile('./txt/${data1}.txt', 'utf-8', (err, data2) => {
     console.log(data2);
    });
});