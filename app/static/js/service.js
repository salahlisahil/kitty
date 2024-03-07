
document.addEventListener('DOMContentLoaded', function () {

    const buyPets = document.querySelectorAll("#buyPet");
    buyPets.forEach(buyPet => {
        buyPet.addEventListener("click", () => {
            const pricePetElement = buyPet.parentNode.querySelector('#pricePet');
            const pricePet = pricePetElement.textContent.trim().substring(1);
            const newPage = window.open('buyPet.html', '_blank');

            newPage.document.write(`
            <!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<link
href="https://fonts.googleapis.com/css2?family=Bangers&family=Carter+One&family=Nunito+Sans:wght@400;700&display=swap"
rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="../../../static/css/buyProduct.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<title>Buy Product</title>

</head>

<body>
<div id="wrapper">
        <div class="wrapper">
            <div class="login_box">
                <div class="login-header">
                    <h1>Buy Pet</h1>
                </div>
                <div class="all-inputs">
                    <div class="input_box">
                        <input type="text" id="name" class="input-field" required>
                        <label for="name" class="label">Your Name</label>
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div class="input_box">
                        <input type="text" id="phoneNumber" class="input-field" required>
                        <label for="phoneNumber" class="label">Phone Number</label>
                        <i class="fa-solid fa-phone"></i>
                    </div>
                    <div class="input_box">
                        <input type="text" id="cardNumber" class="input-field" required>
                        <label for="cardNumber" class="label">Card Number</label>
                        <i class="fa-solid fa-user-tie"></i>
                    </div>
                    <div class="input_box">
                        <input type="text" id="date" class="input-field" required>
                        <label for="date" class="label">Expiration Date</label>
                        <i class="fa-solid fa-calendar-days"></i>
                    </div>
                    <div class="input_box">
                        <input type="text" id="cvv" class="input-field" required>
                        <label for="cvv" class="label">CVV</label>
                        <i class="fa-regular fa-address-card"></i>
                    </div>

                    <div class="input_box">
                        <button id="moreDetails" class="input-field">Place for more details</button>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>

                </div>
                <div id ="details"class="all-inputs details"> 
                    <div class="input_box">
                        <input type="email" id="email" class="input-field" required >
                        <label for="email" class="label">Email</label>
                        <i class="fa-solid fa-at"></i>
                    </div>
                    <div class="input_box">
                        <input type="text" id="city" class="input-field" required>
                        <label for="city" class="label">Your City</label>
                        <i class="fa-solid fa-city"></i>
                    </div>
                    <div class="input_box">
                        <input type="text" id="street" class="input-field" required>
                        <label for="street" class="label">Your Street</label>
                        <i class="fa-solid fa-street-view"></i>
                    </div>
                   
                </div>
                <div class="input_price">
                    <div>Total price</div>
                    <div class="div"></div>
                    <div id="totalPrice">$${pricePet}</div>
                </div>
                <div class="input_box">
                    <input type="submit" class="input-submit" value="Buy Product">
                </div>
            </div>
        </div>
    </div>
    <script>
    const details = document.getElementById("details");
    const moreDetails = document.getElementById("moreDetails");
    moreDetails.addEventListener('click', function () {
        details.classList.toggle('hidden');

        if (details.classList.contains('hidden')) {
            details.classList.remove('details');
        } else {
            details.classList.add('details');
        }
    });
</script>
</body>

</html>`)
            newPage.document.close();

        })
    })
})


