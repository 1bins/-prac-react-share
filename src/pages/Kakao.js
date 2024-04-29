import kakaoShare from "../utils/kakaoShare";

const Kakao = () => {
  return(
      <div>
        {/*<KakaoShare/>*/}
        <button type={"button"} onClick={() => kakaoShare()}>카카오톡 공유하기</button>
      </div>
  )
}

export default Kakao;