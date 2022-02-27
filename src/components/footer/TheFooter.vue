<!-- The component for the footer.-->
<template>
  <footer>
    <div class="footerLogo">
      <h3>Colliektivet</h3>
      <h3>HUNDDAGIS & HUNDPENSIONAT</h3>
    </div>
    <div class="information">
      <div>
        <p>Adressen 123</p>
        <p>83527 Någonstans</p>
      </div>
      <div>
        <p>
          <img
            src="https://img.icons8.com/ios-glyphs/18/000000/phone--v1.png"
          />
          070-5951457
        </p>
      </div>
    </div>
    <!--A div containing social media. -->

    <div class="socialMedia">
      <a target="_blank" href="https://www.facebook.com/sarahlee.gesslin"
        ><i class="fab fa-facebook-square"></i
      ></a>
      <a target="_blank" href="https://www.instagram.com/saltwatersarahlee/"
        ><i class="fab fa-instagram-square"></i
      ></a>
      <a target="_blank" href="https://www.facebook.com/758917640/"
        ><i class="fab fa-facebook-messenger"></i
      ></a>
    </div>
  </footer>
</template>

<!--styling for the footer component -->
<style scoped>
footer {
  position: static;
  bottom: 0;
  width: 100%;
  min-height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #e9e5d6;
}

.footerLogo,
.information, 
.socialMedia  {
  margin: 0 3em;
}

.footerLogo h3 {
  margin: 0;
  color: #4d3d2d;

}

.socialMedia {
  display: flex;
  gap: 2em;
}

.socialMedia a {
  color: #4d3d2d;
}

.information p {
  margin: 0;
  font-weight: bold;
  color: #4d3d2d;

}

i {
  font-size: 2rem;
}
/*styling if screen is smaller than 1200 px*/
@media only screen and (max-width: 1200px) {
  footer {
    position: static;
    bottom: 0;
    width: 100%;
    min-height: 8vh;
    display: flex;
    justify-content: space-between;
    background: #e9e5d6;
  }

  .socialMedia a {
    color: #4d3d2d;
  }

  footer {
  min-height: 16vh;
}
}

/* Styling if screen is smaller than 800 px.*/
@media only screen and (max-width: 800px) {
  footer {
    position: static;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #e9e5d6;
  }

  .footerLogo {
    display: none;
  }

  .information {
    margin: 1em 0 2em 0;
  }
  .socialMedia {
    margin: 0 0 1em 0 ;

  }
  i {
  font-size: 2.3rem;
}
}
</style>
