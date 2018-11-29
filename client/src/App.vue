<template>
  <div id="app">
    <main class="font-weight-bold">
      <div class="container border">
        <label>Ajax Request</label>
        <div class="row">
          <div class="col-md-3">
            <label class="control-label">ค้นหาจาก</label>
            <select class="form-control" v-on:change="getJokes()" v-model="type">
              <option value="id">id</option>
              <option value="first_name">Firstname</option>
              <option value="last_name">Lastname</option>
              <option value="email">Email</option>
              <option value="gender">Gender</option>
              <option value="age">Age</option>
            </select>
          </div>
          <div class="col-md-3">
            <label class="control-label">รายละเอียด</label>
            <!-- {{ chigen }} -->
            <div v-if="selgen">
              <div class="custom-control custom-radio custom-control-inline">
                <input class="custom-control-input" id="customRadioInline1" v-on:change="getJokes()" v-model="chigen" type="radio" value="male">
                <label for="customRadioInline1" class="custom-control-label">Male</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input class="custom-control-input" id="customRadioInline2" v-on:change="getJokes()" v-model="chigen" type="radio" value="female">
                <label for="customRadioInline2" class="custom-control-label">Female</label>
              </div>
            </div>
            <!-- {{ chiage }} -->
            <div v-if="selage">
              <div class="custom-control custom-radio custom-control-inline">
                <input class="custom-control-input" id="customRadioInline3" v-on:change="getJokes()" v-model="chiage" type="radio" value="yes">
                <label for="customRadioInline3" class="custom-control-label">Yes</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input class="custom-control-input" id="customRadioInline4" v-on:change="getJokes()" v-model="chiage" type="radio" value="no">
                <label for="customRadioInline4" class="custom-control-label">No</label>
              </div>
            </div>
            <!-- {{ type }} -->
            <div v-if="textview">
              <input class="form-control" type="text" v-on:keyup="getJokes()" v-model="value" >
              <input class="form-control" v-if="chiage == 'yes'" type="text" v-on:keyup="getJokes()" v-model="value2" >
            </div>
          </div>
          <div class="col-md-3"></div>
        </div>
        <div class="row mt-3">
          <div class="col-md-12 table-responsive ">
            <table class="table table-bordered">
              <thead>
                <tr class="text-center">
                  <th>ID</th>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="status">
                  <tr class="text-center" v-for="row in jokes" :key="row.id">
                    <td>{{ row.id }}</td>
                    <td>{{ row.first_name }}</td>
                    <td>{{ row.last_name }}</td>
                    <td>{{ row.email }}</td>
                    <td>{{ row.gender }}</td>
                    <td>{{ row.age }}</td>
                  </tr>
                </template>
                <template v-else>
                  <tr class="text-center"><td colspan="6">ไม่พบข้อมูล</td></tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </main>
  </div>
</template>
<script>
// import axios from 'axios';
var time;
export default {
  name: 'app',
  data(){
    return {
      jokes: [],
      value: '',
      value2: 'null',
      type: 'id',
      status: false,
      selage: false,
      chiage: 'no',
      selgen: false,
      chigen: 'male',
      textview: true
    }
  }, 

  // axios Type
    // methods: {
    //   getJokes: function() {
    //     this.loading = true;
    //     var PostsUrl = 'http://localhost:8888/user/'+type+'/'+value;
    //     axios.get(PostsUrl)
    //     .then((response)  =>  {
    //       console.log(response.data);
    //       this.loading = false;
    //       this.jokes = response.data;
    //     }, (error)  =>  {
    //       console.log(error)
    //       this.loading = false;
    //     })
    //   }
    // },

  // vue-source Type
    methods: {
      getJokes: function(){
        this.selage = false;
        this.selgen = false;
        this.textview = true;

        var now_type = this.type;
        var value = this.value;
        var value2 = "null";
        var status_all = false;
        var PostsUrl;

        if(this.type == "age"){
          this.selage = true;
          if(this.chiage == "yes"){now_type = "age_multi";value2 = this.value2;}else{now_type = "age_single";}
        }else{this.chiage = "no";}

        if(this.type == "gender"){this.selgen = true;this.textview = false;value = this.chigen;}

        if(this.value == '' || this.value == undefined){status_all = true;}
        
        clearTimeout(time);
        if(status_all){
          PostsUrl = 'http://localhost:8888/user';
        }else{
          PostsUrl = 'http://localhost:8888/user/'+now_type+'/'+value+'/'+value2;
        }
        time = setTimeout(() => {
          this.$http.get(PostsUrl)
          .then((response)=>{
              if(response.data instanceof Array){this.status = true;this.jokes = response.data;
              }else{this.status = false;}
            },(error)=>{console.log(error);}
          );
        },500);
        
      }
    },
    mounted(){
      window.addEventListener('load',()=>{this.getJokes();})
    },
}
</script>

<style>
</style>
