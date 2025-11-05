var nav = document.getElementById("footer");

nav.innerHTML = `
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.footer {
  background: radial-gradient(circle at top, #03346e, #021c44);
  color: #f5f0e6;
  padding: 50px 0 20px;
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.08;
}

.footer-container {
  width: 90%;
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
  position: relative;
  z-index: 1;
}

.footer-logo {
  text-align: center;
    position: relative;

}

.footer-logo img {

  width: 180px;
  margin-bottom: 100px;

  filter: drop-shadow(0 0 6px rgba(255,255,255,0.3));
  transition: transform 0.3s ease;
}

.footer-logo img:hover {
  transform: scale(1.1);
}

.footer-logo .brand-name {
  font-size: 1.3rem;
  font-weight: 600;
  color: #e6d5b8;
}

.footer h4 {
  color: #e6d5b8;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 15px;
}

.footer ul {
  list-style: none;
  padding: 0;
}

.footer ul li {
  margin: 8px 0;
}

.footer ul li a {
  text-decoration: none;
  color: #d8d8d8;
  transition: 0.3s;
}

.footer ul li a:hover {
  color: #1ecac1;
  padding-left: 5px;
}

.footer-contact ul li {
  font-size: 0.95rem;
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.2);
  text-align: center;
  margin-top: 40px;
  padding-top: 15px;
  font-size: 0.9rem;
  color: #ccc;
}

.footer-bottom span {
  color: #1ecac1;
  font-weight: 500;
}
</style>

<footer class="footer mt-5">
  <div class="footer-container">
    
    <div class="footer-logo">
        <img src="assests/img/logo.png" alt="Merciado Amusement Park"
 class="logo-img">
    </div>

    <div class="footer-links">
      <h4>Top-Bar</h4>
      <ul>
        <li><a href="INDEX.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="contact.html">Contact Us</a></li>
        <li><a href="review.html">Review</a></li>
        <li><a href="disclam.html">Disclaimer</a></li>
      </ul>
    </div>

    <div class="Quick Links">
      <h4>Company</h4>
      <ul>
        <li><a href="ent.html">Entertainment</a></li>
        <li><a href="rest.html">Restaurants</a></li>
        <li><a href="gallery.html">Gallery</a></li>
        <li><a href="ticket.html">Ticket & Pricing</a></li>
        <li>
          <a class="nav-link dropdown-toggle text-light" href="#" data-bs-toggle="dropdown">Zones & Attraction</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item text-dark" href="#">Kids Zone</a></li>
            <li><a class="dropdown-item text-dark" href="#">Water Park</a></li>
            <li><a class="dropdown-item text-dark" href="#">Arena</a></li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="footer-contact">
      <h4>Contact</h4>
      <ul>
        <li><a href="mailto:info@merciado.com">info@merciado.com</a></li>
        <li><a href="tel:+923001234567">+92 300 1234567</a></li>
        <li>5 km ahead of Clifton City,<br> Karachi, Pakistan</li>
      </ul>
    </div>

  </div>

  <div class="footer-bottom">
    <p>© 2025 Merciado Amusement Park – All Rights Reserved | Designed by <span>Aiesh Amir</span></p>
  </div>
</footer>
`
