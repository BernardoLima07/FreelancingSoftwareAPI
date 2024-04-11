## MODELLING

*Models*
--------- 
  - Clients: 
    The clients model is responsible for storing detailed information about the clients that use the platform. Each client is identified by an id (client_id) and has fields such as name, email address, password and balance.
    
  - Contractors:
    The contractors model is responsible for storing the contractor's data, just like the client model. Each contractor is identified by an id (client_id) and has fields such as name, email address, password and balance.

  - Jobs:
    The jobs model describes the various tasks or projects available in the software. It has attributes such as identification of the contractor associated with the job, title, description, status and payment amount. This model establishes a relationship with the contractor model, where each job is associated with a specific contractor, with dependence on those jobs.
  
  - Contracts:
    The contracts model records contracts between clients and contractors on the platform. Contains information such as client, contractor and associated service, start dates, contract ends, and current status. This model establishes relationships with client, contractor and job models.
---------
*Endpoints*
---------
  Each endpoint in the API performs a certain function, it has an endpoint to register clients and contractors, to log them in, to view active contracts, among others.
---------

*Authentication And Authorization Mechanisms*
----------
  The authorization mechanism is implemented with JsonWebToken(JWT) and bcrypt to create hash for user password and validate the insired password.
  The authentication mechanism is basically validated and if the validation fails the user data not stored in the database, but if the validation successfull, the user data is stored successfully in the database.
----------