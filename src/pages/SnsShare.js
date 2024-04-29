import kakaoShare from "../utils/kakaoShare";

const SnsShare = () => {
  const link = 'https://www.naver.com';

  return(
      <div>
        <button type={"button"} onClick={() => kakaoShare()}>카카오톡 공유하기</button>

        <button onClick={() => {
          const text = '밀키스 친밀리미터';
          const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(link)}`

          window.open(twitterUrl);
        }}>트위터 공유하기
        </button>

        <button onClick={() => {
          window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${link}`,
              '페이스북 공유하기',
              'width=600,height=800,location=no,status=no,scrollbars=yes' //새창 뜨는 것 조절 (없어도 작동됨)
          );
        }}>페이스북 공유하기
        </button>

        <button onClick={() => {
          window.open(
              `https://share.naver.com/web/shareView?url=${link}&title=네이버 공유하기`
          );
        }}>네이버 공유하기
        </button>
      </div>
  )
}

export default SnsShare;