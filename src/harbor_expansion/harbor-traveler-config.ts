export const TRAVELER = {
  displayName: '星旅人', mutedMix: 0.13, neutral: '#8b806b',
  reference: { hair: '#E0A83C', skin: '#DEB781', coat: '#9DB787', scarf: '#CC6047',
    trousers: '#625756', boots: '#1E1715', badge: '#78844D', shoulderBag: false, hairstyle: 'tuft' },
  // TODO(reason): 待用户确认变体配色。
  variant: { hair: '', coat: '', scarf: '', shoulderBag: true, hairstyle: 'side' },
  variantPreview: { hair: '#855943', coat: '#5b6086', scarf: '#be914a' },
  scarfSegments: 4, lowSegments: 2, wind: 0.095, scarfResponse: 0.21, scarfWidth: 0.095,
  umbrella: '#a16f56', coatSwing: 0.042,
  first: { transition: 0.4, eye: 1.285, seatEye: 0.88, helmEye: 1.32, near: 0.035, bob: 0.032,
    bobHz: 8.2, hatBlend: 0.27, hideBlend: 0.52 },
} as const
