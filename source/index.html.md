---
title: Atomic Developer Documentation
language_tabs:
    - shell: cURL
    - javascript--nodejs: Node.JS
    - ruby: Ruby
    - python: Python
    - go: Go
# toc_footers:
#     - >-
#         <a href="https://mermade.github.io/shins/asyncapi.html">See AsyncAPI
#         example</a>
includes: []
search: true
highlight_theme: darkula
headingLevel: 2
---

# Overview

## Introduction

> Production Base URL

```
https://api.atomicfi.com/v1
```

> Sandbox Base URL

```
https://api-sandbox.atomicfi.com/v1
```

### Welcome to Atomic's developer documentation!

You'll find resources to help you integrate with [Transact](#transact-sdk), our web app that handles the heavy-lifting of integration, as well as a number of [REST](en.wikipedia.org/wiki/Representational_State_Transfer)ful API endpoints.

We've tried our best to make this documentation comprehensive and helpful. If you have suggestions or find issues, [please let us know](mailto:engineering@atomicfi.com).

To get going quickly, we recommend using an API collaboration tool called [Postman](https://www.getpostman.com). You can use the button below to import our collection of endpoints. Be sure to set your `apiUrl`, `apiKey`, and `apiSecret` [environment variables](https://learning.getpostman.com/docs/postman/environments-and-globals/manage-environments/).

<div class="postman-run-button"
data-postman-action="collection/import"
data-postman-var-1="4d830a56bc79a690a118"></div>
<script type="text/javascript">
  (function (p,o,s,t,m,a,n) {
    !p[s] && (p[s] = function () { (p[t] || (p[t] = [])).push(arguments); });
    !o.getElementById(s+t) && o.getElementsByTagName("head")[0].appendChild((
      (n = o.createElement("script")),
      (n.id = s+t), (n.async = 1), (n.src = m), n
    ));
  }(window, document, "_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));
</script>

## Authentication

Atomic uses a combination of API keys and access tokens to authenticate requests.

You can retrieve and manage your API keys in the [Atomic Dashboard](https://dashboard.atomicfi.com/).

Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, etc.

## Errors

Our API returns standard HTTP success or error status codes. For errors, we will also include extra information about what went wrong encoded in the response as JSON. The various HTTP status codes we might return are listed below.

| Code | Title                 | Description                     |
| ---- | --------------------- | ------------------------------- |
| 200  | OK                    | The request was successful.     |
| 400  | Bad Request           | The request was unacceptable.   |
| 401  | Unauthorized          | Missing or invalid credentials. |
| 404  | Not Found             | The resource does not exist.    |
| 422  | Validation error      | A validation error occurred.    |
| 50X  | Internal Server Error | An error occurred with our API. |

# Products

![alt text](/source/images/atomic-products.png "Products Preview")

## xBalance

### Atomic's xBalance product facilitates the transfer of debt balances between financial institutions.

### Deployment options

#### Transact SDK

[Transact](#transact-sdk) allows the user to easily choose the source of their balance transfer, while the destination is pre-configured during [Access Token](#create-access-token) creation.

#### Atomic Dashboard

The [Atomic Dashboard](https://dashboard.atomicfi.com/) may be used to initiate a balance transfer, as well as monitor it's progress as it travels through various states of processing.

#### API

Atomic's API may be used to initiate a balance transfer by first creating an [Access Token](#create-access-token), and subsequently generating a [Task](#create-task). The status of the task may be monitored through [webhooks](#webhooks) and the [Atomic Dashboard](https://dashboard.atomicfi.com/).

### Testing

When testing xBalance, you may use `4111111111111111` as the origin account number. This will mimic a transfer.

## xDeposit

### Atomic's xDeposit product facilitates the switching of the bank account(s) to which a user's direct deposit is credited.

When users are authenticating with their payroll account, Atomic requires that the xDeposit product be facilitated through [Transact](#transact-sdk).

### Testing

To aid in testing various user experiences, you may use any of these pre-determined "test" credentials for employer authentication. Any password will work, as long as the username is found in this list. When answering MFA questions, any answer will be accepted. If the authentication requires an email, simply append `@test.com` to the end of the chosen username.

| Username            | Test Case                                                  |
| ------------------- | ---------------------------------------------------------- |
| `test-good`         | Successful authentication.                                 |
| `test-bad`          | Unsuccessful authentication.                               |
| `test-code-mfa`     | Authentication that includes a device code based MFA flow. |
| `test-question-mfa` | Authentication that includes a question-based MFA flow.    |

# Transact SDK

![alt text](/source/images/xbalance-devices.png "Transact Preview")

### Atomic Transact SDK is a UI designed to securely handle interactions with our products, while performing the heavy-lifting of integration.

### Integration

> Initalize Transact

```html
<script src="https://cdn.atomicfi.com/transact.js"></script>
```

```javascript
const startTransact = () => {
    Atomic.transact({
        // Replace with the server-side generated `publicToken`
        publicToken: "PUBLIC_TOKEN",
        // Could be either 'xbalance' or 'xdeposit'
        product: "xbalance",
        // Optionally receive webhook events to a URL of your choice
        webhookUrl: "https://example.url",
        onFinish: function(data) {
            // Called when the user finishes the transaction
            // We recommend saving the `data` object which could be useful for support purposes
        },
        onClose: function() {
            // Called when the user exits Transact prematurely
        }
    });
};

// `startTransact` would typically be user-initiated, such as a button click or tap
startTransact();
```

An [AccessToken](#create-access-token) is required to initialize Transact, and is generated server-side using your API key, and the `publicToken` from the response is returned to your client-side code.

### Mobile & Web

Transact can be initialized by including our JavaScript SDK into your page, and then calling the `Atomic.start` method.

Within the context of a mobile app, we recommend loading Transact into a web view (for example, `WKWebView` on iOS) by building a simple self-hosted wrapper page. In the future, we'll be launching SDKs to make this easier. See this [example iOS app](#TODO) for more information.

### SMS

To invite a user to use [Transact](#transact-sdk) over SMS, follow the instructions as described in the [AccessToken](#create-access-token) section.

### Javascript SDK parameters

| Attribute                       | Description                                                                                                  |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `publicToken` <h6>required</h6> | The public token return during [AccessToken](#create-access-token) creation.                                 |
| `product` <h6>required</h6>     | The [product](#products) to initiate, either `xbalance` or `xdeposit`                                        |
| `webhookUrl`                    | Optionally, a webhook URL can be configured during initialization.                                           |
| `onFinish`                      | A function that is called when the user finishes the transaction. The function will receive a `data` object. |
| `onClose`                       | Called when the user exits Transact prematurely.                                                             |

# Webhooks

### Webhooks are a useful way to receive automated updates, and send timely notification to your user as a transaction progresses.

You can configure webhook endpoints via the [Atomic Dashboard](https://dashboard.atomicfi.com/) or during the [initialization of Transact](#transact-sdk). Atomic will issue `POST` requests to the designated endpoint(s). We recommend using [Request Bin](https://requestbin.com/) as a way to inspect the payload of events during development without needing to stand up a server.

## Securing webhooks

To validate a webhook request came from Atomic, we suggest verifying the payloads with the `X-HMAC-Signature-Sha-256` header (which we pass with every request).

| Header                     | Description                                                                       |
| -------------------------- | --------------------------------------------------------------------------------- |
| `X-HMAC-Signature-Sha-256` | A SHA1 HMAC hexdigest computed with your API key and the raw body of the request. |

## Event object

> Sample

```json
{
    "eventType": "task-status-updated",
    "eventTime": "2020-01-28T22:04:18.778Z",
    "product": "xdeposit",
    "user": {
        "_id": "5d8d3fecbf637ef3b11a877a",
        "identifier": "YOUR_INTERNAL_GUID"
    },
    "task": "5e30afde097146a8fc3d5cec",
    "data": {
        "previousStatus": "processing",
        "status": "completed",
        "transferType": "total"
    }
}
```

| Attribute | Description                              |
| --------- | ---------------------------------------- |
| `_id`     | GUID of the event, for reference.        |
| `created` | The date and time of the event creation. |
| `task`    | ID of the task, for reference.           |
| `user`    | Information about the user.              |
| `type`    | The [event type](#event-types).          |
| `data`    | Payload of data describing the event.    |

## Event types

> Task Status Update

```json
{
    "_id": "5c1821dbc6b7baf3435e1d23",
    "created": "2019-11-20T16:51:12Z",
    "task": "5d97e4abc90a0a0007993e9c",
    "user": {
        "_id": "5c17c632e1d8ca3b08b2586f",
        "identifier": "YOUR_UNIQUE_GUID"
    },
    "type": "task-status-updated",
    "data": {
        "previousStatus": "processing",
        "status": "completed"
    }
}
```

### task-status-updated

The status of a [Task](#create-task) was changed. Possible statuses include:

| Status       | Description                      |
| ------------ | -------------------------------- |
| `queued`     | The task is awaiting processing. |
| `processing` | The task has started processing. |
| `failed`     | The task failed to process.      |
| `completed`  | The task completed successfully. |

# API Reference

## Create Access Token

> Code samples

```shell
# You can also use wget
curl --location --request POST "https://api.atomicfi.com/v1/access-token" \
  --header "Content-Type: application/json" \
  --header "x-api-key: f0d0a166-96de-4898-8879-da309801968b" \
  --header "x-api-secret: afcce08f-95bd-4317-9119-ecb8debae4f2" \
  --data "{
	\"identifier\": \"YOUR_INTERNAL_GUID\",
	\"phone\": \"8016554444\",
	\"email\": \"jdoe@example.org\",
	\"names\": [
		{
			\"firstName\": \"Jane\",
			\"lastName\": \"Doe\"
		}
	],
	\"addresses\": [
		{
			\"line1\": \"123 Atomic Ave.\",
			\"line2\": \"Apt. #1\",
			\"city\": \"Salt Lake City\",
			\"state\": \"UT\",
			\"zipcode\": \"84044\",
			\"country\": \"US\"
		}
	],
	\"accounts\": [
		{
			\"accountNumber\": \"220000000\",
			\"routingNumber\": \"110000000\",
			\"type\": \"checking\",
			\"title\": \"Premier Plus Checking\"
		}
	]
}"

```

```javascript--nodejs
var https = require('https');

var options = {
  'method': 'POST',
  'hostname': 'https://api.atomicfi.com/v1',
  'path': '/access-token',
  'headers': {
    'Content-Type': 'application/json',
    'x-api-key': 'f0d0a166-96de-4898-8879-da309801968b',
    'x-api-secret': 'afcce08f-95bd-4317-9119-ecb8debae4f2'
  }
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData =  "{\n\t\"identifier\": \"YOUR_INTERNAL_GUID\",\n\t\"phone\": \"8016554444\",\n\t\"email\": \"jdoe@example.org\",\n\t\"names\": [\n\t\t{\n\t\t\t\"firstName\": \"Jane\",\n\t\t\t\"lastName\": \"Doe\"\n\t\t}\n\t],\n\t\"addresses\": [\n\t\t{\n\t\t\t\"line1\": \"123 Atomic Ave.\",\n\t\t\t\"line2\": \"Apt. #1\",\n\t\t\t\"city\": \"Salt Lake City\",\n\t\t\t\"state\": \"UT\",\n\t\t\t\"zipcode\": \"84044\",\n\t\t\t\"country\": \"US\"\n\t\t}\n\t],\n\t\"accounts\": [\n\t\t{\n\t\t\t\"accountNumber\": \"220000000\",\n\t\t\t\"routingNumber\": \"110000000\",\n\t\t\t\"type\": \"checking\",\n\t\t\t\"title\": \"Premier Plus Checking\"\n\t\t}\n\t]\n}";

req.write(postData);

req.end();

```

```ruby
require "uri"
require "net/http"

url = URI("https://api.atomicfi.com/v1/access-token")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["x-api-key"] = "f0d0a166-96de-4898-8879-da309801968b"
request["x-api-secret"] = "afcce08f-95bd-4317-9119-ecb8debae4f2"
request.body = "{\n\t\"identifier\": \"YOUR_INTERNAL_GUID\",\n\t\"phone\": \"8016554444\",\n\t\"email\": \"jdoe@example.org\",\n\t\"names\": [\n\t\t{\n\t\t\t\"firstName\": \"Jane\",\n\t\t\t\"lastName\": \"Doe\"\n\t\t}\n\t],\n\t\"addresses\": [\n\t\t{\n\t\t\t\"line1\": \"123 Atomic Ave.\",\n\t\t\t\"line2\": \"Apt. #1\",\n\t\t\t\"city\": \"Salt Lake City\",\n\t\t\t\"state\": \"UT\",\n\t\t\t\"zipcode\": \"84044\",\n\t\t\t\"country\": \"US\"\n\t\t}\n\t],\n\t\"accounts\": [\n\t\t{\n\t\t\t\"accountNumber\": \"220000000\",\n\t\t\t\"routingNumber\": \"110000000\",\n\t\t\t\"type\": \"checking\",\n\t\t\t\"title\": \"Premier Plus Checking\"\n\t\t}\n\t]\n}"

response = http.request(request)
puts response.read_body


```

```python
import requests
url = 'https://api.atomicfi.com/v1/access-token'
payload = "{\n\t\"identifier\": \"YOUR_INTERNAL_GUID\",\n\t\"phone\": \"8016554444\",\n\t\"email\": \"jdoe@example.org\",\n\t\"names\": [\n\t\t{\n\t\t\t\"firstName\": \"Jane\",\n\t\t\t\"lastName\": \"Doe\"\n\t\t}\n\t],\n\t\"addresses\": [\n\t\t{\n\t\t\t\"line1\": \"123 Atomic Ave.\",\n\t\t\t\"line2\": \"Apt. #1\",\n\t\t\t\"city\": \"Salt Lake City\",\n\t\t\t\"state\": \"UT\",\n\t\t\t\"zipcode\": \"84044\",\n\t\t\t\"country\": \"US\"\n\t\t}\n\t],\n\t\"accounts\": [\n\t\t{\n\t\t\t\"accountNumber\": \"220000000\",\n\t\t\t\"routingNumber\": \"110000000\",\n\t\t\t\"type\": \"checking\",\n\t\t\t\"title\": \"Premier Plus Checking\"\n\t\t}\n\t]\n}"
headers = {
  'Content-Type': 'application/json',
  'x-api-key': 'f0d0a166-96de-4898-8879-da309801968b',
  'x-api-secret': 'afcce08f-95bd-4317-9119-ecb8debae4f2'
}
response = requests.request('POST', url, headers = headers, data = payload, allow_redirects=False, timeout=undefined, allow_redirects=false)
print(response.text)
```

```go
package main

import (
  "fmt"
  "strings"
  "os"
  "path/filepath"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://api.atomicfi.com/v1/access-token"
  method := "POST"

  payload := strings.NewReader("{\n	\"identifier\": \"YOUR_INTERNAL_GUID\",\n	\"phone\": \"8016554444\",\n	\"email\": \"jdoe@example.org\",\n	\"names\": [\n		{\n			\"firstName\": \"Jane\",\n			\"lastName\": \"Doe\"\n		}\n	],\n	\"addresses\": [\n		{\n			\"line1\": \"123 Atomic Ave.\",\n			\"line2\": \"Apt. #1\",\n			\"city\": \"Salt Lake City\",\n			\"state\": \"UT\",\n			\"zipcode\": \"84044\",\n			\"country\": \"US\"\n		}\n	],\n	\"accounts\": [\n		{\n			\"accountNumber\": \"220000000\",\n			\"routingNumber\": \"110000000\",\n			\"type\": \"checking\",\n			\"title\": \"Premier Plus Checking\"\n		}\n	]\n}")

  client := &http.Client {
    CheckRedirect: func(req *http.Request, via []*http.Request) error {
      return http.ErrUseLastResponse
    },
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
  }
  req.Header.Add("Content-Type", "application/json")
  req.Header.Add("x-api-key", "f0d0a166-96de-4898-8879-da309801968b")
  req.Header.Add("x-api-secret", "afcce08f-95bd-4317-9119-ecb8debae4f2")

  res, err := client.Do(req)
  defer res.Body.Close()
  body, err := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}

```

> Example request

```json
{
    "identifier": "YOUR_INTERNAL_GUID",
    "phone": "8016554444",
    "email": "jdoe@example.org",
    "expiry": "2019-12-06T12:22:54Z",
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

An `AccessToken` grants access to Atomic's API resources for a specific user.

### HTTP Request

`POST /access-token`

### Authentication headers

| Name           | Description                        |
| -------------- | ---------------------------------- |
| `x-api-key`    | API Key for your Atomic account    |
| `x-api-secret` | API Secret for your Atomic account |

### Request properties

| Name                           | Type                  | Description                                                                                                                                                                                                       |
| ------------------------------ | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `identifier` <h6>required</h6> | string                | A unique identifier (GUID) from your system that will be used to reference this user.                                                                                                                             |
| `expiry`                       | string                | An optional [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time by which the `AccessToken` will expire. By default, it will be set to 24 hours after access token creation.                          |
| `sendUserInvite`               | string                | An optional field, that if set to a product (e.g. `xdeposit` or `xbalance`), will send a text message to the user with a unique link to access Transact.                                                          |
| `phone`                        | string                | A mobile phone number for the user is required if you plan on inviting a user to use [Transact](#transact-sdk) via SMS.                                                                                           |
| `email`                        | string                | An email address for the user is required if you plan on inviting a user to use [Transact](#transact-sdk) via email.                                                                                              |
| `accounts` <h6>required</h6>   | [[Account](#account)] | An array of bank and/or credit card accounts. At least one bank account is required for an [xDeposit](#xdeposit) transaction, and at least one card account is required for an [xBalance](#xbalance) transaction. |
| `names`                        | [[Name](#name)]       | Account holder names, for reference.                                                                                                                                                                              |
| `addresses`                    | [[Address](#address)] | Account holder addresses, for reference.                                                                                                                                                                          |

### Nested object properties

#### Account

> Bank account example

```json
{
    "accountNumber": "220000000",
    "routingNumber": "110000000",
    "type": "checking",
    "title": "Premier Plus Checking"
}
```

> Card account example

```json
{
    "accountNumber": "4111111111111111",
    "title": "ABC Bank Platinum Card",
    "type": "card",
    "transferLimit": "50000"
}
```

##### Properties

| Name                              | Type   | Description                                                                                                               |
| --------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------- |
| `accountNumber` <h6>required</h6> | string | Account number.                                                                                                           |
| `routingNumber`                   | string | When account the account is bank account, this is the ABA routing number.                                                 |
| `type`                            | string | Type of account. Possible values include `card`, `checking`, or `savings`                                                 |
| `title`                           | string | A friendly name for the account that could be shown to the user.                                                          |
| `transferLimit`                   | string | A balance transfer limit (in dollars) that may be optionally imposed when executing an [xBalance](#xbalance) transaction. |

#### Name

> Name example

```json
{
    "firstName": "Jane",
    "lastName": "Doe"
}
```

##### Properties

| Name        | Type   | Description                   |
| ----------- | ------ | ----------------------------- |
| `firstName` | string | First name of account holder. |
| `lastName`  | string | Last name of account holder.  |

#### Address

> Address example

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

##### Properties

| Name      | Type   | Description              |
| --------- | ------ | ------------------------ |
| `line1`   | string | First line of address.   |
| `line2`   | string | Second line of address . |
| `city`    | string | State of address.        |
| `state`   | string | Second line of address   |
| `zipcode` | string | 5-digit zipcode.         |
| `country` | string | Country of address.      |

### Response

> Example response

```json
{
    "data": {
        "publicToken": "6e93549e-3571-4f57-b0f7-77b7cb0b5e48",
        "token": "c00f869e-0fce-4d32-9277-a68658578ba2",
        "publicTokenExpiration": "2019-12-06T12:22:54Z"
    }
}
```

Successfully creating an `Access Token` will return a payload with a `data` object containing both a public `publicToken` and a private `token`. The `publicToken` may be used to initialize the [Transact SDK](#transact-sdk). If you plan on making subsequent API requests for this user, we recommend saving these tokens to authenticate future requests.

### Response Properties

| Name                    | Type   | Description                                                                                                         |
| ----------------------- | ------ | ------------------------------------------------------------------------------------------------------------------- |
| `publicToken`           | string | Public `AccessToken` that can be used to initialize [Transact SDK](#transact-sdk) and make subsequent API requests. |
| `publicTokenExpiration` | string | [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date by which the `AccessToken` will no longer be valid.         |
| `token`                 | string | Private token that should be kept secret.                                                                           |

## Create Task

> Code samples

```shell
curl --location --request POST "https://api.atomicfi.com/v1/task" \
  --header "Content-Type: application/json" \
  --header "x-public-token: e0d2f67e-dc98-45d8-8b22-db76cb52f732" \
  --data "{
    \"product\": \"xdeposit\",
    \"company\": \"5d77f9e1070856f3828945c6\",
    \"settings\": {
        \"xbalance\": {
            \"amount\": \"500\",
            \"accountNumber\": \"4111111111111\"
        }
    }
}"

```

```javascript--nodejs
var https = require('https');

var options = {
  'method': 'POST',
  'hostname': 'https://api.atomicfi.com/v1',
  'path': '/task',
  'headers': {
    'Content-Type': 'application/json',
    'x-public-token': 'e0d2f67e-dc98-45d8-8b22-db76cb52f732'
  }
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData =  "{\n    \"product\": \"xdeposit\",\n    \"company\": \"5d77f9e1070856f3828945c6\",\n    \"settings\": {\n        \"xbalance\": {\n            \"amount\": \"500\",\n            \"accountNumber\": \"4111111111111\"\n        }\n    }\n}";

req.write(postData);

req.end();

```

```ruby
require "uri"
require "net/http"

url = URI("https://api.atomicfi.com/v1/task")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["x-public-token"] = "e0d2f67e-dc98-45d8-8b22-db76cb52f732"
request.body = "{\n    \"product\": \"xdeposit\",\n    \"company\": \"5d77f9e1070856f3828945c6\",\n    \"settings\": {\n        \"xbalance\": {\n            \"amount\": \"500\",\n            \"accountNumber\": \"4111111111111\"\n        }\n    }\n}"

response = http.request(request)
puts response.read_body


```

```python
import requests
url = 'https://api.atomicfi.com/v1/task'
payload = "{\n    \"product\": \"xdeposit\",\n    \"company\": \"5d77f9e1070856f3828945c6\",\n    \"settings\": {\n        \"xbalance\": {\n            \"amount\": \"500\",\n            \"accountNumber\": \"4111111111111\"\n        }\n    }\n}"
headers = {
  'Content-Type': 'application/json',
  'x-public-token': 'e0d2f67e-dc98-45d8-8b22-db76cb52f732'
}
response = requests.request('POST', url, headers = headers, data = payload, allow_redirects=False, timeout=undefined, allow_redirects=false)
print(response.text)

```

```go
package main

import (
  "fmt"
  "strings"
  "os"
  "path/filepath"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://api.atomicfi.com/v1/task"
  method := "POST"

  payload := strings.NewReader("{\n    \"product\": \"xdeposit\",\n    \"company\": \"5d77f9e1070856f3828945c6\",\n    \"settings\": {\n        \"xbalance\": {\n            \"amount\": \"500\",\n            \"accountNumber\": \"4111111111111\"\n        }\n    }\n}")

  client := &http.Client {
    CheckRedirect: func(req *http.Request, via []*http.Request) error {
      return http.ErrUseLastResponse
    },
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
  }
  req.Header.Add("Content-Type", "application/json")
  req.Header.Add("x-public-token", "e0d2f67e-dc98-45d8-8b22-db76cb52f732")

  res, err := client.Do(req)
  defer res.Body.Close()
  body, err := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}


```

> Request body example

```json
{
    "product": "xdeposit",
    "company": "5d77f9e1070856f3828945c6",
    "settings": {
        "xbalance": {
            "amount": "500",
            "accountNumber": "4111111111111"
        }
    }
}
```

To request that an [xBalance](#xbalance) transaction is performed, a `Task` object is created that contains instructions on the origin and destination of the balance. A `Task` associated with a user via the `publicToken` used to authenticate the request.

### HTTP Request

`POST /task`

### Authentication headers

| Name             | Description                                                                  |
| ---------------- | ---------------------------------------------------------------------------- |
| `x-public-token` | Public token generated during [access token creation](#create-access-token). |

### Request properties

| Name                                                | Type   | Description                                                                                                                                                                            |
| --------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `product` <h6>required</h6>                         | string | Must be set to `xbalance`.                                                                                                                                                             |
| `company` <h6>required</h6>                         | string | The `_id` of a [Company](#company-object) object. This will be used as the origin of the balance transfer.                                                                             |
| `settings.xbalance.amount` <h6>required</h6>        | string | A USD amount to be transferred from the origin `company`. May be limited by the `transferLimit` set during `Access Token`'s account creation.                                          |
| `settings.xbalance.accountNumber` <h6>required</h6> | string | The origin `company`'s account number.                                                                                                                                                 |
| `settings.destinationUserAccountId`                 | string | The ID of an optionally chosen destination account if there are multiple eligible accounts added during `Access token` creation. Defaults to the first eligible account if not passed. |

### Response

> Example responses

```json
{
    "data": {
        "id": "5d3b23b155f500465c895f60",
        "status": "queued"
    }
}
```

Successfully creating a `Task` will return a payload with a `data` object containing both a public `_id_` and a private `status` of `queued`. The `status` will change as the task progresses towards completion. The [Atomic Dashboard](https://dashboard.atomicfi.com/) can be used to track task progress. If you plan on implementing (webhooks)(#webhooks), we recommend saving the task `_id` for reference.

### Response Properties

| Name     | Type   | Description                                   |
| -------- | ------ | --------------------------------------------- |
| `_id`    | string | Unique identifier for the `Task`.             |
| `status` | string | [Status](#task-status-updated) of the `Task`. |

## Company Search

> Code samples

```shell
curl --location --request GET "https://api.atomicfi.com/v1/company/search?query=microsoft&product=deposit" \
  --header "x-public-token: e0d2f67e-dc98-45d8-8b22-db76cb52f732"

```

\$.ajax(settings).done(function(response) {
console.log(response);
});

````

```javascript--nodejs
var https = require('https');

var options = {
  'method': 'GET',
  'hostname': 'https://api.atomicfi.com/v1',
  'path': '/company/search?query=microsoft&product=deposit',
  'headers': {
    'x-public-token': 'e0d2f67e-dc98-45d8-8b22-db76cb52f732'
  }
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();

````

```ruby
require "uri"
require "net/http"

url = URI("https://api.atomicfi.com/v1/company/search?query=microsoft&product=deposit")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Get.new(url)
request["x-public-token"] = "e0d2f67e-dc98-45d8-8b22-db76cb52f732"

response = http.request(request)
puts response.read_body


```

```python
import requests
url = 'https://api.atomicfi.com/v1/company/search?query=microsoft&product=deposit'
payload = {}
headers = {
  'x-public-token': 'e0d2f67e-dc98-45d8-8b22-db76cb52f732'
}
response = requests.request('GET', url, headers = headers, data = payload, allow_redirects=False, timeout=undefined, allow_redirects=false)
print(response.text)


```

```go
package main

import (
  "fmt"
  "os"
  "path/filepath"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://api.atomicfi.com/v1/company/search?query=microsoft&product=deposit"
  method := "GET"

  client := &http.Client {
    CheckRedirect: func(req *http.Request, via []*http.Request) error {
      return http.ErrUseLastResponse
    },
  }
  req, err := http.NewRequest(method, url, nil)

  if err != nil {
    fmt.Println(err)
  }
  req.Header.Add("x-public-token", "e0d2f67e-dc98-45d8-8b22-db76cb52f732")

  res, err := client.Do(req)
  defer res.Body.Close()
  body, err := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}
```

Searches for a `Company` using a text `query`. Searches can also be narrowed by passing in a specific `product`. The primary use case of this endpoint is for an autocomplete search component.

### HTTP Request

`GET /company/search`

### Authentication headers

| Name             | Description                                                                  |
| ---------------- | ---------------------------------------------------------------------------- |
| `x-public-token` | Public token generated during [access token creation](#create-access-token). |

                                            |

### Request properties

| Name                      | Type   | Description                                                                                 |
| ------------------------- | ------ | ------------------------------------------------------------------------------------------- |
| `query` <h6>required</h6> | string | Filters companies by name. Uses fuzzy matching to narrow results.                           |
| `product`                 | string | Filters companies by a specific product. Possible values include `xbalance`, and `xdeposit` |

### Response

> Example response

```json
{
    "data": [
        {
            "_id": "5d38f1e8512bbf71fb776015",
            "name": "Wells Fargo",
            "connector": {
                "_id": "5d38f182512bbf0c06776013",
                "availableProducts": ["xbalance"]
            },
            "branding": {
                "logo": "https://atomicfi-public.s3.amazonaws.com/1b27b5a3-db2d-4dbd-83e9-5e256a91d573.svg",
                "color": "#FFFFFF"
            }
        }
    ]
}
```

Successfully querying the `Company` search endpoint will return a payload with a `data` array of `Company` objects.

### Company object

| Name                | Type   | Description                                            |
| ------------------- | ------ | ------------------------------------------------------ |
| `_id`               | string | Unique identifier.                                     |
| `name`              | string | Company name.                                          |
| `availableProducts` | array  | A list of compatible products.                         |
| `branding.logo`     | string | Logo for the company, typically an `svg` if available. |
| `branding.color`    | string | Branding color for the company.                        |
