import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy.jpg"
            alt="Privacy Policy"
            style={{ width: "50%" }}
            
          />
          
        </div>
        <div className="col-md-4">
        <p>There is no Privacy for the Time Being.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
