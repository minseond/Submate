const providers = {
  8: {
    provider_name: 'Netflix',
    providerImgPath: 'assets/badges/netflix.svg',
    color: '#E50914',
    fee: {
      basic: 9500,     // 기본 요금제
      standard: 13500, // 스탠다드 요금제
      premium: 17000,  // 프리미엄 요금제
    },
    url: 'https://www.netflix.com',
  },
  97: {
    provider_name: 'Watcha',
    providerImgPath: 'assets/badges/watcha.svg',
    color: '#FF0558',
    fee: {
      basic: 7900,    // 기본 요금제
      // standard: 0,  // 존재하지 않는 요금제 임의로 0 넣음
      premium: 12900,  // 프리미엄 요금제
    },
    url: 'https://www.watcha.com',
  },
  119: {
    provider_name: 'Amazon Prime Video',
    providerImgPath: 'assets/badges/primevideo.svg',
    color: '#00A8E1',
    fee: {
      basic: 5500,     // 기본 요금제
      standard: 5500,
      premium: 5500,
    },
    url: 'https://www.primevideo.com',
  },
  337: {
    provider_name: 'Disney Plus',
    providerImgPath: 'assets/badges/disneyplus.svg',
    color: '#01147C',
    fee: {
      // basic: 0,
      standard: 9900,     // 기본 요금제 
      premium: 13900,  // 프리미엄 요금제
    },
    url: 'https://www.disneyplus.com',
  },
  350: {
    provider_name: 'Apple TV Plus',
    providerImgPath: 'assets/badges/appletvplus.svg',
    color: '#FFF',
    fee: {
      basic: 6500,     // 기본 요금제
      standard: 6500,
      premium: 6500,
    },
    url: 'https://www.apple.com/apple-tv-plus',
  },
  356: {
    provider_name: 'Wavve',
    providerImgPath: 'assets/badges/wavve.svg',
    color: '#1351f9',
    fee: {
      basic: 7900,     // 기본 요금제
      standard: 10900, // 스탠다드 요금제
      premium: 13900,  // 프리미엄 요금제
    },
    url: 'https://www.wavve.com',
  },
};

export default providers;
