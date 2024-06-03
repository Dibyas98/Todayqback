

A brief description of what this project does and who it's for


## API Reference

#### Get items

```http
  GET /api/listing
```
#### Get items By ID

```http
  GET /api/listing/:id
```
| Parameter | Type     | 
| :-------- | :------- | 
| `id` | `string` | 

#### Get user

```http
  GET /api/user/:id
```

| Parameter | Type     | 
| :-------- | :------- | 
| `id` | `string` | 

#### Post user
```http
  POST /api/create
```

| Description                       |
 :-------------------------------- |
| **Required**. {name} |

#### Post bookmark
```http
  POST /bookmark/:actions/:id/:userid
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `actions`      | `string` | **Required**. add/remove |
| `id`      | `string` | **Required**. productid |
| `userid`      | `string` | **Required**. userid |

#### Get item


#### Post Order
```http
  POST /api/order
```

| Description                       |
 :-------------------------------- |
| **Required**. Order Object |

#### Get Order

```http
  GET /api/order
```

#### Post Offering

```http
  POST /api/offer/create
```

| Description                       |
 :-------------------------------- |
| **Required**. Offer Object |

#### Post Cart

```http
  POST /api/cart
```

| Description                       |
 :-------------------------------- |
| **Required**. Cart Object |

#### Post Cart

```http
  GET /api/cart
```
#### Delete Cart

```http
  DELETE /api/cart
```

| Description                       |
 :-------------------------------- |
| **Required**. Cart Object |

#### Delete Cart By id

```http
  DELETE /api/cart/:id
```

| Parameter | Type     | 
| :-------- | :------- | 
| `id` | `string` | 

