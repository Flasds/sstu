document.getElementById("publishButton").addEventListener("click", function() {
    var inputText = document.getElementById("noticeText").value;
    
    if (inputText.trim() !== "") {
        // 发布公告请求到服务器
        fetch('/publish', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ notice: inputText })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                var noticeContainer = document.createElement("div");
                noticeContainer.className = "notice";
                
                var noticeContent = document.createElement("p");
                noticeContent.textContent = inputText;
                
                noticeContainer.appendChild(noticeContent);
                
                document.getElementById("notices").appendChild(noticeContainer);
                
                document.getElementById("noticeText").value = "";
            }
        });
    }
});
// ... 之前的代码 ...

// 获取并显示公告信息
fetch('/notices')
    .then(response => response.json())
    .then(data => {
        data.notices.forEach(notice => {
            var noticeContainer = document.createElement("div");
            noticeContainer.className = "notice";
            
            var noticeContent = document.createElement("p");
            noticeContent.textContent = notice;
            
            noticeContainer.appendChild(noticeContent);
            
            document.getElementById("notices").appendChild(noticeContainer);
        });
    });

// ... 其他代码 ...
