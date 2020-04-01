import React from "react";

import { Header, Footer } from "../organisms";
import { BulletinContent } from "../templates";

const BulletinPage = () => {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#eee" }}
      className="d-flex flex-column"
    >
      <Header />
      <BulletinContent />
      <Footer />
    </div>
  );
};

export default BulletinPage;