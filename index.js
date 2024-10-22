function displayErrorMessage() {
  const overlay = document.createElement("div");
  overlay.className = "error-overlay";

  const messageContainer = document.createElement("div");
  messageContainer.className = "error-message";
  messageContainer.textContent = "Please fill in all fields";

  const closeButton = document.createElement("button");
  closeButton.className = "close-button";
  closeButton.textContent = "×";
  messageContainer.appendChild(closeButton);

  overlay.appendChild(messageContainer);
  document.body.appendChild(overlay);

  const closeError = () => overlay.remove();
  closeButton.addEventListener("click", closeError);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeError();
  });
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatTime(timeStr) {
  return new Date(`2000/01/01 ${timeStr}`).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}

document.querySelector("form").addEventListener("submit", function (e) {
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
    displayErrorMessage();
    return;
  }

  // Hide form
  document.getElementById("eventForm").style.display = "none";

  // Create digital invitation
  const invitation = document.createElement("div");
  invitation.className = "digital-invite";
  invitation.innerHTML = `
            <div class="invite-header">YOU ARE INVITED</div>
            <div class="invite-subheader">TO JOIN THE</div>
            <div class="event-name">${eventName}</div>
            <div class="event-date">${formatDate(eventDate)}</div>
            <div class="event-time">${formatTime(startTime)} - ${formatTime(
    endTime
  )}</div>
            <div class="event-location">${location}</div>
            <div class="event-description">${description}</div>
        `;

  document.body.appendChild(invitation);
});
