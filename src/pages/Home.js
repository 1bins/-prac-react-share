import {useNavigate} from "react-router-dom";

const Home = () => {
  const nav = useNavigate();

  return(
      <div>
        Home
        <button type={"button"} onClick={() => nav('/share')}>공유하기</button>
      </div>
  )
}

export default Home;