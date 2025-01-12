import Feed from "@/components/Feed/Feed";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

const Home: React.FC = () => {
  return (
    <main className="main-container">
      <Header />
      <div className="main-content">
        <Feed />
        <div className="sidebar">
          <Sidebar />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Home;
