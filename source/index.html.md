---
title: Calendar
language_tabs:
  - go: Go
  - http: HTTP
  - javascript: JavaScript
  - javascript--nodejs: Node.JS
  - python: Python
  - ruby: Ruby
toc_footers:
  - >-
    <a
    href="https://developers.google.com/google-apps/calendar/firstapp">External
    documentation</a>
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="calendar">Calendar v3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Manipulates events and other calendar data.

<div class="docs-note info enviroments">
Estos Son los diferentes ambientes definidos en la API:

<a href="https://www.googleapis.com/calendar/v3">https://www.googleapis.com/calendar/v3</a> 

</div>

<div class="terms">
<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>
</div>

# Authentication

<h2 class="icon key gray mb-3" id="algo">Api Key</h2>

Parameter Name: <span class="tags gray">X-API-KEY</span>, in: <span class="tags purple">header</span>. When you sign up for an account, you are given your first secret API key. To do so please follow this link. Also you can generate additional API keys, and delete API keys (as you may need to rotate your keys in the future). All API keys can be restricted to a small set of permissions (restricted API keys).

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
X-API-KEY
</td>
</tr>
<tbody>
</table>

<h2 class="icon key gray mb-3" id="algo-plus">Oauth2</h2>

Oauth 2.0 implicit authentication

<table>
<tbody>
<tr>
<td>
<strong>Flow type:</strong>
</td>
<td>
implicit
</td>
</tr>

<tr>
<td>
<strong>authorizationUrl:</strong>
</td>
<td>
https://accounts.google.com/o/oauth2/auth
</td>
</tr>

<td colspan="2" style='background-color: trasparent'>
<table class="transparent">
<thead>
<tr>
<th>
<strong>
scopes
</strong>
</th>
<th>
<strong>
Description
</strong>
</th>
</tr>
</thead>
<tbody>

<tr>
<td>
<strong>
https://www.googleapis.com/auth/calendar
</strong>
</td>
<td>
See, edit, share, and permanently delete all the calendars you can access using Google Calendar
</td>
</tr>

<tr>
<td>
<strong>
https://www.googleapis.com/auth/calendar.events
</strong>
</td>
<td>
View and edit events on all your calendars
</td>
</tr>

<tr>
<td>
<strong>
https://www.googleapis.com/auth/calendar.events.readonly
</strong>
</td>
<td>
View events on all your calendars
</td>
</tr>

<tr>
<td>
<strong>
https://www.googleapis.com/auth/calendar.readonly
</strong>
</td>
<td>
View your calendars
</td>
</tr>

<tr>
<td>
<strong>
https://www.googleapis.com/auth/calendar.settings.readonly
</strong>
</td>
<td>
View your Calendar settings
</td>
</tr>

<tbody>
</table>
</td>
</tr>

<tbody>
</table>

Oauth 2.0 accessCode authentication

<table>
<tbody>
<tr>
<td>
<strong>Flow type:</strong>
</td>
<td>
authorizationCode
</td>
</tr>

<tr>
<td>
<strong>authorizationUrl:</strong>
</td>
<td>
https://accounts.google.com/o/oauth2/auth
</td>
</tr>

<tr>
<td>
<strong>tokenUrl:</strong>
</td>
<td>
https://accounts.google.com/o/oauth2/token
</td>
</tr>

<td colspan="2" style='background-color: trasparent'>
<table class="transparent">
<thead>
<tr>
<th>
<strong>
scopes
</strong>
</th>
<th>
<strong>
Description
</strong>
</th>
</tr>
</thead>
<tbody>

<tr>
<td>
<strong>
https://www.googleapis.com/auth/calendar
</strong>
</td>
<td>
See, edit, share, and permanently delete all the calendars you can access using Google Calendar
</td>
</tr>

<tr>
<td>
<strong>
https://www.googleapis.com/auth/calendar.events
</strong>
</td>
<td>
View and edit events on all your calendars
</td>
</tr>

<tr>
<td>
<strong>
https://www.googleapis.com/auth/calendar.events.readonly
</strong>
</td>
<td>
View events on all your calendars
</td>
</tr>

<tr>
<td>
<strong>
https://www.googleapis.com/auth/calendar.readonly
</strong>
</td>
<td>
View your calendars
</td>
</tr>

<tr>
<td>
<strong>
https://www.googleapis.com/auth/calendar.settings.readonly
</strong>
</td>
<td>
View your Calendar settings
</td>
</tr>

<tbody>
</table>
</td>
</tr>

<tbody>
</table>

<h1 id="calendar-acl">acl</h1>

## *get*calendar.acl.list

<a id="opIdcalendar.acl.list"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl HTTP/1.1
Host: www.googleapis.com
Accept: */*

```

```javascript
var headers = {
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl',
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
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl',
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
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /calendars/{calendarId}/acl`

Returns the rules in the access control list for the calendar.

<span class="no-format">
<h3 id="calendar.acl.list-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</div>
</div>

<span class="title my-4">Path Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>calendarId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>maxResults

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">integer</span>
</div>
<div>
<div class="description">
<p>Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>pageToken

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Token specifying which result page to return. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>showDeleted

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>syncToken

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
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
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|maxResults|query|integer|false|Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.|
|pageToken|query|string|false|Token specifying which result page to return. Optional.|
|showDeleted|query|boolean|false|Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False.|
|syncToken|query|string|false|Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Detailed descriptions

**syncToken**: Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries.

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.acl.list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[Acl](#schemaacl)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

## *post*calendar.acl.insert

<a id="opIdcalendar.acl.insert"></a>

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
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
POST https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl HTTP/1.1
Host: www.googleapis.com
Content-Type: application/json
Accept: */*

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl',
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
  "etag": "string",
  "id": "string",
  "kind": "calendar#aclRule",
  "role": "string",
  "scope": {
    "type": "string",
    "value": "string"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl',
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
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /calendars/{calendarId}/acl`

Creates an access control rule.

> Body parameter

```json
{
  "etag": "string",
  "id": "string",
  "kind": "calendar#aclRule",
  "role": "string",
  "scope": {
    "type": "string",
    "value": "string"
  }
}
```

<span class="no-format">
<h3 id="calendar.acl.insert-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</div>
</div>

<span class="title my-4">Path Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>calendarId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>sendNotifications

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether to send notifications about the calendar sharing change. Optional. The default is True.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">REQUEST BODY SCHEMA</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>etag

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>ETag of the resource.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>id

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Identifier of the ACL rule.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>kind

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Type of the resource ("calendar#aclRule").</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>role

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The role assigned to the scope. Possible values are:
- "none" - Provides no access.
- "freeBusyReader" - Provides read access to free/busy information.
- "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
- "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
- "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="scope6637" >
<td class="tree">
<span class="field-node"></span>scope

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>The scope of the rule.</p>
</div>
</div>
</div>
</td>
</tr>

<tr>
<td colspan="2" class="prop-tree-extended">
<div>
<table>
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>type

</td>
<td class="prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The type of the scope. Possible values are:
- "default" - The public scope. This is the default value.
- "user" - Limits the scope to a single user.
- "group" - Limits the scope to a group.
- "domain" - Limits the scope to a domain.  Note: The permissions granted to the "default", or public, scope apply to any user, authenticated or not.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>value

</td>
<td class="prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The email address of a user or group, or the name of a domain, depending on the scope type. Omitted for type "default".</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>
</div>
</td>
</tr>

</tbody>
</table>

</span>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|sendNotifications|query|boolean|false|Whether to send notifications about the calendar sharing change. Optional. The default is True.|
|body|body|[AclRule](#schemaaclrule)|false|none|
|» etag|body|string|false|ETag of the resource.|
|» id|body|string|false|Identifier of the ACL rule.|
|» kind|body|string|false|Type of the resource ("calendar#aclRule").|
|» role|body|string|false|The role assigned to the scope. Possible values are:|
|» scope|body|object|false|The scope of the rule.|
|»» type|body|string|false|The type of the scope. Possible values are:|
|»» value|body|string|false|The email address of a user or group, or the name of a domain, depending on the scope type. Omitted for type "default".|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Detailed descriptions

**» role**: The role assigned to the scope. Possible values are:
- "none" - Provides no access.
- "freeBusyReader" - Provides read access to free/busy information.
- "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
- "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
- "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.

**»» type**: The type of the scope. Possible values are:
- "default" - The public scope. This is the default value.
- "user" - Limits the scope to a single user.
- "group" - Limits the scope to a group.
- "domain" - Limits the scope to a domain.  Note: The permissions granted to the "default", or public, scope apply to any user, authenticated or not.

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.acl.insert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[AclRule](#schemaaclrule)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

## *post*calendar.acl.watch

<a id="opIdcalendar.acl.watch"></a>

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
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/watch", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
POST https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/watch HTTP/1.1
Host: www.googleapis.com
Content-Type: application/json
Accept: */*

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/watch',
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
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/watch',
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
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/watch', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/watch',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /calendars/{calendarId}/acl/watch`

Watch for changes to ACL resources.

> Body parameter

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

<span class="no-format">
<h3 id="calendar.acl.watch-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</div>
</div>

<span class="title my-4">Path Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>calendarId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>maxResults

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">integer</span>
</div>
<div>
<div class="description">
<p>Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>pageToken

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Token specifying which result page to return. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>showDeleted

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>syncToken

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">REQUEST BODY SCHEMA</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>address

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The address where notifications are delivered for this channel.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>expiration

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>id

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>A UUID or similar unique string that identifies this channel.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>kind

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="params8463" >
<td class="tree">
<span class="field-node"></span>params

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>Additional parameters controlling delivery channel behavior. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>payload

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>A Boolean value to indicate whether payload is wanted. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>resourceId

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>resourceUri

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>A version-specific identifier for the watched resource.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>type

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The type of delivery mechanism used for this channel.</p>
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
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|maxResults|query|integer|false|Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.|
|pageToken|query|string|false|Token specifying which result page to return. Optional.|
|showDeleted|query|boolean|false|Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False.|
|syncToken|query|string|false|Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.|
|body|body|[Channel](#schemachannel)|false|none|
|» address|body|string|false|The address where notifications are delivered for this channel.|
|» expiration|body|string(int64)|false|Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.|
|» id|body|string|false|A UUID or similar unique string that identifies this channel.|
|» kind|body|string|false|Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".|
|» params|body|object|false|Additional parameters controlling delivery channel behavior. Optional.|
|»» **additionalProperties**|body|string|false|Declares a new parameter by name.|
|» payload|body|boolean|false|A Boolean value to indicate whether payload is wanted. Optional.|
|» resourceId|body|string|false|An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.|
|» resourceUri|body|string|false|A version-specific identifier for the watched resource.|
|» token|body|string|false|An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.|
|» type|body|string|false|The type of delivery mechanism used for this channel.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Detailed descriptions

**syncToken**: Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries.

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.acl.watch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[Channel](#schemachannel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

## *delete*calendar.acl.delete

<a id="opIdcalendar.acl.delete"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/{ruleId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
DELETE https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/{ruleId} HTTP/1.1
Host: www.googleapis.com

```

```javascript
var headers = {
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/{ruleId}',
  method: 'delete',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/{ruleId}',
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

```python
import requests
headers = {
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.delete('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/{ruleId}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.delete 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/{ruleId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`DELETE /calendars/{calendarId}/acl/{ruleId}`

Deletes an access control rule.

<span class="no-format">
<h3 id="calendar.acl.delete-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</div>
</div>

<span class="title my-4">Path Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>calendarId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>ruleId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>ACL rule identifier.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
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
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|ruleId|path|string|true|ACL rule identifier.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="calendar.acl.delete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

## *get*calendar.acl.get

<a id="opIdcalendar.acl.get"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/{ruleId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/{ruleId} HTTP/1.1
Host: www.googleapis.com
Accept: */*

```

```javascript
var headers = {
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/{ruleId}',
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
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/{ruleId}',
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
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/{ruleId}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/{ruleId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /calendars/{calendarId}/acl/{ruleId}`

Returns an access control rule.

<span class="no-format">
<h3 id="calendar.acl.get-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</div>
</div>

<span class="title my-4">Path Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>calendarId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>ruleId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>ACL rule identifier.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
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
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|ruleId|path|string|true|ACL rule identifier.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.acl.get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[AclRule](#schemaaclrule)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</aside>

## *patch*calendar.acl.patch

<a id="opIdcalendar.acl.patch"></a>

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
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PATCH", "https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/{ruleId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
PATCH https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/{ruleId} HTTP/1.1
Host: www.googleapis.com
Content-Type: application/json
Accept: */*

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/{ruleId}',
  method: 'patch',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "etag": "string",
  "id": "string",
  "kind": "calendar#aclRule",
  "role": "string",
  "scope": {
    "type": "string",
    "value": "string"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/{ruleId}',
{
  method: 'PATCH',
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
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.patch('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/{ruleId}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.patch 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/{ruleId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`PATCH /calendars/{calendarId}/acl/{ruleId}`

Updates an access control rule. This method supports patch semantics.

> Body parameter

```json
{
  "etag": "string",
  "id": "string",
  "kind": "calendar#aclRule",
  "role": "string",
  "scope": {
    "type": "string",
    "value": "string"
  }
}
```

<span class="no-format">
<h3 id="calendar.acl.patch-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</div>
</div>

<span class="title my-4">Path Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>calendarId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>ruleId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>ACL rule identifier.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>sendNotifications

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether to send notifications about the calendar sharing change. Note that there are no notifications on access removal. Optional. The default is True.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">REQUEST BODY SCHEMA</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>etag

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>ETag of the resource.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>id

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Identifier of the ACL rule.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>kind

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Type of the resource ("calendar#aclRule").</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>role

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The role assigned to the scope. Possible values are:
- "none" - Provides no access.
- "freeBusyReader" - Provides read access to free/busy information.
- "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
- "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
- "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="scope4185" >
<td class="tree">
<span class="field-node"></span>scope

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>The scope of the rule.</p>
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
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|ruleId|path|string|true|ACL rule identifier.|
|sendNotifications|query|boolean|false|Whether to send notifications about the calendar sharing change. Note that there are no notifications on access removal. Optional. The default is True.|
|body|body|[AclRule](#schemaaclrule)|false|none|
|» etag|body|string|false|ETag of the resource.|
|» id|body|string|false|Identifier of the ACL rule.|
|» kind|body|string|false|Type of the resource ("calendar#aclRule").|
|» role|body|string|false|The role assigned to the scope. Possible values are:|
|» scope|body|object|false|The scope of the rule.|
|»» type|body|string|false|The type of the scope. Possible values are:|
|»» value|body|string|false|The email address of a user or group, or the name of a domain, depending on the scope type. Omitted for type "default".|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Detailed descriptions

**» role**: The role assigned to the scope. Possible values are:
- "none" - Provides no access.
- "freeBusyReader" - Provides read access to free/busy information.
- "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
- "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
- "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.

**»» type**: The type of the scope. Possible values are:
- "default" - The public scope. This is the default value.
- "user" - Limits the scope to a single user.
- "group" - Limits the scope to a group.
- "domain" - Limits the scope to a domain.  Note: The permissions granted to the "default", or public, scope apply to any user, authenticated or not.

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.acl.patch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[AclRule](#schemaaclrule)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

## *put*calendar.acl.update

<a id="opIdcalendar.acl.update"></a>

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
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/{ruleId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
PUT https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/{ruleId} HTTP/1.1
Host: www.googleapis.com
Content-Type: application/json
Accept: */*

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/{ruleId}',
  method: 'put',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "etag": "string",
  "id": "string",
  "kind": "calendar#aclRule",
  "role": "string",
  "scope": {
    "type": "string",
    "value": "string"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/{ruleId}',
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

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.put('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/{ruleId}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.put 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/acl/{ruleId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`PUT /calendars/{calendarId}/acl/{ruleId}`

Updates an access control rule.

> Body parameter

```json
{
  "etag": "string",
  "id": "string",
  "kind": "calendar#aclRule",
  "role": "string",
  "scope": {
    "type": "string",
    "value": "string"
  }
}
```

<span class="no-format">
<h3 id="calendar.acl.update-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</div>
</div>

<span class="title my-4">Path Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>calendarId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>ruleId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>ACL rule identifier.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>sendNotifications

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether to send notifications about the calendar sharing change. Note that there are no notifications on access removal. Optional. The default is True.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">REQUEST BODY SCHEMA</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>etag

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>ETag of the resource.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>id

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Identifier of the ACL rule.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>kind

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Type of the resource ("calendar#aclRule").</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>role

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The role assigned to the scope. Possible values are:
- "none" - Provides no access.
- "freeBusyReader" - Provides read access to free/busy information.
- "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
- "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
- "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="scope1038" >
<td class="tree">
<span class="field-node"></span>scope

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>The scope of the rule.</p>
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
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|ruleId|path|string|true|ACL rule identifier.|
|sendNotifications|query|boolean|false|Whether to send notifications about the calendar sharing change. Note that there are no notifications on access removal. Optional. The default is True.|
|body|body|[AclRule](#schemaaclrule)|false|none|
|» etag|body|string|false|ETag of the resource.|
|» id|body|string|false|Identifier of the ACL rule.|
|» kind|body|string|false|Type of the resource ("calendar#aclRule").|
|» role|body|string|false|The role assigned to the scope. Possible values are:|
|» scope|body|object|false|The scope of the rule.|
|»» type|body|string|false|The type of the scope. Possible values are:|
|»» value|body|string|false|The email address of a user or group, or the name of a domain, depending on the scope type. Omitted for type "default".|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Detailed descriptions

**» role**: The role assigned to the scope. Possible values are:
- "none" - Provides no access.
- "freeBusyReader" - Provides read access to free/busy information.
- "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
- "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
- "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.

**»» type**: The type of the scope. Possible values are:
- "default" - The public scope. This is the default value.
- "user" - Limits the scope to a single user.
- "group" - Limits the scope to a group.
- "domain" - Limits the scope to a domain.  Note: The permissions granted to the "default", or public, scope apply to any user, authenticated or not.

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.acl.update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[AclRule](#schemaaclrule)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

<h1 id="calendar-calendarlist">calendarList</h1>

## *get*calendar.calendarList.list

<a id="opIdcalendar.calendarList.list"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://www.googleapis.com/calendar/v3/users/me/calendarList", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET https://www.googleapis.com/calendar/v3/users/me/calendarList HTTP/1.1
Host: www.googleapis.com
Accept: */*

```

```javascript
var headers = {
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/users/me/calendarList',
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
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/users/me/calendarList',
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
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('https://www.googleapis.com/calendar/v3/users/me/calendarList', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://www.googleapis.com/calendar/v3/users/me/calendarList',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /users/me/calendarList`

Returns the calendars on the user's calendar list.

<span class="no-format">
<h3 id="calendar.calendarlist.list-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</div>
</div>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>maxResults

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">integer</span>
</div>
<div>
<div class="description">
<p>Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>minAccessRole

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The minimum access role for the user in the returned entries. Optional. The default is no restriction.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>pageToken

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Token specifying which result page to return. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>showDeleted

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether to include deleted calendar list entries in the result. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>showHidden

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether to show hidden entries. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>syncToken

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
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
|maxResults|query|integer|false|Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.|
|minAccessRole|query|string|false|The minimum access role for the user in the returned entries. Optional. The default is no restriction.|
|pageToken|query|string|false|Token specifying which result page to return. Optional.|
|showDeleted|query|boolean|false|Whether to include deleted calendar list entries in the result. Optional. The default is False.|
|showHidden|query|boolean|false|Whether to show hidden entries. Optional. The default is False.|
|syncToken|query|string|false|Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Detailed descriptions

**syncToken**: Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False.
To ensure client state consistency minAccessRole query parameter cannot be specified together with nextSyncToken.
If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries.

#### Enumerated Values

|Parameter|Value|
|---|---|
|minAccessRole|freeBusyReader|
|minAccessRole|owner|
|minAccessRole|reader|
|minAccessRole|writer|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.calendarlist.list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[CalendarList](#schemacalendarlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</aside>

## *post*calendar.calendarList.insert

<a id="opIdcalendar.calendarList.insert"></a>

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
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://www.googleapis.com/calendar/v3/users/me/calendarList", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
POST https://www.googleapis.com/calendar/v3/users/me/calendarList HTTP/1.1
Host: www.googleapis.com
Content-Type: application/json
Accept: */*

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/users/me/calendarList',
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
  "accessRole": "string",
  "backgroundColor": "string",
  "colorId": "string",
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "defaultReminders": [
    {
      "method": "string",
      "minutes": 0
    }
  ],
  "deleted": false,
  "description": "string",
  "etag": "string",
  "foregroundColor": "string",
  "hidden": false,
  "id": "string",
  "kind": "calendar#calendarListEntry",
  "location": "string",
  "notificationSettings": {
    "notifications": [
      {
        "method": "string",
        "type": "string"
      }
    ]
  },
  "primary": false,
  "selected": false,
  "summary": "string",
  "summaryOverride": "string",
  "timeZone": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/users/me/calendarList',
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
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('https://www.googleapis.com/calendar/v3/users/me/calendarList', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://www.googleapis.com/calendar/v3/users/me/calendarList',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /users/me/calendarList`

Inserts an existing calendar into the user's calendar list.

> Body parameter

```json
{
  "accessRole": "string",
  "backgroundColor": "string",
  "colorId": "string",
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "defaultReminders": [
    {
      "method": "string",
      "minutes": 0
    }
  ],
  "deleted": false,
  "description": "string",
  "etag": "string",
  "foregroundColor": "string",
  "hidden": false,
  "id": "string",
  "kind": "calendar#calendarListEntry",
  "location": "string",
  "notificationSettings": {
    "notifications": [
      {
        "method": "string",
        "type": "string"
      }
    ]
  },
  "primary": false,
  "selected": false,
  "summary": "string",
  "summaryOverride": "string",
  "timeZone": "string"
}
```

<span class="no-format">
<h3 id="calendar.calendarlist.insert-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</div>
</div>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>colorRgbFormat

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">REQUEST BODY SCHEMA</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>accessRole

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The effective access role that the authenticated user has on the calendar. Read-only. Possible values are:
- "freeBusyReader" - Provides read access to free/busy information.
- "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
- "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
- "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>backgroundColor

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The main color of the calendar in the hexadecimal format "#0088aa". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>colorId

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The color of the calendar. This is an ID referring to an entry in the calendar section of the colors definition (see the colors endpoint). This property is superseded by the backgroundColor and foregroundColor properties and can be ignored when using these properties. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="conferenceProperties3273" >
<td class="tree">
<span class="field-node"></span>conferenceProperties

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>undefined</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>defaultReminders

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">array</span>
</div>
<div>
<div class="description">
<p>The default reminders that the authenticated user has for this calendar.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>deleted

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether this calendar list entry has been deleted from the calendar list. Read-only. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>description

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Description of the calendar. Optional. Read-only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>etag

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>ETag of the resource.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>foregroundColor

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The foreground color of the calendar in the hexadecimal format "#ffffff". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>hidden

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether the calendar has been hidden from the list. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>id

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Identifier of the calendar.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>kind

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Type of the resource ("calendar#calendarListEntry").</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>location

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Geographic location of the calendar as free-form text. Optional. Read-only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="notificationSettings716" >
<td class="tree">
<span class="field-node"></span>notificationSettings

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>The notifications that the authenticated user is receiving for this calendar.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>primary

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether the calendar is the primary calendar of the authenticated user. Read-only. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>selected

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether the calendar content shows up in the calendar UI. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>summary

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Title of the calendar. Read-only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>summaryOverride

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The summary that the authenticated user has set for this calendar. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>timeZone

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The time zone of the calendar. Optional. Read-only.</p>
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
|colorRgbFormat|query|boolean|false|Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.|
|body|body|[CalendarListEntry](#schemacalendarlistentry)|false|none|
|» accessRole|body|string|false|The effective access role that the authenticated user has on the calendar. Read-only. Possible values are:|
|» backgroundColor|body|string|false|The main color of the calendar in the hexadecimal format "#0088aa". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.|
|» colorId|body|string|false|The color of the calendar. This is an ID referring to an entry in the calendar section of the colors definition (see the colors endpoint). This property is superseded by the backgroundColor and foregroundColor properties and can be ignored when using these properties. Optional.|
|» conferenceProperties|body|[ConferenceProperties](#schemaconferenceproperties)|false|none|
|»» allowedConferenceSolutionTypes|body|[string]|false|The types of conference solutions that are supported for this calendar.|
|» defaultReminders|body|[[EventReminder](#schemaeventreminder)]|false|The default reminders that the authenticated user has for this calendar.|
|»» method|body|string|false|The method used by this reminder. Possible values are:|
|»» minutes|body|integer(int32)|false|Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320 (4 weeks in minutes).|
|» deleted|body|boolean|false|Whether this calendar list entry has been deleted from the calendar list. Read-only. Optional. The default is False.|
|» description|body|string|false|Description of the calendar. Optional. Read-only.|
|» etag|body|string|false|ETag of the resource.|
|» foregroundColor|body|string|false|The foreground color of the calendar in the hexadecimal format "#ffffff". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.|
|» hidden|body|boolean|false|Whether the calendar has been hidden from the list. Optional. The default is False.|
|» id|body|string|false|Identifier of the calendar.|
|» kind|body|string|false|Type of the resource ("calendar#calendarListEntry").|
|» location|body|string|false|Geographic location of the calendar as free-form text. Optional. Read-only.|
|» notificationSettings|body|object|false|The notifications that the authenticated user is receiving for this calendar.|
|»» notifications|body|[[CalendarNotification](#schemacalendarnotification)]|false|The list of notifications set for this calendar.|
|»»» method|body|string|false|The method used to deliver the notification. Possible values are:|
|»»» type|body|string|false|The type of notification. Possible values are:|
|»» primary|body|boolean|false|Whether the calendar is the primary calendar of the authenticated user. Read-only. Optional. The default is False.|
|»» selected|body|boolean|false|Whether the calendar content shows up in the calendar UI. Optional. The default is False.|
|»» summary|body|string|false|Title of the calendar. Read-only.|
|»» summaryOverride|body|string|false|The summary that the authenticated user has set for this calendar. Optional.|
|»» timeZone|body|string|false|The time zone of the calendar. Optional. Read-only.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Detailed descriptions

**» accessRole**: The effective access role that the authenticated user has on the calendar. Read-only. Possible values are:
- "freeBusyReader" - Provides read access to free/busy information.
- "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
- "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
- "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.

**»» allowedConferenceSolutionTypes**: The types of conference solutions that are supported for this calendar.
The possible values are:
- "eventHangout"
- "eventNamedHangout"
- "hangoutsMeet"  Optional.

**»» method**: The method used by this reminder. Possible values are:
- "email" - Reminders are sent via email.
- "sms" - Deprecated. Once this feature is shutdown, the API will no longer return reminders using this method. Any newly added SMS reminders will be ignored. See  Google Calendar SMS notifications to be removed for more information.
Reminders are sent via SMS. These are only available for G Suite customers. Requests to set SMS reminders for other account types are ignored.
- "popup" - Reminders are sent via a UI popup.
Required when adding a reminder.

**»» minutes**: Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320 (4 weeks in minutes).
Required when adding a reminder.

**»»» method**: The method used to deliver the notification. Possible values are:
- "email" - Notifications are sent via email.
- "sms" - Deprecated. Once this feature is shutdown, the API will no longer return notifications using this method. Any newly added SMS notifications will be ignored. See  Google Calendar SMS notifications to be removed for more information.
Notifications are sent via SMS. This value is read-only and is ignored on inserts and updates. SMS notifications are only available for G Suite customers.
Required when adding a notification.

**»»» type**: The type of notification. Possible values are:
- "eventCreation" - Notification sent when a new event is put on the calendar.
- "eventChange" - Notification sent when an event is changed.
- "eventCancellation" - Notification sent when an event is cancelled.
- "eventResponse" - Notification sent when an attendee responds to the event invitation.
- "agenda" - An agenda with the events of the day (sent out in the morning).
Required when adding a notification.

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.calendarlist.insert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[CalendarListEntry](#schemacalendarlistentry)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

## *post*calendar.calendarList.watch

<a id="opIdcalendar.calendarList.watch"></a>

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
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://www.googleapis.com/calendar/v3/users/me/calendarList/watch", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
POST https://www.googleapis.com/calendar/v3/users/me/calendarList/watch HTTP/1.1
Host: www.googleapis.com
Content-Type: application/json
Accept: */*

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/users/me/calendarList/watch',
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
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/users/me/calendarList/watch',
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
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('https://www.googleapis.com/calendar/v3/users/me/calendarList/watch', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://www.googleapis.com/calendar/v3/users/me/calendarList/watch',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /users/me/calendarList/watch`

Watch for changes to CalendarList resources.

> Body parameter

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

<span class="no-format">
<h3 id="calendar.calendarlist.watch-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</div>
</div>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>maxResults

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">integer</span>
</div>
<div>
<div class="description">
<p>Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>minAccessRole

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The minimum access role for the user in the returned entries. Optional. The default is no restriction.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>pageToken

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Token specifying which result page to return. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>showDeleted

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether to include deleted calendar list entries in the result. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>showHidden

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether to show hidden entries. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>syncToken

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">REQUEST BODY SCHEMA</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>address

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The address where notifications are delivered for this channel.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>expiration

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>id

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>A UUID or similar unique string that identifies this channel.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>kind

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="params9704" >
<td class="tree">
<span class="field-node"></span>params

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>Additional parameters controlling delivery channel behavior. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>payload

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>A Boolean value to indicate whether payload is wanted. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>resourceId

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>resourceUri

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>A version-specific identifier for the watched resource.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>type

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The type of delivery mechanism used for this channel.</p>
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
|maxResults|query|integer|false|Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.|
|minAccessRole|query|string|false|The minimum access role for the user in the returned entries. Optional. The default is no restriction.|
|pageToken|query|string|false|Token specifying which result page to return. Optional.|
|showDeleted|query|boolean|false|Whether to include deleted calendar list entries in the result. Optional. The default is False.|
|showHidden|query|boolean|false|Whether to show hidden entries. Optional. The default is False.|
|syncToken|query|string|false|Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False.|
|body|body|[Channel](#schemachannel)|false|none|
|» address|body|string|false|The address where notifications are delivered for this channel.|
|» expiration|body|string(int64)|false|Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.|
|» id|body|string|false|A UUID or similar unique string that identifies this channel.|
|» kind|body|string|false|Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".|
|» params|body|object|false|Additional parameters controlling delivery channel behavior. Optional.|
|»» **additionalProperties**|body|string|false|Declares a new parameter by name.|
|» payload|body|boolean|false|A Boolean value to indicate whether payload is wanted. Optional.|
|» resourceId|body|string|false|An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.|
|» resourceUri|body|string|false|A version-specific identifier for the watched resource.|
|» token|body|string|false|An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.|
|» type|body|string|false|The type of delivery mechanism used for this channel.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Detailed descriptions

**syncToken**: Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False.
To ensure client state consistency minAccessRole query parameter cannot be specified together with nextSyncToken.
If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries.

#### Enumerated Values

|Parameter|Value|
|---|---|
|minAccessRole|freeBusyReader|
|minAccessRole|owner|
|minAccessRole|reader|
|minAccessRole|writer|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.calendarlist.watch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[Channel](#schemachannel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</aside>

## *delete*calendar.calendarList.delete

<a id="opIdcalendar.calendarList.delete"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "https://www.googleapis.com/calendar/v3/users/me/calendarList/{calendarId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
DELETE https://www.googleapis.com/calendar/v3/users/me/calendarList/{calendarId} HTTP/1.1
Host: www.googleapis.com

```

```javascript
var headers = {
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/users/me/calendarList/{calendarId}',
  method: 'delete',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/users/me/calendarList/{calendarId}',
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

```python
import requests
headers = {
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.delete('https://www.googleapis.com/calendar/v3/users/me/calendarList/{calendarId}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.delete 'https://www.googleapis.com/calendar/v3/users/me/calendarList/{calendarId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`DELETE /users/me/calendarList/{calendarId}`

Removes a calendar from the user's calendar list.

<span class="no-format">
<h3 id="calendar.calendarlist.delete-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</div>
</div>

<span class="title my-4">Path Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>calendarId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
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
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="calendar.calendarlist.delete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

## *get*calendar.calendarList.get

<a id="opIdcalendar.calendarList.get"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://www.googleapis.com/calendar/v3/users/me/calendarList/{calendarId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET https://www.googleapis.com/calendar/v3/users/me/calendarList/{calendarId} HTTP/1.1
Host: www.googleapis.com
Accept: */*

```

```javascript
var headers = {
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/users/me/calendarList/{calendarId}',
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
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/users/me/calendarList/{calendarId}',
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
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('https://www.googleapis.com/calendar/v3/users/me/calendarList/{calendarId}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://www.googleapis.com/calendar/v3/users/me/calendarList/{calendarId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /users/me/calendarList/{calendarId}`

Returns a calendar from the user's calendar list.

<span class="no-format">
<h3 id="calendar.calendarlist.get-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</div>
</div>

<span class="title my-4">Path Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>calendarId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
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
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.calendarlist.get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[CalendarListEntry](#schemacalendarlistentry)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</aside>

## *patch*calendar.calendarList.patch

<a id="opIdcalendar.calendarList.patch"></a>

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
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PATCH", "https://www.googleapis.com/calendar/v3/users/me/calendarList/{calendarId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
PATCH https://www.googleapis.com/calendar/v3/users/me/calendarList/{calendarId} HTTP/1.1
Host: www.googleapis.com
Content-Type: application/json
Accept: */*

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/users/me/calendarList/{calendarId}',
  method: 'patch',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "accessRole": "string",
  "backgroundColor": "string",
  "colorId": "string",
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "defaultReminders": [
    {
      "method": "string",
      "minutes": 0
    }
  ],
  "deleted": false,
  "description": "string",
  "etag": "string",
  "foregroundColor": "string",
  "hidden": false,
  "id": "string",
  "kind": "calendar#calendarListEntry",
  "location": "string",
  "notificationSettings": {
    "notifications": [
      {
        "method": "string",
        "type": "string"
      }
    ]
  },
  "primary": false,
  "selected": false,
  "summary": "string",
  "summaryOverride": "string",
  "timeZone": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/users/me/calendarList/{calendarId}',
{
  method: 'PATCH',
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
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.patch('https://www.googleapis.com/calendar/v3/users/me/calendarList/{calendarId}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.patch 'https://www.googleapis.com/calendar/v3/users/me/calendarList/{calendarId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`PATCH /users/me/calendarList/{calendarId}`

Updates an existing calendar on the user's calendar list. This method supports patch semantics.

> Body parameter

```json
{
  "accessRole": "string",
  "backgroundColor": "string",
  "colorId": "string",
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "defaultReminders": [
    {
      "method": "string",
      "minutes": 0
    }
  ],
  "deleted": false,
  "description": "string",
  "etag": "string",
  "foregroundColor": "string",
  "hidden": false,
  "id": "string",
  "kind": "calendar#calendarListEntry",
  "location": "string",
  "notificationSettings": {
    "notifications": [
      {
        "method": "string",
        "type": "string"
      }
    ]
  },
  "primary": false,
  "selected": false,
  "summary": "string",
  "summaryOverride": "string",
  "timeZone": "string"
}
```

<span class="no-format">
<h3 id="calendar.calendarlist.patch-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</div>
</div>

<span class="title my-4">Path Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>calendarId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>colorRgbFormat

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">REQUEST BODY SCHEMA</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>accessRole

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The effective access role that the authenticated user has on the calendar. Read-only. Possible values are:
- "freeBusyReader" - Provides read access to free/busy information.
- "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
- "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
- "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>backgroundColor

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The main color of the calendar in the hexadecimal format "#0088aa". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>colorId

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The color of the calendar. This is an ID referring to an entry in the calendar section of the colors definition (see the colors endpoint). This property is superseded by the backgroundColor and foregroundColor properties and can be ignored when using these properties. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="conferenceProperties1996" >
<td class="tree">
<span class="field-node"></span>conferenceProperties

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>undefined</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>defaultReminders

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">array</span>
</div>
<div>
<div class="description">
<p>The default reminders that the authenticated user has for this calendar.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>deleted

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether this calendar list entry has been deleted from the calendar list. Read-only. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>description

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Description of the calendar. Optional. Read-only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>etag

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>ETag of the resource.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>foregroundColor

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The foreground color of the calendar in the hexadecimal format "#ffffff". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>hidden

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether the calendar has been hidden from the list. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>id

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Identifier of the calendar.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>kind

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Type of the resource ("calendar#calendarListEntry").</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>location

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Geographic location of the calendar as free-form text. Optional. Read-only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="notificationSettings7222" >
<td class="tree">
<span class="field-node"></span>notificationSettings

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>The notifications that the authenticated user is receiving for this calendar.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>primary

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether the calendar is the primary calendar of the authenticated user. Read-only. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>selected

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether the calendar content shows up in the calendar UI. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>summary

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Title of the calendar. Read-only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>summaryOverride

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The summary that the authenticated user has set for this calendar. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>timeZone

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The time zone of the calendar. Optional. Read-only.</p>
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
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|colorRgbFormat|query|boolean|false|Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.|
|body|body|[CalendarListEntry](#schemacalendarlistentry)|false|none|
|» accessRole|body|string|false|The effective access role that the authenticated user has on the calendar. Read-only. Possible values are:|
|» backgroundColor|body|string|false|The main color of the calendar in the hexadecimal format "#0088aa". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.|
|» colorId|body|string|false|The color of the calendar. This is an ID referring to an entry in the calendar section of the colors definition (see the colors endpoint). This property is superseded by the backgroundColor and foregroundColor properties and can be ignored when using these properties. Optional.|
|» conferenceProperties|body|[ConferenceProperties](#schemaconferenceproperties)|false|none|
|»» allowedConferenceSolutionTypes|body|[string]|false|The types of conference solutions that are supported for this calendar.|
|» defaultReminders|body|[[EventReminder](#schemaeventreminder)]|false|The default reminders that the authenticated user has for this calendar.|
|»» method|body|string|false|The method used by this reminder. Possible values are:|
|»» minutes|body|integer(int32)|false|Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320 (4 weeks in minutes).|
|» deleted|body|boolean|false|Whether this calendar list entry has been deleted from the calendar list. Read-only. Optional. The default is False.|
|» description|body|string|false|Description of the calendar. Optional. Read-only.|
|» etag|body|string|false|ETag of the resource.|
|» foregroundColor|body|string|false|The foreground color of the calendar in the hexadecimal format "#ffffff". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.|
|» hidden|body|boolean|false|Whether the calendar has been hidden from the list. Optional. The default is False.|
|» id|body|string|false|Identifier of the calendar.|
|» kind|body|string|false|Type of the resource ("calendar#calendarListEntry").|
|» location|body|string|false|Geographic location of the calendar as free-form text. Optional. Read-only.|
|» notificationSettings|body|object|false|The notifications that the authenticated user is receiving for this calendar.|
|»» notifications|body|[[CalendarNotification](#schemacalendarnotification)]|false|The list of notifications set for this calendar.|
|»»» method|body|string|false|The method used to deliver the notification. Possible values are:|
|»»» type|body|string|false|The type of notification. Possible values are:|
|»» primary|body|boolean|false|Whether the calendar is the primary calendar of the authenticated user. Read-only. Optional. The default is False.|
|»» selected|body|boolean|false|Whether the calendar content shows up in the calendar UI. Optional. The default is False.|
|»» summary|body|string|false|Title of the calendar. Read-only.|
|»» summaryOverride|body|string|false|The summary that the authenticated user has set for this calendar. Optional.|
|»» timeZone|body|string|false|The time zone of the calendar. Optional. Read-only.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Detailed descriptions

**» accessRole**: The effective access role that the authenticated user has on the calendar. Read-only. Possible values are:
- "freeBusyReader" - Provides read access to free/busy information.
- "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
- "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
- "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.

**»» allowedConferenceSolutionTypes**: The types of conference solutions that are supported for this calendar.
The possible values are:
- "eventHangout"
- "eventNamedHangout"
- "hangoutsMeet"  Optional.

**»» method**: The method used by this reminder. Possible values are:
- "email" - Reminders are sent via email.
- "sms" - Deprecated. Once this feature is shutdown, the API will no longer return reminders using this method. Any newly added SMS reminders will be ignored. See  Google Calendar SMS notifications to be removed for more information.
Reminders are sent via SMS. These are only available for G Suite customers. Requests to set SMS reminders for other account types are ignored.
- "popup" - Reminders are sent via a UI popup.
Required when adding a reminder.

**»» minutes**: Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320 (4 weeks in minutes).
Required when adding a reminder.

**»»» method**: The method used to deliver the notification. Possible values are:
- "email" - Notifications are sent via email.
- "sms" - Deprecated. Once this feature is shutdown, the API will no longer return notifications using this method. Any newly added SMS notifications will be ignored. See  Google Calendar SMS notifications to be removed for more information.
Notifications are sent via SMS. This value is read-only and is ignored on inserts and updates. SMS notifications are only available for G Suite customers.
Required when adding a notification.

**»»» type**: The type of notification. Possible values are:
- "eventCreation" - Notification sent when a new event is put on the calendar.
- "eventChange" - Notification sent when an event is changed.
- "eventCancellation" - Notification sent when an event is cancelled.
- "eventResponse" - Notification sent when an attendee responds to the event invitation.
- "agenda" - An agenda with the events of the day (sent out in the morning).
Required when adding a notification.

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.calendarlist.patch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[CalendarListEntry](#schemacalendarlistentry)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

## *put*calendar.calendarList.update

<a id="opIdcalendar.calendarList.update"></a>

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
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "https://www.googleapis.com/calendar/v3/users/me/calendarList/{calendarId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
PUT https://www.googleapis.com/calendar/v3/users/me/calendarList/{calendarId} HTTP/1.1
Host: www.googleapis.com
Content-Type: application/json
Accept: */*

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/users/me/calendarList/{calendarId}',
  method: 'put',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "accessRole": "string",
  "backgroundColor": "string",
  "colorId": "string",
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "defaultReminders": [
    {
      "method": "string",
      "minutes": 0
    }
  ],
  "deleted": false,
  "description": "string",
  "etag": "string",
  "foregroundColor": "string",
  "hidden": false,
  "id": "string",
  "kind": "calendar#calendarListEntry",
  "location": "string",
  "notificationSettings": {
    "notifications": [
      {
        "method": "string",
        "type": "string"
      }
    ]
  },
  "primary": false,
  "selected": false,
  "summary": "string",
  "summaryOverride": "string",
  "timeZone": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/users/me/calendarList/{calendarId}',
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

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.put('https://www.googleapis.com/calendar/v3/users/me/calendarList/{calendarId}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.put 'https://www.googleapis.com/calendar/v3/users/me/calendarList/{calendarId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`PUT /users/me/calendarList/{calendarId}`

Updates an existing calendar on the user's calendar list.

> Body parameter

```json
{
  "accessRole": "string",
  "backgroundColor": "string",
  "colorId": "string",
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "defaultReminders": [
    {
      "method": "string",
      "minutes": 0
    }
  ],
  "deleted": false,
  "description": "string",
  "etag": "string",
  "foregroundColor": "string",
  "hidden": false,
  "id": "string",
  "kind": "calendar#calendarListEntry",
  "location": "string",
  "notificationSettings": {
    "notifications": [
      {
        "method": "string",
        "type": "string"
      }
    ]
  },
  "primary": false,
  "selected": false,
  "summary": "string",
  "summaryOverride": "string",
  "timeZone": "string"
}
```

<span class="no-format">
<h3 id="calendar.calendarlist.update-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</div>
</div>

<span class="title my-4">Path Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>calendarId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>colorRgbFormat

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">REQUEST BODY SCHEMA</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>accessRole

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The effective access role that the authenticated user has on the calendar. Read-only. Possible values are:
- "freeBusyReader" - Provides read access to free/busy information.
- "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
- "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
- "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>backgroundColor

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The main color of the calendar in the hexadecimal format "#0088aa". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>colorId

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The color of the calendar. This is an ID referring to an entry in the calendar section of the colors definition (see the colors endpoint). This property is superseded by the backgroundColor and foregroundColor properties and can be ignored when using these properties. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="conferenceProperties7741" >
<td class="tree">
<span class="field-node"></span>conferenceProperties

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>undefined</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>defaultReminders

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">array</span>
</div>
<div>
<div class="description">
<p>The default reminders that the authenticated user has for this calendar.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>deleted

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether this calendar list entry has been deleted from the calendar list. Read-only. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>description

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Description of the calendar. Optional. Read-only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>etag

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>ETag of the resource.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>foregroundColor

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The foreground color of the calendar in the hexadecimal format "#ffffff". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>hidden

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether the calendar has been hidden from the list. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>id

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Identifier of the calendar.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>kind

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Type of the resource ("calendar#calendarListEntry").</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>location

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Geographic location of the calendar as free-form text. Optional. Read-only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="notificationSettings5245" >
<td class="tree">
<span class="field-node"></span>notificationSettings

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>The notifications that the authenticated user is receiving for this calendar.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>primary

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether the calendar is the primary calendar of the authenticated user. Read-only. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>selected

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether the calendar content shows up in the calendar UI. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>summary

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Title of the calendar. Read-only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>summaryOverride

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The summary that the authenticated user has set for this calendar. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>timeZone

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The time zone of the calendar. Optional. Read-only.</p>
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
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|colorRgbFormat|query|boolean|false|Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.|
|body|body|[CalendarListEntry](#schemacalendarlistentry)|false|none|
|» accessRole|body|string|false|The effective access role that the authenticated user has on the calendar. Read-only. Possible values are:|
|» backgroundColor|body|string|false|The main color of the calendar in the hexadecimal format "#0088aa". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.|
|» colorId|body|string|false|The color of the calendar. This is an ID referring to an entry in the calendar section of the colors definition (see the colors endpoint). This property is superseded by the backgroundColor and foregroundColor properties and can be ignored when using these properties. Optional.|
|» conferenceProperties|body|[ConferenceProperties](#schemaconferenceproperties)|false|none|
|»» allowedConferenceSolutionTypes|body|[string]|false|The types of conference solutions that are supported for this calendar.|
|» defaultReminders|body|[[EventReminder](#schemaeventreminder)]|false|The default reminders that the authenticated user has for this calendar.|
|»» method|body|string|false|The method used by this reminder. Possible values are:|
|»» minutes|body|integer(int32)|false|Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320 (4 weeks in minutes).|
|» deleted|body|boolean|false|Whether this calendar list entry has been deleted from the calendar list. Read-only. Optional. The default is False.|
|» description|body|string|false|Description of the calendar. Optional. Read-only.|
|» etag|body|string|false|ETag of the resource.|
|» foregroundColor|body|string|false|The foreground color of the calendar in the hexadecimal format "#ffffff". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.|
|» hidden|body|boolean|false|Whether the calendar has been hidden from the list. Optional. The default is False.|
|» id|body|string|false|Identifier of the calendar.|
|» kind|body|string|false|Type of the resource ("calendar#calendarListEntry").|
|» location|body|string|false|Geographic location of the calendar as free-form text. Optional. Read-only.|
|» notificationSettings|body|object|false|The notifications that the authenticated user is receiving for this calendar.|
|»» notifications|body|[[CalendarNotification](#schemacalendarnotification)]|false|The list of notifications set for this calendar.|
|»»» method|body|string|false|The method used to deliver the notification. Possible values are:|
|»»» type|body|string|false|The type of notification. Possible values are:|
|»» primary|body|boolean|false|Whether the calendar is the primary calendar of the authenticated user. Read-only. Optional. The default is False.|
|»» selected|body|boolean|false|Whether the calendar content shows up in the calendar UI. Optional. The default is False.|
|»» summary|body|string|false|Title of the calendar. Read-only.|
|»» summaryOverride|body|string|false|The summary that the authenticated user has set for this calendar. Optional.|
|»» timeZone|body|string|false|The time zone of the calendar. Optional. Read-only.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Detailed descriptions

**» accessRole**: The effective access role that the authenticated user has on the calendar. Read-only. Possible values are:
- "freeBusyReader" - Provides read access to free/busy information.
- "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
- "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
- "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.

**»» allowedConferenceSolutionTypes**: The types of conference solutions that are supported for this calendar.
The possible values are:
- "eventHangout"
- "eventNamedHangout"
- "hangoutsMeet"  Optional.

**»» method**: The method used by this reminder. Possible values are:
- "email" - Reminders are sent via email.
- "sms" - Deprecated. Once this feature is shutdown, the API will no longer return reminders using this method. Any newly added SMS reminders will be ignored. See  Google Calendar SMS notifications to be removed for more information.
Reminders are sent via SMS. These are only available for G Suite customers. Requests to set SMS reminders for other account types are ignored.
- "popup" - Reminders are sent via a UI popup.
Required when adding a reminder.

**»» minutes**: Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320 (4 weeks in minutes).
Required when adding a reminder.

**»»» method**: The method used to deliver the notification. Possible values are:
- "email" - Notifications are sent via email.
- "sms" - Deprecated. Once this feature is shutdown, the API will no longer return notifications using this method. Any newly added SMS notifications will be ignored. See  Google Calendar SMS notifications to be removed for more information.
Notifications are sent via SMS. This value is read-only and is ignored on inserts and updates. SMS notifications are only available for G Suite customers.
Required when adding a notification.

**»»» type**: The type of notification. Possible values are:
- "eventCreation" - Notification sent when a new event is put on the calendar.
- "eventChange" - Notification sent when an event is changed.
- "eventCancellation" - Notification sent when an event is cancelled.
- "eventResponse" - Notification sent when an attendee responds to the event invitation.
- "agenda" - An agenda with the events of the day (sent out in the morning).
Required when adding a notification.

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.calendarlist.update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[CalendarListEntry](#schemacalendarlistentry)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

<h1 id="calendar-calendars">calendars</h1>

## *post*calendar.calendars.insert

<a id="opIdcalendar.calendars.insert"></a>

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
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://www.googleapis.com/calendar/v3/calendars", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
POST https://www.googleapis.com/calendar/v3/calendars HTTP/1.1
Host: www.googleapis.com
Content-Type: application/json
Accept: */*

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/calendars',
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
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "description": "string",
  "etag": "string",
  "id": "string",
  "kind": "calendar#calendar",
  "location": "string",
  "summary": "string",
  "timeZone": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/calendars',
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
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('https://www.googleapis.com/calendar/v3/calendars', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://www.googleapis.com/calendar/v3/calendars',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /calendars`

Creates a secondary calendar.

> Body parameter

```json
{
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "description": "string",
  "etag": "string",
  "id": "string",
  "kind": "calendar#calendar",
  "location": "string",
  "summary": "string",
  "timeZone": "string"
}
```

<span class="no-format">
<h3 id="calendar.calendars.insert-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</div>
</div>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">REQUEST BODY SCHEMA</span>
<table class="prop-table special transparent">
<tbody>

<tr  data-name="conferenceProperties7278" >
<td class="tree">
<span class="field-node"></span>conferenceProperties

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>undefined</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>description

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Description of the calendar. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>etag

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>ETag of the resource.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>id

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Identifier of the calendar. To retrieve IDs call the calendarList.list() method.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>kind

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Type of the resource ("calendar#calendar").</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>location

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Geographic location of the calendar as free-form text. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>summary

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Title of the calendar.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>timeZone

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) Optional.</p>
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
|body|body|[Calendar](#schemacalendar)|false|none|
|» conferenceProperties|body|[ConferenceProperties](#schemaconferenceproperties)|false|none|
|»» allowedConferenceSolutionTypes|body|[string]|false|The types of conference solutions that are supported for this calendar.|
|» description|body|string|false|Description of the calendar. Optional.|
|» etag|body|string|false|ETag of the resource.|
|» id|body|string|false|Identifier of the calendar. To retrieve IDs call the calendarList.list() method.|
|» kind|body|string|false|Type of the resource ("calendar#calendar").|
|» location|body|string|false|Geographic location of the calendar as free-form text. Optional.|
|» summary|body|string|false|Title of the calendar.|
|» timeZone|body|string|false|The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) Optional.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Detailed descriptions

**»» allowedConferenceSolutionTypes**: The types of conference solutions that are supported for this calendar.
The possible values are:
- "eventHangout"
- "eventNamedHangout"
- "hangoutsMeet"  Optional.

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.calendars.insert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[Calendar](#schemacalendar)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

## *delete*calendar.calendars.delete

<a id="opIdcalendar.calendars.delete"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "https://www.googleapis.com/calendar/v3/calendars/{calendarId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
DELETE https://www.googleapis.com/calendar/v3/calendars/{calendarId} HTTP/1.1
Host: www.googleapis.com

```

```javascript
var headers = {
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}',
  method: 'delete',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/calendars/{calendarId}',
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

```python
import requests
headers = {
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.delete('https://www.googleapis.com/calendar/v3/calendars/{calendarId}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.delete 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`DELETE /calendars/{calendarId}`

Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.

<span class="no-format">
<h3 id="calendar.calendars.delete-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</div>
</div>

<span class="title my-4">Path Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>calendarId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
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
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="calendar.calendars.delete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

## *get*calendar.calendars.get

<a id="opIdcalendar.calendars.get"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://www.googleapis.com/calendar/v3/calendars/{calendarId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET https://www.googleapis.com/calendar/v3/calendars/{calendarId} HTTP/1.1
Host: www.googleapis.com
Accept: */*

```

```javascript
var headers = {
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}',
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
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/calendars/{calendarId}',
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
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('https://www.googleapis.com/calendar/v3/calendars/{calendarId}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /calendars/{calendarId}`

Returns metadata for a calendar.

<span class="no-format">
<h3 id="calendar.calendars.get-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</div>
</div>

<span class="title my-4">Path Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>calendarId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
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
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.calendars.get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[Calendar](#schemacalendar)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</aside>

## *patch*calendar.calendars.patch

<a id="opIdcalendar.calendars.patch"></a>

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
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PATCH", "https://www.googleapis.com/calendar/v3/calendars/{calendarId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
PATCH https://www.googleapis.com/calendar/v3/calendars/{calendarId} HTTP/1.1
Host: www.googleapis.com
Content-Type: application/json
Accept: */*

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}',
  method: 'patch',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "description": "string",
  "etag": "string",
  "id": "string",
  "kind": "calendar#calendar",
  "location": "string",
  "summary": "string",
  "timeZone": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/calendars/{calendarId}',
{
  method: 'PATCH',
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
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.patch('https://www.googleapis.com/calendar/v3/calendars/{calendarId}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.patch 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`PATCH /calendars/{calendarId}`

Updates metadata for a calendar. This method supports patch semantics.

> Body parameter

```json
{
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "description": "string",
  "etag": "string",
  "id": "string",
  "kind": "calendar#calendar",
  "location": "string",
  "summary": "string",
  "timeZone": "string"
}
```

<span class="no-format">
<h3 id="calendar.calendars.patch-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</div>
</div>

<span class="title my-4">Path Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>calendarId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">REQUEST BODY SCHEMA</span>
<table class="prop-table special transparent">
<tbody>

<tr  data-name="conferenceProperties3058" >
<td class="tree">
<span class="field-node"></span>conferenceProperties

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>undefined</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>description

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Description of the calendar. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>etag

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>ETag of the resource.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>id

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Identifier of the calendar. To retrieve IDs call the calendarList.list() method.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>kind

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Type of the resource ("calendar#calendar").</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>location

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Geographic location of the calendar as free-form text. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>summary

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Title of the calendar.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>timeZone

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) Optional.</p>
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
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|body|body|[Calendar](#schemacalendar)|false|none|
|» conferenceProperties|body|[ConferenceProperties](#schemaconferenceproperties)|false|none|
|»» allowedConferenceSolutionTypes|body|[string]|false|The types of conference solutions that are supported for this calendar.|
|» description|body|string|false|Description of the calendar. Optional.|
|» etag|body|string|false|ETag of the resource.|
|» id|body|string|false|Identifier of the calendar. To retrieve IDs call the calendarList.list() method.|
|» kind|body|string|false|Type of the resource ("calendar#calendar").|
|» location|body|string|false|Geographic location of the calendar as free-form text. Optional.|
|» summary|body|string|false|Title of the calendar.|
|» timeZone|body|string|false|The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) Optional.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Detailed descriptions

**»» allowedConferenceSolutionTypes**: The types of conference solutions that are supported for this calendar.
The possible values are:
- "eventHangout"
- "eventNamedHangout"
- "hangoutsMeet"  Optional.

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.calendars.patch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[Calendar](#schemacalendar)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

## *put*calendar.calendars.update

<a id="opIdcalendar.calendars.update"></a>

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
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "https://www.googleapis.com/calendar/v3/calendars/{calendarId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
PUT https://www.googleapis.com/calendar/v3/calendars/{calendarId} HTTP/1.1
Host: www.googleapis.com
Content-Type: application/json
Accept: */*

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}',
  method: 'put',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "description": "string",
  "etag": "string",
  "id": "string",
  "kind": "calendar#calendar",
  "location": "string",
  "summary": "string",
  "timeZone": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/calendars/{calendarId}',
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

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.put('https://www.googleapis.com/calendar/v3/calendars/{calendarId}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.put 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`PUT /calendars/{calendarId}`

Updates metadata for a calendar.

> Body parameter

```json
{
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "description": "string",
  "etag": "string",
  "id": "string",
  "kind": "calendar#calendar",
  "location": "string",
  "summary": "string",
  "timeZone": "string"
}
```

<span class="no-format">
<h3 id="calendar.calendars.update-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</div>
</div>

<span class="title my-4">Path Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>calendarId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">REQUEST BODY SCHEMA</span>
<table class="prop-table special transparent">
<tbody>

<tr  data-name="conferenceProperties718" >
<td class="tree">
<span class="field-node"></span>conferenceProperties

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>undefined</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>description

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Description of the calendar. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>etag

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>ETag of the resource.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>id

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Identifier of the calendar. To retrieve IDs call the calendarList.list() method.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>kind

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Type of the resource ("calendar#calendar").</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>location

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Geographic location of the calendar as free-form text. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>summary

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Title of the calendar.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>timeZone

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) Optional.</p>
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
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|body|body|[Calendar](#schemacalendar)|false|none|
|» conferenceProperties|body|[ConferenceProperties](#schemaconferenceproperties)|false|none|
|»» allowedConferenceSolutionTypes|body|[string]|false|The types of conference solutions that are supported for this calendar.|
|» description|body|string|false|Description of the calendar. Optional.|
|» etag|body|string|false|ETag of the resource.|
|» id|body|string|false|Identifier of the calendar. To retrieve IDs call the calendarList.list() method.|
|» kind|body|string|false|Type of the resource ("calendar#calendar").|
|» location|body|string|false|Geographic location of the calendar as free-form text. Optional.|
|» summary|body|string|false|Title of the calendar.|
|» timeZone|body|string|false|The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) Optional.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Detailed descriptions

**»» allowedConferenceSolutionTypes**: The types of conference solutions that are supported for this calendar.
The possible values are:
- "eventHangout"
- "eventNamedHangout"
- "hangoutsMeet"  Optional.

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.calendars.update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[Calendar](#schemacalendar)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

## *post*calendar.calendars.clear

<a id="opIdcalendar.calendars.clear"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://www.googleapis.com/calendar/v3/calendars/{calendarId}/clear", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
POST https://www.googleapis.com/calendar/v3/calendars/{calendarId}/clear HTTP/1.1
Host: www.googleapis.com

```

```javascript
var headers = {
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/clear',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/clear',
{
  method: 'POST',

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
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/clear', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/clear',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /calendars/{calendarId}/clear`

Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.

<span class="no-format">
<h3 id="calendar.calendars.clear-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</div>
</div>

<span class="title my-4">Path Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>calendarId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
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
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="calendar.calendars.clear-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar )
</aside>

<h1 id="calendar-channels">channels</h1>

## *post*calendar.channels.stop

<a id="opIdcalendar.channels.stop"></a>

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
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://www.googleapis.com/calendar/v3/channels/stop", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
POST https://www.googleapis.com/calendar/v3/channels/stop HTTP/1.1
Host: www.googleapis.com
Content-Type: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/channels/stop',
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
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/channels/stop',
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
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('https://www.googleapis.com/calendar/v3/channels/stop', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://www.googleapis.com/calendar/v3/channels/stop',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /channels/stop`

Stop watching resources through this channel

> Body parameter

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

<span class="no-format">
<h3 id="calendar.channels.stop-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.settings.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.settings.readonly )
</div>
</div>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">REQUEST BODY SCHEMA</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>address

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The address where notifications are delivered for this channel.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>expiration

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>id

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>A UUID or similar unique string that identifies this channel.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>kind

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="params4007" >
<td class="tree">
<span class="field-node"></span>params

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>Additional parameters controlling delivery channel behavior. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>payload

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>A Boolean value to indicate whether payload is wanted. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>resourceId

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>resourceUri

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>A version-specific identifier for the watched resource.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>type

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The type of delivery mechanism used for this channel.</p>
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
|body|body|[Channel](#schemachannel)|false|none|
|» address|body|string|false|The address where notifications are delivered for this channel.|
|» expiration|body|string(int64)|false|Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.|
|» id|body|string|false|A UUID or similar unique string that identifies this channel.|
|» kind|body|string|false|Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".|
|» params|body|object|false|Additional parameters controlling delivery channel behavior. Optional.|
|»» **additionalProperties**|body|string|false|Declares a new parameter by name.|
|» payload|body|boolean|false|A Boolean value to indicate whether payload is wanted. Optional.|
|» resourceId|body|string|false|An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.|
|» resourceUri|body|string|false|A version-specific identifier for the watched resource.|
|» token|body|string|false|An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.|
|» type|body|string|false|The type of delivery mechanism used for this channel.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="calendar.channels.stop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.settings.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.settings.readonly )
</aside>

<h1 id="calendar-colors">colors</h1>

## *get*calendar.colors.get

<a id="opIdcalendar.colors.get"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://www.googleapis.com/calendar/v3/colors", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET https://www.googleapis.com/calendar/v3/colors HTTP/1.1
Host: www.googleapis.com
Accept: */*

```

```javascript
var headers = {
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/colors',
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
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/colors',
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
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('https://www.googleapis.com/calendar/v3/colors', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://www.googleapis.com/calendar/v3/colors',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /colors`

Returns the color definitions for calendars and events.

<span class="no-format">
<h3 id="calendar.colors.get-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</div>
</div>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
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
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.colors.get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[Colors](#schemacolors)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</aside>

<h1 id="calendar-events">events</h1>

## *get*calendar.events.list

<a id="opIdcalendar.events.list"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events HTTP/1.1
Host: www.googleapis.com
Accept: */*

```

```javascript
var headers = {
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events',
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
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events',
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
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /calendars/{calendarId}/events`

Returns events on the specified calendar.

<span class="no-format">
<h3 id="calendar.events.list-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</div>
</div>

<span class="title my-4">Path Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>calendarId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>alwaysIncludeEmail

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>iCalUID

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Specifies event ID in the iCalendar format to be included in the response. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>maxAttendees

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">integer</span>
</div>
<div>
<div class="description">
<p>The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>maxResults

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">integer</span>
</div>
<div>
<div class="description">
<p>Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>orderBy

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The order of the events returned in the result. Optional. The default is an unspecified, stable order.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>pageToken

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Token specifying which result page to return. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>privateExtendedProperty

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">array</span>
</div>
<div>
<div class="description">
<p>Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>q

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Free text search terms to find events that match these terms in any field, except for extended properties. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>sharedExtendedProperty

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">array</span>
</div>
<div>
<div class="description">
<p>Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>showDeleted

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>showHiddenInvitations

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether to include hidden invitations in the result. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>singleEvents

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>syncToken

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>timeMax

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMin is set, timeMax must be greater than timeMin.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>timeMin

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Lower bound (exclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMax is set, timeMin must be smaller than timeMax.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>timeZone

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Time zone used in the response. Optional. The default is the time zone of the calendar.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>updatedMin

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
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
|alwaysIncludeEmail|query|boolean|false|Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|iCalUID|query|string|false|Specifies event ID in the iCalendar format to be included in the response. Optional.|
|maxAttendees|query|integer|false|The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.|
|maxResults|query|integer|false|Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.|
|orderBy|query|string|false|The order of the events returned in the result. Optional. The default is an unspecified, stable order.|
|pageToken|query|string|false|Token specifying which result page to return. Optional.|
|privateExtendedProperty|query|array[string]|false|Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints.|
|q|query|string|false|Free text search terms to find events that match these terms in any field, except for extended properties. Optional.|
|sharedExtendedProperty|query|array[string]|false|Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints.|
|showDeleted|query|boolean|false|Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False.|
|showHiddenInvitations|query|boolean|false|Whether to include hidden invitations in the result. Optional. The default is False.|
|singleEvents|query|boolean|false|Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False.|
|syncToken|query|string|false|Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.|
|timeMax|query|string|false|Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMin is set, timeMax must be greater than timeMin.|
|timeMin|query|string|false|Lower bound (exclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMax is set, timeMin must be smaller than timeMax.|
|timeZone|query|string|false|Time zone used in the response. Optional. The default is the time zone of the calendar.|
|updatedMin|query|string|false|Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Detailed descriptions

**syncToken**: Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
There are several query parameters that cannot be specified together with nextSyncToken to ensure consistency of the client state.

These are:
- iCalUID
- orderBy
- privateExtendedProperty
- q
- sharedExtendedProperty
- timeMin
- timeMax
- updatedMin If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries.

#### Enumerated Values

|Parameter|Value|
|---|---|
|orderBy|startTime|
|orderBy|updated|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.events.list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[Events](#schemaevents)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</aside>

## *post*calendar.events.insert

<a id="opIdcalendar.events.insert"></a>

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
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
POST https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events HTTP/1.1
Host: www.googleapis.com
Content-Type: application/json
Accept: */*

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events',
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
  "anyoneCanAddSelf": false,
  "attachments": [
    {
      "fileId": "string",
      "fileUrl": "string",
      "iconLink": "string",
      "mimeType": "string",
      "title": "string"
    }
  ],
  "attendees": [
    {
      "additionalGuests": 0,
      "comment": "string",
      "displayName": "string",
      "email": "string",
      "id": "string",
      "optional": false,
      "organizer": true,
      "resource": false,
      "responseStatus": "string",
      "self": false
    }
  ],
  "attendeesOmitted": false,
  "colorId": "string",
  "conferenceData": {
    "conferenceId": "string",
    "conferenceSolution": {
      "iconUri": "string",
      "key": {
        "type": "string"
      },
      "name": "string"
    },
    "createRequest": {
      "conferenceSolutionKey": {
        "type": "string"
      },
      "requestId": "string",
      "status": {
        "statusCode": "string"
      }
    },
    "entryPoints": [
      {
        "accessCode": "string",
        "entryPointFeatures": [
          "string"
        ],
        "entryPointType": "string",
        "label": "string",
        "meetingCode": "string",
        "passcode": "string",
        "password": "string",
        "pin": "string",
        "regionCode": "string",
        "uri": "string"
      }
    ],
    "notes": "string",
    "parameters": {
      "addOnParameters": {
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "signature": "string"
  },
  "created": "2019-11-22T00:09:35Z",
  "creator": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "description": "string",
  "end": {
    "date": "2019-11-22",
    "dateTime": "2019-11-22T00:09:35Z",
    "timeZone": "string"
  },
  "endTimeUnspecified": false,
  "etag": "string",
  "extendedProperties": {
    "private": {
      "property1": "string",
      "property2": "string"
    },
    "shared": {
      "property1": "string",
      "property2": "string"
    }
  },
  "gadget": {
    "display": "string",
    "height": 0,
    "iconLink": "string",
    "link": "string",
    "preferences": {
      "property1": "string",
      "property2": "string"
    },
    "title": "string",
    "type": "string",
    "width": 0
  },
  "guestsCanInviteOthers": true,
  "guestsCanModify": false,
  "guestsCanSeeOtherGuests": true,
  "hangoutLink": "string",
  "htmlLink": "string",
  "iCalUID": "string",
  "id": "string",
  "kind": "calendar#event",
  "location": "string",
  "locked": false,
  "organizer": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "originalStartTime": {
    "date": "2019-11-22",
    "dateTime": "2019-11-22T00:09:35Z",
    "timeZone": "string"
  },
  "privateCopy": false,
  "recurrence": [
    "string"
  ],
  "recurringEventId": "string",
  "reminders": {
    "overrides": [
      {
        "method": "string",
        "minutes": 0
      }
    ],
    "useDefault": true
  },
  "sequence": 0,
  "source": {
    "title": "string",
    "url": "string"
  },
  "start": {
    "date": "2019-11-22",
    "dateTime": "2019-11-22T00:09:35Z",
    "timeZone": "string"
  },
  "status": "string",
  "summary": "string",
  "transparency": "opaque",
  "updated": "2019-11-22T00:09:35Z",
  "visibility": "default"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events',
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
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /calendars/{calendarId}/events`

Creates an event.

> Body parameter

```json
{
  "anyoneCanAddSelf": false,
  "attachments": [
    {
      "fileId": "string",
      "fileUrl": "string",
      "iconLink": "string",
      "mimeType": "string",
      "title": "string"
    }
  ],
  "attendees": [
    {
      "additionalGuests": 0,
      "comment": "string",
      "displayName": "string",
      "email": "string",
      "id": "string",
      "optional": false,
      "organizer": true,
      "resource": false,
      "responseStatus": "string",
      "self": false
    }
  ],
  "attendeesOmitted": false,
  "colorId": "string",
  "conferenceData": {
    "conferenceId": "string",
    "conferenceSolution": {
      "iconUri": "string",
      "key": {
        "type": "string"
      },
      "name": "string"
    },
    "createRequest": {
      "conferenceSolutionKey": {
        "type": "string"
      },
      "requestId": "string",
      "status": {
        "statusCode": "string"
      }
    },
    "entryPoints": [
      {
        "accessCode": "string",
        "entryPointFeatures": [
          "string"
        ],
        "entryPointType": "string",
        "label": "string",
        "meetingCode": "string",
        "passcode": "string",
        "password": "string",
        "pin": "string",
        "regionCode": "string",
        "uri": "string"
      }
    ],
    "notes": "string",
    "parameters": {
      "addOnParameters": {
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "signature": "string"
  },
  "created": "2019-11-22T00:09:35Z",
  "creator": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "description": "string",
  "end": {
    "date": "2019-11-22",
    "dateTime": "2019-11-22T00:09:35Z",
    "timeZone": "string"
  },
  "endTimeUnspecified": false,
  "etag": "string",
  "extendedProperties": {
    "private": {
      "property1": "string",
      "property2": "string"
    },
    "shared": {
      "property1": "string",
      "property2": "string"
    }
  },
  "gadget": {
    "display": "string",
    "height": 0,
    "iconLink": "string",
    "link": "string",
    "preferences": {
      "property1": "string",
      "property2": "string"
    },
    "title": "string",
    "type": "string",
    "width": 0
  },
  "guestsCanInviteOthers": true,
  "guestsCanModify": false,
  "guestsCanSeeOtherGuests": true,
  "hangoutLink": "string",
  "htmlLink": "string",
  "iCalUID": "string",
  "id": "string",
  "kind": "calendar#event",
  "location": "string",
  "locked": false,
  "organizer": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "originalStartTime": {
    "date": "2019-11-22",
    "dateTime": "2019-11-22T00:09:35Z",
    "timeZone": "string"
  },
  "privateCopy": false,
  "recurrence": [
    "string"
  ],
  "recurringEventId": "string",
  "reminders": {
    "overrides": [
      {
        "method": "string",
        "minutes": 0
      }
    ],
    "useDefault": true
  },
  "sequence": 0,
  "source": {
    "title": "string",
    "url": "string"
  },
  "start": {
    "date": "2019-11-22",
    "dateTime": "2019-11-22T00:09:35Z",
    "timeZone": "string"
  },
  "status": "string",
  "summary": "string",
  "transparency": "opaque",
  "updated": "2019-11-22T00:09:35Z",
  "visibility": "default"
}
```

<span class="no-format">
<h3 id="calendar.events.insert-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events )
</div>
</div>

<span class="title my-4">Path Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>calendarId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>conferenceDataVersion

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">integer</span>
</div>
<div>
<div class="description">
<p>Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>maxAttendees

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">integer</span>
</div>
<div>
<div class="description">
<p>The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>sendNotifications

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use sendUpdates instead.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>sendUpdates

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Whether to send notifications about the creation of the new event. Note that some emails might still be sent. The default is false.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>supportsAttachments

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether API client performing operation supports event attachments. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">REQUEST BODY SCHEMA</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>anyoneCanAddSelf

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether anyone can invite themselves to the event (currently works for Google+ events only). Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>attachments

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">array</span>
</div>
<div>
<div class="description">
<p>File attachments for the event. Currently only Google Drive attachments are supported.
In order to modify attachments the supportsAttachments request parameter should be set to true.
There can be at most 25 attachments per event,</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>attendees

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">array</span>
</div>
<div>
<div class="description">
<p>The attendees of the event. See the Events with attendees guide for more information on scheduling events with other calendar users.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>attendeesOmitted

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether attendees may have been omitted from the event's representation. When retrieving an event, this may be due to a restriction specified by the maxAttendee query parameter. When updating an event, this can be used to only update the participant's response. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>colorId

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The color of the event. This is an ID referring to an entry in the event section of the colors definition (see the  colors endpoint). Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="conferenceData7571" >
<td class="tree">
<span class="field-node"></span>conferenceData

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>undefined</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>created

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Creation time of the event (as a RFC3339 timestamp). Read-only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="creator3177" >
<td class="tree">
<span class="field-node"></span>creator

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>The creator of the event. Read-only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>description

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Description of the event. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="start7865" >
<td class="tree">
<span class="field-node"></span>start

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>undefined</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>endTimeUnspecified

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether the end time is actually unspecified. An end time is still provided for compatibility reasons, even if this attribute is set to True. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>etag

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>ETag of the resource.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="extendedProperties6020" >
<td class="tree">
<span class="field-node"></span>extendedProperties

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>Extended properties of the event.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="gadget9320" >
<td class="tree">
<span class="field-node"></span>gadget

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>A gadget that extends this event.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>guestsCanInviteOthers

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether attendees other than the organizer can invite others to the event. Optional. The default is True.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>guestsCanModify

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether attendees other than the organizer can modify the event. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>guestsCanSeeOtherGuests

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether attendees other than the organizer can see who the event's attendees are. Optional. The default is True.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>hangoutLink

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An absolute link to the Google+ hangout associated with this event. Read-only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>htmlLink

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An absolute link to this event in the Google Calendar Web UI. Read-only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>iCalUID

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring systems and must be supplied when importing events via the import method.
Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>id

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules:
- characters allowed in the ID are those used in base32hex encoding, i.e. lowercase letters a-v and digits 0-9, see section 3.1.2 in RFC2938
- the length of the ID must be between 5 and 1024 characters
- the ID must be unique per calendar  Due to the globally distributed nature of the system, we cannot guarantee that ID collisions will be detected at event creation time. To minimize the risk of collisions we recommend using an established UUID algorithm such as one described in RFC4122.
If you do not specify an ID, it will be automatically generated by the server.
Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>kind

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Type of the resource ("calendar#event").</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>location

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Geographic location of the event as free-form text. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>locked

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether this is a locked event copy where no changes can be made to the main event fields "summary", "description", "location", "start", "end" or "recurrence". The default is False. Read-Only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="organizer1323" >
<td class="tree">
<span class="field-node"></span>organizer

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees with the organizer field set to True. To change the organizer, use the move operation. Read-only, except when importing an event.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="start9475" >
<td class="tree">
<span class="field-node"></span>start

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>undefined</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>privateCopy

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>If set to True, Event propagation is disabled. Note that it is not the same thing as Private event properties. Optional. Immutable. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>recurrence

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">array</span>
</div>
<div>
<div class="description">
<p>List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event, as specified in RFC5545. Note that DTSTART and DTEND lines are not allowed in this field; event start and end times are specified in the start and end fields. This field is omitted for single events or instances of recurring events.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>recurringEventId

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>For an instance of a recurring event, this is the id of the recurring event to which this instance belongs. Immutable.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="reminders9207" >
<td class="tree">
<span class="field-node"></span>reminders

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>Information about the event's reminders for the authenticated user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>sequence

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">integer</span>
</div>
<div>
<div class="description">
<p>Sequence number as per iCalendar.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="source5172" >
<td class="tree">
<span class="field-node"></span>source

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>Source from which the event was created. For example, a web page, an email message or any document identifiable by an URL with HTTP or HTTPS scheme. Can only be seen or modified by the creator of the event.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="start2950" >
<td class="tree">
<span class="field-node"></span>start

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>undefined</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>status

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Status of the event. Optional. Possible values are:
- "confirmed" - The event is confirmed. This is the default status.
- "tentative" - The event is tentatively confirmed.
- "cancelled" - The event is cancelled (deleted). The list method returns cancelled events only on incremental sync (when syncToken or updatedMin are specified) or if the showDeleted flag is set to true. The get method always returns them.
A cancelled status represents two different states depending on the event type:
- Cancelled exceptions of an uncancelled recurring event indicate that this instance should no longer be presented to the user. Clients should store these events for the lifetime of the parent recurring event.
Cancelled exceptions are only guaranteed to have values for the id, recurringEventId and originalStartTime fields populated. The other fields might be empty.
- All other cancelled events represent deleted events. Clients should remove their locally synced copies. Such cancelled events will eventually disappear, so do not rely on them being available indefinitely.
Deleted events are only guaranteed to have the id field populated.   On the organizer's calendar, cancelled events continue to expose event details (summary, location, etc.) so that they can be restored (undeleted). Similarly, the events to which the user was invited and that they manually removed continue to provide details. However, incremental sync requests with showDeleted set to false will not return these details.
If an event changes its organizer (for example via the move operation) and the original organizer is not on the attendee list, it will leave behind a cancelled event where only the id field is guaranteed to be populated.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>summary

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Title of the event.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>transparency

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Whether the event blocks time on the calendar. Optional. Possible values are:
- "opaque" - Default value. The event does block time on the calendar. This is equivalent to setting Show me as to Busy in the Calendar UI.
- "transparent" - The event does not block time on the calendar. This is equivalent to setting Show me as to Available in the Calendar UI.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>updated

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Last modification time of the event (as a RFC3339 timestamp). Read-only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>visibility

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Visibility of the event. Optional. Possible values are:
- "default" - Uses the default visibility for events on the calendar. This is the default value.
- "public" - The event is public and event details are visible to all readers of the calendar.
- "private" - The event is private and only event attendees may view event details.
- "confidential" - The event is private. This value is provided for compatibility reasons.</p>
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
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|conferenceDataVersion|query|integer|false|Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.|
|maxAttendees|query|integer|false|The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.|
|sendNotifications|query|boolean|false|Deprecated. Please use sendUpdates instead.|
|sendUpdates|query|string|false|Whether to send notifications about the creation of the new event. Note that some emails might still be sent. The default is false.|
|supportsAttachments|query|boolean|false|Whether API client performing operation supports event attachments. Optional. The default is False.|
|body|body|[Event](#schemaevent)|false|none|
|» anyoneCanAddSelf|body|boolean|false|Whether anyone can invite themselves to the event (currently works for Google+ events only). Optional. The default is False.|
|» attachments|body|[[EventAttachment](#schemaeventattachment)]|false|File attachments for the event. Currently only Google Drive attachments are supported.|
|»» fileId|body|string|false|ID of the attached file. Read-only.|
|»» fileUrl|body|string|false|URL link to the attachment.|
|»» iconLink|body|string|false|URL link to the attachment's icon. Read-only.|
|»» mimeType|body|string|false|Internet media type (MIME type) of the attachment.|
|»» title|body|string|false|Attachment title.|
|» attendees|body|[[EventAttendee](#schemaeventattendee)]|false|The attendees of the event. See the Events with attendees guide for more information on scheduling events with other calendar users.|
|»» additionalGuests|body|integer(int32)|false|Number of additional guests. Optional. The default is 0.|
|»» comment|body|string|false|The attendee's response comment. Optional.|
|»» displayName|body|string|false|The attendee's name, if available. Optional.|
|»» email|body|string|false|The attendee's email address, if available. This field must be present when adding an attendee. It must be a valid email address as per RFC5322.|
|»» id|body|string|false|The attendee's Profile ID, if available. It corresponds to the id field in the People collection of the Google+ API|
|»» optional|body|boolean|false|Whether this is an optional attendee. Optional. The default is False.|
|»» organizer|body|boolean|false|Whether the attendee is the organizer of the event. Read-only. The default is False.|
|»» resource|body|boolean|false|Whether the attendee is a resource. Can only be set when the attendee is added to the event for the first time. Subsequent modifications are ignored. Optional. The default is False.|
|»» responseStatus|body|string|false|The attendee's response status. Possible values are:|
|»» self|body|boolean|false|Whether this entry represents the calendar on which this copy of the event appears. Read-only. The default is False.|
|» attendeesOmitted|body|boolean|false|Whether attendees may have been omitted from the event's representation. When retrieving an event, this may be due to a restriction specified by the maxAttendee query parameter. When updating an event, this can be used to only update the participant's response. Optional. The default is False.|
|» colorId|body|string|false|The color of the event. This is an ID referring to an entry in the event section of the colors definition (see the  colors endpoint). Optional.|
|» conferenceData|body|[ConferenceData](#schemaconferencedata)|false|none|
|»» conferenceId|body|string|false|The ID of the conference.|
|»» conferenceSolution|body|[ConferenceSolution](#schemaconferencesolution)|false|none|
|»»» iconUri|body|string|false|The user-visible icon for this solution.|
|»»» key|body|[ConferenceSolutionKey](#schemaconferencesolutionkey)|false|none|
|»»»» type|body|string|false|The conference solution type.|
|»»» name|body|string|false|The user-visible name of this solution. Not localized.|
|»» createRequest|body|[CreateConferenceRequest](#schemacreateconferencerequest)|false|none|
|»»» conferenceSolutionKey|body|[ConferenceSolutionKey](#schemaconferencesolutionkey)|false|none|
|»»» requestId|body|string|false|The client-generated unique ID for this request.|
|»»» status|body|[ConferenceRequestStatus](#schemaconferencerequeststatus)|false|none|
|»»»» statusCode|body|string|false|The current status of the conference create request. Read-only.|
|»»» entryPoints|body|[[EntryPoint](#schemaentrypoint)]|false|Information about individual conference entry points, such as URLs or phone numbers.|
|»»»» accessCode|body|string|false|The access code to access the conference. The maximum length is 128 characters.|
|»»»» entryPointFeatures|body|[string]|false|Features of the entry point, such as being toll or toll-free. One entry point can have multiple features. However, toll and toll-free cannot be both set on the same entry point.|
|»»»» entryPointType|body|string|false|The type of the conference entry point.|
|»»»» label|body|string|false|The label for the URI. Visible to end users. Not localized. The maximum length is 512 characters.|
|»»»» meetingCode|body|string|false|The meeting code to access the conference. The maximum length is 128 characters.|
|»»»» passcode|body|string|false|The passcode to access the conference. The maximum length is 128 characters.|
|»»»» password|body|string|false|The password to access the conference. The maximum length is 128 characters.|
|»»»» pin|body|string|false|The PIN to access the conference. The maximum length is 128 characters.|
|»»»» regionCode|body|string|false|The CLDR/ISO 3166 region code for the country associated with this phone access. Example: "SE" for Sweden.|
|»»»» uri|body|string|false|The URI of the entry point. The maximum length is 1300 characters.|
|»»» notes|body|string|false|Additional notes (such as instructions from the domain administrator, legal notices) to display to the user. Can contain HTML. The maximum length is 2048 characters. Optional.|
|»»» parameters|body|[ConferenceParameters](#schemaconferenceparameters)|false|none|
|»»»» addOnParameters|body|[ConferenceParametersAddOnParameters](#schemaconferenceparametersaddonparameters)|false|none|
|»»»»» parameters|body|object|false|none|
|»»»»»» **additionalProperties**|body|string|false|none|
|»»»»» signature|body|string|false|The signature of the conference data.|
|»»»» created|body|string(date-time)|false|Creation time of the event (as a RFC3339 timestamp). Read-only.|
|»»»» creator|body|object|false|The creator of the event. Read-only.|
|»»»»» displayName|body|string|false|The creator's name, if available.|
|»»»»» email|body|string|false|The creator's email address, if available.|
|»»»»» id|body|string|false|The creator's Profile ID, if available. It corresponds to the id field in the People collection of the Google+ API|
|»»»»» self|body|boolean|false|Whether the creator corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.|
|»»»» description|body|string|false|Description of the event. Optional.|
|»»»» end|body|[EventDateTime](#schemaeventdatetime)|false|none|
|»»»»» date|body|string(date)|false|The date, in the format "yyyy-mm-dd", if this is an all-day event.|
|»»»»» dateTime|body|string(date-time)|false|The time, as a combined date-time value (formatted according to RFC3339). A time zone offset is required unless a time zone is explicitly specified in timeZone.|
|»»»»» timeZone|body|string|false|The time zone in which the time is specified. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) For recurring events this field is required and specifies the time zone in which the recurrence is expanded. For single events this field is optional and indicates a custom time zone for the event start/end.|
|»»»» endTimeUnspecified|body|boolean|false|Whether the end time is actually unspecified. An end time is still provided for compatibility reasons, even if this attribute is set to True. The default is False.|
|»»»» etag|body|string|false|ETag of the resource.|
|»»»» extendedProperties|body|object|false|Extended properties of the event.|
|»»»»» private|body|object|false|Properties that are private to the copy of the event that appears on this calendar.|
|»»»»»» **additionalProperties**|body|string|false|The name of the private property and the corresponding value.|
|»»»»» shared|body|object|false|Properties that are shared between copies of the event on other attendees' calendars.|
|»»»»»» **additionalProperties**|body|string|false|The name of the shared property and the corresponding value.|
|»»»»» gadget|body|object|false|A gadget that extends this event.|
|»»»»»» display|body|string|false|The gadget's display mode. Optional. Possible values are:|
|»»»»»» height|body|integer(int32)|false|The gadget's height in pixels. The height must be an integer greater than 0. Optional.|
|»»»»»» iconLink|body|string|false|The gadget's icon URL. The URL scheme must be HTTPS.|
|»»»»»» link|body|string|false|The gadget's URL. The URL scheme must be HTTPS.|
|»»»»»» preferences|body|object|false|Preferences.|
|»»»»»»» **additionalProperties**|body|string|false|The preference name and corresponding value.|
|»»»»»» title|body|string|false|The gadget's title.|
|»»»»»» type|body|string|false|The gadget's type.|
|»»»»»» width|body|integer(int32)|false|The gadget's width in pixels. The width must be an integer greater than 0. Optional.|
|»»»»» guestsCanInviteOthers|body|boolean|false|Whether attendees other than the organizer can invite others to the event. Optional. The default is True.|
|»»»»» guestsCanModify|body|boolean|false|Whether attendees other than the organizer can modify the event. Optional. The default is False.|
|»»»»» guestsCanSeeOtherGuests|body|boolean|false|Whether attendees other than the organizer can see who the event's attendees are. Optional. The default is True.|
|»»»»» hangoutLink|body|string|false|An absolute link to the Google+ hangout associated with this event. Read-only.|
|»»»»» htmlLink|body|string|false|An absolute link to this event in the Google Calendar Web UI. Read-only.|
|»»»»» iCalUID|body|string|false|Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring systems and must be supplied when importing events via the import method.|
|»»»»» id|body|string|false|Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules:|
|»»»»» kind|body|string|false|Type of the resource ("calendar#event").|
|»»»»» location|body|string|false|Geographic location of the event as free-form text. Optional.|
|»»»»» locked|body|boolean|false|Whether this is a locked event copy where no changes can be made to the main event fields "summary", "description", "location", "start", "end" or "recurrence". The default is False. Read-Only.|
|»»»»» organizer|body|object|false|The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees with the organizer field set to True. To change the organizer, use the move operation. Read-only, except when importing an event.|
|»»»»»» displayName|body|string|false|The organizer's name, if available.|
|»»»»»» email|body|string|false|The organizer's email address, if available. It must be a valid email address as per RFC5322.|
|»»»»»» id|body|string|false|The organizer's Profile ID, if available. It corresponds to the id field in the People collection of the Google+ API|
|»»»»»» self|body|boolean|false|Whether the organizer corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.|
|»»»»» originalStartTime|body|[EventDateTime](#schemaeventdatetime)|false|none|
|»»»»» privateCopy|body|boolean|false|If set to True, Event propagation is disabled. Note that it is not the same thing as Private event properties. Optional. Immutable. The default is False.|
|»»»»» recurrence|body|[string]|false|List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event, as specified in RFC5545. Note that DTSTART and DTEND lines are not allowed in this field; event start and end times are specified in the start and end fields. This field is omitted for single events or instances of recurring events.|
|»»»»» recurringEventId|body|string|false|For an instance of a recurring event, this is the id of the recurring event to which this instance belongs. Immutable.|
|»»»»» reminders|body|object|false|Information about the event's reminders for the authenticated user.|
|»»»»»» overrides|body|[[EventReminder](#schemaeventreminder)]|false|If the event doesn't use the default reminders, this lists the reminders specific to the event, or, if not set, indicates that no reminders are set for this event. The maximum number of override reminders is 5.|
|»»»»»»» method|body|string|false|The method used by this reminder. Possible values are:|
|»»»»»»» minutes|body|integer(int32)|false|Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320 (4 weeks in minutes).|
|»»»»»» useDefault|body|boolean|false|Whether the default reminders of the calendar apply to the event.|
|»»»»» sequence|body|integer(int32)|false|Sequence number as per iCalendar.|
|»»»»» source|body|object|false|Source from which the event was created. For example, a web page, an email message or any document identifiable by an URL with HTTP or HTTPS scheme. Can only be seen or modified by the creator of the event.|
|»»»»»» title|body|string|false|Title of the source; for example a title of a web page or an email subject.|
|»»»»»» url|body|string|false|URL of the source pointing to a resource. The URL scheme must be HTTP or HTTPS.|
|»»»»» start|body|[EventDateTime](#schemaeventdatetime)|false|none|
|»»»»» status|body|string|false|Status of the event. Optional. Possible values are:|
|»»»»» summary|body|string|false|Title of the event.|
|»»»»» transparency|body|string|false|Whether the event blocks time on the calendar. Optional. Possible values are:|
|»»»»» updated|body|string(date-time)|false|Last modification time of the event (as a RFC3339 timestamp). Read-only.|
|»»»»» visibility|body|string|false|Visibility of the event. Optional. Possible values are:|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Detailed descriptions

**sendNotifications**: Deprecated. Please use sendUpdates instead.

Whether to send notifications about the creation of the new event. Note that some emails might still be sent even if you set the value to false. The default is false.

**» attachments**: File attachments for the event. Currently only Google Drive attachments are supported.
In order to modify attachments the supportsAttachments request parameter should be set to true.
There can be at most 25 attachments per event,

**»» fileId**: ID of the attached file. Read-only.
For Google Drive files, this is the ID of the corresponding Files resource entry in the Drive API.

**»» fileUrl**: URL link to the attachment.
For adding Google Drive file attachments use the same format as in alternateLink property of the Files resource in the Drive API.
Required when adding an attachment.

**»» email**: The attendee's email address, if available. This field must be present when adding an attendee. It must be a valid email address as per RFC5322.
Required when adding an attendee.

**»» responseStatus**: The attendee's response status. Possible values are:
- "needsAction" - The attendee has not responded to the invitation.
- "declined" - The attendee has declined the invitation.
- "tentative" - The attendee has tentatively accepted the invitation.
- "accepted" - The attendee has accepted the invitation.

**»» conferenceId**: The ID of the conference.
Can be used by developers to keep track of conferences, should not be displayed to users.
Values for solution types:
- "eventHangout": unset.
- "eventNamedHangout": the name of the Hangout.
- "hangoutsMeet": the 10-letter meeting code, for example "aaa-bbbb-ccc".
- "addOn": defined by 3P conference provider.  Optional.

**»»»» type**: The conference solution type.
If a client encounters an unfamiliar or empty type, it should still be able to display the entry points. However, it should disallow modifications.
The possible values are:
- "eventHangout" for Hangouts for consumers (http://hangouts.google.com)
- "eventNamedHangout" for classic Hangouts for G Suite users (http://hangouts.google.com)
- "hangoutsMeet" for Hangouts Meet (http://meet.google.com)
- "addOn" for 3P conference providers

**»»» requestId**: The client-generated unique ID for this request.
Clients should regenerate this ID for every new request. If an ID provided is the same as for the previous request, the request is ignored.

**»»»» statusCode**: The current status of the conference create request. Read-only.
The possible values are:
- "pending": the conference create request is still being processed.
- "success": the conference create request succeeded, the entry points are populated.
- "failure": the conference create request failed, there are no entry points.

**»»» entryPoints**: Information about individual conference entry points, such as URLs or phone numbers.
All of them must belong to the same conference.
Either conferenceSolution and at least one entryPoint, or createRequest is required.

**»»»» accessCode**: The access code to access the conference. The maximum length is 128 characters.
When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
Optional.

**»»»» entryPointType**: The type of the conference entry point.
Possible values are:
- "video" - joining a conference over HTTP. A conference can have zero or one video entry point.
- "phone" - joining a conference by dialing a phone number. A conference can have zero or more phone entry points.
- "sip" - joining a conference over SIP. A conference can have zero or one sip entry point.
- "more" - further conference joining instructions, for example additional phone numbers. A conference can have zero or one more entry point. A conference with only a more entry point is not a valid conference.

**»»»» label**: The label for the URI. Visible to end users. Not localized. The maximum length is 512 characters.
Examples:
- for video: meet.google.com/aaa-bbbb-ccc
- for phone: +1 123 268 2601
- for sip: 12345678@altostrat.com
- for more: should not be filled
Optional.

**»»»» meetingCode**: The meeting code to access the conference. The maximum length is 128 characters.
When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
Optional.

**»»»» passcode**: The passcode to access the conference. The maximum length is 128 characters.
When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.

**»»»» password**: The password to access the conference. The maximum length is 128 characters.
When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
Optional.

**»»»» pin**: The PIN to access the conference. The maximum length is 128 characters.
When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
Optional.

**»»»» regionCode**: The CLDR/ISO 3166 region code for the country associated with this phone access. Example: "SE" for Sweden.
Calendar backend will populate this field only for EntryPointType.PHONE.

**»»»» uri**: The URI of the entry point. The maximum length is 1300 characters.
Format:
- for video, http: or https: schema is required.
- for phone, tel: schema is required. The URI should include the entire dial sequence (e.g., tel:+12345678900,,,123456789;1234).
- for sip, sip: schema is required, e.g., sip:12345678@myprovider.com.
- for more, http: or https: schema is required.

**»»»»» signature**: The signature of the conference data.
Generated on server side. Must be preserved while copying the conference data between events, otherwise the conference data will not be copied.
Unset for a conference with a failed create request.
Optional for a conference with a pending create request.

**»»»»»» display**: The gadget's display mode. Optional. Possible values are:
- "icon" - The gadget displays next to the event's title in the calendar view.
- "chip" - The gadget displays when the event is clicked.

**»»»»» iCalUID**: Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring systems and must be supplied when importing events via the import method.
Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.

**»»»»» id**: Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules:
- characters allowed in the ID are those used in base32hex encoding, i.e. lowercase letters a-v and digits 0-9, see section 3.1.2 in RFC2938
- the length of the ID must be between 5 and 1024 characters
- the ID must be unique per calendar  Due to the globally distributed nature of the system, we cannot guarantee that ID collisions will be detected at event creation time. To minimize the risk of collisions we recommend using an established UUID algorithm such as one described in RFC4122.
If you do not specify an ID, it will be automatically generated by the server.
Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.

**»»»»»»» method**: The method used by this reminder. Possible values are:
- "email" - Reminders are sent via email.
- "sms" - Deprecated. Once this feature is shutdown, the API will no longer return reminders using this method. Any newly added SMS reminders will be ignored. See  Google Calendar SMS notifications to be removed for more information.
Reminders are sent via SMS. These are only available for G Suite customers. Requests to set SMS reminders for other account types are ignored.
- "popup" - Reminders are sent via a UI popup.
Required when adding a reminder.

**»»»»»»» minutes**: Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320 (4 weeks in minutes).
Required when adding a reminder.

**»»»»» status**: Status of the event. Optional. Possible values are:
- "confirmed" - The event is confirmed. This is the default status.
- "tentative" - The event is tentatively confirmed.
- "cancelled" - The event is cancelled (deleted). The list method returns cancelled events only on incremental sync (when syncToken or updatedMin are specified) or if the showDeleted flag is set to true. The get method always returns them.
A cancelled status represents two different states depending on the event type:
- Cancelled exceptions of an uncancelled recurring event indicate that this instance should no longer be presented to the user. Clients should store these events for the lifetime of the parent recurring event.
Cancelled exceptions are only guaranteed to have values for the id, recurringEventId and originalStartTime fields populated. The other fields might be empty.
- All other cancelled events represent deleted events. Clients should remove their locally synced copies. Such cancelled events will eventually disappear, so do not rely on them being available indefinitely.
Deleted events are only guaranteed to have the id field populated.   On the organizer's calendar, cancelled events continue to expose event details (summary, location, etc.) so that they can be restored (undeleted). Similarly, the events to which the user was invited and that they manually removed continue to provide details. However, incremental sync requests with showDeleted set to false will not return these details.
If an event changes its organizer (for example via the move operation) and the original organizer is not on the attendee list, it will leave behind a cancelled event where only the id field is guaranteed to be populated.

**»»»»» transparency**: Whether the event blocks time on the calendar. Optional. Possible values are:
- "opaque" - Default value. The event does block time on the calendar. This is equivalent to setting Show me as to Busy in the Calendar UI.
- "transparent" - The event does not block time on the calendar. This is equivalent to setting Show me as to Available in the Calendar UI.

**»»»»» visibility**: Visibility of the event. Optional. Possible values are:
- "default" - Uses the default visibility for events on the calendar. This is the default value.
- "public" - The event is public and event details are visible to all readers of the calendar.
- "private" - The event is private and only event attendees may view event details.
- "confidential" - The event is private. This value is provided for compatibility reasons.

#### Enumerated Values

|Parameter|Value|
|---|---|
|sendUpdates|all|
|sendUpdates|externalOnly|
|sendUpdates|none|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.events.insert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[Event](#schemaevent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events )
</aside>

## *post*calendar.events.import

<a id="opIdcalendar.events.import"></a>

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
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/import", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
POST https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/import HTTP/1.1
Host: www.googleapis.com
Content-Type: application/json
Accept: */*

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/import',
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
  "anyoneCanAddSelf": false,
  "attachments": [
    {
      "fileId": "string",
      "fileUrl": "string",
      "iconLink": "string",
      "mimeType": "string",
      "title": "string"
    }
  ],
  "attendees": [
    {
      "additionalGuests": 0,
      "comment": "string",
      "displayName": "string",
      "email": "string",
      "id": "string",
      "optional": false,
      "organizer": true,
      "resource": false,
      "responseStatus": "string",
      "self": false
    }
  ],
  "attendeesOmitted": false,
  "colorId": "string",
  "conferenceData": {
    "conferenceId": "string",
    "conferenceSolution": {
      "iconUri": "string",
      "key": {
        "type": "string"
      },
      "name": "string"
    },
    "createRequest": {
      "conferenceSolutionKey": {
        "type": "string"
      },
      "requestId": "string",
      "status": {
        "statusCode": "string"
      }
    },
    "entryPoints": [
      {
        "accessCode": "string",
        "entryPointFeatures": [
          "string"
        ],
        "entryPointType": "string",
        "label": "string",
        "meetingCode": "string",
        "passcode": "string",
        "password": "string",
        "pin": "string",
        "regionCode": "string",
        "uri": "string"
      }
    ],
    "notes": "string",
    "parameters": {
      "addOnParameters": {
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "signature": "string"
  },
  "created": "2019-11-22T00:09:35Z",
  "creator": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "description": "string",
  "end": {
    "date": "2019-11-22",
    "dateTime": "2019-11-22T00:09:35Z",
    "timeZone": "string"
  },
  "endTimeUnspecified": false,
  "etag": "string",
  "extendedProperties": {
    "private": {
      "property1": "string",
      "property2": "string"
    },
    "shared": {
      "property1": "string",
      "property2": "string"
    }
  },
  "gadget": {
    "display": "string",
    "height": 0,
    "iconLink": "string",
    "link": "string",
    "preferences": {
      "property1": "string",
      "property2": "string"
    },
    "title": "string",
    "type": "string",
    "width": 0
  },
  "guestsCanInviteOthers": true,
  "guestsCanModify": false,
  "guestsCanSeeOtherGuests": true,
  "hangoutLink": "string",
  "htmlLink": "string",
  "iCalUID": "string",
  "id": "string",
  "kind": "calendar#event",
  "location": "string",
  "locked": false,
  "organizer": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "originalStartTime": {
    "date": "2019-11-22",
    "dateTime": "2019-11-22T00:09:35Z",
    "timeZone": "string"
  },
  "privateCopy": false,
  "recurrence": [
    "string"
  ],
  "recurringEventId": "string",
  "reminders": {
    "overrides": [
      {
        "method": "string",
        "minutes": 0
      }
    ],
    "useDefault": true
  },
  "sequence": 0,
  "source": {
    "title": "string",
    "url": "string"
  },
  "start": {
    "date": "2019-11-22",
    "dateTime": "2019-11-22T00:09:35Z",
    "timeZone": "string"
  },
  "status": "string",
  "summary": "string",
  "transparency": "opaque",
  "updated": "2019-11-22T00:09:35Z",
  "visibility": "default"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/import',
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
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/import', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/import',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /calendars/{calendarId}/events/import`

Imports an event. This operation is used to add a private copy of an existing event to a calendar.

> Body parameter

```json
{
  "anyoneCanAddSelf": false,
  "attachments": [
    {
      "fileId": "string",
      "fileUrl": "string",
      "iconLink": "string",
      "mimeType": "string",
      "title": "string"
    }
  ],
  "attendees": [
    {
      "additionalGuests": 0,
      "comment": "string",
      "displayName": "string",
      "email": "string",
      "id": "string",
      "optional": false,
      "organizer": true,
      "resource": false,
      "responseStatus": "string",
      "self": false
    }
  ],
  "attendeesOmitted": false,
  "colorId": "string",
  "conferenceData": {
    "conferenceId": "string",
    "conferenceSolution": {
      "iconUri": "string",
      "key": {
        "type": "string"
      },
      "name": "string"
    },
    "createRequest": {
      "conferenceSolutionKey": {
        "type": "string"
      },
      "requestId": "string",
      "status": {
        "statusCode": "string"
      }
    },
    "entryPoints": [
      {
        "accessCode": "string",
        "entryPointFeatures": [
          "string"
        ],
        "entryPointType": "string",
        "label": "string",
        "meetingCode": "string",
        "passcode": "string",
        "password": "string",
        "pin": "string",
        "regionCode": "string",
        "uri": "string"
      }
    ],
    "notes": "string",
    "parameters": {
      "addOnParameters": {
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "signature": "string"
  },
  "created": "2019-11-22T00:09:35Z",
  "creator": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "description": "string",
  "end": {
    "date": "2019-11-22",
    "dateTime": "2019-11-22T00:09:35Z",
    "timeZone": "string"
  },
  "endTimeUnspecified": false,
  "etag": "string",
  "extendedProperties": {
    "private": {
      "property1": "string",
      "property2": "string"
    },
    "shared": {
      "property1": "string",
      "property2": "string"
    }
  },
  "gadget": {
    "display": "string",
    "height": 0,
    "iconLink": "string",
    "link": "string",
    "preferences": {
      "property1": "string",
      "property2": "string"
    },
    "title": "string",
    "type": "string",
    "width": 0
  },
  "guestsCanInviteOthers": true,
  "guestsCanModify": false,
  "guestsCanSeeOtherGuests": true,
  "hangoutLink": "string",
  "htmlLink": "string",
  "iCalUID": "string",
  "id": "string",
  "kind": "calendar#event",
  "location": "string",
  "locked": false,
  "organizer": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "originalStartTime": {
    "date": "2019-11-22",
    "dateTime": "2019-11-22T00:09:35Z",
    "timeZone": "string"
  },
  "privateCopy": false,
  "recurrence": [
    "string"
  ],
  "recurringEventId": "string",
  "reminders": {
    "overrides": [
      {
        "method": "string",
        "minutes": 0
      }
    ],
    "useDefault": true
  },
  "sequence": 0,
  "source": {
    "title": "string",
    "url": "string"
  },
  "start": {
    "date": "2019-11-22",
    "dateTime": "2019-11-22T00:09:35Z",
    "timeZone": "string"
  },
  "status": "string",
  "summary": "string",
  "transparency": "opaque",
  "updated": "2019-11-22T00:09:35Z",
  "visibility": "default"
}
```

<span class="no-format">
<h3 id="calendar.events.import-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events )
</div>
</div>

<span class="title my-4">Path Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>calendarId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>conferenceDataVersion

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">integer</span>
</div>
<div>
<div class="description">
<p>Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>supportsAttachments

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether API client performing operation supports event attachments. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">REQUEST BODY SCHEMA</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>anyoneCanAddSelf

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether anyone can invite themselves to the event (currently works for Google+ events only). Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>attachments

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">array</span>
</div>
<div>
<div class="description">
<p>File attachments for the event. Currently only Google Drive attachments are supported.
In order to modify attachments the supportsAttachments request parameter should be set to true.
There can be at most 25 attachments per event,</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>attendees

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">array</span>
</div>
<div>
<div class="description">
<p>The attendees of the event. See the Events with attendees guide for more information on scheduling events with other calendar users.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>attendeesOmitted

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether attendees may have been omitted from the event's representation. When retrieving an event, this may be due to a restriction specified by the maxAttendee query parameter. When updating an event, this can be used to only update the participant's response. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>colorId

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The color of the event. This is an ID referring to an entry in the event section of the colors definition (see the  colors endpoint). Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="conferenceData2114" >
<td class="tree">
<span class="field-node"></span>conferenceData

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>undefined</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>created

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Creation time of the event (as a RFC3339 timestamp). Read-only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="creator7817" >
<td class="tree">
<span class="field-node"></span>creator

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>The creator of the event. Read-only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>description

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Description of the event. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="start8663" >
<td class="tree">
<span class="field-node"></span>start

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>undefined</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>endTimeUnspecified

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether the end time is actually unspecified. An end time is still provided for compatibility reasons, even if this attribute is set to True. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>etag

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>ETag of the resource.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="extendedProperties1068" >
<td class="tree">
<span class="field-node"></span>extendedProperties

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>Extended properties of the event.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="gadget476" >
<td class="tree">
<span class="field-node"></span>gadget

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>A gadget that extends this event.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>guestsCanInviteOthers

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether attendees other than the organizer can invite others to the event. Optional. The default is True.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>guestsCanModify

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether attendees other than the organizer can modify the event. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>guestsCanSeeOtherGuests

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether attendees other than the organizer can see who the event's attendees are. Optional. The default is True.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>hangoutLink

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An absolute link to the Google+ hangout associated with this event. Read-only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>htmlLink

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An absolute link to this event in the Google Calendar Web UI. Read-only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>iCalUID

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring systems and must be supplied when importing events via the import method.
Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>id

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules:
- characters allowed in the ID are those used in base32hex encoding, i.e. lowercase letters a-v and digits 0-9, see section 3.1.2 in RFC2938
- the length of the ID must be between 5 and 1024 characters
- the ID must be unique per calendar  Due to the globally distributed nature of the system, we cannot guarantee that ID collisions will be detected at event creation time. To minimize the risk of collisions we recommend using an established UUID algorithm such as one described in RFC4122.
If you do not specify an ID, it will be automatically generated by the server.
Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>kind

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Type of the resource ("calendar#event").</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>location

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Geographic location of the event as free-form text. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>locked

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether this is a locked event copy where no changes can be made to the main event fields "summary", "description", "location", "start", "end" or "recurrence". The default is False. Read-Only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="organizer5960" >
<td class="tree">
<span class="field-node"></span>organizer

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees with the organizer field set to True. To change the organizer, use the move operation. Read-only, except when importing an event.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="start7491" >
<td class="tree">
<span class="field-node"></span>start

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>undefined</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>privateCopy

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>If set to True, Event propagation is disabled. Note that it is not the same thing as Private event properties. Optional. Immutable. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>recurrence

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">array</span>
</div>
<div>
<div class="description">
<p>List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event, as specified in RFC5545. Note that DTSTART and DTEND lines are not allowed in this field; event start and end times are specified in the start and end fields. This field is omitted for single events or instances of recurring events.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>recurringEventId

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>For an instance of a recurring event, this is the id of the recurring event to which this instance belongs. Immutable.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="reminders9443" >
<td class="tree">
<span class="field-node"></span>reminders

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>Information about the event's reminders for the authenticated user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>sequence

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">integer</span>
</div>
<div>
<div class="description">
<p>Sequence number as per iCalendar.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="source6164" >
<td class="tree">
<span class="field-node"></span>source

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>Source from which the event was created. For example, a web page, an email message or any document identifiable by an URL with HTTP or HTTPS scheme. Can only be seen or modified by the creator of the event.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="start358" >
<td class="tree">
<span class="field-node"></span>start

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>undefined</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>status

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Status of the event. Optional. Possible values are:
- "confirmed" - The event is confirmed. This is the default status.
- "tentative" - The event is tentatively confirmed.
- "cancelled" - The event is cancelled (deleted). The list method returns cancelled events only on incremental sync (when syncToken or updatedMin are specified) or if the showDeleted flag is set to true. The get method always returns them.
A cancelled status represents two different states depending on the event type:
- Cancelled exceptions of an uncancelled recurring event indicate that this instance should no longer be presented to the user. Clients should store these events for the lifetime of the parent recurring event.
Cancelled exceptions are only guaranteed to have values for the id, recurringEventId and originalStartTime fields populated. The other fields might be empty.
- All other cancelled events represent deleted events. Clients should remove their locally synced copies. Such cancelled events will eventually disappear, so do not rely on them being available indefinitely.
Deleted events are only guaranteed to have the id field populated.   On the organizer's calendar, cancelled events continue to expose event details (summary, location, etc.) so that they can be restored (undeleted). Similarly, the events to which the user was invited and that they manually removed continue to provide details. However, incremental sync requests with showDeleted set to false will not return these details.
If an event changes its organizer (for example via the move operation) and the original organizer is not on the attendee list, it will leave behind a cancelled event where only the id field is guaranteed to be populated.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>summary

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Title of the event.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>transparency

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Whether the event blocks time on the calendar. Optional. Possible values are:
- "opaque" - Default value. The event does block time on the calendar. This is equivalent to setting Show me as to Busy in the Calendar UI.
- "transparent" - The event does not block time on the calendar. This is equivalent to setting Show me as to Available in the Calendar UI.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>updated

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Last modification time of the event (as a RFC3339 timestamp). Read-only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>visibility

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Visibility of the event. Optional. Possible values are:
- "default" - Uses the default visibility for events on the calendar. This is the default value.
- "public" - The event is public and event details are visible to all readers of the calendar.
- "private" - The event is private and only event attendees may view event details.
- "confidential" - The event is private. This value is provided for compatibility reasons.</p>
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
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|conferenceDataVersion|query|integer|false|Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.|
|supportsAttachments|query|boolean|false|Whether API client performing operation supports event attachments. Optional. The default is False.|
|body|body|[Event](#schemaevent)|false|none|
|» anyoneCanAddSelf|body|boolean|false|Whether anyone can invite themselves to the event (currently works for Google+ events only). Optional. The default is False.|
|» attachments|body|[[EventAttachment](#schemaeventattachment)]|false|File attachments for the event. Currently only Google Drive attachments are supported.|
|»» fileId|body|string|false|ID of the attached file. Read-only.|
|»» fileUrl|body|string|false|URL link to the attachment.|
|»» iconLink|body|string|false|URL link to the attachment's icon. Read-only.|
|»» mimeType|body|string|false|Internet media type (MIME type) of the attachment.|
|»» title|body|string|false|Attachment title.|
|» attendees|body|[[EventAttendee](#schemaeventattendee)]|false|The attendees of the event. See the Events with attendees guide for more information on scheduling events with other calendar users.|
|»» additionalGuests|body|integer(int32)|false|Number of additional guests. Optional. The default is 0.|
|»» comment|body|string|false|The attendee's response comment. Optional.|
|»» displayName|body|string|false|The attendee's name, if available. Optional.|
|»» email|body|string|false|The attendee's email address, if available. This field must be present when adding an attendee. It must be a valid email address as per RFC5322.|
|»» id|body|string|false|The attendee's Profile ID, if available. It corresponds to the id field in the People collection of the Google+ API|
|»» optional|body|boolean|false|Whether this is an optional attendee. Optional. The default is False.|
|»» organizer|body|boolean|false|Whether the attendee is the organizer of the event. Read-only. The default is False.|
|»» resource|body|boolean|false|Whether the attendee is a resource. Can only be set when the attendee is added to the event for the first time. Subsequent modifications are ignored. Optional. The default is False.|
|»» responseStatus|body|string|false|The attendee's response status. Possible values are:|
|»» self|body|boolean|false|Whether this entry represents the calendar on which this copy of the event appears. Read-only. The default is False.|
|» attendeesOmitted|body|boolean|false|Whether attendees may have been omitted from the event's representation. When retrieving an event, this may be due to a restriction specified by the maxAttendee query parameter. When updating an event, this can be used to only update the participant's response. Optional. The default is False.|
|» colorId|body|string|false|The color of the event. This is an ID referring to an entry in the event section of the colors definition (see the  colors endpoint). Optional.|
|» conferenceData|body|[ConferenceData](#schemaconferencedata)|false|none|
|»» conferenceId|body|string|false|The ID of the conference.|
|»» conferenceSolution|body|[ConferenceSolution](#schemaconferencesolution)|false|none|
|»»» iconUri|body|string|false|The user-visible icon for this solution.|
|»»» key|body|[ConferenceSolutionKey](#schemaconferencesolutionkey)|false|none|
|»»»» type|body|string|false|The conference solution type.|
|»»» name|body|string|false|The user-visible name of this solution. Not localized.|
|»» createRequest|body|[CreateConferenceRequest](#schemacreateconferencerequest)|false|none|
|»»» conferenceSolutionKey|body|[ConferenceSolutionKey](#schemaconferencesolutionkey)|false|none|
|»»» requestId|body|string|false|The client-generated unique ID for this request.|
|»»» status|body|[ConferenceRequestStatus](#schemaconferencerequeststatus)|false|none|
|»»»» statusCode|body|string|false|The current status of the conference create request. Read-only.|
|»»» entryPoints|body|[[EntryPoint](#schemaentrypoint)]|false|Information about individual conference entry points, such as URLs or phone numbers.|
|»»»» accessCode|body|string|false|The access code to access the conference. The maximum length is 128 characters.|
|»»»» entryPointFeatures|body|[string]|false|Features of the entry point, such as being toll or toll-free. One entry point can have multiple features. However, toll and toll-free cannot be both set on the same entry point.|
|»»»» entryPointType|body|string|false|The type of the conference entry point.|
|»»»» label|body|string|false|The label for the URI. Visible to end users. Not localized. The maximum length is 512 characters.|
|»»»» meetingCode|body|string|false|The meeting code to access the conference. The maximum length is 128 characters.|
|»»»» passcode|body|string|false|The passcode to access the conference. The maximum length is 128 characters.|
|»»»» password|body|string|false|The password to access the conference. The maximum length is 128 characters.|
|»»»» pin|body|string|false|The PIN to access the conference. The maximum length is 128 characters.|
|»»»» regionCode|body|string|false|The CLDR/ISO 3166 region code for the country associated with this phone access. Example: "SE" for Sweden.|
|»»»» uri|body|string|false|The URI of the entry point. The maximum length is 1300 characters.|
|»»» notes|body|string|false|Additional notes (such as instructions from the domain administrator, legal notices) to display to the user. Can contain HTML. The maximum length is 2048 characters. Optional.|
|»»» parameters|body|[ConferenceParameters](#schemaconferenceparameters)|false|none|
|»»»» addOnParameters|body|[ConferenceParametersAddOnParameters](#schemaconferenceparametersaddonparameters)|false|none|
|»»»»» parameters|body|object|false|none|
|»»»»»» **additionalProperties**|body|string|false|none|
|»»»»» signature|body|string|false|The signature of the conference data.|
|»»»» created|body|string(date-time)|false|Creation time of the event (as a RFC3339 timestamp). Read-only.|
|»»»» creator|body|object|false|The creator of the event. Read-only.|
|»»»»» displayName|body|string|false|The creator's name, if available.|
|»»»»» email|body|string|false|The creator's email address, if available.|
|»»»»» id|body|string|false|The creator's Profile ID, if available. It corresponds to the id field in the People collection of the Google+ API|
|»»»»» self|body|boolean|false|Whether the creator corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.|
|»»»» description|body|string|false|Description of the event. Optional.|
|»»»» end|body|[EventDateTime](#schemaeventdatetime)|false|none|
|»»»»» date|body|string(date)|false|The date, in the format "yyyy-mm-dd", if this is an all-day event.|
|»»»»» dateTime|body|string(date-time)|false|The time, as a combined date-time value (formatted according to RFC3339). A time zone offset is required unless a time zone is explicitly specified in timeZone.|
|»»»»» timeZone|body|string|false|The time zone in which the time is specified. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) For recurring events this field is required and specifies the time zone in which the recurrence is expanded. For single events this field is optional and indicates a custom time zone for the event start/end.|
|»»»» endTimeUnspecified|body|boolean|false|Whether the end time is actually unspecified. An end time is still provided for compatibility reasons, even if this attribute is set to True. The default is False.|
|»»»» etag|body|string|false|ETag of the resource.|
|»»»» extendedProperties|body|object|false|Extended properties of the event.|
|»»»»» private|body|object|false|Properties that are private to the copy of the event that appears on this calendar.|
|»»»»»» **additionalProperties**|body|string|false|The name of the private property and the corresponding value.|
|»»»»» shared|body|object|false|Properties that are shared between copies of the event on other attendees' calendars.|
|»»»»»» **additionalProperties**|body|string|false|The name of the shared property and the corresponding value.|
|»»»»» gadget|body|object|false|A gadget that extends this event.|
|»»»»»» display|body|string|false|The gadget's display mode. Optional. Possible values are:|
|»»»»»» height|body|integer(int32)|false|The gadget's height in pixels. The height must be an integer greater than 0. Optional.|
|»»»»»» iconLink|body|string|false|The gadget's icon URL. The URL scheme must be HTTPS.|
|»»»»»» link|body|string|false|The gadget's URL. The URL scheme must be HTTPS.|
|»»»»»» preferences|body|object|false|Preferences.|
|»»»»»»» **additionalProperties**|body|string|false|The preference name and corresponding value.|
|»»»»»» title|body|string|false|The gadget's title.|
|»»»»»» type|body|string|false|The gadget's type.|
|»»»»»» width|body|integer(int32)|false|The gadget's width in pixels. The width must be an integer greater than 0. Optional.|
|»»»»» guestsCanInviteOthers|body|boolean|false|Whether attendees other than the organizer can invite others to the event. Optional. The default is True.|
|»»»»» guestsCanModify|body|boolean|false|Whether attendees other than the organizer can modify the event. Optional. The default is False.|
|»»»»» guestsCanSeeOtherGuests|body|boolean|false|Whether attendees other than the organizer can see who the event's attendees are. Optional. The default is True.|
|»»»»» hangoutLink|body|string|false|An absolute link to the Google+ hangout associated with this event. Read-only.|
|»»»»» htmlLink|body|string|false|An absolute link to this event in the Google Calendar Web UI. Read-only.|
|»»»»» iCalUID|body|string|false|Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring systems and must be supplied when importing events via the import method.|
|»»»»» id|body|string|false|Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules:|
|»»»»» kind|body|string|false|Type of the resource ("calendar#event").|
|»»»»» location|body|string|false|Geographic location of the event as free-form text. Optional.|
|»»»»» locked|body|boolean|false|Whether this is a locked event copy where no changes can be made to the main event fields "summary", "description", "location", "start", "end" or "recurrence". The default is False. Read-Only.|
|»»»»» organizer|body|object|false|The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees with the organizer field set to True. To change the organizer, use the move operation. Read-only, except when importing an event.|
|»»»»»» displayName|body|string|false|The organizer's name, if available.|
|»»»»»» email|body|string|false|The organizer's email address, if available. It must be a valid email address as per RFC5322.|
|»»»»»» id|body|string|false|The organizer's Profile ID, if available. It corresponds to the id field in the People collection of the Google+ API|
|»»»»»» self|body|boolean|false|Whether the organizer corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.|
|»»»»» originalStartTime|body|[EventDateTime](#schemaeventdatetime)|false|none|
|»»»»» privateCopy|body|boolean|false|If set to True, Event propagation is disabled. Note that it is not the same thing as Private event properties. Optional. Immutable. The default is False.|
|»»»»» recurrence|body|[string]|false|List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event, as specified in RFC5545. Note that DTSTART and DTEND lines are not allowed in this field; event start and end times are specified in the start and end fields. This field is omitted for single events or instances of recurring events.|
|»»»»» recurringEventId|body|string|false|For an instance of a recurring event, this is the id of the recurring event to which this instance belongs. Immutable.|
|»»»»» reminders|body|object|false|Information about the event's reminders for the authenticated user.|
|»»»»»» overrides|body|[[EventReminder](#schemaeventreminder)]|false|If the event doesn't use the default reminders, this lists the reminders specific to the event, or, if not set, indicates that no reminders are set for this event. The maximum number of override reminders is 5.|
|»»»»»»» method|body|string|false|The method used by this reminder. Possible values are:|
|»»»»»»» minutes|body|integer(int32)|false|Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320 (4 weeks in minutes).|
|»»»»»» useDefault|body|boolean|false|Whether the default reminders of the calendar apply to the event.|
|»»»»» sequence|body|integer(int32)|false|Sequence number as per iCalendar.|
|»»»»» source|body|object|false|Source from which the event was created. For example, a web page, an email message or any document identifiable by an URL with HTTP or HTTPS scheme. Can only be seen or modified by the creator of the event.|
|»»»»»» title|body|string|false|Title of the source; for example a title of a web page or an email subject.|
|»»»»»» url|body|string|false|URL of the source pointing to a resource. The URL scheme must be HTTP or HTTPS.|
|»»»»» start|body|[EventDateTime](#schemaeventdatetime)|false|none|
|»»»»» status|body|string|false|Status of the event. Optional. Possible values are:|
|»»»»» summary|body|string|false|Title of the event.|
|»»»»» transparency|body|string|false|Whether the event blocks time on the calendar. Optional. Possible values are:|
|»»»»» updated|body|string(date-time)|false|Last modification time of the event (as a RFC3339 timestamp). Read-only.|
|»»»»» visibility|body|string|false|Visibility of the event. Optional. Possible values are:|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Detailed descriptions

**» attachments**: File attachments for the event. Currently only Google Drive attachments are supported.
In order to modify attachments the supportsAttachments request parameter should be set to true.
There can be at most 25 attachments per event,

**»» fileId**: ID of the attached file. Read-only.
For Google Drive files, this is the ID of the corresponding Files resource entry in the Drive API.

**»» fileUrl**: URL link to the attachment.
For adding Google Drive file attachments use the same format as in alternateLink property of the Files resource in the Drive API.
Required when adding an attachment.

**»» email**: The attendee's email address, if available. This field must be present when adding an attendee. It must be a valid email address as per RFC5322.
Required when adding an attendee.

**»» responseStatus**: The attendee's response status. Possible values are:
- "needsAction" - The attendee has not responded to the invitation.
- "declined" - The attendee has declined the invitation.
- "tentative" - The attendee has tentatively accepted the invitation.
- "accepted" - The attendee has accepted the invitation.

**»» conferenceId**: The ID of the conference.
Can be used by developers to keep track of conferences, should not be displayed to users.
Values for solution types:
- "eventHangout": unset.
- "eventNamedHangout": the name of the Hangout.
- "hangoutsMeet": the 10-letter meeting code, for example "aaa-bbbb-ccc".
- "addOn": defined by 3P conference provider.  Optional.

**»»»» type**: The conference solution type.
If a client encounters an unfamiliar or empty type, it should still be able to display the entry points. However, it should disallow modifications.
The possible values are:
- "eventHangout" for Hangouts for consumers (http://hangouts.google.com)
- "eventNamedHangout" for classic Hangouts for G Suite users (http://hangouts.google.com)
- "hangoutsMeet" for Hangouts Meet (http://meet.google.com)
- "addOn" for 3P conference providers

**»»» requestId**: The client-generated unique ID for this request.
Clients should regenerate this ID for every new request. If an ID provided is the same as for the previous request, the request is ignored.

**»»»» statusCode**: The current status of the conference create request. Read-only.
The possible values are:
- "pending": the conference create request is still being processed.
- "success": the conference create request succeeded, the entry points are populated.
- "failure": the conference create request failed, there are no entry points.

**»»» entryPoints**: Information about individual conference entry points, such as URLs or phone numbers.
All of them must belong to the same conference.
Either conferenceSolution and at least one entryPoint, or createRequest is required.

**»»»» accessCode**: The access code to access the conference. The maximum length is 128 characters.
When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
Optional.

**»»»» entryPointType**: The type of the conference entry point.
Possible values are:
- "video" - joining a conference over HTTP. A conference can have zero or one video entry point.
- "phone" - joining a conference by dialing a phone number. A conference can have zero or more phone entry points.
- "sip" - joining a conference over SIP. A conference can have zero or one sip entry point.
- "more" - further conference joining instructions, for example additional phone numbers. A conference can have zero or one more entry point. A conference with only a more entry point is not a valid conference.

**»»»» label**: The label for the URI. Visible to end users. Not localized. The maximum length is 512 characters.
Examples:
- for video: meet.google.com/aaa-bbbb-ccc
- for phone: +1 123 268 2601
- for sip: 12345678@altostrat.com
- for more: should not be filled
Optional.

**»»»» meetingCode**: The meeting code to access the conference. The maximum length is 128 characters.
When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
Optional.

**»»»» passcode**: The passcode to access the conference. The maximum length is 128 characters.
When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.

**»»»» password**: The password to access the conference. The maximum length is 128 characters.
When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
Optional.

**»»»» pin**: The PIN to access the conference. The maximum length is 128 characters.
When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
Optional.

**»»»» regionCode**: The CLDR/ISO 3166 region code for the country associated with this phone access. Example: "SE" for Sweden.
Calendar backend will populate this field only for EntryPointType.PHONE.

**»»»» uri**: The URI of the entry point. The maximum length is 1300 characters.
Format:
- for video, http: or https: schema is required.
- for phone, tel: schema is required. The URI should include the entire dial sequence (e.g., tel:+12345678900,,,123456789;1234).
- for sip, sip: schema is required, e.g., sip:12345678@myprovider.com.
- for more, http: or https: schema is required.

**»»»»» signature**: The signature of the conference data.
Generated on server side. Must be preserved while copying the conference data between events, otherwise the conference data will not be copied.
Unset for a conference with a failed create request.
Optional for a conference with a pending create request.

**»»»»»» display**: The gadget's display mode. Optional. Possible values are:
- "icon" - The gadget displays next to the event's title in the calendar view.
- "chip" - The gadget displays when the event is clicked.

**»»»»» iCalUID**: Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring systems and must be supplied when importing events via the import method.
Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.

**»»»»» id**: Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules:
- characters allowed in the ID are those used in base32hex encoding, i.e. lowercase letters a-v and digits 0-9, see section 3.1.2 in RFC2938
- the length of the ID must be between 5 and 1024 characters
- the ID must be unique per calendar  Due to the globally distributed nature of the system, we cannot guarantee that ID collisions will be detected at event creation time. To minimize the risk of collisions we recommend using an established UUID algorithm such as one described in RFC4122.
If you do not specify an ID, it will be automatically generated by the server.
Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.

**»»»»»»» method**: The method used by this reminder. Possible values are:
- "email" - Reminders are sent via email.
- "sms" - Deprecated. Once this feature is shutdown, the API will no longer return reminders using this method. Any newly added SMS reminders will be ignored. See  Google Calendar SMS notifications to be removed for more information.
Reminders are sent via SMS. These are only available for G Suite customers. Requests to set SMS reminders for other account types are ignored.
- "popup" - Reminders are sent via a UI popup.
Required when adding a reminder.

**»»»»»»» minutes**: Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320 (4 weeks in minutes).
Required when adding a reminder.

**»»»»» status**: Status of the event. Optional. Possible values are:
- "confirmed" - The event is confirmed. This is the default status.
- "tentative" - The event is tentatively confirmed.
- "cancelled" - The event is cancelled (deleted). The list method returns cancelled events only on incremental sync (when syncToken or updatedMin are specified) or if the showDeleted flag is set to true. The get method always returns them.
A cancelled status represents two different states depending on the event type:
- Cancelled exceptions of an uncancelled recurring event indicate that this instance should no longer be presented to the user. Clients should store these events for the lifetime of the parent recurring event.
Cancelled exceptions are only guaranteed to have values for the id, recurringEventId and originalStartTime fields populated. The other fields might be empty.
- All other cancelled events represent deleted events. Clients should remove their locally synced copies. Such cancelled events will eventually disappear, so do not rely on them being available indefinitely.
Deleted events are only guaranteed to have the id field populated.   On the organizer's calendar, cancelled events continue to expose event details (summary, location, etc.) so that they can be restored (undeleted). Similarly, the events to which the user was invited and that they manually removed continue to provide details. However, incremental sync requests with showDeleted set to false will not return these details.
If an event changes its organizer (for example via the move operation) and the original organizer is not on the attendee list, it will leave behind a cancelled event where only the id field is guaranteed to be populated.

**»»»»» transparency**: Whether the event blocks time on the calendar. Optional. Possible values are:
- "opaque" - Default value. The event does block time on the calendar. This is equivalent to setting Show me as to Busy in the Calendar UI.
- "transparent" - The event does not block time on the calendar. This is equivalent to setting Show me as to Available in the Calendar UI.

**»»»»» visibility**: Visibility of the event. Optional. Possible values are:
- "default" - Uses the default visibility for events on the calendar. This is the default value.
- "public" - The event is public and event details are visible to all readers of the calendar.
- "private" - The event is private and only event attendees may view event details.
- "confidential" - The event is private. This value is provided for compatibility reasons.

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.events.import-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[Event](#schemaevent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events )
</aside>

## *post*calendar.events.quickAdd

<a id="opIdcalendar.events.quickAdd"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/quickAdd", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
POST https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/quickAdd?text=string HTTP/1.1
Host: www.googleapis.com
Accept: */*

```

```javascript
var headers = {
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/quickAdd',
  method: 'post',
  data: '?text=string',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/quickAdd?text=string',
{
  method: 'POST',

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
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/quickAdd', params={
  'text': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/quickAdd',
  params: {
  'text' => 'string'
}, headers: headers

p JSON.parse(result)

```

`POST /calendars/{calendarId}/events/quickAdd`

Creates an event based on a simple text string.

<span class="no-format">
<h3 id="calendar.events.quickadd-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events )
</div>
</div>

<span class="title my-4">Path Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>calendarId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>sendNotifications

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use sendUpdates instead.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>sendUpdates

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Guests who should receive notifications about the creation of the new event.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>text

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The text describing the event to be created.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
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
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|sendNotifications|query|boolean|false|Deprecated. Please use sendUpdates instead.|
|sendUpdates|query|string|false|Guests who should receive notifications about the creation of the new event.|
|text|query|string|true|The text describing the event to be created.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Detailed descriptions

**sendNotifications**: Deprecated. Please use sendUpdates instead.

Whether to send notifications about the creation of the event. Note that some emails might still be sent even if you set the value to false. The default is false.

#### Enumerated Values

|Parameter|Value|
|---|---|
|sendUpdates|all|
|sendUpdates|externalOnly|
|sendUpdates|none|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.events.quickadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[Event](#schemaevent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events )
</aside>

## *post*calendar.events.watch

<a id="opIdcalendar.events.watch"></a>

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
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/watch", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
POST https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/watch HTTP/1.1
Host: www.googleapis.com
Content-Type: application/json
Accept: */*

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/watch',
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
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/watch',
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
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/watch', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/watch',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /calendars/{calendarId}/events/watch`

Watch for changes to Events resources.

> Body parameter

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

<span class="no-format">
<h3 id="calendar.events.watch-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</div>
</div>

<span class="title my-4">Path Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>calendarId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>alwaysIncludeEmail

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>iCalUID

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Specifies event ID in the iCalendar format to be included in the response. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>maxAttendees

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">integer</span>
</div>
<div>
<div class="description">
<p>The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>maxResults

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">integer</span>
</div>
<div>
<div class="description">
<p>Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>orderBy

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The order of the events returned in the result. Optional. The default is an unspecified, stable order.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>pageToken

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Token specifying which result page to return. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>privateExtendedProperty

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">array</span>
</div>
<div>
<div class="description">
<p>Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>q

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Free text search terms to find events that match these terms in any field, except for extended properties. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>sharedExtendedProperty

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">array</span>
</div>
<div>
<div class="description">
<p>Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>showDeleted

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>showHiddenInvitations

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether to include hidden invitations in the result. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>singleEvents

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>syncToken

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>timeMax

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMin is set, timeMax must be greater than timeMin.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>timeMin

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Lower bound (exclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMax is set, timeMin must be smaller than timeMax.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>timeZone

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Time zone used in the response. Optional. The default is the time zone of the calendar.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>updatedMin

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">REQUEST BODY SCHEMA</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>address

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The address where notifications are delivered for this channel.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>expiration

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>id

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>A UUID or similar unique string that identifies this channel.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>kind

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="params6107" >
<td class="tree">
<span class="field-node"></span>params

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>Additional parameters controlling delivery channel behavior. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>payload

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>A Boolean value to indicate whether payload is wanted. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>resourceId

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>resourceUri

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>A version-specific identifier for the watched resource.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>type

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The type of delivery mechanism used for this channel.</p>
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
|alwaysIncludeEmail|query|boolean|false|Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|iCalUID|query|string|false|Specifies event ID in the iCalendar format to be included in the response. Optional.|
|maxAttendees|query|integer|false|The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.|
|maxResults|query|integer|false|Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.|
|orderBy|query|string|false|The order of the events returned in the result. Optional. The default is an unspecified, stable order.|
|pageToken|query|string|false|Token specifying which result page to return. Optional.|
|privateExtendedProperty|query|array[string]|false|Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints.|
|q|query|string|false|Free text search terms to find events that match these terms in any field, except for extended properties. Optional.|
|sharedExtendedProperty|query|array[string]|false|Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints.|
|showDeleted|query|boolean|false|Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False.|
|showHiddenInvitations|query|boolean|false|Whether to include hidden invitations in the result. Optional. The default is False.|
|singleEvents|query|boolean|false|Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False.|
|syncToken|query|string|false|Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.|
|timeMax|query|string|false|Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMin is set, timeMax must be greater than timeMin.|
|timeMin|query|string|false|Lower bound (exclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMax is set, timeMin must be smaller than timeMax.|
|timeZone|query|string|false|Time zone used in the response. Optional. The default is the time zone of the calendar.|
|updatedMin|query|string|false|Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.|
|body|body|[Channel](#schemachannel)|false|none|
|» address|body|string|false|The address where notifications are delivered for this channel.|
|» expiration|body|string(int64)|false|Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.|
|» id|body|string|false|A UUID or similar unique string that identifies this channel.|
|» kind|body|string|false|Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".|
|» params|body|object|false|Additional parameters controlling delivery channel behavior. Optional.|
|»» **additionalProperties**|body|string|false|Declares a new parameter by name.|
|» payload|body|boolean|false|A Boolean value to indicate whether payload is wanted. Optional.|
|» resourceId|body|string|false|An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.|
|» resourceUri|body|string|false|A version-specific identifier for the watched resource.|
|» token|body|string|false|An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.|
|» type|body|string|false|The type of delivery mechanism used for this channel.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Detailed descriptions

**syncToken**: Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
There are several query parameters that cannot be specified together with nextSyncToken to ensure consistency of the client state.

These are:
- iCalUID
- orderBy
- privateExtendedProperty
- q
- sharedExtendedProperty
- timeMin
- timeMax
- updatedMin If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries.

#### Enumerated Values

|Parameter|Value|
|---|---|
|orderBy|startTime|
|orderBy|updated|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.events.watch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[Channel](#schemachannel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</aside>

## *delete*calendar.events.delete

<a id="opIdcalendar.events.delete"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
DELETE https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId} HTTP/1.1
Host: www.googleapis.com

```

```javascript
var headers = {
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}',
  method: 'delete',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}',
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

```python
import requests
headers = {
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.delete('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.delete 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`DELETE /calendars/{calendarId}/events/{eventId}`

Deletes an event.

<span class="no-format">
<h3 id="calendar.events.delete-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events )
</div>
</div>

<span class="title my-4">Path Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>calendarId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>eventId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Event identifier.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>sendNotifications

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use sendUpdates instead.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>sendUpdates

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Guests who should receive notifications about the deletion of the event.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
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
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|eventId|path|string|true|Event identifier.|
|sendNotifications|query|boolean|false|Deprecated. Please use sendUpdates instead.|
|sendUpdates|query|string|false|Guests who should receive notifications about the deletion of the event.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Detailed descriptions

**sendNotifications**: Deprecated. Please use sendUpdates instead.

Whether to send notifications about the deletion of the event. Note that some emails might still be sent even if you set the value to false. The default is false.

#### Enumerated Values

|Parameter|Value|
|---|---|
|sendUpdates|all|
|sendUpdates|externalOnly|
|sendUpdates|none|
|alt|json|

<h3 id="calendar.events.delete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events )
</aside>

## *get*calendar.events.get

<a id="opIdcalendar.events.get"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId} HTTP/1.1
Host: www.googleapis.com
Accept: */*

```

```javascript
var headers = {
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}',
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
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}',
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
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /calendars/{calendarId}/events/{eventId}`

Returns an event.

<span class="no-format">
<h3 id="calendar.events.get-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</div>
</div>

<span class="title my-4">Path Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>calendarId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>eventId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Event identifier.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>alwaysIncludeEmail

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>maxAttendees

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">integer</span>
</div>
<div>
<div class="description">
<p>The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>timeZone

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Time zone used in the response. Optional. The default is the time zone of the calendar.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
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
|alwaysIncludeEmail|query|boolean|false|Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|eventId|path|string|true|Event identifier.|
|maxAttendees|query|integer|false|The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.|
|timeZone|query|string|false|Time zone used in the response. Optional. The default is the time zone of the calendar.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.events.get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[Event](#schemaevent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</aside>

## *patch*calendar.events.patch

<a id="opIdcalendar.events.patch"></a>

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
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PATCH", "https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
PATCH https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId} HTTP/1.1
Host: www.googleapis.com
Content-Type: application/json
Accept: */*

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}',
  method: 'patch',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "anyoneCanAddSelf": false,
  "attachments": [
    {
      "fileId": "string",
      "fileUrl": "string",
      "iconLink": "string",
      "mimeType": "string",
      "title": "string"
    }
  ],
  "attendees": [
    {
      "additionalGuests": 0,
      "comment": "string",
      "displayName": "string",
      "email": "string",
      "id": "string",
      "optional": false,
      "organizer": true,
      "resource": false,
      "responseStatus": "string",
      "self": false
    }
  ],
  "attendeesOmitted": false,
  "colorId": "string",
  "conferenceData": {
    "conferenceId": "string",
    "conferenceSolution": {
      "iconUri": "string",
      "key": {
        "type": "string"
      },
      "name": "string"
    },
    "createRequest": {
      "conferenceSolutionKey": {
        "type": "string"
      },
      "requestId": "string",
      "status": {
        "statusCode": "string"
      }
    },
    "entryPoints": [
      {
        "accessCode": "string",
        "entryPointFeatures": [
          "string"
        ],
        "entryPointType": "string",
        "label": "string",
        "meetingCode": "string",
        "passcode": "string",
        "password": "string",
        "pin": "string",
        "regionCode": "string",
        "uri": "string"
      }
    ],
    "notes": "string",
    "parameters": {
      "addOnParameters": {
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "signature": "string"
  },
  "created": "2019-11-22T00:09:35Z",
  "creator": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "description": "string",
  "end": {
    "date": "2019-11-22",
    "dateTime": "2019-11-22T00:09:35Z",
    "timeZone": "string"
  },
  "endTimeUnspecified": false,
  "etag": "string",
  "extendedProperties": {
    "private": {
      "property1": "string",
      "property2": "string"
    },
    "shared": {
      "property1": "string",
      "property2": "string"
    }
  },
  "gadget": {
    "display": "string",
    "height": 0,
    "iconLink": "string",
    "link": "string",
    "preferences": {
      "property1": "string",
      "property2": "string"
    },
    "title": "string",
    "type": "string",
    "width": 0
  },
  "guestsCanInviteOthers": true,
  "guestsCanModify": false,
  "guestsCanSeeOtherGuests": true,
  "hangoutLink": "string",
  "htmlLink": "string",
  "iCalUID": "string",
  "id": "string",
  "kind": "calendar#event",
  "location": "string",
  "locked": false,
  "organizer": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "originalStartTime": {
    "date": "2019-11-22",
    "dateTime": "2019-11-22T00:09:35Z",
    "timeZone": "string"
  },
  "privateCopy": false,
  "recurrence": [
    "string"
  ],
  "recurringEventId": "string",
  "reminders": {
    "overrides": [
      {
        "method": "string",
        "minutes": 0
      }
    ],
    "useDefault": true
  },
  "sequence": 0,
  "source": {
    "title": "string",
    "url": "string"
  },
  "start": {
    "date": "2019-11-22",
    "dateTime": "2019-11-22T00:09:35Z",
    "timeZone": "string"
  },
  "status": "string",
  "summary": "string",
  "transparency": "opaque",
  "updated": "2019-11-22T00:09:35Z",
  "visibility": "default"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}',
{
  method: 'PATCH',
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
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.patch('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.patch 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`PATCH /calendars/{calendarId}/events/{eventId}`

Updates an event. This method supports patch semantics.

> Body parameter

```json
{
  "anyoneCanAddSelf": false,
  "attachments": [
    {
      "fileId": "string",
      "fileUrl": "string",
      "iconLink": "string",
      "mimeType": "string",
      "title": "string"
    }
  ],
  "attendees": [
    {
      "additionalGuests": 0,
      "comment": "string",
      "displayName": "string",
      "email": "string",
      "id": "string",
      "optional": false,
      "organizer": true,
      "resource": false,
      "responseStatus": "string",
      "self": false
    }
  ],
  "attendeesOmitted": false,
  "colorId": "string",
  "conferenceData": {
    "conferenceId": "string",
    "conferenceSolution": {
      "iconUri": "string",
      "key": {
        "type": "string"
      },
      "name": "string"
    },
    "createRequest": {
      "conferenceSolutionKey": {
        "type": "string"
      },
      "requestId": "string",
      "status": {
        "statusCode": "string"
      }
    },
    "entryPoints": [
      {
        "accessCode": "string",
        "entryPointFeatures": [
          "string"
        ],
        "entryPointType": "string",
        "label": "string",
        "meetingCode": "string",
        "passcode": "string",
        "password": "string",
        "pin": "string",
        "regionCode": "string",
        "uri": "string"
      }
    ],
    "notes": "string",
    "parameters": {
      "addOnParameters": {
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "signature": "string"
  },
  "created": "2019-11-22T00:09:35Z",
  "creator": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "description": "string",
  "end": {
    "date": "2019-11-22",
    "dateTime": "2019-11-22T00:09:35Z",
    "timeZone": "string"
  },
  "endTimeUnspecified": false,
  "etag": "string",
  "extendedProperties": {
    "private": {
      "property1": "string",
      "property2": "string"
    },
    "shared": {
      "property1": "string",
      "property2": "string"
    }
  },
  "gadget": {
    "display": "string",
    "height": 0,
    "iconLink": "string",
    "link": "string",
    "preferences": {
      "property1": "string",
      "property2": "string"
    },
    "title": "string",
    "type": "string",
    "width": 0
  },
  "guestsCanInviteOthers": true,
  "guestsCanModify": false,
  "guestsCanSeeOtherGuests": true,
  "hangoutLink": "string",
  "htmlLink": "string",
  "iCalUID": "string",
  "id": "string",
  "kind": "calendar#event",
  "location": "string",
  "locked": false,
  "organizer": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "originalStartTime": {
    "date": "2019-11-22",
    "dateTime": "2019-11-22T00:09:35Z",
    "timeZone": "string"
  },
  "privateCopy": false,
  "recurrence": [
    "string"
  ],
  "recurringEventId": "string",
  "reminders": {
    "overrides": [
      {
        "method": "string",
        "minutes": 0
      }
    ],
    "useDefault": true
  },
  "sequence": 0,
  "source": {
    "title": "string",
    "url": "string"
  },
  "start": {
    "date": "2019-11-22",
    "dateTime": "2019-11-22T00:09:35Z",
    "timeZone": "string"
  },
  "status": "string",
  "summary": "string",
  "transparency": "opaque",
  "updated": "2019-11-22T00:09:35Z",
  "visibility": "default"
}
```

<span class="no-format">
<h3 id="calendar.events.patch-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events )
</div>
</div>

<span class="title my-4">Path Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>calendarId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>eventId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Event identifier.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>alwaysIncludeEmail

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>conferenceDataVersion

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">integer</span>
</div>
<div>
<div class="description">
<p>Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>maxAttendees

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">integer</span>
</div>
<div>
<div class="description">
<p>The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>sendNotifications

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use sendUpdates instead.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>sendUpdates

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Guests who should receive notifications about the event update (for example, title changes, etc.).</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>supportsAttachments

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether API client performing operation supports event attachments. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">REQUEST BODY SCHEMA</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>anyoneCanAddSelf

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether anyone can invite themselves to the event (currently works for Google+ events only). Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>attachments

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">array</span>
</div>
<div>
<div class="description">
<p>File attachments for the event. Currently only Google Drive attachments are supported.
In order to modify attachments the supportsAttachments request parameter should be set to true.
There can be at most 25 attachments per event,</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>attendees

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">array</span>
</div>
<div>
<div class="description">
<p>The attendees of the event. See the Events with attendees guide for more information on scheduling events with other calendar users.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>attendeesOmitted

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether attendees may have been omitted from the event's representation. When retrieving an event, this may be due to a restriction specified by the maxAttendee query parameter. When updating an event, this can be used to only update the participant's response. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>colorId

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The color of the event. This is an ID referring to an entry in the event section of the colors definition (see the  colors endpoint). Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="conferenceData374" >
<td class="tree">
<span class="field-node"></span>conferenceData

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>undefined</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>created

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Creation time of the event (as a RFC3339 timestamp). Read-only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="creator8850" >
<td class="tree">
<span class="field-node"></span>creator

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>The creator of the event. Read-only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>description

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Description of the event. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="start9169" >
<td class="tree">
<span class="field-node"></span>start

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>undefined</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>endTimeUnspecified

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether the end time is actually unspecified. An end time is still provided for compatibility reasons, even if this attribute is set to True. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>etag

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>ETag of the resource.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="extendedProperties9317" >
<td class="tree">
<span class="field-node"></span>extendedProperties

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>Extended properties of the event.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="gadget2561" >
<td class="tree">
<span class="field-node"></span>gadget

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>A gadget that extends this event.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>guestsCanInviteOthers

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether attendees other than the organizer can invite others to the event. Optional. The default is True.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>guestsCanModify

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether attendees other than the organizer can modify the event. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>guestsCanSeeOtherGuests

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether attendees other than the organizer can see who the event's attendees are. Optional. The default is True.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>hangoutLink

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An absolute link to the Google+ hangout associated with this event. Read-only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>htmlLink

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An absolute link to this event in the Google Calendar Web UI. Read-only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>iCalUID

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring systems and must be supplied when importing events via the import method.
Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>id

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules:
- characters allowed in the ID are those used in base32hex encoding, i.e. lowercase letters a-v and digits 0-9, see section 3.1.2 in RFC2938
- the length of the ID must be between 5 and 1024 characters
- the ID must be unique per calendar  Due to the globally distributed nature of the system, we cannot guarantee that ID collisions will be detected at event creation time. To minimize the risk of collisions we recommend using an established UUID algorithm such as one described in RFC4122.
If you do not specify an ID, it will be automatically generated by the server.
Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>kind

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Type of the resource ("calendar#event").</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>location

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Geographic location of the event as free-form text. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>locked

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether this is a locked event copy where no changes can be made to the main event fields "summary", "description", "location", "start", "end" or "recurrence". The default is False. Read-Only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="organizer262" >
<td class="tree">
<span class="field-node"></span>organizer

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees with the organizer field set to True. To change the organizer, use the move operation. Read-only, except when importing an event.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="start58" >
<td class="tree">
<span class="field-node"></span>start

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>undefined</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>privateCopy

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>If set to True, Event propagation is disabled. Note that it is not the same thing as Private event properties. Optional. Immutable. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>recurrence

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">array</span>
</div>
<div>
<div class="description">
<p>List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event, as specified in RFC5545. Note that DTSTART and DTEND lines are not allowed in this field; event start and end times are specified in the start and end fields. This field is omitted for single events or instances of recurring events.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>recurringEventId

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>For an instance of a recurring event, this is the id of the recurring event to which this instance belongs. Immutable.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="reminders6475" >
<td class="tree">
<span class="field-node"></span>reminders

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>Information about the event's reminders for the authenticated user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>sequence

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">integer</span>
</div>
<div>
<div class="description">
<p>Sequence number as per iCalendar.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="source6314" >
<td class="tree">
<span class="field-node"></span>source

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>Source from which the event was created. For example, a web page, an email message or any document identifiable by an URL with HTTP or HTTPS scheme. Can only be seen or modified by the creator of the event.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="start3963" >
<td class="tree">
<span class="field-node"></span>start

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>undefined</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>status

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Status of the event. Optional. Possible values are:
- "confirmed" - The event is confirmed. This is the default status.
- "tentative" - The event is tentatively confirmed.
- "cancelled" - The event is cancelled (deleted). The list method returns cancelled events only on incremental sync (when syncToken or updatedMin are specified) or if the showDeleted flag is set to true. The get method always returns them.
A cancelled status represents two different states depending on the event type:
- Cancelled exceptions of an uncancelled recurring event indicate that this instance should no longer be presented to the user. Clients should store these events for the lifetime of the parent recurring event.
Cancelled exceptions are only guaranteed to have values for the id, recurringEventId and originalStartTime fields populated. The other fields might be empty.
- All other cancelled events represent deleted events. Clients should remove their locally synced copies. Such cancelled events will eventually disappear, so do not rely on them being available indefinitely.
Deleted events are only guaranteed to have the id field populated.   On the organizer's calendar, cancelled events continue to expose event details (summary, location, etc.) so that they can be restored (undeleted). Similarly, the events to which the user was invited and that they manually removed continue to provide details. However, incremental sync requests with showDeleted set to false will not return these details.
If an event changes its organizer (for example via the move operation) and the original organizer is not on the attendee list, it will leave behind a cancelled event where only the id field is guaranteed to be populated.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>summary

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Title of the event.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>transparency

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Whether the event blocks time on the calendar. Optional. Possible values are:
- "opaque" - Default value. The event does block time on the calendar. This is equivalent to setting Show me as to Busy in the Calendar UI.
- "transparent" - The event does not block time on the calendar. This is equivalent to setting Show me as to Available in the Calendar UI.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>updated

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Last modification time of the event (as a RFC3339 timestamp). Read-only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>visibility

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Visibility of the event. Optional. Possible values are:
- "default" - Uses the default visibility for events on the calendar. This is the default value.
- "public" - The event is public and event details are visible to all readers of the calendar.
- "private" - The event is private and only event attendees may view event details.
- "confidential" - The event is private. This value is provided for compatibility reasons.</p>
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
|alwaysIncludeEmail|query|boolean|false|Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|conferenceDataVersion|query|integer|false|Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.|
|eventId|path|string|true|Event identifier.|
|maxAttendees|query|integer|false|The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.|
|sendNotifications|query|boolean|false|Deprecated. Please use sendUpdates instead.|
|sendUpdates|query|string|false|Guests who should receive notifications about the event update (for example, title changes, etc.).|
|supportsAttachments|query|boolean|false|Whether API client performing operation supports event attachments. Optional. The default is False.|
|body|body|[Event](#schemaevent)|false|none|
|» anyoneCanAddSelf|body|boolean|false|Whether anyone can invite themselves to the event (currently works for Google+ events only). Optional. The default is False.|
|» attachments|body|[[EventAttachment](#schemaeventattachment)]|false|File attachments for the event. Currently only Google Drive attachments are supported.|
|»» fileId|body|string|false|ID of the attached file. Read-only.|
|»» fileUrl|body|string|false|URL link to the attachment.|
|»» iconLink|body|string|false|URL link to the attachment's icon. Read-only.|
|»» mimeType|body|string|false|Internet media type (MIME type) of the attachment.|
|»» title|body|string|false|Attachment title.|
|» attendees|body|[[EventAttendee](#schemaeventattendee)]|false|The attendees of the event. See the Events with attendees guide for more information on scheduling events with other calendar users.|
|»» additionalGuests|body|integer(int32)|false|Number of additional guests. Optional. The default is 0.|
|»» comment|body|string|false|The attendee's response comment. Optional.|
|»» displayName|body|string|false|The attendee's name, if available. Optional.|
|»» email|body|string|false|The attendee's email address, if available. This field must be present when adding an attendee. It must be a valid email address as per RFC5322.|
|»» id|body|string|false|The attendee's Profile ID, if available. It corresponds to the id field in the People collection of the Google+ API|
|»» optional|body|boolean|false|Whether this is an optional attendee. Optional. The default is False.|
|»» organizer|body|boolean|false|Whether the attendee is the organizer of the event. Read-only. The default is False.|
|»» resource|body|boolean|false|Whether the attendee is a resource. Can only be set when the attendee is added to the event for the first time. Subsequent modifications are ignored. Optional. The default is False.|
|»» responseStatus|body|string|false|The attendee's response status. Possible values are:|
|»» self|body|boolean|false|Whether this entry represents the calendar on which this copy of the event appears. Read-only. The default is False.|
|» attendeesOmitted|body|boolean|false|Whether attendees may have been omitted from the event's representation. When retrieving an event, this may be due to a restriction specified by the maxAttendee query parameter. When updating an event, this can be used to only update the participant's response. Optional. The default is False.|
|» colorId|body|string|false|The color of the event. This is an ID referring to an entry in the event section of the colors definition (see the  colors endpoint). Optional.|
|» conferenceData|body|[ConferenceData](#schemaconferencedata)|false|none|
|»» conferenceId|body|string|false|The ID of the conference.|
|»» conferenceSolution|body|[ConferenceSolution](#schemaconferencesolution)|false|none|
|»»» iconUri|body|string|false|The user-visible icon for this solution.|
|»»» key|body|[ConferenceSolutionKey](#schemaconferencesolutionkey)|false|none|
|»»»» type|body|string|false|The conference solution type.|
|»»» name|body|string|false|The user-visible name of this solution. Not localized.|
|»» createRequest|body|[CreateConferenceRequest](#schemacreateconferencerequest)|false|none|
|»»» conferenceSolutionKey|body|[ConferenceSolutionKey](#schemaconferencesolutionkey)|false|none|
|»»» requestId|body|string|false|The client-generated unique ID for this request.|
|»»» status|body|[ConferenceRequestStatus](#schemaconferencerequeststatus)|false|none|
|»»»» statusCode|body|string|false|The current status of the conference create request. Read-only.|
|»»» entryPoints|body|[[EntryPoint](#schemaentrypoint)]|false|Information about individual conference entry points, such as URLs or phone numbers.|
|»»»» accessCode|body|string|false|The access code to access the conference. The maximum length is 128 characters.|
|»»»» entryPointFeatures|body|[string]|false|Features of the entry point, such as being toll or toll-free. One entry point can have multiple features. However, toll and toll-free cannot be both set on the same entry point.|
|»»»» entryPointType|body|string|false|The type of the conference entry point.|
|»»»» label|body|string|false|The label for the URI. Visible to end users. Not localized. The maximum length is 512 characters.|
|»»»» meetingCode|body|string|false|The meeting code to access the conference. The maximum length is 128 characters.|
|»»»» passcode|body|string|false|The passcode to access the conference. The maximum length is 128 characters.|
|»»»» password|body|string|false|The password to access the conference. The maximum length is 128 characters.|
|»»»» pin|body|string|false|The PIN to access the conference. The maximum length is 128 characters.|
|»»»» regionCode|body|string|false|The CLDR/ISO 3166 region code for the country associated with this phone access. Example: "SE" for Sweden.|
|»»»» uri|body|string|false|The URI of the entry point. The maximum length is 1300 characters.|
|»»» notes|body|string|false|Additional notes (such as instructions from the domain administrator, legal notices) to display to the user. Can contain HTML. The maximum length is 2048 characters. Optional.|
|»»» parameters|body|[ConferenceParameters](#schemaconferenceparameters)|false|none|
|»»»» addOnParameters|body|[ConferenceParametersAddOnParameters](#schemaconferenceparametersaddonparameters)|false|none|
|»»»»» parameters|body|object|false|none|
|»»»»»» **additionalProperties**|body|string|false|none|
|»»»»» signature|body|string|false|The signature of the conference data.|
|»»»» created|body|string(date-time)|false|Creation time of the event (as a RFC3339 timestamp). Read-only.|
|»»»» creator|body|object|false|The creator of the event. Read-only.|
|»»»»» displayName|body|string|false|The creator's name, if available.|
|»»»»» email|body|string|false|The creator's email address, if available.|
|»»»»» id|body|string|false|The creator's Profile ID, if available. It corresponds to the id field in the People collection of the Google+ API|
|»»»»» self|body|boolean|false|Whether the creator corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.|
|»»»» description|body|string|false|Description of the event. Optional.|
|»»»» end|body|[EventDateTime](#schemaeventdatetime)|false|none|
|»»»»» date|body|string(date)|false|The date, in the format "yyyy-mm-dd", if this is an all-day event.|
|»»»»» dateTime|body|string(date-time)|false|The time, as a combined date-time value (formatted according to RFC3339). A time zone offset is required unless a time zone is explicitly specified in timeZone.|
|»»»»» timeZone|body|string|false|The time zone in which the time is specified. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) For recurring events this field is required and specifies the time zone in which the recurrence is expanded. For single events this field is optional and indicates a custom time zone for the event start/end.|
|»»»» endTimeUnspecified|body|boolean|false|Whether the end time is actually unspecified. An end time is still provided for compatibility reasons, even if this attribute is set to True. The default is False.|
|»»»» etag|body|string|false|ETag of the resource.|
|»»»» extendedProperties|body|object|false|Extended properties of the event.|
|»»»»» private|body|object|false|Properties that are private to the copy of the event that appears on this calendar.|
|»»»»»» **additionalProperties**|body|string|false|The name of the private property and the corresponding value.|
|»»»»» shared|body|object|false|Properties that are shared between copies of the event on other attendees' calendars.|
|»»»»»» **additionalProperties**|body|string|false|The name of the shared property and the corresponding value.|
|»»»»» gadget|body|object|false|A gadget that extends this event.|
|»»»»»» display|body|string|false|The gadget's display mode. Optional. Possible values are:|
|»»»»»» height|body|integer(int32)|false|The gadget's height in pixels. The height must be an integer greater than 0. Optional.|
|»»»»»» iconLink|body|string|false|The gadget's icon URL. The URL scheme must be HTTPS.|
|»»»»»» link|body|string|false|The gadget's URL. The URL scheme must be HTTPS.|
|»»»»»» preferences|body|object|false|Preferences.|
|»»»»»»» **additionalProperties**|body|string|false|The preference name and corresponding value.|
|»»»»»» title|body|string|false|The gadget's title.|
|»»»»»» type|body|string|false|The gadget's type.|
|»»»»»» width|body|integer(int32)|false|The gadget's width in pixels. The width must be an integer greater than 0. Optional.|
|»»»»» guestsCanInviteOthers|body|boolean|false|Whether attendees other than the organizer can invite others to the event. Optional. The default is True.|
|»»»»» guestsCanModify|body|boolean|false|Whether attendees other than the organizer can modify the event. Optional. The default is False.|
|»»»»» guestsCanSeeOtherGuests|body|boolean|false|Whether attendees other than the organizer can see who the event's attendees are. Optional. The default is True.|
|»»»»» hangoutLink|body|string|false|An absolute link to the Google+ hangout associated with this event. Read-only.|
|»»»»» htmlLink|body|string|false|An absolute link to this event in the Google Calendar Web UI. Read-only.|
|»»»»» iCalUID|body|string|false|Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring systems and must be supplied when importing events via the import method.|
|»»»»» id|body|string|false|Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules:|
|»»»»» kind|body|string|false|Type of the resource ("calendar#event").|
|»»»»» location|body|string|false|Geographic location of the event as free-form text. Optional.|
|»»»»» locked|body|boolean|false|Whether this is a locked event copy where no changes can be made to the main event fields "summary", "description", "location", "start", "end" or "recurrence". The default is False. Read-Only.|
|»»»»» organizer|body|object|false|The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees with the organizer field set to True. To change the organizer, use the move operation. Read-only, except when importing an event.|
|»»»»»» displayName|body|string|false|The organizer's name, if available.|
|»»»»»» email|body|string|false|The organizer's email address, if available. It must be a valid email address as per RFC5322.|
|»»»»»» id|body|string|false|The organizer's Profile ID, if available. It corresponds to the id field in the People collection of the Google+ API|
|»»»»»» self|body|boolean|false|Whether the organizer corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.|
|»»»»» originalStartTime|body|[EventDateTime](#schemaeventdatetime)|false|none|
|»»»»» privateCopy|body|boolean|false|If set to True, Event propagation is disabled. Note that it is not the same thing as Private event properties. Optional. Immutable. The default is False.|
|»»»»» recurrence|body|[string]|false|List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event, as specified in RFC5545. Note that DTSTART and DTEND lines are not allowed in this field; event start and end times are specified in the start and end fields. This field is omitted for single events or instances of recurring events.|
|»»»»» recurringEventId|body|string|false|For an instance of a recurring event, this is the id of the recurring event to which this instance belongs. Immutable.|
|»»»»» reminders|body|object|false|Information about the event's reminders for the authenticated user.|
|»»»»»» overrides|body|[[EventReminder](#schemaeventreminder)]|false|If the event doesn't use the default reminders, this lists the reminders specific to the event, or, if not set, indicates that no reminders are set for this event. The maximum number of override reminders is 5.|
|»»»»»»» method|body|string|false|The method used by this reminder. Possible values are:|
|»»»»»»» minutes|body|integer(int32)|false|Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320 (4 weeks in minutes).|
|»»»»»» useDefault|body|boolean|false|Whether the default reminders of the calendar apply to the event.|
|»»»»» sequence|body|integer(int32)|false|Sequence number as per iCalendar.|
|»»»»» source|body|object|false|Source from which the event was created. For example, a web page, an email message or any document identifiable by an URL with HTTP or HTTPS scheme. Can only be seen or modified by the creator of the event.|
|»»»»»» title|body|string|false|Title of the source; for example a title of a web page or an email subject.|
|»»»»»» url|body|string|false|URL of the source pointing to a resource. The URL scheme must be HTTP or HTTPS.|
|»»»»» start|body|[EventDateTime](#schemaeventdatetime)|false|none|
|»»»»» status|body|string|false|Status of the event. Optional. Possible values are:|
|»»»»» summary|body|string|false|Title of the event.|
|»»»»» transparency|body|string|false|Whether the event blocks time on the calendar. Optional. Possible values are:|
|»»»»» updated|body|string(date-time)|false|Last modification time of the event (as a RFC3339 timestamp). Read-only.|
|»»»»» visibility|body|string|false|Visibility of the event. Optional. Possible values are:|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Detailed descriptions

**sendNotifications**: Deprecated. Please use sendUpdates instead.

Whether to send notifications about the event update (for example, description changes, etc.). Note that some emails might still be sent even if you set the value to false. The default is false.

**» attachments**: File attachments for the event. Currently only Google Drive attachments are supported.
In order to modify attachments the supportsAttachments request parameter should be set to true.
There can be at most 25 attachments per event,

**»» fileId**: ID of the attached file. Read-only.
For Google Drive files, this is the ID of the corresponding Files resource entry in the Drive API.

**»» fileUrl**: URL link to the attachment.
For adding Google Drive file attachments use the same format as in alternateLink property of the Files resource in the Drive API.
Required when adding an attachment.

**»» email**: The attendee's email address, if available. This field must be present when adding an attendee. It must be a valid email address as per RFC5322.
Required when adding an attendee.

**»» responseStatus**: The attendee's response status. Possible values are:
- "needsAction" - The attendee has not responded to the invitation.
- "declined" - The attendee has declined the invitation.
- "tentative" - The attendee has tentatively accepted the invitation.
- "accepted" - The attendee has accepted the invitation.

**»» conferenceId**: The ID of the conference.
Can be used by developers to keep track of conferences, should not be displayed to users.
Values for solution types:
- "eventHangout": unset.
- "eventNamedHangout": the name of the Hangout.
- "hangoutsMeet": the 10-letter meeting code, for example "aaa-bbbb-ccc".
- "addOn": defined by 3P conference provider.  Optional.

**»»»» type**: The conference solution type.
If a client encounters an unfamiliar or empty type, it should still be able to display the entry points. However, it should disallow modifications.
The possible values are:
- "eventHangout" for Hangouts for consumers (http://hangouts.google.com)
- "eventNamedHangout" for classic Hangouts for G Suite users (http://hangouts.google.com)
- "hangoutsMeet" for Hangouts Meet (http://meet.google.com)
- "addOn" for 3P conference providers

**»»» requestId**: The client-generated unique ID for this request.
Clients should regenerate this ID for every new request. If an ID provided is the same as for the previous request, the request is ignored.

**»»»» statusCode**: The current status of the conference create request. Read-only.
The possible values are:
- "pending": the conference create request is still being processed.
- "success": the conference create request succeeded, the entry points are populated.
- "failure": the conference create request failed, there are no entry points.

**»»» entryPoints**: Information about individual conference entry points, such as URLs or phone numbers.
All of them must belong to the same conference.
Either conferenceSolution and at least one entryPoint, or createRequest is required.

**»»»» accessCode**: The access code to access the conference. The maximum length is 128 characters.
When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
Optional.

**»»»» entryPointType**: The type of the conference entry point.
Possible values are:
- "video" - joining a conference over HTTP. A conference can have zero or one video entry point.
- "phone" - joining a conference by dialing a phone number. A conference can have zero or more phone entry points.
- "sip" - joining a conference over SIP. A conference can have zero or one sip entry point.
- "more" - further conference joining instructions, for example additional phone numbers. A conference can have zero or one more entry point. A conference with only a more entry point is not a valid conference.

**»»»» label**: The label for the URI. Visible to end users. Not localized. The maximum length is 512 characters.
Examples:
- for video: meet.google.com/aaa-bbbb-ccc
- for phone: +1 123 268 2601
- for sip: 12345678@altostrat.com
- for more: should not be filled
Optional.

**»»»» meetingCode**: The meeting code to access the conference. The maximum length is 128 characters.
When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
Optional.

**»»»» passcode**: The passcode to access the conference. The maximum length is 128 characters.
When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.

**»»»» password**: The password to access the conference. The maximum length is 128 characters.
When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
Optional.

**»»»» pin**: The PIN to access the conference. The maximum length is 128 characters.
When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
Optional.

**»»»» regionCode**: The CLDR/ISO 3166 region code for the country associated with this phone access. Example: "SE" for Sweden.
Calendar backend will populate this field only for EntryPointType.PHONE.

**»»»» uri**: The URI of the entry point. The maximum length is 1300 characters.
Format:
- for video, http: or https: schema is required.
- for phone, tel: schema is required. The URI should include the entire dial sequence (e.g., tel:+12345678900,,,123456789;1234).
- for sip, sip: schema is required, e.g., sip:12345678@myprovider.com.
- for more, http: or https: schema is required.

**»»»»» signature**: The signature of the conference data.
Generated on server side. Must be preserved while copying the conference data between events, otherwise the conference data will not be copied.
Unset for a conference with a failed create request.
Optional for a conference with a pending create request.

**»»»»»» display**: The gadget's display mode. Optional. Possible values are:
- "icon" - The gadget displays next to the event's title in the calendar view.
- "chip" - The gadget displays when the event is clicked.

**»»»»» iCalUID**: Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring systems and must be supplied when importing events via the import method.
Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.

**»»»»» id**: Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules:
- characters allowed in the ID are those used in base32hex encoding, i.e. lowercase letters a-v and digits 0-9, see section 3.1.2 in RFC2938
- the length of the ID must be between 5 and 1024 characters
- the ID must be unique per calendar  Due to the globally distributed nature of the system, we cannot guarantee that ID collisions will be detected at event creation time. To minimize the risk of collisions we recommend using an established UUID algorithm such as one described in RFC4122.
If you do not specify an ID, it will be automatically generated by the server.
Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.

**»»»»»»» method**: The method used by this reminder. Possible values are:
- "email" - Reminders are sent via email.
- "sms" - Deprecated. Once this feature is shutdown, the API will no longer return reminders using this method. Any newly added SMS reminders will be ignored. See  Google Calendar SMS notifications to be removed for more information.
Reminders are sent via SMS. These are only available for G Suite customers. Requests to set SMS reminders for other account types are ignored.
- "popup" - Reminders are sent via a UI popup.
Required when adding a reminder.

**»»»»»»» minutes**: Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320 (4 weeks in minutes).
Required when adding a reminder.

**»»»»» status**: Status of the event. Optional. Possible values are:
- "confirmed" - The event is confirmed. This is the default status.
- "tentative" - The event is tentatively confirmed.
- "cancelled" - The event is cancelled (deleted). The list method returns cancelled events only on incremental sync (when syncToken or updatedMin are specified) or if the showDeleted flag is set to true. The get method always returns them.
A cancelled status represents two different states depending on the event type:
- Cancelled exceptions of an uncancelled recurring event indicate that this instance should no longer be presented to the user. Clients should store these events for the lifetime of the parent recurring event.
Cancelled exceptions are only guaranteed to have values for the id, recurringEventId and originalStartTime fields populated. The other fields might be empty.
- All other cancelled events represent deleted events. Clients should remove their locally synced copies. Such cancelled events will eventually disappear, so do not rely on them being available indefinitely.
Deleted events are only guaranteed to have the id field populated.   On the organizer's calendar, cancelled events continue to expose event details (summary, location, etc.) so that they can be restored (undeleted). Similarly, the events to which the user was invited and that they manually removed continue to provide details. However, incremental sync requests with showDeleted set to false will not return these details.
If an event changes its organizer (for example via the move operation) and the original organizer is not on the attendee list, it will leave behind a cancelled event where only the id field is guaranteed to be populated.

**»»»»» transparency**: Whether the event blocks time on the calendar. Optional. Possible values are:
- "opaque" - Default value. The event does block time on the calendar. This is equivalent to setting Show me as to Busy in the Calendar UI.
- "transparent" - The event does not block time on the calendar. This is equivalent to setting Show me as to Available in the Calendar UI.

**»»»»» visibility**: Visibility of the event. Optional. Possible values are:
- "default" - Uses the default visibility for events on the calendar. This is the default value.
- "public" - The event is public and event details are visible to all readers of the calendar.
- "private" - The event is private and only event attendees may view event details.
- "confidential" - The event is private. This value is provided for compatibility reasons.

#### Enumerated Values

|Parameter|Value|
|---|---|
|sendUpdates|all|
|sendUpdates|externalOnly|
|sendUpdates|none|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.events.patch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[Event](#schemaevent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events )
</aside>

## *put*calendar.events.update

<a id="opIdcalendar.events.update"></a>

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
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
PUT https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId} HTTP/1.1
Host: www.googleapis.com
Content-Type: application/json
Accept: */*

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}',
  method: 'put',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "anyoneCanAddSelf": false,
  "attachments": [
    {
      "fileId": "string",
      "fileUrl": "string",
      "iconLink": "string",
      "mimeType": "string",
      "title": "string"
    }
  ],
  "attendees": [
    {
      "additionalGuests": 0,
      "comment": "string",
      "displayName": "string",
      "email": "string",
      "id": "string",
      "optional": false,
      "organizer": true,
      "resource": false,
      "responseStatus": "string",
      "self": false
    }
  ],
  "attendeesOmitted": false,
  "colorId": "string",
  "conferenceData": {
    "conferenceId": "string",
    "conferenceSolution": {
      "iconUri": "string",
      "key": {
        "type": "string"
      },
      "name": "string"
    },
    "createRequest": {
      "conferenceSolutionKey": {
        "type": "string"
      },
      "requestId": "string",
      "status": {
        "statusCode": "string"
      }
    },
    "entryPoints": [
      {
        "accessCode": "string",
        "entryPointFeatures": [
          "string"
        ],
        "entryPointType": "string",
        "label": "string",
        "meetingCode": "string",
        "passcode": "string",
        "password": "string",
        "pin": "string",
        "regionCode": "string",
        "uri": "string"
      }
    ],
    "notes": "string",
    "parameters": {
      "addOnParameters": {
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "signature": "string"
  },
  "created": "2019-11-22T00:09:35Z",
  "creator": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "description": "string",
  "end": {
    "date": "2019-11-22",
    "dateTime": "2019-11-22T00:09:35Z",
    "timeZone": "string"
  },
  "endTimeUnspecified": false,
  "etag": "string",
  "extendedProperties": {
    "private": {
      "property1": "string",
      "property2": "string"
    },
    "shared": {
      "property1": "string",
      "property2": "string"
    }
  },
  "gadget": {
    "display": "string",
    "height": 0,
    "iconLink": "string",
    "link": "string",
    "preferences": {
      "property1": "string",
      "property2": "string"
    },
    "title": "string",
    "type": "string",
    "width": 0
  },
  "guestsCanInviteOthers": true,
  "guestsCanModify": false,
  "guestsCanSeeOtherGuests": true,
  "hangoutLink": "string",
  "htmlLink": "string",
  "iCalUID": "string",
  "id": "string",
  "kind": "calendar#event",
  "location": "string",
  "locked": false,
  "organizer": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "originalStartTime": {
    "date": "2019-11-22",
    "dateTime": "2019-11-22T00:09:35Z",
    "timeZone": "string"
  },
  "privateCopy": false,
  "recurrence": [
    "string"
  ],
  "recurringEventId": "string",
  "reminders": {
    "overrides": [
      {
        "method": "string",
        "minutes": 0
      }
    ],
    "useDefault": true
  },
  "sequence": 0,
  "source": {
    "title": "string",
    "url": "string"
  },
  "start": {
    "date": "2019-11-22",
    "dateTime": "2019-11-22T00:09:35Z",
    "timeZone": "string"
  },
  "status": "string",
  "summary": "string",
  "transparency": "opaque",
  "updated": "2019-11-22T00:09:35Z",
  "visibility": "default"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}',
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

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.put('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.put 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`PUT /calendars/{calendarId}/events/{eventId}`

Updates an event.

> Body parameter

```json
{
  "anyoneCanAddSelf": false,
  "attachments": [
    {
      "fileId": "string",
      "fileUrl": "string",
      "iconLink": "string",
      "mimeType": "string",
      "title": "string"
    }
  ],
  "attendees": [
    {
      "additionalGuests": 0,
      "comment": "string",
      "displayName": "string",
      "email": "string",
      "id": "string",
      "optional": false,
      "organizer": true,
      "resource": false,
      "responseStatus": "string",
      "self": false
    }
  ],
  "attendeesOmitted": false,
  "colorId": "string",
  "conferenceData": {
    "conferenceId": "string",
    "conferenceSolution": {
      "iconUri": "string",
      "key": {
        "type": "string"
      },
      "name": "string"
    },
    "createRequest": {
      "conferenceSolutionKey": {
        "type": "string"
      },
      "requestId": "string",
      "status": {
        "statusCode": "string"
      }
    },
    "entryPoints": [
      {
        "accessCode": "string",
        "entryPointFeatures": [
          "string"
        ],
        "entryPointType": "string",
        "label": "string",
        "meetingCode": "string",
        "passcode": "string",
        "password": "string",
        "pin": "string",
        "regionCode": "string",
        "uri": "string"
      }
    ],
    "notes": "string",
    "parameters": {
      "addOnParameters": {
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "signature": "string"
  },
  "created": "2019-11-22T00:09:35Z",
  "creator": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "description": "string",
  "end": {
    "date": "2019-11-22",
    "dateTime": "2019-11-22T00:09:35Z",
    "timeZone": "string"
  },
  "endTimeUnspecified": false,
  "etag": "string",
  "extendedProperties": {
    "private": {
      "property1": "string",
      "property2": "string"
    },
    "shared": {
      "property1": "string",
      "property2": "string"
    }
  },
  "gadget": {
    "display": "string",
    "height": 0,
    "iconLink": "string",
    "link": "string",
    "preferences": {
      "property1": "string",
      "property2": "string"
    },
    "title": "string",
    "type": "string",
    "width": 0
  },
  "guestsCanInviteOthers": true,
  "guestsCanModify": false,
  "guestsCanSeeOtherGuests": true,
  "hangoutLink": "string",
  "htmlLink": "string",
  "iCalUID": "string",
  "id": "string",
  "kind": "calendar#event",
  "location": "string",
  "locked": false,
  "organizer": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "originalStartTime": {
    "date": "2019-11-22",
    "dateTime": "2019-11-22T00:09:35Z",
    "timeZone": "string"
  },
  "privateCopy": false,
  "recurrence": [
    "string"
  ],
  "recurringEventId": "string",
  "reminders": {
    "overrides": [
      {
        "method": "string",
        "minutes": 0
      }
    ],
    "useDefault": true
  },
  "sequence": 0,
  "source": {
    "title": "string",
    "url": "string"
  },
  "start": {
    "date": "2019-11-22",
    "dateTime": "2019-11-22T00:09:35Z",
    "timeZone": "string"
  },
  "status": "string",
  "summary": "string",
  "transparency": "opaque",
  "updated": "2019-11-22T00:09:35Z",
  "visibility": "default"
}
```

<span class="no-format">
<h3 id="calendar.events.update-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events )
</div>
</div>

<span class="title my-4">Path Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>calendarId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>eventId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Event identifier.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>alwaysIncludeEmail

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>conferenceDataVersion

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">integer</span>
</div>
<div>
<div class="description">
<p>Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>maxAttendees

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">integer</span>
</div>
<div>
<div class="description">
<p>The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>sendNotifications

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use sendUpdates instead.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>sendUpdates

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Guests who should receive notifications about the event update (for example, title changes, etc.).</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>supportsAttachments

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether API client performing operation supports event attachments. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">REQUEST BODY SCHEMA</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>anyoneCanAddSelf

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether anyone can invite themselves to the event (currently works for Google+ events only). Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>attachments

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">array</span>
</div>
<div>
<div class="description">
<p>File attachments for the event. Currently only Google Drive attachments are supported.
In order to modify attachments the supportsAttachments request parameter should be set to true.
There can be at most 25 attachments per event,</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>attendees

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">array</span>
</div>
<div>
<div class="description">
<p>The attendees of the event. See the Events with attendees guide for more information on scheduling events with other calendar users.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>attendeesOmitted

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether attendees may have been omitted from the event's representation. When retrieving an event, this may be due to a restriction specified by the maxAttendee query parameter. When updating an event, this can be used to only update the participant's response. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>colorId

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The color of the event. This is an ID referring to an entry in the event section of the colors definition (see the  colors endpoint). Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="conferenceData5526" >
<td class="tree">
<span class="field-node"></span>conferenceData

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>undefined</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>created

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Creation time of the event (as a RFC3339 timestamp). Read-only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="creator1897" >
<td class="tree">
<span class="field-node"></span>creator

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>The creator of the event. Read-only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>description

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Description of the event. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="start8249" >
<td class="tree">
<span class="field-node"></span>start

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>undefined</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>endTimeUnspecified

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether the end time is actually unspecified. An end time is still provided for compatibility reasons, even if this attribute is set to True. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>etag

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>ETag of the resource.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="extendedProperties6732" >
<td class="tree">
<span class="field-node"></span>extendedProperties

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>Extended properties of the event.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="gadget8689" >
<td class="tree">
<span class="field-node"></span>gadget

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>A gadget that extends this event.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>guestsCanInviteOthers

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether attendees other than the organizer can invite others to the event. Optional. The default is True.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>guestsCanModify

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether attendees other than the organizer can modify the event. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>guestsCanSeeOtherGuests

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether attendees other than the organizer can see who the event's attendees are. Optional. The default is True.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>hangoutLink

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An absolute link to the Google+ hangout associated with this event. Read-only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>htmlLink

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An absolute link to this event in the Google Calendar Web UI. Read-only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>iCalUID

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring systems and must be supplied when importing events via the import method.
Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>id

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules:
- characters allowed in the ID are those used in base32hex encoding, i.e. lowercase letters a-v and digits 0-9, see section 3.1.2 in RFC2938
- the length of the ID must be between 5 and 1024 characters
- the ID must be unique per calendar  Due to the globally distributed nature of the system, we cannot guarantee that ID collisions will be detected at event creation time. To minimize the risk of collisions we recommend using an established UUID algorithm such as one described in RFC4122.
If you do not specify an ID, it will be automatically generated by the server.
Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>kind

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Type of the resource ("calendar#event").</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>location

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Geographic location of the event as free-form text. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>locked

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether this is a locked event copy where no changes can be made to the main event fields "summary", "description", "location", "start", "end" or "recurrence". The default is False. Read-Only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="organizer9423" >
<td class="tree">
<span class="field-node"></span>organizer

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees with the organizer field set to True. To change the organizer, use the move operation. Read-only, except when importing an event.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="start4898" >
<td class="tree">
<span class="field-node"></span>start

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>undefined</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>privateCopy

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>If set to True, Event propagation is disabled. Note that it is not the same thing as Private event properties. Optional. Immutable. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>recurrence

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">array</span>
</div>
<div>
<div class="description">
<p>List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event, as specified in RFC5545. Note that DTSTART and DTEND lines are not allowed in this field; event start and end times are specified in the start and end fields. This field is omitted for single events or instances of recurring events.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>recurringEventId

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>For an instance of a recurring event, this is the id of the recurring event to which this instance belongs. Immutable.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="reminders6673" >
<td class="tree">
<span class="field-node"></span>reminders

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>Information about the event's reminders for the authenticated user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>sequence

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">integer</span>
</div>
<div>
<div class="description">
<p>Sequence number as per iCalendar.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="source2793" >
<td class="tree">
<span class="field-node"></span>source

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>Source from which the event was created. For example, a web page, an email message or any document identifiable by an URL with HTTP or HTTPS scheme. Can only be seen or modified by the creator of the event.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="start4941" >
<td class="tree">
<span class="field-node"></span>start

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>undefined</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>status

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Status of the event. Optional. Possible values are:
- "confirmed" - The event is confirmed. This is the default status.
- "tentative" - The event is tentatively confirmed.
- "cancelled" - The event is cancelled (deleted). The list method returns cancelled events only on incremental sync (when syncToken or updatedMin are specified) or if the showDeleted flag is set to true. The get method always returns them.
A cancelled status represents two different states depending on the event type:
- Cancelled exceptions of an uncancelled recurring event indicate that this instance should no longer be presented to the user. Clients should store these events for the lifetime of the parent recurring event.
Cancelled exceptions are only guaranteed to have values for the id, recurringEventId and originalStartTime fields populated. The other fields might be empty.
- All other cancelled events represent deleted events. Clients should remove their locally synced copies. Such cancelled events will eventually disappear, so do not rely on them being available indefinitely.
Deleted events are only guaranteed to have the id field populated.   On the organizer's calendar, cancelled events continue to expose event details (summary, location, etc.) so that they can be restored (undeleted). Similarly, the events to which the user was invited and that they manually removed continue to provide details. However, incremental sync requests with showDeleted set to false will not return these details.
If an event changes its organizer (for example via the move operation) and the original organizer is not on the attendee list, it will leave behind a cancelled event where only the id field is guaranteed to be populated.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>summary

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Title of the event.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>transparency

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Whether the event blocks time on the calendar. Optional. Possible values are:
- "opaque" - Default value. The event does block time on the calendar. This is equivalent to setting Show me as to Busy in the Calendar UI.
- "transparent" - The event does not block time on the calendar. This is equivalent to setting Show me as to Available in the Calendar UI.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>updated

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Last modification time of the event (as a RFC3339 timestamp). Read-only.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>visibility

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Visibility of the event. Optional. Possible values are:
- "default" - Uses the default visibility for events on the calendar. This is the default value.
- "public" - The event is public and event details are visible to all readers of the calendar.
- "private" - The event is private and only event attendees may view event details.
- "confidential" - The event is private. This value is provided for compatibility reasons.</p>
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
|alwaysIncludeEmail|query|boolean|false|Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|conferenceDataVersion|query|integer|false|Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.|
|eventId|path|string|true|Event identifier.|
|maxAttendees|query|integer|false|The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.|
|sendNotifications|query|boolean|false|Deprecated. Please use sendUpdates instead.|
|sendUpdates|query|string|false|Guests who should receive notifications about the event update (for example, title changes, etc.).|
|supportsAttachments|query|boolean|false|Whether API client performing operation supports event attachments. Optional. The default is False.|
|body|body|[Event](#schemaevent)|false|none|
|» anyoneCanAddSelf|body|boolean|false|Whether anyone can invite themselves to the event (currently works for Google+ events only). Optional. The default is False.|
|» attachments|body|[[EventAttachment](#schemaeventattachment)]|false|File attachments for the event. Currently only Google Drive attachments are supported.|
|»» fileId|body|string|false|ID of the attached file. Read-only.|
|»» fileUrl|body|string|false|URL link to the attachment.|
|»» iconLink|body|string|false|URL link to the attachment's icon. Read-only.|
|»» mimeType|body|string|false|Internet media type (MIME type) of the attachment.|
|»» title|body|string|false|Attachment title.|
|» attendees|body|[[EventAttendee](#schemaeventattendee)]|false|The attendees of the event. See the Events with attendees guide for more information on scheduling events with other calendar users.|
|»» additionalGuests|body|integer(int32)|false|Number of additional guests. Optional. The default is 0.|
|»» comment|body|string|false|The attendee's response comment. Optional.|
|»» displayName|body|string|false|The attendee's name, if available. Optional.|
|»» email|body|string|false|The attendee's email address, if available. This field must be present when adding an attendee. It must be a valid email address as per RFC5322.|
|»» id|body|string|false|The attendee's Profile ID, if available. It corresponds to the id field in the People collection of the Google+ API|
|»» optional|body|boolean|false|Whether this is an optional attendee. Optional. The default is False.|
|»» organizer|body|boolean|false|Whether the attendee is the organizer of the event. Read-only. The default is False.|
|»» resource|body|boolean|false|Whether the attendee is a resource. Can only be set when the attendee is added to the event for the first time. Subsequent modifications are ignored. Optional. The default is False.|
|»» responseStatus|body|string|false|The attendee's response status. Possible values are:|
|»» self|body|boolean|false|Whether this entry represents the calendar on which this copy of the event appears. Read-only. The default is False.|
|» attendeesOmitted|body|boolean|false|Whether attendees may have been omitted from the event's representation. When retrieving an event, this may be due to a restriction specified by the maxAttendee query parameter. When updating an event, this can be used to only update the participant's response. Optional. The default is False.|
|» colorId|body|string|false|The color of the event. This is an ID referring to an entry in the event section of the colors definition (see the  colors endpoint). Optional.|
|» conferenceData|body|[ConferenceData](#schemaconferencedata)|false|none|
|»» conferenceId|body|string|false|The ID of the conference.|
|»» conferenceSolution|body|[ConferenceSolution](#schemaconferencesolution)|false|none|
|»»» iconUri|body|string|false|The user-visible icon for this solution.|
|»»» key|body|[ConferenceSolutionKey](#schemaconferencesolutionkey)|false|none|
|»»»» type|body|string|false|The conference solution type.|
|»»» name|body|string|false|The user-visible name of this solution. Not localized.|
|»» createRequest|body|[CreateConferenceRequest](#schemacreateconferencerequest)|false|none|
|»»» conferenceSolutionKey|body|[ConferenceSolutionKey](#schemaconferencesolutionkey)|false|none|
|»»» requestId|body|string|false|The client-generated unique ID for this request.|
|»»» status|body|[ConferenceRequestStatus](#schemaconferencerequeststatus)|false|none|
|»»»» statusCode|body|string|false|The current status of the conference create request. Read-only.|
|»»» entryPoints|body|[[EntryPoint](#schemaentrypoint)]|false|Information about individual conference entry points, such as URLs or phone numbers.|
|»»»» accessCode|body|string|false|The access code to access the conference. The maximum length is 128 characters.|
|»»»» entryPointFeatures|body|[string]|false|Features of the entry point, such as being toll or toll-free. One entry point can have multiple features. However, toll and toll-free cannot be both set on the same entry point.|
|»»»» entryPointType|body|string|false|The type of the conference entry point.|
|»»»» label|body|string|false|The label for the URI. Visible to end users. Not localized. The maximum length is 512 characters.|
|»»»» meetingCode|body|string|false|The meeting code to access the conference. The maximum length is 128 characters.|
|»»»» passcode|body|string|false|The passcode to access the conference. The maximum length is 128 characters.|
|»»»» password|body|string|false|The password to access the conference. The maximum length is 128 characters.|
|»»»» pin|body|string|false|The PIN to access the conference. The maximum length is 128 characters.|
|»»»» regionCode|body|string|false|The CLDR/ISO 3166 region code for the country associated with this phone access. Example: "SE" for Sweden.|
|»»»» uri|body|string|false|The URI of the entry point. The maximum length is 1300 characters.|
|»»» notes|body|string|false|Additional notes (such as instructions from the domain administrator, legal notices) to display to the user. Can contain HTML. The maximum length is 2048 characters. Optional.|
|»»» parameters|body|[ConferenceParameters](#schemaconferenceparameters)|false|none|
|»»»» addOnParameters|body|[ConferenceParametersAddOnParameters](#schemaconferenceparametersaddonparameters)|false|none|
|»»»»» parameters|body|object|false|none|
|»»»»»» **additionalProperties**|body|string|false|none|
|»»»»» signature|body|string|false|The signature of the conference data.|
|»»»» created|body|string(date-time)|false|Creation time of the event (as a RFC3339 timestamp). Read-only.|
|»»»» creator|body|object|false|The creator of the event. Read-only.|
|»»»»» displayName|body|string|false|The creator's name, if available.|
|»»»»» email|body|string|false|The creator's email address, if available.|
|»»»»» id|body|string|false|The creator's Profile ID, if available. It corresponds to the id field in the People collection of the Google+ API|
|»»»»» self|body|boolean|false|Whether the creator corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.|
|»»»» description|body|string|false|Description of the event. Optional.|
|»»»» end|body|[EventDateTime](#schemaeventdatetime)|false|none|
|»»»»» date|body|string(date)|false|The date, in the format "yyyy-mm-dd", if this is an all-day event.|
|»»»»» dateTime|body|string(date-time)|false|The time, as a combined date-time value (formatted according to RFC3339). A time zone offset is required unless a time zone is explicitly specified in timeZone.|
|»»»»» timeZone|body|string|false|The time zone in which the time is specified. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) For recurring events this field is required and specifies the time zone in which the recurrence is expanded. For single events this field is optional and indicates a custom time zone for the event start/end.|
|»»»» endTimeUnspecified|body|boolean|false|Whether the end time is actually unspecified. An end time is still provided for compatibility reasons, even if this attribute is set to True. The default is False.|
|»»»» etag|body|string|false|ETag of the resource.|
|»»»» extendedProperties|body|object|false|Extended properties of the event.|
|»»»»» private|body|object|false|Properties that are private to the copy of the event that appears on this calendar.|
|»»»»»» **additionalProperties**|body|string|false|The name of the private property and the corresponding value.|
|»»»»» shared|body|object|false|Properties that are shared between copies of the event on other attendees' calendars.|
|»»»»»» **additionalProperties**|body|string|false|The name of the shared property and the corresponding value.|
|»»»»» gadget|body|object|false|A gadget that extends this event.|
|»»»»»» display|body|string|false|The gadget's display mode. Optional. Possible values are:|
|»»»»»» height|body|integer(int32)|false|The gadget's height in pixels. The height must be an integer greater than 0. Optional.|
|»»»»»» iconLink|body|string|false|The gadget's icon URL. The URL scheme must be HTTPS.|
|»»»»»» link|body|string|false|The gadget's URL. The URL scheme must be HTTPS.|
|»»»»»» preferences|body|object|false|Preferences.|
|»»»»»»» **additionalProperties**|body|string|false|The preference name and corresponding value.|
|»»»»»» title|body|string|false|The gadget's title.|
|»»»»»» type|body|string|false|The gadget's type.|
|»»»»»» width|body|integer(int32)|false|The gadget's width in pixels. The width must be an integer greater than 0. Optional.|
|»»»»» guestsCanInviteOthers|body|boolean|false|Whether attendees other than the organizer can invite others to the event. Optional. The default is True.|
|»»»»» guestsCanModify|body|boolean|false|Whether attendees other than the organizer can modify the event. Optional. The default is False.|
|»»»»» guestsCanSeeOtherGuests|body|boolean|false|Whether attendees other than the organizer can see who the event's attendees are. Optional. The default is True.|
|»»»»» hangoutLink|body|string|false|An absolute link to the Google+ hangout associated with this event. Read-only.|
|»»»»» htmlLink|body|string|false|An absolute link to this event in the Google Calendar Web UI. Read-only.|
|»»»»» iCalUID|body|string|false|Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring systems and must be supplied when importing events via the import method.|
|»»»»» id|body|string|false|Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules:|
|»»»»» kind|body|string|false|Type of the resource ("calendar#event").|
|»»»»» location|body|string|false|Geographic location of the event as free-form text. Optional.|
|»»»»» locked|body|boolean|false|Whether this is a locked event copy where no changes can be made to the main event fields "summary", "description", "location", "start", "end" or "recurrence". The default is False. Read-Only.|
|»»»»» organizer|body|object|false|The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees with the organizer field set to True. To change the organizer, use the move operation. Read-only, except when importing an event.|
|»»»»»» displayName|body|string|false|The organizer's name, if available.|
|»»»»»» email|body|string|false|The organizer's email address, if available. It must be a valid email address as per RFC5322.|
|»»»»»» id|body|string|false|The organizer's Profile ID, if available. It corresponds to the id field in the People collection of the Google+ API|
|»»»»»» self|body|boolean|false|Whether the organizer corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.|
|»»»»» originalStartTime|body|[EventDateTime](#schemaeventdatetime)|false|none|
|»»»»» privateCopy|body|boolean|false|If set to True, Event propagation is disabled. Note that it is not the same thing as Private event properties. Optional. Immutable. The default is False.|
|»»»»» recurrence|body|[string]|false|List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event, as specified in RFC5545. Note that DTSTART and DTEND lines are not allowed in this field; event start and end times are specified in the start and end fields. This field is omitted for single events or instances of recurring events.|
|»»»»» recurringEventId|body|string|false|For an instance of a recurring event, this is the id of the recurring event to which this instance belongs. Immutable.|
|»»»»» reminders|body|object|false|Information about the event's reminders for the authenticated user.|
|»»»»»» overrides|body|[[EventReminder](#schemaeventreminder)]|false|If the event doesn't use the default reminders, this lists the reminders specific to the event, or, if not set, indicates that no reminders are set for this event. The maximum number of override reminders is 5.|
|»»»»»»» method|body|string|false|The method used by this reminder. Possible values are:|
|»»»»»»» minutes|body|integer(int32)|false|Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320 (4 weeks in minutes).|
|»»»»»» useDefault|body|boolean|false|Whether the default reminders of the calendar apply to the event.|
|»»»»» sequence|body|integer(int32)|false|Sequence number as per iCalendar.|
|»»»»» source|body|object|false|Source from which the event was created. For example, a web page, an email message or any document identifiable by an URL with HTTP or HTTPS scheme. Can only be seen or modified by the creator of the event.|
|»»»»»» title|body|string|false|Title of the source; for example a title of a web page or an email subject.|
|»»»»»» url|body|string|false|URL of the source pointing to a resource. The URL scheme must be HTTP or HTTPS.|
|»»»»» start|body|[EventDateTime](#schemaeventdatetime)|false|none|
|»»»»» status|body|string|false|Status of the event. Optional. Possible values are:|
|»»»»» summary|body|string|false|Title of the event.|
|»»»»» transparency|body|string|false|Whether the event blocks time on the calendar. Optional. Possible values are:|
|»»»»» updated|body|string(date-time)|false|Last modification time of the event (as a RFC3339 timestamp). Read-only.|
|»»»»» visibility|body|string|false|Visibility of the event. Optional. Possible values are:|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Detailed descriptions

**sendNotifications**: Deprecated. Please use sendUpdates instead.

Whether to send notifications about the event update (for example, description changes, etc.). Note that some emails might still be sent even if you set the value to false. The default is false.

**» attachments**: File attachments for the event. Currently only Google Drive attachments are supported.
In order to modify attachments the supportsAttachments request parameter should be set to true.
There can be at most 25 attachments per event,

**»» fileId**: ID of the attached file. Read-only.
For Google Drive files, this is the ID of the corresponding Files resource entry in the Drive API.

**»» fileUrl**: URL link to the attachment.
For adding Google Drive file attachments use the same format as in alternateLink property of the Files resource in the Drive API.
Required when adding an attachment.

**»» email**: The attendee's email address, if available. This field must be present when adding an attendee. It must be a valid email address as per RFC5322.
Required when adding an attendee.

**»» responseStatus**: The attendee's response status. Possible values are:
- "needsAction" - The attendee has not responded to the invitation.
- "declined" - The attendee has declined the invitation.
- "tentative" - The attendee has tentatively accepted the invitation.
- "accepted" - The attendee has accepted the invitation.

**»» conferenceId**: The ID of the conference.
Can be used by developers to keep track of conferences, should not be displayed to users.
Values for solution types:
- "eventHangout": unset.
- "eventNamedHangout": the name of the Hangout.
- "hangoutsMeet": the 10-letter meeting code, for example "aaa-bbbb-ccc".
- "addOn": defined by 3P conference provider.  Optional.

**»»»» type**: The conference solution type.
If a client encounters an unfamiliar or empty type, it should still be able to display the entry points. However, it should disallow modifications.
The possible values are:
- "eventHangout" for Hangouts for consumers (http://hangouts.google.com)
- "eventNamedHangout" for classic Hangouts for G Suite users (http://hangouts.google.com)
- "hangoutsMeet" for Hangouts Meet (http://meet.google.com)
- "addOn" for 3P conference providers

**»»» requestId**: The client-generated unique ID for this request.
Clients should regenerate this ID for every new request. If an ID provided is the same as for the previous request, the request is ignored.

**»»»» statusCode**: The current status of the conference create request. Read-only.
The possible values are:
- "pending": the conference create request is still being processed.
- "success": the conference create request succeeded, the entry points are populated.
- "failure": the conference create request failed, there are no entry points.

**»»» entryPoints**: Information about individual conference entry points, such as URLs or phone numbers.
All of them must belong to the same conference.
Either conferenceSolution and at least one entryPoint, or createRequest is required.

**»»»» accessCode**: The access code to access the conference. The maximum length is 128 characters.
When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
Optional.

**»»»» entryPointType**: The type of the conference entry point.
Possible values are:
- "video" - joining a conference over HTTP. A conference can have zero or one video entry point.
- "phone" - joining a conference by dialing a phone number. A conference can have zero or more phone entry points.
- "sip" - joining a conference over SIP. A conference can have zero or one sip entry point.
- "more" - further conference joining instructions, for example additional phone numbers. A conference can have zero or one more entry point. A conference with only a more entry point is not a valid conference.

**»»»» label**: The label for the URI. Visible to end users. Not localized. The maximum length is 512 characters.
Examples:
- for video: meet.google.com/aaa-bbbb-ccc
- for phone: +1 123 268 2601
- for sip: 12345678@altostrat.com
- for more: should not be filled
Optional.

**»»»» meetingCode**: The meeting code to access the conference. The maximum length is 128 characters.
When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
Optional.

**»»»» passcode**: The passcode to access the conference. The maximum length is 128 characters.
When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.

**»»»» password**: The password to access the conference. The maximum length is 128 characters.
When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
Optional.

**»»»» pin**: The PIN to access the conference. The maximum length is 128 characters.
When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.
Optional.

**»»»» regionCode**: The CLDR/ISO 3166 region code for the country associated with this phone access. Example: "SE" for Sweden.
Calendar backend will populate this field only for EntryPointType.PHONE.

**»»»» uri**: The URI of the entry point. The maximum length is 1300 characters.
Format:
- for video, http: or https: schema is required.
- for phone, tel: schema is required. The URI should include the entire dial sequence (e.g., tel:+12345678900,,,123456789;1234).
- for sip, sip: schema is required, e.g., sip:12345678@myprovider.com.
- for more, http: or https: schema is required.

**»»»»» signature**: The signature of the conference data.
Generated on server side. Must be preserved while copying the conference data between events, otherwise the conference data will not be copied.
Unset for a conference with a failed create request.
Optional for a conference with a pending create request.

**»»»»»» display**: The gadget's display mode. Optional. Possible values are:
- "icon" - The gadget displays next to the event's title in the calendar view.
- "chip" - The gadget displays when the event is clicked.

**»»»»» iCalUID**: Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring systems and must be supplied when importing events via the import method.
Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.

**»»»»» id**: Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules:
- characters allowed in the ID are those used in base32hex encoding, i.e. lowercase letters a-v and digits 0-9, see section 3.1.2 in RFC2938
- the length of the ID must be between 5 and 1024 characters
- the ID must be unique per calendar  Due to the globally distributed nature of the system, we cannot guarantee that ID collisions will be detected at event creation time. To minimize the risk of collisions we recommend using an established UUID algorithm such as one described in RFC4122.
If you do not specify an ID, it will be automatically generated by the server.
Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.

**»»»»»»» method**: The method used by this reminder. Possible values are:
- "email" - Reminders are sent via email.
- "sms" - Deprecated. Once this feature is shutdown, the API will no longer return reminders using this method. Any newly added SMS reminders will be ignored. See  Google Calendar SMS notifications to be removed for more information.
Reminders are sent via SMS. These are only available for G Suite customers. Requests to set SMS reminders for other account types are ignored.
- "popup" - Reminders are sent via a UI popup.
Required when adding a reminder.

**»»»»»»» minutes**: Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320 (4 weeks in minutes).
Required when adding a reminder.

**»»»»» status**: Status of the event. Optional. Possible values are:
- "confirmed" - The event is confirmed. This is the default status.
- "tentative" - The event is tentatively confirmed.
- "cancelled" - The event is cancelled (deleted). The list method returns cancelled events only on incremental sync (when syncToken or updatedMin are specified) or if the showDeleted flag is set to true. The get method always returns them.
A cancelled status represents two different states depending on the event type:
- Cancelled exceptions of an uncancelled recurring event indicate that this instance should no longer be presented to the user. Clients should store these events for the lifetime of the parent recurring event.
Cancelled exceptions are only guaranteed to have values for the id, recurringEventId and originalStartTime fields populated. The other fields might be empty.
- All other cancelled events represent deleted events. Clients should remove their locally synced copies. Such cancelled events will eventually disappear, so do not rely on them being available indefinitely.
Deleted events are only guaranteed to have the id field populated.   On the organizer's calendar, cancelled events continue to expose event details (summary, location, etc.) so that they can be restored (undeleted). Similarly, the events to which the user was invited and that they manually removed continue to provide details. However, incremental sync requests with showDeleted set to false will not return these details.
If an event changes its organizer (for example via the move operation) and the original organizer is not on the attendee list, it will leave behind a cancelled event where only the id field is guaranteed to be populated.

**»»»»» transparency**: Whether the event blocks time on the calendar. Optional. Possible values are:
- "opaque" - Default value. The event does block time on the calendar. This is equivalent to setting Show me as to Busy in the Calendar UI.
- "transparent" - The event does not block time on the calendar. This is equivalent to setting Show me as to Available in the Calendar UI.

**»»»»» visibility**: Visibility of the event. Optional. Possible values are:
- "default" - Uses the default visibility for events on the calendar. This is the default value.
- "public" - The event is public and event details are visible to all readers of the calendar.
- "private" - The event is private and only event attendees may view event details.
- "confidential" - The event is private. This value is provided for compatibility reasons.

#### Enumerated Values

|Parameter|Value|
|---|---|
|sendUpdates|all|
|sendUpdates|externalOnly|
|sendUpdates|none|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.events.update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[Event](#schemaevent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events )
</aside>

## *get*calendar.events.instances

<a id="opIdcalendar.events.instances"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}/instances", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}/instances HTTP/1.1
Host: www.googleapis.com
Accept: */*

```

```javascript
var headers = {
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}/instances',
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
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}/instances',
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
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}/instances', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}/instances',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /calendars/{calendarId}/events/{eventId}/instances`

Returns instances of the specified recurring event.

<span class="no-format">
<h3 id="calendar.events.instances-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</div>
</div>

<span class="title my-4">Path Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>calendarId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>eventId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Recurring event identifier.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>alwaysIncludeEmail

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>maxAttendees

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">integer</span>
</div>
<div>
<div class="description">
<p>The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>maxResults

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">integer</span>
</div>
<div>
<div class="description">
<p>Maximum number of events returned on one result page. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>originalStart

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The original start time of the instance in the result. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>pageToken

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Token specifying which result page to return. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>showDeleted

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events will still be included if singleEvents is False. Optional. The default is False.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>timeMax

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>timeMin

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>timeZone

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Time zone used in the response. Optional. The default is the time zone of the calendar.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
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
|alwaysIncludeEmail|query|boolean|false|Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.|
|calendarId|path|string|true|Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.|
|eventId|path|string|true|Recurring event identifier.|
|maxAttendees|query|integer|false|The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.|
|maxResults|query|integer|false|Maximum number of events returned on one result page. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.|
|originalStart|query|string|false|The original start time of the instance in the result. Optional.|
|pageToken|query|string|false|Token specifying which result page to return. Optional.|
|showDeleted|query|boolean|false|Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events will still be included if singleEvents is False. Optional. The default is False.|
|timeMax|query|string|false|Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset.|
|timeMin|query|string|false|Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset.|
|timeZone|query|string|false|Time zone used in the response. Optional. The default is the time zone of the calendar.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.events.instances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[Events](#schemaevents)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</aside>

## *post*calendar.events.move

<a id="opIdcalendar.events.move"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}/move", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
POST https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}/move?destination=string HTTP/1.1
Host: www.googleapis.com
Accept: */*

```

```javascript
var headers = {
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}/move',
  method: 'post',
  data: '?destination=string',
  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}/move?destination=string',
{
  method: 'POST',

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
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}/move', params={
  'destination': 'string'
}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events/{eventId}/move',
  params: {
  'destination' => 'string'
}, headers: headers

p JSON.parse(result)

```

`POST /calendars/{calendarId}/events/{eventId}/move`

Moves an event to another calendar, i.e. changes an event's organizer.

<span class="no-format">
<h3 id="calendar.events.move-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events )
</div>
</div>

<span class="title my-4">Path Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>calendarId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Calendar identifier of the source calendar where the event currently is on.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>eventId

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Event identifier.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>destination

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Calendar identifier of the target calendar where the event is to be moved to.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>sendNotifications

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use sendUpdates instead.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>sendUpdates

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Guests who should receive notifications about the change of the event's organizer.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
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
|calendarId|path|string|true|Calendar identifier of the source calendar where the event currently is on.|
|destination|query|string|true|Calendar identifier of the target calendar where the event is to be moved to.|
|eventId|path|string|true|Event identifier.|
|sendNotifications|query|boolean|false|Deprecated. Please use sendUpdates instead.|
|sendUpdates|query|string|false|Guests who should receive notifications about the change of the event's organizer.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Detailed descriptions

**sendNotifications**: Deprecated. Please use sendUpdates instead.

Whether to send notifications about the change of the event's organizer. Note that some emails might still be sent even if you set the value to false. The default is false.

#### Enumerated Values

|Parameter|Value|
|---|---|
|sendUpdates|all|
|sendUpdates|externalOnly|
|sendUpdates|none|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.events.move-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[Event](#schemaevent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.events ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.events )
</aside>

<h1 id="calendar-freebusy">freebusy</h1>

## *post*calendar.freebusy.query

<a id="opIdcalendar.freebusy.query"></a>

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
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://www.googleapis.com/calendar/v3/freeBusy", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
POST https://www.googleapis.com/calendar/v3/freeBusy HTTP/1.1
Host: www.googleapis.com
Content-Type: application/json
Accept: */*

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/freeBusy',
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
  "calendarExpansionMax": 0,
  "groupExpansionMax": 0,
  "items": [
    {
      "id": "string"
    }
  ],
  "timeMax": "2019-11-22T00:09:35Z",
  "timeMin": "2019-11-22T00:09:35Z",
  "timeZone": "UTC"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/freeBusy',
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
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('https://www.googleapis.com/calendar/v3/freeBusy', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://www.googleapis.com/calendar/v3/freeBusy',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /freeBusy`

Returns free/busy information for a set of calendars.

> Body parameter

```json
{
  "calendarExpansionMax": 0,
  "groupExpansionMax": 0,
  "items": [
    {
      "id": "string"
    }
  ],
  "timeMax": "2019-11-22T00:09:35Z",
  "timeMin": "2019-11-22T00:09:35Z",
  "timeZone": "UTC"
}
```

<span class="no-format">
<h3 id="calendar.freebusy.query-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</div>
</div>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">REQUEST BODY SCHEMA</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>calendarExpansionMax

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">integer</span>
</div>
<div>
<div class="description">
<p>Maximal number of calendars for which FreeBusy information is to be provided. Optional. Maximum value is 50.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>groupExpansionMax

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">integer</span>
</div>
<div>
<div class="description">
<p>Maximal number of calendar identifiers to be provided for a single group. Optional. An error is returned for a group with more members than this value. Maximum value is 100.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>items

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">array</span>
</div>
<div>
<div class="description">
<p>List of calendars and/or groups to query.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>timeMax

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The end of the interval for the query formatted as per RFC3339.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>timeMin

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The start of the interval for the query formatted as per RFC3339.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>timeZone

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Time zone used in the response. Optional. The default is UTC.</p>
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
|body|body|[FreeBusyRequest](#schemafreebusyrequest)|false|none|
|» calendarExpansionMax|body|integer(int32)|false|Maximal number of calendars for which FreeBusy information is to be provided. Optional. Maximum value is 50.|
|» groupExpansionMax|body|integer(int32)|false|Maximal number of calendar identifiers to be provided for a single group. Optional. An error is returned for a group with more members than this value. Maximum value is 100.|
|» items|body|[[FreeBusyRequestItem](#schemafreebusyrequestitem)]|false|List of calendars and/or groups to query.|
|»» id|body|string|false|The identifier of a calendar or a group.|
|» timeMax|body|string(date-time)|false|The end of the interval for the query formatted as per RFC3339.|
|» timeMin|body|string(date-time)|false|The start of the interval for the query formatted as per RFC3339.|
|» timeZone|body|string|false|Time zone used in the response. Optional. The default is UTC.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.freebusy.query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[FreeBusyResponse](#schemafreebusyresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly )
</aside>

<h1 id="calendar-settings">settings</h1>

## *get*calendar.settings.list

<a id="opIdcalendar.settings.list"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://www.googleapis.com/calendar/v3/users/me/settings", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET https://www.googleapis.com/calendar/v3/users/me/settings HTTP/1.1
Host: www.googleapis.com
Accept: */*

```

```javascript
var headers = {
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/users/me/settings',
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
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/users/me/settings',
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
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('https://www.googleapis.com/calendar/v3/users/me/settings', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://www.googleapis.com/calendar/v3/users/me/settings',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /users/me/settings`

Returns all user settings for the authenticated user.

<span class="no-format">
<h3 id="calendar.settings.list-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.settings.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.settings.readonly )
</div>
</div>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>maxResults

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">integer</span>
</div>
<div>
<div class="description">
<p>Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>pageToken

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Token specifying which result page to return. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>syncToken

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
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
|maxResults|query|integer|false|Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.|
|pageToken|query|string|false|Token specifying which result page to return. Optional.|
|syncToken|query|string|false|Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Detailed descriptions

**syncToken**: Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.
If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries.

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.settings.list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[Settings](#schemasettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.settings.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.settings.readonly )
</aside>

## *post*calendar.settings.watch

<a id="opIdcalendar.settings.watch"></a>

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
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://www.googleapis.com/calendar/v3/users/me/settings/watch", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
POST https://www.googleapis.com/calendar/v3/users/me/settings/watch HTTP/1.1
Host: www.googleapis.com
Content-Type: application/json
Accept: */*

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/users/me/settings/watch',
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
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/users/me/settings/watch',
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
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('https://www.googleapis.com/calendar/v3/users/me/settings/watch', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post 'https://www.googleapis.com/calendar/v3/users/me/settings/watch',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`POST /users/me/settings/watch`

Watch for changes to Settings resources.

> Body parameter

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}
```

<span class="no-format">
<h3 id="calendar.settings.watch-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.settings.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.settings.readonly )
</div>
</div>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>maxResults

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">integer</span>
</div>
<div>
<div class="description">
<p>Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>pageToken

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Token specifying which result page to return. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>syncToken

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">REQUEST BODY SCHEMA</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>address

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The address where notifications are delivered for this channel.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>expiration

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>id

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>A UUID or similar unique string that identifies this channel.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>kind

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".</p>
</div>
</div>
</div>
</td>
</tr>

<tr  data-name="params1172" >
<td class="tree">
<span class="field-node"></span>params

<svg class="arrow " version="1.1" viewBox="0 0 24 24" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
<polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
</svg>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">object</span>
</div>
<div>
<div class="description">
<p>Additional parameters controlling delivery channel behavior. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>payload

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>A Boolean value to indicate whether payload is wanted. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>resourceId

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>resourceUri

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>A version-specific identifier for the watched resource.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>type

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The type of delivery mechanism used for this channel.</p>
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
|maxResults|query|integer|false|Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.|
|pageToken|query|string|false|Token specifying which result page to return. Optional.|
|syncToken|query|string|false|Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.|
|body|body|[Channel](#schemachannel)|false|none|
|» address|body|string|false|The address where notifications are delivered for this channel.|
|» expiration|body|string(int64)|false|Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.|
|» id|body|string|false|A UUID or similar unique string that identifies this channel.|
|» kind|body|string|false|Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".|
|» params|body|object|false|Additional parameters controlling delivery channel behavior. Optional.|
|»» **additionalProperties**|body|string|false|Declares a new parameter by name.|
|» payload|body|boolean|false|A Boolean value to indicate whether payload is wanted. Optional.|
|» resourceId|body|string|false|An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.|
|» resourceUri|body|string|false|A version-specific identifier for the watched resource.|
|» token|body|string|false|An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.|
|» type|body|string|false|The type of delivery mechanism used for this channel.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Detailed descriptions

**syncToken**: Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.
If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries.

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.settings.watch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[Channel](#schemachannel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.settings.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.settings.readonly )
</aside>

## *get*calendar.settings.get

<a id="opIdcalendar.settings.get"></a>

> Code samples

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"*/*"},
        "Authorization": []string{"Bearer {access-token}"},
        "Authorization": []string{"Bearer {access-token}"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://www.googleapis.com/calendar/v3/users/me/settings/{setting}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

```http
GET https://www.googleapis.com/calendar/v3/users/me/settings/{setting} HTTP/1.1
Host: www.googleapis.com
Accept: */*

```

```javascript
var headers = {
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

$.ajax({
  url: 'https://www.googleapis.com/calendar/v3/users/me/settings/{setting}',
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
  'Accept':'*/*',
  'Authorization':'Bearer {access-token}',
  'Authorization':'Bearer {access-token}'

};

fetch('https://www.googleapis.com/calendar/v3/users/me/settings/{setting}',
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
  'Accept': '*/*',
  'Authorization': 'Bearer {access-token}',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('https://www.googleapis.com/calendar/v3/users/me/settings/{setting}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => '*/*',
  'Authorization' => 'Bearer {access-token}',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get 'https://www.googleapis.com/calendar/v3/users/me/settings/{setting}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

`GET /users/me/settings/{setting}`

Returns a single user setting.

<span class="no-format">
<h3 id="calendar.settings.get-parameters">Parameters</h3>

<div class="props mb-3">
<div class="col1">
<span class="title">Autentications:</span>
</div>
<div class="col2">
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.settings.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.settings.readonly )
</div>
</div>

<span class="title my-4">Path Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>setting

<div class="required"> required </div>

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>The id of the user setting.</p>
</div>
</div>
</div>
</td>
</tr>

</tbody>
</table>

<span class="title my-4">Query Parameters</span>
<table class="prop-table special transparent">
<tbody>

<tr  >
<td class="tree">
<span class="field-node"></span>alt

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Data format for the response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>fields

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Selector specifying which fields to include in a partial response.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>key

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>oauth_token

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>OAuth 2.0 token for the current user.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>prettyPrint

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">boolean</span>
</div>
<div>
<div class="description">
<p>Returns response with indentations and line breaks.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>quotaUser

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>An opaque string that represents a user for quota purposes. Must not exceed 40 characters.</p>
</div>
</div>
</div>
</td>
</tr>

<tr  >
<td class="tree">
<span class="field-node"></span>userIp

</td>
<td class=" prop-description">
<div>
<div>
<span class="gray-text">string</span>
</div>
<div>
<div class="description">
<p>Deprecated. Please use quotaUser instead.</p>
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
|setting|path|string|true|The id of the user setting.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

<h3 id="calendar.settings.get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful response|[Setting](#schemasetting)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/calendar.settings.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/calendar.settings.readonly )
</aside>

# Schemas

<h2 id="tocSacl">Acl</h2>

<a id="schemaacl"></a>

```json
{
  "etag": "string",
  "items": [
    {
      "etag": "string",
      "id": "string",
      "kind": "calendar#aclRule",
      "role": "string",
      "scope": {
        "type": "string",
        "value": "string"
      }
    }
  ],
  "kind": "calendar#acl",
  "nextPageToken": "string",
  "nextSyncToken": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of the collection.|
|items|[[AclRule](#schemaaclrule)]|false|none|List of rules on the access control list.|
|kind|string|false|none|Type of the collection ("calendar#acl").|
|nextPageToken|string|false|none|Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided.|
|nextSyncToken|string|false|none|Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided.|

<h2 id="tocSaclrule">AclRule</h2>

<a id="schemaaclrule"></a>

```json
{
  "etag": "string",
  "id": "string",
  "kind": "calendar#aclRule",
  "role": "string",
  "scope": {
    "type": "string",
    "value": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of the resource.|
|id|string|false|none|Identifier of the ACL rule.|
|kind|string|false|none|Type of the resource ("calendar#aclRule").|
|role|string|false|none|The role assigned to the scope. Possible values are: - "none" - Provides no access. - "freeBusyReader" - Provides read access to free/busy information. - "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden. - "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible. - "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.|
|scope|object|false|none|The scope of the rule.|
|» type|string|false|none|The type of the scope. Possible values are: - "default" - The public scope. This is the default value. - "user" - Limits the scope to a single user. - "group" - Limits the scope to a group. - "domain" - Limits the scope to a domain.  Note: The permissions granted to the "default", or public, scope apply to any user, authenticated or not.|
|» value|string|false|none|The email address of a user or group, or the name of a domain, depending on the scope type. Omitted for type "default".|

<h2 id="tocScalendar">Calendar</h2>

<a id="schemacalendar"></a>

```json
{
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "description": "string",
  "etag": "string",
  "id": "string",
  "kind": "calendar#calendar",
  "location": "string",
  "summary": "string",
  "timeZone": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conferenceProperties|[ConferenceProperties](#schemaconferenceproperties)|false|none|none|
|description|string|false|none|Description of the calendar. Optional.|
|etag|string|false|none|ETag of the resource.|
|id|string|false|none|Identifier of the calendar. To retrieve IDs call the calendarList.list() method.|
|kind|string|false|none|Type of the resource ("calendar#calendar").|
|location|string|false|none|Geographic location of the calendar as free-form text. Optional.|
|summary|string|false|none|Title of the calendar.|
|timeZone|string|false|none|The time zone of the calendar. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) Optional.|

<h2 id="tocScalendarlist">CalendarList</h2>

<a id="schemacalendarlist"></a>

```json
{
  "etag": "string",
  "items": [
    {
      "accessRole": "string",
      "backgroundColor": "string",
      "colorId": "string",
      "conferenceProperties": {
        "allowedConferenceSolutionTypes": [
          "string"
        ]
      },
      "defaultReminders": [
        {
          "method": "string",
          "minutes": 0
        }
      ],
      "deleted": false,
      "description": "string",
      "etag": "string",
      "foregroundColor": "string",
      "hidden": false,
      "id": "string",
      "kind": "calendar#calendarListEntry",
      "location": "string",
      "notificationSettings": {
        "notifications": [
          {
            "method": "string",
            "type": "string"
          }
        ]
      },
      "primary": false,
      "selected": false,
      "summary": "string",
      "summaryOverride": "string",
      "timeZone": "string"
    }
  ],
  "kind": "calendar#calendarList",
  "nextPageToken": "string",
  "nextSyncToken": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of the collection.|
|items|[[CalendarListEntry](#schemacalendarlistentry)]|false|none|Calendars that are present on the user's calendar list.|
|kind|string|false|none|Type of the collection ("calendar#calendarList").|
|nextPageToken|string|false|none|Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided.|
|nextSyncToken|string|false|none|Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided.|

<h2 id="tocScalendarlistentry">CalendarListEntry</h2>

<a id="schemacalendarlistentry"></a>

```json
{
  "accessRole": "string",
  "backgroundColor": "string",
  "colorId": "string",
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      "string"
    ]
  },
  "defaultReminders": [
    {
      "method": "string",
      "minutes": 0
    }
  ],
  "deleted": false,
  "description": "string",
  "etag": "string",
  "foregroundColor": "string",
  "hidden": false,
  "id": "string",
  "kind": "calendar#calendarListEntry",
  "location": "string",
  "notificationSettings": {
    "notifications": [
      {
        "method": "string",
        "type": "string"
      }
    ]
  },
  "primary": false,
  "selected": false,
  "summary": "string",
  "summaryOverride": "string",
  "timeZone": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessRole|string|false|none|The effective access role that the authenticated user has on the calendar. Read-only. Possible values are: - "freeBusyReader" - Provides read access to free/busy information. - "reader" - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden. - "writer" - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible. - "owner" - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.|
|backgroundColor|string|false|none|The main color of the calendar in the hexadecimal format "#0088aa". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.|
|colorId|string|false|none|The color of the calendar. This is an ID referring to an entry in the calendar section of the colors definition (see the colors endpoint). This property is superseded by the backgroundColor and foregroundColor properties and can be ignored when using these properties. Optional.|
|conferenceProperties|[ConferenceProperties](#schemaconferenceproperties)|false|none|none|
|defaultReminders|[[EventReminder](#schemaeventreminder)]|false|none|The default reminders that the authenticated user has for this calendar.|
|deleted|boolean|false|none|Whether this calendar list entry has been deleted from the calendar list. Read-only. Optional. The default is False.|
|description|string|false|none|Description of the calendar. Optional. Read-only.|
|etag|string|false|none|ETag of the resource.|
|foregroundColor|string|false|none|The foreground color of the calendar in the hexadecimal format "#ffffff". This property supersedes the index-based colorId property. To set or change this property, you need to specify colorRgbFormat=true in the parameters of the insert, update and patch methods. Optional.|
|hidden|boolean|false|none|Whether the calendar has been hidden from the list. Optional. The default is False.|
|id|string|false|none|Identifier of the calendar.|
|kind|string|false|none|Type of the resource ("calendar#calendarListEntry").|
|location|string|false|none|Geographic location of the calendar as free-form text. Optional. Read-only.|
|notificationSettings|object|false|none|The notifications that the authenticated user is receiving for this calendar.|
|» notifications|[[CalendarNotification](#schemacalendarnotification)]|false|none|The list of notifications set for this calendar.|
|primary|boolean|false|none|Whether the calendar is the primary calendar of the authenticated user. Read-only. Optional. The default is False.|
|selected|boolean|false|none|Whether the calendar content shows up in the calendar UI. Optional. The default is False.|
|summary|string|false|none|Title of the calendar. Read-only.|
|summaryOverride|string|false|none|The summary that the authenticated user has set for this calendar. Optional.|
|timeZone|string|false|none|The time zone of the calendar. Optional. Read-only.|

<h2 id="tocScalendarnotification">CalendarNotification</h2>

<a id="schemacalendarnotification"></a>

```json
{
  "method": "string",
  "type": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|method|string|false|none|The method used to deliver the notification. Possible values are: - "email" - Notifications are sent via email. - "sms" - Deprecated. Once this feature is shutdown, the API will no longer return notifications using this method. Any newly added SMS notifications will be ignored. See  Google Calendar SMS notifications to be removed for more information. Notifications are sent via SMS. This value is read-only and is ignored on inserts and updates. SMS notifications are only available for G Suite customers. Required when adding a notification.|
|type|string|false|none|The type of notification. Possible values are: - "eventCreation" - Notification sent when a new event is put on the calendar. - "eventChange" - Notification sent when an event is changed. - "eventCancellation" - Notification sent when an event is cancelled. - "eventResponse" - Notification sent when an attendee responds to the event invitation. - "agenda" - An agenda with the events of the day (sent out in the morning). Required when adding a notification.|

<h2 id="tocSchannel">Channel</h2>

<a id="schemachannel"></a>

```json
{
  "address": "string",
  "expiration": "string",
  "id": "string",
  "kind": "api#channel",
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": true,
  "resourceId": "string",
  "resourceUri": "string",
  "token": "string",
  "type": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|The address where notifications are delivered for this channel.|
|expiration|string(int64)|false|none|Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.|
|id|string|false|none|A UUID or similar unique string that identifies this channel.|
|kind|string|false|none|Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel".|
|params|object|false|none|Additional parameters controlling delivery channel behavior. Optional.|
|» **additionalProperties**|string|false|none|Declares a new parameter by name.|
|payload|boolean|false|none|A Boolean value to indicate whether payload is wanted. Optional.|
|resourceId|string|false|none|An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.|
|resourceUri|string|false|none|A version-specific identifier for the watched resource.|
|token|string|false|none|An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.|
|type|string|false|none|The type of delivery mechanism used for this channel.|

<h2 id="tocScolordefinition">ColorDefinition</h2>

<a id="schemacolordefinition"></a>

```json
{
  "background": "string",
  "foreground": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|background|string|false|none|The background color associated with this color definition.|
|foreground|string|false|none|The foreground color that can be used to write on top of a background with 'background' color.|

<h2 id="tocScolors">Colors</h2>

<a id="schemacolors"></a>

```json
{
  "calendar": {
    "property1": {
      "background": "string",
      "foreground": "string"
    },
    "property2": {
      "background": "string",
      "foreground": "string"
    }
  },
  "event": {
    "property1": {
      "background": "string",
      "foreground": "string"
    },
    "property2": {
      "background": "string",
      "foreground": "string"
    }
  },
  "kind": "calendar#colors",
  "updated": "2019-11-22T00:09:35Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calendar|object|false|none|A global palette of calendar colors, mapping from the color ID to its definition. A calendarListEntry resource refers to one of these color IDs in its color field. Read-only.|
|» **additionalProperties**|[ColorDefinition](#schemacolordefinition)|false|none|none|
|event|object|false|none|A global palette of event colors, mapping from the color ID to its definition. An event resource may refer to one of these color IDs in its color field. Read-only.|
|» **additionalProperties**|[ColorDefinition](#schemacolordefinition)|false|none|none|
|kind|string|false|none|Type of the resource ("calendar#colors").|
|updated|string(date-time)|false|none|Last modification time of the color palette (as a RFC3339 timestamp). Read-only.|

<h2 id="tocSconferencedata">ConferenceData</h2>

<a id="schemaconferencedata"></a>

```json
{
  "conferenceId": "string",
  "conferenceSolution": {
    "iconUri": "string",
    "key": {
      "type": "string"
    },
    "name": "string"
  },
  "createRequest": {
    "conferenceSolutionKey": {
      "type": "string"
    },
    "requestId": "string",
    "status": {
      "statusCode": "string"
    }
  },
  "entryPoints": [
    {
      "accessCode": "string",
      "entryPointFeatures": [
        "string"
      ],
      "entryPointType": "string",
      "label": "string",
      "meetingCode": "string",
      "passcode": "string",
      "password": "string",
      "pin": "string",
      "regionCode": "string",
      "uri": "string"
    }
  ],
  "notes": "string",
  "parameters": {
    "addOnParameters": {
      "parameters": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "signature": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conferenceId|string|false|none|The ID of the conference. Can be used by developers to keep track of conferences, should not be displayed to users. Values for solution types: - "eventHangout": unset. - "eventNamedHangout": the name of the Hangout. - "hangoutsMeet": the 10-letter meeting code, for example "aaa-bbbb-ccc". - "addOn": defined by 3P conference provider.  Optional.|
|conferenceSolution|[ConferenceSolution](#schemaconferencesolution)|false|none|none|
|createRequest|[CreateConferenceRequest](#schemacreateconferencerequest)|false|none|none|
|entryPoints|[[EntryPoint](#schemaentrypoint)]|false|none|Information about individual conference entry points, such as URLs or phone numbers. All of them must belong to the same conference. Either conferenceSolution and at least one entryPoint, or createRequest is required.|
|notes|string|false|none|Additional notes (such as instructions from the domain administrator, legal notices) to display to the user. Can contain HTML. The maximum length is 2048 characters. Optional.|
|parameters|[ConferenceParameters](#schemaconferenceparameters)|false|none|none|
|signature|string|false|none|The signature of the conference data. Generated on server side. Must be preserved while copying the conference data between events, otherwise the conference data will not be copied. Unset for a conference with a failed create request. Optional for a conference with a pending create request.|

<h2 id="tocSconferenceparameters">ConferenceParameters</h2>

<a id="schemaconferenceparameters"></a>

```json
{
  "addOnParameters": {
    "parameters": {
      "property1": "string",
      "property2": "string"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addOnParameters|[ConferenceParametersAddOnParameters](#schemaconferenceparametersaddonparameters)|false|none|none|

<h2 id="tocSconferenceparametersaddonparameters">ConferenceParametersAddOnParameters</h2>

<a id="schemaconferenceparametersaddonparameters"></a>

```json
{
  "parameters": {
    "property1": "string",
    "property2": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parameters|object|false|none|none|
|» **additionalProperties**|string|false|none|none|

<h2 id="tocSconferenceproperties">ConferenceProperties</h2>

<a id="schemaconferenceproperties"></a>

```json
{
  "allowedConferenceSolutionTypes": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedConferenceSolutionTypes|[string]|false|none|The types of conference solutions that are supported for this calendar. The possible values are: - "eventHangout" - "eventNamedHangout" - "hangoutsMeet"  Optional.|

<h2 id="tocSconferencerequeststatus">ConferenceRequestStatus</h2>

<a id="schemaconferencerequeststatus"></a>

```json
{
  "statusCode": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusCode|string|false|none|The current status of the conference create request. Read-only. The possible values are: - "pending": the conference create request is still being processed. - "success": the conference create request succeeded, the entry points are populated. - "failure": the conference create request failed, there are no entry points.|

<h2 id="tocSconferencesolution">ConferenceSolution</h2>

<a id="schemaconferencesolution"></a>

```json
{
  "iconUri": "string",
  "key": {
    "type": "string"
  },
  "name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iconUri|string|false|none|The user-visible icon for this solution.|
|key|[ConferenceSolutionKey](#schemaconferencesolutionkey)|false|none|none|
|name|string|false|none|The user-visible name of this solution. Not localized.|

<h2 id="tocSconferencesolutionkey">ConferenceSolutionKey</h2>

<a id="schemaconferencesolutionkey"></a>

```json
{
  "type": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The conference solution type. If a client encounters an unfamiliar or empty type, it should still be able to display the entry points. However, it should disallow modifications. The possible values are: - "eventHangout" for Hangouts for consumers (http://hangouts.google.com) - "eventNamedHangout" for classic Hangouts for G Suite users (http://hangouts.google.com) - "hangoutsMeet" for Hangouts Meet (http://meet.google.com) - "addOn" for 3P conference providers|

<h2 id="tocScreateconferencerequest">CreateConferenceRequest</h2>

<a id="schemacreateconferencerequest"></a>

```json
{
  "conferenceSolutionKey": {
    "type": "string"
  },
  "requestId": "string",
  "status": {
    "statusCode": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conferenceSolutionKey|[ConferenceSolutionKey](#schemaconferencesolutionkey)|false|none|none|
|requestId|string|false|none|The client-generated unique ID for this request. Clients should regenerate this ID for every new request. If an ID provided is the same as for the previous request, the request is ignored.|
|status|[ConferenceRequestStatus](#schemaconferencerequeststatus)|false|none|none|

<h2 id="tocSentrypoint">EntryPoint</h2>

<a id="schemaentrypoint"></a>

```json
{
  "accessCode": "string",
  "entryPointFeatures": [
    "string"
  ],
  "entryPointType": "string",
  "label": "string",
  "meetingCode": "string",
  "passcode": "string",
  "password": "string",
  "pin": "string",
  "regionCode": "string",
  "uri": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessCode|string|false|none|The access code to access the conference. The maximum length is 128 characters. When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed. Optional.|
|entryPointFeatures|[string]|false|none|Features of the entry point, such as being toll or toll-free. One entry point can have multiple features. However, toll and toll-free cannot be both set on the same entry point.|
|entryPointType|string|false|none|The type of the conference entry point. Possible values are: - "video" - joining a conference over HTTP. A conference can have zero or one video entry point. - "phone" - joining a conference by dialing a phone number. A conference can have zero or more phone entry points. - "sip" - joining a conference over SIP. A conference can have zero or one sip entry point. - "more" - further conference joining instructions, for example additional phone numbers. A conference can have zero or one more entry point. A conference with only a more entry point is not a valid conference.|
|label|string|false|none|The label for the URI. Visible to end users. Not localized. The maximum length is 512 characters. Examples: - for video: meet.google.com/aaa-bbbb-ccc - for phone: +1 123 268 2601 - for sip: 12345678@altostrat.com - for more: should not be filled Optional.|
|meetingCode|string|false|none|The meeting code to access the conference. The maximum length is 128 characters. When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed. Optional.|
|passcode|string|false|none|The passcode to access the conference. The maximum length is 128 characters. When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed.|
|password|string|false|none|The password to access the conference. The maximum length is 128 characters. When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed. Optional.|
|pin|string|false|none|The PIN to access the conference. The maximum length is 128 characters. When creating new conference data, populate only the subset of {meetingCode, accessCode, passcode, password, pin} fields that match the terminology that the conference provider uses. Only the populated fields should be displayed. Optional.|
|regionCode|string|false|none|The CLDR/ISO 3166 region code for the country associated with this phone access. Example: "SE" for Sweden. Calendar backend will populate this field only for EntryPointType.PHONE.|
|uri|string|false|none|The URI of the entry point. The maximum length is 1300 characters. Format: - for video, http: or https: schema is required. - for phone, tel: schema is required. The URI should include the entire dial sequence (e.g., tel:+12345678900,,,123456789;1234). - for sip, sip: schema is required, e.g., sip:12345678@myprovider.com. - for more, http: or https: schema is required.|

<h2 id="tocSerror">Error</h2>

<a id="schemaerror"></a>

```json
{
  "domain": "string",
  "reason": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|false|none|Domain, or broad category, of the error.|
|reason|string|false|none|Specific reason for the error. Some of the possible values are: - "groupTooBig" - The group of users requested is too large for a single query. - "tooManyCalendarsRequested" - The number of calendars requested is too large for a single query. - "notFound" - The requested resource was not found. - "internalError" - The API service has encountered an internal error.  Additional error types may be added in the future, so clients should gracefully handle additional error statuses not included in this list.|

<h2 id="tocSevent">Event</h2>

<a id="schemaevent"></a>

```json
{
  "anyoneCanAddSelf": false,
  "attachments": [
    {
      "fileId": "string",
      "fileUrl": "string",
      "iconLink": "string",
      "mimeType": "string",
      "title": "string"
    }
  ],
  "attendees": [
    {
      "additionalGuests": 0,
      "comment": "string",
      "displayName": "string",
      "email": "string",
      "id": "string",
      "optional": false,
      "organizer": true,
      "resource": false,
      "responseStatus": "string",
      "self": false
    }
  ],
  "attendeesOmitted": false,
  "colorId": "string",
  "conferenceData": {
    "conferenceId": "string",
    "conferenceSolution": {
      "iconUri": "string",
      "key": {
        "type": "string"
      },
      "name": "string"
    },
    "createRequest": {
      "conferenceSolutionKey": {
        "type": "string"
      },
      "requestId": "string",
      "status": {
        "statusCode": "string"
      }
    },
    "entryPoints": [
      {
        "accessCode": "string",
        "entryPointFeatures": [
          "string"
        ],
        "entryPointType": "string",
        "label": "string",
        "meetingCode": "string",
        "passcode": "string",
        "password": "string",
        "pin": "string",
        "regionCode": "string",
        "uri": "string"
      }
    ],
    "notes": "string",
    "parameters": {
      "addOnParameters": {
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "signature": "string"
  },
  "created": "2019-11-22T00:09:35Z",
  "creator": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "description": "string",
  "end": {
    "date": "2019-11-22",
    "dateTime": "2019-11-22T00:09:35Z",
    "timeZone": "string"
  },
  "endTimeUnspecified": false,
  "etag": "string",
  "extendedProperties": {
    "private": {
      "property1": "string",
      "property2": "string"
    },
    "shared": {
      "property1": "string",
      "property2": "string"
    }
  },
  "gadget": {
    "display": "string",
    "height": 0,
    "iconLink": "string",
    "link": "string",
    "preferences": {
      "property1": "string",
      "property2": "string"
    },
    "title": "string",
    "type": "string",
    "width": 0
  },
  "guestsCanInviteOthers": true,
  "guestsCanModify": false,
  "guestsCanSeeOtherGuests": true,
  "hangoutLink": "string",
  "htmlLink": "string",
  "iCalUID": "string",
  "id": "string",
  "kind": "calendar#event",
  "location": "string",
  "locked": false,
  "organizer": {
    "displayName": "string",
    "email": "string",
    "id": "string",
    "self": false
  },
  "originalStartTime": {
    "date": "2019-11-22",
    "dateTime": "2019-11-22T00:09:35Z",
    "timeZone": "string"
  },
  "privateCopy": false,
  "recurrence": [
    "string"
  ],
  "recurringEventId": "string",
  "reminders": {
    "overrides": [
      {
        "method": "string",
        "minutes": 0
      }
    ],
    "useDefault": true
  },
  "sequence": 0,
  "source": {
    "title": "string",
    "url": "string"
  },
  "start": {
    "date": "2019-11-22",
    "dateTime": "2019-11-22T00:09:35Z",
    "timeZone": "string"
  },
  "status": "string",
  "summary": "string",
  "transparency": "opaque",
  "updated": "2019-11-22T00:09:35Z",
  "visibility": "default"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|anyoneCanAddSelf|boolean|false|none|Whether anyone can invite themselves to the event (currently works for Google+ events only). Optional. The default is False.|
|attachments|[[EventAttachment](#schemaeventattachment)]|false|none|File attachments for the event. Currently only Google Drive attachments are supported. In order to modify attachments the supportsAttachments request parameter should be set to true. There can be at most 25 attachments per event,|
|attendees|[[EventAttendee](#schemaeventattendee)]|false|none|The attendees of the event. See the Events with attendees guide for more information on scheduling events with other calendar users.|
|attendeesOmitted|boolean|false|none|Whether attendees may have been omitted from the event's representation. When retrieving an event, this may be due to a restriction specified by the maxAttendee query parameter. When updating an event, this can be used to only update the participant's response. Optional. The default is False.|
|colorId|string|false|none|The color of the event. This is an ID referring to an entry in the event section of the colors definition (see the  colors endpoint). Optional.|
|conferenceData|[ConferenceData](#schemaconferencedata)|false|none|none|
|created|string(date-time)|false|none|Creation time of the event (as a RFC3339 timestamp). Read-only.|
|creator|object|false|none|The creator of the event. Read-only.|
|» displayName|string|false|none|The creator's name, if available.|
|» email|string|false|none|The creator's email address, if available.|
|» id|string|false|none|The creator's Profile ID, if available. It corresponds to the id field in the People collection of the Google+ API|
|» self|boolean|false|none|Whether the creator corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.|
|description|string|false|none|Description of the event. Optional.|
|end|[EventDateTime](#schemaeventdatetime)|false|none|none|
|endTimeUnspecified|boolean|false|none|Whether the end time is actually unspecified. An end time is still provided for compatibility reasons, even if this attribute is set to True. The default is False.|
|etag|string|false|none|ETag of the resource.|
|extendedProperties|object|false|none|Extended properties of the event.|
|» private|object|false|none|Properties that are private to the copy of the event that appears on this calendar.|
|»» **additionalProperties**|string|false|none|The name of the private property and the corresponding value.|
|» shared|object|false|none|Properties that are shared between copies of the event on other attendees' calendars.|
|»» **additionalProperties**|string|false|none|The name of the shared property and the corresponding value.|
|» gadget|object|false|none|A gadget that extends this event.|
|»» display|string|false|none|The gadget's display mode. Optional. Possible values are: - "icon" - The gadget displays next to the event's title in the calendar view. - "chip" - The gadget displays when the event is clicked.|
|»» height|integer(int32)|false|none|The gadget's height in pixels. The height must be an integer greater than 0. Optional.|
|»» iconLink|string|false|none|The gadget's icon URL. The URL scheme must be HTTPS.|
|»» link|string|false|none|The gadget's URL. The URL scheme must be HTTPS.|
|»» preferences|object|false|none|Preferences.|
|»»» **additionalProperties**|string|false|none|The preference name and corresponding value.|
|»» title|string|false|none|The gadget's title.|
|»» type|string|false|none|The gadget's type.|
|»» width|integer(int32)|false|none|The gadget's width in pixels. The width must be an integer greater than 0. Optional.|
|» guestsCanInviteOthers|boolean|false|none|Whether attendees other than the organizer can invite others to the event. Optional. The default is True.|
|» guestsCanModify|boolean|false|none|Whether attendees other than the organizer can modify the event. Optional. The default is False.|
|» guestsCanSeeOtherGuests|boolean|false|none|Whether attendees other than the organizer can see who the event's attendees are. Optional. The default is True.|
|» hangoutLink|string|false|none|An absolute link to the Google+ hangout associated with this event. Read-only.|
|» htmlLink|string|false|none|An absolute link to this event in the Google Calendar Web UI. Read-only.|
|» iCalUID|string|false|none|Event unique identifier as defined in RFC5545. It is used to uniquely identify events accross calendaring systems and must be supplied when importing events via the import method. Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.|
|» id|string|false|none|Opaque identifier of the event. When creating new single or recurring events, you can specify their IDs. Provided IDs must follow these rules: - characters allowed in the ID are those used in base32hex encoding, i.e. lowercase letters a-v and digits 0-9, see section 3.1.2 in RFC2938 - the length of the ID must be between 5 and 1024 characters - the ID must be unique per calendar  Due to the globally distributed nature of the system, we cannot guarantee that ID collisions will be detected at event creation time. To minimize the risk of collisions we recommend using an established UUID algorithm such as one described in RFC4122. If you do not specify an ID, it will be automatically generated by the server. Note that the icalUID and the id are not identical and only one of them should be supplied at event creation time. One difference in their semantics is that in recurring events, all occurrences of one event have different ids while they all share the same icalUIDs.|
|» kind|string|false|none|Type of the resource ("calendar#event").|
|» location|string|false|none|Geographic location of the event as free-form text. Optional.|
|» locked|boolean|false|none|Whether this is a locked event copy where no changes can be made to the main event fields "summary", "description", "location", "start", "end" or "recurrence". The default is False. Read-Only.|
|» organizer|object|false|none|The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees with the organizer field set to True. To change the organizer, use the move operation. Read-only, except when importing an event.|
|»» displayName|string|false|none|The organizer's name, if available.|
|»» email|string|false|none|The organizer's email address, if available. It must be a valid email address as per RFC5322.|
|»» id|string|false|none|The organizer's Profile ID, if available. It corresponds to the id field in the People collection of the Google+ API|
|»» self|boolean|false|none|Whether the organizer corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.|
|» originalStartTime|[EventDateTime](#schemaeventdatetime)|false|none|none|
|» privateCopy|boolean|false|none|If set to True, Event propagation is disabled. Note that it is not the same thing as Private event properties. Optional. Immutable. The default is False.|
|» recurrence|[string]|false|none|List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event, as specified in RFC5545. Note that DTSTART and DTEND lines are not allowed in this field; event start and end times are specified in the start and end fields. This field is omitted for single events or instances of recurring events.|
|» recurringEventId|string|false|none|For an instance of a recurring event, this is the id of the recurring event to which this instance belongs. Immutable.|
|» reminders|object|false|none|Information about the event's reminders for the authenticated user.|
|»» overrides|[[EventReminder](#schemaeventreminder)]|false|none|If the event doesn't use the default reminders, this lists the reminders specific to the event, or, if not set, indicates that no reminders are set for this event. The maximum number of override reminders is 5.|
|»» useDefault|boolean|false|none|Whether the default reminders of the calendar apply to the event.|
|» sequence|integer(int32)|false|none|Sequence number as per iCalendar.|
|» source|object|false|none|Source from which the event was created. For example, a web page, an email message or any document identifiable by an URL with HTTP or HTTPS scheme. Can only be seen or modified by the creator of the event.|
|»» title|string|false|none|Title of the source; for example a title of a web page or an email subject.|
|»» url|string|false|none|URL of the source pointing to a resource. The URL scheme must be HTTP or HTTPS.|
|» start|[EventDateTime](#schemaeventdatetime)|false|none|none|
|» status|string|false|none|Status of the event. Optional. Possible values are: - "confirmed" - The event is confirmed. This is the default status. - "tentative" - The event is tentatively confirmed. - "cancelled" - The event is cancelled (deleted). The list method returns cancelled events only on incremental sync (when syncToken or updatedMin are specified) or if the showDeleted flag is set to true. The get method always returns them. A cancelled status represents two different states depending on the event type: - Cancelled exceptions of an uncancelled recurring event indicate that this instance should no longer be presented to the user. Clients should store these events for the lifetime of the parent recurring event. Cancelled exceptions are only guaranteed to have values for the id, recurringEventId and originalStartTime fields populated. The other fields might be empty. - All other cancelled events represent deleted events. Clients should remove their locally synced copies. Such cancelled events will eventually disappear, so do not rely on them being available indefinitely. Deleted events are only guaranteed to have the id field populated.   On the organizer's calendar, cancelled events continue to expose event details (summary, location, etc.) so that they can be restored (undeleted). Similarly, the events to which the user was invited and that they manually removed continue to provide details. However, incremental sync requests with showDeleted set to false will not return these details. If an event changes its organizer (for example via the move operation) and the original organizer is not on the attendee list, it will leave behind a cancelled event where only the id field is guaranteed to be populated.|
|» summary|string|false|none|Title of the event.|
|» transparency|string|false|none|Whether the event blocks time on the calendar. Optional. Possible values are: - "opaque" - Default value. The event does block time on the calendar. This is equivalent to setting Show me as to Busy in the Calendar UI. - "transparent" - The event does not block time on the calendar. This is equivalent to setting Show me as to Available in the Calendar UI.|
|» updated|string(date-time)|false|none|Last modification time of the event (as a RFC3339 timestamp). Read-only.|
|» visibility|string|false|none|Visibility of the event. Optional. Possible values are: - "default" - Uses the default visibility for events on the calendar. This is the default value. - "public" - The event is public and event details are visible to all readers of the calendar. - "private" - The event is private and only event attendees may view event details. - "confidential" - The event is private. This value is provided for compatibility reasons.|

<h2 id="tocSeventattachment">EventAttachment</h2>

<a id="schemaeventattachment"></a>

```json
{
  "fileId": "string",
  "fileUrl": "string",
  "iconLink": "string",
  "mimeType": "string",
  "title": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileId|string|false|none|ID of the attached file. Read-only. For Google Drive files, this is the ID of the corresponding Files resource entry in the Drive API.|
|fileUrl|string|false|none|URL link to the attachment. For adding Google Drive file attachments use the same format as in alternateLink property of the Files resource in the Drive API. Required when adding an attachment.|
|iconLink|string|false|none|URL link to the attachment's icon. Read-only.|
|mimeType|string|false|none|Internet media type (MIME type) of the attachment.|
|title|string|false|none|Attachment title.|

<h2 id="tocSeventattendee">EventAttendee</h2>

<a id="schemaeventattendee"></a>

```json
{
  "additionalGuests": 0,
  "comment": "string",
  "displayName": "string",
  "email": "string",
  "id": "string",
  "optional": false,
  "organizer": true,
  "resource": false,
  "responseStatus": "string",
  "self": false
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalGuests|integer(int32)|false|none|Number of additional guests. Optional. The default is 0.|
|comment|string|false|none|The attendee's response comment. Optional.|
|displayName|string|false|none|The attendee's name, if available. Optional.|
|email|string|false|none|The attendee's email address, if available. This field must be present when adding an attendee. It must be a valid email address as per RFC5322. Required when adding an attendee.|
|id|string|false|none|The attendee's Profile ID, if available. It corresponds to the id field in the People collection of the Google+ API|
|optional|boolean|false|none|Whether this is an optional attendee. Optional. The default is False.|
|organizer|boolean|false|none|Whether the attendee is the organizer of the event. Read-only. The default is False.|
|resource|boolean|false|none|Whether the attendee is a resource. Can only be set when the attendee is added to the event for the first time. Subsequent modifications are ignored. Optional. The default is False.|
|responseStatus|string|false|none|The attendee's response status. Possible values are: - "needsAction" - The attendee has not responded to the invitation. - "declined" - The attendee has declined the invitation. - "tentative" - The attendee has tentatively accepted the invitation. - "accepted" - The attendee has accepted the invitation.|
|self|boolean|false|none|Whether this entry represents the calendar on which this copy of the event appears. Read-only. The default is False.|

<h2 id="tocSeventdatetime">EventDateTime</h2>

<a id="schemaeventdatetime"></a>

```json
{
  "date": "2019-11-22",
  "dateTime": "2019-11-22T00:09:35Z",
  "timeZone": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string(date)|false|none|The date, in the format "yyyy-mm-dd", if this is an all-day event.|
|dateTime|string(date-time)|false|none|The time, as a combined date-time value (formatted according to RFC3339). A time zone offset is required unless a time zone is explicitly specified in timeZone.|
|timeZone|string|false|none|The time zone in which the time is specified. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".) For recurring events this field is required and specifies the time zone in which the recurrence is expanded. For single events this field is optional and indicates a custom time zone for the event start/end.|

<h2 id="tocSeventreminder">EventReminder</h2>

<a id="schemaeventreminder"></a>

```json
{
  "method": "string",
  "minutes": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|method|string|false|none|The method used by this reminder. Possible values are: - "email" - Reminders are sent via email. - "sms" - Deprecated. Once this feature is shutdown, the API will no longer return reminders using this method. Any newly added SMS reminders will be ignored. See  Google Calendar SMS notifications to be removed for more information. Reminders are sent via SMS. These are only available for G Suite customers. Requests to set SMS reminders for other account types are ignored. - "popup" - Reminders are sent via a UI popup. Required when adding a reminder.|
|minutes|integer(int32)|false|none|Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320 (4 weeks in minutes). Required when adding a reminder.|

<h2 id="tocSevents">Events</h2>

<a id="schemaevents"></a>

```json
{
  "accessRole": "string",
  "defaultReminders": [
    {
      "method": "string",
      "minutes": 0
    }
  ],
  "description": "string",
  "etag": "string",
  "items": [
    {
      "anyoneCanAddSelf": false,
      "attachments": [
        {
          "fileId": "string",
          "fileUrl": "string",
          "iconLink": "string",
          "mimeType": "string",
          "title": "string"
        }
      ],
      "attendees": [
        {
          "additionalGuests": 0,
          "comment": "string",
          "displayName": "string",
          "email": "string",
          "id": "string",
          "optional": false,
          "organizer": true,
          "resource": false,
          "responseStatus": "string",
          "self": false
        }
      ],
      "attendeesOmitted": false,
      "colorId": "string",
      "conferenceData": {
        "conferenceId": "string",
        "conferenceSolution": {
          "iconUri": "string",
          "key": {
            "type": "string"
          },
          "name": "string"
        },
        "createRequest": {
          "conferenceSolutionKey": {
            "type": "string"
          },
          "requestId": "string",
          "status": {
            "statusCode": "string"
          }
        },
        "entryPoints": [
          {
            "accessCode": "string",
            "entryPointFeatures": [
              "string"
            ],
            "entryPointType": "string",
            "label": "string",
            "meetingCode": "string",
            "passcode": "string",
            "password": "string",
            "pin": "string",
            "regionCode": "string",
            "uri": "string"
          }
        ],
        "notes": "string",
        "parameters": {
          "addOnParameters": {
            "parameters": {
              "property1": "string",
              "property2": "string"
            }
          }
        },
        "signature": "string"
      },
      "created": "2019-11-22T00:09:35Z",
      "creator": {
        "displayName": "string",
        "email": "string",
        "id": "string",
        "self": false
      },
      "description": "string",
      "end": {
        "date": "2019-11-22",
        "dateTime": "2019-11-22T00:09:35Z",
        "timeZone": "string"
      },
      "endTimeUnspecified": false,
      "etag": "string",
      "extendedProperties": {
        "private": {
          "property1": "string",
          "property2": "string"
        },
        "shared": {
          "property1": "string",
          "property2": "string"
        }
      },
      "gadget": {
        "display": "string",
        "height": 0,
        "iconLink": "string",
        "link": "string",
        "preferences": {
          "property1": "string",
          "property2": "string"
        },
        "title": "string",
        "type": "string",
        "width": 0
      },
      "guestsCanInviteOthers": true,
      "guestsCanModify": false,
      "guestsCanSeeOtherGuests": true,
      "hangoutLink": "string",
      "htmlLink": "string",
      "iCalUID": "string",
      "id": "string",
      "kind": "calendar#event",
      "location": "string",
      "locked": false,
      "organizer": {
        "displayName": "string",
        "email": "string",
        "id": "string",
        "self": false
      },
      "originalStartTime": {
        "date": "2019-11-22",
        "dateTime": "2019-11-22T00:09:35Z",
        "timeZone": "string"
      },
      "privateCopy": false,
      "recurrence": [
        "string"
      ],
      "recurringEventId": "string",
      "reminders": {
        "overrides": [
          {
            "method": "string",
            "minutes": 0
          }
        ],
        "useDefault": true
      },
      "sequence": 0,
      "source": {
        "title": "string",
        "url": "string"
      },
      "start": {
        "date": "2019-11-22",
        "dateTime": "2019-11-22T00:09:35Z",
        "timeZone": "string"
      },
      "status": "string",
      "summary": "string",
      "transparency": "opaque",
      "updated": "2019-11-22T00:09:35Z",
      "visibility": "default"
    }
  ],
  "kind": "calendar#events",
  "nextPageToken": "string",
  "nextSyncToken": "string",
  "summary": "string",
  "timeZone": "string",
  "updated": "2019-11-22T00:09:35Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessRole|string|false|none|The user's access role for this calendar. Read-only. Possible values are: - "none" - The user has no access. - "freeBusyReader" - The user has read access to free/busy information. - "reader" - The user has read access to the calendar. Private events will appear to users with reader access, but event details will be hidden. - "writer" - The user has read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible. - "owner" - The user has ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.|
|defaultReminders|[[EventReminder](#schemaeventreminder)]|false|none|The default reminders on the calendar for the authenticated user. These reminders apply to all events on this calendar that do not explicitly override them (i.e. do not have reminders.useDefault set to True).|
|description|string|false|none|Description of the calendar. Read-only.|
|etag|string|false|none|ETag of the collection.|
|items|[[Event](#schemaevent)]|false|none|List of events on the calendar.|
|kind|string|false|none|Type of the collection ("calendar#events").|
|nextPageToken|string|false|none|Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided.|
|nextSyncToken|string|false|none|Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided.|
|summary|string|false|none|Title of the calendar. Read-only.|
|timeZone|string|false|none|The time zone of the calendar. Read-only.|
|updated|string(date-time)|false|none|Last modification time of the calendar (as a RFC3339 timestamp). Read-only.|

<h2 id="tocSfreebusycalendar">FreeBusyCalendar</h2>

<a id="schemafreebusycalendar"></a>

```json
{
  "busy": [
    {
      "end": "2019-11-22T00:09:35Z",
      "start": "2019-11-22T00:09:35Z"
    }
  ],
  "errors": [
    {
      "domain": "string",
      "reason": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|busy|[[TimePeriod](#schematimeperiod)]|false|none|List of time ranges during which this calendar should be regarded as busy.|
|errors|[[Error](#schemaerror)]|false|none|Optional error(s) (if computation for the calendar failed).|

<h2 id="tocSfreebusygroup">FreeBusyGroup</h2>

<a id="schemafreebusygroup"></a>

```json
{
  "calendars": [
    "string"
  ],
  "errors": [
    {
      "domain": "string",
      "reason": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calendars|[string]|false|none|List of calendars' identifiers within a group.|
|errors|[[Error](#schemaerror)]|false|none|Optional error(s) (if computation for the group failed).|

<h2 id="tocSfreebusyrequest">FreeBusyRequest</h2>

<a id="schemafreebusyrequest"></a>

```json
{
  "calendarExpansionMax": 0,
  "groupExpansionMax": 0,
  "items": [
    {
      "id": "string"
    }
  ],
  "timeMax": "2019-11-22T00:09:35Z",
  "timeMin": "2019-11-22T00:09:35Z",
  "timeZone": "UTC"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calendarExpansionMax|integer(int32)|false|none|Maximal number of calendars for which FreeBusy information is to be provided. Optional. Maximum value is 50.|
|groupExpansionMax|integer(int32)|false|none|Maximal number of calendar identifiers to be provided for a single group. Optional. An error is returned for a group with more members than this value. Maximum value is 100.|
|items|[[FreeBusyRequestItem](#schemafreebusyrequestitem)]|false|none|List of calendars and/or groups to query.|
|timeMax|string(date-time)|false|none|The end of the interval for the query formatted as per RFC3339.|
|timeMin|string(date-time)|false|none|The start of the interval for the query formatted as per RFC3339.|
|timeZone|string|false|none|Time zone used in the response. Optional. The default is UTC.|

<h2 id="tocSfreebusyrequestitem">FreeBusyRequestItem</h2>

<a id="schemafreebusyrequestitem"></a>

```json
{
  "id": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The identifier of a calendar or a group.|

<h2 id="tocSfreebusyresponse">FreeBusyResponse</h2>

<a id="schemafreebusyresponse"></a>

```json
{
  "calendars": {
    "property1": {
      "busy": [
        {
          "end": "2019-11-22T00:09:35Z",
          "start": "2019-11-22T00:09:35Z"
        }
      ],
      "errors": [
        {
          "domain": "string",
          "reason": "string"
        }
      ]
    },
    "property2": {
      "busy": [
        {
          "end": "2019-11-22T00:09:35Z",
          "start": "2019-11-22T00:09:35Z"
        }
      ],
      "errors": [
        {
          "domain": "string",
          "reason": "string"
        }
      ]
    }
  },
  "groups": {
    "property1": {
      "calendars": [
        "string"
      ],
      "errors": [
        {
          "domain": "string",
          "reason": "string"
        }
      ]
    },
    "property2": {
      "calendars": [
        "string"
      ],
      "errors": [
        {
          "domain": "string",
          "reason": "string"
        }
      ]
    }
  },
  "kind": "calendar#freeBusy",
  "timeMax": "2019-11-22T00:09:35Z",
  "timeMin": "2019-11-22T00:09:35Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calendars|object|false|none|List of free/busy information for calendars.|
|» **additionalProperties**|[FreeBusyCalendar](#schemafreebusycalendar)|false|none|none|
|groups|object|false|none|Expansion of groups.|
|» **additionalProperties**|[FreeBusyGroup](#schemafreebusygroup)|false|none|none|
|kind|string|false|none|Type of the resource ("calendar#freeBusy").|
|timeMax|string(date-time)|false|none|The end of the interval.|
|timeMin|string(date-time)|false|none|The start of the interval.|

<h2 id="tocSsetting">Setting</h2>

<a id="schemasetting"></a>

```json
{
  "etag": "string",
  "id": "string",
  "kind": "calendar#setting",
  "value": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|ETag of the resource.|
|id|string|false|none|The id of the user setting.|
|kind|string|false|none|Type of the resource ("calendar#setting").|
|value|string|false|none|Value of the user setting. The format of the value depends on the ID of the setting. It must always be a UTF-8 string of length up to 1024 characters.|

<h2 id="tocSsettings">Settings</h2>

<a id="schemasettings"></a>

```json
{
  "etag": "string",
  "items": [
    {
      "etag": "string",
      "id": "string",
      "kind": "calendar#setting",
      "value": "string"
    }
  ],
  "kind": "calendar#settings",
  "nextPageToken": "string",
  "nextSyncToken": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Etag of the collection.|
|items|[[Setting](#schemasetting)]|false|none|List of user settings.|
|kind|string|false|none|Type of the collection ("calendar#settings").|
|nextPageToken|string|false|none|Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided.|
|nextSyncToken|string|false|none|Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided.|

<h2 id="tocStimeperiod">TimePeriod</h2>

<a id="schematimeperiod"></a>

```json
{
  "end": "2019-11-22T00:09:35Z",
  "start": "2019-11-22T00:09:35Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|string(date-time)|false|none|The (exclusive) end of the time period.|
|start|string(date-time)|false|none|The (inclusive) start of the time period.|

