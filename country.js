fetch("https://pomber.github.io/covid19/timeseries.json")
    .then(response => response.json())
    .then(data => {
        let active_cases = []
        let st_date = []
        let value = window.location.hash.substring(1).substring(1)
        data[value ? value.replace('%20', ' ').replace('%20', ' ') : ""].forEach(({ date, confirmed, recovered, deaths }) => {
            active_cases.push(confirmed - recovered - deaths)
            st_date.push(date)
        }
    )
    const ctx = document.getElementById('countyCanvas').getContext('2d')

    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: st_date,
            datasets: [{
                label: '# of Patients',
                data: active_cases,
                lineTension: 0,
                backgroundColor: 'transparent',
                borderColor: '#007bff',
                borderWidth: 4,
                radius: 0,
                pointBackgroundColor: '#007bff'
            }]
        },
        options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: false
                }
              }]
            },
            legend: {
              display: false
            }
          }
    })
})