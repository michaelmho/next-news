import { useRouter } from "next/router";
import classes from "../styles/Toolbar.module.css";

const Toolbar = () => {
  const router = useRouter();
  const github = "https://github.com/michaelmho";

  return (
    <div className={classes.main}>
      <div onClick={() => router.push("/")}>Home</div>
      <div onClick={() => router.push("/feed/1")}>Feed</div>
      <div onClick={() => router.push("/eom")}>EOM</div>

      <div onClick={() => window.open(github)}>Github</div>
    </div>
  );
};

export default Toolbar;
