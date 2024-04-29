import { useEffect } from 'react'

const KakaoShare = () => {
  useEffect(() => {
    kakaoButton()
  }, [])

  const kakaoButton = () => {
    const pageUrl = 'https://developers.kakao.com';

    if (window.Kakao) {
      const kakao = window.Kakao

      if (!kakao.isInitialized()) {
        kakao.init('1a7c01b06091adcc8c53d511ef41cb89')
      }

      kakao.Share.createDefaultButton({
        container: '#kakaotalk-sharing-btn',
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
  }
  return (
      <button id='kakaotalk-sharing-btn'>카카오 공유하기</button>
  )
}

export default KakaoShare;