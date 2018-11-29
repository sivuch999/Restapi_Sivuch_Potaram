define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_Souppy_Desktop_restapi_ApiDocument_doc_main_js",
    "groupTitle": "C__Users_Souppy_Desktop_restapi_ApiDocument_doc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/user",
    "title": "Request All Data User",
    "description": "<p>Get All Data table 'user'</p>",
    "name": "GetAllUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>Users Firstname.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Users Lastname.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Users Email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Users Gender.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>Users Age.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "SERVER HOST EXPRESS PORT 8888 OK (HOST:PORT/user)\n{\n    \"id\": 1,\n    \"first_name\": \"trish\",\n    \"last_name\": \"potebury\",\n    \"email\": \"tpotebury0@artisteer.com\",\n    \"gender\": \"female\",\n    \"age\": 19,\n}\n{\n    \"id\": 2,\n    \"first_name\": \"trish\",\n    \"last_name\": \"potebury\",\n    \"email\": \"tpotebury0@artisteer.com\",\n    \"gender\": \"female\",\n    \"age\": 19,\n}\n{\n    \"id\": 3,\n    \"first_name\": \"trish\",\n    \"last_name\": \"potebury\",\n    \"email\": \"tpotebury0@artisteer.com\",\n    \"gender\": \"female\",\n    \"age\": 19,\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./API_doc.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:type/:value1/:value2",
    "title": "Request Condition Data User",
    "description": "<p>Get Condition Data table 'user', /:value2 default is null The value is changed when the /:type is a age</p>",
    "name": "GetConditionUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>Users include id , first_name , last_name , email , gender , age_single , age.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users ID Condition &gt;&gt; WHERE = value.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>Users Firstname Condition &gt;&gt; WHERE like value.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Users Lastname Condition &gt;&gt; WHERE like value.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Users Email Condition &gt;&gt; WHERE like value.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Users Gender Condition &gt;&gt; WHERE = value.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age_single",
            "description": "<p>Users Age Condition &gt;&gt; WHERE = value.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>Users RangeAge Condition &gt;&gt; WHERE =&gt; value1 &lt;= value2.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "SERVER HOST EXPRESS PORT 8888 OK (HOST:PORT/user/id/5/null)\n{\n    \"id\": 5,\n    \"first_name\": \"zitella\",\n    \"last_name\": \"spofforth\",\n    \"email\": \"zspofforth4@mit.edu\",\n    \"gender\": \"female\",\n    \"age\": 45,\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "SERVER HOST EXPRESS PORT 8888 OK (HOST:PORT/user/first_name/sar/null)\n{\n    \"id\": 583,\n    \"first_name\": \"sarah\",\n    \"last_name\": \"cossum\",\n    \"email\": \"scossumg6@state.tx.us\",\n    \"gender\": \"female\",\n    \"age\": 69,\n}\n{\n    \"id\": 581,\n    \"first_name\": \"sarajane\",\n    \"last_name\": \"isles\",\n    \"email\": \"sislesg4@psu.edu\",\n    \"gender\": \"male\",\n    \"age\": 58,\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "SERVER HOST EXPRESS PORT 8888 OK (HOST:PORT/user/age_single/33/null)\n{\n    \"id\": 132,\n    \"first_name\": \"arvin\",\n    \"last_name\": \"last_name\",\n    \"email\": \"aelcoate3n@flavors.me\",\n    \"gender\": \"male\",\n    \"age\": 33,\n}\n{\n    \"id\": 208,\n    \"first_name\": \"chloris\",\n    \"last_name\": \"challis\",\n    \"email\": \"cchallis5r@shinystat.com\",\n    \"gender\": \"female\",\n    \"age\": 33,\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "SERVER HOST EXPRESS PORT 8888 OK (HOST:PORT/user/age/22/24)\n{\n    \"id\": 59,\n    \"first_name\": \"camala\",\n    \"last_name\": \"pulver\",\n    \"email\": \"cpulver1m@ycombinator.com\",\n    \"gender\": \"male\",\n    \"age\": 22,\n}\n{\n    \"id\": 30,\n    \"first_name\": \"claudelle\",\n    \"last_name\": \"volcker\",\n    \"email\": \"cvolckert@networksolutions.com\",\n    \"gender\": \"male\",\n    \"age\": 23,\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./API_doc.js",
    "groupTitle": "User"
  }
] });
