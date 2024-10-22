document.getElementById("eventForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const eventName = document.getElementById("eventName").value;
  const eventDate = document.getElementById("eventDate").value;
  const startTime = document.getElementById("startTime").value;
  const endTime = document.getElementById("endTime").value;
  const description = document.getElementById("description").value;
  const location = document.getElementById("location").value;

  if (
    !eventName ||
    !eventDate ||
    !startTime ||
    !endTime ||
    !description ||
    !location
  ) {
    displayErrorMessage("Please fill in all fields.");
    return;
  }

  // Proceed with Task 10
});

function displayErrorMessage(message) {
  const errorContainer = document.createElement("div");
  errorContainer.textContent = message;
  errorContainer.style.backgroundColor = "#e74c3c";
  errorContainer.style.color = "white";
  errorContainer.style.padding = "10px";
  errorContainer.style.marginBottom = "15px";
  errorContainer.style.borderRadius = "5px";

  document.body.insertBefore(
    errorContainer,
    document.getElementById("eventForm")
  );

  const closeButton = document.createElement("button");
  closeButton.textContent = "X";
  closeButton.style.marginLeft = "10px";
  closeButton.style.background = "none";
  closeButton.style.border = "none";
  closeButton.style.color = "white";
  closeButton.style.cursor = "pointer";

  closeButton.addEventListener("click", function () {
    errorContainer.remove();
  });

  errorContainer.appendChild(closeButton);
}
