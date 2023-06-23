import "../Footer/Footer.scss";
import audio from "../../assets/audio/Reflected-Light.mp3";

function Footer() {
  return (
    <>
      <p className="footer">
        © AITEMU Inc. All Rights Reserved.
        <div className="footer__player">
          <audio controls>
            <source src={audio} type="audio/mpeg" />
          </audio>
        </div>
      </p>
    </>
  );
}

export default Footer;
