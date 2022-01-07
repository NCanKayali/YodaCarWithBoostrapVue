<template>
  <div class="card">
    <b-card no-body class="overflow-hidden" style="max-width: 600px">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            src="https://blog.otomerkezi.net/wp-content/uploads/bugatti-la-voiture-noire.jpg"
            alt="Image"
            class="rounded-0 card-img"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body class="card-text" title="Horizontal Card">
            <b-card-text>
              Car details...
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.card {
    border: none;
    height: 220px;
}
.card-img {
    height: 220px;
    width: 320px;
}

.card-text {
    margin-left: 15px;
}
</style>