// import { Fragment } from "react";
import { NetflixSeries } from "./Components/NetflixSeries";
// import "./Components/Netflix.css";
import "./Components/Netflix.module.css"
// import { EventHandling } from "./Components/EventHandling";
import {EventProps} from "./Components/EventProps";
export const App = () => {
  return (
    <section className="container">
      <h1 className="card-heading">List of Best Netflix Series!</h1>
      {/* <EventHandling/> */}
      <NetflixSeries />
      <EventProps />
    </section>
  );
};
