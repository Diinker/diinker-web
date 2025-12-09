import { Link } from "react-router-dom";
import YouTube from "../../public/assets/images/youtube.png";
import Instagram from "../../public/assets/images/instagram.png";
import Tiktok from "../../public/assets/images/tiktok.png";

export default function Footer() {
  return (
    <div className="text-white bg-[#00036667] border-t flex flex-col justify-around p-10">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-nature">Diinker</h1>
          <div className="flex gap-5 items-center">
            <Link to="https://youtube.com/@diinker">
              <img src={YouTube} alt="youtube-icon" className="w-6.5 h-5" />
            </Link>
            <Link to="https://tiktok.com/@diinkerpb">
              <img src={Tiktok} alt="youtube-icon" className="w-5.5 h-5.5" />
            </Link>
            <Link to="https://instagram.com/diinker">
              <img src={Instagram} alt="youtube-icon" className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="flex gap-10 text-left">
          <div className="">
            <h2 className="text-2xl font-nature">Legal</h2>
            <div className="font-nature-light">
              <Link to="/privacy">
                <p>Privacy Policy</p>
              </Link>
              <Link to="/terms">
                <p>Terms of Service</p>
              </Link>
            </div>
          </div>
          <div className="">
            <h2 className="text-2xl font-nature">Site Map</h2>
            <div className="font-nature-light">
              <Link to="/">
                <p>Home</p>
              </Link>
              <Link to="/download">
                <p>Download</p>
              </Link>
              <Link to="/about">
                <p>About</p>
              </Link>
              <Link to="/contact">
                <p>Contact</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center pt-10">
        <p>© 2025 Diinker | Tulsa, Oklahoma | All Rights Reserved</p>
      </div>
    </div>
  );
}
