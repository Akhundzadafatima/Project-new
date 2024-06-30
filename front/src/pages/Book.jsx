import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./book.css";

const Book = () => {
  return (
    <div className="book_body">
      <Navbar />

      <div className="cont_book">
        <h1>Rezervasyon</h1>
        <div className="inputs">
          <form action="post">
            <div className="all_inputs">
              <div>
                <label>Ad:</label>
                <br />
                <input type="text" placeholder="Adınız" />
              </div>
              <div>
                <label>Soyad:</label> <br />
                <input type="text" placeholder="Soyadınız" />
              </div>
            </div>
            <div className="all_inputs">
              <div>
                <label>Telefon:</label>
                <br />
                <input type="tel" placeholder="Telefon" />
              </div>
              <div>
                <label>Masa:</label> <br />
                <select>
                  <option value="empty">Masa №</option>
                  <option value="empty">1</option>
                  <option value="empty">2</option>
                  <option value="empty">3</option>
                  <option value="empty">4</option>
                  <option value="empty">5</option>
                  <option value="empty">6</option>
                  <option value="empty">7</option>
                  <option value="empty">8</option>
                  <option value="empty">9</option>
                  <option value="empty">10</option>
                </select>
              </div>
            </div>
            <div className="all_inputs date">
              <div className="date">
                <label>Tarix:</label>
                <br />
                <input type="date" placeholder="Tarix" />
              </div>
              <div className="time">
                <label>Saat:</label> <br />
                <input type="time" placeholder="Saat" />
              </div>
            </div>
            <div className="all_inputs submit">
              <input type="submit" value="Göndər"/>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Book;
