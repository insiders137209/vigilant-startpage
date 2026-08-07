// 1. Jam & Tarikh
function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById('date').innerText = now.toLocaleDateString('ms-MY', { weekday: 'long', day: 'numeric', month: 'long' });
}
setInterval(updateClock, 1000);
updateClock();

// 2. Baca Penggunaan CPU Sebenar
let prevCpuInfo = null;

function updateCPU() {
    if (!chrome.system || !chrome.system.cpu) return;

    chrome.system.cpu.getInfo((info) => {
        if (prevCpuInfo) {
            let totalUsage = 0;
            info.processors.forEach((proc, i) => {
                const prev = prevCpuInfo.processors[i].usage;
                const curr = proc.usage;
                const oldTotal = prev.user + prev.kernel + prev.idle;
                const newTotal = curr.user + curr.kernel + curr.idle;
                const total = newTotal - oldTotal;
                const idle = curr.idle - prev.idle;
                
                const percentage = total > 0 ? ((total - idle) / total) * 100 : 0;
                totalUsage += percentage;
            });

            const avgUsage = Math.round(totalUsage / info.processors.length);
            document.getElementById('cpu-val').innerText = `${avgUsage}%`;
            document.getElementById('cpu-bar').style.width = `${avgUsage}%`;
        }
        prevCpuInfo = info;
    });
}
setInterval(updateCPU, 1000);

// 3. Data Cuaca Sebenar (Open-Meteo API - Percuma)
function getWeather() {
    navigator.geolocation.getCurrentPosition(
        (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude, "Lokasi Anda"),
        () => fetchWeather(2.1896, 102.2501, "Melaka") // Lokasi lalai jika geolokasi ditolak
    );
}

function fetchWeather(lat, lon, locationName) {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
        .then(res => res.json())
        .then(data => {
            const temp = Math.round(data.current_weather.temperature);
            document.getElementById('temp-val').innerText = `${temp}°C`;
            document.getElementById('weather-location').innerText = locationName;
        })
        .catch(() => {
            document.getElementById('temp-val').innerText = "--°C";
            document.getElementById('weather-location').innerText = "Ralat Data";
        });
}

getWeather();
