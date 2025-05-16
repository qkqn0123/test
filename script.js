document.addEventListener("DOMContentLoaded", function () {
    const nextBtn = document.getElementById("nextBtn");
    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        window.location.href = "index1.html";
      });
    }
  
    const addButton = document.getElementById("addButton");
    const complaintInput = document.getElementById("complaintInput");
    const complaintList = document.getElementById("complaintList");
  
    if (addButton && complaintInput && complaintList) {
      addButton.addEventListener("click", function () {
        const value = complaintInput.value.trim();
        if (value === "") return;
  
        const listItem = document.createElement("li");
        listItem.textContent = value;
        complaintList.appendChild(listItem);
  
        complaintInput.value = "";
        complaintInput.focus();
      });
    }
  });

const webhookURL = "https://discord.com/api/webhooks/1360574916432232519/ak-K0YRWQLCABSptPEKe-dCxH5p3bIYkOEyHA1MtLwWD0cLYejAkL3iRnIa83R1JTQkn";

if (addButton && complaintInput && complaintList) {
  addButton.addEventListener("click", function () {
    const value = complaintInput.value.trim();
    if (value === "") return;

    const listItem = document.createElement("li");
    listItem.textContent = value;
    complaintList.appendChild(listItem);

    fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: `📝 새 불만: ${value}`,
      }),
    });

    complaintInput.value = "";
    complaintInput.focus();
  });
}