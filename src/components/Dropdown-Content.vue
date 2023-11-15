<template>
    <div>
     
      <ul id="nav">
        
           <div class=" container">
              <li ><a href="#">SHOP BY CATEGORY</a>
                  <ul>
                  <li v-for="product in products" :key="product.id"><a href="#" > {{ product.name }} »</a>            
                      <ul v-if="product.subcategories">
                          <li v-for="subcategory in product.subcategories" :key="subcategory.id"><a href="#">{{ subcategory.name }} »</a>
                          <ul v-if="subcategory.items">
                              <li  v-for="item in subcategory.items" :key="item.id"><a href="#">{{ item.name }}</a></li>
                          </ul>
                          </li>
                      </ul>
                  </li>
                  </ul>
              </li>
           </div>
        </ul>
      
  
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import $ from 'jquery';
  export default {
    data() {
      return {
        products: [],
        
      };
    },
  
    methods: {
    //   async getData() {
    //     try {
    //       const response = await axios.get(
    //         "http://localhost:3000/products"
    //       );
    //       this.products = response.data;
    //     //   console.log(this.products);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   },

         async getData() {
        try {
          const response = await axios.get(
            "http://localhost:4000/get-all-data"
          );
          this.products = response.data;
        //   console.log(this.products);
        } catch (error) {
          console.log(error);
        }
      },



    },
    mounted() {
      this.getData();
    },
  };
  
  
  
  
  $(document).ready(function(){
      $("#nav li").hover(
      function(){
          $(this).children('ul').hide();
          $(this).children('ul').slideDown('fast');
      },
      function () {
          $('ul', this).slideUp('fast');            
      });
  });
  
  
  </script>
  
  <style>
  
  
  #nav{
      height: 39px;
      font: 12px Geneva, Arial, Helvetica, sans-serif;
      background: #3AB3A9;
      border: 1px solid #30A097;	
      border-radius: 3px;
      min-width:500px;
      margin-left: 0px;
      padding-left: 0px;
  }	
  
  #nav li{
      list-style: none;
      display: block;
      float: left;
      height: 40px;
      position: relative;
      border-right: 1px solid #52BDB5;
  }
  
  #nav li a{
      padding: 0px 10px 0px 30px;
      margin: 0px 0;
      line-height: 40px;
      text-decoration: none;
      border-right: 1px solid #389E96;
      height: 40px;
      color: #FFF;
      text-shadow: 1px 1px 1px #66696B;
  }
  
  #nav ul{
      background: #f2f5f6; 
      padding: 0px;
      border-bottom: 1px solid #DDDDDD;
      border-right: 1px solid #DDDDDD;
      border-left:1px solid #DDDDDD;
      border-radius: 0px 0px 3px 3px;
      box-shadow: 2px 2px 3px #ECECEC;
      -webkit-box-shadow: 2px 2px 3px #ECECEC;
      -moz-box-shadow:2px 2px 3px #ECECEC;
      width:170px;
  }
  #nav .site-name,#nav .site-name:hover{
      padding-left: 10px;
      padding-right: 10px;
      color: #FFF;
      text-shadow: 1px 1px 1px #66696B;
      font: italic 20px/38px Georgia, "Times New Roman", Times, serif;
      width: 160px;
      border-right: 1px solid #52BDB5;
  }
  #nav .site-name a{
      width: 129px;
      overflow:hidden;
  }
  
  
  
  #nav li:hover{
      background: #3BA39B;
  }
  #nav li a{
      display: block;
  }
  #nav ul li {
      border-right:none;
      border-bottom:1px solid #DDDDDD;
      width:170px;
      height:39px;
  }
  #nav ul li a {
      border-right: none;
      color:#6791AD;
      text-shadow: 1px 1px 1px #FFF;
      border-bottom:1px solid #FFFFFF;
  }
  #nav ul li:hover{background:#DFEEF0;}
  #nav ul li:last-child { border-bottom: none;}
  #nav ul li:last-child a{ border-bottom: none;}
  /* Sub menus */
  #nav ul{
      display: none;
      visibility:hidden;
      position: absolute;
      top: 40px;
  }
  
  /* Third-level menus */
  #nav ul ul{
      top: 0px;
      left:170px;
      display: none;
      visibility:hidden;
      border: 1px solid #DDDDDD;
  }
  /* Fourth-level menus */
  #nav ul ul ul{
      top: 0px;
      left:170px;
      display: none;
      visibility:hidden;
      border: 1px solid #DDDDDD;
  }
  
  #nav ul li{
      display: block;
      visibility:visible;
  }
  #nav li:hover > ul{
      display: block;
      visibility:visible;
  }
  
  
  </style>
  