

// sleep.js

function calculateSleepDuration() {
    // 寝た時間と起きた時間を取得
    var bedtime = document.getElementById('bedtime').value;
    var waketime = document.getElementById('waketime').value;

    // 時間の差を計算
    var sleepDuration = calculateTimeDifference(bedtime, waketime);

    // 結果を表示
    document.getElementById('sleepDuration').innerHTML = '睡眠時間: ' + sleepDuration + ' 時間';
}

function calculateTimeDifference(start, end) {
    // 簡単な時間の差分計算の例
    var startTime = new Date('2023-01-01 ' + start);
    var endTime = new Date('2023-01-01 ' + end);

    var timeDifference = endTime - startTime;
    var hoursDifference = timeDifference / (1000 * 60 * 60);

    return hoursDifference.toFixed(2); // 小数点第二位まで表示
}

let stepCount = 0;
let isCounting = false;
let watchId;

document.getElementById('startButton').addEventListener('click', function() {
    if (!isCounting) {
        isCounting = true;
        watchId = startCounting();
    }
});

document.getElementById('stopButton').addEventListener('click', function() {
    if (isCounting) {
        isCounting = false;
        stopCounting(watchId);
    }
});

function startCounting() {
    return navigator.accelerometer.watchAcceleration(function(event) {
        const acceleration = event.accelerationIncludingGravity;
        const vector = Math.sqrt(acceleration.x * acceleration.x + acceleration.y * acceleration.y + acceleration.z * acceleration.z);

        const threshold = 10;
        if (vector > threshold) {
            stepCount++;
            document.getElementById('stepCount').innerText = stepCount + ' 歩';
        }
    }, function(error) {
        console.error('加速度センサーエラー: ', error);
    }, { frequency: 1000 });
}

function stopCounting(watchId) {
    navigator.accelerometer.clearWatch(watchId);
}
