---
title: Swagger Petstore v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - javascript--nodejs: Node.JS
  - python: Python
  - ruby: Ruby
  - java: Java
toc_footers:
  - '<a href="http://swagger.io">Find out more about Swagger</a>'
includes: []
search: true
highlight_theme: darkula
---

# Swagger Petstore v1.0.0

:dog: :cat: :rabbit:

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.

Base URL = <a href="http://petstore.swagger.io/v2">http://petstore.swagger.io/v2</a>

<a href="http://swagger.io/terms/">Terms of service</a>
Email: <a href="mailto:apiteam@swagger.io">Support</a>
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

# Authentication



- oAuth2 authentication. 
    - Flow: implicit
    - Authorization URL = [http://petstore.swagger.io/oauth/dialog](http://petstore.swagger.io/oauth/dialog)

|Scope|Scope Description|
|---|---|
|write:pets|modify pets in your account|
|read:pets|read your pets|



* API Key
    - Parameter Name: **api_key**, in: header. 



# pet

Everything about your Pets

<a href="http://swagger.io">Find out more</a>
## addPet

> Code samples

````shell
# You can also use wget
curl -X post http://petstore.swagger.io/v2/pet \
  -H 'Accept: application/xml' \
  -H 'Content-Type: application/json'

````

````http
POST http://petstore.swagger.io/v2/pet HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/json
Accept: application/xml

````

````javascript
var headers = {
  'Accept':'application/xml',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/pet',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
const inputBody = '{
  "id": 0,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}';
const headers = {
  'Accept':'application/xml',
  'Content-Type':'application/json'

};

fetch('http://petstore.swagger.io/v2/pet',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/xml',
  'Content-Type' => 'application/json'
}

result = RestClient.post 'http://petstore.swagger.io/v2/pet', params: {
  }, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
  'Accept': 'application/xml',
  'Content-Type': 'application/json'
}

r = requests.post('http://petstore.swagger.io/v2/pet', params={

}, headers = headers)

print r.json()
````

````java
URL obj = new URL("http://petstore.swagger.io/v2/pet");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`POST /pet`

*Add a new pet to the store*

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
body|body|Pet|true|Pet object that needs to be added to the store


> Body parameter

````json
{
  "id": 0,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
````
````xml
<?xml version="1.0" encoding="UTF-8" ?>
<Pet>
  <id>0</id>
  <category>
    <id>0</id>
    <name>string</name>
  </category>
  <name>doggie</name>
  <photoUrls>string</photoUrls>
  <tags>
    <id>0</id>
    <name>string</name>
  </tags>
  <status>available</status>
</Pet>
````
### Responses

Status|Meaning|Description
---|---|---|
405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Invalid input

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write:pets read:pets )
</aside>

## updatePet

> Code samples

````shell
# You can also use wget
curl -X put http://petstore.swagger.io/v2/pet \
  -H 'Accept: application/xml' \
  -H 'Content-Type: application/json'

````

````http
PUT http://petstore.swagger.io/v2/pet HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/json
Accept: application/xml

````

````javascript
var headers = {
  'Accept':'application/xml',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/pet',
  method: 'put',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
const inputBody = '{
  "id": 0,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}';
const headers = {
  'Accept':'application/xml',
  'Content-Type':'application/json'

};

fetch('http://petstore.swagger.io/v2/pet',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/xml',
  'Content-Type' => 'application/json'
}

result = RestClient.put 'http://petstore.swagger.io/v2/pet', params: {
  }, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
  'Accept': 'application/xml',
  'Content-Type': 'application/json'
}

r = requests.put('http://petstore.swagger.io/v2/pet', params={

}, headers = headers)

print r.json()
````

````java
URL obj = new URL("http://petstore.swagger.io/v2/pet");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`PUT /pet`

*Update an existing pet*

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
body|body|Pet|true|Pet object that needs to be added to the store


> Body parameter

````json
{
  "id": 0,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
````
````xml
<?xml version="1.0" encoding="UTF-8" ?>
<Pet>
  <id>0</id>
  <category>
    <id>0</id>
    <name>string</name>
  </category>
  <name>doggie</name>
  <photoUrls>string</photoUrls>
  <tags>
    <id>0</id>
    <name>string</name>
  </tags>
  <status>available</status>
</Pet>
````
### Responses

Status|Meaning|Description
---|---|---|
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Pet not found
405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Validation exception

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write:pets read:pets )
</aside>

## findPetsByStatus

> Code samples

````shell
# You can also use wget
curl -X get http://petstore.swagger.io/v2/pet/findByStatus?status=... \
  -H 'Accept: application/xml' \
  -H 'Content-Type: application/xml'

````

````http
GET http://petstore.swagger.io/v2/pet/findByStatus?status=... HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/xml
Accept: application/xml

````

````javascript
var headers = {
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/pet/findByStatus',
  method: 'get',
  data: '?status=...',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

const headers = {
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

fetch('http://petstore.swagger.io/v2/pet/findByStatus?status=...',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/xml',
  'Content-Type' => 'application/xml'
}

result = RestClient.get 'http://petstore.swagger.io/v2/pet/findByStatus', params: {
  'status' => 'array[string]'
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
  'Accept': 'application/xml',
  'Content-Type': 'application/xml'
}

r = requests.get('http://petstore.swagger.io/v2/pet/findByStatus', params={
  'status': [
  "string"
]
}, headers = headers)

print r.json()
````

````java
URL obj = new URL("http://petstore.swagger.io/v2/pet/findByStatus?status=...");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /pet/findByStatus`

*Finds Pets by status*

Multiple status values can be provided with comma separated strings

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
status|query|array[string]|true|Status values that need to be considered for filter


#### Enumerated Values

|Parameter|Value|
|---|---|
status|available|
status|pending|
status|sold|

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid status value

> Example responses

````json
[
  {
    "id": 0,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  }
]
````
````xml
<?xml version="1.0" encoding="UTF-8" ?>
<id>0</id>
<category>
  <id>0</id>
  <name>string</name>
</category>
<name>doggie</name>
<photoUrls>string</photoUrls>
<tags>
  <id>0</id>
  <name>string</name>
</tags>
<status>available</status>
````
<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write:pets read:pets )
</aside>

## findPetsByTags

> Code samples

````shell
# You can also use wget
curl -X get http://petstore.swagger.io/v2/pet/findByTags?tags=... \
  -H 'Accept: application/xml' \
  -H 'Content-Type: application/xml'

````

````http
GET http://petstore.swagger.io/v2/pet/findByTags?tags=... HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/xml
Accept: application/xml

````

````javascript
var headers = {
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/pet/findByTags',
  method: 'get',
  data: '?tags=...',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

const headers = {
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

fetch('http://petstore.swagger.io/v2/pet/findByTags?tags=...',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/xml',
  'Content-Type' => 'application/xml'
}

result = RestClient.get 'http://petstore.swagger.io/v2/pet/findByTags', params: {
  'tags' => 'array[string]'
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
  'Accept': 'application/xml',
  'Content-Type': 'application/xml'
}

r = requests.get('http://petstore.swagger.io/v2/pet/findByTags', params={
  'tags': [
  "string"
]
}, headers = headers)

print r.json()
````

````java
URL obj = new URL("http://petstore.swagger.io/v2/pet/findByTags?tags=...");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /pet/findByTags`

*Finds Pets by tags*

Muliple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
tags|query|array[string]|true|Tags to filter by


### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid tag value

> Example responses

````json
[
  {
    "id": 0,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  }
]
````
````xml
<?xml version="1.0" encoding="UTF-8" ?>
<id>0</id>
<category>
  <id>0</id>
  <name>string</name>
</category>
<name>doggie</name>
<photoUrls>string</photoUrls>
<tags>
  <id>0</id>
  <name>string</name>
</tags>
<status>available</status>
````
<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write:pets read:pets )
</aside>

## getPetById

> Code samples

````shell
# You can also use wget
curl -X get http://petstore.swagger.io/v2/pet/{petId} \
  -H 'Accept: application/xml' \
  -H 'Content-Type: application/xml'

````

````http
GET http://petstore.swagger.io/v2/pet/{petId} HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/xml
Accept: application/xml

````

````javascript
var headers = {
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/pet/{petId}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

const headers = {
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

fetch('http://petstore.swagger.io/v2/pet/{petId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/xml',
  'Content-Type' => 'application/xml'
}

result = RestClient.get 'http://petstore.swagger.io/v2/pet/{petId}', params: {
  }, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
  'Accept': 'application/xml',
  'Content-Type': 'application/xml'
}

r = requests.get('http://petstore.swagger.io/v2/pet/{petId}', params={

}, headers = headers)

print r.json()
````

````java
URL obj = new URL("http://petstore.swagger.io/v2/pet/{petId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /pet/{petId}`

*Find pet by ID*

Returns a single pet

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
petId|path|integer|true|ID of pet to return


### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Pet not found

> Example responses

````json
{
  "id": 0,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
````
````xml
<?xml version="1.0" encoding="UTF-8" ?>
<Pet>
  <id>0</id>
  <category>
    <id>0</id>
    <name>string</name>
  </category>
  <name>doggie</name>
  <photoUrls>string</photoUrls>
  <tags>
    <id>0</id>
    <name>string</name>
  </tags>
  <status>available</status>
</Pet>
````
<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## updatePetWithForm

> Code samples

````shell
# You can also use wget
curl -X post http://petstore.swagger.io/v2/pet/{petId} \
  -H 'Accept: application/xml' \
  -H 'Content-Type: application/x-www-form-urlencoded'

````

````http
POST http://petstore.swagger.io/v2/pet/{petId} HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/x-www-form-urlencoded
Accept: application/xml

````

````javascript
var headers = {
  'Accept':'application/xml',
  'Content-Type':'application/x-www-form-urlencoded'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/pet/{petId}',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

const headers = {
  'Accept':'application/xml',
  'Content-Type':'application/x-www-form-urlencoded'

};

fetch('http://petstore.swagger.io/v2/pet/{petId}',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/xml',
  'Content-Type' => 'application/x-www-form-urlencoded'
}

result = RestClient.post 'http://petstore.swagger.io/v2/pet/{petId}', params: {
  }, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
  'Accept': 'application/xml',
  'Content-Type': 'application/x-www-form-urlencoded'
}

r = requests.post('http://petstore.swagger.io/v2/pet/{petId}', params={

}, headers = headers)

print r.json()
````

````java
URL obj = new URL("http://petstore.swagger.io/v2/pet/{petId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`POST /pet/{petId}`

*Updates a pet in the store with form data*

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
petId|path|integer|true|ID of pet that needs to be updated
name|formData|string|false|Updated name of the pet
status|formData|string|false|Updated status of the pet


### Responses

Status|Meaning|Description
---|---|---|
405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Invalid input

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write:pets read:pets )
</aside>

## deletePet

> Code samples

````shell
# You can also use wget
curl -X delete http://petstore.swagger.io/v2/pet/{petId} \
  -H 'api_key: string' \
  -H 'Accept: application/xml' \
  -H 'Content-Type: application/xml'

````

````http
DELETE http://petstore.swagger.io/v2/pet/{petId} HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/xml
Accept: application/xml
api_key: string

````

````javascript
var headers = {
  'api_key':'string',
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/pet/{petId}',
  method: 'delete',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

const headers = {
  'api_key':'string',
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

fetch('http://petstore.swagger.io/v2/pet/{petId}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
  'api_key' => 'string',
  'Accept' => 'application/xml',
  'Content-Type' => 'application/xml'
}

result = RestClient.delete 'http://petstore.swagger.io/v2/pet/{petId}', params: {
  }, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
  'api_key': 'string',
  'Accept': 'application/xml',
  'Content-Type': 'application/xml'
}

r = requests.delete('http://petstore.swagger.io/v2/pet/{petId}', params={

}, headers = headers)

print r.json()
````

````java
URL obj = new URL("http://petstore.swagger.io/v2/pet/{petId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`DELETE /pet/{petId}`

*Deletes a pet*

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
api_key|header|string|false|No description
petId|path|integer|true|Pet id to delete


### Responses

Status|Meaning|Description
---|---|---|
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Pet not found

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write:pets read:pets )
</aside>

## uploadFile

> Code samples

````shell
# You can also use wget
curl -X post http://petstore.swagger.io/v2/pet/{petId}/uploadImage \
  -H 'Accept: application/json' \
  -H 'Content-Type: multipart/form-data'

````

````http
POST http://petstore.swagger.io/v2/pet/{petId}/uploadImage HTTP/1.1
Host: petstore.swagger.io
Content-Type: multipart/form-data
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'multipart/form-data'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/pet/{petId}/uploadImage',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'Content-Type':'multipart/form-data'

};

fetch('http://petstore.swagger.io/v2/pet/{petId}/uploadImage',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Content-Type' => 'multipart/form-data'
}

result = RestClient.post 'http://petstore.swagger.io/v2/pet/{petId}/uploadImage', params: {
  }, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
  'Accept': 'application/json',
  'Content-Type': 'multipart/form-data'
}

r = requests.post('http://petstore.swagger.io/v2/pet/{petId}/uploadImage', params={

}, headers = headers)

print r.json()
````

````java
URL obj = new URL("http://petstore.swagger.io/v2/pet/{petId}/uploadImage");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`POST /pet/{petId}/uploadImage`

*uploads an image*

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
petId|path|integer|true|ID of pet to update
additionalMetadata|formData|string|false|Additional data to pass to server
file|formData|file|false|file to upload


### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation

> Example responses

````json
{
  "code": 0,
  "type": "string",
  "message": "string"
}
````
<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: write:pets read:pets )
</aside>

# store

Access to Petstore orders

## getInventory

> Code samples

````shell
# You can also use wget
curl -X get http://petstore.swagger.io/v2/store/inventory \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json'

````

````http
GET http://petstore.swagger.io/v2/store/inventory HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/json
Accept: application/json

````

````javascript
var headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/store/inventory',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'Content-Type':'application/json'

};

fetch('http://petstore.swagger.io/v2/store/inventory',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Content-Type' => 'application/json'
}

result = RestClient.get 'http://petstore.swagger.io/v2/store/inventory', params: {
  }, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

r = requests.get('http://petstore.swagger.io/v2/store/inventory', params={

}, headers = headers)

print r.json()
````

````java
URL obj = new URL("http://petstore.swagger.io/v2/store/inventory");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /store/inventory`

*Returns pet inventories by status*

Returns a map of status codes to quantities

### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation

> Example responses

````json
{
  "property1": 0,
  "property2": 0
}
````
<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey
</aside>

## placeOrder

> Code samples

````shell
# You can also use wget
curl -X post http://petstore.swagger.io/v2/store/order \
  -H 'Accept: application/xml' \
  -H 'Content-Type: application/xml'

````

````http
POST http://petstore.swagger.io/v2/store/order HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/xml
Accept: application/xml

````

````javascript
var headers = {
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/store/order',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
const inputBody = '{
  "id": 0,
  "petId": 0,
  "quantity": 0,
  "shipDate": "2017-04-12T18:18:06Z",
  "status": "placed",
  "complete": false
}';
const headers = {
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

fetch('http://petstore.swagger.io/v2/store/order',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/xml',
  'Content-Type' => 'application/xml'
}

result = RestClient.post 'http://petstore.swagger.io/v2/store/order', params: {
  }, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
  'Accept': 'application/xml',
  'Content-Type': 'application/xml'
}

r = requests.post('http://petstore.swagger.io/v2/store/order', params={

}, headers = headers)

print r.json()
````

````java
URL obj = new URL("http://petstore.swagger.io/v2/store/order");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`POST /store/order`

*Place an order for a pet*

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
body|body|Order|true|order placed for purchasing the pet


> Body parameter

````json
{
  "id": 0,
  "petId": 0,
  "quantity": 0,
  "shipDate": "2017-04-12T18:18:06Z",
  "status": "placed",
  "complete": false
}
````
````xml
<?xml version="1.0" encoding="UTF-8" ?>
<Order>
  <id>0</id>
  <petId>0</petId>
  <quantity>0</quantity>
  <shipDate>2017-04-12T18:18:06Z</shipDate>
  <status>placed</status>
  <complete>false</complete>
</Order>
````
### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid Order

> Example responses

````json
{
  "id": 0,
  "petId": 0,
  "quantity": 0,
  "shipDate": "2017-04-12T18:18:06Z",
  "status": "placed",
  "complete": false
}
````
````xml
<?xml version="1.0" encoding="UTF-8" ?>
<Order>
  <id>0</id>
  <petId>0</petId>
  <quantity>0</quantity>
  <shipDate>2017-04-12T18:18:06Z</shipDate>
  <status>placed</status>
  <complete>false</complete>
</Order>
````
<aside class="success">
This operation does not require authentication
</aside>

## getOrderById

> Code samples

````shell
# You can also use wget
curl -X get http://petstore.swagger.io/v2/store/order/{orderId} \
  -H 'Accept: application/xml' \
  -H 'Content-Type: application/xml'

````

````http
GET http://petstore.swagger.io/v2/store/order/{orderId} HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/xml
Accept: application/xml

````

````javascript
var headers = {
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/store/order/{orderId}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

const headers = {
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

fetch('http://petstore.swagger.io/v2/store/order/{orderId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/xml',
  'Content-Type' => 'application/xml'
}

result = RestClient.get 'http://petstore.swagger.io/v2/store/order/{orderId}', params: {
  }, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
  'Accept': 'application/xml',
  'Content-Type': 'application/xml'
}

r = requests.get('http://petstore.swagger.io/v2/store/order/{orderId}', params={

}, headers = headers)

print r.json()
````

````java
URL obj = new URL("http://petstore.swagger.io/v2/store/order/{orderId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /store/order/{orderId}`

*Find purchase order by ID*

For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
orderId|path|integer|true|ID of pet that needs to be fetched


### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Order not found

> Example responses

````json
{
  "id": 0,
  "petId": 0,
  "quantity": 0,
  "shipDate": "2017-04-12T18:18:06Z",
  "status": "placed",
  "complete": false
}
````
````xml
<?xml version="1.0" encoding="UTF-8" ?>
<Order>
  <id>0</id>
  <petId>0</petId>
  <quantity>0</quantity>
  <shipDate>2017-04-12T18:18:06Z</shipDate>
  <status>placed</status>
  <complete>false</complete>
</Order>
````
<aside class="success">
This operation does not require authentication
</aside>

## deleteOrder

> Code samples

````shell
# You can also use wget
curl -X delete http://petstore.swagger.io/v2/store/order/{orderId} \
  -H 'Accept: application/xml' \
  -H 'Content-Type: application/xml'

````

````http
DELETE http://petstore.swagger.io/v2/store/order/{orderId} HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/xml
Accept: application/xml

````

````javascript
var headers = {
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/store/order/{orderId}',
  method: 'delete',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

const headers = {
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

fetch('http://petstore.swagger.io/v2/store/order/{orderId}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/xml',
  'Content-Type' => 'application/xml'
}

result = RestClient.delete 'http://petstore.swagger.io/v2/store/order/{orderId}', params: {
  }, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
  'Accept': 'application/xml',
  'Content-Type': 'application/xml'
}

r = requests.delete('http://petstore.swagger.io/v2/store/order/{orderId}', params={

}, headers = headers)

print r.json()
````

````java
URL obj = new URL("http://petstore.swagger.io/v2/store/order/{orderId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`DELETE /store/order/{orderId}`

*Delete purchase order by ID*

For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
orderId|path|integer|true|ID of the order that needs to be deleted


### Responses

Status|Meaning|Description
---|---|---|
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Order not found

<aside class="success">
This operation does not require authentication
</aside>

# user

Operations about user

<a href="http://swagger.io">Find out more about our store</a>
## createUser

> Code samples

````shell
# You can also use wget
curl -X post http://petstore.swagger.io/v2/user \
  -H 'Accept: application/xml' \
  -H 'Content-Type: application/xml'

````

````http
POST http://petstore.swagger.io/v2/user HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/xml
Accept: application/xml

````

````javascript
var headers = {
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/user',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
const inputBody = '{
  "id": 0,
  "username": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "password": "string",
  "phone": "string",
  "userStatus": 0
}';
const headers = {
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

fetch('http://petstore.swagger.io/v2/user',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/xml',
  'Content-Type' => 'application/xml'
}

result = RestClient.post 'http://petstore.swagger.io/v2/user', params: {
  }, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
  'Accept': 'application/xml',
  'Content-Type': 'application/xml'
}

r = requests.post('http://petstore.swagger.io/v2/user', params={

}, headers = headers)

print r.json()
````

````java
URL obj = new URL("http://petstore.swagger.io/v2/user");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`POST /user`

*Create user*

This can only be done by the logged in user.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
body|body|User|true|Created user object


> Body parameter

````json
{
  "id": 0,
  "username": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "password": "string",
  "phone": "string",
  "userStatus": 0
}
````
````xml
<?xml version="1.0" encoding="UTF-8" ?>
<User>
  <id>0</id>
  <username>string</username>
  <firstName>string</firstName>
  <lastName>string</lastName>
  <email>string</email>
  <password>string</password>
  <phone>string</phone>
  <userStatus>0</userStatus>
</User>
````
### Responses

Status|Meaning|Description
---|---|---|
default|Default|successful operation

<aside class="success">
This operation does not require authentication
</aside>

## createUsersWithArrayInput

> Code samples

````shell
# You can also use wget
curl -X post http://petstore.swagger.io/v2/user/createWithArray \
  -H 'Accept: application/xml' \
  -H 'Content-Type: application/xml'

````

````http
POST http://petstore.swagger.io/v2/user/createWithArray HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/xml
Accept: application/xml

````

````javascript
var headers = {
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/user/createWithArray',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
const inputBody = '[
  {
    "id": 0,
    "username": "string",
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "password": "string",
    "phone": "string",
    "userStatus": 0
  }
]';
const headers = {
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

fetch('http://petstore.swagger.io/v2/user/createWithArray',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/xml',
  'Content-Type' => 'application/xml'
}

result = RestClient.post 'http://petstore.swagger.io/v2/user/createWithArray', params: {
  }, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
  'Accept': 'application/xml',
  'Content-Type': 'application/xml'
}

r = requests.post('http://petstore.swagger.io/v2/user/createWithArray', params={

}, headers = headers)

print r.json()
````

````java
URL obj = new URL("http://petstore.swagger.io/v2/user/createWithArray");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`POST /user/createWithArray`

*Creates list of users with given input array*

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
body|body|array[User]|true|List of user object


> Body parameter

````json
[
  {
    "id": 0,
    "username": "string",
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "password": "string",
    "phone": "string",
    "userStatus": 0
  }
]
````
````xml
<?xml version="1.0" encoding="UTF-8" ?>
<id>0</id>
<username>string</username>
<firstName>string</firstName>
<lastName>string</lastName>
<email>string</email>
<password>string</password>
<phone>string</phone>
<userStatus>0</userStatus>
````
### Responses

Status|Meaning|Description
---|---|---|
default|Default|successful operation

<aside class="success">
This operation does not require authentication
</aside>

## createUsersWithListInput

> Code samples

````shell
# You can also use wget
curl -X post http://petstore.swagger.io/v2/user/createWithList \
  -H 'Accept: application/xml' \
  -H 'Content-Type: application/xml'

````

````http
POST http://petstore.swagger.io/v2/user/createWithList HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/xml
Accept: application/xml

````

````javascript
var headers = {
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/user/createWithList',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
const inputBody = '[
  {
    "id": 0,
    "username": "string",
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "password": "string",
    "phone": "string",
    "userStatus": 0
  }
]';
const headers = {
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

fetch('http://petstore.swagger.io/v2/user/createWithList',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/xml',
  'Content-Type' => 'application/xml'
}

result = RestClient.post 'http://petstore.swagger.io/v2/user/createWithList', params: {
  }, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
  'Accept': 'application/xml',
  'Content-Type': 'application/xml'
}

r = requests.post('http://petstore.swagger.io/v2/user/createWithList', params={

}, headers = headers)

print r.json()
````

````java
URL obj = new URL("http://petstore.swagger.io/v2/user/createWithList");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`POST /user/createWithList`

*Creates list of users with given input array*

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
body|body|array[User]|true|List of user object


> Body parameter

````json
[
  {
    "id": 0,
    "username": "string",
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "password": "string",
    "phone": "string",
    "userStatus": 0
  }
]
````
````xml
<?xml version="1.0" encoding="UTF-8" ?>
<id>0</id>
<username>string</username>
<firstName>string</firstName>
<lastName>string</lastName>
<email>string</email>
<password>string</password>
<phone>string</phone>
<userStatus>0</userStatus>
````
### Responses

Status|Meaning|Description
---|---|---|
default|Default|successful operation

<aside class="success">
This operation does not require authentication
</aside>

## loginUser

> Code samples

````shell
# You can also use wget
curl -X get http://petstore.swagger.io/v2/user/login?username=string&password=pa%24%24word \
  -H 'Accept: application/xml' \
  -H 'Content-Type: application/xml'

````

````http
GET http://petstore.swagger.io/v2/user/login?username=string&password=pa%24%24word HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/xml
Accept: application/xml

````

````javascript
var headers = {
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/user/login',
  method: 'get',
  data: '?username=string&password=pa%24%24word',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

const headers = {
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

fetch('http://petstore.swagger.io/v2/user/login?username=string&password=pa%24%24word',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/xml',
  'Content-Type' => 'application/xml'
}

result = RestClient.get 'http://petstore.swagger.io/v2/user/login', params: {
  'username' => 'string',
'password' => 'string'
}, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
  'Accept': 'application/xml',
  'Content-Type': 'application/xml'
}

r = requests.get('http://petstore.swagger.io/v2/user/login', params={
  'username': 'string',  'password': 'pa$$word'
}, headers = headers)

print r.json()
````

````java
URL obj = new URL("http://petstore.swagger.io/v2/user/login?username=string&password=pa%24%24word");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /user/login`

*Logs user into the system*

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
username|query|string|true|The user name for login
password|query|string|true|The password for login in clear text


### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid username/password supplied

### Response Headers

Status|Header|Type|Format|Description
---|---|---|---|---|
200|X-Rate-Limit|integer|int32|calls per hour allowed by the user
200|X-Expires-After|string|date-time|date in UTC when token expires

> Example responses

````json
"string"
````
<aside class="success">
This operation does not require authentication
</aside>

## logoutUser

> Code samples

````shell
# You can also use wget
curl -X get http://petstore.swagger.io/v2/user/logout \
  -H 'Accept: application/xml' \
  -H 'Content-Type: application/xml'

````

````http
GET http://petstore.swagger.io/v2/user/logout HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/xml
Accept: application/xml

````

````javascript
var headers = {
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/user/logout',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

const headers = {
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

fetch('http://petstore.swagger.io/v2/user/logout',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/xml',
  'Content-Type' => 'application/xml'
}

result = RestClient.get 'http://petstore.swagger.io/v2/user/logout', params: {
  }, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
  'Accept': 'application/xml',
  'Content-Type': 'application/xml'
}

r = requests.get('http://petstore.swagger.io/v2/user/logout', params={

}, headers = headers)

print r.json()
````

````java
URL obj = new URL("http://petstore.swagger.io/v2/user/logout");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /user/logout`

*Logs out current logged in user session*

### Responses

Status|Meaning|Description
---|---|---|
default|Default|successful operation

<aside class="success">
This operation does not require authentication
</aside>

## getUserByName

> Code samples

````shell
# You can also use wget
curl -X get http://petstore.swagger.io/v2/user/{username} \
  -H 'Accept: application/xml' \
  -H 'Content-Type: application/xml'

````

````http
GET http://petstore.swagger.io/v2/user/{username} HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/xml
Accept: application/xml

````

````javascript
var headers = {
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/user/{username}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

const headers = {
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

fetch('http://petstore.swagger.io/v2/user/{username}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/xml',
  'Content-Type' => 'application/xml'
}

result = RestClient.get 'http://petstore.swagger.io/v2/user/{username}', params: {
  }, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
  'Accept': 'application/xml',
  'Content-Type': 'application/xml'
}

r = requests.get('http://petstore.swagger.io/v2/user/{username}', params={

}, headers = headers)

print r.json()
````

````java
URL obj = new URL("http://petstore.swagger.io/v2/user/{username}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`GET /user/{username}`

*Get user by user name*

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
username|path|string|true|The name that needs to be fetched. Use user1 for testing. 


### Responses

Status|Meaning|Description
---|---|---|
200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid username supplied
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|User not found

> Example responses

````json
{
  "id": 0,
  "username": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "password": "string",
  "phone": "string",
  "userStatus": 0
}
````
````xml
<?xml version="1.0" encoding="UTF-8" ?>
<User>
  <id>0</id>
  <username>string</username>
  <firstName>string</firstName>
  <lastName>string</lastName>
  <email>string</email>
  <password>string</password>
  <phone>string</phone>
  <userStatus>0</userStatus>
</User>
````
<aside class="success">
This operation does not require authentication
</aside>

## updateUser

> Code samples

````shell
# You can also use wget
curl -X put http://petstore.swagger.io/v2/user/{username} \
  -H 'Accept: application/xml' \
  -H 'Content-Type: application/xml'

````

````http
PUT http://petstore.swagger.io/v2/user/{username} HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/xml
Accept: application/xml

````

````javascript
var headers = {
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/user/{username}',
  method: 'put',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');
const inputBody = '{
  "id": 0,
  "username": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "password": "string",
  "phone": "string",
  "userStatus": 0
}';
const headers = {
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

fetch('http://petstore.swagger.io/v2/user/{username}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/xml',
  'Content-Type' => 'application/xml'
}

result = RestClient.put 'http://petstore.swagger.io/v2/user/{username}', params: {
  }, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
  'Accept': 'application/xml',
  'Content-Type': 'application/xml'
}

r = requests.put('http://petstore.swagger.io/v2/user/{username}', params={

}, headers = headers)

print r.json()
````

````java
URL obj = new URL("http://petstore.swagger.io/v2/user/{username}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`PUT /user/{username}`

*Updated user*

This can only be done by the logged in user.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
username|path|string|true|name that need to be updated
body|body|User|true|Updated user object


> Body parameter

````json
{
  "id": 0,
  "username": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "password": "string",
  "phone": "string",
  "userStatus": 0
}
````
````xml
<?xml version="1.0" encoding="UTF-8" ?>
<User>
  <id>0</id>
  <username>string</username>
  <firstName>string</firstName>
  <lastName>string</lastName>
  <email>string</email>
  <password>string</password>
  <phone>string</phone>
  <userStatus>0</userStatus>
</User>
````
### Responses

Status|Meaning|Description
---|---|---|
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid user supplied
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|User not found

<aside class="success">
This operation does not require authentication
</aside>

## deleteUser

> Code samples

````shell
# You can also use wget
curl -X delete http://petstore.swagger.io/v2/user/{username} \
  -H 'Accept: application/xml' \
  -H 'Content-Type: application/xml'

````

````http
DELETE http://petstore.swagger.io/v2/user/{username} HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/xml
Accept: application/xml

````

````javascript
var headers = {
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/user/{username}',
  method: 'delete',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})
````

````javascript--nodejs
const request = require('node-fetch');

const headers = {
  'Accept':'application/xml',
  'Content-Type':'application/xml'

};

fetch('http://petstore.swagger.io/v2/user/{username}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
````

````ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/xml',
  'Content-Type' => 'application/xml'
}

result = RestClient.delete 'http://petstore.swagger.io/v2/user/{username}', params: {
  }, headers: headers

p JSON.parse(result)
````

````python
import requests
headers = {
  'Accept': 'application/xml',
  'Content-Type': 'application/xml'
}

r = requests.delete('http://petstore.swagger.io/v2/user/{username}', params={

}, headers = headers)

print r.json()
````

````java
URL obj = new URL("http://petstore.swagger.io/v2/user/{username}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());
````

`DELETE /user/{username}`

*Delete user*

This can only be done by the logged in user.

### Parameters

Parameter|In|Type|Required|Description
---|---|---|---|---|
username|path|string|true|The name that needs to be deleted


### Responses

Status|Meaning|Description
---|---|---|
400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid username supplied
404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|User not found

<aside class="success">
This operation does not require authentication
</aside>



