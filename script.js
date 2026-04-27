document.addEventListener("DOMContentLoaded", function () {
  const nameEl = document.getElementById("userName");
  const bioEl = document.getElementById("userBio");
  const emailEl = document.getElementById("userEmail");
  const phoneEl = document.getElementById("userPhone");
  const editBtn = document.getElementById("editBtn");

  if (localStorage.getItem("profileData")) {
    const data = JSON.parse(localStorage.getItem("profileData"));
    nameEl.textContent = data.name;
    bioEl.textContent = data.bio;
    emailEl.textContent = data.email;
    phoneEl.textContent = data.phone;
  }

  editBtn.addEventListener("click", function () {
    const name = prompt("Name:", nameEl.textContent);
    const bio = prompt("Bio:", bioEl.textContent);
    const email = prompt("Email:", emailEl.textContent);
    const phone = prompt("Phone", phoneEl.textContent);

    if (name && bio && email && phone) {
      nameEl.textContent = name;
      bioEl.textContent = bio;
      emailEl.textContent = email;
      phoneEl.textContent = phone;

      localStorage.setItem("profileData", JSON.stringify({
        name, bio, email, phone
      }));
    }
  });
});
