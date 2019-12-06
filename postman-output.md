---
title: API
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - javascript--nodejs: Node.JS
  - ruby: Ruby
  - python: Python
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="api">API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

TODO: Add Description

Base URLs:

* <a href="http://example.com/">http://example.com/</a>

<h1 id="api-access-token">Access Token</h1>

`AccessToken` objects grant access to Atomic's API resources for a specific user.

## Createaccesstoken

<a id="opIdCreateaccesstoken"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://example.com/access-token \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Content-Type: string' \
  -H 'x-api-key: string' \
  -H 'x-api-secret: string'

```

```http
POST http://example.com/access-token HTTP/1.1
Host: example.com
Content-Type: application/json
Accept: application/json
Content-Type: string
x-api-key: string
x-api-secret: string

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Content-Type':'string',
  'x-api-key':'string',
  'x-api-secret':'string'

};

$.ajax({
  url: 'http://example.com/access-token',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "identifier": "YOUR_INTERNAL_GUID",
  "phone": "8016554444",
  "email": "jdoe@example.org",
  "names": [
    {
      "firstName": "Jane",
      "lastName": "Doe"
    }
  ],
  "addresses": [
    {
      "line1": "123 Atomic Ave.",
      "line2": "Apt. #1",
      "city": "Salt Lake City",
      "state": "UT",
      "zipcode": "84044",
      "country": "US"
    }
  ],
  "accounts": [
    {
      "accountNumber": "220000000",
      "routingNumber": "110000000",
      "type": "checking",
      "title": "Premier Plus Checking"
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Content-Type':'string',
  'x-api-key':'string',
  'x-api-secret':'string'

};

fetch('http://example.com/access-token',
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
  'Accept' => 'application/json',
  'Content-Type' => 'string',
  'x-api-key' => 'string',
  'x-api-secret' => 'string'
}

result = RestClient.post 'http://example.com/access-token',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Content-Type': 'string',
  'x-api-key': 'string',
  'x-api-secret': 'string'
}

r = requests.post('http://example.com/access-token', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("http://example.com/access-token");
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
        "Accept": []string{"application/json"},
        "Content-Type": []string{"string"},
        "x-api-key": []string{"string"},
        "x-api-secret": []string{"string"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://example.com/access-token", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /access-token`

*Create access token*

Generates an access token that will automatically become invalid after 30 minutes.

> Body parameter

```json
{
  "identifier": "YOUR_INTERNAL_GUID",
  "phone": "8016554444",
  "email": "jdoe@example.org",
  "names": [
    {
      "firstName": "Jane",
      "lastName": "Doe"
    }
  ],
  "addresses": [
    {
      "line1": "123 Atomic Ave.",
      "line2": "Apt. #1",
      "city": "Salt Lake City",
      "state": "UT",
      "zipcode": "84044",
      "country": "US"
    }
  ],
  "accounts": [
    {
      "accountNumber": "220000000",
      "routingNumber": "110000000",
      "type": "checking",
      "title": "Premier Plus Checking"
    }
  ]
}
```

<h3 id="createaccesstoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|x-api-key|header|string|true|API Key for your Atomic account|
|x-api-secret|header|string|true|API Secret for your Atomic account|
|body|body|[CreateaccesstokenRequest](#schemacreateaccesstokenrequest)|true|none|
|» identifier|body|string|true|none|
|» phone|body|string|true|none|
|» email|body|string|true|none|
|» names|body|[[Name](#schemaname)]|true|none|
|»» Name|body|[Name](#schemaname)|false|none|
|»»» firstName|body|string|true|none|
|»»» lastName|body|string|true|none|
|»» addresses|body|[[Address](#schemaaddress)]|true|none|
|»»» Address|body|[Address](#schemaaddress)|false|none|
|»»»» line1|body|string|true|none|
|»»»» line2|body|string|true|none|
|»»»» city|body|string|true|none|
|»»»» state|body|string|true|none|
|»»»» zipcode|body|string|true|none|
|»»»» country|body|string|true|none|
|»»» accounts|body|[[Account](#schemaaccount)]|true|none|
|»»»» Account|body|[Account](#schemaaccount)|false|none|
|»»»»» accountNumber|body|string|true|none|
|»»»»» routingNumber|body|string|true|none|
|»»»»» type|body|string|true|none|
|»»»»» title|body|string|true|none|

> Example responses

> OK

```json
{
  "data": {
    "publicToken": "6e93549e-3571-4f57-b0f7-77b7cb0b5e48",
    "token": "c00f869e-0fce-4d32-9277-a68658578ba2"
  }
}
```

<h3 id="createaccesstoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[Createaccesstokenresponse](#schemacreateaccesstokenresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|content-type|string||none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-task">Task</h1>

To request that an action is performed, a `Task` object is created that contains instructions on what is to be completed.

## Createtask

<a id="opIdCreatetask"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://example.com/task \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json; charset=utf-8' \
  -H 'Content-Type: string' \
  -H 'x-public-token: string'

```

```http
POST http://example.com/task HTTP/1.1
Host: example.com
Content-Type: application/json
Accept: application/json; charset=utf-8
Content-Type: string
x-public-token: string

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'application/json; charset=utf-8',
  'Content-Type':'string',
  'x-public-token':'string'

};

$.ajax({
  url: 'http://example.com/task',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "product": "xdeposit",
  "company": "5d77f9e1070856f3828945c6",
  "inputs": {
    "username": "test-good",
    "password": "test"
  },
  "settings": {
    "xbalance": {
      "amount": "500",
      "accountNumber": "220000000"
    },
    "xdeposit": {
      "title": "Test title",
      "accountNumber": "220000000",
      "routingNumber": "110000000",
      "accountType": "checking"
    }
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json; charset=utf-8',
  'Content-Type':'string',
  'x-public-token':'string'

};

fetch('http://example.com/task',
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
  'Accept' => 'application/json; charset=utf-8',
  'Content-Type' => 'string',
  'x-public-token' => 'string'
}

result = RestClient.post 'http://example.com/task',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json; charset=utf-8',
  'Content-Type': 'string',
  'x-public-token': 'string'
}

r = requests.post('http://example.com/task', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("http://example.com/task");
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
        "Accept": []string{"application/json; charset=utf-8"},
        "Content-Type": []string{"string"},
        "x-public-token": []string{"string"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://example.com/task", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /task`

*Create task*

Queues a `Task` object to be completed.

> Body parameter

```json
{
  "product": "xdeposit",
  "company": "5d77f9e1070856f3828945c6",
  "inputs": {
    "username": "test-good",
    "password": "test"
  },
  "settings": {
    "xbalance": {
      "amount": "500",
      "accountNumber": "220000000"
    },
    "xdeposit": {
      "title": "Test title",
      "accountNumber": "220000000",
      "routingNumber": "110000000",
      "accountType": "checking"
    }
  }
}
```

<h3 id="createtask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|x-public-token|header|string|true|The `publicToken` issued from a request to create an `AccessToken`.|
|body|body|[CreatetaskRequest](#schemacreatetaskrequest)|true|none|
|» product|body|string|true|none|
|» company|body|string|true|none|
|» inputs|body|[Inputs](#schemainputs)|true|none|
|»» username|body|string|true|none|
|»» password|body|string|true|none|
|» settings|body|[Settings](#schemasettings)|true|none|
|»» xbalance|body|[Xbalance](#schemaxbalance)|true|none|
|»»» amount|body|string|true|none|
|»»» accountNumber|body|string|true|none|
|»» xdeposit|body|[Xdeposit](#schemaxdeposit)|true|none|
|»»» title|body|string|true|none|
|»»» accountNumber|body|string|true|none|
|»»» routingNumber|body|string|true|none|
|»»» accountType|body|string|true|none|

> Example responses

> OK

```json
{
  "data": {
    "id": "5d3b23b155f500465c895f60",
    "status": "queued"
  }
}
```

<h3 id="createtask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[Createtaskresponse](#schemacreatetaskresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Content-Length|string||none|
|200|Date|string||none|
|200|Connection|string||none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-company">Company</h1>

`Company` objects allow you to perform an action with a company on behalf of your users. For example, you may update direct deposit account information for a user, the `Company` being the user's employer. The API allows you to seach for and retrieve companies.

## Searchcompanies

<a id="opIdSearchcompanies"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://example.com/company/search?query=string&product=string \
  -H 'Accept: application/json' \
  -H 'x-public-token: string'

```

```http
GET http://example.com/company/search?query=string&product=string HTTP/1.1
Host: example.com
Accept: application/json
x-public-token: string

```

```javascript
var headers = {
  'Accept':'application/json',
  'x-public-token':'string'

};

$.ajax({
  url: 'http://example.com/company/search',
  method: 'get',
  data: '?query=string&product=string',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'x-public-token':'string'

};

fetch('http://example.com/company/search?query=string&product=string',
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
  'x-public-token' => 'string'
}

result = RestClient.get 'http://example.com/company/search',
  params: {
  'query' => 'string',
'product' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'x-public-token': 'string'
}

r = requests.get('http://example.com/company/search', params={
  'query': 'string',  'product': 'string'
}, headers = headers)

print r.json()

```

```java
URL obj = new URL("http://example.com/company/search?query=string&product=string");
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
        "x-public-token": []string{"string"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://example.com/company/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /company/search`

*Search companies*

Searches for a `Company` using a text `query`. Searches can also be narrowed by passing in a specific `product`.

<h3 id="searchcompanies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|Filters companies by name. Uses fuzzy matching to narrow results, and for use in an autocomplete search experience.|
|product|query|string|true|Filters companies by a specific product. Possible values include `product`, and `balance`.|
|x-public-token|header|string|true|The `publicToken` issued from a request to create an `AccessToken`.|

> Example responses

> OK

```json
{
  "data": [
    {
      "_id": "5d38f1e8512bbf71fb776015",
      "name": "Microsoft",
      "connector": {
        "_id": "5d38f182512bbf0c06776013",
        "availableProducts": [
          "deposit"
        ]
      },
      "branding": {
        "logo": "https://atomicfi-public.s3.amazonaws.com/1b27b5a3-db2d-4dbd-83e9-5e256a91d573_Microsoft_logo.svg",
        "color": "#FFFFFF"
      }
    }
  ]
}
```

<h3 id="searchcompanies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[Companysearchresponse](#schemacompanysearchresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|vary|string||none|
|200|x-public-token|string||none|
|200|public-token-expiration|string||none|
|200|content-type|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Getcompanydetails

<a id="opIdGetcompanydetails"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://example.com/company/{companyId} \
  -H 'Accept: application/json' \
  -H 'x-public-token: string'

```

```http
GET http://example.com/company/{companyId} HTTP/1.1
Host: example.com
Accept: application/json
x-public-token: string

```

```javascript
var headers = {
  'Accept':'application/json',
  'x-public-token':'string'

};

$.ajax({
  url: 'http://example.com/company/{companyId}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'x-public-token':'string'

};

fetch('http://example.com/company/{companyId}',
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
  'x-public-token' => 'string'
}

result = RestClient.get 'http://example.com/company/{companyId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'x-public-token': 'string'
}

r = requests.get('http://example.com/company/{companyId}', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("http://example.com/company/{companyId}");
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
        "x-public-token": []string{"string"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://example.com/company/{companyId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /company/{companyId}`

*Get company details*

Retrieves details on a `Company` object using it's `_id`.

<h3 id="getcompanydetails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-public-token|header|string|true|The `publicToken` issued from a request to create an `AccessToken`.|
|companyId|path|string|true|none|

> Example responses

> OK

```json
{
  "data": {
    "_id": "5d38f1e8512bbf71fb776015",
    "name": "Microsoft",
    "connector": {
      "_id": "5d38f182512bbf0c06776013"
    },
    "branding": {
      "logo": "https://atomicfi-public.s3.amazonaws.com/1b27b5a3-db2d-4dbd-83e9-5e256a91d573_Microsoft_logo.svg",
      "color": "#FFFFFF"
    }
  }
}
```

<h3 id="getcompanydetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[Companydetailresponse](#schemacompanydetailresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-public-token|string||none|
|200|public-token-expiration|string||none|
|200|content-type|string||none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocScreateaccesstokenrequest">CreateaccesstokenRequest</h2>

<a id="schemacreateaccesstokenrequest"></a>

```json
{
  "identifier": "YOUR_INTERNAL_GUID",
  "phone": "8016554444",
  "email": "jdoe@example.org",
  "names": [
    {
      "firstName": "Jane",
      "lastName": "Doe"
    }
  ],
  "addresses": [
    {
      "line1": "123 Atomic Ave.",
      "line2": "Apt. #1",
      "city": "Salt Lake City",
      "state": "UT",
      "zipcode": "84044",
      "country": "US"
    }
  ],
  "accounts": [
    {
      "accountNumber": "220000000",
      "routingNumber": "110000000",
      "type": "checking",
      "title": "Premier Plus Checking"
    }
  ]
}

```

*CreateaccesstokenRequest*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identifier|string|true|none|none|
|phone|string|true|none|none|
|email|string|true|none|none|
|names|[[Name](#schemaname)]|true|none|none|
|addresses|[[Address](#schemaaddress)]|true|none|none|
|accounts|[[Account](#schemaaccount)]|true|none|none|

<h2 id="tocSname">Name</h2>

<a id="schemaname"></a>

```json
{
  "firstName": "Jane",
  "lastName": "Doe"
}

```

*Name*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|true|none|none|
|lastName|string|true|none|none|

<h2 id="tocSaddress">Address</h2>

<a id="schemaaddress"></a>

```json
{
  "line1": "123 Atomic Ave.",
  "line2": "Apt. #1",
  "city": "Salt Lake City",
  "state": "UT",
  "zipcode": "84044",
  "country": "US"
}

```

*Address*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|line1|string|true|none|none|
|line2|string|true|none|none|
|city|string|true|none|none|
|state|string|true|none|none|
|zipcode|string|true|none|none|
|country|string|true|none|none|

<h2 id="tocSaccount">Account</h2>

<a id="schemaaccount"></a>

```json
{
  "accountNumber": "220000000",
  "routingNumber": "110000000",
  "type": "checking",
  "title": "Premier Plus Checking"
}

```

*Account*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|none|
|routingNumber|string|true|none|none|
|type|string|true|none|none|
|title|string|true|none|none|

<h2 id="tocScreateaccesstokenresponse">Createaccesstokenresponse</h2>

<a id="schemacreateaccesstokenresponse"></a>

```json
{
  "data": {
    "publicToken": "6e93549e-3571-4f57-b0f7-77b7cb0b5e48",
    "token": "c00f869e-0fce-4d32-9277-a68658578ba2"
  }
}

```

*Createaccesstokenresponse*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Data](#schemadata)|true|none|none|

<h2 id="tocSdata">Data</h2>

<a id="schemadata"></a>

```json
{
  "publicToken": "6e93549e-3571-4f57-b0f7-77b7cb0b5e48",
  "token": "c00f869e-0fce-4d32-9277-a68658578ba2"
}

```

*Data*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|publicToken|string|true|none|none|
|token|string|true|none|none|

<h2 id="tocScreatetaskrequest">CreatetaskRequest</h2>

<a id="schemacreatetaskrequest"></a>

```json
{
  "product": "xdeposit",
  "company": "5d77f9e1070856f3828945c6",
  "inputs": {
    "username": "test-good",
    "password": "test"
  },
  "settings": {
    "xbalance": {
      "amount": "500",
      "accountNumber": "220000000"
    },
    "xdeposit": {
      "title": "Test title",
      "accountNumber": "220000000",
      "routingNumber": "110000000",
      "accountType": "checking"
    }
  }
}

```

*CreatetaskRequest*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|product|string|true|none|none|
|company|string|true|none|none|
|inputs|[Inputs](#schemainputs)|true|none|none|
|settings|[Settings](#schemasettings)|true|none|none|

<h2 id="tocSinputs">Inputs</h2>

<a id="schemainputs"></a>

```json
{
  "username": "test-good",
  "password": "test"
}

```

*Inputs*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|none|
|password|string|true|none|none|

<h2 id="tocSsettings">Settings</h2>

<a id="schemasettings"></a>

```json
{
  "xbalance": {
    "amount": "500",
    "accountNumber": "220000000"
  },
  "xdeposit": {
    "title": "Test title",
    "accountNumber": "220000000",
    "routingNumber": "110000000",
    "accountType": "checking"
  }
}

```

*Settings*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|xbalance|[Xbalance](#schemaxbalance)|true|none|none|
|xdeposit|[Xdeposit](#schemaxdeposit)|true|none|none|

<h2 id="tocSxbalance">Xbalance</h2>

<a id="schemaxbalance"></a>

```json
{
  "amount": "500",
  "accountNumber": "220000000"
}

```

*Xbalance*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|string|true|none|none|
|accountNumber|string|true|none|none|

<h2 id="tocSxdeposit">Xdeposit</h2>

<a id="schemaxdeposit"></a>

```json
{
  "title": "Test title",
  "accountNumber": "220000000",
  "routingNumber": "110000000",
  "accountType": "checking"
}

```

*Xdeposit*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|true|none|none|
|accountNumber|string|true|none|none|
|routingNumber|string|true|none|none|
|accountType|string|true|none|none|

<h2 id="tocScreatetaskresponse">Createtaskresponse</h2>

<a id="schemacreatetaskresponse"></a>

```json
{
  "data": {
    "id": "5d3b23b155f500465c895f60",
    "status": "queued"
  }
}

```

*Createtaskresponse*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Data1](#schemadata1)|true|none|none|

<h2 id="tocSdata1">Data1</h2>

<a id="schemadata1"></a>

```json
{
  "id": "5d3b23b155f500465c895f60",
  "status": "queued"
}

```

*Data1*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|status|string|true|none|none|

<h2 id="tocScompanysearchresponse">Companysearchresponse</h2>

<a id="schemacompanysearchresponse"></a>

```json
{
  "data": [
    {
      "_id": "5d38f1e8512bbf71fb776015",
      "name": "Microsoft",
      "connector": {
        "_id": "5d38f182512bbf0c06776013",
        "availableProducts": [
          "deposit"
        ]
      },
      "branding": {
        "logo": "https://atomicfi-public.s3.amazonaws.com/1b27b5a3-db2d-4dbd-83e9-5e256a91d573_Microsoft_logo.svg",
        "color": "#FFFFFF"
      }
    }
  ]
}

```

*Companysearchresponse*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Data2](#schemadata2)]|true|none|none|

<h2 id="tocSdata2">Data2</h2>

<a id="schemadata2"></a>

```json
{
  "_id": "5d38f1e8512bbf71fb776015",
  "name": "Microsoft",
  "connector": {
    "_id": "5d38f182512bbf0c06776013",
    "availableProducts": [
      "deposit"
    ]
  },
  "branding": {
    "logo": "https://atomicfi-public.s3.amazonaws.com/1b27b5a3-db2d-4dbd-83e9-5e256a91d573_Microsoft_logo.svg",
    "color": "#FFFFFF"
  }
}

```

*Data2*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|true|none|none|
|name|string|true|none|none|
|connector|[Connector](#schemaconnector)|true|none|none|
|branding|[Branding](#schemabranding)|true|none|none|

<h2 id="tocSconnector">Connector</h2>

<a id="schemaconnector"></a>

```json
{
  "_id": "5d38f182512bbf0c06776013",
  "availableProducts": [
    "deposit"
  ]
}

```

*Connector*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|true|none|none|
|availableProducts|[string]|true|none|none|

<h2 id="tocSbranding">Branding</h2>

<a id="schemabranding"></a>

```json
{
  "logo": "https://atomicfi-public.s3.amazonaws.com/1b27b5a3-db2d-4dbd-83e9-5e256a91d573_Microsoft_logo.svg",
  "color": "#FFFFFF"
}

```

*Branding*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logo|string|true|none|none|
|color|string|true|none|none|

<h2 id="tocScompanydetailresponse">Companydetailresponse</h2>

<a id="schemacompanydetailresponse"></a>

```json
{
  "data": {
    "_id": "5d38f1e8512bbf71fb776015",
    "name": "Microsoft",
    "connector": {
      "_id": "5d38f182512bbf0c06776013"
    },
    "branding": {
      "logo": "https://atomicfi-public.s3.amazonaws.com/1b27b5a3-db2d-4dbd-83e9-5e256a91d573_Microsoft_logo.svg",
      "color": "#FFFFFF"
    }
  }
}

```

*Companydetailresponse*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Data3](#schemadata3)|true|none|none|

<h2 id="tocSdata3">Data3</h2>

<a id="schemadata3"></a>

```json
{
  "_id": "5d38f1e8512bbf71fb776015",
  "name": "Microsoft",
  "connector": {
    "_id": "5d38f182512bbf0c06776013"
  },
  "branding": {
    "logo": "https://atomicfi-public.s3.amazonaws.com/1b27b5a3-db2d-4dbd-83e9-5e256a91d573_Microsoft_logo.svg",
    "color": "#FFFFFF"
  }
}

```

*Data3*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|true|none|none|
|name|string|true|none|none|
|connector|[Connector1](#schemaconnector1)|true|none|none|
|branding|[Branding](#schemabranding)|true|none|none|

<h2 id="tocSconnector1">Connector1</h2>

<a id="schemaconnector1"></a>

```json
{
  "_id": "5d38f182512bbf0c06776013"
}

```

*Connector1*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|true|none|none|

