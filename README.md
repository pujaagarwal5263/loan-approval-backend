# How to start guide?
1. Create your env with the following data:
   
```
DB_NAME=credit_approval
DB_USERNAME=root
DB_PASSWORD=password
DB_HOST=127.0.0.1
PORT=3000
```

2. Install dependencies:
```
npm install
```

3. Start the code:
```
npm start
```

# Endpoints Documentation

This documentation provides information about the payload structure required for each endpoint.

## 1. POST: /register

**Description:**
Add a new customer to the customer table with approved limit.

**Request Payload:**

```json
{
    "first_name":"Name1",
    "last_name": "LastName",
    "age":25,
    "monthly_salary":60000,
    "phone_number": 4567845343
}
```

**Response Body:**
```json
{
    "customer_id": 303,
    "name": "Name1 LastName",
    "age": 25,
    "monthly_income": 60000,
    "approved_limit": 2200000,
    "phone_number": 4567845343
}
```


## 2. POST: /check-eligibility
**Description:**
Check loan eligibility.

**Request Payload:**

```json
{
    "customer_id": 4, 
    "loan_amount": 30000, 
    "interest_rate": 20, 
    "tenure": 4
}
```

**Response Body:**
```json
{
    "customer_id": 4,
    "approval": true,
    "interest_rate": 20,
    "corrected_interest_rate": 20,
    "tenure": 4,
    "monthly_payment": 912.9108703157418
}
```

## 3. POST: /create-loan
**Description:**
Process a new loan based on eligibility.

**Request Payload:**

```json
{
    "customer_id": 4, 
    "loan_amount": 30000, 
    "interest_rate": 20, 
    "tenure": 4
}
```

**Response Body:**
```json
{
    "customer_id": 4,
    "approval": true,
    "interest_rate": 20,
    "corrected_interest_rate": 20,
    "tenure": 4,
    "monthly_payment": 912.9108703157418,
    "loan_id": 10002,
    "start_date": "2023-11-17",
    "message": "Loan approved and created successfully"
}
```

## 4. POST: /make-payment
**Description:**
Make Payment for loan.

**Request Payload:**
```json
{
    "payment_amount":200
}
```

**URL Structure:**
```
/make-payment/:customer_id/:loan_id
```

**Response Body:**
```json
{
    "message": "Payment successful",
    "remaining_amount": 712.911
}
```

## 5. GET: /view-statement
**Description:**
View statement of a particular loan taken by the customer.

**URL Structure:**
```
/make-payment/:customer_id/:loan_id
```

**Response Body:**
```json
{
    "customer_id": 4,
    "loan_id": 10002,
    "principal": 30000,
    "interest_rate": 20,
    "amount_paid": 0,
    "monthly_installment": 712.911,
    "repayments_left": 4
}
```

## 6. GET: /view-loan
**Description:**
View loan by loan id.

**URL Structure:**
```
/view-loan/:loan_id
```

**Response Body:**
```json
{
      "customer": {
        "first_name": "Abby",
        "last_name": "Fernandez",
        "phone_number": "9612343117",
        "age": 60
    },
    "loan_amount": 30000,
    "interest_rate": 20,
    "monthly_installment": 512.911,
    "tenure": 4
}
```