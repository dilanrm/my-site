<template>
  <div class="hello">
    <a href="/" id="toHome" class="btn btn-default btn-md">
      <span class="glyphicon glyphicon-home"></span> Home
    </a>
    <div style="min-height: 100vh;">
      <div id="project">
        <h1>Project</h1>
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <div class="card">
              <img class="card-img-top" src="../assets/images/spg.jpg" alt="Gambar" height="100px;">
              <div class="card-body">
                <h3 class="card-title">SPG</h3>
                <p class="card-text">College project (PHP)</p>
                <a href="https://untinned-geography.000webhostapp.com/spg" class="btn btn-primary" target="_blank">Visit>></a>
              </div>
              <div class="card-footer text-muted">Finished</div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card">
            <img class="card-img-top" src="../assets/images/ganesha.jpg" alt="Gambar" height="100px;">
            <div class="card-body">
              <h3 class="card-title">Ganesha</h3>
              <p class="card-text">Freelance project (PHP)</p>
              <a href="https://webproto-ppc.000webhostapp.com" class="btn btn-primary" target="_blank">Visit>></a>
            </div>
            <div class="card-footer text-muted">Unfinished</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

#toHome{
  margin:5px 10px;
  float:left;
}

</style>
