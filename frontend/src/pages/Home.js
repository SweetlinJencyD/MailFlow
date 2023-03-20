import React from "react";

import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import OverViewCard from "../components/overviewCard/OverViewCard";

function Home() {
  return (
    <div>
      <div className='container'>
        <Sidebar />
        <Navbar />
        <section className='home'>
          <div style={{ marginTop: "100px" }}>
            <div className='overview_container'>
              <OverViewCard
                icon={"fa-solid fa-envelopes-bulk"}
                number='5'
                subtitle='Created Groups'
              />
              <OverViewCard
                icon={"fa-solid fa-envelope-circle-check"}
                number='5'
                subtitle='Mails Sent'
              />
              <OverViewCard
                icon={"fa-solid fa-envelopes-bulk"}
                number='5'
                subtitle='Created Groups'
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
