---
title: POS Api
language_tabs:
  - go: Go
  - http: HTTP
  - javascript: JavaScript
  - javascript--nodejs: Node.JS
  - python: Python
  - ruby: Ruby
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="intro">Introducción a la API de Clip Punto de Venta </h1>
<p>
La API de punto de venta permite a las aplicaciones móviles abrir la aplicación Clip para procesar pagos de una persona usando el lector de Clip. Los desarrolladores pueden usar la API de punto de venta para crear soluciones personalizadas de punto de venta o cualquier otra aplicación que requiera pagos, sin preocuparse por el cumplimiento de PCI. Por el momento la API de punto de venta está disponible para el dispositivo Clip Pro.
</p>
<div class="h2 mt-0 pb-3">Requisitos y limitaciones</div>
<p>
La API de Clip Punto de Venta requiere:
</p>
<ul>
<li>
Un dispositivo Clip Pro con la versión más reciente de la aplicación Clip instalada.
</li>
<li>
Una cuenta Clip activa (para aceptar pagos con tarjeta).
</li>
</ul>
<p>
Las tarifas de procesamiento para transacciones iniciadas con la API de punto de venta son idénticas a las tarifas para transacciones iniciadas directamente desde la aplicación Clip.
</p>
<div class="h2 pb-3">Flujo de procesos del POS API </div>
<ol>
<li>
El usuario realiza el proceso de pago mediante el punto de venta.
</li>
<li>
El punto de venta se comunica a través del método <strong>HTTP POST</strong> a nuestro <strong>POS API.</strong>
</li>
<li>
Nuestra <strong>POS API</strong> responde al punto de venta
</li>
<li>
El punto de venta procesa la respuesta y a través del método <strong>HTTP GET</strong> solicita la información para ser procesado en la terminal Clip a nuestro <strong>POS API.</strong>
</li>
<li>
La terminal Clip pone en la lista de pendientes la transacción y ahora está lista para llevar a cabo el proceso de pago.
</li>
<li>
El proceso de pago, ya finalizado cambia el estatus de la transacción a Pagado.
</li>
</ol>
<p class="pt-5">
<img src="/pub/images/api-flow1.png" alt="Flow Diagram" />
</p>
<h2>Configurar el dispositivo desplegar las transacciones.</h2>
<p>Para hacer esto deberás seguir estos pasos:</p>
<ol>
<li>
Ir a la configuración dentro de tu app clip (símbolo de engranaje).
</li>
<li>
Ir a la sección de Seguridad.
</li>
<li>
Activar la opción “Transacciones B2B”.
</li>
<li>
Regresar al menú principal.</li>
</ol>

<h1 id="pos-api">POS Api v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

La API de punto de venta permite a las aplicaciones móviles abrir la aplicación Clip para procesar pagos de una persona usando el lector de Clip. Los desarrolladores pueden usar la API de punto de venta para crear soluciones personalizadas de punto de venta o cualquier otra aplicación que requiera pagos, sin preocuparse por el cumplimiento de PCI. Por el momento la API de punto de venta está disponible para el dispositivo Clip Pro.

<div class="docs-note info enviroments">
Estos Son los diferentes ambientes definidos en la API:

<a href="https://testapi-gw.payclip.com">https://testapi-gw.payclip.com</a> Esta es la direccion del servicio en produccion

<a href="https://sandbox.payclip.com">https://sandbox.payclip.com</a> Esta es la direccion del servicio para testing (Sandbox)

</div>

<div class="terms">

 License: MIT
</div>

# Authentication

<h2 class="icon key gray mb-3" id="algo">Api Key</h2>

Parameter Name: <span class="tags gray">x-api-key</span>, in: <span class="tags purple">header</span>. llave provista por clip necesaria para poder autenticarse y con ello realizar llamadas al api.

<table>
<tbody>
<tr>
<td>
<strong>Security scheme type:</strong>
</td>
<td>
apiKey
</td>
</tr>
<tr>
<td>
<strong>parameter header name:</strong>
</td>
<td>
x-api-key
</td>
</tr>
<tbody>
</table>

<h1 id="pos-api-payment">payment</h1>

## *get*Obtiene un listado de transacciones

<a id="opIdObtener Transacciones"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "x-api-key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://testapi-gw.payclip.com/paymentrequest", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET https://testapi-gw.payclip.com/paymentrequest HTTP/1.1
Host: testapi-gw.payclip.com
Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json',
  'x-api-key':'API_KEY'

};

$.ajax({
  url: 'https://testapi-gw.payclip.com/paymentrequest',
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
  'x-api-key':'API_KEY'

};

fetch('https://testapi-gw.payclip.com/paymentrequest',
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

```python
import requests
headers = {
  'Accept': 'application/json',
  'x-api-key': 'API_KEY'
}

r = requests.get('https://testapi-gw.payclip.com/paymentrequest', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'x-api-key' => 'API_KEY'
}

result = RestClient.get 'https://testapi-gw.payclip.com/paymentrequest',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /paymentrequest`

> Example responses

> 200 Response

```json
{
  "transactions": [
    {
      "paymentRequestId": "string",
      "transactionId": "string",
      "merchantId": "string",
      "merchantToken": "string",
      "paymentRequestCode": "string",
      "amount": 0,
      "currency": "string",
      "merchantInvoiceId": "cobro-septiembre17",
      "statusCode": 0,
      "statusMsg": "string",
      "expiresAt": {
        "epochSecond": 0,
        "nano": 0
      },
      "assignedUserId": "string",
      "message": "pago pendiente",
      "consumerEmail": "user@example.com",
      "createdByUserId": "string",
      "closedAt": {
        "epochSecond": 0,
        "nano": 0
      },
      "createdAt": {
        "epochSecond": 0,
        "nano": 0
      },
      "updatedAt": {
        "epochSecond": 0,
        "nano": 0
      }
    }
  ]
}
```

<h3 id="obtiene-un-listado-de-transacciones-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Respuesta del servidor con el listado de transacciones|[TransactionList](#schematransactionlist)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Usuario no autorizado|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## *post*Registrar una transacción

<a id="opIdPayment Request"></a>

> Code samples

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
        "x-api-key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://testapi-gw.payclip.com/paymentrequest", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
POST https://testapi-gw.payclip.com/paymentrequest HTTP/1.1
Host: testapi-gw.payclip.com
Content-Type: application/json
Accept: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'x-api-key':'API_KEY'

};

$.ajax({
  url: 'https://testapi-gw.payclip.com/paymentrequest',
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
  "amount": 0,
  "assigned_user": "user@example.com",
  "reference": "string",
  "user_id": "string",
  "message": "pago pendiente"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'x-api-key':'API_KEY'

};

fetch('https://testapi-gw.payclip.com/paymentrequest',
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

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'x-api-key': 'API_KEY'
}

r = requests.post('https://testapi-gw.payclip.com/paymentrequest', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'x-api-key' => 'API_KEY'
}

result = RestClient.post 'https://testapi-gw.payclip.com/paymentrequest',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /paymentrequest`

> Body parameter

```json
{
  "amount": 0,
  "assigned_user": "user@example.com",
  "reference": "string",
  "user_id": "string",
  "message": "pago pendiente"
}
```

<span class="no-format">
<h3 id="registrar-una-transacción-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
ApiKeyAuth
</div>
</div>

<span class="title my-4">REQUEST BODY SCHEMA</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>amount

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">number</span>
</div>
<div>
<div class="description">
<p>Monto de la transacción</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>assigned_user

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Cadena de caracteres usado para identificar al usuario asignado. Formato de correo electronmico</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>reference

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Identificador único de transacción, puede ser cualquier cadena.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>user_id

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Identificador del usuario relacionado con la cuenta del clip.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>message

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Texto que aparecerá como referencia en la sección de cobros pendientes.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

</span>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RegisterTransaccion](#schemaregistertransaccion)|false|none|
|» amount|body|number|true|Monto de la transacción|
|» assigned_user|body|string(email)|false|Cadena de caracteres usado para identificar al usuario asignado. Formato de correo electronmico|
|» reference|body|string(uuid)|true|Identificador único de transacción, puede ser cualquier cadena.|
|» user_id|body|string(uuid)|false|Identificador del usuario relacionado con la cuenta del clip.|
|» message|body|string|true|Texto que aparecerá como referencia en la sección de cobros pendientes.|

> Example responses

> 200 Response

```json
{
  "code": 100,
  "description": "Transaction Device Saved Success",
  "message": "Reference Already Exists"
}
```

<h3 id="registrar-una-transacción-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Respuesta del servidor al momento de crear una transaccion|[200TransactionOk](#schema200transactionok)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Usuario no autorizado|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

# Schemas

<h2 id="tocSregistertransaccion">RegisterTransaccion</h2>

<a id="schemaregistertransaccion"></a>

```json
{
  "amount": 0,
  "assigned_user": "user@example.com",
  "reference": "string",
  "user_id": "string",
  "message": "pago pendiente"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|true|none|Monto de la transacción|
|assigned_user|string(email)|false|none|Cadena de caracteres usado para identificar al usuario asignado. Formato de correo electronmico|
|reference|string(uuid)|true|none|Identificador único de transacción, puede ser cualquier cadena.|
|user_id|string(uuid)|false|none|Identificador del usuario relacionado con la cuenta del clip.|
|message|string|true|none|Texto que aparecerá como referencia en la sección de cobros pendientes.|

<h2 id="tocSdatetime">DateTime</h2>

<a id="schemadatetime"></a>

```json
{
  "epochSecond": 0,
  "nano": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|epochSecond|integer|false|none|none|
|nano|integer|false|none|none|

<h2 id="tocStransactions">Transactions</h2>

<a id="schematransactions"></a>

```json
{
  "paymentRequestId": "string",
  "transactionId": "string",
  "merchantId": "string",
  "merchantToken": "string",
  "paymentRequestCode": "string",
  "amount": 0,
  "currency": "string",
  "merchantInvoiceId": "cobro-septiembre17",
  "statusCode": 0,
  "statusMsg": "string",
  "expiresAt": {
    "epochSecond": 0,
    "nano": 0
  },
  "assignedUserId": "string",
  "message": "pago pendiente",
  "consumerEmail": "user@example.com",
  "createdByUserId": "string",
  "closedAt": {
    "epochSecond": 0,
    "nano": 0
  },
  "createdAt": {
    "epochSecond": 0,
    "nano": 0
  },
  "updatedAt": {
    "epochSecond": 0,
    "nano": 0
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paymentRequestId|string(uuid)|false|none|Identificador del pago|
|transactionId|string(uuid)|false|none|Identificador de la transaccion|
|merchantId|string(uuid)|false|none|Identificador del Merchant de Clip|
|merchantToken|string(uuid)|false|none|Token del Merchant|
|paymentRequestCode|string|false|none|Codigo|
|amount|number|false|none|Monto de la transaccion|
|currency|string|false|none|Moneda usada en la transaccion|
|merchantInvoiceId|string|false|none|none|
|statusCode|integer|false|none|Estado de la transaccion|
|statusMsg|string|false|none|Descripcion del codigo del estado de la trasaccion|
|expiresAt|[DateTime](#schemadatetime)|false|none|none|
|assignedUserId|string|false|none|usuario asignado a la transaccion|
|message|string|false|none|Texto que aparecerá como referencia en la sección de cobros pendientes.|
|consumerEmail|string(email)|false|none|correo electronico|
|createdByUserId|string(uuid)|false|none|id del usuario que creo la trasaccion|
|closedAt|[DateTime](#schemadatetime)|false|none|none|
|createdAt|[DateTime](#schemadatetime)|false|none|none|
|updatedAt|[DateTime](#schemadatetime)|false|none|none|

<h2 id="tocStransactionlist">TransactionList</h2>

<a id="schematransactionlist"></a>

```json
{
  "transactions": [
    {
      "paymentRequestId": "string",
      "transactionId": "string",
      "merchantId": "string",
      "merchantToken": "string",
      "paymentRequestCode": "string",
      "amount": 0,
      "currency": "string",
      "merchantInvoiceId": "cobro-septiembre17",
      "statusCode": 0,
      "statusMsg": "string",
      "expiresAt": {
        "epochSecond": 0,
        "nano": 0
      },
      "assignedUserId": "string",
      "message": "pago pendiente",
      "consumerEmail": "user@example.com",
      "createdByUserId": "string",
      "closedAt": {
        "epochSecond": 0,
        "nano": 0
      },
      "createdAt": {
        "epochSecond": 0,
        "nano": 0
      },
      "updatedAt": {
        "epochSecond": 0,
        "nano": 0
      }
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transactions|[[Transactions](#schematransactions)]|false|none|none|

<h2 id="tocS200transactionok">200TransactionOk</h2>

<a id="schema200transactionok"></a>

```json
{
  "code": 100,
  "description": "Transaction Device Saved Success",
  "message": "Reference Already Exists"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|Codigo de respuesta:  * `100` - Transaccion exitosa  * `101` - Referencia ya existe|
|description|string|false|none|Descripcion del codigo de error|
|message|string|false|none|Mensaje del servidor|

#### Enumerated Values

|Property|Value|
|---|---|
|code|100|
|code|101|

<h2 id="tocSerror">Error</h2>

<a id="schemaerror"></a>

```json
{
  "message": "Unauthorized"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|Mensaje descriptivo del error|

