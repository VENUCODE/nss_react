import "./gallery.css";

import { p1, p2, p3 } from "../../../assets/home";
import Image from "./Image";

import ViewMore from "../../ViewMore";
function Gallery() {
  return (
    <div className="mt-2 container-fluid">
      <div className="row">
        {[p1, p2, p3, p1, p2, p3].map((i) => (
          <Image key={i} pic={i} caption="hello" link="somewhare" />
        ))}
        <ViewMore link={"/gallery"} />
      </div>
    </div>
  );
}

export default Gallery;
