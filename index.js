addEventListener("DOMContentLoaded", () => {

    const closeModalButton = document.getElementsByClassName("closes-modal")[0];
    const opensModalButton = document.getElementById("opens-modal");
    const modal = document.getElementById("modal-container");
    const acceptOffer = document.getElementById("accept-offer-button");
    const offerAcceptedMessage = document.getElementById("offer-accepted-message");

    opensModalButton.onclick = function () {
        modal.style.display = "block";
        opensModalButton.style.display = "none";
    }

    closeModalButton.onclick = function () {
        modal.style.display = "none";
        opensModalButton.style.display = "block";

    }


    acceptOffer.addEventListener("click", () => {
        offerAcceptedMessage.innerHTML = "Offer accepted.";
        modal.style.display = "none";
        opensModalButton.style.display = "none";
    });

    window.onclick = function (event) {
        if (event.target == modal) { // If the user clicks anywhere outside of the modal.
            modal.style.display = "none";
            opensModalButton.style.display = "block";
        }

    }


})
