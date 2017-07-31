---
title: AsyncAPI Sample v1.0.0
language_tabs:
  - javascript--nodejs: Node.JS
  - javascript: JavaScript
  - python: Python
  - ruby: Ruby
  - java: Java
  - go: Go
toc_footers:
  - '<a href="https://mermade.github.io/shins/index.html">See OpenAPI example</a>'
includes: []
search: true
highlight_theme: darkula
---

# AsyncAPI Sample v1.0.0

> Scroll down for code samples, example headers and payloads. Select a language for code samples from the tabs above or the mobile navigation menu.

This is a simple example of an _AsyncAPI_ document.

Base URLs:

* <a href="mqtt://api.company.com:{port}/{app-id}">mqtt://api.company.com:{port}/{app-id}</a>

    * **app-id** - You can find your `app-id` in our control panel, under the auth tab. Default: demo

    * **port** -  Default: 5676

        * 5676

        * 5677



Base Topic: **hitch**

<a href="You can specify the terms of service here. **It supports Markdown as well.**
">Terms of service</a>


# user

## publish hitch.accounts.1.0.action.user.signup

Note: **Deprecated**

> Example headers

```json
{
  "qos": 1,
  "retainFlag": false
}
```
> Example payload

```json
{
  "user": {
    "full_name": "string",
    "username": "string"
  },
  "signup": {
    "method": "email",
    "datetime": "2017-07-31T17:51:21Z"
  }
}
```
> Code samples

```javascript--nodejs
app.from.client.send({
  topic: 'hitch.accounts.1.0.action.user.signup',
  payload: { user: { full_name: 'string', username: 'string' },
  signup: { method: 'email', datetime: '2017-07-31T17:51:21Z' } }
});
```

```javascript
//Coming soon...
```

```ruby
# Coming soon...
```

```python
//Coming soon...
```

```java
//Coming soon...
```

```go
//Coming soon...
```

*Action to sign a user up.*

Multiline description of what this action does. **It allows Markdown.**

### Headers

#### Properties

Name|Type|Required|Description
---|---|---|---|---|
qos|integer(int32)|false|Quality of Service
retainFlag|boolean|false|This flag determines if the message will be saved by the broker for the specified topic as last known good value. New clients that subscribe to that topic will receive the last retained message on that topic instantly after subscribing. More on retained messages and best practices in one of the next posts. 



### Payload

#### Properties

Name|Type|Required|Description
---|---|---|---|---|
user|[userCreate](#schemausercreate)|false|No description
» full_name|string|false|User full name
» username|string|true|User handle
signup|[signup](#schemasignup)|false|No description
» method|string|true|Signup method
» datetime|string(date-time)|true|Date and Time of the message



<aside class="success">
This operation does not require authentication
</aside>

# Default

## subscribe hitch.accounts.1.0.event.user.signup

> Example payload

```json
{
  "user": {
    "id": "string",
    "full_name": "string",
    "username": "string"
  },
  "signup": {
    "method": "email",
    "datetime": "2017-07-31T17:51:21Z"
  }
}
```
> Code samples

```javascript--nodejs
app.from.client.send({
  topic: 'hitch.accounts.1.0.event.user.signup',
  payload: { user: { id: 'string', full_name: 'string', username: 'string' },
  signup: { method: 'email', datetime: '2017-07-31T17:51:21Z' } }
});
```

```javascript
//Coming soon...
```

```ruby
# Coming soon...
```

```python
//Coming soon...
```

```java
//Coming soon...
```

```go
//Coming soon...
```

### Payload

#### Properties

Name|Type|Required|Description
---|---|---|---|---|
user|[user](#schemauser)|false|No description
» id|string|true|Resource identifier
» full_name|string|false|User full name
» username|string|true|User handle
signup|[signup](#schemasignup)|false|No description
» method|string|true|Signup method
» datetime|string(date-time)|true|Date and Time of the message



<aside class="success">
This operation does not require authentication
</aside>

# Schemas

## id

<a name="schemaid"></a>

```json
"string" 
```

### Properties

Name|Type|Required|Description
---|---|---|---|---|
id|string|false|Resource identifier



## username

<a name="schemausername"></a>

```json
"string" 
```

### Properties

Name|Type|Required|Description
---|---|---|---|---|
username|string|false|User handle



## datetime

<a name="schemadatetime"></a>

```json
"2017-07-31T17:51:21Z" 
```

### Properties

Name|Type|Required|Description
---|---|---|---|---|
datetime|string(date-time)|false|Date and Time of the message



## MQTTQoSHeader

<a name="schemamqttqosheader"></a>

```json
1 
```

### Properties

Name|Type|Required|Description
---|---|---|---|---|
qos|integer(int32)|false|Quality of Service



## MQTTRetainHeader

<a name="schemamqttretainheader"></a>

```json
false 
```

### Properties

Name|Type|Required|Description
---|---|---|---|---|
retainFlag|boolean|false|This flag determines if the message will be saved by the broker for the specified topic as last known good value. New clients that subscribe to that topic will receive the last retained message on that topic instantly after subscribing. More on retained messages and best practices in one of the next posts. 



## user

<a name="schemauser"></a>

```json
{
  "id": "string",
  "full_name": "string",
  "username": "string"
} 
```

### Properties

Name|Type|Required|Description
---|---|---|---|---|
id|string|true|Resource identifier
full_name|string|false|User full name
username|string|true|User handle



## userCreate

<a name="schemausercreate"></a>

```json
{
  "full_name": "string",
  "username": "string"
} 
```

### Properties

Name|Type|Required|Description
---|---|---|---|---|
full_name|string|false|User full name
username|string|true|User handle



## signup

<a name="schemasignup"></a>

```json
{
  "method": "email",
  "datetime": "2017-07-31T17:51:21Z"
} 
```

### Properties

Name|Type|Required|Description
---|---|---|---|---|
method|string|true|Signup method
datetime|string(date-time)|true|Date and Time of the message


#### Enumerated Values

|Property|Value|
|---|---|
method|email|
method|facebook|
method|twitter|
method|github|
method|google|




