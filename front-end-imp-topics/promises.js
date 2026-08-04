function ticketBooking() {
  return new Promise((resolve, reject) => {
    const isSeatAvailable = true;

    setTimeout(() => {
      if (isSeatAvailable) {
        resolve("Ticket is confirmed");
      } else {
        reject("No seat is available!");
      }
    }, 3000);
  });
}

async function bookingManager() {
  try {
    const result = await ticketBooking();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

bookingManager();