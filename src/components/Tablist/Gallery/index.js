import "./gallery.css";

import { p1, p2, p3 } from "../../../assets/home";
import Image from "./Image";

import ViewMore from "../../ViewMore";
import { useEffect, useState } from "react";
import axios from "axios";
import { hosturl, links } from "../../../api";
import { message } from "antd";
function Gallery() {
  const [photos, setPhotots] = useState([]);

  const getEvents = async () => {
    try {
      const result = await axios.get(hosturl + links.gettopphotos);
      if (result.status === 200) {
        setPhotots(result.data);
      } else {
        throw new Error(result.statusText);
      }
    } catch (error) {
      console.error(error);
      message.error(error.message);
    }
  };
  useEffect(() => {
    getEvents();
  }, []);
  return (
    <div className="mt-2 container-fluid ">
      <div className="col-md-11  col-12 mx-auto " style={{ columns: "200px" }}>
        {[...photos, ...photos, ...photos]?.map((i, ind) => (
          <Image
            key={ind}
            pic={hosturl + i.photo_url}
            caption={i.event_name}
            link={"/events/" + i.event_id}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
