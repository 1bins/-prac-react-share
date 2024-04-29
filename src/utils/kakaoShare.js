const kakaoShare = () => {
  const pageUrl = 'https://developers.kakao.com';

  if (window.Kakao) {
    const kakao = window.Kakao;

    if (!kakao.isInitialized()) {
      // kakao.init(process.env.REACT_APP_KAKAO_JS_KEY)
      kakao.init('1a7c01b06091adcc8c53d511ef41cb89')
    }

    kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '오늘의 디저트',
        description: '아메리카노, 빵, 케익',
        imageUrl:
            'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        link: {
          mobileWebUrl: pageUrl,
          webUrl: pageUrl,
        },
      },
      buttons: [
        {
          title: '웹으로 이동',
          link: {
            mobileWebUrl: pageUrl,
            webUrl: pageUrl,
          },
        },
        {
          title: '앱으로 이동',
          link: {
            mobileWebUrl: pageUrl,
            webUrl: pageUrl,
          },
        },
      ],
    });
  }
  return kakaoShare
}
export default kakaoShare;