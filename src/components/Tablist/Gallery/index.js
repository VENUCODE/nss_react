import "./gallery.css";

import { p1, p2, p3 } from "../../../assets/home";
import Image from "./Image";

function Gallery() {
  return (
    <div className="mt-2">
      <div className="row">
        {[p1, p2, p3].map((i) => (
          <Image pic={i} caption="hello" link="somewhare" />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
