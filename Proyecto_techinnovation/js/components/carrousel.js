export default Vue.component("carrousel", {
  props: [],
  data: function () {
    return {};
  },
  computed: {
    isRoot() {},
  },
  methods: {},
  template: `
      <div class="container-fluid px-0">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner" style="max-height: 40vh">
          <div class="carousel-item active">
            <img src="/Proyecto_techinnovation/img/indice1.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="/Proyecto_techinnovation/img/indice2.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="/Proyecto_techinnovation/img/indice3.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    `,
});
