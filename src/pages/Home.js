import {useNavigate} from "react-router-dom";

const Home = () => {
  const nav = useNavigate();

  return(
      <div>
        Home
        <button type={"button"} onClick={() => nav('/kakao')}>카카오톡</button>
      </div>
  )
}

export default Home;