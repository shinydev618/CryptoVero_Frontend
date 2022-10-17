export function calcAcquisition(tx) {
  let gain, loss, tax;
  for (let i = 0; i < tx.length(); i++) {
    const acq = tx.buyAmount * tx.buyPrice - tx.sellPrice * tx.sellAmount;
    if (acq >= 0) {
      gain += acq * 0.8;
      tax += acq * 0.2;
    } else {
      loss += acq;
    }
  }
  return { gain, loss, tax };
}