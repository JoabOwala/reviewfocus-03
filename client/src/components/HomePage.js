import React, { useEffect, useState } from "react";
//import ArtForm from "./ArtForm";
import ArtList from "./ArtList";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import "../styles/HomePage.css";
import smartphoneImg from "../assets/images/smartphone.png";
import womanSmilesImg from "../assets/images/womansmiles.jpg";
import homeOffice from "../assets/images/home&office1.jpg";

function HomePage({ user }) {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`/users/${user.id}/artworks`)
        .then((response) => response.json())
        .then((artworksData) => {
          setArtworks(artworksData);
        })
        .catch((error) => {
          console.error("Error fetching artworks:", error);
        });
    }
  }, [user]);

  if (user) {
    return (
      <div>
        <h1>Welcome, {user.username}!</h1>
        {/* <ArtForm user={user} /> */}
        <ArtList user={user} artworks={artworks} />
      </div>
    );
  } else {
    return (
      <>
        <Header />
        <NavigationBar />

        <section className="featured-categories">
          <div className="category-card">
            <h2>Electronics</h2>
            <div className="card-image">
              {/* <!-- Placeholder image or image URL --> */}
              <img src={smartphoneImg} alt="Smartphone Image" />
            </div>
            <div className="subcategories">
              <ul>
                <li>Subcategory 1.1</li>
                <li>Subcategory 1.2</li>
                <li>Subcategory 1.3</li>
              </ul>
            </div>
          </div>

          <div className="category-card">
            <h2>Home & Office</h2>
            <div className="card-image">
              {/* <!-- Placeholder image or image URL --> */}
              <img src={homeOffice} alt="Home and Office" />
            </div>
            <div className="subcategories">
              <ul>
                <li>Subcategory 2.1</li>
                <li>Subcategory 2.2</li>
                <li>Subcategory 2.3</li>
              </ul>
            </div>
          </div>

          <div className="category-card">
            <h2>Health & Beauty</h2>
            <div className="card-image">
              {/* <!-- Placeholder image or image URL --> */}
              <img src={womanSmilesImg} alt="Health and Beuaty" />
            </div>
            <div className="subcategories">
              <ul>
                <li>Subcategory 3.1</li>
                <li>Subcategory 3.2</li>
                <li>Subcategory 3.3</li>
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default HomePage;
