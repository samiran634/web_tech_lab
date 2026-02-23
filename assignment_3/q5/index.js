  function validateForm() {
            const fname = document.getElementById('firstName').value.trim();
            const lname = document.getElementById('lastName').value.trim();
            const pass = document.getElementById('password').value.trim();
            const email = document.getElementById('email').value.trim();
            const mobile = document.getElementById('mobile').value.trim();
            const address = document.getElementById('address').value.trim();

            document.querySelectorAll('.error').forEach(el => el.innerText = "");

            let isValid = true;
            const nameRegex = /^[A-Za-z]+$/;
            if (fname.length < 6 || !nameRegex.test(fname)) {
                document.getElementById('fnameError').innerText = "Must be at least 6 alphabets.";
                isValid = false;
            }
            if (pass.length < 6) {
                document.getElementById('passError').innerText = "Password must be at least 6 characters.";
                isValid = false;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                document.getElementById('emailError').innerText = "Enter a valid email (e.g., name@domain.com).";
                isValid = false;
            }
            const mobileRegex = /^[0-9]{10}$/;
            if (!mobileRegex.test(mobile)) {
                document.getElementById('mobileError').innerText = "Must contain exactly 10 digits.";
                isValid = false;
            }
            if (lname === "") {
                document.getElementById('lnameError').innerText = "Last Name cannot be empty.";
                isValid = false;
            }
            if (address === "") {
                document.getElementById('addrError').innerText = "Address cannot be empty.";
                isValid = false;
            }

            if (isValid) {
                alert("Registration Successful!");
            }
        }
        validateForm();