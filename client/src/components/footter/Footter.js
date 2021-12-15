import React from "react";

export default function Footter() {
  return (
    <>
      <footer>
        <div className="container">
          {/*Bắt Đầu Nội Dung Giới Thiệu*/}
          <div className="noi-dung about">
            <h2>Về Chúng Tôi</h2>
            <p>Lorem ipsumdolor sit...</p>
            <ul className="social-icon">
              <li>
                <a href>
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href>
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href>
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a href>
                  <i className="fa fa-youtube" />
                </a>
              </li>
            </ul>
          </div>
          {/*Kết Thúc Nội Dung Giới Thiệu*/}
          {/*Bắt Đầu Nội Dung Đường Dẫn*/}
          <div className="noi-dung links">
            <h2>Đường Dẫn</h2>
            <ul>
              <li>
                <a href="/">Trang Chủ</a>
              </li>
              <li>
                <a href="#">Về Chúng Tôi</a>
              </li>
              <li>
                <a href="#">Thông Tin Liên Lạc</a>
              </li>
              <li>
                <a href="#">Dịch Vụ</a>
              </li>
              <li>
                <a href="#">Điều Kiện Chính Sách</a>
              </li>
            </ul>
          </div>
          {/*Kết Thúc Nội Dung Đường Dẫn*/}
          {/*Bắt Đâu Nội Dung Liên Hệ*/}
          <div className="noi-dung contact">
            <h2>Thông Tin Liên Hệ</h2>
            <ul className="info">
              <li>
                <span>
                  <i className="fa fa-map-marker" />
                </span>
                <span>
                  Đường Số 1<br />
                  Quận 1, Thành Phố Hồ Chí Minh
                  <br />
                  Việt Nam
                </span>
              </li>
              <li>
                <span>
                  <i className="fa fa-phone" />
                </span>
                <p>
                  <a href="#">+84 123 456 789</a>
                  <br />
                  <a href="#">+84 987 654 321</a>
                </p>
              </li>
              <li>
                <span>
                  <i className="fa fa-envelope" />
                </span>
                <p>
                  <a href="#">thuongnguyen01685@gmail.com</a>
                </p>
              </li>
            </ul>
          </div>
          {/*Kết Thúc Nội Dung Liên Hệ*/}
        </div>
      </footer>
    </>
  );
}
