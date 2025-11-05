var nav = document.getElementById("nav-bar")

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
      justify-content: space-between;
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
      margin: 0 8px;
      color: #1ecac1;
    }

.container-fluid2{ 
  background: linear-gradient(135deg, rgb(3, 52, 110), rgb(3, 52, 110), #03122b07);


  color: #e6d5b8;
   width: 900px;
    
 position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
          font-size: 14px;
            font-weight: 100;
            border-radius: 50px;



}
            
          .top-bar{
    background-color: rgb(7, 15, 43);
}
.nav-item{
    color: rgba(225, 225, 181, 1);
                  transition: 0.3s ease;



}
.logo-img {
  position: absolute;
  bottom: -39px; 
  left: 250px; 
  width: 140px;
  z-index: 10;
  filter: drop-shadow(0px 4px 6px rgba(0,0,0,0.3));
}

}
   


.dropdown-menu {
  z-index: 1000 !important; /* ensure dropdown appears on top */
}
       
    
</style>
   


    <header>
  <div class="top-bar">
    <div class="right-links ">
      <a href="index.html">Home</a> |
      <a href="about.html">About Us</a> |
      <a href="review.html">Review</a> |
      <a href="disclam.html">Disclaimer</a> |
            <a href="contact.html">Contact Us</a> |

      <a href="login.html" target="_blank">Login</a>
    </div>
  </div>

 
</header>


    </div>
`