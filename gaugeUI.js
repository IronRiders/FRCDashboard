var a = new RadialGauge({
    renderTo: 'gauge1',
    width: 300,
    height: 300,
    units: 'Km/h',
    title: false,
    value: 0,
    minValue: 0,
    maxValue: 220,
    majorTicks: [
        '0','20','40','60','80','100','120','140','160','180','200','220'
    ],
    minorTicks: 2,
    strokeTicks: false,
    highlights: [
        { from: 0, to: 50, color: 'rgba(0,255,0,.15)' },
        { from: 50, to: 100, color: 'rgba(255,255,0,.15)' },
        { from: 100, to: 150, color: 'rgba(255,30,0,.25)' },
        { from: 150, to: 200, color: 'rgba(255,0,225,.25)' },
        { from: 200, to: 220, color: 'rgba(0,0,255,.25)' }
    ],
    colorPlate: '#222',
    colorMajorTicks: '#f5f5f5',
    colorMinorTicks: '#ddd',
    colorTitle: '#fff',
    colorUnits: '#ccc',
    colorNumbers: '#eee',
    colorNeedle: 'rgba(240, 128, 128, 1)',
    colorNeedleEnd: 'rgba(255, 160, 122, .9)',
    valueBox: true,
    animationRule: 'bounce',
    animationDuration: 500
});
a.draw();
new RadialGauge({ 
    renderTo: 'gauge2',  
    width: 200,
    height: 200 }).draw();
new RadialGauge({ 
    renderTo: 'gauge3',  
    width: 100,
    height: 100 }).draw();
new RadialGauge({ 
    renderTo: 'gauge4',  
    width: 100,
    height: 100 }).draw();
new RadialGauge({ 
    renderTo: 'gauge5',  
    width: 100,
    height: 100 }).draw();
new RadialGauge({ 
    renderTo: 'gauge6',  
    width: 100,
    height: 100 }).draw();