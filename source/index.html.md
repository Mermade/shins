---
title: Swagger Petstore 1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - html: JavaScript
  - javascript: Node.JS
  - python: Python
  - ruby: Ruby
toc_footers:
  - Find out more about Swagger
  - '<a href="http://swagger.io">External Docs</a>'
includes: []
search: true
---

# Introduction
Base URL = http://petstore.swagger.io/v2

This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.

<a href="http://swagger.io/terms/">Terms of service</a>
Email: <a href="mailto:apiteam@swagger.io">Support</a>
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>
# Authentication
- oAuth2 authentication. 
- Flow: implicit
- Authorization URL = [http://petstore.swagger.io/oauth/dialog](http://petstore.swagger.io/oauth/dialog)
- Scope: write:pets = modify pets in your account
- Scope: read:pets = read your pets
* apiKey
- Parameter Name: **api_key**, in: header. 
# pet

Everything about your Pets

Find out more about Swagger
<a href="http://swagger.io">External Docs</a>
## POST /pet

> Code samples

````shell
# you can also use wget
curl -X post http://petstore.swagger.io/v2/pet
````
````http
POST http://petstore.swagger.io/v2/pet HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/json
Accept: application/xml
````
````html
<script>
  $.ajax({
    url: 'http://petstore.swagger.io/v2/pet',
    method: 'post',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````
````javascript
const request = require('request');
request('http://petstore.swagger.io/v2/pet');
````
````ruby
require 'rest-client'
require 'json'

result = RestClient.post 'http://petstore.swagger.io/v2/pet', params:
  {
    # TODO
  }

p JSON.parse(result)
````
````python
import requests

r = requests.post('http://petstore.swagger.io/v2/pet', params={
  # TODO
})

print r.json()
````
**addPet**

*Add a new pet to the store*

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
body|body|object|true|Pet object that needs to be added to the store

> Body parameter

````json
{
  "id": 0,
  "category": {},
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {}
  ],
  "status": "available"
}
````
````xml
<?xml version="1.0" encoding="UTF-8" ?>
<Pet>
  <id>0</id>
  <category/>
  <name>doggie</name>
  <photoUrls>string</photoUrls>
  <tags/>
  <status>available</status>
</Pet>
````
### Responses

Status|Meaning|Description
---|--|---|
405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Invalid input
> Example responses


## PUT /pet

> Code samples

````shell
# you can also use wget
curl -X put http://petstore.swagger.io/v2/pet
````
````http
PUT http://petstore.swagger.io/v2/pet HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/json
Accept: application/xml
````
````html
<script>
  $.ajax({
    url: 'http://petstore.swagger.io/v2/pet',
    method: 'put',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````
````javascript
const request = require('request');
request('http://petstore.swagger.io/v2/pet');
````
````ruby
require 'rest-client'
require 'json'

result = RestClient.put 'http://petstore.swagger.io/v2/pet', params:
  {
    # TODO
  }

p JSON.parse(result)
````
````python
import requests

r = requests.put('http://petstore.swagger.io/v2/pet', params={
  # TODO
})

print r.json()
````
**updatePet**

*Update an existing pet*

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
body|body|object|true|Pet object that needs to be added to the store

> Body parameter

````json
{
  "id": 0,
  "category": {},
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {}
  ],
  "status": "available"
}
````
````xml
<?xml version="1.0" encoding="UTF-8" ?>
<Pet>
  <id>0</id>
  <category/>
  <name>doggie</name>
  <photoUrls>string</photoUrls>
  <tags/>
  <status>available</status>
</Pet>
````
### Responses

Status|Meaning|Description
---|--|---|
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Pet not found
405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Validation exception
> Example responses


## GET /pet/findByStatus

> Code samples

````shell
# you can also use wget
curl -X get http://petstore.swagger.io/v2/pet/findByStatus
````
````http
GET http://petstore.swagger.io/v2/pet/findByStatus HTTP/1.1
Host: petstore.swagger.io
Accept: application/xml
````
````html
<script>
  $.ajax({
    url: 'http://petstore.swagger.io/v2/pet/findByStatus',
    method: 'get',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````
````javascript
const request = require('request');
request('http://petstore.swagger.io/v2/pet/findByStatus');
````
````ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://petstore.swagger.io/v2/pet/findByStatus', params:
  {
    # TODO
  }

p JSON.parse(result)
````
````python
import requests

r = requests.get('http://petstore.swagger.io/v2/pet/findByStatus', params={
  # TODO
})

print r.json()
````
**findPetsByStatus**

*Finds Pets by status*

Multiple status values can be provided with comma separated strings

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
status|query|array|true|Status values that need to be considered for filter

### Responses

Status|Meaning|Description
---|--|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid status value
> Example responses


## GET /pet/findByTags

> Code samples

````shell
# you can also use wget
curl -X get http://petstore.swagger.io/v2/pet/findByTags
````
````http
GET http://petstore.swagger.io/v2/pet/findByTags HTTP/1.1
Host: petstore.swagger.io
Accept: application/xml
````
````html
<script>
  $.ajax({
    url: 'http://petstore.swagger.io/v2/pet/findByTags',
    method: 'get',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````
````javascript
const request = require('request');
request('http://petstore.swagger.io/v2/pet/findByTags');
````
````ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://petstore.swagger.io/v2/pet/findByTags', params:
  {
    # TODO
  }

p JSON.parse(result)
````
````python
import requests

r = requests.get('http://petstore.swagger.io/v2/pet/findByTags', params={
  # TODO
})

print r.json()
````
**findPetsByTags**

*Finds Pets by tags*

Muliple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
tags|query|array|true|Tags to filter by

### Responses

Status|Meaning|Description
---|--|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid tag value
> Example responses


## GET /pet/{petId}

> Code samples

````shell
# you can also use wget
curl -X get http://petstore.swagger.io/v2/pet/{petId}
````
````http
GET http://petstore.swagger.io/v2/pet/{petId} HTTP/1.1
Host: petstore.swagger.io
Accept: application/xml
````
````html
<script>
  $.ajax({
    url: 'http://petstore.swagger.io/v2/pet/{petId}',
    method: 'get',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````
````javascript
const request = require('request');
request('http://petstore.swagger.io/v2/pet/{petId}');
````
````ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://petstore.swagger.io/v2/pet/{petId}', params:
  {
    # TODO
  }

p JSON.parse(result)
````
````python
import requests

r = requests.get('http://petstore.swagger.io/v2/pet/{petId}', params={
  # TODO
})

print r.json()
````
**getPetById**

*Find pet by ID*

Returns a single pet

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
petId|path|integer|true|ID of pet to return

### Responses

Status|Meaning|Description
---|--|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Pet not found
> Example responses


## POST /pet/{petId}

> Code samples

````shell
# you can also use wget
curl -X post http://petstore.swagger.io/v2/pet/{petId}
````
````http
POST http://petstore.swagger.io/v2/pet/{petId} HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/x-www-form-urlencoded
Accept: application/xml
````
````html
<script>
  $.ajax({
    url: 'http://petstore.swagger.io/v2/pet/{petId}',
    method: 'post',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````
````javascript
const request = require('request');
request('http://petstore.swagger.io/v2/pet/{petId}');
````
````ruby
require 'rest-client'
require 'json'

result = RestClient.post 'http://petstore.swagger.io/v2/pet/{petId}', params:
  {
    # TODO
  }

p JSON.parse(result)
````
````python
import requests

r = requests.post('http://petstore.swagger.io/v2/pet/{petId}', params={
  # TODO
})

print r.json()
````
**updatePetWithForm**

*Updates a pet in the store with form data*

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
petId|path|integer|true|ID of pet that needs to be updated
name|formData|string|false|Updated name of the pet
status|formData|string|false|Updated status of the pet

### Responses

Status|Meaning|Description
---|--|---|
405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Invalid input
> Example responses


## DELETE /pet/{petId}

> Code samples

````shell
# you can also use wget
curl -X delete http://petstore.swagger.io/v2/pet/{petId}
````
````http
DELETE http://petstore.swagger.io/v2/pet/{petId} HTTP/1.1
Host: petstore.swagger.io
Accept: application/xml
````
````html
<script>
  $.ajax({
    url: 'http://petstore.swagger.io/v2/pet/{petId}',
    method: 'delete',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````
````javascript
const request = require('request');
request('http://petstore.swagger.io/v2/pet/{petId}');
````
````ruby
require 'rest-client'
require 'json'

result = RestClient.delete 'http://petstore.swagger.io/v2/pet/{petId}', params:
  {
    # TODO
  }

p JSON.parse(result)
````
````python
import requests

r = requests.delete('http://petstore.swagger.io/v2/pet/{petId}', params={
  # TODO
})

print r.json()
````
**deletePet**

*Deletes a pet*

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
api_key|header|string|false|No description
petId|path|integer|true|Pet id to delete

### Responses

Status|Meaning|Description
---|--|---|
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Pet not found
> Example responses


## POST /pet/{petId}/uploadImage

> Code samples

````shell
# you can also use wget
curl -X post http://petstore.swagger.io/v2/pet/{petId}/uploadImage
````
````http
POST http://petstore.swagger.io/v2/pet/{petId}/uploadImage HTTP/1.1
Host: petstore.swagger.io
Content-Type: multipart/form-data
Accept: application/json
````
````html
<script>
  $.ajax({
    url: 'http://petstore.swagger.io/v2/pet/{petId}/uploadImage',
    method: 'post',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````
````javascript
const request = require('request');
request('http://petstore.swagger.io/v2/pet/{petId}/uploadImage');
````
````ruby
require 'rest-client'
require 'json'

result = RestClient.post 'http://petstore.swagger.io/v2/pet/{petId}/uploadImage', params:
  {
    # TODO
  }

p JSON.parse(result)
````
````python
import requests

r = requests.post('http://petstore.swagger.io/v2/pet/{petId}/uploadImage', params={
  # TODO
})

print r.json()
````
**uploadFile**

*uploads an image*

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
petId|path|integer|true|ID of pet to update
additionalMetadata|formData|string|false|Additional data to pass to server
file|formData|file|false|file to upload

### Responses

Status|Meaning|Description
---|--|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation
> Example responses


# store

Access to Petstore orders

## GET /store/inventory

> Code samples

````shell
# you can also use wget
curl -X get http://petstore.swagger.io/v2/store/inventory
````
````http
GET http://petstore.swagger.io/v2/store/inventory HTTP/1.1
Host: petstore.swagger.io
Accept: application/json
````
````html
<script>
  $.ajax({
    url: 'http://petstore.swagger.io/v2/store/inventory',
    method: 'get',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````
````javascript
const request = require('request');
request('http://petstore.swagger.io/v2/store/inventory');
````
````ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://petstore.swagger.io/v2/store/inventory', params:
  {
    # TODO
  }

p JSON.parse(result)
````
````python
import requests

r = requests.get('http://petstore.swagger.io/v2/store/inventory', params={
  # TODO
})

print r.json()
````
**getInventory**

*Returns pet inventories by status*

Returns a map of status codes to quantities

### Responses

Status|Meaning|Description
---|--|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation
> Example responses


## POST /store/order

> Code samples

````shell
# you can also use wget
curl -X post http://petstore.swagger.io/v2/store/order
````
````http
POST http://petstore.swagger.io/v2/store/order HTTP/1.1
Host: petstore.swagger.io
Accept: application/xml
````
````html
<script>
  $.ajax({
    url: 'http://petstore.swagger.io/v2/store/order',
    method: 'post',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````
````javascript
const request = require('request');
request('http://petstore.swagger.io/v2/store/order');
````
````ruby
require 'rest-client'
require 'json'

result = RestClient.post 'http://petstore.swagger.io/v2/store/order', params:
  {
    # TODO
  }

p JSON.parse(result)
````
````python
import requests

r = requests.post('http://petstore.swagger.io/v2/store/order', params={
  # TODO
})

print r.json()
````
**placeOrder**

*Place an order for a pet*

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
body|body|object|true|order placed for purchasing the pet

> Body parameter

### Responses

Status|Meaning|Description
---|--|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid Order
> Example responses


## GET /store/order/{orderId}

> Code samples

````shell
# you can also use wget
curl -X get http://petstore.swagger.io/v2/store/order/{orderId}
````
````http
GET http://petstore.swagger.io/v2/store/order/{orderId} HTTP/1.1
Host: petstore.swagger.io
Accept: application/xml
````
````html
<script>
  $.ajax({
    url: 'http://petstore.swagger.io/v2/store/order/{orderId}',
    method: 'get',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````
````javascript
const request = require('request');
request('http://petstore.swagger.io/v2/store/order/{orderId}');
````
````ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://petstore.swagger.io/v2/store/order/{orderId}', params:
  {
    # TODO
  }

p JSON.parse(result)
````
````python
import requests

r = requests.get('http://petstore.swagger.io/v2/store/order/{orderId}', params={
  # TODO
})

print r.json()
````
**getOrderById**

*Find purchase order by ID*

For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
orderId|path|integer|true|ID of pet that needs to be fetched

### Responses

Status|Meaning|Description
---|--|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Order not found
> Example responses


## DELETE /store/order/{orderId}

> Code samples

````shell
# you can also use wget
curl -X delete http://petstore.swagger.io/v2/store/order/{orderId}
````
````http
DELETE http://petstore.swagger.io/v2/store/order/{orderId} HTTP/1.1
Host: petstore.swagger.io
Accept: application/xml
````
````html
<script>
  $.ajax({
    url: 'http://petstore.swagger.io/v2/store/order/{orderId}',
    method: 'delete',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````
````javascript
const request = require('request');
request('http://petstore.swagger.io/v2/store/order/{orderId}');
````
````ruby
require 'rest-client'
require 'json'

result = RestClient.delete 'http://petstore.swagger.io/v2/store/order/{orderId}', params:
  {
    # TODO
  }

p JSON.parse(result)
````
````python
import requests

r = requests.delete('http://petstore.swagger.io/v2/store/order/{orderId}', params={
  # TODO
})

print r.json()
````
**deleteOrder**

*Delete purchase order by ID*

For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
orderId|path|integer|true|ID of the order that needs to be deleted

### Responses

Status|Meaning|Description
---|--|---|
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Order not found
> Example responses


# user

Operations about user

Find out more about Swagger
<a href="http://swagger.io">External Docs</a>
## POST /user

> Code samples

````shell
# you can also use wget
curl -X post http://petstore.swagger.io/v2/user
````
````http
POST http://petstore.swagger.io/v2/user HTTP/1.1
Host: petstore.swagger.io
Accept: application/xml
````
````html
<script>
  $.ajax({
    url: 'http://petstore.swagger.io/v2/user',
    method: 'post',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````
````javascript
const request = require('request');
request('http://petstore.swagger.io/v2/user');
````
````ruby
require 'rest-client'
require 'json'

result = RestClient.post 'http://petstore.swagger.io/v2/user', params:
  {
    # TODO
  }

p JSON.parse(result)
````
````python
import requests

r = requests.post('http://petstore.swagger.io/v2/user', params={
  # TODO
})

print r.json()
````
**createUser**

*Create user*

This can only be done by the logged in user.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
body|body|object|true|Created user object

> Body parameter

### Responses

Status|Meaning|Description
---|--|---|
default|[Unknown](#)|successful operation
> Example responses


## POST /user/createWithArray

> Code samples

````shell
# you can also use wget
curl -X post http://petstore.swagger.io/v2/user/createWithArray
````
````http
POST http://petstore.swagger.io/v2/user/createWithArray HTTP/1.1
Host: petstore.swagger.io
Accept: application/xml
````
````html
<script>
  $.ajax({
    url: 'http://petstore.swagger.io/v2/user/createWithArray',
    method: 'post',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````
````javascript
const request = require('request');
request('http://petstore.swagger.io/v2/user/createWithArray');
````
````ruby
require 'rest-client'
require 'json'

result = RestClient.post 'http://petstore.swagger.io/v2/user/createWithArray', params:
  {
    # TODO
  }

p JSON.parse(result)
````
````python
import requests

r = requests.post('http://petstore.swagger.io/v2/user/createWithArray', params={
  # TODO
})

print r.json()
````
**createUsersWithArrayInput**

*Creates list of users with given input array*

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
body|body|object|true|List of user object

> Body parameter

### Responses

Status|Meaning|Description
---|--|---|
default|[Unknown](#)|successful operation
> Example responses


## POST /user/createWithList

> Code samples

````shell
# you can also use wget
curl -X post http://petstore.swagger.io/v2/user/createWithList
````
````http
POST http://petstore.swagger.io/v2/user/createWithList HTTP/1.1
Host: petstore.swagger.io
Accept: application/xml
````
````html
<script>
  $.ajax({
    url: 'http://petstore.swagger.io/v2/user/createWithList',
    method: 'post',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````
````javascript
const request = require('request');
request('http://petstore.swagger.io/v2/user/createWithList');
````
````ruby
require 'rest-client'
require 'json'

result = RestClient.post 'http://petstore.swagger.io/v2/user/createWithList', params:
  {
    # TODO
  }

p JSON.parse(result)
````
````python
import requests

r = requests.post('http://petstore.swagger.io/v2/user/createWithList', params={
  # TODO
})

print r.json()
````
**createUsersWithListInput**

*Creates list of users with given input array*

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
body|body|object|true|List of user object

> Body parameter

### Responses

Status|Meaning|Description
---|--|---|
default|[Unknown](#)|successful operation
> Example responses


## GET /user/login

> Code samples

````shell
# you can also use wget
curl -X get http://petstore.swagger.io/v2/user/login
````
````http
GET http://petstore.swagger.io/v2/user/login HTTP/1.1
Host: petstore.swagger.io
Accept: application/xml
````
````html
<script>
  $.ajax({
    url: 'http://petstore.swagger.io/v2/user/login',
    method: 'get',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````
````javascript
const request = require('request');
request('http://petstore.swagger.io/v2/user/login');
````
````ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://petstore.swagger.io/v2/user/login', params:
  {
    # TODO
  }

p JSON.parse(result)
````
````python
import requests

r = requests.get('http://petstore.swagger.io/v2/user/login', params={
  # TODO
})

print r.json()
````
**loginUser**

*Logs user into the system*

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
username|query|string|true|The user name for login
password|query|string|true|The password for login in clear text

### Responses

Status|Meaning|Description
---|--|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid username/password supplied
> Example responses


## GET /user/logout

> Code samples

````shell
# you can also use wget
curl -X get http://petstore.swagger.io/v2/user/logout
````
````http
GET http://petstore.swagger.io/v2/user/logout HTTP/1.1
Host: petstore.swagger.io
Accept: application/xml
````
````html
<script>
  $.ajax({
    url: 'http://petstore.swagger.io/v2/user/logout',
    method: 'get',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````
````javascript
const request = require('request');
request('http://petstore.swagger.io/v2/user/logout');
````
````ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://petstore.swagger.io/v2/user/logout', params:
  {
    # TODO
  }

p JSON.parse(result)
````
````python
import requests

r = requests.get('http://petstore.swagger.io/v2/user/logout', params={
  # TODO
})

print r.json()
````
**logoutUser**

*Logs out current logged in user session*

### Responses

Status|Meaning|Description
---|--|---|
default|[Unknown](#)|successful operation
> Example responses


## GET /user/{username}

> Code samples

````shell
# you can also use wget
curl -X get http://petstore.swagger.io/v2/user/{username}
````
````http
GET http://petstore.swagger.io/v2/user/{username} HTTP/1.1
Host: petstore.swagger.io
Accept: application/xml
````
````html
<script>
  $.ajax({
    url: 'http://petstore.swagger.io/v2/user/{username}',
    method: 'get',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````
````javascript
const request = require('request');
request('http://petstore.swagger.io/v2/user/{username}');
````
````ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://petstore.swagger.io/v2/user/{username}', params:
  {
    # TODO
  }

p JSON.parse(result)
````
````python
import requests

r = requests.get('http://petstore.swagger.io/v2/user/{username}', params={
  # TODO
})

print r.json()
````
**getUserByName**

*Get user by user name*

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
username|path|string|true|The name that needs to be fetched. Use user1 for testing. 

### Responses

Status|Meaning|Description
---|--|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid username supplied
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|User not found
> Example responses


## PUT /user/{username}

> Code samples

````shell
# you can also use wget
curl -X put http://petstore.swagger.io/v2/user/{username}
````
````http
PUT http://petstore.swagger.io/v2/user/{username} HTTP/1.1
Host: petstore.swagger.io
Accept: application/xml
````
````html
<script>
  $.ajax({
    url: 'http://petstore.swagger.io/v2/user/{username}',
    method: 'put',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````
````javascript
const request = require('request');
request('http://petstore.swagger.io/v2/user/{username}');
````
````ruby
require 'rest-client'
require 'json'

result = RestClient.put 'http://petstore.swagger.io/v2/user/{username}', params:
  {
    # TODO
  }

p JSON.parse(result)
````
````python
import requests

r = requests.put('http://petstore.swagger.io/v2/user/{username}', params={
  # TODO
})

print r.json()
````
**updateUser**

*Updated user*

This can only be done by the logged in user.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
username|path|string|true|name that need to be updated
body|body|object|true|Updated user object

> Body parameter

### Responses

Status|Meaning|Description
---|--|---|
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid user supplied
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|User not found
> Example responses


## DELETE /user/{username}

> Code samples

````shell
# you can also use wget
curl -X delete http://petstore.swagger.io/v2/user/{username}
````
````http
DELETE http://petstore.swagger.io/v2/user/{username} HTTP/1.1
Host: petstore.swagger.io
Accept: application/xml
````
````html
<script>
  $.ajax({
    url: 'http://petstore.swagger.io/v2/user/{username}',
    method: 'delete',
    success: function(data) {
      console.log(JSON.stringify(data));
    }
  })
</script>
````
````javascript
const request = require('request');
request('http://petstore.swagger.io/v2/user/{username}');
````
````ruby
require 'rest-client'
require 'json'

result = RestClient.delete 'http://petstore.swagger.io/v2/user/{username}', params:
  {
    # TODO
  }

p JSON.parse(result)
````
````python
import requests

r = requests.delete('http://petstore.swagger.io/v2/user/{username}', params={
  # TODO
})

print r.json()
````
**deleteUser**

*Delete user*

This can only be done by the logged in user.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
username|path|string|true|The name that needs to be deleted

### Responses

Status|Meaning|Description
---|--|---|
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid username supplied
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|User not found
> Example responses



