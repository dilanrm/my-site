<template>
  <div class="hello">
    <div
      class="jumbotron hero"
      style="background:url('static/img/speaker.jpg') no-repeat center fixed;background-size: cover;min-height: 100vh;"
    >
      <div class="get-it" style="background-color: rgba(255,255,255,0.5); color:black;">
        <h1
          class="text-center"
          style="margin: 0;
                padding: 50px;
                width: 100%;
                display: table;
                font-weight: 450;
                font-family: 'Lato';
                display: inline-block;"
        >WELCOME TO MY PERSONAL WEBSITE</h1>
        <p
          class="text-center"
          style="margin: 0;
                padding-bottom: 50px;
                width: 100%;
                display: table;
                font-weight: bold;
                font-family: 'Lato';
                display: inline-block;"
        >Yukkuri-SITE ite nee</p>
        <a
          style="margin:50px;"
          href="/resume"
          target="_blank"
          class="btn btn-primary btn-lg"
        >My Resume</a>
      </div>
    </div>
    <div style="min-height: 100vh;" id="home">
      <h1>Tech Expertise</h1>
      <div class="container">
        <div class="row">
          <div class="col-xs-3 col-md-2 col-lg-2" v-for="nomor in 16">
            <img :src="path.lang+nomor+ext.png" class="img-responsive" width="100px" height="30px">
          </div>
        </div>
      </div>
    </div>

    <div style="min-height: 100vh;">
      <div id="project">
        <h1>Project</h1>
        <div class="container">
          <div class="row">
            <div class="col-xs-4 col-sm-4">
              <div class="card">
                <img
                  class="card-img-top img-responsive"
                  src="../assets/images/spg.jpg"
                  alt="Gambar"
                  style="height:100px;"
                >
                <div class="card-body">
                  <h3 class="card-title">SPG</h3>
                  <p class="card-text">College project (PHP)</p>
                  <a
                    href="https://untinned-geography.000webhostapp.com/spg"
                    class="btn btn-primary"
                    target="_blank"
                  >Visit>></a>
                </div>
                <div class="card-footer text-muted">Finished</div>
              </div>
            </div>

            <div class="col-xs-4 col-sm-4">
              <div class="card">
                <img
                  class="card-img-top img-responsive"
                  src="../assets/images/ganesha.jpg"
                  alt="Gambar"
                  style="height:100px;"
                >
                <div class="card-body">
                  <h3 class="card-title">Ganesha</h3>
                  <p class="card-text">Freelance project (PHP)</p>
                  <a
                    href="https://webproto-ppc.000webhostapp.com"
                    class="btn btn-primary"
                    target="_blank"
                  >Visit>></a>
                </div>
                <div class="card-footer text-muted">Unfinished</div>
              </div>
            </div>
          </div>
          <div class="more">
            <!--a href="/project" class="btn btn-primary">More>></a-->
          </div>
        </div>
      </div>
    </div>

    <div style="min-height: 100vh;">
      <div id="portfolio">
        <h1>Portfolio</h1>
        <ul class="row">
          <li class="col-lg-2 col-md-2 col-sm-2 col-xs-5" v-for="nomor in 5">
            <img :src="path.cert+nomor+ext.jpg" class="img-responsive">
          </li>
        </ul>
      </div>
    </div>

    <div style="min-height: 100vh;">
      <div id="contact">
        <h1>Contact</h1>
        <div class="container">
          <div class="row">
            <div class="col-sm-5" align="justify">
              <p>Contact me and I'll get back to you within 24 hours.</p>
              <p>
                <span class="glyphicon glyphicon-map-marker"></span> Bogor, ID
              </p>
              <p>
                <span class="glyphicon glyphicon-phone"></span> +62 87873709109
              </p>
              <p>
                <span class="glyphicon glyphicon-envelope"></span> dilanramadhan42@gmail.com
              </p>
            </div>
            <div class="col-sm-7">
              <form id="myform" @submit.prevent="handleSubmit()">
                <div class="row">
                  <div class="col-sm-6 form-group">
                    <input
                      class="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                      type="text"
                      v-model="letter.name"
                      required
                    >
                  </div>
                  <div class="col-sm-6 form-group">
                    <input
                      class="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      v-model="letter.email"
                      required
                    >
                  </div>
                </div>
                <textarea
                  class="form-control"
                  id="comments"
                  name="comments"
                  placeholder="Comment"
                  rows="5"
                  v-model="letter.comments"
                ></textarea>
                <br>
                <div class="row">
                  <div class="col-sm-12 form-group">
                    <button id="send" type="submit" class="btn btn-default pull-right">Send</button>
                  </div>
                </div>
              </form>
              <div id="form_output" style="display:none;"></div>
              <img src="/static/img/load.gif" id="loadingmessage" style="display:none">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="min-height: 100vh;">
      <div id="about">
        <h1>About</h1>
        <p>This site is powered by Vue.js and Bootstrap on the front-end, and Node.js on the back-end.</p>
        <div class="container">
          <div class="row">
            <div class="col-xs-4 col-md-3 col-md-offset-1">
              <img src="../assets/images/logo-v.png" class="img-responsive" width="200px">
            </div>
            <div class="col-xs-4 col-md-3">
              <img src="../assets/images/logo-b.jpg" class="img-responsive" width="200px">
            </div>
            <div class="col-xs-4 col-md-3">
              <img src="../assets/images/logo-n.jpg" class="img-responsive" width="200px">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="myModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      nomor: 1,
      path: {
        lang: "static/img/lang/lang-0",
        cert: "static/img/cert/cert-0"
      },
      ext: {
        png: ".png",
        jpg: ".jpg"
      },
      letter: {
        name: "",
        email: "",
        comments: ""
      },
      errors: []
    };
  },

  methods: {
    handleSubmit() {
      $("#loadingmessage").show();
      $("#form_output")
         .empty()
         .show();
      const params = new URLSearchParams();
      params.append('name', this.letter.name);
      params.append('email', this.letter.email);
      params.append('comments', this.letter.comments);
      axios.post(`http://webproto-ppc.000webhostapp.com/submit.php`, params)
      .then(function (response) {
        $("#loadingmessage")
            .delay(1000)
            .hide();
        $("#form_output")
            .delay(1000)
            .append(response['data']['res'])
            .fadeIn("slow");
        $("#form_output")
            .delay(1000)
            .fadeOut("slow");
        console.log(response['data']['status']);
      })
      .catch(e => {
        this.errors.push(e);
        console.log(this.letter);
        console.log(this.errors);
        $("#loadingmessage").hide();
      });
      // $("#loadingmessage").show();
      // $("#form_output")
      //   .empty()
      //   .show();
      // $.ajax({
      //   async: true,
      //   url: "http://webproto-ppc.000webhostapp.com/submit.php",
      //   crossDomain: true,
      //   type: "POST",
      //   data: $("#myform").serialize(),
      //   dataType: "json",
      //   success: function() {
      //     $("#loadingmessage")
      //       .delay(1000)
      //       .hide();
      //   },
      //   error: function(jXHR, textStatus, errorThrown) {
      //     alert(errorThrown);
      //     $("#loadingmessage").hide();
      //   }
      // }).done(function(response){
      //     $("#form_output")
      //       .delay(1000)
      //       .append(response[0].res)
      //       .fadeIn("slow");
      //     $("#form_output")
      //       .delay(1000)
      //       .fadeOut("slow");
      // });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.more {
  padding-top: 10px;
  text-align: right;
}

li {
  list-style-type: none;
}

.card-title {
  margin-top: 0.25rem;
}
</style>
