var nav = document.getElementById("nav-bar-2")

nav.innerHTML = `

<style>
* {
  margin: 0%;
  padding: 0%;
  font-family: 'Poppins', sans-serif;
}

.top-bar {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  color: #d8d8d8;
}

.right-links a {
  margin: 0 8px;
  color: #d6d6d6;
  text-decoration: none;
  transition: 0.3s ease;
}

.right-links a:hover {
  color: #1ecac1;
}

.container-fluid2 {
  background: linear-gradient(135deg, rgb(3, 52, 110), rgb(3, 52, 110), #03122b29);
  color: #e6d5b8;
  width: 700px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 100;
  border-radius: 50px;
}

.top-bar {
  background-color: rgb(7, 15, 43);
}

.nav-item {
  color: rgba(225, 225, 181, 1);
  transition: 0.3s ease;
}

.logo-img {
  position: absolute;
  bottom: -39px;
  left: -55px;
  width: 140px;
  z-index: 10;
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.3));
}

.dropdown-menu {
  z-index: 1000 !important;
}

.parent-nav {
  display: flex;
  justify-content: center;
}

/* ✅ Nested dropdown styling */
.dropdown-submenu {
  position: relative;
}

.dropdown-submenu .dropdown-menu {
  top: 0;
  left: 100%;
  margin-top: -1px;
  display: none;
  position: absolute;
}

.dropdown-submenu:hover .dropdown-menu {
  display: block;
}
</style>

   
<div class="parent-nav">
  <header>
    <div class="container-fluid position-relative">
      <img src="assests/img/logo.png" alt="" class="logo-img">
      <div class="container-fluid2">
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                <li class="nav-item"><a class="nav-link active text-light" href="ent.html">Entertainment</a></li>
                <li class="nav-item"><a class="nav-link active text-light" href="rest.html">Restaurants</a></li>
                <li class="nav-item"><a class="nav-link active text-light" href="gallery.html">Gallery</a></li>
                <li class="nav-item"><a class="nav-link active text-light" href="ticket.html">Tickets & Pricing</a></li>

                <li class="nav-item dropdown">
                  <a class="nav-link active text-light dropdown-toggle" href="#" data-bs-toggle="dropdown">Zones &
                    Attraction</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="kids.html">Kids Zone</a></li>
                    <li><a class="dropdown-item" href="family.html">Family Zone</a></li>
                    <li><a class="dropdown-item" href="water.html">Water Park</a></li>
                    <li><a class="dropdown-item" href="arena.html">Arena</a></li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link active text-light dropdown-toggle" href="#" data-bs-toggle="dropdown">Site-Map</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="INDEX.html">Home</a></li>
                    <li><a class="dropdown-item" href="About.html">About us</a></li>
                    <li><a class="dropdown-item" href="review.html">Review</a></li>
                    <li><a class="dropdown-item" href="disclam.html">Disclaimer</a></li>
                    <li><a class="dropdown-item" href="contact.html">Contact Us</a></li>
                    <li><a class="dropdown-item" target="_blank" href="login.html">Login</a></li>
                    <li><a class="dropdown-item" target="_blank" href="ent.html">Entertainment</a></li>
                    <li><a class="dropdown-item" target="_blank" href="rest.html">Restaurant</a></li>
                    <li><a class="dropdown-item" target="_blank" href="gallery.html">Gallery</a></li>
                    <li><a class="dropdown-item" target="_blank" href="ticket.html">Ticket & Prices</a></li>

                    <!-- ✅ Nested dropdown fix -->
                    <li class="dropdown-submenu">
                      <a class="dropdown-item dropdown-toggle" href="#">Zones & Attraction</a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="kids.html">Kids Zone</a></li>
                        <li><a class="dropdown-item" href="family.html">Family Zone</a></li>
                        <li><a class="dropdown-item" href="water.html">Water Park</a></li>
                        <li><a class="dropdown-item" href="arena.html">Arena</a></li>
                      </ul>
                    </li>

                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</div>
   




    ` ;