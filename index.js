fetch("https://pomber.github.io/covid19/timeseries.json")
.then(response => response.json())
.then(data => {
    if (window.location.hash == "#/") {
        let sortable_data = []

        for (let country in data) {
            let con = data[country][data[country].length - 1].confirmed
            let rec = data[country][data[country].length - 1].recovered
            let die = data[country][data[country].length - 1].deaths
            let statistics = [con, rec, die]
            let statistics_num = con - rec - die
            sortable_data.push([country, statistics, statistics_num])
        }
        sortable_data.sort((a, b) => {
            return b[2] - a[2]
        })
    
        let ObjectSorted = {}
        sortable_data.forEach(item => {
            ObjectSorted[item[0]] = item[1]
        })
        let ctx = document.getElementById("myChart").getContext('2d')
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(ObjectSorted).slice(0, 6),
                datasets: [{
                    label: '# of Patients',
                    data: [...Array(6).keys()].map(item => {
                        return (
                        ObjectSorted[Object.keys(ObjectSorted)[item]][0]
                        - ObjectSorted[Object.keys(ObjectSorted)[item]][1]
                        - ObjectSorted[Object.keys(ObjectSorted)[item]][2]
                        )
                    }),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        })
    }
    else {
        let ctx = document.getElementById("myChart").getContext('2d')
        let active_cases = []
        let st_date = []
        let value = window.location.hash.substring(1).substring(1)
        data[value ? value.replace('%20', ' ').replace('%20', ' ') : ""]
        .forEach(({ date, confirmed, recovered, deaths }) => {
            active_cases.push(confirmed - recovered - deaths)
            st_date.push(date)
        }
    )
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
    }
})

