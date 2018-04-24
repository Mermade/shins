---
title: Swagger Petstore v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - javascript--nodejs: Node.JS
  - ruby: Ruby
  - python: Python
  - java: Java
  - go: Go
toc_footers:
  - >-
    <a href="https://mermade.github.io/shins/asyncapi.html">See AsyncAPI
    example</a>
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="Swagger-Petstore">Swagger Petstore v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

:dog: :cat: :rabbit: This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.

Base URLs:

* <a href="http://petstore.swagger.io/v2">http://petstore.swagger.io/v2</a>

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

* API Key (api_key)
    - Parameter Name: **api_key**, in: header. 

<h1 id="Swagger-Petstore-pet">pet</h1>

Everything about your Pets

<a href="http://swagger.io">Find out more</a>

## addPet

<a id="opIdaddPet"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://petstore.swagger.io/v2/pet \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST http://petstore.swagger.io/v2/pet HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/pet',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
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
  'Content-Type':'application/json',
  'Authorization':'Bearer {access-token}'

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

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'http://petstore.swagger.io/v2/pet',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('http://petstore.swagger.io/v2/pet', params={

}, headers = headers)

print r.json()

```

```java
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

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://petstore.swagger.io/v2/pet", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /pet`

*Add a new pet to the store*

> Body parameter

```json
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
```

```xml
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
```

<h3 id="addPet-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Pet](#schemapet)|true|Pet object that needs to be added to the store|

<h3 id="addPet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Invalid input|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
petstore_auth ( Scopes: write:pets read:pets )
</aside>

## updatePet

<a id="opIdupdatePet"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT http://petstore.swagger.io/v2/pet \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
PUT http://petstore.swagger.io/v2/pet HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/pet',
  method: 'put',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
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
  'Content-Type':'application/json',
  'Authorization':'Bearer {access-token}'

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

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.put 'http://petstore.swagger.io/v2/pet',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.put('http://petstore.swagger.io/v2/pet', params={

}, headers = headers)

print r.json()

```

```java
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

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://petstore.swagger.io/v2/pet", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /pet`

*Update an existing pet*

> Body parameter

```json
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
```

```xml
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
```

<h3 id="updatePet-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Pet](#schemapet)|true|Pet object that needs to be added to the store|

<h3 id="updatePet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Pet not found|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Validation exception|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
petstore_auth ( Scopes: write:pets read:pets )
</aside>

## findPetsByStatus

<a id="opIdfindPetsByStatus"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://petstore.swagger.io/v2/pet/findByStatus?status=available \
  -H 'Accept: application/xml' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET http://petstore.swagger.io/v2/pet/findByStatus?status=available HTTP/1.1
Host: petstore.swagger.io

Accept: application/xml

```

```javascript
var headers = {
  'Accept':'application/xml',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/pet/findByStatus',
  method: 'get',
  data: '?status=available',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const request = require('node-fetch');

const headers = {
  'Accept':'application/xml',
  'Authorization':'Bearer {access-token}'

};

fetch('http://petstore.swagger.io/v2/pet/findByStatus?status=available',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/xml',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'http://petstore.swagger.io/v2/pet/findByStatus',
  params: {
  'status' => 'array[string]'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/xml',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('http://petstore.swagger.io/v2/pet/findByStatus', params={
  'status': [
  "available"
]
}, headers = headers)

print r.json()

```

```java
URL obj = new URL("http://petstore.swagger.io/v2/pet/findByStatus?status=available");
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

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/xml"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://petstore.swagger.io/v2/pet/findByStatus", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /pet/findByStatus`

*Finds Pets by status*

Multiple status values can be provided with comma separated strings

<h3 id="findPetsByStatus-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|array[string]|true|Status values that need to be considered for filter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|available|
|status|pending|
|status|sold|

> Example responses

```xml
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
```

```json
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
```

<h3 id="findPetsByStatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid status value|None|

<h3 id="findPetsByStatus-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|[[Pet](#schemapet)]|false|No description|
|» id|integer(int64)|false|No description|
|» category|[Category](#schemacategory)|false|No description|
|»» id|integer(int64)|false|No description|
|»» name|string|false|No description|
|» name|string|true|No description|
|» photoUrls|[string]|true|No description|
|» tags|[[Tag](#schematag)]|false|No description|
|»» id|integer(int64)|false|No description|
|»» name|string|false|No description|
|» status|string|false|pet status in the store|

#### Enumerated Values

|Property|Value|
|---|---|
|status|available|
|status|pending|
|status|sold|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
petstore_auth ( Scopes: write:pets read:pets )
</aside>

## findPetsByTags

<a id="opIdfindPetsByTags"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://petstore.swagger.io/v2/pet/findByTags?tags=string \
  -H 'Accept: application/xml' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET http://petstore.swagger.io/v2/pet/findByTags?tags=string HTTP/1.1
Host: petstore.swagger.io

Accept: application/xml

```

```javascript
var headers = {
  'Accept':'application/xml',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/pet/findByTags',
  method: 'get',
  data: '?tags=string',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const request = require('node-fetch');

const headers = {
  'Accept':'application/xml',
  'Authorization':'Bearer {access-token}'

};

fetch('http://petstore.swagger.io/v2/pet/findByTags?tags=string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/xml',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'http://petstore.swagger.io/v2/pet/findByTags',
  params: {
  'tags' => 'array[string]'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/xml',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('http://petstore.swagger.io/v2/pet/findByTags', params={
  'tags': [
  "string"
]
}, headers = headers)

print r.json()

```

```java
URL obj = new URL("http://petstore.swagger.io/v2/pet/findByTags?tags=string");
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

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/xml"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://petstore.swagger.io/v2/pet/findByTags", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /pet/findByTags`

*Finds Pets by tags*

Muliple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

<h3 id="findPetsByTags-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|tags|query|array[string]|true|Tags to filter by|

> Example responses

```xml
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
```

```json
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
```

<h3 id="findPetsByTags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid tag value|None|

<h3 id="findPetsByTags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|[[Pet](#schemapet)]|false|No description|
|» id|integer(int64)|false|No description|
|» category|[Category](#schemacategory)|false|No description|
|»» id|integer(int64)|false|No description|
|»» name|string|false|No description|
|» name|string|true|No description|
|» photoUrls|[string]|true|No description|
|» tags|[[Tag](#schematag)]|false|No description|
|»» id|integer(int64)|false|No description|
|»» name|string|false|No description|
|» status|string|false|pet status in the store|

#### Enumerated Values

|Property|Value|
|---|---|
|status|available|
|status|pending|
|status|sold|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
petstore_auth ( Scopes: write:pets read:pets )
</aside>

## getPetById

<a id="opIdgetPetById"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://petstore.swagger.io/v2/pet/{petId} \
  -H 'Accept: application/xml' \
  -H 'api_key: API_KEY'

```

```http
GET http://petstore.swagger.io/v2/pet/{petId} HTTP/1.1
Host: petstore.swagger.io

Accept: application/xml

```

```javascript
var headers = {
  'Accept':'application/xml',
  'api_key':'API_KEY'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/pet/{petId}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const request = require('node-fetch');

const headers = {
  'Accept':'application/xml',
  'api_key':'API_KEY'

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

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/xml',
  'api_key' => 'API_KEY'
}

result = RestClient.get 'http://petstore.swagger.io/v2/pet/{petId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/xml',
  'api_key': 'API_KEY'
}

r = requests.get('http://petstore.swagger.io/v2/pet/{petId}', params={

}, headers = headers)

print r.json()

```

```java
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

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/xml"},
        "api_key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://petstore.swagger.io/v2/pet/{petId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /pet/{petId}`

*Find pet by ID*

Returns a single pet

<h3 id="getPetById-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|petId|path|integer(int64)|true|ID of pet to return|

> Example responses

```xml
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
```

```json
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
```

<h3 id="getPetById-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[Pet](#schemapet)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Pet not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## updatePetWithForm

<a id="opIdupdatePetWithForm"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://petstore.swagger.io/v2/pet/{petId} \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST http://petstore.swagger.io/v2/pet/{petId} HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/x-www-form-urlencoded

```

```javascript
var headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/pet/{petId}',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const request = require('node-fetch');
const inputBody = '{
  "name": "string",
  "status": "string"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Authorization':'Bearer {access-token}'

};

fetch('http://petstore.swagger.io/v2/pet/{petId}',
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

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/x-www-form-urlencoded',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'http://petstore.swagger.io/v2/pet/{petId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('http://petstore.swagger.io/v2/pet/{petId}', params={

}, headers = headers)

print r.json()

```

```java
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

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/x-www-form-urlencoded"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://petstore.swagger.io/v2/pet/{petId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /pet/{petId}`

*Updates a pet in the store with form data*

> Body parameter

```yaml
name: string
status: string

```

<h3 id="updatePetWithForm-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|petId|path|integer(int64)|true|ID of pet that needs to be updated|
|body|body|object|false|No description|
|» name|body|string|false|Updated name of the pet|
|» status|body|string|false|Updated status of the pet|

<h3 id="updatePetWithForm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Invalid input|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
petstore_auth ( Scopes: write:pets read:pets )
</aside>

## deletePet

<a id="opIddeletePet"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE http://petstore.swagger.io/v2/pet/{petId} \
  -H 'api_key: string' \
  -H 'Authorization: Bearer {access-token}'

```

```http
DELETE http://petstore.swagger.io/v2/pet/{petId} HTTP/1.1
Host: petstore.swagger.io

api_key: string

```

```javascript
var headers = {
  'api_key':'string',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/pet/{petId}',
  method: 'delete',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const request = require('node-fetch');

const headers = {
  'api_key':'string',
  'Authorization':'Bearer {access-token}'

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

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'api_key' => 'string',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.delete 'http://petstore.swagger.io/v2/pet/{petId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'api_key': 'string',
  'Authorization': 'Bearer {access-token}'
}

r = requests.delete('http://petstore.swagger.io/v2/pet/{petId}', params={

}, headers = headers)

print r.json()

```

```java
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

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "api_key": []string{"string"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://petstore.swagger.io/v2/pet/{petId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /pet/{petId}`

*Deletes a pet*

<h3 id="deletePet-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|header|string|false|No description|
|petId|path|integer(int64)|true|Pet id to delete|

<h3 id="deletePet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Pet not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
petstore_auth ( Scopes: write:pets read:pets )
</aside>

## uploadFile

<a id="opIduploadFile"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://petstore.swagger.io/v2/pet/{petId}/uploadImage \
  -H 'Content-Type: multipart/form-data' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST http://petstore.swagger.io/v2/pet/{petId}/uploadImage HTTP/1.1
Host: petstore.swagger.io
Content-Type: multipart/form-data
Accept: application/json

```

```javascript
var headers = {
  'Content-Type':'multipart/form-data',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/pet/{petId}/uploadImage',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const request = require('node-fetch');
const inputBody = '{
  "additionalMetadata": "string",
  "file": "string"
}';
const headers = {
  'Content-Type':'multipart/form-data',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'

};

fetch('http://petstore.swagger.io/v2/pet/{petId}/uploadImage',
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

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'multipart/form-data',
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'http://petstore.swagger.io/v2/pet/{petId}/uploadImage',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'multipart/form-data',
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('http://petstore.swagger.io/v2/pet/{petId}/uploadImage', params={

}, headers = headers)

print r.json()

```

```java
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

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"multipart/form-data"},
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://petstore.swagger.io/v2/pet/{petId}/uploadImage", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /pet/{petId}/uploadImage`

*uploads an image*

> Body parameter

```yaml
additionalMetadata: string
file: string

```

<h3 id="uploadFile-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|petId|path|integer(int64)|true|ID of pet to update|
|body|body|object|false|No description|
|» additionalMetadata|body|string|false|Additional data to pass to server|
|» file|body|string(binary)|false|file to upload|

> Example responses

```json
{
  "code": 0,
  "type": "string",
  "message": "string"
}
```

<h3 id="uploadFile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[ApiResponse](#schemaapiresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
petstore_auth ( Scopes: write:pets read:pets )
</aside>

<h1 id="Swagger-Petstore-store">store</h1>

Access to Petstore orders

## getInventory

<a id="opIdgetInventory"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://petstore.swagger.io/v2/store/inventory \
  -H 'Accept: application/json' \
  -H 'api_key: API_KEY'

```

```http
GET http://petstore.swagger.io/v2/store/inventory HTTP/1.1
Host: petstore.swagger.io

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json',
  'api_key':'API_KEY'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/store/inventory',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const request = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'api_key':'API_KEY'

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

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'api_key' => 'API_KEY'
}

result = RestClient.get 'http://petstore.swagger.io/v2/store/inventory',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'api_key': 'API_KEY'
}

r = requests.get('http://petstore.swagger.io/v2/store/inventory', params={

}, headers = headers)

print r.json()

```

```java
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

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "api_key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://petstore.swagger.io/v2/store/inventory", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /store/inventory`

*Returns pet inventories by status*

Returns a map of status codes to quantities

> Example responses

```json
{
  "property1": 0,
  "property2": 0
}
```

<h3 id="getInventory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getInventory-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|
|» **additionalProperties**|integer(int32)|false|No description|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## placeOrder

<a id="opIdplaceOrder"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://petstore.swagger.io/v2/store/order \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/xml'

```

```http
POST http://petstore.swagger.io/v2/store/order HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/json
Accept: application/xml

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'application/xml'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/store/order',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const request = require('node-fetch');
const inputBody = '{
  "id": 0,
  "petId": 0,
  "quantity": 0,
  "shipDate": "2018-04-24T13:02:08Z",
  "status": "placed",
  "complete": false
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/xml'

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

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/xml'
}

result = RestClient.post 'http://petstore.swagger.io/v2/store/order',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/xml'
}

r = requests.post('http://petstore.swagger.io/v2/store/order', params={

}, headers = headers)

print r.json()

```

```java
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

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/xml"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://petstore.swagger.io/v2/store/order", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /store/order`

*Place an order for a pet*

> Body parameter

```json
{
  "id": 0,
  "petId": 0,
  "quantity": 0,
  "shipDate": "2018-04-24T13:02:08Z",
  "status": "placed",
  "complete": false
}
```

<h3 id="placeOrder-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Order](#schemaorder)|true|order placed for purchasing the pet|

> Example responses

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Order>
  <id>0</id>
  <petId>0</petId>
  <quantity>0</quantity>
  <shipDate>2018-04-24T13:02:08Z</shipDate>
  <status>placed</status>
  <complete>false</complete>
</Order>
```

```json
{
  "id": 0,
  "petId": 0,
  "quantity": 0,
  "shipDate": "2018-04-24T13:02:08Z",
  "status": "placed",
  "complete": false
}
```

<h3 id="placeOrder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[Order](#schemaorder)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid Order|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOrderById

<a id="opIdgetOrderById"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://petstore.swagger.io/v2/store/order/{orderId} \
  -H 'Accept: application/xml'

```

```http
GET http://petstore.swagger.io/v2/store/order/{orderId} HTTP/1.1
Host: petstore.swagger.io

Accept: application/xml

```

```javascript
var headers = {
  'Accept':'application/xml'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/store/order/{orderId}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const request = require('node-fetch');

const headers = {
  'Accept':'application/xml'

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

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/xml'
}

result = RestClient.get 'http://petstore.swagger.io/v2/store/order/{orderId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/xml'
}

r = requests.get('http://petstore.swagger.io/v2/store/order/{orderId}', params={

}, headers = headers)

print r.json()

```

```java
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

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/xml"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://petstore.swagger.io/v2/store/order/{orderId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /store/order/{orderId}`

*Find purchase order by ID*

For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions

<h3 id="getOrderById-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|orderId|path|integer(int64)|true|ID of pet that needs to be fetched|

> Example responses

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Order>
  <id>0</id>
  <petId>0</petId>
  <quantity>0</quantity>
  <shipDate>2018-04-24T13:02:08Z</shipDate>
  <status>placed</status>
  <complete>false</complete>
</Order>
```

```json
{
  "id": 0,
  "petId": 0,
  "quantity": 0,
  "shipDate": "2018-04-24T13:02:08Z",
  "status": "placed",
  "complete": false
}
```

<h3 id="getOrderById-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[Order](#schemaorder)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Order not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteOrder

<a id="opIddeleteOrder"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE http://petstore.swagger.io/v2/store/order/{orderId}

```

```http
DELETE http://petstore.swagger.io/v2/store/order/{orderId} HTTP/1.1
Host: petstore.swagger.io

```

```javascript

$.ajax({
  url: 'http://petstore.swagger.io/v2/store/order/{orderId}',
  method: 'delete',

  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const request = require('node-fetch');

fetch('http://petstore.swagger.io/v2/store/order/{orderId}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.delete 'http://petstore.swagger.io/v2/store/order/{orderId}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.delete('http://petstore.swagger.io/v2/store/order/{orderId}', params={

)

print r.json()

```

```java
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

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://petstore.swagger.io/v2/store/order/{orderId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /store/order/{orderId}`

*Delete purchase order by ID*

For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors

<h3 id="deleteOrder-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|orderId|path|integer(int64)|true|ID of the order that needs to be deleted|

<h3 id="deleteOrder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid ID supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Order not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="Swagger-Petstore-user">user</h1>

Operations about user

<a href="http://swagger.io">Find out more about our store</a>

## createUser

<a id="opIdcreateUser"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://petstore.swagger.io/v2/user \
  -H 'Content-Type: application/json'

```

```http
POST http://petstore.swagger.io/v2/user HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/user',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
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
  'Content-Type':'application/json'

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

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post 'http://petstore.swagger.io/v2/user',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('http://petstore.swagger.io/v2/user', params={

}, headers = headers)

print r.json()

```

```java
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

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://petstore.swagger.io/v2/user", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /user`

*Create user*

This can only be done by the logged in user.

> Body parameter

```json
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
```

<h3 id="createUser-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[User](#schemauser)|true|Created user object|

<h3 id="createUser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## createUsersWithArrayInput

<a id="opIdcreateUsersWithArrayInput"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://petstore.swagger.io/v2/user/createWithArray \
  -H 'Content-Type: application/json'

```

```http
POST http://petstore.swagger.io/v2/user/createWithArray HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/user/createWithArray',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
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
  'Content-Type':'application/json'

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

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post 'http://petstore.swagger.io/v2/user/createWithArray',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('http://petstore.swagger.io/v2/user/createWithArray', params={

}, headers = headers)

print r.json()

```

```java
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

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://petstore.swagger.io/v2/user/createWithArray", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /user/createWithArray`

*Creates list of users with given input array*

> Body parameter

```json
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
```

<h3 id="createUsersWithArrayInput-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserArray](#schemauserarray)|true|List of user object|

<h3 id="createUsersWithArrayInput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## createUsersWithListInput

<a id="opIdcreateUsersWithListInput"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://petstore.swagger.io/v2/user/createWithList \
  -H 'Content-Type: application/json'

```

```http
POST http://petstore.swagger.io/v2/user/createWithList HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/user/createWithList',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
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
  'Content-Type':'application/json'

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

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post 'http://petstore.swagger.io/v2/user/createWithList',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('http://petstore.swagger.io/v2/user/createWithList', params={

}, headers = headers)

print r.json()

```

```java
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

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://petstore.swagger.io/v2/user/createWithList", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /user/createWithList`

*Creates list of users with given input array*

> Body parameter

```json
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
```

<h3 id="createUsersWithListInput-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserArray](#schemauserarray)|true|List of user object|

<h3 id="createUsersWithListInput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## loginUser

<a id="opIdloginUser"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://petstore.swagger.io/v2/user/login?username=string&password=pa%24%24word \
  -H 'Accept: application/xml'

```

```http
GET http://petstore.swagger.io/v2/user/login?username=string&password=pa%24%24word HTTP/1.1
Host: petstore.swagger.io

Accept: application/xml

```

```javascript
var headers = {
  'Accept':'application/xml'

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

```

```javascript--nodejs
const request = require('node-fetch');

const headers = {
  'Accept':'application/xml'

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

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/xml'
}

result = RestClient.get 'http://petstore.swagger.io/v2/user/login',
  params: {
  'username' => 'string',
'password' => 'string(password)'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/xml'
}

r = requests.get('http://petstore.swagger.io/v2/user/login', params={
  'username': 'string',  'password': 'pa$$word'
}, headers = headers)

print r.json()

```

```java
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

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/xml"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://petstore.swagger.io/v2/user/login", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /user/login`

*Logs user into the system*

<h3 id="loginUser-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|username|query|string|true|The user name for login|
|password|query|string(password)|true|The password for login in clear text|

> Example responses

```json
"string"
```

<h3 id="loginUser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|string|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid username/password supplied|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Rate-Limit|integer|int32|calls per hour allowed by the user|
|200|X-Expires-After|string|date-time|date in UTC when token expires|

<aside class="success">
This operation does not require authentication
</aside>

## logoutUser

<a id="opIdlogoutUser"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://petstore.swagger.io/v2/user/logout

```

```http
GET http://petstore.swagger.io/v2/user/logout HTTP/1.1
Host: petstore.swagger.io

```

```javascript

$.ajax({
  url: 'http://petstore.swagger.io/v2/user/logout',
  method: 'get',

  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const request = require('node-fetch');

fetch('http://petstore.swagger.io/v2/user/logout',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://petstore.swagger.io/v2/user/logout',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('http://petstore.swagger.io/v2/user/logout', params={

)

print r.json()

```

```java
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

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://petstore.swagger.io/v2/user/logout", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /user/logout`

*Logs out current logged in user session*

<h3 id="logoutUser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## getUserByName

<a id="opIdgetUserByName"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://petstore.swagger.io/v2/user/{username} \
  -H 'Accept: application/xml'

```

```http
GET http://petstore.swagger.io/v2/user/{username} HTTP/1.1
Host: petstore.swagger.io

Accept: application/xml

```

```javascript
var headers = {
  'Accept':'application/xml'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/user/{username}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const request = require('node-fetch');

const headers = {
  'Accept':'application/xml'

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

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/xml'
}

result = RestClient.get 'http://petstore.swagger.io/v2/user/{username}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/xml'
}

r = requests.get('http://petstore.swagger.io/v2/user/{username}', params={

}, headers = headers)

print r.json()

```

```java
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

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/xml"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://petstore.swagger.io/v2/user/{username}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /user/{username}`

*Get user by user name*

<h3 id="getUserByName-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|The name that needs to be fetched. Use user1 for testing. |

> Example responses

```xml
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
```

```json
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
```

<h3 id="getUserByName-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[User](#schemauser)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid username supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|User not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## updateUser

<a id="opIdupdateUser"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT http://petstore.swagger.io/v2/user/{username} \
  -H 'Content-Type: application/json'

```

```http
PUT http://petstore.swagger.io/v2/user/{username} HTTP/1.1
Host: petstore.swagger.io
Content-Type: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json'

};

$.ajax({
  url: 'http://petstore.swagger.io/v2/user/{username}',
  method: 'put',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
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
  'Content-Type':'application/json'

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

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.put 'http://petstore.swagger.io/v2/user/{username}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.put('http://petstore.swagger.io/v2/user/{username}', params={

}, headers = headers)

print r.json()

```

```java
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

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://petstore.swagger.io/v2/user/{username}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /user/{username}`

*Updated user*

This can only be done by the logged in user.

> Body parameter

```json
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
```

<h3 id="updateUser-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|name that need to be updated|
|body|body|[User](#schemauser)|true|Updated user object|

<h3 id="updateUser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid user supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|User not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteUser

<a id="opIddeleteUser"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE http://petstore.swagger.io/v2/user/{username}

```

```http
DELETE http://petstore.swagger.io/v2/user/{username} HTTP/1.1
Host: petstore.swagger.io

```

```javascript

$.ajax({
  url: 'http://petstore.swagger.io/v2/user/{username}',
  method: 'delete',

  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const request = require('node-fetch');

fetch('http://petstore.swagger.io/v2/user/{username}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.delete 'http://petstore.swagger.io/v2/user/{username}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.delete('http://petstore.swagger.io/v2/user/{username}', params={

)

print r.json()

```

```java
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

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://petstore.swagger.io/v2/user/{username}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /user/{username}`

*Delete user*

This can only be done by the logged in user.

<h3 id="deleteUser-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|The name that needs to be deleted|

<h3 id="deleteUser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid username supplied|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|User not found|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocSorder">Order</h2>

<a id="schemaorder"></a>

```json
{
  "id": 0,
  "petId": 0,
  "quantity": 0,
  "shipDate": "2018-04-24T13:02:08Z",
  "status": "placed",
  "complete": false
}
```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|id|integer(int64)|false|No description|
|petId|integer(int64)|false|No description|
|quantity|integer(int32)|false|No description|
|shipDate|string(date-time)|false|No description|
|status|string|false|Order Status|
|complete|boolean|false|No description|

#### Enumerated Values

|Property|Value|
|---|---|
|status|placed|
|status|approved|
|status|delivered|

<h2 id="tocScategory">Category</h2>

<a id="schemacategory"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|id|integer(int64)|false|No description|
|name|string|false|No description|

<h2 id="tocSuser">User</h2>

<a id="schemauser"></a>

```json
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
```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|id|integer(int64)|false|No description|
|username|string|false|No description|
|firstName|string|false|No description|
|lastName|string|false|No description|
|email|string|false|No description|
|password|string|false|No description|
|phone|string|false|No description|
|userStatus|integer(int32)|false|User Status|

<h2 id="tocStag">Tag</h2>

<a id="schematag"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|id|integer(int64)|false|No description|
|name|string|false|No description|

<h2 id="tocSpet">Pet</h2>

<a id="schemapet"></a>

```json
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
```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|id|integer(int64)|false|No description|
|category|[Category](#schemacategory)|false|No description|
|name|string|true|No description|
|photoUrls|[string]|true|No description|
|tags|[[Tag](#schematag)]|false|No description|
|status|string|false|pet status in the store|

#### Enumerated Values

|Property|Value|
|---|---|
|status|available|
|status|pending|
|status|sold|

<h2 id="tocSapiresponse">ApiResponse</h2>

<a id="schemaapiresponse"></a>

```json
{
  "code": 0,
  "type": "string",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|code|integer(int32)|false|No description|
|type|string|false|No description|
|message|string|false|No description|

<script type="application/ld+json">
{
  "@context": "http://schema.org/",
  "@type": "WebAPI",
  "description": ":dog: :cat: :rabbit: This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.",
  "documentation": "https://mermade.github.io/shins/asyncapi.html",
  "termsOfService": "http://swagger.io/terms/",
  
  "name": "Swagger Petstore"
}
</script>

