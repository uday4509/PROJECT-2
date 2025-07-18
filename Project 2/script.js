const otpInputs = document.querySelectorAll('.otp-input');
const correctOTP = "1230"; // Change this to simulate different valid OTPs


otpInputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value.length === 1 && index < otpInputs.length - 1) {
      otpInputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === "Backspace" && input.value === "" && index > 0) {
      otpInputs[index - 1].focus();
    }
  });
});

function verifyOTP() {
  const enteredOTP = Array.from(otpInputs).map(input => input.value).join("");

  if (enteredOTP === correctOTP) {
    otpInputs.forEach(input => {
      input.style.border = "2px solid green";
    });
    alert("OTP Verified Successfully!");
  } else {
    otpInputs.forEach(input => {
      input.style.border = "2px solid red";
    });
    alert("Invalid OTP!");
  }
}
