    /**
    * @api {get} /user Request All Data User
    * @apiDescription Get All Data table 'user'
    * @apiName GetAllUser
    * @apiGroup User
    *
    * @apiSuccess {Number} id Users ID.
    * @apiSuccess {String} first_name Users Firstname.
    * @apiSuccess {String} last_name Users Lastname.
    * @apiSuccess {String} email Users Email.
    * @apiSuccess {String} gender Users Gender.
    * @apiSuccess {Number} age Users Age.
    * 
    * @apiSuccessExample Success-Response:
    *   SERVER HOST EXPRESS PORT 8888 OK (HOST:PORT/user)
    *   {
    *       "id": 1,
    *       "first_name": "trish",
    *       "last_name": "potebury",
    *       "email": "tpotebury0@artisteer.com",
    *       "gender": "female",
    *       "age": 19,
    *   }
    *   {
    *       "id": 2,
    *       "first_name": "trish",
    *       "last_name": "potebury",
    *       "email": "tpotebury0@artisteer.com",
    *       "gender": "female",
    *       "age": 19,
    *   }
    *   {
    *       "id": 3,
    *       "first_name": "trish",
    *       "last_name": "potebury",
    *       "email": "tpotebury0@artisteer.com",
    *       "gender": "female",
    *       "age": 19,
    *   }
    */ 
    
    /**
    * @api {get} /user/:type/:value1/:value2 Request Condition Data User
    * @apiDescription Get Condition Data table 'user', /:value2 default is null The value is changed when the /:type is a age
    * @apiName GetConditionUser
    * @apiGroup User
    * 
    * @apiParam {Number} type Users include id , first_name , last_name , email , gender , age_single , age.
    *
    * @apiSuccess {Number} id Users ID Condition >> WHERE = value.
    * @apiSuccess {String} first_name Users Firstname Condition >> WHERE like value.
    * @apiSuccess {String} last_name Users Lastname Condition >> WHERE like value.
    * @apiSuccess {String} email Users Email Condition >> WHERE like value.
    * @apiSuccess {String} gender Users Gender Condition >> WHERE = value.
    * @apiSuccess {Number} age_single Users Age Condition >> WHERE = value.
    * @apiSuccess {Number} age Users RangeAge Condition >> WHERE => value1 <= value2.
    * 
    *   @apiSuccessExample Success-Response:
    *   SERVER HOST EXPRESS PORT 8888 OK (HOST:PORT/user/id/5/null)
    *   {
    *       "id": 5,
    *       "first_name": "zitella",
    *       "last_name": "spofforth",
    *       "email": "zspofforth4@mit.edu",
    *       "gender": "female",
    *       "age": 45,
    *   }
    * 
    *   @apiSuccessExample Success-Response:
    *   SERVER HOST EXPRESS PORT 8888 OK (HOST:PORT/user/first_name/sar/null)
    *   {
    *       "id": 583,
    *       "first_name": "sarah",
    *       "last_name": "cossum",
    *       "email": "scossumg6@state.tx.us",
    *       "gender": "female",
    *       "age": 69,
    *   }
    *   {
    *       "id": 581,
    *       "first_name": "sarajane",
    *       "last_name": "isles",
    *       "email": "sislesg4@psu.edu",
    *       "gender": "male",
    *       "age": 58,
    *   }
    * 
    *   @apiSuccessExample Success-Response:
    *   SERVER HOST EXPRESS PORT 8888 OK (HOST:PORT/user/age_single/33/null)
    *   {
    *       "id": 132,
    *       "first_name": "arvin",
    *       "last_name": "last_name",
    *       "email": "aelcoate3n@flavors.me",
    *       "gender": "male",
    *       "age": 33,
    *   }
    *   {
    *       "id": 208,
    *       "first_name": "chloris",
    *       "last_name": "challis",
    *       "email": "cchallis5r@shinystat.com",
    *       "gender": "female",
    *       "age": 33,
    *   }
    * 
    *   @apiSuccessExample Success-Response:
    *   SERVER HOST EXPRESS PORT 8888 OK (HOST:PORT/user/age/22/24)
    *   {
    *       "id": 59,
    *       "first_name": "camala",
    *       "last_name": "pulver",
    *       "email": "cpulver1m@ycombinator.com",
    *       "gender": "male",
    *       "age": 22,
    *   }
    *   {
    *       "id": 30,
    *       "first_name": "claudelle",
    *       "last_name": "volcker",
    *       "email": "cvolckert@networksolutions.com",
    *       "gender": "male",
    *       "age": 23,
    *   }
    * 
    */ 