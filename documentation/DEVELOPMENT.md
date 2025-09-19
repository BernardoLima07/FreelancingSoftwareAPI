## Development

## _Setting Up The Development Environment_

## After cloned the project, you should install the dependencies, for it, just write in your terminal: "npm install", after it, you can use our API with this command line: "npm start".

## _API Endpoints_

To register a new client: _/api/auth/client/registerClient_ ---> Name, email and password are required.
To login a client: _/api/auth/client/loginClient_ ---> Email and password are required.

To register a new contractor: _/api/auth/contractor/registerContractor_ ---> Name, email and password are required.
To login a contractor: _/api/auth/contractor/loginContractor_ ---> Email and password are required.

To post a new job: _/api/routes/contractor/job/postJob_ ---> Title, description, status and payment amount are required.

To post a new contract: _/api/routes/contract/postContract_ ---> Client_id, contractor_id, job_id, start_date, end_date and status are required.

To get the list of actives contracts: _/api/routes/contract/activesContracts/contract_id_ ---> client_id is required.
To get a especific contract: _/api/routes/contract/especificContracts_ ---> status is required.

To get the list of most lucrative jobs: _/api/routes/contractor/job/mostProfitableJobsReport_

To get the list of highest paid clients: _/api/routes/client/highestPayingClientReport_

To finish the job: _/api/routes/finished/contract/:contract_id/job/:job_id_ ---> contract_id and job_id are required.

To pay for the job: _/api/routes/client/payment/client/:client_id/job/:job_id_ ---> client_id and job_id are required.

## To insert money into client: _/api/routes/client/insertMoney/:client_id_ ---> client_id is required.

## _Error Handling_

## To handle errors in API, use the response from API with json, validate the errors sending status code and error message to the user. With the error in log, deal with it.

## _Data Validation_

## Validate the user data in register and login, when user wrong the data of login, send a status code and error message to user to fix your error.

## _Strategy Tests_

## Test the connection between entities, validate that all data from each entity is arriving correctly in the database, validate authentications and routes.
