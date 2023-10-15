document.getElementById("getDataButton").addEventListener("click", function () {
    fetch("http://localhost:3000/hi") 
        .then(response => response.json())
        .then(data => {
            document.getElementById("result").textContent = data.message;
        })
        .catch(error => {
            console.error("데이터 가져오기 실패:", error);
        });
});
