## Development

*Setting Up The Development Environment*
----------
  After cloned the project, you should install the dependencies, for it, just write in your terminal: "npm install", after it, you can use our API with this command line: "npm start".
----------

*API Endpoints*
-----------
  To register a new client: */api/auth/client/registerClient* ---> Name, email and password are required.
  To login a client: */api/auth/client/loginClient* ---> Email and password are required.

  To register a new contractor: */api/auth/contractor/registerContractor* ---> Name, email and password are required.
  To login a contractor: */api/auth/contractor/loginContractor* ---> Email and password are required.

  To post a new job: */api/routes/contractor/job/postJob* ---> Title, description, status and payment amount are required.

  To post a new contract: */api/routes/contract/postContract* ---> Client_id, contractor_id, job_id, start_date, end_date and status are required.

  To get the list of actives contracts: */api/routes/contract/activesContracts/contract_id* ---> client_id is required.
  To get a especific contract: */api/routes/contract/especificContracts* ---> status is required.

  To get the list of most lucrative jobs: */api/routes/contractor/job/mostProfitableJobsReport*
  
  To get the list of highest paid clients: */api/routes/client/highestPayingClientReport*

  To finish the job: */api/routes/finished/contract/:contract_id/job/:job_id* ---> contract_id and job_id are required.

  To pay for the job: */api/routes/client/payment/client/:client_id/job/:job_id* ---> client_id and job_id are required.

  To insert money into client: */api/routes/client/insertMoney/:client_id* ---> client_id is required.
-----------

*Error Handling*
-----------
  To handle errors in API, use the response from API with json, validate the errors sending status code and error message to the user. With the error in log, deal with it.
-----------

*Data Validation*
-----------
  Validate the user data in register and login, when user wrong the data of login, send a status code and error message to user to fix your error.
-----------

*Strategy Tests*
-----------
  Test the connection between entities, validate that all data from each entity is arriving correctly in the database, validate authentications and routes.
-----------