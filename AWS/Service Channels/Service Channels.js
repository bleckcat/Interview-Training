const packets = [1, 2, 3, 4, 5];
const channels = 2;

function findMaximumQuality(packets, channels) {
  packets.sort((a, b) => a - b);

  const packetsQtd = packets.length;
  const remainingPackets = packets.slice(0, packetsQtd - channels + 1);
  const medianIndex = Math.floor((remainingPackets.length - 1) / 2);

  let sum = 0;

  for (let i = 0; i < channels - 1; i++) {
    sum += packets[packetsQtd - 1 - i];
  }

  let median =
    remainingPackets.length % 2 === 0
      ? (remainingPackets[medianIndex] + remainingPackets[medianIndex + 1]) / 2
      : remainingPackets[medianIndex];

  sum += median;

  return Math.ceil(sum);
}

findMaximumQuality(packets, channels);
