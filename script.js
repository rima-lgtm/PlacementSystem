        
function showJobDetails(jobName) {
    alert("You selected: " + jobName);
}

function showJobDetails(jobName) {
    if (jobName === "Cloud Support Associate") {
        alert(
            "Job: Cloud Support Associate\n" +
            "Skills: AWS, Linux, Networking\n" +
            "Type: Sample full-time role"
        );
    } else if (jobName === "Junior Web Developer") {
        alert(
            "Job: Junior Web Developer\n" +
            "Skills: HTML, CSS, JavaScript\n" +
            "Type: Sample full-time role"
        );
    }
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value;

    alert("Registration successful! Welcome, " + name + ".");
});
function processStudentRegistration(student) {
    if (!student.name || !student.email) {
        return "Please enter your name and email.";
    }

    return "Student registration details checked successfully!";
}

function showJobDetails(jobName) {
  alert("You selected: " + jobName);
}

const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {
  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = registrationForm.elements["name"].value.trim();
    const email = registrationForm.elements["email"].value.trim();

    if (!name || !email) {
      alert("Please enter your name and email.");
      return;
    }

    alert("Registration submitted successfully! Thank you, " + name + ".");

    registrationForm.reset();
  });
}