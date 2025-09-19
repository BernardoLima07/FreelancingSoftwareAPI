## GROOMING

## _Objectives_

## This project has the objective to solve service problems, hiring a service(Job) post from contractor for solve the problem, agreements are agreed for a stabliished contract between client and contractor.

## _Business Rules_

Contractors post yours services(Jobs), with the payment amount, and clients pay for it.
When a client wants a service, he can choice the service and add to a contract, but he needs has money in the balance for pay to contractor for the service.
In the contracts, contractor_id, client_id, job_id, status, start date and end date are agreeded.
Jobs(Services) are services that contractors do and are paid for it.

---

## _Technical Requirements_

-NPM

```bash
echo npm install
```

-NodeJs
-.env file with API_PORT, SECRET_KEY and DB_PASSWORD

---

## _Authentication Details_

Clients register with name, email and password, same requisits to do login.
As well the clients, contractors too needs name, email and password to register and login.

---

## _Access Control_

## Users needs to login for access endpoints by token JWT disponibilizated when login is sucessfull, if not do login, endpoints such as creating a new contract or creating a new job for example, not be allowed to be accessed.

## _Financial Transaction Rules_

When a job is completed, clients needs to pay the payment amount stablished on job. The balance of client will be desconted by the amount of job and the paided amount will be somated to contractor balance.
Job needs to be completed fot the client to pay.
Clients needs has money in balance sufficient to pay the contractor for the service.

---
