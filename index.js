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
  // Hide form after submission
  document.getElementById("eventForm").style.display = "none";

  // Create event invite section
  const inviteSection = document.createElement("div");
  inviteSection.className = "invite-section";
  inviteSection.innerHTML = `
      <h2>${eventName}</h2>
      <p><strong>Date:</strong> ${eventDate}</p>
      <p><strong>Time:</strong> ${startTime} - ${endTime}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p>${description}</p>
  `;

  document.body.appendChild(inviteSection);
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
