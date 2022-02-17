<template>
  <div class="container">
    <section>
      <h1>Välkommen hit!</h1>
      <p>
        Ibland räcker inte tiden till och då finns vi här för er. Hos oss står
        din hunds välmående alltid i centrum och i naturskön miljö och fräscha
        lokaler vistas vi tillsammans.
      </p>
      <p>
        Här kan din hund göra allt den behöver för att ha roligt på dagarna;
        träffa kompisar och leka på rummet, sträcka på benen och gå på
        upptäcksfärd i de stora rastgårdarna, ta en tupplur i soffan, gräva i
        sandlådan eller bara strosa runt och må gott, helt i sin egen takt.
      </p>
    </section>
    <section>
      <div class="galleri">
        <div><img src="../../assets/tova.jpg" alt="Tova collie tik" /></div>
        <div>
          <img src="../../assets/wille.jpg" alt="William collie hane" />
        </div>
        <div>
          <img src="../../assets/juni.jpg" alt="Juni rescue dog" />
        </div>
      </div>
      <p>
        Vi som driver verksamheten har lång erfarenhet av hundar och drivs av
        att främja deras naturliga beteende och skapa en lika trivsam som
        lekfull miljö.
      </p>
      <p>
        Bilderna ovan föreställer Colliektivet - verksamhetens
        inspirationskällor och ett par av dom kommer ni se tassa runt och hjälpa
        våra gäster till rätta. Välkomna till oss!
      </p>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  font-size: 2rem;
  text-align: center;
}

.galleri img {
  height: 25vh;

}

.galleri {
    display: flex;
  justify-content: space-between;
}

@media only screen and (max-width: 1200px) {
  .galleri img {
    height: 25vh;
  }

  .galleri {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media only screen and (max-width: 800px) {
  .container {
    display: grid;
    grid-template-rows: 1fr 3fr;
    grid-template-columns: none;
  }

    .galleri {
      display: grid;
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-columns: 1fr;
      text-align: center;
    }
    
  .galleri img {
    height: 40vh;
    width: 40vh;
    object-fit: fill;
  }

}
</style>
